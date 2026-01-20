import React from "react";
import "./page.scss";
import Industries from "@/components/Industries/Industries";
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/features/analytics-dashboards']);

const page = () => {

    const mainTitle = "Analytics & Dashboards – OptigoApps";
    const mainDescription = `<strong>Turn Your Data Into Actionable Insights</strong>
    <br />
    <strong>Optigo’s</strong> Analytics & Dashboards Module brings your jewelry business data to life with real-time visualizations, smart KPIs, and advanced reporting capabilities. From inventory to sales, production to repairs, and customer trends to profitability — everything you need to monitor, measure, and scale your operations is right at your fingertips.`;

    const mainButtonContent = "Explore more";

    const section = ["section7i"];

    const section7Titlei = "Key Features of Optigo’s Analytics & Dashboards";

    const section7Datai = [
        {
            id: 1,
            title: "Real-Time Business Dashboards",
            icon: "📈",
            points: [
                "Access key performance metrics the moment they happen. Stay in control across branches and departments.",
                "Live sales, billing & revenue data",
                "Real-time stock movement and item-wise inventory tracking",
                "Purchase, production, and job work summaries",
                "Outstanding payments & collection dashboard",
                "Approval/Memo return status updates"
            ]
        },
        {
            id: 2,
            title: "Customizable KPIs & Metrics",
            icon: "⚙️",
            points: [
                "Set your own success parameters based on your business priorities:",
                "Daily, weekly, monthly targets",
                "Sales executive-wise tracking",
                "Branch-wise or showroom-wise performance",
                "Top-performing items, customers, and vendors",
                "Loss percentage in production or stock wastage"
            ]
        },
        {
            id: 3,
            title: "Advanced Reporting Suite",
            icon: "📊",
            points: [
                "Make deep-dive business decisions with structured and export-ready reports.",
                "Sales & profitability reports by item/category/weight/purity",
                "Job work and karigar performance analysis",
                "Inventory aging, reorder levels, and valuation",
                "Repair TAT (Turnaround Time) analytics",
                "Accounts receivable/payable reports",
                "GST, HSN/SAC & compliance-based reports"
            ]
        },
        {
            id: 4,
            title: "Visual Graphs & Export Options",
            icon: "📤",
            points: [
                "View trends in a glance or share them with stakeholders instantly.",
                "Bar charts, pie charts, and line graphs for trend analysis",
                "Export to Excel, PDF, or print-friendly formats",
                "Schedule reports to email or cloud folders"
            ]
        },
        {
            id: 5,
            title: "Branch-Wise Comparison & Consolidation",
            icon: "🏬",
            points: [
                "If you manage multiple showrooms or production centers, Optigo lets you consolidate and compare performance across locations:",
                "Cross-branch inventory balance",
                "Branch vs branch sales heatmaps",
                "User-based permissions for secure data visibility"
            ]
        },
        {
            id: 6,
            title: "Alerts & Anomaly Detection",
            icon: "🚨",
            points: [
                "Stay informed when something goes off track:",
                "Alerts for negative stock, low reorder levels, high wastage",
                "Customer-specific credit limit breach notifications",
            ]
        }
    ];



    const section3Data = [
        {
            content: "One-click access to key insights"
        },
        {
            content: "Visual and export-friendly formats"
        },
        {
            content: "Integrated with all modules: sales, inventory, accounts, production"
        },
        {
            content: "No technical knowledge required"
        },
        {
            content: "Helps identify gaps, patterns, and new growth opportunities"
        },
        {
            content: `Make data your business's competitive edge with Optigo's smart analytics tools.`
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/manufacturer-analytics-dashboards.jpg"} mainButtonContent={mainButtonContent} section={section} section7Titlei={section7Titlei} section7Datai={section7Datai} />

            <section className="sol_analytics_business_mission1">
                <div className="text">
                    <h2>Why Optigo Analytics & Dashboards?</h2>
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
