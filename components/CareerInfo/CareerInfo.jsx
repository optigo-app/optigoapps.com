'use client'

// InforCareers.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Careerinfo.scss';
import { ChevronRight, MapPin, GraduationCap, Timer, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import jobData from '@/public/jobsOpenings';
import { useRouter } from 'next/navigation';
import CompanyCulture from '../CompanyCulture/CompanyCulture';
import HRDetails from '../HrDetails/HRDetails';
import Link from 'next/link';
import { useHandleUrlNavigation } from '@/utils/useHandleUrlNavigation';
import EmployeeBenefits from '../EmployeeBenefits/EmployeeBenefits';
import ModernGallery from './Banner';
import { FaArrowRight } from 'react-icons/fa';

const ITEMS_PER_PAGE = 10;

const Careerinfo = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [openTooltipId, setOpenTooltipId] = useState(null);
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [location, setLocation] = useState('');
    const [debouncedLocation, setDebouncedLocation] = useState('');
    const jobListRef = useRef(null);
    const handleUrlNavigation = useHandleUrlNavigation();

    const router = useRouter();
    const departments = [];
    const getDept = jobData?.filter((job) => {
        departments.push(job.title);
    })

    const scrollToJobs = () => {
        jobListRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        setLoading(true);

        const handler = setTimeout(() => {
            setDebouncedLocation(location);
            setLoading(false);
        }, 800);

        return () => clearTimeout(handler);
        getDept;
    }, [location]);

    const filteredJobs = jobData.filter(job => {
        const matchesDepartment = selectedDepartment ? job.title === selectedDepartment : true;
        const matchesLocation = debouncedLocation
            ? job.location.toLowerCase().includes(debouncedLocation.toLowerCase())
            : true;
        return matchesDepartment && matchesLocation;
    });

    const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);

    const currentJobs = filteredJobs.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setLoading(true);
            setCurrentPage(page);
            setTimeout(() => {
                setLoading(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 1000);
        }
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const handleFilterSubmit = () => {
        setSelectedDepartment("");
        setLocation("");
        // setCurrentPage(1);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="optigoapps-careers">
              <ModernGallery scrollToJobs={scrollToJobs} />
            {/* <header className="header">
                <div className="banner">
                    <div className="overlay">
                        <div className="banner-text animated-text">
                            <h1>
                                <span className="banner-text-highlight">
                                    <svg className="border-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <rect
                                            x="2"
                                            y="2"
                                            width="96"
                                            height="96"
                                            rx="8"
                                            ry="8"
                                            fill="none"
                                            stroke="#7c3aed"
                                            strokeWidth="1.5"
                                            strokeDasharray="400"
                                            strokeDashoffset="400"
                                        />
                                    </svg>
                                    Turn Dreams
                                </span>{" "}
                                Into Action
                            </h1>
                            <div className="check-banner-div">
                                <button className="check-banner-btn" onClick={scrollToJobs}>Check Current Openings</button>
                            </div>
                        </div>
                        <img
                            className="banner-img"
                            src="/career-banner1.jpg"
                            alt="Banner"
                        />
                    </div>
                </div>
            </header> */}

            <div className="dropdown_div">
                <div className="dropdown-item">
                    <label htmlFor="department-select">Choose Department:</label>
                    <div className="select-wrapper-carinfo">
                        <select
                            id="department-select"
                            value={selectedDepartment}
                            onChange={handleDepartmentChange}
                        >
                            <option value="">All Departments</option>
                            {departments.map((dept) => (
                                <option key={dept} value={dept}>
                                    {dept}
                                </option>
                            ))}

                        </select>

                        {/* Custom arrow */}
                        <ChevronDown className="select-icon" size={18} />
                    </div>
                </div>

                <div className="dropdown-item">
                    <label htmlFor="location-input">Enter your Location:</label>
                    <input
                        id="location-input"
                        type="text"
                        placeholder="e.g. Hyderabad, India"
                        value={location}
                        onChange={handleLocationChange}
                    />
                </div>

                {(selectedDepartment !== "" || location !== "") && (
                    <div className="dropdown-item button-container">
                        <button onClick={handleFilterSubmit}>Reset Filter</button>
                    </div>
                )}
            </div>


            <main className="job-list" ref={jobListRef}>
                <h2 className='job-heading'>Chase what inspires you</h2>
                {loading ? (
                    <div className="job-loader">
                        <iframe
                            src="/loading.html"
                            title="Loading..."
                            style={{ width: '100%', height: '200px', border: 'none' }}
                        />
                    </div>
                ) : (
                    <>
                        {filteredJobs?.length > 0 ? (
                            <>
                                <div className="job-grid">
                                    {filteredJobs.map((job) => (
                                        <div className="job-card-modern" key={job.id}>
                                            <div className="job-info">
                                                <h3 className="job-title">{job.title}</h3>
                                                <div className="job-details">
                                                    <span>
                                                        <MapPin size={16} strokeWidth={2} />
                                                        {job.location}
                                                    </span>
                                                    <span style={{ borderLeft: "1px solid #bdbdbd", paddingLeft: "0.6rem" }}>
                                                        <GraduationCap size={16} strokeWidth={2} />
                                                        {job.qualification}
                                                    </span>
                                                    <span style={{ borderLeft: "1px solid #bdbdbd", paddingLeft: "0.6rem" }}>
                                                        <Timer size={16} strokeWidth={2} />
                                                        {job.experience}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="job-action">
                                                <Link
                                                    className="apply-now"
                                                    href={`/career/${job.title
                                                        .toLowerCase()
                                                        .replace(/\s+/g, '-')
                                                        .replace(/[^\w-]/g, '')}`}
                                                    onClick={(e) =>
                                                        handleUrlNavigation(e,
                                                            `/career/${job.title
                                                                .toLowerCase()
                                                                .replace(/\s+/g, '-')
                                                                .replace(/[^\w-]/g, '')}`
                                                        )
                                                    }
                                                >
                                                    Apply Now <span className="arrow"><ChevronRight /></span>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="no-jobs">
                                <p>No jobs available in this department.</p>
                            </div>
                        )}
                    </>
                )}

                {/* <div className="pagination">
                    <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}><ChevronsLeft /></button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={currentPage === i + 1 ? 'active' : ''}
                            onClick={() => handlePageChange(i + 1)}>
                            {i + 1}
                        </button>
                    ))}
                    <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}><ChevronsRight /></button>
                </div> */}

                <CompanyCulture />

                <EmployeeBenefits />

                <HRDetails />

            </main >
        </div >
    );
};

export default Careerinfo;