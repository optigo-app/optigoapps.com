import React from 'react';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce/E-commerce/omnichannel-ecommerce']);

import './page.scss';
import Industries from '@/components/Industries/Industries'

const page = () => {

    const mainTitle = "Omnichannel Jewellery E-commerce – Powered by OptigoApps";
    const mainDescription = `<strong>One Connected System for Website, Store, and Social Selling</strong>
    </br>
   In today’s jewellery market, customers shop across multiple platforms — from browsing designs on a website to confirming via WhatsApp and completing the purchase in-store. With <strong>OptigoApps</strong> Omnichannel E-commerce, your entire retail ecosystem stays connected in real-time, giving you full control, zero stock mismatch, and a seamless customer experience.`;
    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `Benefits for Jewellery Retailers & Wholesalers`;

    const section2Data = [
        {
            content: "One platform for all your channels"
        },
        {
            content: "No duplicate entries or manual syncing"
        },
        {
            content: "Increased transparency for customers and team"
        },
        {
            content: "Fewer phone calls, more self-service via portals"
        },
        {
            content: "Higher sales and better customer loyalty"
        },
    ]

    const section7Title = "Core Features of Optigo Omnichannel E-commerce"

    const section7Data = [
        {
            id: 1,
            title: "Unified Inventory Across All Channels",
            icon: "🔗",
            points: [
                "Manage single inventory for offline stores, website, and social media.",
                "Auto-update stock the moment a sale happens in any channel.",
                "Prevent overselling and mismatch errors."
            ]
        },
        {
            id: 2,
            title: "Integrated Website & ERP",
            icon: "⚙️",
            points: [
                "Fully synced with Optigo ERP for real-time product data.",
                "Automatic updates for metal rates, diamond prices, and stock availability.",
                "Manage catalogs, pricing, and orders from one platform."
            ]
        },
        {
            id: 3,
            title: "Click & Collect / Reserve Online",
            icon: "🛍️",
            points: [
                "Let customers order online and pick up in-store.",
                "Perfect for festivals, exhibitions, and high-demand seasons.",
                "Increase store footfall with online reservations."
            ]
        },
        {
            id: 4,
            title: "WhatsApp & Social Media Selling",
            icon: "📱",
            points: [
                "Share catalogs, order links, and payment requests via WhatsApp.",
                "Customers can confirm orders instantly without calling.",
                "Auto-sync these orders into ERP for processing."
            ]
        },
        {
            id: 5,
            title: "Personalized Customer Portals",
            icon: "👤",
            points: [
                "Track live production status of their orders.",
                "Download ledgers and statements.",
                "View invoices and shipment details.",
                "Reduces dependency on calls and emails."
            ]
        },
        {
            id: 6,
            title: "Real-Time Price & Stock Control",
            icon: "⏱️",
            points: [
                "Prices auto-update based on metal rates, diamond costs, and size variations.",
                "Stock levels update instantly across website, POS, and marketplaces."
            ]
        },
        {
            id: 7,
            title: "Payment & Shipping Integration",
            icon: "🚚",
            points: [
                "Accept secure online payments from customers.",
                "Integrated courier options with real-time tracking."
            ]
        },
        {
            id: 8,
            title: "Advanced Analytics & Reporting",
            icon: "📊",
            points: [
                "Get insights on channel-wise sales, top designs, and repeat customers.",
                "Monitor fast-selling products and stock movement in real-time."
            ]
        }
    ];


    const section3Data = [
        {
            content: "100% connected with ERP for real-time updates"
        },
        {
            content: "Cloud + Mobile access for teams on the go"
        },
        {
            content: "Advanced features like custom pricing, personalized catalogs, and real-time production tracking"
        },
        {
            content: "Designed specifically for Jewellery B2B and B2C businesses"
        },
    ];

    const section4Data = [
        {
            content: "Connect your website, POS, ERP, and social channels in one powerful platform."
        },
        {
            content: "Give your customers a seamless buying experience and your team full control over stock and sales."
        },
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/omnichannel-ecommerce.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section2Title={section2Title} section2Data={section2Data} />

            <div className="omni-wrapper left-content">
                <div className="omni-text">
                    <h2>💼 What is Omnichannel Jewellery E-commerce?</h2>
                    <p>
                        Omnichannel means all your sales channels work together on a single integrated system. Whether your customer buys from:
                    </p>
                    <ul>
                        <li>Your physical showroom</li>
                        <li>Your e-commerce website</li>
                        <li>WhatsApp or social media links</li>
                        <li>Marketplaces or third-party platforms</li>
                    </ul>
                    <p>Every order flows into one ERP-powered platform, keeping stock, pricing, and customer data unified.</p>
                </div>
                <div className="omni-image">
                    <img src="/omnichannel-jewellery-ecommerce.jpg" alt="Omnichannel Jewellery E-commerce" />
                </div>
            </div>

            <div className="omni-wrapper right-content">
                <div className="omni-image">
                    <img src="/why.jpeg" alt="Distributors Need omni" />
                </div>
                <div className="omni-text">
                    <h2>Why Jewellery Businesses Need Omnichannel Now?</h2>
                    <ul>
                        <li>Customers expect consistent pricing and availability across channels</li>
                        <li>Manual updates lead to errors, delays, and lost sales</li>
                        <li>Traditional systems cannot handle real-time stock syncing</li>
                        <li>Competitors are moving online — without Omnichannel, you lose visibility</li>
                    </ul>
                    <p><strong>OptigoApps</strong> ensures all channels talk to each other instantly, so you never oversell, misquote prices, or lose customers.</p>
                </div>

            </div>

            <section className="ecom_omni_ind_mission_3">
                <div className="text">
                    <h2>How OptigoApps Makes Omnichannel Different</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>Ready to Take Your Jewellery Business Omnichannel?</h2>
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
