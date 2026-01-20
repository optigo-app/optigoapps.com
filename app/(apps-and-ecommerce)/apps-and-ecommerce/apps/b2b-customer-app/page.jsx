import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce/apps/b2b-customer-app']);

const page = () => {

    const mainTitle = "Jewellery B2B Application – Powered by OptigoApps";
    const mainDescription = `<strong>Your Factory & Wholesale Network, Always in Your Pocket</strong>
    <br />
    Jewellery distribution is complex, with multiple dealers, price levels, and custom orders.
    Managing it manually through calls or spreadsheets slows growth.
    The <strong>OptigoApps B2B App</strong> empowers wholesalers and manufacturers to run their distribution network from mobile.
    Dealers and retailers can browse products, place orders, and access real-time inventory, pricing, and order status—fully ERP-connected.
    `;

    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `What is a Jewellery B2B Application ?`;

    const section2Data = [
        {
            content: "A mobile-first e-commerce solution for factories, wholesalers, and multi-tier jewellery businesses, where:"
        },
        {
            content: "Distributors and retailers can log in anytime to view products and order instantly."
        },
        {
            content: "Each customer sees their own personalized pricing, discounts, and offers."
        },
        {
            content: "Orders are auto-synced to ERP for stock, billing, and delivery."
        },
        {
            content: "You control product visibility, pricing, and credit limits at every level"
        },
    ]


    const section7Title = "Core Features of Optigo Distribution Application"

    const section7Data = [
        {
            id: 1,
            title: "Customer-Specific Price Control",
            icon: "💵",
            points: [
                "Assign custom price lists for each distributor/retailer.",
                "Tier-wise discounts & credit terms.",
                "Dynamic pricing linked to real-time metal and diamond rates.",
            ]
        },
        {
            id: 2,
            title: "Controlled Product Visibility",
            icon: "🎯",
            points: [
                "Show collections or specific SKUs only to selected customers.",
                "Region/category-based access to control distribution."
            ]
        },
        {
            id: 3,
            title: "Bulk & Reorder Management",
            icon: "🛒",
            points: [
                "Place large orders quickly for repeat designs.",
                "Instant reorder from past purchase history.",
                "Manage multiple SKUs and sizes in a single click",
            ]
        },
        {
            id: 4,
            title: "ERP-Integrated Stock & Pricing",
            icon: "📊",
            points: [
                "Real-time stock updates across your network.",
                "Automatic price adjustments as metal rates fluctuate.",
                "Seamless sync between offline & online sales to prevent overselling.",
            ]
        },
        {
            id: 5,
            title: "Customer Self-Service Portal (In-App)",
            icon: "🖥️",
            points: [
                "Distributors can directly:",
                "Check live stock.",
                "Track order & delivery status.",
                "Download invoices, ledgers, and statements.",
                "Minimizes dependency on your sales team.",
            ]
        },
        {
            id: 6,
            title: "Multi-Tier Dealer Management",
            icon: "📂",
            points: [
                "Manage distributors, sub-dealers, and retailers in one mobile app.",
                "Assign different credit limits, pricing, and product access per tier.",
            ]
        },
        {
            id: 7,
            title: "Advanced Mobile Features",
            icon: "📱",
            points: [
                "High-quality images & videos for each product.",
                "Push notifications for new arrivals, trending items & offers.",
                "Integrated payments & courier partners for smooth operations.",
            ]
        },
    ];


    const section3Data = [
        {
            content: "Tailored for jewellery B2B workflows."
        },
        {
            content: "Deep ERP integration for stock, billing, and pricing."
        },
        {
            content: "Built to scale from regional to global distribution."
        },
        {
            content: "Easy-to-use mobile-first design for dealers & retailers."
        },
    ];

    const section4Data = [
        {
            content: "Digitize your dealer network – fewer calls, faster orders."
        },
        {
            content: "Boost order frequency with mobile convenience."
        },
        {
            content: "Reduce errors via automated ERP connectivity."
        },
        {
            content: "Improve trust with transparent, always-available data."
        },
        {
            content: "With the OptigoApps Jewellery B2B Application, your entire wholesale & distribution business moves to mobile – fast, smart, and 100% transparent."
        },
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/b2b-customer-app.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section2Title={section2Title} section2Data={section2Data} />

            <div className="b2b-customer-wrapper right-content">
                <div className="b2b-customer-image">
                    <img src="/why.jpeg" alt="B2B Customer App" />
                </div>
                <div className="b2b-customer-text">
                    <h2>Why Jewellery Distributors Need the App</h2>
                    <ul>
                        <li>Reduce back-and-forth calls and WhatsApp follow-ups.</li>
                        <li>Eliminate stock and pricing errors with live ERP sync.</li>
                        <li>Faster order processing, even while on the move.</li>
                        <li>Customers get 24/7 transparency – stock, invoices, ledgers, and order tracking in one app.</li>
                    </ul>
                </div>

            </div>

            <section className="b2b-customer-app-mission-3">
                <div className="text">
                    <h2>Why OptigoApps Jewellery B2B App?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>Benefits for Jewellery Distributors & Wholesalers</h2>
                    <ul className="bullet-list">
                        {section4Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default page
