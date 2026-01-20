import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-wholesale/solutions/erp']);

const page = () => {

    const mainTitle = "OptigoApps: Complete ERP Solution for Jewellery Manufacturers";
    const mainDescription = `<strong>OptigoApps</strong> offers a powerful, cloud-based ERP platform tailored specifically for jewellery manufacturers. Whether you deal in gold, diamonds, or customized jewellery, our system helps you streamline every aspect of your factory operations — from design to delivery — with unmatched efficiency, accuracy, and control.`;
    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Explore our core modules designed to meet the real-world needs of modern jewellery businesses:"

    const section7Data = [
        {
            id: 1,
            title: "Product Development (PD)",
            icon: "🎨",
            points: [
                "Centralized CAD storage and approval tracking",
                "Faster design turnaround with reduced errors",
                "Organize and catalog designs for easy future access"
            ]
        },
        {
            id: 2,
            title: "Production Management",
            icon: "🏭",
            points: [
                "Full visibility into raw material to final product",
                "Smart job card tracking and quality checkpoints",
                "Minimize delays and wastage with workflow automation"
            ]
        },
        {
            id: 3,
            title: "CRM (Customer Relationship Management)",
            icon: "🤝",
            points: [
                "Manage client profiles and communication",
                "Track inquiries, orders, and follow-ups",
                "Convert more leads and improve retention"
            ]
        },
        {
            id: 4,
            title: "Loss Management",
            icon: "📉",
            points: [
                "Track and analyze metal or stone loss in real-time",
                "Identify process inefficiencies",
                "Ensure accountability and compliance"
            ]
        },
        {
            id: 5,
            title: "Order Management",
            icon: "📋",
            points: [
                "Handle ready-stock and make-to-order seamlessly",
                "Assign, track, invoice and update in real time",
                "360° view from showroom to workshop"
            ]
        },
        {
            id: 6,
            title: "Repair & Alteration Management",
            icon: "🛠️",
            points: [
                "Track item condition, estimate costs, and manage timelines",
                "Ensure reliable repair workflows with full traceability"
            ]
        },
        {
            id: 7,
            title: "Payroll Management",
            icon: "🧾",
            points: [
                "Manage attendance, shifts, and incentive payouts",
                "Automate salary calculation with statutory compliance",
                "Integrate seamlessly with accounts and HR modules"
            ]
        },
        {
            id: 8,
            title: "Analytical Reports & Insights",
            icon: "📊",
            points: [
                "Custom dashboards for sales, production, and stock",
                "Quick access to KPIs, profitability, and trends",
                "Make faster, data-backed decisions"
            ]
        },
        {
            id: 9,
            title: "Accounts Management",
            icon: "💼",
            points: [
                "GST-compliant billing, ledgers, and reconciliation",
                "Track vendor payments and generate financial reports",
                "Integrated with inventory and payroll data"
            ]
        },
        {
            id: 10,
            title: "Inventory Management",
            icon: "📦",
            points: [
                "Real-time tracking of gold, diamonds, and findings",
                "Purity-wise, batch-wise, and location-wise visibility",
                "Barcode & QR code integration across departments"
            ]
        }
    ];

    const section4Data = [
        {
            content: "Faster Turnaround"
        },
        {
            content: "Transparent Operations"
        },
        {
            content: "Smart Business Decisions"
        },
        {
            content: "Book a Free Demo"
        },
        {
            content: "Call: +91-XXXXXXXXXX"
        },
        {
            content: "Email: info@optigoapps.com"
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/ecom.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />

            <section className="sol_mission1">
                <div className="text">
                    <h2>Take Your Jewellery Factory Digital Today</h2>
                    <p>With OptigoApps, you're not just adopting software — you're gaining a technology partner that understands the unique challenges of the jewellery industry.</p>
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
