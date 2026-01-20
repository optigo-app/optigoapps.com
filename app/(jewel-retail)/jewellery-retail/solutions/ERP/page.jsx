import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { generatePageMetadata } from "@/utils/HeadMeta";
import { pages } from "@/utils/pages";

export const metadata = generatePageMetadata(pages['/jewellery-retail/solutions/ERP']);

const page = () => {

    const mainTitle = "Optigo Apps - Complete Jewelry ERP Software Suite: OptigoRetail";
    const mainDescription = `<strong>OptigoApps</strong> offers a complete software suite for the jewelry industry, covering manufacturing, wholesale, and retail. Each solution is tailored to industry needs, providing automation, control, and real-time insights.`;
    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Explore our core modules designed to meet the real-world needs of modern jewellery businesses:"

    const section7Data = [
        {
            id: 1,
            title: "Saving Scheme Management",
            icon: "💰",
            points: [
                "Create and manage customer RD-based saving plans",
                "Auto-calculate maturity and benefits for each scheme"
            ]
        },
        {
            id: 2,
            title: "CRM for Retailers",
            icon: "📇",
            points: [
                "Track customer profiles, purchase history, and preferences",
                "Automate birthday, anniversary, and loyalty messages"
            ]
        },
        {
            id: 3,
            title: "Vendor Management",
            icon: "📦",
            points: [
                "Manage vendor profiles and purchases",
                "Track supplier repair jobs and quality inspections"
            ]
        },
        {
            id: 4,
            title: "POS Order Management",
            icon: "🧾",
            points: [
                "Create invoices and manage in-store orders efficiently",
                "Handle delivery, pick-up, and walk-in sales with ease"
            ]
        },
        {
            id: 5,
            title: "Repair Management",
            icon: "🔧",
            points: [
                "Receive repair requests with job slip generation",
                "Track the repair workflow until final delivery"
            ]
        },
        {
            id: 6,
            title: "Real-time Analytical Reports",
            icon: "📊",
            points: [
                "Access KPIs like daily sales, item trends, and conversions",
                "Generate insights to optimize retail performance"
            ]
        },
        {
            id: 7,
            title: "Billing & Accounts",
            icon: "💼",
            points: [
                "Generate GST-compliant bills with financial tracking",
                "Integrated ledgers and accounting reports"
            ]
        },
        {
            id: 8,
            title: "Old Gold Buyback Management",
            icon: "♻️",
            points: [
                "Accept old gold with instant valuation tools",
                "Convert old gold into custom/new orders easily"
            ]
        },
        {
            id: 9,
            title: "Retail Inventory Control",
            icon: "🏷️",
            points: [
                "Manage showroom-level stock and inventory issues",
                "Set reorder levels and SKU-wise thresholds"
            ]
        },
        {
            id: 10,
            title: "E-signature Approvals",
            icon: "✍️",
            points: [
                "Capture digital approvals for orders, estimates, and bills",
                "Speed up decision-making with secure signing"
            ]
        },
        {
            id: 11,
            title: "Stock Reconciliation Reports",
            icon: "🔍",
            points: [
                "Compare physical and system stock accurately",
                "Resolve discrepancies and maintain audit records"
            ]
        },
        {
            id: 12,
            title: "Memo & Approval Systems",
            icon: "📝",
            points: [
                "Manage memos for VIP customers and internal samples",
                "Track approvals and product return flows"
            ]
        },
        {
            id: 13,
            title: "Hallmark & Certificate Management",
            icon: "📄",
            points: [
                "Digitally attach hallmark or lab certificates",
                "Ensure compliance and easy retrieval for each sale"
            ]
        },
        {
            id: 14,
            title: "User Access Control",
            icon: "🔐",
            points: [
                "Assign role-based access to different staff levels",
                "Protect sensitive data with permission settings"
            ]
        },
        {
            id: 15,
            title: "Dynamic Price Management",
            icon: "📈",
            points: [
                "Manage pricing by gold rate, making charges, and offers",
                "Automate discount schemes and price adjustments"
            ]
        }
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/ret-erp.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />
        </>
    )
}

export default page
