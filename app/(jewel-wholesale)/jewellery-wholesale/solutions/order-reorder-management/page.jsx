import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-wholesale/solutions/order-reorder-management']);

const page = () => {

    const mainTitle = "Optigo's Order & Reorder Management Solution for Wholesalers";
    const mainDescription = `Managing orders in a wholesale business can be complex, especially when customization and coordination with multiple vendors is involved. <strong>Optigo</strong> simplifies this process with an advanced and user-friendly Order & Reorder Management system that helps you handle every stage of the order lifecycle effortlessly.`;

    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `Key Benefits of Optigo's Order & Reorder Management`;

    const section2Data = [
        {
            content: "Take custom orders with full specifications and images."
        },
        {
            content: "Assign orders to vendors instantly."
        },
        {
            content: "Check and manage raw material availability in real time."
        },
        {
            content: "Purchase and issue materials directly from the system."
        },
        {
            content: "Simplified reorder process with design reference."
        },
        {
            content: "Track pending material issues to ensure timely processing."
        },
        {
            content: "Improve on-time delivery performance to customers."
        },
    ]

    const section7Title = "Key Features of Vendor Management in Optigo ERP"

    const section7Data = [
        {
            id: 1,
            title: "Easy and Efficient Order Management",
            icon: "📦",
            points: [
                "In Optigo, order management is designed to be seamless and smooth.",
                "Take customized orders from customers with full specifications and reference images.",
                "Quickly assign orders to the relevant vendor for production or job work directly through the system."
            ]
        },
        {
            id: 2,
            title: "Job Work & Raw Material Availability",
            icon: "🧱",
            points: [
                "Check raw material availability in real time for job work-related orders.",
                "Use existing stock or generate purchase requests based on availability.",
                "Assign required material to vendors directly within the system."
            ]
        },
        {
            id: 3,
            title: "Fast & Simple Reorder Process",
            icon: "🔁",
            points: [
                "Easily handle reorders by selecting previous designs from system history.",
                "Customize existing orders to match the customer’s new requirements.",
                "Avoid the hassle of browsing hundreds of design photos manually."
            ]
        },
        {
            id: 4,
            title: "Tracking Material Issuance",
            icon: "📊",
            points: [
                "Generate real-time reports of orders pending raw material issuance.",
                "Stay on top of critical tasks and avoid delays in processing.",
                "Ensure timely order fulfillment and on-schedule delivery."
            ]
        }
    ];

    const section3Data = [
        {
            content: "Optigo empowers wholesalers with full control and visibility over the entire order lifecycle – from initial order entry to vendor assignment and final delivery."
        },
        {
            content: "With Optigo, you can streamline operations, reduce errors, and deliver a superior customer experience every time."
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/order-reorder-management.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section2Title={section2Title} section2Data={section2Data} />

            <section className="sol_order_mission1">
                <div className="text">
                    <h2>Why Choose Optigo for Your Wholesale Business?</h2>
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
