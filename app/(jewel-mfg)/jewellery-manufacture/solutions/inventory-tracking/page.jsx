import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/solutions/inventory-tracking']);


const page = () => {

    const mainTitle = "Optigo Inventory Tracking & Real-Time Factory Monitoring";
    const mainDescription = `<strong>Optigo</strong> offers a powerful, real-time inventory tracking solution designed specifically for jewellery manufacturers. Every raw material in your factory — gold, diamonds, stones, findings — is tracked with precision using advanced barcode technology. From stock issuance to reconciliation, everything is automated and accurate.`;
    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Key Features and Functionalities"

    const section7Data = [
        {
            id: 1,
            title: "Barcode-Based Material Tracking",
            icon: "🔖",
            points: [
                "Each raw material is tagged with a unique barcode sticker at the time of inward entry.",
                "Applicable for gold, diamonds, stones, findings, and other production materials.",
                "To issue material, simply scan the barcode and weigh it — the system updates stock in real-time.",
                "Eliminates manual data entry, reducing errors and improving efficiency."
            ]
        },
        {
            id: 2,
            title: "Real-Time Stock Visibility",
            icon: "📦",
            points: [
                "Get instant visibility into your material stock levels, anytime.",
                "View current stock of each material with one click.",
                "Check location-wise availability and live consumption during production.",
                "Helps you make fast, data-driven procurement and planning decisions."
            ]
        },
        {
            id: 3,
            title: "Tagged Jewellery with Detailed Information",
            icon: "💍",
            points: [
                "Each finished jewellery piece is tagged with a barcode or QR Code label.",
                "Labels include category details, collection name, material specs, product weight, and price.",
                "Enables fast product identification, smooth order processing, and full traceability."
            ]
        },
        {
            id: 4,
            title: "Advanced Inventory Reports & Reconciliation",
            icon: "📊",
            points: [
                "Generate comprehensive reports to understand material availability and usage.",
                "Filter data by category, collection, job, or date range.",
                "Analyze consumption patterns and optimize inventory planning and reconciliation."
            ]
        }
    ];

    const section3Data = [
        {
            content: "End-to-end traceability"
        },
        {
            content: "Automated stock management"
        },
        {
            content: "Error-free material issuance"
        },
        {
            content: "Live stock monitoring"
        },
        {
            content: "Faster reconciliation through scanning"
        },
    ]


    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/inventory-tracking.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />

            <section className="ecom_track_ind_mission_3">
                <div className="text">
                    <h2>Why choose inventory tracking?</h2>
                    <p>Stock reconciliation is made simple with scanning – just scan the items on hand, and the system automatically matches it with the software stock.</p>
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
