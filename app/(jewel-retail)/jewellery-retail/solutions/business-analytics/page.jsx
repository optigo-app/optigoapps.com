import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { generatePageMetadata } from "@/utils/HeadMeta";
import { pages } from "@/utils/pages";

export const metadata = generatePageMetadata(pages['/jewellery-retail/solutions/business-analytics']);


const page = () => {

    const mainTitle = "Advanced Analytics & Reporting with Optigo ERP";
    const mainDescription = `In today’s fast-paced business world, data is the key to success. <strong>Optigo</strong> ERP provides an advanced analytics and reporting solution that gives management a 360-degree view of business performance. From quotations to sales orders, purchase valuations, and inventory, Optigo ensures complete transparency and control, making decision-making easier and smarter.`;

    const mainButtonContent = "Explore more";

    const section = ["section2", "section4", "section7"];

    const section2Title = "Why Advanced Analytics Matters";

    const section2Data = [
        {
            content: "Modern businesses require accurate, real-time data to stay competitive."
        },
        {
            content: "Optigo ERP’s analytics module provides detailed insights across all business areas, enabling managers to identify trends, track performance, and make informed decisions instantly."
        }
    ]

    const section7Title = "What Optigo Analytics Offers"

    const section7Data = [
        {
            id: 1,
            title: "Complete Business View",
            icon: "📈",
            points: [
                "Track every process from quote to order completion and payment collection."
            ]
        },
        {
            id: 2,
            title: "Sales Analytics",
            icon: "💹",
            points: [
                "Identify top-performing designs and understand which products are driving revenue."
            ]
        },
        {
            id: 3,
            title: "Customer Insights",
            icon: "🧑‍💼",
            points: [
                "Monitor customer buying patterns, identify top buyers, and track payment delays."
            ]
        },
        {
            id: 4,
            title: "Vendor Performance Analysis",
            icon: "📊",
            points: [
                "Compare vendors based on product sales and reliability."
            ]
        },
        {
            id: 5,
            title: "Comparative Reports",
            icon: "📈",
            points: [
                "View sales performance over time, across categories or branches."
            ]
        },
        {
            id: 6,
            title: "Purchase Valuation Reports",
            icon: "💰",
            points: [
                "Analyze material costs and purchase trends for better financial planning."
            ]
        },
        {
            id: 7,
            title: "Live Stock Analytics",
            icon: "📦",
            points: [
                "Check inventory levels in real time to avoid stock shortages or excess."
            ]
        },
        {
            id: 8,
            title: "Outstanding Payments & Credit Control",
            icon: "🧾",
            points: [
                "Monitor delayed payments and take proactive measures."
            ]
        },
        {
            id: 9,
            title: "Order Status & Workflow Reports",
            icon: "🔄",
            points: [
                "Keep track of pending quotes, ongoing jobs, and delivery schedules."
            ]
        },
        {
            id: 10,
            title: "Customizable Dashboards",
            icon: "🧩",
            points: [
                "Create personalized dashboards for management, sales teams, and finance."
            ]
        }
    ];


    const section4Title = "Key Benefits of Optigo Advanced Analytics"

    const section4Data = [
        {
            icon: "⚡",
            title: "Faster Decision-Making",
            description: "Access real-time data anytime, anywhere."
        },
        {
            icon: "💼",
            title: "Increased Sales",
            description: "Focus on trending designs and customer segments."
        },
        {
            icon: "💰",
            title: "Better Financial Control",
            description: "Manage outstanding payments and credit risks effectively."
        },
        {
            icon: "🤝",
            title: "Improved Vendor Relationships",
            description: "Identify and reward top-performing suppliers."
        },
        {
            icon: "📦",
            title: "Inventory Optimization",
            description: "Avoid overstocking or stock-outs with accurate live reports."
        },
        {
            icon: "🚀",
            title: "Strategic Growth",
            description: "Use data-driven insights to plan expansion and marketing efforts."
        }
    ];


    const section3Data = [
        {
            content: "Optigo ERP’s advanced analytics transforms raw data into actionable insights."
        },
        {
            content: "From monitoring design trends to managing cash flow, everything is available in one centralized platform"
        },
        {
            content: "This empowers businesses to reduce risks, improve efficiency, and scale confidently."
        },
        {
            content: "Ready to empower your business with data-driven intelligence? Contact Optigo today!"
        },
    ]



    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/business-analytics.jpg'} mainButtonContent={mainButtonContent} section={section} section2Title={section2Title} section2Data={section2Data} section4Title={section4Title} sectiion4Data={section4Data} section7Title={section7Title} section7Data={section7Data} />


            <section className="sol_retail_business_mission1">
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
