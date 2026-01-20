import React from "react";
import Industries from "@/components/Industries/Industries";
import { pages } from "@/utils/pages";
import { generatePageMetadata } from "@/utils/HeadMeta";

export const metadata = generatePageMetadata(pages['/jewellery-retail/features']);

const page = () => {

    const mainTitle = "Jewellery ERP for Retailers – OptigoApps";
    const mainDescription = `
    <strong>OptigoApps</strong> offers a next-gen Jewellery ERP tailored for retailers, uniting showroom management, inventory, billing, CRM, e-commerce, and analytics in one seamless platform. Whether for gold, diamond, silver, or CZ jewellery, Optigo delivers speed, control, and visibility—ideal for single stores, chains, and franchises.`;

    const mainButtonContent = "Explore more";

    const section = ["section7i1"];

    const section7Titlei1 = "Comprehensive Features of Optigo Jewellery ERP for Retail";

    const section7Datai1 = [
        {
            id: 1,
            title: "Jewellery Billing & Estimation",
            icon: "🧾",
            points: [
                "Create fast and accurate bills using barcode/RFID-based scanning.",
                "Automate price calculations with real-time metal rate updates.",
                "Generate estimates for walk-in customers and convert them to orders in a single click.",
            ]
        },
        {
            id: 2,
            title: "Design / SKU Management",
            icon: "💎",
            points: [
                "Manage your entire design catalog with SKU-wise classification including metal type, purity, stone details, collection, category, brand, and more.",
                "Easily track inventory availability and reorder needs.",
            ]
        },
        {
            id: 3,
            title: "Customer CRM & Loyalty",
            icon: "🤝",
            points: [
                "Track customer history, preferences, birthdays, and anniversaries.",
                "Launch loyalty programs, reward points, and special offers.",
                "Send personalized promotions via WhatsApp, SMS, or email directly from the system.",
            ]
        },
        {
            id: 4,
            title: "Multi-Branch & Franchise Management",
            icon: "🏬",
            points: [
                "Manage pricing, inventory, billing, and reports across multiple branches or franchisees from a central dashboard.",
                "Standardize operations and get real-time visibility into each outlet’s performance.",
            ]
        },
        {
            id: 5,
            title: "Order Management",
            icon: "📝",
            points: [
                "Capture customized or repeat orders from customers with complete specifications.",
                "Set order priority and promise dates.",
                "Share order details on WhatsApp/email and get customer confirmation through e-signature to prevent disputes.",
            ]
        },
        {
            id: 6,
            title: "Inventory Management",
            icon: "📦",
            points: [
                "Track stock in real-time with barcode, QR, and RFID-coded tagging from raw materials to finished goods.",
                "Segment raw materials by shape, size, color, quality.",
                "Classify finished products by 8 levels including product type, collection, brand, purity, etc.",
            ]
        },
        {
            id: 7,
            title: "Subcontractor / Karigar Management",
            icon: "🛠️",
            points: [
                "Manage job orders, issue raw materials, track status, returns, and balance sheets with karigars and vendors.",
                "Monitor gold wastage, output, and time for every production stage.",
            ]
        },
        {
            id: 8,
            title: "Buy Back / Old Gold Exchange",
            icon: "🔁",
            points: [
                "Handle old gold purchases and exchanges accurately with automatic valuation and proper GST billing.",
                "Maintain audit trails and link transactions to customer accounts for complete transparency.",
            ]
        },
        {
            id: 9,
            title: "Digital Catalogue",
            icon: "🖼️",
            points: [
                "Showcase your jewellery designs digitally to customers in-store or remotely.",
                "Share design links instantly and track customer interest.",
            ]
        },
        {
            id: 10,
            title: "Discount & Scheme Management",
            icon: "🏷️",
            points: [
                "Set up promotional offers, flat or slab-wise discounts, and sales schemes.",
                "Auto-apply discounts at billing and monitor their effectiveness.",
            ]
        },
        {
            id: 11,
            title: "Pricing Rules",
            icon: "⚖️",
            points: [
                "Define pricing logic based on metal purity, diamond/carat rate, making charges, and customer category.",
                "Ensure consistent and profitable pricing across branches.",
            ]
        },
        {
            id: 12,
            title: "Repair Management",
            icon: "🔧",
            points: [
                "Manage jewellery repairs from customer drop-off to final delivery.",
                " Assign tasks to karigars, track repair progress, and notify customers.",
            ]
        },
        {
            id: 13,
            title: "Financial Control & Accounting",
            icon: "💰",
            points: [
                "Integrated accounting with real-time updates from every transaction.",
                "Manage ledger entries, GST, balance sheets, and reconciliation with ease.",
            ]
        },
        {
            id: 14,
            title: "Barcode / RFID Management",
            icon: "📡",
            points: [
                "Use barcode and RFID tags for every product and raw material.",
                "Enable fast physical audits, tag scanning, and real-time stock updates.",
            ]
        },
        {
            id: 15,
            title: "Reports & Retail Analytics",
            icon: "📊",
            points: [
                "Get powerful reports and dashboards on sales, footfall conversion, top-selling styles, schemes, customer trends, and more.",
                "Make informed decisions using actionable data."
            ]
        },
        {
            id: 16,
            title: "E-Invoicing & GST Compliance",
            icon: "📄",
            points: [
                "Generate GST-compliant e-invoices and e-way bills directly from the system.",
                "Ensure seamless regulatory compliance and audit readiness.",
            ]
        },
        {
            id: 17,
            title: "Payroll & HR",
            icon: "👨‍💼",
            points: [
                "Handle staff salaries, incentives, attendance, and shifts.",
                "Configure payroll components and automate monthly payroll processing."
            ]
        },
        {
            id: 18,
            title: "Kitty / Chit Fund Schemes",
            icon: "🏦",
            points: [
                "Manage gold savings schemes like kitty or chit-fund.",
                "Track customer contributions, maturity dates, and redemption status.",
            ]
        },
        {
            id: 19,
            title: "Audit Trail & Data Security",
            icon: "🔐",
            points: [
                "Maintain a complete log of every activity in the system.",
                "Track user actions and ensure data protection with advanced role-based access controls."
            ]
        }
    ];


    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/ret-features.jpg"} mainButtonContent={mainButtonContent} section={section} section7Titlei1={section7Titlei1} section7Datai1={section7Datai1} />
        </>
    );
};

export default page;
