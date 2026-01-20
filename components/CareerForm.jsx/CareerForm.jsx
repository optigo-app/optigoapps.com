'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import LoadingModal from '../LoadingModal';
import './CareerForm.scss';
import { countryCodes } from '@/public/CountryCodes';
import jobData from '@/public/jobsOpenings';
import { UploadMedia } from '@/api/initialApi/UploadMedia';
import { CareerFormApi } from '@/api/CareerForm/CareerForm';
import { EmailSending } from '@/api/EmailApi/EmailSending';
import toast from 'react-hot-toast';
import { ChevronDown } from 'lucide-react';

const CareerForm = () => {
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    const ALLOWED_TYPES = [
        'application/msword',                 // .doc
        'application/pdf',                   // .pdf
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
        'image/jpg',
        'image/png'
    ];

    const [isLocal, setIsLocal] = useState(false);

    useEffect(() => {
        setIsLocal(["localhost", "nzen"]?.includes(window.location.hostname));
    }, []);

    const fileInputRef = useRef(null);
    const [resumeFile, setResumeFile] = useState(null);
    const [resumeError, setResumeError] = useState('');
    const [maxLen, setMaxLen] = useState(10);
    const [minLen, setMinLen] = useState(1);

    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        email: '',
        mobileCode: '',
        mobileNoCode: '',
        mobile: '',
        years: '',
        joinDays: '',
        currentLocation: '',
        department: '',
        consent: false,
    });

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (name === "mobileCode") {
            const country = countryCodes.find((c) => c.code === value);
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
            setMaxLen(max);

            setFormData((prev) => ({
                ...prev,
                mobileCode: value,
                mobileNoCode: phoneCode
            }));
        }

        if (name === "mobile") {
            // Only allow digits up to maxLen
            if (value.replace(/\D/g, "").length <= maxLen) {
                setFormData((prev) => ({ ...prev, mobile: value }));
            }
        }

    };

    // ✅ Utility: always wrap into array
    const ensureArray = (val) => Array.isArray(val) ? val : [val];

    // ✅ Helper to build email payload
    const buildEmailData = (type, formData) => {
        if (type === "hr") {
            return {
                fromEmail: "noreply@optigoapps.com",
                toEmail: ensureArray("job@orail.in"), // HR email(s) 
                subject: `New Job Application Received – ${formData.firstName} ${formData.lastName}`,
                // message: `Hi Team, \n A new job application has been submitted. Below are the candidate's details: \n Name: ${formData.firstName} ${formData.middleName} ${formData.lastName} \n Email: ${formData.email} \n Gender: ${formData.gender} \n Phone: ${formData.mobileCode} ${formData.mobile} \n Experience: ${formData.years} \n Available to Join: ${formData.joinDays} days \n Current Location: ${formData.currentLocation} \n Field / Department: ${formData.department} \n Resume: ${formData.fileName} \n Please review and proceed with the next steps. \n Best regards, \n https://optigoapps.com`,
                htmlTemplate: `
                <body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: 'Segoe UI', Roboto, Arial, sans-serif; color: #333333;">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 640px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05); overflow: hidden;">
                    
                    <!-- Header -->
                    <tr>
                    <td style="background-color: #7608AF; padding: 30px 20px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">📥 New Job Application</h1>
                    </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                    <td style="padding: 30px 25px; font-size: 15px; line-height: 1.6;">
                        <p style="margin-top: 0;">Hi Team,</p>
                        <p style="margin-bottom: 24px;">You’ve received a new job application. Here are the details:</p>

                        <table cellpadding="8" cellspacing="0" width="100%" style="border-collapse: collapse; font-size: 14px;">
                        <tr>
                            <td style="font-weight: 600; width: 180px; color: #444;">Name:</td>
                            <td>${formData.firstName} ${formData.middleName} ${formData.lastName}</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                            <td style="font-weight: 600; color: #444;">Email:</td>
                            <td><a href="mailto:${formData.email}" style="color: #0056d2; text-decoration: none;">${formData.email}</a></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 600; color: #444;">Gender:</td>
                            <td>${formData.gender}</td>
                        </tr>
                         <tr style="background-color: #f9f9f9;">
                            <td style="font-weight: 600; color: #444;">Phone:</td>
                            <td><a href="tel:${formData.mobileNoCode}${formData.mobile}" style="color: #0056d2; text-decoration: none;">+${formData.mobileNoCode}-${formData.mobile}</a></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 600; color: #444;">Experience:</td>
                            <td>${formData.years}</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                            <td style="font-weight: 600; color: #444;">Available to Join:</td>
                            <td>${formData.joinDays} ${formData.joinDays === 1 ? "day" : "days"}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: 600; color: #444;">Current Location:</td>
                            <td>${formData.currentLocation}</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                            <td style="font-weight: 600; color: #444;">Field / Department:</td>
                            <td>${formData.department}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: 600; color: #444;">Resume:</td>
                            <td>
                            ${formData.resumeUrl
                        ? `<a href="${formData.resumeUrl}" style="color: #0056d2; text-decoration: none;" target="_blank">${formData.fileName}</a>`
                        : `${formData.fileName}`}
                            </td>
                        </tr>

                        </table>

                        <p style="margin-top: 30px;">Please review the application and proceed with the next steps.</p>

                        <p style="margin-top: 40px;">Best regards,<br />
                        <a href="https://optigoapps.com" style="color: #0056d2; text-decoration: none; font-weight: bold;">Optigoapps</a>
                        </p>
                    </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                    <td style="background-color: #f0f2f5; padding: 15px 20px; text-align: center; font-size: 12px; color: #888;">
                        &copy; ${new Date().getFullYear()} Optigoapps. All rights reserved.
                    </td>
                    </tr>
                </table>
                </body>

                `,
                mode: "career",
                ufcc: isLocal ? "orail25" : "test74",
                templateNo: 0
            };
        }

        if (type === "applicant") {
            return {
                fromEmail: "noreply@optigoapps.com",
                toEmail: ensureArray([formData.email]), // applicant email always array
                subject: `New Job Application Received – ${formData.firstName} ${formData.lastName}`,
                // message: `Hi ${formData.firstName}, \n Thank you for applying to the ${formData.department} position at OptigoApps. \n We’ve received your application and our hiring team is currently reviewing your details. If your profile matches our requirements, we’ll be in touch shortly. \n In the meantime, feel free to explore more about our company at ${"https://optigoapps.com"}. \n Here’s a quick summary of your submission: \n Name: ${formData.firstName} ${formData.middleName} ${formData.lastName} \n Email: ${formData.email} \n Experience: ${formData.years} \n Location: ${formData.currentLocation} \n Available to Join: ${formData.joinDays} days \n Department: ${formData.department} \n Thanks again for your interest in joining our team! \n Best regards, \n HR Team – OptigoApps. \n https://optigoapps.com \n hr@orail.in`,
                htmlTemplate: `
               <body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: 'Segoe UI', Roboto, Arial, sans-serif; color: #333333;">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 640px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05); overflow: hidden;">
                    
                    <!-- Header -->
                    <tr>
                    <td style="background-color: #7608AF; padding: 30px 20px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Thank You for Applying!</h1>
                    </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                    <td style="padding: 30px 25px; font-size: 15px; line-height: 1.6;">
                        <p style="margin-top: 0;">Hi ${formData.firstName},</p>
                        <p>Thank you for applying to the <strong>${formData.department}</strong> position at <strong>OptigoApps</strong>.</p>
                        <p>We've received your application, and our hiring team is currently reviewing your details. If your profile matches our requirements, we'll be in touch shortly.</p>

                        <p>In the meantime, feel free to explore more about our company at: <br />
                        <a href="https://optigoapps.com" style="color: #0a66c2; text-decoration: none;">https://optigoapps.com</a>
                        </p>

                        <h3 style="margin-top: 30px; font-size: 16px; color: #0a66c2;">📝 Application Summary</h3>

                        <table cellpadding="8" cellspacing="0" width="100%" style="border-collapse: collapse; font-size: 14px;">
                        <tr>
                            <td style="font-weight: 600; width: 180px; color: #444;">Name:</td>
                            <td>${formData.firstName} ${formData.middleName} ${formData.lastName}</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                            <td style="font-weight: 600; color: #444;">Email:</td>
                            <td><a href="mailto:${formData.email}" style="color: #0a66c2; text-decoration: none;">${formData.email}</a></td>
                        </tr>
                         <tr style="background-color: #f9f9f9;">
                            <td style="font-weight: 600; color: #444;">Phone:</td>
                            <td><a href="tel:${formData.mobileNoCode}${formData.mobile}" style="color: #0056d2; text-decoration: none;">+${formData.mobileNoCode}-${formData.mobile}</a></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 600; color: #444;">Experience:</td>
                            <td>${formData.years}</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                            <td style="font-weight: 600; color: #444;">Location:</td>
                            <td>${formData.currentLocation}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: 600; color: #444;">Available to Join:</td>
                            <td>${formData.joinDays} ${formData.joinDays === 1 ? "day" : "days"}</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                            <td style="font-weight: 600; color: #444;">Department:</td>
                            <td>${formData.department}</td>
                        </tr>
               

                        </table>

                        <p style="margin-top: 30px;">Thanks again for your interest in joining our team!</p>

                        <p style="margin-top: 30px;">Best regards,<br />
                        <strong>HR Team – OptigoApps</strong><br />
                        <a href="mailto:job@orail.in" style="color: #0a66c2; text-decoration: none;">job@orail.in</a><br />
                        <a href="https://optigoapps.com" style="color: #0a66c2; text-decoration: none;">https://optigoapps.com</a>
                        </p>
                    </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                    <td style="background-color: #f0f2f5; padding: 15px 20px; text-align: center; font-size: 12px; color: #888;">
                        &copy; ${new Date().getFullYear()} OptigoApps. All rights reserved.
                    </td>
                    </tr>
                </table>
                </body>

                `,
                mode: "career",
                ufcc: isLocal ? "orail25" : "test74",
                templateNo: 0
            };
        }

        throw new Error("Invalid email type");
    };

    const handleResumeUpload = (e) => {
        const file = e.target.files[0];
        validateFile(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        validateFile(file);
    };

    const validateFile = (file) => {
        if (!file) return;

        if (!ALLOWED_TYPES.includes(file.type)) {
            setResumeError('Invalid file type. Allowed: .doc, .pdf, .docx, .jpg, .png');
            setResumeFile(null);
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            setResumeError('File size exceeds 10MB limit.');
            setResumeFile(null);
            return;
        }

        setResumeFile(file);
        setResumeError('');
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;

        setIsLoading(true);
        const newErrors = {};

        const {
            firstName,
            middleName,
            lastName,
            gender,
            email,
            mobileCode,
            mobile,
            years,
            joinDays,
            currentLocation,
            department,
            consent
        } = formData;

        // --- Validations ---
        if (!firstName?.trim()) newErrors.firstName = "Please enter your first name";
        if (!middleName?.trim()) newErrors.middleName = "Please enter your middle name";
        if (!lastName?.trim()) newErrors.lastName = "Please enter your last name";
        if (!gender) newErrors.gender = "Please select your gender";

        if (!email) {
            newErrors.email = "Please enter your email";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!mobileCode && !mobile) {
            newErrors.mobileCode = "Please select your country code";
            newErrors.mobile = "Please enter your mobile number";
        } else {
            if (mobileCode == "") {
                newErrors.mobileCode = "Please select your country code";
            }
            if (mobile == "") {
                newErrors.mobile = "Please enter your mobile number";
            } else if (!/^\d+$/.test(mobile)) {
                newErrors.mobile = "Mobile number must contain only numbers";
            } else if (mobile.length < minLen || mobile.length > maxLen) {
                newErrors.mobile =
                    minLen === maxLen
                        ? `Mobile number must be ${maxLen} digits`
                        : `Mobile number must be between ${minLen} and ${maxLen} digits`;
            }
        }

        if (!years?.trim()) newErrors.years = "Please enter your experience in years or months";
        if (!joinDays || parseInt(joinDays) <= 0) newErrors.joinDays = "Please enter the number of days to join";
        if (!currentLocation?.trim()) newErrors.currentLocation = "Please enter your current location";
        if (!department?.trim()) newErrors.department = "Please select your department";
        if (consent !== true) newErrors.consent = "Please accept the terms and conditions";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsLoading(false); // 🔑 reset here
            return;
        }

        if (!resumeFile) {
            setResumeError("Please upload your resume.");
            setIsLoading(false); // 🔑 reset here
            return;
        }

        try {
            // --- Upload Resume ---
            const resumeUpload = await UploadMedia({
                attachments: [{ file: resumeFile }],
                uniqueNo: `${resumeFile?.name}_${Math.random().toString(36).substring(2, 6)}`
            });

            if (!resumeUpload?.success) {
                setResumeError("Resume upload failed. Try again.");
                setIsLoading(false); // 🔑 reset here
                return;
            }

            const updatedFormData = {
                ...formData,
                fileName: resumeUpload?.files?.[0]?.fileName,
                fileUrl: resumeUpload?.files?.[0]?.url,
                file: resumeUpload,
            };

            // --- Submit Career Form ---
            const careerForm = await CareerFormApi(updatedFormData);

            if (careerForm?.Data?.rd?.[0]?.stat === 1) {
                // --- Send Emails ---
                const hrData = buildEmailData("hr", updatedFormData);
                const applicantData = buildEmailData("applicant", updatedFormData);

                // Run separately first for debugging
                await EmailSending({ attachments: [{ file: resumeFile }], emailData: hrData });
                await EmailSending({ attachments: [{ file: resumeFile }], emailData: applicantData });

                toast.success("Form submitted successfully");

                setFormData({
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    gender: '',
                    email: '',
                    mobileCode: '',
                    mobile: '',
                    years: '',
                    joinDays: '',
                    currentLocation: '',
                    department: '',
                    consent: false,
                    fileName: '',
                    fileUrl: '',
                });
                setResumeFile(null);
                setErrors({})
            } else {
                toast.error(careerForm?.Data?.rd?.[0]?.stat_msg || "Error while submitting form");
            }
        } catch (error) {
            console.error("Error during form submission process:", error);
            toast.error("An unexpected error occurred.");
        } finally {
            setIsLoading(false); // ✅ always reset
        }
    };



    return (
        <div className="apply-form">
            <LoadingModal isOpen={isLoading} />
            {/* <h1 className="apply-form-heading">Apply for: {jobSlug.replace(/-/g, ' ')}</h1> */}
            {/* <span onClick={() => navigate.push('/careers')} className="back-link">← Back to all job openings</span> */}

            <div
                className="upload-box"
                onClick={() => fileInputRef.current.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    id="resumeUpload"
                    name="resume"
                    accept=".doc,.docx,.pdf,.jpg,.png"
                    onChange={handleResumeUpload}
                    style={{ display: 'none' }}
                />
                <label htmlFor="resumeUpload" className="upload-link">
                    Upload resume
                </label>
                <p>
                    10MB max file size (Allowed file types are
                    <strong> .doc, .pdf, .docx, .jpg, .png</strong>).
                </p>
                {resumeFile && (
                    <p className="success-text">Uploaded: {resumeFile.name}</p>
                )}
                {resumeError && <p className="error-text">{resumeError}</p>}
            </div>

            <form>
                <div className="form-grid">
                    <div className="form-field">
                        <label htmlFor="firstName">First Name *</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        {errors.firstName && <p className="error-text">{errors.firstName}</p>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="middleName">Middle Name *</label>
                        <input
                            type="text"
                            name="middleName"
                            id="middleName"
                            value={formData.middleName}
                            onChange={handleChange}
                        />
                        {errors.middleName && <p className="error-text">{errors.middleName}</p>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="lastName">Last Name *</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && <p className="error-text">{errors.lastName}</p>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="gender">Gender *</label>
                        <div className="select-wrapper-carform">
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="">Select an option</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>

                            {/* Custom arrow */}
                            <ChevronDown className="select-icon" size={18} />
                        </div>
                        {errors.gender && <p className="error-text">{errors.gender}</p>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>

                    <div className="form-field mobile-field">
                        <label>Mobile Phone *</label>
                        <div className="mobile-inputs">
                            <div className='mobile-input-div'>
                                <div className="select-wrapper-carform">
                                    <select
                                        id="mobileCode"
                                        name="mobileCode"
                                        value={formData.mobileCode}
                                        onChange={(e) => {
                                            handleChange(e);
                                            if (errors.mobileCode) {
                                                setErrors(prev => ({ ...prev, mobileCode: "" }));
                                            }
                                        }}
                                        onBlur={() => {
                                            if (!formData.mobileCode) {
                                                setErrors(prev => ({ ...prev, mobileCode: "Please select your country code" }));
                                            }
                                        }}
                                        className={errors.mobileCode ? "error" : ""}
                                    >
                                        <option value="">Select</option>
                                        {countryCodes.map((country) => (
                                            <option key={country.code} value={country.code}>
                                                {country.label} (+{country.phone})
                                            </option>
                                        ))}
                                    </select>

                                    {/* Custom arrow */}
                                    <ChevronDown className="select-icon" size={18} />
                                </div>
                            </div>

                            <input
                                type="tel"
                                name="mobile"
                                id="mobile"
                                value={formData.mobile}
                                maxLength={maxLen}
                                onChange={handleChange}
                                placeholder="Phone number"
                            />
                        </div>
                        <p style={{ marginTop: "0.5rem", color: "#555" }}>
                            Max {maxLen} digits allowed for selected country
                        </p>
                        {errors.mobileCode && <span className="error-text">{errors.mobileCode}</span>}
                        {errors.mobile && <p className="error-text">{errors.mobile}</p>}
                    </div>

                    <div className="form-field experience-field">
                        <label>Work Experience (e.g., 2 Years / 12 Months) *</label>
                        <div className="experience-inputs">
                            <input
                                type="text"
                                placeholder="Years"
                                name='years'
                                id="years"
                                value={formData.years}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.years && <p className="error-text">{errors.years}</p>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="joinDays">Available To Join (in days) *</label>
                        <input
                            type="text"
                            name="joinDays"
                            id="joinDays"
                            value={formData.joinDays}
                            onChange={(e) => {
                                const value = e.target.value;
                                // Allow only digits
                                if (/^\d*$/.test(value)) {
                                    handleChange(e);
                                }
                            }}
                            placeholder="Enter number of days"
                        />
                        {errors.joinDays && <p className="error-text">{errors.joinDays}</p>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="currentLocation">Current Location *</label>
                        <input
                            type="text"
                            name="currentLocation"
                            id="currentLocation"
                            value={formData.currentLocation}
                            onChange={handleChange}
                        />
                        {errors.currentLocation && <p className="error-text">{errors.currentLocation}</p>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="department">Select Field/Department *</label>
                        <div className="select-wrapper-carform">
                            <select
                                id="department"
                                name="department"
                                value={formData.department}
                                onChange={(e) => {
                                    handleChange(e);
                                    if (errors.department) {
                                        setErrors((prev) => ({ ...prev, department: "" }));
                                    }
                                }}
                                onBlur={() => {
                                    if (!formData.department) {
                                        setErrors((prev) => ({ ...prev, department: "Please select a department." }));
                                    }
                                }}
                                className={errors.department ? "error" : ""}
                            >
                                <option value="">Select</option>
                                {jobData.map((job) => (
                                    <option key={job.id} value={job.title}>
                                        {job.title}
                                    </option>
                                ))}
                            </select>

                            {errors.department && (
                                <span className="error-text">{errors.department}</span>
                            )}

                            {/* Custom arrow */}
                            <ChevronDown className="select-icon" size={18} />
                        </div>
                    </div>
                </div>

                <label className="consent-checkbox">
                    <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent === true}
                        onChange={handleChange}
                    />
                    <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
                        By applying, you hereby accept the data processing terms under the and give consent to processing of the data as part of this job application.
                        {errors.consent && <p className="error-text">{errors.consent}</p>}
                    </div>
                </label>

                <div className='submit-div'>
                    <button type="submit" className="submit-btn" onClick={handleSubmit} disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Apply Now'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CareerForm;
