import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/industries/cz-manufacturing']);

const page = () => {

    const mainTitle = "CZ jewellery manufacturing – Powered by Optigoapps";
    const mainDescription = `<strong>CZ (Cubic Zirconia)</strong> jewellery manufacturing is <strong>fast-moving</strong>, <strong>design-heavy</strong>, and <strong>often volume-driven</strong> — with thousands of styles, fast production cycles, and multiple variants. <strong>OptigoApps ERP</strong> is built to manage the complexity of CZ production while giving you control over orders, stock, labor, and deliveries in real time.`;
    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = "Built for Speed & Style-Based Manufacturing"
    const section2Data = [
        {
            content: "Maintain master catalog of 1,000s of CZ designs"
        },
        {
            content: "Create job cards in bulk for high-demand SKUs"
        },
        {
            content: "Track every process — casting, setting, polishing, plating, QC"
        },
        {
            content: "Link inventory, design, and customer orders in one system"
        },
    ]

    const section3Data = [
        {
            content: "Built for bulk & style-driven CZ production"
        },
        {
            content: "Full workflow from catalog to delivery"
        },
        {
            content: "Barcode + weigh scale + plating log integration"
        },
        {
            content: "Smart reorder system for fast-moving SKUs"
        },
        {
            content: "Real-time dashboard for inventory, QC, and orders"
        },
        {
            content: "Designed for factories & exporters in the CZ segment"
        },
    ]

    const section4Data = [
        {
            content: "CZ jewellery needs fast, reliable, and scalable systems."
        },
        {
            content: "Let OptigoApps make your CZ production smarter, faster, and always under control."
        },
    ]

    const section7Title = "Key features – Optimized for CZ Jewellery Manufacturing"

    const section7Data = [
        {
            id: 1,
            title: "Design & Catalog Management",
            icon: "🎨",
            points: [
                "Manage 1000s of ready styles and custom designs",
                "Attach images, videos, and pricing to each SKU",
                "Categorize by collection, season, brand, plating, and more",
            ],
        },
        {
            id: 2,
            title: "Bulk Order Processing",
            icon: "🧾",
            points: [
                "Create orders in bulk with multiple sizes/variants",
                "Priority production and fast batch creation",
                "Auto job card generation with barcoding",
            ],
        },
        {
            id: 3,
            title: "Stone Setting & Plating Workflow",
            icon: "💎",
            points: [
                "Track CZ stone consumption and setting loss",
                "Monitor plating QC and timeline per piece",
                "Separate workflows for handmade vs casting lines",
            ],
        },
        {
            id: 4,
            title: "Inventory & Variant Control",
            icon: "📦",
            points: [
                "Real-time stock of every size, color, and plating type",
                "Separate inventory for sale stock, approval, memo, or online orders",
                "Barcode tagging for each finished item",
            ],
        },
        {
            id: 5,
            title: "QC & Finishing Tracking",
            icon: "🔍",
            points: [
                "Multi-level QC entry (setting, polishing, final)",
                "Capture defects, rework, and rejection reasons",
                "Batch QC summary with images and weights",
            ],
        },
        {
            id: 6,
            title: "Order to Delivery Workflow",
            icon: "🚚",
            points: [
                "Track each order from entry to final dispatch",
                "Attach design, weight, plating info to invoice",
            ],
        },
        {
            id: 7,
            title: "Billing & Accounting",
            icon: "💰",
            points: [
                "Invoice directly from production lots",
                "Manage credit memos, approval returns, and exchanges",
                "Profit tracking per item, batch, or client",
            ],
        },
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/cz-manufacturing.jpg"} mainButtonContent={mainButtonContent} section={section} section2Title={section2Title} section2Data={section2Data} section7Title={section7Title} section7Data={section7Data} />

            <section className="mission1">
                {/* <div className="mission-image1">
                    <Image src="/mission.jpg" height={300} width={300} alt="Jewelry Workshop" />
                </div> */}
                <div className="text">
                    <h2>Why Optigoapps for CZ jewellery ?</h2>
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
