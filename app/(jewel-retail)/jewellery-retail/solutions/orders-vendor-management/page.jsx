import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import Image from 'next/image';
import { generatePageMetadata } from "@/utils/HeadMeta";
import { pages } from "@/utils/pages";

export const metadata = generatePageMetadata(pages['/jewellery-retail/solutions/orders-vendor-management']);

const page = () => {

    const mainTitle = "Vendor Management & Order Management – Retail Store Solutions Powered by Optigo ERP";
    const mainDescription = `<strong>Optigo</strong> ERP provides powerful, real-time tools for Vendor Management and Order Management – specifically built to serve the dynamic needs of retail stores. Whether you’re handling job work, raw material flows, or managing complex customer orders, Optigo offers a seamless digital solution for improved control, speed, and transparency.`;

    const mainButtonContent = "Explore more";

    const section = ["section2", "section4"];

    const section2Title = "🔗 Vendor Management with Optigo ERP";
    const section2Title1 = "📦 Order & Reorder Management with Optigo ERP";

    const section2Data = [
        {
            content: "Managing customized orders, production coordination, and reorders becomes easy with Optigo’s end-to-end Order Management solution."
        },
        {
            content: "For retail operations, efficient vendor management is key to cost control, timely production, and maintaining product quality."
        },
        {
            content: "With Optigo ERP, vendor communication becomes fast, ledger sharing becomes instant, and every transaction is documented with real-time accuracy."
        },
    ]

    const section2Data1 = [
        {
            content: "Vendor Management refers to the systematic process of coordinating with suppliers who provide goods, materials, or services to your retail business."
        },
        {
            content: "Specifically built for wholesalers and retailers handling custom and bulk orders."
        },
        {
            content: "The system ensures that raw materials are issued on time, vendors are informed instantly, and customer deliveries are fulfilled as promised – all from one platform."
        },
    ]

    const section4Title = "Key Features of Vendor Management in Optigo ERP"
    const section4Title1 = "Key Features of Order Management in Optigo ERP"

    const section4Data = [
        {
            icon: "📦",
            title: "Order Management",
            description: "Create and manage purchase or job work orders. Send them instantly via Email/WhatsApp."
        },
        {
            icon: "🧮",
            title: "Raw Material Assignment",
            description: "Assign material product-wise, PO-wise, or lump sum and track issued material."
        },
        {
            icon: "📍",
            title: "Order Tracking",
            description: "Assign vendor jobs, set promise dates, and get live status updates."
        },
        {
            icon: "🕒",
            title: "Pending Order Reports",
            description: "Get vendor-wise updates on all pending orders and expected delivery timelines."
        },
        {
            icon: "📉",
            title: "Pending Raw Material Reports",
            description: "Monitor raw materials still pending with vendors to align stock needs."
        },
        {
            icon: "🧾",
            title: "Design Number Mapping",
            description: "Save and reuse vendor-specific design references to avoid errors."
        },
        {
            icon: "📊",
            title: "Vendor Inventory Management",
            description: "Track vendor-wise sales, stock, and production records accurately."
        },
        {
            icon: "📒",
            title: "Vendor Ledger Management",
            description: "Generate and share vendor ledgers in one click via WhatsApp or Email."
        },
        {
            icon: "⚖️",
            title: "Vendor-Specific Labour Policy",
            description: "Manage job work charges for each vendor with transparency and control."
        }
    ];

    const section4Data1 = [
        {
            icon: "📝",
            title: "Custom Order Intake",
            description: "Take custom orders with detailed specifications and reference images."
        },
        {
            icon: "📤",
            title: "Vendor Assignment",
            description: " Assign orders to vendors directly from the ERP system."
        },
        {
            icon: "🔍",
            title: "Raw Material Check",
            description: "Check live raw material availability before processing orders."
        },
        {
            icon: "🛒",
            title: "Purchase & Allocation",
            description: "Raise purchase requests or allocate existing materials instantly."
        },
        {
            icon: "📁",
            title: "Easy Reorders",
            description: "Simplify reorders with saved design references and past customer orders."
        },
        {
            icon: "📦",
            title: "Pending Material Tracking",
            description: "Track pending material issuance to ensure production readiness."
        },
        {
            icon: "📈",
            title: "Production Visibility",
            description: "Improve delivery timelines with real-time visibility and reports."
        }
    ];


    const section3Data = [
        {
            content: "Complete control over vendor operations and material flow."
        },
        {
            content: "Automation that reduces manual follow-ups and data entry."
        },
        {
            content: "Integrated communication via WhatsApp and Email."
        },
        {
            content: "Customizable policies and pricing per vendor."
        },
        {
            content: "Real-time order tracking and delivery management."
        },
        {
            content: "Full transparency in job work, purchase, and billing processes."
        },
        {
            content: "Ready to empower your retail business with digital tools?"
        },
        {
            content: "Choose Optigo ERP for streamlined vendor and order management, reduced errors, and increased efficiency."
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/orders-vendor-management.jpg'} mainButtonContent={mainButtonContent} section={section} section2Title={section2Title} section2Data={section2Data} section4Title={section4Title} sectiion4Data={section4Data} />

            <div className='order_mission_main'>
                <section className="mission">
                    <div className="text">
                        <h2 style={{ marginBottom: '1rem' }}>{section2Title1}</h2>
                        <ul className="bullet-list">
                            {section2Data1?.map((item, index) => (
                                <li key={index}>{item?.content}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>

            <section className="order-core-services">
                <h2>{section4Title1}</h2>
                <div className="service-columns">
                    {(() => {
                        const mid = Math.ceil(section4Data1.length / 2);
                        const leftServices = section4Data1.slice(0, mid);
                        const rightServices = section4Data1.slice(mid);
                        return (
                            <>
                                <div className="left-column">
                                    {leftServices.map((service, idx) => (
                                        <div className="service-item" key={idx}>
                                            <div className="icon">{service.icon}</div>
                                            <div>
                                                <h4>{service.title}</h4>
                                                <p>{service.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="right-column">
                                    {rightServices.map((service, idx) => (
                                        <div className="service-item" key={idx + mid}>
                                            <div className="icon">{service.icon}</div>
                                            <div>
                                                <h4>{service.title}</h4>
                                                <p>{service.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        );
                    })()}
                </div>
            </section>

            <section className="sol_retail_vendor_mission1">
                <div className="text">
                    <h2>🎯 Why Choose Optigo ERP for Vendor & Order Management?</h2>
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
