import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce/apps/show-room-app']);

const page = () => {

    const mainTitle = "EVO – Smart In-Store Selling App";
    const mainDescription = `Turn every customer visit into a conversion with <strong>EVO</strong>, the ultimate sales companion app powered by <strong>Optigo ERP</strong>.`;

    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Key Features of EVO:"

    const section7Data = [
        {
            id: 1,
            title: "Smart Tag Scan & Instant Pricing",
            icon: "📷",
            points: [
                "Simply scan the jewellery tag to view live product details and real-time prices directly from Optigo ERP — no manual entry, no waiting, just instant clarity.",
            ]
        },
        {
            id: 2,
            title: "One-Tap Customer Registration",
            icon: "📝",
            points: [
                "Easily register new customers in seconds.",
                "Capture their info, preferences, and visit history — building your CRM database automatically."
            ]
        },
        {
            id: 3,
            title: "Wishlist & Custom Notes",
            icon: "💡",
            points: [
                "Don’t lose a potential sale! Save items to the customer’s wishlist, add remarks, and track what they loved for the next visit.",
            ]
        },
        {
            id: 4,
            title: "Quick Estimates & Smart Discounts",
            icon: "💸",
            points: [
                "Create instant product-wise estimates and offer dynamic discounts to close deals faster.",
                "Make selling interactive, transparent, and fun.",
            ]
        },
        {
            id: 5,
            title: "Seamless Billing Integration",
            icon: "🛒",
            points: [
                "Move selected items directly to Optigo POS with one tap.",
                "The billing team just scans and bills — no duplication, no confusion.",
            ]
        },
        {
            id: 6,
            title: "Auto Follow-ups & Reminders",
            icon: "📲",
            points: [
                "If a sale is left incomplete, EVO automatically triggers follow-up messages via Optigo ERP to bring your customers back."
            ]
        },
        {
            id: 7,
            title: "Sales Analytics & Feedback",
            icon: "📊",
            points: [
                "Capture customer feedback instantly and view detailed sales insights – track staff performance, customer trends, and conversion rates, all from one dashboard."
            ]
        }
    ];

    const section3Data = [
        {
            content: "Lightning-Fast Sales Flow"
        },
        {
            content: "Personalized Customer Journey"
        },
        {
            content: "100% ERP & POS Integration"
        },
        {
            content: "Works on Any Android/iOS Device"
        },
        {
            content: "Boosts Retention, Loyalty & ROI"
        },
    ];

    const section4Data = [
        {
            content: "EVO empowers your sales team to become smart retail consultants, turning casual walk-ins into loyal buyers – all while enhancing operational efficiency."
        },
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/show-room-app.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />

            <section className="ecom_evo_ind_mission_3">
                <div className="text">
                    <h2>Why Businesses Love EVO?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>Ready to Revolutionize In-Store Shopping?</h2>
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
