import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import Image from 'next/image';
import { generatePageMetadata } from "@/utils/HeadMeta";
import { pages } from "@/utils/pages";

export const metadata = generatePageMetadata(pages['/jewellery-retail/solutions/repair-old-gold-management']);

const page = () => {

    const mainTitle = "Old Gold Management & Repair Solutions – Powered by Optigo ERP";
    const mainDescription = `<strong>Seamless Old Jewellery Buyback, Repairs & Refining – All in One System</strong>
    </br>
    Managing old gold—from buying to melting, refining, and repairs—requires precision, transparency, and real-time control. <strong>Optigo</strong> ERP offers a robust solution for retail jewellery stores to handle both Old Gold Transactions and Repair Management, all in a single integrated platform.`;

    const mainButtonContent = "Explore more";

    const section = ["section2", "section4"];

    const section2Title = "🔧 Repair Management with Optigo ERP";
    const section2Title1 = "🪙 Old Gold Purchase & Management";

    const section2Data = [
        {
            content: "Efficient repair handling is critical for customer satisfaction and internal coordination."
        },
        {
            content: "Optigo ERP streamlines the entire repair lifecycle—whether it's a customer repair or an internal fix—so you stay in control at every step."
        },
        {
            content: "Result: No missed items. No manual errors. Just a smooth repair process with full visibility."
        },
    ]

    const section2Data1 = [
        {
            content: "Old jewellery buyback is a sensitive and valuable transaction."
        },
        {
            content: "Optigo ERP ensures accuracy, customer trust, and gold accountability through a transparent and well-audited process."
        },
        {
            content: "Result: 100% traceability of customer old gold—from handover to melting—and maximum trust in your retail process."
        },
    ]

    const section4Title = "Key Features: Complete Repair Lifecycle"
    const section4Title1 = "Key Features: Old Gold Handling"

    const section4Data = [
        {
            icon: "📦",
            title: "Receive & Register Repairs",
            description: "Log incoming repairs from customers or company assets directly into the ERP."
        },
        {
            icon: "🔧",
            title: "Vendor Assignment",
            description: "Assign jobs to repair vendors directly within the ERP."
        },
        {
            icon: "🧱",
            title: "Material Handling",
            description: "Add or remove gold, diamonds, or other materials during repair."
        },
        {
            icon: "💰",
            title: "Finance Integration",
            description: "Track repair costs, advances, and payments—all accounts fully maintained."
        },
        {
            icon: "📊",
            title: "Real-Time Tracking",
            description: "Monitor every stage from intake to return."
        },
        {
            icon: "🧾",
            title: "Easy Billing",
            description: "Generate and share customer bills in a click."
        },
        {
            icon: "📑",
            title: "Insightful Reports",
            description: "Know what’s received, what’s issued, and what's pending—all with one dashboard."
        }
    ];


    const section4Data1 = [
        {
            icon: "🧾",
            title: "Buy Old Jewellery with Precision",
            description: "Enter item-wise breakup of old gold with weights, purity, deductions, and valuation."
        },
        {
            icon: "📦",
            title: "Gold Inward & Inventory",
            description: "Receive old gold directly into refining or inventory."
        },
        {
            icon: "🔁",
            title: "Melting & Refining Integration",
            description: "Connect buyback gold to your melting batches, with full metal purity analysis."
        },
        {
            icon: "📉",
            title: "Loss/Gain Control",
            description: "Track loss or gain after melting, with automated adjustments to stock and valuation."
        },
        {
            icon: "📊",
            title: "Customer Reports",
            description: "Provide customers with detailed old gold purchase receipts."
        },
        {
            icon: "📁",
            title: "Refining Summary Reports",
            description: "Track each lot from buyback to melting to purity outcome."
        }
    ];


    const section3Data = [
        {
            content: "One platform for both repairs and old gold management"
        },
        {
            content: "Reduces paperwork and manual follow-ups"
        },
        {
            content: "Ensures transparency for your team and your customers"
        },
        {
            content: "Saves time, prevents errors, and builds long-term trust"
        },
        {
            content: "✅ Ready to transform your store operations?"
        },
        {
            content: "Let Optigo ERP simplify your Old Gold & Repair processes."
        },
    ]

    const section14Data = [
        {
            content: "Lot-wise and vendor-wise reporting"
        },
        {
            content: "Pending task overviews"
        },
        {
            content: "Gold and material reconciliation reports"
        },
        {
            content: "Financial summaries"
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/repair-old-gold-management.jpg'} mainButtonContent={mainButtonContent} section={section} section2Title={section2Title} section2Data={section2Data} section4Title={section4Title} sectiion4Data={section4Data} />

            <div className='repair_gold_mission_main'>
                <section className="mission">
                    <div className="text">
                        <h2 style={{ marginBottom: '1rem' }}>{section2Title1}</h2>
                        <ul className="bullet-list">
                            {section2Data1?.map((item, index) => (
                                <li key={index}>{item?.content}</li>
                            ))}
                        </ul>
                    </div>
                    {/* <div className="mission-image">
                        <Image src="/mission.jpg" height={300} width={300} style={{ width: "350px" }} alt="Jewelry Workshop"  />
                    </div> */}
                </section>
            </div>

            <section className="repair_gold-core-services">
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

            <section className="sol_retail_repair_mission1">
                <div className="text">
                    <h2>Why Retailers Choose Optigo ERP</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>📈 Real-Time Reporting & Dashboard Insights</h2>
                    <p style={{ marginBottom: "1rem" }}>Whether it’s a repair job or a gold refining batch, Optigo provides:</p>
                    <ul className="bullet-list">
                        {section14Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default page

