// app/careers/[apply-form]/page.jsx

import jobData from "@/public/jobsOpenings";
import './page.scss';
import CareerReq from "@/components/CareerReq/CareerReq";
import { generatePageMetadata } from '@/utils/HeadMeta';
import { WEBSITE_URL } from '@/env';

// 👇 Generate dynamic metadata for each job page
export async function generateMetadata({ params }) {
    const { 'apply-form': applyForm } = await params;  // ✅ Await params

    const jobSlug = applyForm;

    const job = jobData.find(
        (j) => j.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === jobSlug
    );

    if (!job) {
        return {}; // Return default metadata if job not found
    }

    const pageData = {
        title: `Apply for ${job.title}`,
        description: `Submit your application for the ${job.title} position at Optigo Apps. Join our team and help us innovate in the jewellery tech industry.`,
        url: `${WEBSITE_URL}/career/${jobSlug}`,
        image: `${WEBSITE_URL}/orail_logo.jpg`,
        keywords: job.keywords || [`${job.title} job`, "Optigo Apps careers", "jewellery tech jobs"],
    };

    return generatePageMetadata(pageData);
}

// 👇 Generate all valid paths at build time
export async function generateStaticParams() {
    return jobData.map((job) => ({
        'apply-form': job.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
    }));
}

export default async function ApplyFormPage({ params }) {
    const { 'apply-form': applyForm } = await params;  // ✅ Await params

    const jobSlug = applyForm;

    const jobTitle = jobData?.find(
        (job) => job.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === jobSlug
    )?.title;

    return (
        <div>
            <CareerReq jobSlug={jobSlug} jobTitle={jobTitle} />
        </div>
    );
}
