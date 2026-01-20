import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/industries/handmade-jewellery']);

const page = () => {

    const mainTitle = "Handmade jewellery manufacturing – Powered by Optigoapps";
    const mainDescription = `<strong>Handmade jewellery</strong> involves creativity, precision, and skilled craftsmanship — but managing production manually can lead to delays, losses, and inefficiencies. <strong>OptigoApps ERP</strong> helps handmade jewellery manufacturers organize their production with real-time tracking, worker accountability, and complete workflow control.`;
    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `Built for artisanal manufacturing workflows`;
    const section2Description = `OptigoApps is built to handle the complexity of handmade jewellery where every piece passes through multiple hands and custom processes:`;

    const section2Data = [
        {
            content: "Define your own manual workflows – soldering, filling, engraving, etc."
        },
        {
            content: "Assign jobs to artisans with barcoded job cards & I-Card logins"
        },
        {
            content: "Control quality & loss at every stage"
        },
        {
            content: "Track progress even for the smallest custom order"
        },
    ]

    const section7Title = "Key features – Optimized for Handmade jewellery Manufacturing"

    const section7Data = [
        {
            "id": 1,
            "title": "Custom Process Setup",
            "icon": "⚙️",
            "points": [
                "Set up process flows for handmade operations like soldering, filing, polishing, etc.",
                "Define labor and time estimates for each task",
                "Assign tasks manually or by design type"
            ]
        },
        {
            "id": 2,
            "title": "Real-Time Job Tracking",
            "icon": "⏱️",
            "points": [
                "Barcoded job cards for every piece or lot",
                "Worker I-Card scan at each department entry",
                "Track how long each task takes and by whom it was completed"
            ]
        },
        {
            "id": 3,
            "title": "Design to Production Integration",
            "icon": "🧩",
            "points": [
                "Capture sketch/CAD along with job instruction",
                "Tag raw material and stones/diamonds to design",
                "Monitor WIP for made-to-order or limited collection pieces"
            ]
        },
        {
            "id": 4,
            "title": "Gold Loss & Recovery Control",
            "icon": "📉",
            "points": [
                "Control filing, melting, and dust losses",
                "Track gold issued and balance at each process",
                "Generate alerts for high wastage or metal loss by worker or department"
            ]
        },
        {
            "id": 5,
            "title": "Worker Performance Monitoring",
            "icon": "🧑‍🏭",
            "points": [
                "Get reports on efficiency, reworks, and accuracy",
                "Pay incentives based on quality & speed",
                "Avoid manual registers and human error"
            ]
        },
        {
            "id": 6,
            "title": "Repair & Rework Management",
            "icon": "🔧",
            "points": [
                "Capture reasons for rejection or rework",
                "Track who did the repair and at what cost",
                "Separate reports for repair orders vs fresh production"
            ]
        },
        {
            "id": 7,
            "title": "Integrated Billing & Delivery",
            "icon": "💳",
            "points": [
                "Generate invoices directly from completed job sheets",
                "Attach design, QC, and weight certificate with bills",
                "Manage delivery deadlines with client communication"
            ]
        }
    ];

    const section3Data = [
        {
            content: "100% control over hand-based production"
        },
        {
            content: "Real-time artisan-wise performance reports"
        },
        {
            content: "Barcode + weigh scale + I-Card integration"
        },
        {
            content: "Reduce gold losses, improve quality"
        },
        {
            content: "No more paper job cards or registers"
        },
        {
            content: "Track each piece like a factory-made item"
        },
    ]

    const section4Data = [
        {
            content: "Let technology bring structure to your handcrafted excellence."
        },
        {
            content: "With OptigoApps, your handmade jewellery production becomes more efficient, accurate, and profitable — without losing the charm of craftsmanship."
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/handmade-jewellery.jpg'} mainButtonContent={mainButtonContent} section={section} section2Title={section2Title} section2Description={section2Description} section2Data={section2Data} section7Title={section7Title} section7Data={section7Data} />

            <section className="mission5">
                <div className="text">
                    <h2>Why Optigoapps for Handmade jewellery ?</h2>
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
