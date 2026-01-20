import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-wholesale/solutions/advance-analytical-reports']);

const page = () => {

    const mainTitle = "Advanced Analytics & Reporting with Optigo ERP";
    const mainDescription = `In today’s fast-paced business world, data is the key to success. <strong>Optigo</strong> ERP provides an advanced analytics and reporting solution that gives management a 360-degree view of business performance. From quotations to sales orders, purchase valuations, and inventory, Optigo ensures complete transparency and control, making decision-making easier and smarter.`;
    const mainButtonContent = "Explore more";

    const section = ["section2", "section4"];

    const section2Title = "Key Benefits of Optigo Advanced Analytics";

    const section2Data = [
        {
            content: "Faster Decision-Making: Access real-time data anytime, anywhere.",
        },
        {
            content: "Increased Sales: Focus on trending designs and customer segments.",
        },
        {
            content: "Improved Vendor Relationships: Identify and reward top-performing suppliers.",
        },
        {
            content: "Inventory Optimization: Avoid overstocking or stock-outs with accurate live reports.",
        },
        {
            content: "Strategic Growth: Use data-driven insights to plan expansion and marketing efforts.",
        },
    ]

    const section4Title1 = "What Optigo Analytics Offers"
    const section4Title = "Optigo goes beyond basic reporting by providing deep, actionable insights into your operations. Here’s what you get:"

    const section4Data = [
        {
            icon: "📊",
            title: "Complete Business View",
            description:
                "Track every process from quote to order completion and payment collection.",
        },
        {
            icon: "📈",
            title: "Sales Analytics",
            description:
                "Identify top-performing designs and understand which products are driving revenue.",
        },
        {
            icon: "🧑‍🤝‍🧑",
            title: "Customer Insights",
            description:
                "Monitor customer buying patterns, identify top buyers, and track payment delays.",
        },
        {
            icon: "🏅",
            title: "Vendor Performance Analysis",
            description:
                "Compare vendors based on product sales, fulfillment accuracy, and reliability.",
        },
        {
            icon: "📊",
            title: "Comparative Reports",
            description:
                "View sales performance over time, across product categories or branches.",
        },
        {
            icon: "🧾",
            title: "Purchase Valuation Reports",
            description:
                "Analyze material costs and purchase trends for better financial planning.",
        },
        {
            icon: "📦",
            title: "Live Stock Analytics",
            description:
                "Check inventory levels in real time to avoid stock shortages or excess.",
        },
        {
            icon: "💳",
            title: "Outstanding Payments & Credit Control",
            description:
                "Monitor delayed payments and take proactive measures for credit management.",
        },
        {
            icon: "🗂️",
            title: "Order Status & Workflow Reports",
            description:
                "Keep track of pending quotes, ongoing jobs, and delivery schedules.",
        },
        {
            icon: "📊📁",
            title: "Customizable Dashboards",
            description:
                "Create personalized dashboards for management, sales teams, and finance.",
        }
    ];

    const section3Data = [
        {
            content: "Optigo ERP’s advanced analytics transforms raw data into actionable insights."
        },
        {
            content: "From monitoring design trends to managing cash flow, everything is available in one centralized platform."
        },
        {
            content: "This empowers businesses to reduce risks, improve efficiency, and scale confidently."
        },
    ]


    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/advance-analytical-reports.jpg'} mainButtonContent={mainButtonContent} section={section} section2Title={section2Title} section2Data={section2Data} section4Title={section4Title} section4Title1={section4Title1} sectiion4Data={section4Data} />

            <section className="sol_analytic_mission1">
                <div className="text">
                    <h2>Why Optigo for Analytics?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default page
