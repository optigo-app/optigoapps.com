import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/solutions/real-time-loss-recovery-control']);

const page = () => {

    const mainTitle = "Real-Time Loss & Recovery Control – Powered by Optigo";
    const mainDescription = `In today’s highly competitive manufacturing environment, controlling material loss and improving recovery are critical factors for maintaining profitability and efficiency. <strong>Optigo</strong> provides a smart, real-time digital solution that enables factories to track, monitor, and control losses across every stage of production. This system ensures complete transparency, accountability, and control, helping businesses reduce wastage and maximize recovery effectively.`;
    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = "Business Benefits of Using Optigo";
    const section2Description = "By implementing Optigo’s real-time loss and recovery control system, your business can:";

    const section2Data = [
        {
            content: "Improve overall work efficiency",
        },
        {
            content: "Reduce raw material wastage",
        },
        {
            content: "Lower production costs significantly",
        },
        {
            content: "Increase overall profit margins",
        },
        {
            content: "Ensure end-to-end digital transparency in operations",
        },
    ]

    const section7Title = "Key Features of Optigo’s Loss & Recovery Control System"

    const section7Data = [
        {
            id: 1,
            title: "Real-Time Production Monitoring",
            icon: "📡",
            points: [
                "Every production entry is recorded in real time, giving you full visibility into on-floor activities.",
                "Accurate and instant updates on production data.",
                "Immediate detection of irregularities or losses.",
                "With real-time data, you can react quickly to any discrepancies, preventing further losses and ensuring operational accuracy."
            ]
        },
        {
            id: 2,
            title: "Live Gross Loss Tracking",
            icon: "📊",
            points: [
                "Precise tracking of gross material loss, updated live throughout the day.",
                "Analyze total gross loss for the day.",
                "Department-wise loss contribution.",
                "Karigar-wise (worker-wise) performance.",
                "Product or batch-specific losses."
            ]
        },
        {
            id: 3,
            title: "Department-Wise & Karigar-Wise Accountability",
            icon: "👷‍♂️",
            points: [
                "Assign loss thresholds for each department.",
                "Monitor individual worker performance.",
                "Detect patterns of inefficiency and take corrective action.",
                "Ensure alignment with company’s cost control objectives."
            ]
        },
        {
            id: 4,
            title: "Advanced Analytical Reports",
            icon: "📈",
            points: [
                "Daily gross loss percentage analysis.",
                "Karigar-wise performance tracking.",
                "Product and batch-wise loss patterns.",
                "Dust collection and refining reports.",
                "Factory recast and recovery performance."
            ]
        },
        {
            id: 5,
            title: "Smart Loss Control Mechanism",
            icon: "🚫",
            points: [
                "Set permissible loss limits for each department.",
                "System blocks entries exceeding loss thresholds.",
                "Operator is notified immediately.",
                "Ensures strict adherence to policies and eliminates unnecessary wastage."
            ]
        }
    ];

    const section3Data = [
        {
            content: "Controlling loss and maximizing recovery is no longer a manual or guesswork-based process."
        },
        {
            content: "With Optigo, you gain complete real-time control over your production floor, enabling smarter decisions, better accountability, and higher profitability."
        },
        {
            content: "Make your factory smarter with Optigo. Control loss. Maximize recovery. Increase profits."
        },
    ]


    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/real-time-loss-recovery-control.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section2Title={section2Title} section2Description={section2Description} section2Data={section2Data} />

            <div className="real-wrapper right-content">
                <div className="real-image">
                    <img src="/why.jpeg" alt="Distributors Need real-time loss & recovery control" />
                </div>
                <div className="real-text">
                    <h2>Why Real-Time Loss & Recovery Control Matters</h2>
                    <p>Material loss, whether due to inefficiencies or lack of proper tracking, can significantly impact overall profit margins. Without real-time visibility, businesses face:</p>
                    <ul>
                        <li>Uncontrolled wastage</li>
                        <li>Increased raw material costs</li>
                        <li>Reduced recovery percentages</li>
                        <li>Lack of accountability on the shop floor</li>
                    </ul>
                    <p>Optigo eliminates these challenges by offering live monitoring and analytical insights that empower decision-makers to take corrective actions instantly.</p>
                </div>
            </div>

            <section className="ecom_auto_ind_mission_3">
                <div className="text">
                    <h2>Conclusion</h2>
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
