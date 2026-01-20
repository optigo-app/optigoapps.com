import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/industries/bangles-manufacturing']);

const page = () => {

    const mainTitle = "Bangle jewellery manufacturing – Powered by Optigoapps";
    const mainDescription = `Manufacturing bangles — whether hand-made, casting, or CNC — requires specialized flow, precise measurements, and accurate handling of weight, size, and purity. With <strong>OptigoApps</strong>, you can manage the full lifecycle of bangle manufacturing — from design to delivery — with full visibility and control.`;
    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `Built for custom and Bulk bangle production`;
    const section2Description = `Bangle manufacturing often involves multiple departments: rolling, sizing, soldering, stone/diamond setting, polishing, and QC. Whether you're making single bangles or full-size sets, Optigo helps you manage everything in one platform:`;

    const section2Data = [
        {
            content: "Create bulk production jobs for standard bangle sizes or styles"
        },
        {
            content: "Auto job assignment by size, purity, or design type"
        },
        {
            content: "Track single-piece or full-set production"
        },
        {
            content: "Monitor size-wise inventory and order status in real-time"
        },
    ]

    const section7Title = "Key features – Optimized for Bangle Manufacturing"

    const section7Data = [
        {
            "id": 1,
            "title": "Product Development",
            "icon": "🎨",
            "points": [
                "Track design approvals and samples",
                "Manage size sets and design mapping",
                "Auto-create job cards for each size variant"
            ]
        },
        {
            "id": 2,
            "title": "Order & Reorder Management",
            "icon": "🔁",
            "points": [
                "Order by bangle set (2/4/6/12 pieces) or single SKU",
                "Reorder directly from previous order history",
                "Assign delivery timelines batch-wise"
            ]
        },
        {
            "id": 3,
            "title": "Production with Weighing Scale + Barcode",
            "icon": "⚙️",
            "points": [
                "Barcode-based job cards for each stage (cutting to polishing)",
                "Weighing scale integration for real-time weight updates",
                "Worker I-Card tracking for process accountability"
            ]
        },
        {
            "id": 4,
            "title": "Loss & Metal Control",
            "icon": "📉",
            "points": [
                "Track losses in rolling, filing, polishing & stone setting",
                "Set tolerance limits and trigger alerts on excess loss",
                "Compare issued vs recovered metal & prepare dust reports"
            ]
        },
        {
            "id": 5,
            "title": "Real-Time WIP & QC Tracking",
            "icon": "🔍",
            "points": [
                "Know where each bangle is in the process",
                "Enable real-time QC checklists and rework tagging",
                "Track delays and bottlenecks in any department"
            ]
        },
        {
            "id": 6,
            "title": "Size-wise Stock & Costing",
            "icon": "📦",
            "points": [
                "Maintain inventory for each size and design",
                "Get job-wise costing based on actual metal, labor, and time",
                "Optimize metal use with smart recovery tracking"
            ]
        },
        {
            "id": 7,
            "title": "Billing & Customer Communication",
            "icon": "📧",
            "points": [
                "Auto-generate invoices from production jobs",
                "Repair, exchange, and custom order billing in one place",
            ]
        }
    ];

    const section3Data = [
        {
            content: "Built for casting + handmade + CNC workflows"
        },
        {
            content: "Bulk & size-wise production flow"
        },
        {
            content: "Barcode + weigh scale + mobile app integration"
        },
        {
            content: "Real-time production & loss tracking"
        },
        {
            content: "Faster delivery with full visibility"
        },
        {
            content: "Smart reorder & stock management"
        },
    ]

    const section4Data = [
        {
            content: "Turn your bangle manufacturing into a precision-driven process."
        },
        {
            content: "Let OptigoApps ERP make your production faster, smarter, and more profitable."
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/bangles-manufacturing.jpg'} mainButtonContent={mainButtonContent} section={section} section2Title={section2Title} section2Description={section2Description} section2Data={section2Data} section7Title={section7Title} section7Data={section7Data} />

            <section className="mission2">
                <div className="text">
                    <h2>Why Optigoapps for Bangle jewellery ?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>GET STARTED</h2>
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
