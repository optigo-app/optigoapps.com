"use client"

import React, { useEffect, useRef, useState } from 'react'
import './Contact.scss';
import Data from './Data.json';
import { countryCodes } from '@/public/CountryCodes';
import { ContactForm } from '@/api/ContactForm/ContactForm';
import Link from 'next/link';
import { ChevronDown } from "lucide-react";
import toast from 'react-hot-toast';
import LoadingModal from '../LoadingModal';
import { CustEmailSending } from '@/api/EmailApi/CustomEmailSending';
import ReCAPTCHA from "react-google-recaptcha";
import { Recaptcha } from '@/api/RecaptchaApi/recaptcha';
import { getUserIpAndLocation } from '@/utils/getUserLocation';

const Contact = () => {
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
    const [maxPhoneLength, setMaxPhoneLength] = useState("") // default fallback
    const [minLen, setMinLen] = useState(1);
    const [isLocal, setIsLocal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [captchaToken, setCaptchaToken] = useState(null);
    const recaptchaRef = useRef();

    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [activeIndex, setActiveIndex] = useState(-1);
    const itemRefs = useRef([]);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setIsLocal(["localhost", "nzen"]?.includes(window.location.hostname));
    }, []);

    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                setIsSuccess(false);
            }, 8000);

            return () => clearTimeout(timer);
        }
    }, [isSuccess]);

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
                setIsOpen(false);
                setActiveIndex(-1);
                setSearch("");
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    // useEffect(() => {
    //     if (typeof window !== 'undefined' && window.location.hash === '#contact-section') {
    //         const el = document.getElementById('contact-section');
    //         if (el) {
    //             el.scrollIntoView({ behavior: 'smooth' });
    //         }
    //     }
    // }, []);

    const ensureArray = (val) => Array.isArray(val) ? val : [val];

    const buildEmailData = (type, formData, locationData = null) => {
        const selectedCountry = countryCodes.find(c => c.code === formData.country)
        if (type === "sales") {
            return {
                fromEmail: "noreply@optigoapps.com",
                toEmail: ensureArray("sales@orail.in"), // sales email
                cust_toEmail: ensureArray(formData.email), // Customer email
                subject: `New Inquiry Request Received – ${formData.firstName} ${formData.lastName}`,
                cust_subject: `We’ve Received Your Details – OptigoApps`,
                // message: `Hi Team, \n A new lead has submitted the contact form. Below are the details: \n\n Name: ${formData.firstName} ${formData.lastName} \n\n Company Name: ${formData.companyName} \n\n Business Email: ${formData.email} \n\n Phone Number: ${formData.mobile} \n\n Country / Region: ${formData.country} \n\n Industry: ${formData.industry} \n\n Please reach out to the lead within 24 business hours. \n\n Regards, \n\n https://optigoapps.com`,
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
                                                    ${locationData ? `
                                                    <tr>
                                                        <td width="34%" style="font-size:13px; color:#64748b; padding:10px 12px; background:#f8fafc; border-radius:10px 0 0 10px;">IP Address</td>
                                                        <td style="font-size:14px; color:#0f172a; padding:10px 12px; background:#f1f5f9; border-radius:0 10px 10px 0;">
                                                        ${locationData.ip || "N/A"}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="34%" style="font-size:13px; color:#64748b; padding:10px 12px; background:#f8fafc; border-radius:10px 0 0 10px;">Latitude</td>
                                                        <td style="font-size:14px; color:#0f172a; padding:10px 12px; background:#f1f5f9; border-radius:0 10px 10px 0;">
                                                        ${locationData.latitude ?? "N/A"}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="34%" style="font-size:13px; color:#64748b; padding:10px 12px; background:#f8fafc; border-radius:10px 0 0 10px;">Longitude</td>
                                                        <td style="font-size:14px; color:#0f172a; padding:10px 12px; background:#f1f5f9; border-radius:0 10px 10px 0;">
                                                        ${locationData.longitude ?? "N/A"}
                                                        </td>
                                                    </tr>` : ""}
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
                otherdata: JSON.stringify({firstName:formData.firstName, lastName: formData.lastName,email: formData.email,companyName: formData.companyName,industry: formData.industry,region: formData.region,country: selectedCountry?.label || "",mobile: `+${selectedCountry?.phone || "91"} ${formData.mobile || ""}`}),
                mode: "OPTIGO_CONTECT_AND_CARRER",
                ufcc: isLocal ? "orail25" : "test74",
                templateNo: 0
            };
        }

        throw new Error("Invalid email type");
    };

    // ✅ when country changes, update phone maxLength
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
                setMaxPhoneLength(15); // fallback
            }
        }
    }, [formData.country]);

    const validate = () => {
        const newErrors = {};

        const { firstName, lastName, email, companyName, mobile, country, industry, region } = formData;
        if (!firstName?.trim()) newErrors.firstName = "First Name is required";
        if (!lastName?.trim()) newErrors.lastName = "Last Name is required";
        if (!email?.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }
        if (!companyName?.trim()) newErrors.companyName = "Company Name is required";

        if (!mobile) {
            newErrors.mobile = "Please enter your mobile number";
        } else if (!/^\d+$/.test(mobile)) {
            newErrors.mobile = "Mobile number must contain only numbers";
        } else if (mobile.length < minLen || mobile.length > maxPhoneLength) {
            if (minLen === maxPhoneLength) {
                newErrors.mobile = `Mobile number must be ${maxPhoneLength} digits`;
            } else {
                newErrors.mobile = `Mobile number must be between ${minLen} and ${maxPhoneLength} digits`;
            }
        }

        if (!country?.trim()) newErrors.country = "Country is required";
        if (!industry?.trim()) newErrors.industry = "Business Type is required";
        if (!region?.trim()) newErrors.region = "City is required";

        // if (!captchaToken) {
        //     newErrors.captcha = "Please verify that you are not a robot";
        // }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))

        if (name === "country") {
            const country = countryCodes.find((c) => c.label === value);
            let phoneCode = '';
            let min = 1;
            let max = 15; // Default max length

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

            setFormData((prev) => ({
                ...prev,
                mobileNoCode: phoneCode,
            }));
        }

        setErrors(prev => ({ ...prev, [name]: '' }));
    }

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;

        if (validate()) {
            setIsLoading(true);
            try {
                // const response = await ContactForm(formData);
                // if (response?.Data?.rd?.[0]?.stat === 1) {
                    // toast.success(response?.Data?.rd?.[0]?.stat_msg);
                    // const isValid = await Recaptcha(captchaToken);
                    // const newErrors = {};
                    // if(!isValid) {
                    //     newErrors.captcha = "Captcha verification failed. Please try again.";
                    // }

                    const locationData = await getUserIpAndLocation();
                    const emailData = buildEmailData("sales", formData, locationData);
                    const emailResponse = await CustEmailSending({ emailData});

                    if (emailResponse?.status === 200) {
                        // toast.success(emailResponse?.message);
                        setFormData({
                            firstName: '',
                            lastName: '',
                            email: '',
                            companyName: '',
                            mobileNoCode: '',
                            mobile: '',
                            country: '',
                            industry: '',
                            region: ''
                        });

                        // setCaptchaToken(null);
                        // recaptchaRef.current.reset();

                        setErrors({});
                        setMaxPhoneLength("");
                        setIsSuccess(true);
                    } else {
                        toast.error(emailResponse?.message || "Error while sending email");
                    }
                // } else {
                //     toast.error(response?.Data?.rd?.[0]?.stat_msg || "Error while submitting form");
                // }
            } catch (error) {
                console.error("Error during form submission:", error);
                toast.error("An unexpected error occurred");
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <section className="contact-section" id="contact-section">
            <LoadingModal isOpen={isLoading} />
            <h2>Let's Connect</h2>
            <p>Contact us and we'll have a Business Development Representative contact you within 24 business hours.</p>

            {isSuccess ? (
                <div className="contact-success-box">
                    <div className="success-icon">✔</div>
                    <h3><strong>Thank you for contacting Optigo!</strong></h3>
                    <p>
                        Your inquiry has been successfully submitted.
                        Our Business Development team will contact you shortly.
                    </p>

                    <button
                        className="submit-btn"
                        onClick={() => setIsSuccess(false)}
                    >
                        Submit another request
                    </button>
                </div>
            ) : (
                <form className="form-grid" onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label>First Name <span>*</span></label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={errors.firstName ? 'error-input' : ''}
                        />
                        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                    </div>
                    <div className="form-group">
                        <label>Last Name <span>*</span></label>
                        <input
                            type='text'
                            name='lastName'
                            placeholder='Last Name'
                            value={formData.lastName}
                            onChange={handleChange}
                            className={errors.lastName ? 'error-input' : ''}
                        />
                        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                    </div>
                    <div className="form-group">
                        <label>Business Email <span>*</span></label>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error-input' : ''}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label>Company Name <span>*</span></label>
                        <input
                            type='text'
                            name='companyName'
                            placeholder='Company Name'
                            value={formData.companyName}
                            onChange={handleChange}
                            className={errors.companyName ? 'error-input' : ''}
                        />
                        {errors.companyName && <span className="error-message">{errors.companyName}</span>}
                    </div>
                    <div className="form-group">
                        <label>Business type <span>*</span></label>

                        <div className="select-wrapper-contact">
                            <select
                                name="industry"
                                value={formData.industry || ""}
                                onChange={handleChange}
                                className={errors.industry ? "error-input" : ""}
                                required
                            >
                                <option value="" disabled>
                                    Select Your Business Type
                                </option>
                                {Data?.industries?.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>

                            {/* Custom Lucide arrow */}
                            <ChevronDown className="select-icon" size={18} />
                        </div>
                        {errors.industry && <span className="error-message">{errors.industry}</span>}
                    </div>
                    <div className="form-group">
                        <label>City <span>*</span></label>
                        <input
                            type='text'
                            name='region'
                            placeholder='City'
                            value={formData.region}
                            onChange={handleChange}
                            className={errors.region ? 'error-input' : ''}
                        />
                        {errors.region && <span className="error-message">{errors.region}</span>}
                    </div>
                    <div className="form-group">
                        <label>Country <span>*</span></label>
                        <div className="select-wrapper-contact1" ref={dropdownRef}>
                            <div
                                className={`custom-select-box ${errors.country ? "error-input" : ""}`}
                                onClick={() => setIsOpen(!isOpen)}
                                onBlur={() => {
                                    if (!formData.country) {
                                        setErrors(prev => ({ ...prev, country: "Please select your country code" }));
                                    }
                                }}
                                tabIndex={0}
                            >
                                {formData.country
                                    ? countryCodes.find(c => c.code === formData.country)?.label +
                                    " (+" +
                                    countryCodes.find(c => c.code === formData.country)?.phone +
                                    ")"
                                    : "Select Country"}

                                <ChevronDown className="select-icon" size={18} />
                            </div>
                            {isOpen && (
                                <div className="custom-dropdown-box">
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
                                                setActiveIndex(i => (i < list.length - 1 ? i + 1 : 0));
                                            }

                                            if (e.key === "ArrowUp") {
                                                e.preventDefault();
                                                setActiveIndex(i => (i > 0 ? i - 1 : list.length - 1));
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

                                                setIsOpen(false);
                                                setSearch("");
                                                setActiveIndex(-1);
                                                setErrors(prev => ({ ...prev, country: "" }));
                                            }
                                        }}

                                    />

                                    <ul>
                                        {countryCodes
                                            .filter(
                                                (c) =>
                                                    c.label.toLowerCase().includes(search.toLowerCase()) ||
                                                    c.code.toLowerCase().includes(search.toLowerCase()) ||
                                                    c.phone.includes(search)
                                            )
                                            .map((country, index) => (
                                                <li
                                                    ref={(el) => (itemRefs.current[index] = el)}
                                                    key={country.code}
                                                    className={
                                                        `${index === activeIndex ? "active" : ""}
                                                            ${index < 6 ? "top-highlight" : ""}`
                                                    }
                                                    style={{
                                                        borderBottom: index === 5 ? "1px solid #dedede" : "none"
                                                    }}
                                                    onMouseEnter={() => setActiveIndex(index)}
                                                    onClick={() => {
                                                        handleChange({
                                                            target: {
                                                                name: "country",
                                                                value: country.code,
                                                            },
                                                        });
                                                        setIsOpen(false);
                                                        setSearch("");
                                                        setActiveIndex(-1);
                                                        setErrors(prev => ({ ...prev, country: "" }));
                                                    }}
                                                >
                                                    <span> {country.label} (+{country.phone}) </span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )}
                        </div>
                        {errors.country && <span className="error-message">{errors.country}</span>}
                    </div>

                    <div className="form-group">
                        <label>Phone <span>*</span></label>
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Phone Number"
                            value={formData.mobile}
                            onChange={handleChange}
                            maxLength={maxPhoneLength}
                            className={errors.mobile ? 'error-input' : ''}
                        />
                        {errors.mobile && <span className="error-message">{errors.mobile}</span>}
                        {maxPhoneLength !== "" && (
                            <small style={{ color: "#555" }}>
                                Max length is {maxPhoneLength} digits
                            </small>
                        )}
                    </div>
                    {/* <div className="form-group full-width">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={'6LeiDcYsAAAAANDAGyZ3K0S79WOS5RZptGZB_ZLq'}
                            onChange={handleCaptchaChange}
                        />
                        {errors.captcha && (
                            <span className="error-message">{errors.captcha}</span>
                        )}
                    </div> */}
                    <div className="form-group full-width"
                        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                        <button type="submit" className="submit-btn" disabled={isLoading}>
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
            )}
            <p className="disclaimer">
                By clicking “Submit” you agree that we may process your personal data provided in the above form for communicating with you as our potential or actual customer as described in our <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>
        </section >
    )
}

export default Contact;
