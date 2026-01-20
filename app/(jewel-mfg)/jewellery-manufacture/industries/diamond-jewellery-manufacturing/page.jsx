import Industries from '@/components/Industries/Industries'
import React from 'react'
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/industries/diamond-jewellery-manufacturing']);

const page = () => {
    const mainTitle = "Diamond Jewellery Manufacturing – Precision Made Possible with OptigoApps";
    const mainDescription = `Diamond jewellery manufacturing is a complex process with tight timelines, where delays or data gaps cause losses. <strong>OptigoApps</strong> provides a tailored ERP system for <strong>real-time control</strong>, <strong>reduced losses</strong>, <strong>improved delivery</strong>, and <strong>full transparency</strong>.`;
    const mainButtonContent = "Explore more"

    const section = ["section1", "section4", "section6"];
    const section1Title = "Manufacturing Workflow & Challenges – Solved by Optigo";

    const sectiion1Data = [
        {
            icon: '🎨',
            title: 'Product Development (Concept to Design Monitoring)',
            challenges: [
                'Design tracking is manual',
                'Revisions get missed',
                'No live coordination between teams'
            ],
            solutions: [
                'Centralized design flow',
                'Live monitoring of CAD versions',
                'Auto-linked designs with metal & diamond requirements',
                'Role-based responsibility tracking'
            ]
        },
        {
            icon: '📝',
            title: 'Order Management',
            challenges: [
                'Manual job sheet errors',
                'Missed deadlines',
                'Unclear priority of orders'
            ],
            solutions: [
                'Auto-generated job cards with barcodes',
                'Delivery dates mapped with alerts',
                'Multi-stage job flow (CAD > CAM > Setting > Polishing > QC)',
                'Priority tagging and customer-wise order tracking'
            ]
        },
        {
            icon: '🔁',
            title: 'Reorder Process',
            challenges: [
                'Repeat customer orders not linked',
                'Wastage of time and duplication'
            ],
            solutions: [
                'Smart reorder button',
                'Previous design, weight, and diamond details auto-filled',
                'Faster production cycle for repeat customers'
            ]
        },
        {
            icon: '📲',
            title: 'Real-Time Production Data Entries',
            challenges: [
                'Manual entries prone to mistakes',
                'No live view of job status',
                'Inaccurate input-output tracking'
            ],
            solutions: [
                'Weigh scale integration',
                'Barcoded job cards with mobile scanning',
                'Worker I-Card login & tracking',
                'Live job movement updates from each department'
            ]
        },
        {
            icon: '📉',
            title: 'Loss Management',
            challenges: [
                'No proper diamond loss tracking',
                'Difficult to assign responsibility',
                'QC rejections are not documented'
            ],
            solutions: [
                'Stage-wise gross loss monitoring',
                'Automatic alerts on loss limits',
                'Rejection and rework tracking',
                'Department and worker-wise loss reports'
            ]
        },
        {
            icon: '📊',
            title: 'Advanced Reports & Real-Time WIP Monitoring',
            challenges: [
                'WIP data is scattered',
                'No live dashboard or customer update',
                'Management reports are delayed'
            ],
            solutions: [
                'Live WIP dashboard',
                'Auto-generated daily, weekly, and order-wise reports',
                'Loss, productivity, and performance insights',
                'Mail-enabled customer updates with order progress'
            ]
        },
        {
            icon: '🔁',
            title: 'Metal Recovery & Dust Reports',
            challenges: [
                'Dust collection data not tracked',
                'Repair jobs not linked with recovery',
                'Loss in filings and setting not visible'
            ],
            solutions: [
                'Metal recovery vs issued tracking',
                'Repair job flow tracking with recovery',
                'Dust & polish waste reporting'
            ]
        },
        {
            icon: '💰',
            title: 'Complete Billing & Accounting Integration',
            challenges: [
                'Multiple software for accounts and production',
                'Manual entry duplication',
                'No order-wise costing reports'
            ],
            solutions: [
                'Integrated accounts and inventory',
                'Direct billing from production jobs',
                'Order to invoice auto-sync',
                'Profit margin calculation on each order'
            ]
        }
    ]

    const section4Title = "OptigoApps – The Complete Diamond Jewellery ERP"
    const section4Title1 = "Complete ERP Guide"

    const sectiion4Data = [
        {
            icon: "💎",
            title: "Built for Diamond Manufacturing",
            description:
                "Specifically tailored to handle the complex workflows and precision needs of diamond jewellery production.",
        },
        {
            icon: "📡",
            title: "Real-Time Factory Monitoring",
            description:
                "Get live updates from every department—track jobs, progress, and bottlenecks instantly.",
        },
        {
            icon: "📦",
            title: "Weigh Scale + Barcode + RFID Integration",
            description:
                "Automatically capture data at every stage using integrated hardware for error-free tracking.",
        },
        {
            icon: "📉",
            title: "Gross Loss & WIP Visibility",
            description:
                "Monitor diamond losses and work-in-progress across stages with detailed, real-time insights.",
        },
        {
            icon: "🔁",
            title: "Smart Reorder & Design History",
            description:
                "Reorder faster with saved specs and design history linked to every repeat customer.",
        },
        {
            icon: "📱☁️",
            title: "Mobile-Friendly, Cloud-Based",
            description:
                "Access operations from anywhere—secure, scalable, and optimized for mobile teams.",
        },
    ];

    const section6Title = "Want to control your factory like never before?"
    const section6Description = `Start a <strong className='text-white'>free demo</strong> with <strong style='color: #FFDE21'>OptigoApps</strong> and experience precision in diamond jewellery manufacturing.`

    return (
        <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/diamond-jewellery-manufacturing.jpg"} mainButtonContent={mainButtonContent} section={section}
            sectiion1Data={sectiion1Data} section1Title={section1Title} section4Title={section4Title} sectiion4Data={sectiion4Data} section4Title1={section4Title1} section6Title={section6Title} section6Description={section6Description}
        />
    )
}

export default page
