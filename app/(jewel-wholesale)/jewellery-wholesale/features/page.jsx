import React from "react";
import Industries from "@/components/Industries/Industries";
import { generatePageMetadata } from "@/utils/HeadMeta";
import { pages } from "@/utils/pages";

export const metadata = generatePageMetadata(pages['/jewellery-wholesale/features']);

const page = () => {

    const mainTitle = "Jewellery ERP System – Feature: WHOLESALE";
    const mainDescription = `<strong>WHOLSALE</strong>
    <br />
    <strong>OptigoApps Wholesale ERP</strong> is a cloud-based platform built for jewellery wholesalers to streamline operations and scale with ease. Manage pricing, inventory, vendors, and multi-branch activities in real time. With smart scanning, digital catalogues, and integrated P&L and GST reports, it helps you work faster and more accurately. Automate billing, payroll, and alerts—reducing manual effort and improving decision-making.`;

    const mainButtonContent = "Explore more";

    const section = ["section7i1"];

    const section7Titlei1 = "Innovative Features";

    const section7Datai1 = [
        {
            id: 1,
            title: "Design",
            icon: "🎨",
            points: [
                "The design module allows users to digitally manage the complete jewellery design process—from idea generation to production handover.",
                "It helps create design records with images, specifications, approvals, and related costs.",
                "This feature ensures clear communication between designers, production teams, and sales departments, preventing errors in custom or bulk design execution.",
                "Every design entry can be tracked and reused for future orders or reference."
            ]
        },
        {
            id: 2,
            title: "CRM (Customer Relationship Management)",
            icon: "👥",
            points: [
                "This feature centralizes all customer data, communication history, and buying behavior in one place.",
                "It supports follow-ups, inquiries, and categorization of clients based on their preferences or purchase patterns.",
                "By having a clear view of customer interactions and history, teams can improve service, send targeted offers, and maintain stronger client relationships across retail or wholesale operations.",
            ]
        },
        {
            id: 3,
            title: "Dynamic Scalability",
            icon: "📈",
            points: [
                "The system supports business growth without performance compromises.",
                "Whether expanding to more users, multiple branches, or handling increasing data, the ERP remains responsive and adaptable.",
                "Businesses can activate additional features, locations, or user roles instantly—ensuring long-term flexibility without needing to migrate to a new platform.",
            ]
        },
        {
            id: 4,
            title: "Subcontractor Job Work Management",
            icon: "👷‍♂️",
            points: [
                "Jewellery manufacturing often involves multiple karigars or vendors working externally",
                "This feature provides complete control over job work, including raw material issue, job status, due dates, labor cost calculation, and final output.",
                "It maintains clarity and accountability in outsourced work, reduces manual follow-ups, and ensures timely delivery."
            ]
        },
        {
            id: 5,
            title: "Order Management",
            icon: "📋",
            points: [
                "Handle bulk and custom orders with structured processes that track each order from creation to delivery.",
                "The module includes stages like order approval, material allocation, production monitoring, and dispatch tracking.",
                " It simplifies large-order execution by offering full visibility and timely alerts, preventing errors and ensuring on-time fulfillment.",
            ]
        },
        {
            id: 6,
            title: "Multi-Branch Operations",
            icon: "🏢",
            points: [
                "This feature allows centralized control of operations across multiple locations—whether it’s showrooms, warehouses, or offices.",
                "Each branch can operate independently with their own data access, billing, and reporting, while the head office retains full oversight.",
                "This ensures consistency in stock, pricing, and performance tracking across the entire network.",
            ]
        },
        {
            id: 7,
            title: "Material Planning & Allocation",
            icon: "🧮",
            points: [
                "The system automatically generates material requirement plans based on confirmed orders and current stock levels.",
                "It helps procurement teams plan purchases in advance, reduce overstocking, and prevent production halts due to shortages.",
                "It ensures that the right materials are allocated to the right orders at the right time.",
            ]
        },
        {
            id: 8,
            title: "Inventory Control & Management",
            icon: "📦",
            points: [
                "Gain real-time control of inventory across categories, branches, and stock locations.",
                "The system tracks item movement, purchase, sales, repairs, and wastage with serial or barcode-level accuracy.",
                "Alerts for low stock, expiry, or non-moving items ensure better decisions, reduced loss, and optimal stock levels.",
            ]
        },
        {
            id: 9,
            title: "Item Service & Repair Tracking",
            icon: "🛠️",
            points: [
                "This module helps record, track, and manage jewellery service and repair jobs received from clients or internal departments.",
                "It logs details like item condition, expected completion time, repair cost, and delivery status.",
                "All entries are linked to the client profile and help build transparency, trust, and post-sale satisfaction.",
            ]
        },
        {
            id: 10,
            title: "Digitized Product Catalogue",
            icon: "📸",
            points: [
                "Create and maintain a digital catalogue of all your jewellery designs and SKUs with high-quality images, specifications, pricing, and availability.",
                "It becomes an ideal tool for both internal sales teams and customer presentations.",
                "The catalogue can be accessed online or offline and helps eliminate the need for physical samples in many cases.",
            ]
        },
        {
            id: 11,
            title: "Integrated E-commerce Sync",
            icon: "🔄",
            points: [
                "This feature allows seamless synchronization between your ERP system and e-commerce platforms or B2B portals.",
                "Product stock, images, prices, and orders update automatically in both systems, eliminating manual data duplication.",
                "It ensures consistent customer experience across physical and digital channels.",
            ]
        },
        {
            id: 12,
            title: "Smart Scanning (RFID/Barcode/QR)",
            icon: "🔍",
            points: [
                "Supports fast and accurate identification of items using multiple scanning technologies.",
                "Whether managing inventory, billing, repair, or dispatch, scanning eliminates manual errors and improves operational speed.",
                "Compatibility with advanced tags ensures modernized stock tracking in showrooms and warehouses.",
            ]
        },
        {
            id: 13,
            title: "Flexible Rate & Price Management",
            icon: "💲",
            points: [
                "Manage customized pricing structures based on gold rates, customer category, location, or karat.",
                "The system allows flexible pricing rules and automates updates across product lists.",
                "It helps maintain consistency in quotes, billing, and catalogue prices without manual calculations.",
            ]
        },
        {
            id: 14,
            title: "Sales Tracking & Insights",
            icon: "📊",
            points: [
                "Access comprehensive reports to track sales performance by item, branch, customer, or salesperson.",
                "This module gives clear visibility into which products are in demand, which locations are underperforming, and how seasonal trends affect sales.",
                "It helps with strategic planning and inventory decisions.",
            ]
        },
        {
            id: 15,
            title: "Financial Overview (P&L)",
            icon: "💹",
            points: [
                "Automatically calculates Profit & Loss based on your real-time sales, purchases, expenses, and other financial transactions.",
                "The integrated view helps management quickly assess business health, identify cost leaks, and plan for profitability improvements—without depending on external tools."
            ]
        },
        {
            id: 16,
            title: "Compliant GST Stock Reporting",
            icon: "🧾",
            points: [
                "Generate GST-ready reports like GSTR-1 and GSTR-3B with complete linkage to stock and sales data.",
                "This ensures compliance with Indian tax laws, reduces manual work, and helps avoid penalties.",
                "Reports are formatted and export-ready for CA or government submission.",
            ]
        },
        {
            id: 17,
            title: "Transactional SMS Alerts",
            icon: "📲",
            points: [
                "Keep customers updated with automated transactional SMS alerts for order confirmation, repair readiness, delivery status, and payment receipts.",
                "This feature improves communication and service without involving promotional or spam messaging."
            ]
        },
        {
            id: 18,
            title: "Reliable Financial Accuracy",
            icon: "🧮",
            points: [
                "With accounting tightly integrated into sales, purchase, payroll, and inventory, the system ensures error-free financial data.",
                "It eliminates manual double entry, enables faster reconciliations, and supports secure audits.",
                "You get consistent and trustworthy records for every transaction.",
            ]
        },
        {
            id: 19,
            title: "Purchase & Procurement Management",
            icon: "🛒",
            points: [
                "Plan and manage all procurement activities from quotation requests to PO creation, GRN, and vendor payments.",
                "Track delivery timelines, item costs, and supplier performance to maintain control over purchases and reduce unnecessary spending."
            ]
        },
        {
            id: 20,
            title: "Vendor & Karigar Relationship Management",
            icon: "🤝",
            points: [
                "Manage detailed profiles for all vendors and karigars with job records, payment status, and item performance.",
                "This module helps assign work, monitor timelines, and settle payments accurately, ensuring transparency and better supplier relationships."
            ]
        },
        {
            id: 21,
            title: "Role-Based Access & Security",
            icon: "🔐",
            points: [
                "Enhance data privacy by assigning role-wise access to users.",
                "Each employee or user can be limited to specific modules, actions, or reports—ensuring only authorized individuals can access sensitive data like pricing, finances, or customer details."
            ]
        },
        {
            id: 22,
            title: "Excel-Based Salary Upload",
            icon: "📤",
            points: [
                "Easily upload staff salaries using Excel templates without the need for a full HR module.",
                "This feature supports monthly payroll entries, tracks payment status, and integrates with accounting for expense recording and audit clarity."
            ]
        }
    ];


    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/whole-features.jpg"} mainButtonContent={mainButtonContent} section={section} section7Titlei1={section7Titlei1} section7Datai1={section7Datai1} />
        </>
    );
};

export default page;
