
import Careerinfo from '@/components/CareerInfo/CareerInfo'
import Script from 'next/script';
import React from 'react'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';
import { WEBSITE_URL } from '@/env';

export const metadata = generatePageMetadata(pages["/career"])

const page = () => {
  // Example job posting data - replace with your actual job data
  const jobPostingStructuredData = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": "Join Our Team | Career Opportunities",
    "description": "Explore exciting career opportunities at our company. Join our team of talented professionals.",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "OptigoApps",
      "sameAs": WEBSITE_URL,
      "logo": `${WEBSITE_URL}/logo/logo1.jpg`
    },
    "employmentType": ["FULL_TIME"],
    "workHours": "50 hours per week",
    "datePosted": "2025-09-02",
    "validThrough": "2025-12-31T00:00",
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": ["India"]
    },
    "jobLocationType": "ON_SITE"
  };

  return (
    <>
      <Script
        id="career-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingStructuredData, null, 2)
        }}
      />
      <Careerinfo />
    </>
  );
}

export default page
