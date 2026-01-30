"use client"

import React, { useEffect, useRef, useState } from 'react'
import Data from './Data.json'; // Ensure this path is correct
import { countryCodes } from '@/public/CountryCodes'; // Ensure this path is correct
import { ContactForm } from '@/api/ContactForm/ContactForm'; // Ensure this path is correct
import { EmailSending } from '@/api/EmailApi/EmailSending'; // Ensure this path is correct
import Link from 'next/link';
import { ChevronDown, X, Loader2 } from "lucide-react";
import toast from 'react-hot-toast';
import { CustEmailSending } from '@/api/EmailApi/CustomEmailSending';

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
        region: ""
    })

    const [errors, setErrors] = useState({})
    const [maxPhoneLength, setMaxPhoneLength] = useState("")
    const [minLen, setMinLen] = useState(1);
    const [isLocal, setIsLocal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [isCountyOpen, setIsCountryOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [activeIndex, setActiveIndex] = useState(-1);
    const itemRefs = useRef([]);
    const dropdownRef = useRef(null);
    const triggerRef = useRef(null);

    const [dropdownStyle, setDropdownStyle] = useState({
        width: 0,
        left: 0,
        top: 0,
    });

    const calculateDropdownPosition = () => {
        if (!triggerRef.current) return;

        const rect = triggerRef.current.getBoundingClientRect();

        setDropdownStyle({
            width: rect.width,
            left: rect.left,
            top: rect.bottom + 6, // small gap
        });
    };

    useEffect(() => {
        if (!triggerRef.current) return;

        const resizeObserver = new ResizeObserver(() => {
            calculateDropdownPosition();
        });

        resizeObserver.observe(triggerRef.current);

        window.addEventListener("scroll", calculateDropdownPosition, true);
        window.addEventListener("resize", calculateDropdownPosition);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("scroll", calculateDropdownPosition, true);
            window.removeEventListener("resize", calculateDropdownPosition);
        };
    }, []);


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

    useEffect(() => {
        if (activeIndex >= 0 && itemRefs.current[activeIndex]) {
            itemRefs.current[activeIndex].scrollIntoView({
                block: "nearest",
            });
        }
    }, [activeIndex]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsCountryOpen(false);
                setActiveIndex(-1);
                setSearch("");
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


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
        const selectedCountry = countryCodes.find(c => c.code === formData.country)
        if (type === "sales") {
            return {
                fromEmail: "noreply@optigoapps.com",
                toEmail: ensureArray("sales@orail.in"), // sales email
                cust_toEmail: ensureArray(formData.email), // Customer email
                subject: `New Inquiry Request Received – ${formData.firstName} ${formData.lastName}`,
                cust_subject: `We’ve Received Your Details – OptigoApps`,
                htmlTemplate: `
                    <body style="margin:0; padding:0; background:#f5f7fb; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; color:#0f172a;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                                <td align="center" style="padding:32px 12px;">
                                    <table role="presentation" width="600" class="container" cellspacing="0" cellpadding="0" border="0" style="width:600px; max-width:600px; background:#ffffff; border-radius:14px; box-shadow:0 6px 24px rgba(2,6,23,0.06); overflow:hidden;">
                                        <!-- Header -->
                                        <tr>
                                            <td style="background: #8C8C8C; padding:20px 24px;">
                                                <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                    <tr>
                                                        <td align="left">
                                                            <a href="https://optigoapps.com" target="_blank" style="text-decoration:none;">
                                                                <span style="display:inline-block; font-weight:700; font-size:18px; color:#ffffff; letter-spacing:0.3px;">OptigoApps</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <!-- Greeting / Intro -->
                                        <tr>
                                            <td class="card" style="padding:28px 28px 8px 28px;">
                                                <p style="margin-top: 0;"><strong>Hello Team,</strong></p>
                                                <p style="margin:0; font-size:14px; line-height:22px; color:#334155;">
                                                    A new enquiry has been received through the OptigoApps website enquiry form. Below are the submitted details:
                                                </p>
                                            </td>
                                        </tr>
                                        <!-- Details -->
                                        <tr>
                                            <td class="card" style="padding:8px 28px 8px 28px;">
                                                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:separate; border-spacing:0 8px;">
                                                    <tr>
                                                        <td width="34%" style="font-size:13px; color:#64748b; padding:10px 12px; background:#f8fafc; border-radius:10px 0 0 10px;">Name</td>
                                                        <td style="font-size:14px; color:#0f172a; padding:10px 12px; background:#f1f5f9; border-radius:0 10px 10px 0;">
                                                        ${formData.firstName} ${formData.lastName}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="34%" style="font-size:13px; color:#64748b; padding:10px 12px; background:#f8fafc; border-radius:10px 0 0 10px;">Company Name</td>
                                                        <td style="font-size:14px; color:#0f172a; padding:10px 12px; background:#f1f5f9; border-radius:0 10px 10px 0;">
                                                        ${formData.companyName}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="34%" style="font-size:13px; color:#64748b; padding:10px 12px; background:#f8fafc; border-radius:10px 0 0 10px;">Business Email</td>
                                                        <td style="font-size:14px; color:#0f172a; padding:10px 12px; background:#f1f5f9; border-radius:0 10px 10px 0;">
                                                        <a href="mailto:${formData.email}" style="color:#4f46e5; text-decoration:none;">${formData.email}</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="34%" style="font-size:13px; color:#64748b; padding:10px 12px; background:#f8fafc; border-radius:10px 0 0 10px;">Phone Number</td>
                                                        <td style="font-size:14px; color:#0f172a; padding:10px 12px; background:#f1f5f9; border-radius:0 10px 10px 0;">
                                                        ${formData.mobile}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="34%" style="font-size:13px; color:#64748b; padding:10px 12px; background:#f8fafc; border-radius:10px 0 0 10px;">City</td>
                                                        <td style="font-size:14px; color:#0f172a; padding:10px 12px; background:#f1f5f9; border-radius:0 10px 10px 0;">
                                                        ${formData.region}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="34%" style="font-size:13px; color:#64748b; padding:10px 12px; background:#f8fafc; border-radius:10px 0 0 10px;">Country</td>
                                                        <td style="font-size:14px; color:#0f172a; padding:10px 12px; background:#f1f5f9; border-radius:0 10px 10px 0;">
                                                        ${selectedCountry?.label || ""}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="34%" style="font-size:13px; color:#64748b; padding:10px 12px; background:#f8fafc; border-radius:10px 0 0 10px;">Business Type</td>
                                                        <td style="font-size:14px; color:#0f172a; padding:10px 12px; background:#f1f5f9; border-radius:0 10px 10px 0;">
                                                        ${formData.industry}
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:28px 28px 8px 28px;">
                                            <p style="margin:0; font-size:14px; line-height:22px; color:#334155;">
                                                Please review the details and assign this enquiry to the relevant team member for follow-up.
                                            </p>
                                            </td>
                                        </tr>
                                        <!-- Footer -->
                                        <tr>
                                            <td style="padding:24px 28px 28px 28px;">
                                                <p style="margin:0 0 6px 0; font-size:14px; color:#64748b;">Regards,</p>
                                                <p style="margin:0; font-size:14px;"><strong>OptigoApps System</strong></p>
                                            </td>
                                        </tr>
                                    </table>

                                    <div style="padding:16px 0 0 0; font-size:11px; color:#94a3b8;">
                                        This is an automated notification. Please do not reply to this email.
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </body>
                `,
                cust_htmlTemplate: `
                    <body style="margin:0; padding:0; background:#f5f7fb; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; color:#333333;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                        <td align="center" style="padding:32px 12px;">
                            <table role="presentation" width="600" class="container" cellspacing="0" cellpadding="0" border="0" style="width:600px; max-width:600px; background:#ffffff; border-radius:14px; box-shadow:0 6px 24px rgba(2,6,23,0.06); overflow:hidden;">
                            <!-- Header -->
                            <tr>
                                <td style="background: #8C8C8C; padding:20px 24px;">
                                <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                    <tr>
                                    <td align="left">
                                        <a href="https://optigoapps.com" target="_blank" style="text-decoration:none;">
                                        <span style="display:inline-block; font-weight:700; font-size:18px; color:#ffffff; letter-spacing:0.3px;">OptigoApps</span>
                                        </a>
                                    </td>
                                    </tr>
                                </table>
                                </td>
                            </tr>

                            <!-- Greeting / Intro -->
                            <tr>
                                <td class="card" style="padding:28px 28px 8px 28px;">
                                <p style="margin-top: 0;"><strong>Hi ${formData.firstName},</strong></p>
                                <p style="margin:0; font-size:14px; line-height:22px; color:#334155;">
                                    Thank you for reaching out to <strong>OptigoApps.</strong> <br />
                                    We have successfully received your details. Below is a summary of the information you shared with us:
                                </p>
                                </td>
                            </tr>

                            <!-- Details -->
                            <tr>
                                <td class="card" style="padding:8px 28px 8px 28px;">
                                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:separate; border-spacing:0 8px;">
                                    <tr>
                                    <td width="34%" style="font-size:13px; color:#64748b; padding:10px 12px; background:#f8fafc; border-radius:10px 0 0 10px;">Name</td>
                                    <td style="font-size:14px; color:#0f172a; padding:10px 12px; background:#f1f5f9; border-radius:0 10px 10px 0;">
                                        ${formData.firstName} ${formData.lastName}
                                    </td>
                                    </tr>
                                    <tr>
                                    <td width="34%" style="font-size:13px; color:#64748b; padding:10px 12px; background:#f8fafc; border-radius:10px 0 0 10px;">Company Name</td>
                                    <td style="font-size:14px; color:#0f172a; padding:10px 12px; background:#f1f5f9; border-radius:0 10px 10px 0;">
                                        ${formData.companyName}
                                    </td>
                                    </tr>
                                    <tr>
                                    <td width="34%" style="font-size:13px; color:#64748b; padding:10px 12px; background:#f8fafc; border-radius:10px 0 0 10px;">Business Type</td>
                                    <td style="font-size:14px; color:#0f172a; padding:10px 12px; background:#f1f5f9; border-radius:0 10px 10px 0;">
                                        ${formData.industry}
                                    </td>
                                    </tr>
                                    <tr>
                                    <td width="34%" style="font-size:13px; color:#64748b; padding:10px 12px; background:#f8fafc; border-radius:10px 0 0 10px;">City</td>
                                    <td style="font-size:14px; color:#0f172a; padding:10px 12px; background:#f1f5f9; border-radius:0 10px 10px 0;">
                                        ${formData.region}
                                    </td>
                                    </tr>
                                    <tr>
                                    <td width="34%" style="font-size:13px; color:#64748b; padding:10px 12px; background:#f8fafc; border-radius:10px 0 0 10px;">Country</td>
                                    <td style="font-size:14px; color:#0f172a; padding:10px 12px; background:#f1f5f9; border-radius:0 10px 10px 0;">
                                        ${selectedCountry?.label || ""}
                                    </td>
                                    </tr>
                                    <tr>
                                    <td width="34%" style="font-size:13px; color:#64748b; padding:10px 12px; background:#f8fafc; border-radius:10px 0 0 10px;">Phone Number</td>
                                    <td style="font-size:14px; color:#0f172a; padding:10px 12px; background:#f1f5f9; border-radius:0 10px 10px 0;">
                                        ${formData.mobile}
                                    </td>
                                    </tr>
                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="card" style="padding:28px 28px 8px 28px;">
                                <p style="margin:0; font-size:14px; line-height:22px; color:#334155;">
                                    Our team will review your request and get in touch with you to discuss the next steps. <br />
                                    If you need any immediate assistance, feel free to visit our website.
                                </p>
                                </td>
                            </tr>
                            <!-- Footer -->
                            <tr>
                                <td style="padding:24px 28px 28px 28px; font-size:14px;">
                                <p style="margin:0;">Warm regards,</p>
                                <p style="margin:0;"><strong>Team OptigoApps</strong></p>
                                <p style="margin:0;">
                                    Support:
                                    <a href="tel:+912613603500" style="color:#0a66c2; text-decoration:none;">
                                        +91-261-3603500
                                    </a>
                                </p>
                                <p style="margin:0;">
                                    <a href="mailto:support@orail.in" style="color:#0a66c2; text-decoration:none;">
                                        support@orail.in
                                    </a>
                                </p>
                                <a href="https://optigoapps.com" style="color: #0a66c2; text-decoration: none;">https://optigoapps.com</a>
                                </td>
                            </tr>
                            </table>

                            <div style="padding:16px 0 0 0; font-size:11px; color:#94a3b8;">
                            This is an automated notification. Please do not reply to this email.
                            </div>
                        </td>
                        </tr>
                        </table>
                    </body>
                `,
                mode: "OPTIGO_CONTECT_AND_CARRER",
                ufcc: isLocal ? "orail25" : "test74",
                templateNo: 0
            };
        }

        throw new Error("Invalid email type");
    };

    const validate = () => {
        const newErrors = {};
        const { firstName, lastName, email, companyName, mobile, country, industry, region } = formData;

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
        if (!industry?.trim()) newErrors.industry = "Business Type is required";
        if (!region?.trim()) newErrors.region = "City is required";

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
                    // toast.success(response?.Data?.rd?.[0]?.stat_msg);
                    const emailData = buildEmailData("sales", formData);
                    // const emailResponse = await EmailSending({ emailData });
                    const emailResponse = await CustEmailSending({ emailData });

                    if (emailResponse?.status === 200) {
                        // toast.success(emailResponse?.message);
                        setFormData({ firstName: '', lastName: '', email: '', companyName: '', mobileNoCode: '', mobile: '', country: '', industry: '', region: '' });
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        </div>
                        {/* Business type */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">Business type <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2.5 rounded-lg border appearance-none bg-white ${errors.industry ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-purple-500 focus:ring-purple-100'} focus:outline-none focus:ring-4 transition-all`}
                                    >
                                        <option value="" disabled>Select your Business Type *</option>
                                        {Data?.industries?.map((item) => (
                                            <option key={item} value={item}>{item}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={18} />
                                </div>
                                {errors.industry && <span className="text-xs text-red-500 font-medium">{errors.industry}</span>}
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">City <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="region"
                                    placeholder="City"
                                    value={formData.region}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.region ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-purple-500 focus:ring-purple-100'} focus:outline-none focus:ring-4 transition-all`}
                                />
                                {errors.region && <span className="text-xs text-red-500 font-medium">{errors.region}</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Country */}
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">Country <span className="text-red-500">*</span></label>
                                <div className="relative" ref={dropdownRef}>
                                    <div
                                        ref={triggerRef}
                                        tabIndex={0}
                                        onClick={() => {
                                            setIsCountryOpen(!isCountyOpen);
                                            calculateDropdownPosition();

                                        }}
                                        onBlur={() => {
                                            if (!formData.country) {
                                                setErrors((prev) => ({
                                                    ...prev,
                                                    country: "Please select your country code",
                                                }));
                                            }
                                        }}
                                        className={`w-full px-4 py-2.5 rounded-lg border bg-white cursor-pointer flex items-center justify-between
                                            ${errors.country
                                                ? "border-red-500"
                                                : "border-gray-300 hover:border-purple-500"
                                            }
                                            focus:outline-none focus:ring-4 focus:ring-purple-100 transition-all`}
                                    >
                                        <span className="text-sm text-gray-700">
                                            {formData.country
                                                ? countryCodes.find((c) => c.code === formData.country)?.label +
                                                " (+" +
                                                countryCodes.find((c) => c.code === formData.country)?.phone +
                                                ")"
                                                : "Select Country"}
                                        </span>

                                        <ChevronDown size={18} className="text-gray-400" />
                                    </div>

                                    {/* Dropdown */}
                                    {isCountyOpen && (
                                        <div
                                            className="z-[9999] bg-white border rounded-lg shadow-lg fixed"
                                            style={{
                                                width: dropdownStyle.width,
                                                left: dropdownStyle.left,
                                                top: dropdownStyle.top,
                                            }}
                                        >
                                            {/* Search */}
                                            <input
                                                type="text"
                                                placeholder="Search country or code"
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                                onKeyDown={(e) => {
                                                    const list = countryCodes.filter(
                                                        (c) =>
                                                            c.label.toLowerCase().includes(search.toLowerCase()) ||
                                                            c.code.toLowerCase().includes(search.toLowerCase()) ||
                                                            c.phone.includes(search)
                                                    );

                                                    if (e.key === "ArrowDown") {
                                                        e.preventDefault();
                                                        setActiveIndex((i) => (i < list.length - 1 ? i + 1 : 0));
                                                    }

                                                    if (e.key === "ArrowUp") {
                                                        e.preventDefault();
                                                        setActiveIndex((i) => (i > 0 ? i - 1 : list.length - 1));
                                                    }

                                                    if (e.key === "Enter" && activeIndex >= 0) {
                                                        e.preventDefault();
                                                        const selected = list[activeIndex];
                                                        handleChange({
                                                            target: {
                                                                name: "country",
                                                                value: selected.code,
                                                            },
                                                        });
                                                        setIsCountryOpen(false);
                                                        setSearch("");
                                                        setActiveIndex(-1);
                                                        setErrors(prev => ({ ...prev, country: "" }));
                                                    }
                                                }}
                                                className="w-full px-3 py-2 border-b text-sm outline-none"
                                            />

                                            {/* List */}
                                            <ul className="max-h-60 overflow-auto">
                                                {countryCodes.filter(
                                                    (c) =>
                                                        c.label.toLowerCase().includes(search.toLowerCase()) ||
                                                        c.code.toLowerCase().includes(search.toLowerCase()) ||
                                                        c.phone.includes(search)
                                                )
                                                    .map((country, index) => (
                                                        <li
                                                            key={country.code}
                                                            ref={(el) => (itemRefs.current[index] = el)}
                                                            onMouseEnter={() => setActiveIndex(index)}
                                                            onClick={() => {
                                                                handleChange({
                                                                    target: {
                                                                        name: "country",
                                                                        value: country.code,
                                                                    },
                                                                });
                                                                setIsCountryOpen(false);
                                                                setSearch("");
                                                                setActiveIndex(-1);
                                                                setErrors(prev => ({ ...prev, country: "" }));
                                                            }}
                                                            className={`px-4 py-2 cursor-pointer text-sm
                                                            ${index === activeIndex
                                                                    ? "bg-purple-50"
                                                                    : "hover:bg-gray-100"
                                                                }`}
                                                        >
                                                            {country.label} (+{country.phone})
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    )}
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