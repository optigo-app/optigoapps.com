import React from 'react';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce/E-commerce/real-time-connected-b2b-ecommerce']);

import './page.scss';
import Industries from '@/components/Industries/Industries'

const page = () => {

    const mainTitle = "Jewellery B2b Website – Powered by OptigoApps";
    const mainDescription = `<strong>Your Factory & Wholesale Network, Digitally Connected</strong>
    </br>
   Jewellery distribution is complex – multiple dealers, different price levels, bulk orders, and custom product requirements. Managing this manually through calls and spreadsheets slows down your business. <strong>OptigoApps</strong> Jewellery Distribution Website empowers wholesalers and manufacturers to build a digital distribution network, where every dealer, sub-dealer, and retailer can place orders online with their own price levels, discounts, and credit terms – fully connected with ERP for real-time inventory, pricing, and order status.`;
    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `Benefits for Jewellery Distributors & Wholesalers`;

    const section2Data = [
        {
            content: "Digitize your dealer network – fewer calls, faster orders."
        },
        {
            content: "Increase order frequency with an easy online platform."
        },
        {
            content: "Reduce errors with automated ERP sync."
        },
        {
            content: "Enhance transparency and build customer trust."
        },
    ]

    const section7Title = "Core Features of Optigo Distribution Website"

    const section7Data = [
        {
            id: 1,
            title: "Customer-Specific Price Control",
            icon: "🎯",
            points: [
                "Set custom price lists for each distributor or retailer.",
                "Configure tier-wise discounts and credit terms.",
                "Dynamic pricing based on metal rate, diamond cost, and weight."
            ]
        },
        {
            id: 2,
            title: "Controlled Product Visibility",
            icon: "🕵️",
            points: [
                "Show specific designs only to selected customers.",
                "Enable collection-based access for different regions or categories."
            ]
        },
        {
            id: 3,
            title: "Bulk & Reorder Management",
            icon: "📦",
            points: [
                "Easy bulk order placement for repeat designs.",
                "Quick reorder from past purchase history.",
                "Support for multiple SKUs and size variations in one click."
            ]
        },
        {
            id: 4,
            title: "ERP-Integrated Stock & Pricing",
            icon: "⚙️",
            points: [
                "Real-time stock updates across distribution network.",
                "Automatic price updates when metal rates change.",
                "Offline and online sales synced instantly to prevent overselling."
            ]
        },
        {
            id: 5,
            title: "Customer Self-Service Portal",
            icon: "🧑‍💻",
            points: [
                "View available stock in real time.",
                "Track order status and delivery progress.",
                "Download ledgers, invoices, and statements.",
                "Reduces dependency on sales team for basic queries."
            ]
        },
        {
            id: 6,
            title: "Multi-Tier Dealer Management",
            icon: "🏷️",
            points: [
                "Handle distributors, sub-dealers, and retailers in one platform.",
                "Assign custom pricing, credit, and product access per level."
            ]
        },
        {
            id: 7,
            title: "Advanced Features for Jewellery Distribution",
            icon: "💎",
            points: [
                "Multiple images and videos per product.",
                "Live updates on bestseller and trending products.",
                "Integrated payment gateways and shipping partners."
            ]
        }
    ];


    const section3Data = [
        {
            content: "Built specifically for jewellery B2B workflows."
        },
        {
            content: "Fully integrated with Optigo ERP for stock, billing, and pricing."
        },
        {
            content: "Scalable for regional, national, and international distribution networks."
        },
        {
            content: " Mobile-friendly, clean UI for easy adoption by dealers."
        },
    ];

    const section4Data = [
        {
            content: "Make ordering faster, smarter, and 100% transparent for your dealers."
        },
        {
            content: "OptigoApps brings everything into one connected platform."
        },
        {
            content: "Mobile app is also available."
        },
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/app-ecom-jewellery-retailers.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section2Title={section2Title} section2Data={section2Data} />

            <div className="b2b-wrapper left-content">
                <div className="b2b-text">
                    <h2>💼 What is a Jewellery B2B Website?</h2>
                    <p>
                        A B2B e-commerce platform designed for factories, wholesale, and multi-tier jewellery businesses, where:
                    </p>
                    <ul>
                        <li>Distributors and retailers log in to view products and place orders.</li>
                        <li>Each customer sees their own pricing and offers.</li>
                        <li>Orders sync automatically with ERP for stock, billing, and delivery.</li>
                        <li>Complete control over visibility, pricing, and credit limits.</li>
                    </ul>
                </div>
                <div className="b2b-image">
                    <img src="/ecom-sol-2.jpeg" alt="B2B Website" />
                </div>
            </div>

            <div className="b2b-wrapper right-content">
                <div className="b2b-image">
                    <img src="/why.jpeg" alt="Distributors Need B2B" />
                </div>
                <div className="b2b-text">
                    <h2>Why Jewellery Distributors Need This?</h2>
                    <ul>
                        <li>Reduce manual calls and WhatsApp follow-ups for orders.</li>
                        <li>Eliminate errors in stock availability and pricing.</li>
                        <li>Faster order processing across multiple regions.</li>
                        <li>Transparent access to live stock, invoices, and ledgers.</li>
                    </ul>
                </div>
            </div>

            <section className="ecom_b2b_ind_mission_3">
                <div className="text">
                    <h2>Why OptigoApps for Jewellery Distribution E-commerce?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>Go Digital with Your Jewellery Distribution Network</h2>
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
