import React from "react";
import "./page.scss";
import Industries from "@/components/Industries/Industries";
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/features/production-process-loss-management']);


const page = () => {

    const mainTitle = "Production Process & Loss Management – OptigoApps";
    const mainDescription = `<strong>Streamline Jewelry Manufacturing with Total Transparency and Efficiency</strong>
    <br />
    <strong>Optigo’s</strong> Production Process & Loss Management Module is crafted for the highly specialized workflows of the jewelry manufacturing industry. From initial design orders to final finished pieces, the system brings unmatched precision, tracking, and automation into your daily production activities — while helping reduce wastage, improve karigar efficiency, and maintain accurate material accountability.`;

    const mainButtonContent = "Explore more";

    const section = ["section7i"];

    const section7Titlei = "Key Features of Optigo’s Production Process & Loss Management";

    const section7Datai = [
        {
            id: 1,
            title: "Complete Visibility Across the Production Lifecycle",
            icon: "🔍",
            points: [
                "Track every step of your jewelry manufacturing — from design creation to job completion.",
                "Our platform enables centralized management of production orders, component-wise consumption, melting, and karigar task assignment.",
                "Capabilities Include:",
                "Design-to-finish production tracking",
                "Mapping of raw material to finished items",
                "Daily job sheet and karigar allocation",
                "Multi-stage production workflows",
                "Real-time production progress monitoring",
            ]
        },
        {
            id: 2,
            title: "Raw Material Consumption Control",
            icon: "⚙️",
            points: [
                "Ensure accurate and efficient raw material usage by monitoring gold, diamonds, and gemstones in real time.",
                "Prevent overconsumption, and calculate yield vs actuals.",
                "Karigar-wise material handover & receipt logs",
                "Raw-to-finished item conversion history",
                "Real-time stock deduction from production issue",
                "Automatic adjustments on melting returns and loss",
            ]
        },
        {
            id: 3,
            title: "Wastage & Loss Tracking",
            icon: "📉",
            points: [
                "Minimize invisible losses and wastage in every production step.",
                "Optigo records every unit consumed, lost, or returned — giving you accurate material costing and helping you recover hidden value.",
                "Melting loss logging",
                "Pilferage and damage alerts",
                "Rework tracking and reconsumption logging",
                "Wastage vs ideal comparison dashboard",
            ]
        },
        {
            id: 4,
            title: "Karigar & Job Work Management",
            icon: "👷",
            points: [
                "Handle internal and external job work assignments with full accountability.",
                "Maintain transparency in karigar performance, timings, and material usage.",
                "Karigar-wise performance reports",
                "Job card generation with task lists",
                "Material handover receipts with valuation",
                "Customer raw material job work management",
                "Billing for external job work",
            ]
        },
        {
            id: 5,
            title: "Production Planning & Scheduling",
            icon: "📆",
            points: [
                "Align your operations with delivery timelines.",
                "Plan each stage of production based on order type, complexity, and karigar availability.",
                "Priority-based order queues",
                "Expected vs actual delivery timelines",
                "Pending stage alerts",
                "Dashboard for delay identification",
            ]
        },
        {
            id: 6,
            title: "Integration with Inventory, Orders & Accounts",
            icon: "🔄",
            points: [
                "The production module works in sync with:",
                "Inventory – For issuing raw materials and receiving finished stock",
                "Order Management – Link customer orders directly to production",
                "Accounts – Track job charges, billing, and karigar settlements",
            ]
        },
        {
            id: 7,
            title: "Reporting & Analytics",
            icon: "📊",
            points: [
                "Make smart decisions with powerful reports:",
                "Production output vs material usage",
                "Karigar-wise task performance",
                "Order completion analytics",
                "Daily/weekly job status reports",
            ]
        }
    ];


    const section3Data = [
        {
            content: "Specialized for jewelry manufacturing workflows"
        },
        {
            content: "Prevents material leakage & improves yield"
        },
        {
            content: "Improves karigar efficiency & accountability"
        },
        {
            content: "End-to-end traceability from raw to finished"
        },
        {
            content: "Saves cost by reducing production errors & delays"
        },
        {
            content: `With Optigo, you get total control over jewelry production — from design to delivery — while minimizing waste, improving productivity, and gaining deep insights into your operations.`
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/production-process-loss-management.jpg"} mainButtonContent={mainButtonContent} section={section} section7Titlei={section7Titlei} section7Datai={section7Datai} />

            <section className="sol_procc-loss_business_mission1">
                <div className="text">
                    <h2>Why Optigo for Production & Loss Management?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default page;
