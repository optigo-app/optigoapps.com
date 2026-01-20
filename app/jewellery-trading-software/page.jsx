import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-trading-software']);

const page = () => {

    const mainTitle = "Optigo Jewellery Trading Software";
    const mainDescription = `<strong>Transform Your Jewellery Business — From Design to Delivery, All in One Platform</strong>
    </br>
    Running a jewellery trading business can be challenging — keeping track of orders, vendors, pricing, inventory, and accounting is time-consuming. Optigo simplifies everything, turning complexity into clarity.`;

    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Why Choose Optigo?"

    const section7Data = [
        {
            id: 1,
            title: "Streamline Your Orders",
            icon: "📦",
            points: [
                "Convert customer designs into vendor-ready instructions instantly.",
                "Approve, memo, and track every order — no detail gets lost.",
                "Provide instant quotes with accurate pricing for every customer."
            ]
        },
        {
            id: 2,
            title: "Smart Vendor & Raw Material Management",
            icon: "⚙️",
            points: [
                "Assign production to vendors and track progress in real-time.",
                "Manage raw materials efficiently — avoid wastage, reduce cost.",
                "Receive finished products, tag, scan, and update inventory automatically.",
            ]
        },
        {
            id: 3,
            title: "Effortless Billing & Accounting",
            icon: "💰",
            points: [
                "Generate bills and invoices in seconds using scanning & tagging.",
                "Maintain accurate accounts automatically — reduce manual errors.",
                "Access reports to monitor sales, profits, and order trends.",
            ]
        },
        {
            id: 4,
            title: "Flexible Pricing & Approvals",
            icon: "📊",
            points: [
                "Maintain vendor-wise and customer-wise pricing for complete control.",
                "Approve memos and orders with ease — faster decision-making.",
            ]
        },
        {
            id: 5,
            title: "Empowered Team Management",
            icon: "🧑‍💼",
            points: [
                "Assign roles and rights to employees — ensure accountability.",
                "Track performance and activities securely in the cloud.",
            ]
        },
        {
            id: 6,
            title: "Real-Time Insights & Growth Opportunities",
            icon: "📈",
            points: [
                "Know which designs and products are selling the most.",
                "Make informed decisions with actionable reports and analytics.",
            ]
        },
        {
            id: 7,
            title: "Cloud Advantage",
            icon: "☁️",
            points: [
                "Access your business anytime, anywhere.",
                "No data silos, no manual syncs — everything updated in real-time.",
                "Secure, scalable, and ready to grow with your business.",
            ]
        },
    ];

    const section3Data = [
        {
            content: "With Optigo, jewellery trading becomes simple, smart, and profitable."
        },
        {
            content: "Save time ⏱️ - Reduce errors ❌ - Increase sales 📈 - Make smarter decisions."
        },
        {
            content: "Optigo — The Jewellery Trading Software That Works As Hard As You Do."
        },
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/jewellery-production-software.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />

            <section className="trad_soft_mission_3">
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
