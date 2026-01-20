import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-retail/industries/boutique-jewellery-brands']);

const page = () => {

    const mainTitle = "Digitize Your Jewellery Boutique Retail with Optigo";
    const mainDescription = `<strong>Optigo</strong> offers a comprehensive Jewellery Retail Software specially designed for boutique-style jewellery stores that deal in customised orders, personalised client interactions, and multi-branch management.`;
    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Key Features for Jewellery Boutique Retail:"

    const section7Data = [
        {
            id: 1,
            title: "Custom Order Management",
            icon: "🧾",
            points: [
                "Take and manage boutique customised orders with ease",
                "Digitally record client preferences and design specifications",
                "Assign orders to vendors",
                "Track order status in real-time for timely delivery"
            ]
        },
        {
            id: 2,
            title: "Stock & Order Management",
            icon: "📦",
            points: [
                "Manage jewellery inventory with barcode-tagged precision",
                "Track stock across Gold, Diamond, Silver, CZ, and Jadau",
                "Link inventory to custom orders, repairs, and displays",
                "Avoid unaccounted items with real-time tracking"
            ]
        },
        {
            id: 3,
            title: "CRM – Customer Relationship Management",
            icon: "💬",
            points: [
                "Maintain complete customer history including purchases and balances",
                "Send bills, estimates, and updates via WhatsApp or SMS",
                "Track old gold exchanged and client communication logs"
            ]
        },
        {
            id: 4,
            title: "Mobile App for Sales Team",
            icon: "📱",
            points: [
                "Dedicated mobile app for your showroom sales team",
                "Book customer appointments and track client visits",
                "Share live estimates and create POS bills",
                "Book and manage customised orders"
            ]
        },
        {
            id: 5,
            title: "Repair & Old Gold Management",
            icon: "🔧",
            points: [
                "Track repair orders with job status and timelines",
                "Manage old gold billing with purity, weight, and valuation inputs"
            ]
        },
        {
            id: 6,
            title: "Integrated Accounting",
            icon: "📊",
            points: [
                "Maintain customer-wise ledgers, advances, dues, and refunds",
                "Auto-generate invoices and receipts",
                "Export data to Tally or other accounting software"
            ]
        },
        {
            id: 7,
            title: "eCommerce B2C Website",
            icon: "🛒",
            points: [
                "Launch a fully integrated jewellery eCommerce website",
                "Allow customers to browse, consult, and place orders online"
            ]
        },
        {
            id: 8,
            title: "Branch & Franchise Management",
            icon: "🏬",
            points: [
                "Centralized management of multiple branches",
                "Transfer stock and sync pricing and schemes",
                "Monitor performance from the head office in real-time"
            ]
        },
        {
            id: 9,
            title: "Customer Loyalty & Saving Schemes",
            icon: "🎁",
            points: [
                "Implement loyalty points, monthly saving schemes, and vouchers",
                "Track progress and redemption with a single click",
                "Track repair progress and receive updates and offers"
            ]
        }
    ];


    const section3Data = [
        {
            content: "Fully Digitize Operations – Transform your entire retail jewellery business with end-to-end digital automation."
        },
        {
            content: "Streamline Branch Management – Automate daily operations across all branches for better control and consistency."
        },
        {
            content: "Empower Teams & Enhance Customer Experience – Give your staff powerful tools and provide your customers with a seamless, modern buying experience."
        },
        {
            content: "Flexible for All Business Sizes – Whether you're a single boutique or a growing retail chain, Optigo scales with your business."
        },
        {
            content: " Simplify Complex Workflows – From inventory to billing and custom orders – manage it all with ease under one unified system."
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/boutique-jewellery-brands.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />

            <section className="ind_mission_3">
                <div className="text">
                    <h2>Why Optigo for Boutique Jewellery Retail?</h2>
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
