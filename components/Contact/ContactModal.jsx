"use client"

import React, { useEffect, useState } from 'react'
import Data from './Data.json'; // Ensure this path is correct
import { countryCodes } from '@/public/CountryCodes'; // Ensure this path is correct
import { ContactForm } from '@/api/ContactForm/ContactForm'; // Ensure this path is correct
import { EmailSending } from '@/api/EmailApi/EmailSending'; // Ensure this path is correct
import Link from 'next/link';
import { ChevronDown, X, Loader2 } from "lucide-react";
import toast from 'react-hot-toast';

const ContactModal = ({ isOpen, onClose }) => {
    // --- State Management ---
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        mobileNoCode: "",
        mobile: "",
        country: "",
        industry: "",
    })

    const [errors, setErrors] = useState({})
    const [maxPhoneLength, setMaxPhoneLength] = useState("")
    const [minLen, setMinLen] = useState(1);
    const [isLocal, setIsLocal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // --- Effects ---

    // Check environment
    useEffect(() => {
        setIsLocal(["localhost", "nzen"]?.includes(window.location.hostname));
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isOpen]);

    // Handle Escape key to close
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Update Phone Max Length when Country Changes
    useEffect(() => {
        const selected = countryCodes.find(c => c.code === formData.country);
        if (selected) {
            if (Array.isArray(selected.phoneLength)) {
                setMaxPhoneLength(Math.max(...selected.phoneLength));
            } else if (selected.min && selected.max) {
                setMaxPhoneLength(selected.max);
            } else if (selected.phoneLength) {
                setMaxPhoneLength(selected.phoneLength);
            } else {
                setMaxPhoneLength(15);
            }
        }
    }, [formData.country]);


    const ensureArray = (val) => Array.isArray(val) ? val : [val];

    const buildEmailData = (type, formData) => {
        if (type === "sales") {
            return {
                fromEmail: "noreply@optigoapps.com",
                toEmail: ensureArray("sales@orail.in"),
                subject: `New Inquiry Request Received – ${formData.firstName} ${formData.lastName}`,
                htmlTemplate: `
                     <body style="margin:0; padding:0; background:#f5f7fb; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; color:#0f172a;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td align="center" style="padding:32px 12px;">
                              <table role="presentation" width="600" class="container" cellspacing="0" cellpadding="0" border="0" style="width:600px; max-width:600px; background:#ffffff; border-radius:14px; box-shadow:0 6px 24px rgba(2,6,23,0.06); overflow:hidden;">
                                <tr>
                                  <td style="background: #7608AF; padding:20px 24px;">
                                    <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                      <tr>
                                        <td align="left">
                                            <span style="display:inline-block; font-weight:700; font-size:18px; color:#ffffff; letter-spacing:0.3px;">OptigoApps</span>
                                        </td>
                                        <td align="right">
                                          <span style="display:inline-block; font-size:12px; color:#ffffff;">New Lead</span>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="card" style="padding:28px 28px 8px 28px;">
                                    <h1 style="margin:0 0 8px 0; font-size:20px; line-height:1.4; color:#0f172a;">Hi Team,</h1>
                                    <p style="margin:0; font-size:14px; line-height:22px; color:#334155;">
                                      A new lead has submitted the contact form. Below are the details:
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="card" style="padding:8px 28px 8px 28px;">
                                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:separate; border-spacing:0 8px;">
                                      ${Object.entries({
                                            Name: `${formData.firstName} ${formData.lastName}`,
                                            "Company Name": formData.companyName,
                                            "Business Email": formData.email,
                                            "Phone Number": formData.mobile,
                                            "Country / Region": formData.country,
                                            Industry: formData.industry
                                        }).map(([key, val]) => `
                                          <tr>
                                            <td width="34%" style="font-size:13px; color:#64748b; padding:10px 12px; background:#f8fafc; border-radius:10px 0 0 10px;">${key}</td>
                                            <td style="font-size:14px; color:#0f172a; padding:10px 12px; background:#f1f5f9; border-radius:0 10px 10px 0;">${val}</td>
                                          </tr>
                                      `).join('')}
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </body>
                `,
                mode: "contact",
                ufcc: isLocal ? "orail25" : "test74",
                templateNo: 0
            };
        }
        throw new Error("Invalid email type");
    };

    const validate = () => {
        const newErrors = {};
        const { firstName, lastName, email, companyName, mobile, country, industry } = formData;
        
        if (!firstName?.trim()) newErrors.firstName = "First Name is required";
        if (!lastName?.trim()) newErrors.lastName = "Last Name is required";
        if (!email?.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
        
        if (!companyName?.trim()) newErrors.companyName = "Company Name is required";

        if (!mobile) newErrors.mobile = "Please enter your mobile number";
        else if (!/^\d+$/.test(mobile)) newErrors.mobile = "Numbers only";
        else if (mobile.length < minLen || mobile.length > maxPhoneLength) {
            newErrors.mobile = minLen === maxPhoneLength 
                ? `Must be ${maxPhoneLength} digits` 
                : `Between ${minLen}-${maxPhoneLength} digits`;
        }

        if (!country?.trim()) newErrors.country = "Country is required";
        if (!industry?.trim()) newErrors.industry = "Industry is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === "country") {
            const country = countryCodes.find((c) => c.label === value);
            let phoneCode = '';
            let min = 1;
            let max = 15;

            if (country) {
                phoneCode = country.phone;
                if (Array.isArray(country.phoneLength)) {
                    min = Math.min(...country.phoneLength);
                    max = Math.max(...country.phoneLength);
                } else if (country.phoneLength) {
                    min = country.phoneLength;
                    max = country.phoneLength;
                } else if (country.min && country.max) {
                    min = country.min;
                    max = country.max;
                }
            }

            setMinLen(min);
            setMaxPhoneLength(max);
            setFormData((prev) => ({ ...prev, mobileNoCode: phoneCode }));
        }

        setErrors(prev => ({ ...prev, [name]: '' }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;

        if (validate()) {
            setIsLoading(true);
            try {
                const response = await ContactForm(formData);
                if (response?.Data?.rd?.[0]?.stat === 1) {
                    toast.success(response?.Data?.rd?.[0]?.stat_msg);
                    const emailData = buildEmailData("sales", formData);
                    const emailResponse = await EmailSending({ emailData });

                    if (emailResponse?.status === 200) {
                        toast.success(emailResponse?.message);
                        setFormData({ firstName: '', lastName: '', email: '', companyName: '', mobileNoCode: '', mobile: '', country: '', industry: '' });
                        setErrors({});
                        setMaxPhoneLength("");
                        // Optional: Close modal on success after delay
                        setTimeout(() => onClose(), 2000);
                    } else {
                        toast.error(emailResponse?.message || "Error sending email");
                    }
                } else {
                    toast.error(response?.Data?.rd?.[0]?.stat_msg || "Error submitting form");
                }
            } catch (error) {
                console.error("Error:", error);
                toast.error("An unexpected error occurred");
            } finally {
                setIsLoading(false);
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop - Click to Close */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
                
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10 rounded-t-2xl">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Let's Connect</h2>
                        <p className="text-sm text-gray-500 mt-1">We'll get back to you within 24 hours.</p>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-600"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Scrollable Form Body */}
                <div className="p-6 overflow-y-auto custom-scrollbar">
                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* First Name */}
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">First Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Jane"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.firstName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-purple-500 focus:ring-purple-100'} focus:outline-none focus:ring-4 transition-all`}
                                />
                                {errors.firstName && <span className="text-xs text-red-500 font-medium">{errors.firstName}</span>}
                            </div>

                            {/* Last Name */}
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">Last Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.lastName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-purple-500 focus:ring-purple-100'} focus:outline-none focus:ring-4 transition-all`}
                                />
                                {errors.lastName && <span className="text-xs text-red-500 font-medium">{errors.lastName}</span>}
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-gray-700">Business Email <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                name="email"
                                placeholder="name@company.com"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-2.5 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-purple-500 focus:ring-purple-100'} focus:outline-none focus:ring-4 transition-all`}
                            />
                            {errors.email && <span className="text-xs text-red-500 font-medium">{errors.email}</span>}
                        </div>

                        {/* Company */}
                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-gray-700">Company Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="companyName"
                                placeholder="Acme Inc."
                                value={formData.companyName}
                                onChange={handleChange}
                                className={`w-full px-4 py-2.5 rounded-lg border ${errors.companyName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-purple-500 focus:ring-purple-100'} focus:outline-none focus:ring-4 transition-all`}
                            />
                            {errors.companyName && <span className="text-xs text-red-500 font-medium">{errors.companyName}</span>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Country */}
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">Country <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2.5 rounded-lg border appearance-none bg-white ${errors.country ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-purple-500 focus:ring-purple-100'} focus:outline-none focus:ring-4 transition-all`}
                                    >
                                        <option value="">Select Country</option>
                                        {countryCodes.map((c) => (
                                            <option key={c.code} value={c.label}>{c.label} (+{c.phone})</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={18} />
                                </div>
                                {errors.country && <span className="text-xs text-red-500 font-medium">{errors.country}</span>}
                            </div>

                            {/* Phone */}
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">Phone <span className="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    placeholder="Phone Number"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    maxLength={maxPhoneLength}
                                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.mobile ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-purple-500 focus:ring-purple-100'} focus:outline-none focus:ring-4 transition-all`}
                                />
                                {errors.mobile && <span className="text-xs text-red-500 font-medium">{errors.mobile}</span>}
                            </div>
                        </div>

                        {/* Industry */}
                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-gray-700">Industry <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <select
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2.5 rounded-lg border appearance-none bg-white ${errors.industry ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-purple-500 focus:ring-purple-100'} focus:outline-none focus:ring-4 transition-all`}
                                >
                                    <option value="" disabled>Select your Industry</option>
                                    {Data?.industries?.map((item) => (
                                        <option key={item} value={item}>{item}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={18} />
                            </div>
                            {errors.industry && <span className="text-xs text-red-500 font-medium">{errors.industry}</span>}
                        </div>

                        {/* Privacy Disclaimer */}
                        <p className="text-xs text-gray-500 leading-relaxed pt-2">
                            By clicking “Submit” you agree that we may process your personal data in accordance with our <Link href="/privacy-policy" className="text-purple-600 hover:underline">Privacy Policy</Link>.
                        </p>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    <span>Submitting...</span>
                                </>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactModal;