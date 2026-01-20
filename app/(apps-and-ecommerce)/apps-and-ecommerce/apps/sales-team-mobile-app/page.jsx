import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce/apps/sales-team-mobile-app']);

const page = () => {

    const mainTitle = "Optigo Express – Scan. Sell. Sync. Anywhere.";
    const mainDescription = `Carry your entire inventory in your pocket. Scan tags, create invoices, and place orders in real time—all seamlessly connected to your Optigo ERP. Go paperless, go professional, go Express.`;

    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `Designed for the Modern Jewellery Business`;

    const section2Data = [
        {
            content: "Optigo Express is more than just an app—it’s your mobile sales companion."
        },
        {
            content: " Enable your team to sell smart, work faster, and deliver exceptional customer service with a tool that’s designed specifically for the jewellery industry."
        },
        {
            content: "Experience the future of mobile jewellery sales with Optigo Express."
        },
        {
            content: "Streamline. Simplify. Sell smart."
        },
    ]

    const section7Title = "Why Optigo Express?"

    const section7Data = [
        {
            id: 1,
            title: "Scan. Sell. Sync. Instantly.",
            icon: "✅",
            points: [
                "Just scan the jewellery tag from your mobile and close the deal right there—whether it’s a direct sale, memo, or approval.",
                "Lightning-fast, error-free, and effortless transactions on the go."
            ]
        },
        {
            id: 2,
            title: "No More Pricing Confusion",
            icon: "✅",
            points: [
                "Say goodbye to manual pricing and bargaining.",
                "With pre-set rates in the system, every sale stays accurate, consistent, and transparent across all your channels."
            ]
        },
        {
            id: 3,
            title: "Smart ERP-Connected Billing",
            icon: "✅",
            points: [
                "Generate bills directly from Optigo ERP — 100% policy-compliant, automated, and instant.",
                "Share invoices with customers via WhatsApp or email in seconds for a seamless and trustworthy experience."
            ]
        },
        {
            id: 4,
            title: "Live Order Sync with ERP",
            icon: "✅",
            points: [
                "Place confirmed orders in real time — from stock or sample lines.",
                "Every sale auto-syncs with Optigo ERP, ensuring zero duplication, zero delay, and complete visibility."
            ]
        },
        {
            id: 5,
            title: "Go Paperless. Look Professional. Stay Powerful.",
            icon: "✅",
            points: [
                "No more catalogs, printouts, or spreadsheets.",
                "Optigo Express turns your entire sales process digital — making your brand look modern, organized, and customer-ready anywhere, anytime."
            ]
        }
    ];

    const section6Title = "Revolutionize Jewellery Sales with Optigo Express"
    const section6Description = `Experience the future of mobile jewellery sales with <strong style='color: #FFDE21'>Optigo Express</strong>. Streamline. Simplify. Sell smart.`

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/sales-team-mobile-app.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data}
                //  section6Title={section6Title} section6Description={section6Description}
                section2Title={section2Title} section2Data={section2Data} />
        </>
    )
}

export default page
