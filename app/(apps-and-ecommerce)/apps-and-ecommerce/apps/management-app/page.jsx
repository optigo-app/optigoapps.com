import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce/apps/management-app']);

const page = () => {

    const mainTitle = "Management App – Your Jewellery Business, Always in Control";
    const mainDescription = `The <strong>Optigo Management App</strong> is built for jewellery business owners, offering real-time visibility and control.
        Seamlessly integrated with your ERP, it works as your personal business dashboard.
        Track sales, stock, production, and finances anytime, anywhere.
        Stay connected with accurate data and instant insights—no delays, no guesswork.
    `;

    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `How It Works`;

    const section2Data = [
        {
            content: "Seamless ERP Integration – The Admin App connects directly with your ERP system, ensuring live updates across all modules."
        },
        {
            content: "Real-Time Sync – Every order, stock movement, and production update reflects instantly on your mobile."
        },
        {
            content: "Smart Dashboard – Visual, easy-to-read reports help you take quick decisions without depending on others."
        },
        {
            content: "Exclusive Access – Built only for business heads, ensuring data security and privacy at every level."
        },
    ]


    const section7Title = "Key Features of the Management App"

    const section7Data = [
        {
            id: 1,
            title: "Track Sales & Orders Instantly",
            icon: "📊",
            points: [
                "Get a clear picture of what’s selling, what’s pending, and where your orders stand—all updated in real time, so you never miss a business opportunity.",
            ]
        },
        {
            id: 2,
            title: "Monitor Ongoing Production (WIP)",
            icon: "🏭",
            points: [
                "Stay informed about every stage of manufacturing without depending on calls or updates.",
                "The app keeps you connected with live production progress."
            ]
        },
        {
            id: 3,
            title: "Check Raw Material Stock",
            icon: "📦",
            points: [
                "From gold and diamonds to gemstones, always know your current stock levels.",
                "Make smarter purchase and allocation decisions with instant visibility.",
            ]
        },
        {
            id: 4,
            title: "Access Customer Outstanding Reports",
            icon: "💰",
            points: [
                "View pending payments and receivables in seconds.",
                "Stay on top of finances and improve your cash flow management effortlessly.",
            ]
        },
        {
            id: 5,
            title: "Update Metal Prices On-the-Go",
            icon: "💱",
            points: [
                "Easily adjust and update gold or diamond rates anytime.",
                "Ensure your pricing remains competitive and consistent across all channels.",
            ]
        },
        {
            id: 6,
            title: "Download Reports Anytime",
            icon: "📑",
            points: [
                "Daily, monthly, or yearly reports are available in one tap.",
                "Get performance insights on demand, helping you take data-driven decisions.",
            ]
        },
        {
            id: 7,
            title: "Secure Admin-Only Access",
            icon: "🔐",
            points: [
                "Built exclusively for business owners, the app ensures confidential information stays protected with secure login and data encryption.",
            ]
        },
    ];

    const section3Data = [
        {
            content: "Because every decision you take shapes your business growth."
        },
        {
            content: "With the Management App, you get the power of control, speed, and clarity—so you can run your jewellery business smarter, faster, and stronger."
        },
        {
            content: "Decide with confidence. Lead with clarity. Grow with Optigo"
        }
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/management-app.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section2Title={section2Title} section2Data={section2Data} />

            <section className="vendor_management_ind_mission_3">
                <div className="text">
                    <h2>Why Choose the Management App?</h2>
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
