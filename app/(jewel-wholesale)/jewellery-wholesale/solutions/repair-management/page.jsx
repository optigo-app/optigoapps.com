import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-wholesale/solutions/repair-management']);

const page = () => {

    const mainTitle = "Repair Management with Optigo ERP";
    const mainDescription = `Managing repairs efficiently is crucial for businesses to maintain customer satisfaction and internal operations. <strong>Optigo</strong> ERP provides a comprehensive Repair Management solution that allows you to handle customer and company repairs seamlessly, from intake to completion, all in one system.`;
    const mainButtonContent = "Explore more";

    const section = ["section2", "section4"];

    const section2Title = "Complete Repair Management in Optigo";

    const section2Data = [
        {
            content: "Optigo ERP allows you to manage the entire repair lifecycle effortlessly.",
        },
        {
            content: "Whether repairs come from customers or internal company assets, you can handle everything through the system with full visibility and control.",
        },
    ]

    const section4Title = "Key Features of Optigo Repair Management"

    const section4Data = [
        {
            icon: "📥",
            title: "Receive Repair Requests",
            description:
                "Receive repair requests from customers or for company-owned items.",
        },
        {
            icon: "🛠️",
            title: "Assign Repair Jobs to Vendors",
            description:
                "Assign repair jobs directly to vendors from the system for streamlined workflows.",
        },
        {
            icon: "➕➖",
            title: "Add or Detach Materials",
            description:
                "Add or detach materials during the repair process as required.",
        },
        {
            icon: "💰",
            title: "Repair Financial Management",
            description:
                "Maintain and manage all financial accounts related to repairs.",
        },
        {
            icon: "📍",
            title: "Track Repair Status",
            description:
                "Track every repair order from start to completion with full transparency.",
        },
        {
            icon: "📊",
            title: "Detailed Repair Reports",
            description:
                "Generate detailed reports to check what repairs have been received and what materials or tasks have been issued to vendors.",
        },
        {
            icon: "🧾",
            title: "Customer Repair Billing",
            description:
                "Create and share repair bills easily for customers.",
        },
    ];


    const section3Data = [
        {
            content: "Optigo simplifies repair management by bringing all processes—intake, vendor assignment, material handling, and billing—into a single, easy-to-use platform."
        },
        {
            content: "This reduces delays, eliminates manual errors, and improves your service efficiency."
        },
    ]

    const section14Data = [
        {
            content: "With Optigo ERP, you can access real-time reports to monitor repairs efficiently."
        },
        {
            content: "Know exactly what items have come in for repair, what tasks are pending with vendors, and what materials have been used or returned. "
        },
        {
            content: "This ensures complete accountability and transparency in the repair process."
        },
    ]


    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/wholesale-repair-management.jpg'} mainButtonContent={mainButtonContent} section={section} section2Title={section2Title} section2Data={section2Data} section4Title={section4Title} sectiion4Data={section4Data} />

            <section className="sol_repair_mission1">
                <div className="text">
                    <h2>Why Choose Optigo for Repair Management?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>Comprehensive Reports and Tracking</h2>
                    <ul className="bullet-list">
                        {section14Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default page
