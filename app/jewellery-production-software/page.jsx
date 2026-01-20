import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-production-software']);

const page = () => {

    const mainTitle = "Optigo Jewellery Production Software";
    const mainDescription = `Transform your jewellery business with Optigo’s  All in one integrated  production software — from design concept to finished product. Built for jewellers who want efficiency, accuracy, and complete visibility, our platform simplifies every step of the production journey.`;

    const mainButtonContent = "Explore more";

    const section = ["section7i"];

    const section7Titlei = "Key Features of Production Software:"

    const section7Datai = [
        {
            id: 1,
            title: "Complete Production Management",
            icon: "🏭",
            points: [
                "Design to CAD: Turn your design concepts into precise CAD sketches seamlessly, maintaining creativity and accuracy.",
                "Product Development Workflow: Plan, track, and manage each stage of product development effortlessly.",
                "End-to-End Production Flow: From raw material procurement to final product delivery, streamline every step with automation.",
                "Real-Time Tracking: Monitor production stages, timelines, and quality control in real-time."
            ]
        },
        {
            id: 2,
            title: "Raw Material & Inventory Control",
            icon: "📦",
            points: [
                "Smart Material Management: Track gold, silver, platinum, Diamond  and stones with details like weight, purity, and supplier information.",
                "Loss & Wastage Analysis: Analyze material losses per Karigar, product, or batch to reduce wastage and improve efficiency.",
            ]
        },
        {
            id: 3,
            title: "Karigar & Performance Analytics",
            icon: "👤",
            points: [
                "Artisan Productivity Tracking: Record contributions of each artisan and measure performance accurately.",
                "Loss Attribution & Analysis: Pinpoint where losses occur and take corrective action for efficiency improvement.",
                "Detailed Reports: Gain insights into artisan efficiency, work quality, and product-specific performance.",
            ]
        },
        {
            id: 4,
            title: "Order, Design & Profit Insights",
            icon: "📊",
            points: [
                "Order Analysis: Track orders from initiation to delivery, ensuring timely fulfillment and satisfied customers.",
                "Design Analytics: Evaluate which designs are most profitable or popular to make data-driven decisions.",
                "Profit & Loss Reports: Access comprehensive P&L insights for products, designs, and overall operations.",
            ]
        },
        {
            id: 5,
            title: "Billing & Accounting Integration",
            icon: "💰",
            points: [
                "Automated Billing: Generate invoices accurately with material, labor, and tax details included.",
                "Accounting & Financial Reporting: Track financials, GST, and generate balance sheets, cash flow, and P&L reports.",
                "Integrated ERP : Keep all financial, production, and inventory data synchronized in one platform.",
            ]
        },
    ];

    const section3Data = [
        {
            content: "User-Friendly Interface: Minimal training needed, easy adoption."
        },
        {
            content: "Scalable Solution: Suitable for small workshops or large multi-branch operations."
        },
        {
            content: "Cloud-Based Accessibility: Manage your business anytime, anywhere."
        },
        {
            content: "Robust Support: Dedicated customer service ensures smooth implementation and continued assistance."
        },
        {
            content: "Optigo Jewellery Production Software is more than a tool—it’s a partner in driving efficiency, profitability, and growth in your jewellery business."
        },
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/jewellery-production-software.jpg'} mainButtonContent={mainButtonContent} section={section} section7Titlei={section7Titlei} section7Datai={section7Datai} />

            <section className="prod_soft_mission_3">
                <div className="text">
                    <h2>Why Choose Optigo?</h2>
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
