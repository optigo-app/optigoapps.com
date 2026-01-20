import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce/apps/sales-representative-app']);

const page = () => {

    const mainTitle = "Sales Rep App – Empower Your Sales Team, Anywhere, Anytime";
    const mainDescription = `
    Your sales team is the front line of your business and needs the right tools to close deals faster.
    The <strong>Sales Representative App</strong>, fully integrated with your ERP, puts customer insights, catalogs, and orders at their fingertips.
    It empowers your team to work smarter, faster, and stay connected wherever they are.
    In the office, at client meetings, or on the go—success is always within reach.
    `;

    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `How It Works`;

    const section2Data = [
        {
            content: `The Sales Rep App connects directly with your ERP system, giving your team instant access to live customer data, product catalogs, pricing, and outstanding amounts.`
        },
        {
            content: "Each rep is empowered with secure, role-based access so they can serve customers better, close orders faster, and keep management updated in real-time."
        },
    ]


    const section7Title = "Key Features of the Sales Rep App"

    const section7Data = [
        {
            id: 1,
            title: "Customer Management",
            icon: "👥",
            points: [
                "Your team can instantly view assigned customer data, update profiles, and add new clients on the spot.",
                "This ensures no lead is missed and every relationship is tracked in real-time.",
            ]
        },
        {
            id: 2,
            title: "Instant Catalog Sharing",
            icon: "📱",
            points: [
                "Replace heavy printed catalogs with digital ones.",
                "Share product details, prices, and variations instantly with customers—anytime, anywhere."
            ]
        },
        {
            id: 3,
            title: "Smart Order Processing",
            icon: "🛒",
            points: [
                "Sales reps can create, edit, and submit orders directly from the app.",
                "With live ERP sync, every order is tracked, error-free, and transparent.",
            ]
        },
        {
            id: 4,
            title: "Outstanding Payment Tracking",
            icon: "💳",
            points: [
                "Never lose track of credit limits or dues.",
                "Reps can check outstanding balances during meetings and make smarter, more confident sales pitches.",
            ]
        },
        {
            id: 5,
            title: "Role-Based Security",
            icon: "🛡️",
            points: [
                "Every user gets customized, secure access.",
                "Sensitive business data stays safe while your team enjoys full flexibility to work productively.",
            ]
        },
        {
            id: 6,
            title: "Customer History & Insights",
            icon: "📂",
            points: [
                "Access previous orders, preferences, and interactions at a glance.",
                "This helps your team personalize conversations and build stronger customer loyalty.",
            ]
        },
        {
            id: 7,
            title: "On-the-Go Productivity",
            icon: "🚀",
            points: [
                "Whether at trade shows, client visits, or traveling, sales reps can manage customers and orders without waiting to return to the office.",
            ]
        },
        {
            id: 8,
            title: "ERP-Connected Power",
            icon: "🔗",
            points: [
                "Fully integrated with your ERP, the app ensures that data, pricing, and inventory stay live and accurate across all channels.",
            ]
        },
    ];


    const section3Data = [
        {
            content: "With the Sales Rep App, your team is always prepared, always connected, and always ready to deliver results."
        },
        {
            content: "Boost sales performance, strengthen customer relationships, and grow your business – all from one powerful app."
        }
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/sales-representative-app.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section2Title={section2Title} section2Data={section2Data} />

            <section className="vendor_sales_rep_ind_mission_3">
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
