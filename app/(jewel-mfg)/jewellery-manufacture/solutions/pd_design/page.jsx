import React from "react";
import "./page.scss";
import Industries from "@/components/Industries/Industries";
import { pages } from "@/utils/pages";
import { generatePageMetadata } from "@/utils/HeadMeta";

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/solutions/pd_design']);

const page = () => {

    const mainTitle = "Product Development (PD) – The Heart of Jewellery Manufacturing";
    const mainDescription = `At <strong>OptigoApps</strong>, we know that Product Development is key to successful jewellery manufacturing — shaping creativity, quality, and profitability.
Our dedicated, jewellery-specific Product Development Module streamlines design workflows, reduces human error, and boosts innovation.
From concept creation to production readiness, it empowers manufacturers to deliver with precision and efficiency.`;
    const mainButtonContent = "Explore more";

    const section = ["section4", "section5", "section2"];

    const section5Title = "Transform Your Product Development with Optigo";
    const section5Tag = "Product Development";

    const section5Description = "Optigo’s PD module is built to support every stage of your design and development journey:"
    const section5Data = [
        {
            title: "Concept to Creation",
            content: "All in One System: Capture ideas, trends, or customer inspirations and convert them into CAD-ready design requests — all in one centralized dashboard."
        },
        {
            title: "Designer Task Management",
            content: "Assign tasks to your internal or freelance designers, track progress, set timelines, and receive notifications for approvals — no follow-ups needed."
        },
        {
            title: "Design Finalization & QC",
            content: "Upload, review, and finalize CAD or image files. Get visual approvals from management or clients, with revision history and version control to ensure nothing is missed."
        },
        {
            title: "Workflow & Communication",
            content: "Eliminate the need for WhatsApp chats, Excel files, or disconnected emails. Every stakeholder — from design head to production planner — stays aligned with real-time updates."
        },
        {
            title: "Design Analysis & Reports",
            content: "Measure design-wise cost, approval timelines, and designer performance. Use analytics to identify delays, rework patterns, and pricing inefficiencies — helping you improve faster."
        },
    ]

    const section4Title = "Why Jewellery Manufacturers Choose Optigo’s PD Module"

    const sectiion4Data = [
        {
            icon: "💎",
            title: "Reduces Manual Errors",
            description:
                "Avoid mistakes due to miscommunication or missing files",
        },
        {
            icon: "📡",
            title: "Accelerates Time-to-Market",
            description:
                "Bring new designs to production faster",
        },
        {
            icon: "📦",
            title: "Improves Team Productivity",
            description:
                "Automatically capture data at every stage using integrated hardware for error-free tracking.",
        },
        {
            icon: "📉",
            title: "Lowers Costing",
            description:
                "Monitor diamond losses and work-in-progress across stages with detailed, real-time insights.",
        },
        {
            icon: "🔁",
            title: "Smart Reorder & Design History",
            description:
                "Access analytics that help you identify which designs or designers deliver the best ROI",
        },
        {
            icon: "📱☁️",
            title: "Centralizes Design Assetsd",
            description:
                "Access operations from anywhere—secure, scalable, and optimized for mobile teams.",
        },
    ];

    const section2Title = "Built for the Jewellery Industry — Not Generic Software";
    const section2Description = "Unlike other ERP systems, OptigoApps is designed specifically for jewellery. That means:";

    const section2Data = [
        {
            content: "Purity and metal type considerations built into every step."
        },
        {
            content: "Easy transition from design approval to production planning."
        },
        {
            content: "Integration with BOM, costing, and order systems."
        },
        {
            content: "Role-based access and team visibility for design, CAD, QC, and production heads."
        },
    ]

    const section3Data = [
        {
            content: "Launch more designs in less time"
        },
        {
            content: "Reduce rework and sample costs"
        },
        {
            content: "Improve designer accountability"
        },
        {
            content: "Win faster approvals from customers and buying teams"
        }
    ]

    const section4Data = [
        {
            content: "Book a Free Demo"
        },
        {
            content: "Call: +91-XXXXXXXXXX"
        },
        {
            content: "Email: info@optigoapps.com"
        },
    ]



    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/pd.jpg"} mainButtonContent={mainButtonContent} section={section} section5Title={section5Title} section5Tag={section5Tag} section5Description={section5Description} section5Data={section5Data} section4Title={section4Title} sectiion4Data={sectiion4Data} section2Title={section2Title} section2Description={section2Description} section2Data={section2Data} />

            <section className="sol_mission1">
                <div className="text">
                    <h2>Digital PD is the Future – Get There with Optigo</h2>
                    <p>Manufacturers who move to digital product development:</p>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>Let’s Talk</h2>
                    <p>
                        Interested in seeing how the PD module works?
                        Request a free demo and discover how OptigoApps can revolutionize your jewellery product development process.
                    </p>
                    <ul className="bullet-list">
                        {section4Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default page;
