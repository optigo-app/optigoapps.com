import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';
import { Activity, Eye, PhoneCall, Truck } from 'lucide-react';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce/apps/b2c-customer-app']);

const page = () => {

    const mainTitle = "Real-Time Connected B2C Jewellery Shopping – Powered by OptigoApps";
    const mainDescription = `<strong>Sell Smarter. Delight Your Customers. Stay in Sync.</strong>
    <br />
    OptigoApps brings your jewellery store online with a fully connected shopping experience—web, mobile, and social—powered by live inventory, dynamic pricing, personalization, and ERP integration. Manage your business smarter, while your customers enjoy a seamless, real-time shopping journey.
    `;

    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `What Your Customers Experience – Live, Personalized & Instant`;

    const section2Data = [
        {
            content: "Browse Real-Time Inventory – Always know what’s available; no out-of-stock surprises."
        },
        {
            content: "Customize Jewellery Instantly – Choose metal, stone, weight, and style with live price updates."
        },
        {
            content: "Track Orders & Reorder Easily – Delivery time-lines, order status, and one-click reorder."
        },
        {
            content: "One-Tap Checkout – Save addresses and payment preferences for effortless purchases."
        },
        {
            content: "Instant Support – Integrated Whats-app and chat for fast query resolution."
        },
    ]


    const section7Title = "Real-Time Features That Boost Sales"

    const section7Data = [
        {
            id: 1,
            title: "Designed for Jewellery Lovers",
            icon: "💍", // Ring icon for jewellery focus
            points: [
                "Filter by carat, purity, stone type, gifting occasion, and more.",
                "360° product spins, HD images, and certificates for trust and clarity.",
                "Options for personalized packaging and notes to delight customers.",
            ]
        },
        {
            id: 2,
            title: "Live ERP Integration",
            icon: "🔗", // Link icon for integration
            points: [
                "Sync real-time inventory directly from your ERP.",
                "Dynamic price updates reflecting bullion rates and product changes.",
                "Eliminate manual uploads and pricing errors."
            ]
        },
        {
            id: 3,
            title: "Seamless Shopping Across Devices",
            icon: "📱", // Mobile phone icon for cross-device shopping
            points: [
                "Fully responsive web and mobile apps with live sync.",
                "Personalized view maintained across all devices.",
                "Push notifications for price drops, offers, and restocks.",
            ]
        },
    ];


    const section3Data = [
        {
            content: "Custom-Branded Store – Theme, logo, fonts, and UI tailored to your brand."
        },
        {
            content: "Android & iOS Apps – Connected to your live stock and pricing."
        },
        {
            content: "Build Your Jewellery – ‘Build Your Ring’ and ‘Design Your Earring’ with live pricing."
        },
        {
            content: "Secure Checkout – Cart, wishlist, multiple payment gateways, and safe transactions."
        },
        {
            content: "ERP-Connected Accuracy – Live sync ensures inventory and pricing are always correct."
        },
        {
            content: "Automated Orders & Invoices – Real-time tracking and instant invoicing."
        },
        {
            content: "SEO-Optimized & Scalable – Google-friendly architecture and hosted on secure AWS cloud."
        },
        {
            content: "Engage Directly – Whats App integration for offers, queries, and feedback."
        },
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/b2c-customer-app.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section2Title={section2Title} section2Data={section2Data} />

            <section className="b2c-customer-app-mission-3">
                <div className="text">
                    <h2>Why Choose OptigoApps for Your B2C Jewellery Store?</h2>
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
