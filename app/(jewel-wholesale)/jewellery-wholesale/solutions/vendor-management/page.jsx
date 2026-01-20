import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-wholesale/solutions/vendor-management']);

const page = () => {

    const mainTitle = "Vendor Management in Optigo ERP for Trading & Wholesale";
    const mainDescription = `<strong>Optigo</strong> ERP offers a comprehensive and intelligent vendor management solution tailored for the needs of businesses in trading and wholesale sectors. With Optigo, you can manage every aspect of your vendor interactions – from order placement to job work, raw material tracking, and vendor-specific policies.`;
    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Key Features of Vendor Management in Optigo ERP"

    const section7Data = [
        {
            id: 1,
            title: "Order Management",
            icon: "📦",
            points: [
                "Create and manage purchase orders or job work orders for vendors directly through Optigo ERP",
                "Send orders instantly via Email or WhatsApp, ensuring smooth communication and reducing delays.",
                "Track the complete order lifecycle in real time."
            ]
        },
        {
            id: 2,
            title: "Raw Material Assignment",
            icon: "🧱",
            points: [
                "Assign raw materials to vendors in multiple ways: Product-wise, Purchase Order-wise, Lump sum allocation.",
                "Track every issued material with full accuracy, reducing wastage and ensuring accountability."
            ]
        },
        {
            id: 3,
            title: "Order Assignment and Tracking",
            icon: "📋",
            points: [
                "Assign production or job work orders to specific vendors.",
                "Set promise dates and monitor progress to ensure timely completion.",
                "Get live status updates for all ongoing vendor tasks."
            ]
        },
        {
            id: 4,
            title: "Pending Order Reports",
            icon: "📊",
            points: [
                "Access real-time reports for pending orders vendor-wise.",
                "Monitor delivery timelines, status updates, and delays for proactive decision-making."
            ]
        },
        {
            id: 5,
            title: "Pending Raw Material Reports",
            icon: "🧾",
            points: [
                "Stay informed about raw materials that are pending with each vendor.",
                "Maintain stock alignment for seamless production planning."
            ]
        },
        {
            id: 6,
            title: "Design Number Mapping",
            icon: "🆔",
            points: [
                "Save vendor-specific design numbers for easy identification and reordering.",
                "Simplify repeat orders and minimize errors in communication."
            ]
        },
        {
            id: 7,
            title: "Vendor-Wise Inventory Management",
            icon: "📦",
            points: [
                "Maintain detailed records of vendor-wise sales, stock, and production data.",
                "Analyze vendor performance with accurate reports and analytics."
            ]
        },
        {
            id: 8,
            title: "Vendor Ledger Management",
            icon: "📒",
            points: [
                "Generate vendor-specific ledgers within seconds.",
                "Share ledgers easily via Email or WhatsApp directly from the system."
            ]
        },
        {
            id: 9,
            title: "Vendor-Specific Labour Policy",
            icon: "⚙️",
            points: [
                "Define and manage labour/job work charges per vendor.",
                "Achieve better cost control and complete transparency in vendor dealings."
            ]
        }
    ];

    const section3Data = [
        {
            content: "Complete Visibility: Track vendor performance, pending orders, and raw material flow in real-time."
        },
        {
            content: "Automation & Accuracy: Reduce manual errors and paperwork."
        },
        {
            content: "Faster Communication: Integrated email and WhatsApp for instant order and ledger sharing."
        },
        {
            content: "Custom Policies: Define labour and pricing policies vendor-wise for better control."
        },
        {
            content: "Improved Efficiency: Optimize the supply chain for better turnaround time and reduced costs."
        }
    ]

    const section4Data = [
        {
            content: "With Optigo ERP, vendor management becomes easy, digital, and transparent."
        },
        {
            content: "Build stronger vendor relationships, reduce operational bottlenecks, and take your trading or wholesale business to the next level."
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/wholesale-vendor-management.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />

            <div className="vendor-wrapper left-content">
                <div className="vendor-text">
                    <h2>💼 What is Vendor Management?</h2>
                    <p>
                        Vendor Management refers to the systematic process of managing and coordinating with suppliers or vendors who provide goods, raw materials, or services to your business. This process includes:
                    </p>
                    <ul>
                        <li>Selecting and onboarding vendors</li>
                        <li>Negotiating and managing contracts</li>
                        <li>Controlling costs and ensuring timely delivery</li>
                        <li>Reducing vendor-related risks</li>
                        <li>Maintaining quality consistency and compliance</li>
                    </ul>
                </div>
                <div className="vendor-image">
                    <img src="/vendor.jpg" alt="vendorchannel Jewellery E-commerce" />
                </div>
            </div>

            <div className="vendor-wrapper right-content">
                <div className="vendor-image">
                    <img src="/why.jpeg" alt="Distributors Need vendor" />
                </div>
                <div className="vendor-text">
                    <h2>Why is it Important?</h2>
                    <ul>
                        <li>For trading and wholesale businesses, efficient vendor management is the backbone of a robust supply chain.</li>
                        <li>It ensures timely availability of materials, cost optimization, and quality assurance.</li>
                        <li>All of which contribute to improved operational efficiency and customer satisfaction.</li>
                    </ul>
                </div>

            </div>

            <section className="sol_vendor_mission1">
                <div className="text">
                    <h2>Why Choose Optigo ERP for Vendor Management?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>Empower Your Business with Optigo ERP</h2>
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
