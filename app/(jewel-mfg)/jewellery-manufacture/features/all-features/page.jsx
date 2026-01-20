import React from "react";
import "./page.scss";
import Industries from "@/components/Industries/Industries";
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/features/all-features']);

const page = () => {

    const mainTitle = "Jewellery ERP System – Feature: MANUFACTURE";
    const mainDescription = `<strong>Smarter Cloud-Based Jewellery Manufacturing with OptigoApps</strong>
    <br />
    <strong>OptigoApps</strong> is a cloud-based ERP for jewellery manufacturing that offers real-time tracking of production, inventory, and orders. Manage materials, karigars, and job slips in one place. Automate costing, wastage, and barcode tracking — no more spreadsheets or delays, just faster, smarter operations.`;

    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Key Features of Optigo’s Jewellery ERP System";

    const section7Data = [
        {
            id: 1,
            title: "Product Development",
            icon: "🎨",
            points: [
                "Helps streamline the complete journey of jewellery creation—from concept to approval—so designers and manufacturers can collaborate in one place.",
                "This feature ensures faster design cycles, accurate material planning, and easy reference for future production.",
            ]
        },
        {
            id: 2,
            title: "Style Master",
            icon: "📁",
            points: [
                "Serves as a centralized design repository for all jewellery styles, which helps teams avoid duplication, maintain uniformity in catalogues, and speed up production referencing.",
                "It's essential for long-term product standardization and ease of reordering.",
            ]
        },
        {
            id: 3,
            title: "Estimate Generation",
            icon: "🧮",
            points: [
                "Quickly calculates accurate cost estimates for new designs, including metal, stone, labor, and making charges.",
                "This helps sales teams quote transparently, while customers get faster approvals due to clear pricing breakdowns.",
            ]
        },
        {
            id: 4,
            title: "Order Management",
            icon: "📋",
            points: [
                "Provides a real-time dashboard to manage all customer orders, their production status, and delivery schedules.",
                "This feature ensures nothing slips through the cracks and all departments work in sync for on-time order fulfilment.",
            ]
        },
        {
            id: 5,
            title: "Procurement & Purchase",
            icon: "🛒",
            points: [
                "Automates and manages the purchasing process, ensuring the right material is procured at the best price and time.",
                "This reduces overstocking or last-minute shortages and helps maintain smooth production flow.",
            ]
        },
        {
            id: 6,
            title: "Inventory Management",
            icon: "📦",
            points: [
                "Provides complete control over raw, in-process, and finished stock.",
                "This feature helps prevent dead stock, ensures timely replenishment, and maintains production-ready inventory levels at all times.",
            ]
        },
        {
            id: 7,
            title: "Stone Inventory Management",
            icon: "💎",
            points: [
                "Tracks every stone by category, size, and quality.",
                "This is critical in jewellery where stone cost significantly affects pricing and ensures accurate usage across designs without loss or misplacement.",
            ]
        },
        {
            id: 8,
            title: "Stock Valuation",
            icon: "💰",
            points: [
                "Automatically calculates the monetary value of current stock, based on real-time inventory and market rates.",
                "This ensures your financial books reflect true inventory value, which is essential for P&L, audits, and decision-making.",
            ]
        },
        {
            id: 9,
            title: "Sequential Manufacturing Process",
            icon: "🏭",
            points: [
                "Breaks down production into defined steps like casting, filing, setting, and polishing.",
                "This helps allocate jobs more efficiently, track WIP items, and avoid delays or rework in manufacturing.",
            ]
        },
        {
            id: 10,
            title: "Subcontracting Job Work",
            icon: "🔁",
            points: [
                "Helps manage outsourced tasks efficiently by tracking issued stock, expected returns, and karigar payments.",
                "This is crucial when dealing with external labor to maintain quality and quantity consistency.",
            ]
        },
        {
            id: 11,
            title: "Post-Manufacturing Costing",
            icon: "📈",
            points: [
                "Auto-calculates the final cost of a jewellery piece after all manufacturing stages.",
                "This is useful for pricing, profitability analysis, and understanding actual margins after accounting for losses and overheads.",
            ]
        },
        {
            id: 12,
            title: "Barcode Management & Invoicing",
            icon: "🏷️",
            points: [
                "Generates unique barcodes for products which can be used for tracking, stock auditing, and billing.",
                "This speeds up sales processing, ensures inventory accuracy, and eliminates manual entry errors.",
            ]
        },
        {
            id: 13,
            title: "MRP & Rate Management",
            icon: "📉",
            points: [
                "Automates pricing calculations based on real-time metal and stone rates.",
                "This is useful for offering consistent pricing across sales channels and maintaining profit margins even during rate fluctuations.",
            ]
        },
        {
            id: 14,
            title: "Stock Reservation",
            icon: "📌",
            points: [
                "Allows businesses to reserve specific stock against orders or customers.",
                "Avoids dispatch errors",
                "Prioritizes high-value clients"
            ]
        },
        {
            id: 15,
            title: "Sales & Distribution",
            icon: "🚚",
            points: [
                "Tracks every stage of the sales cycle—from enquiry to dispatch—while managing credit limits, delivery logistics, and dealer pricing.",
                "This helps businesses grow across geographies with organized distribution.",
            ]
        },
        {
            id: 16,
            title: "Loss Management",
            icon: "📉",
            points: [
                "Monitors material loss at each manufacturing step (e.g., melting, polishing).",
                "This is critical to control wastage, improve recovery, and maximize profit by refining production processes.",
            ]
        },
        {
            id: 17,
            title: "Dust Collection & Refining",
            icon: "🌪️",
            points: [
                "Logs precious metal dust collected during production and calculates its recovery after refining.",
                "This hidden value significantly adds to profitability and should be tracked diligently.",
            ]
        },
        {
            id: 18,
            title: "Repair Management",
            icon: "🛠️",
            points: [
                "Helps track customer repair items—from intake to delivery—with updates on repair cost and time.",
                "This builds customer trust and adds value to post-sale service.",
            ]
        },
        {
            id: 19,
            title: "Financial Accounting",
            icon: "📚",
            points: [
                "Offers full accounting with auto-posting from all operations (sales, purchase, payroll, inventory).",
                "This ensures accurate financial reports without duplicating efforts, reducing reliance on third-party tools.",
            ]
        },
        {
            id: 20,
            title: "Profit & Loss Reports",
            icon: "📊",
            points: [
                "Generates profit reports by product, order, or customer, making it easier to identify what's working and what's not.",
                "This supports better pricing and sales strategies.",
            ]
        },
        {
            id: 21,
            title: "GST & Tax Reporting",
            icon: "🧾",
            points: [
                "Auto-generates GST returns and HSN-wise summaries from all transactions.",
                "This is essential for regulatory compliance, audit preparedness, and smooth tax filing.",
            ]
        },
        {
            id: 22,
            title: "Multi-Store Management",
            icon: "🏬",
            points: [
                "Allows centralized control over multiple locations, warehouses, or branches.",
                "This ensures consistent policies, real-time stock sharing, and performance tracking across your entire retail or wholesale network.",
            ]
        },
        {
            id: 23,
            title: "Accurate & Reliable Accounting",
            icon: "✅",
            points: [
                "Minimizes financial errors with system validations, integrated modules, and user accountability.",
                "This builds trust in your financial data and supports informed business decisions.",
            ]
        },
        {
            id: 24,
            title: "Smart Stock Optimization",
            icon: "📦",
            points: [
                "Uses smart insights like reorder alerts and fast/slow-moving analysis to keep your stock levels lean and efficient.",
                "This cuts costs and ensures product availability.",
            ]
        },
        {
            id: 25,
            title: "Payroll & Salary Management",
            icon: "💼",
            points: [
                "Automates employee salary calculations based on attendance, incentives, and tax deductions.",
                "This saves time, reduces HR errors, and ensures timely staff payments.",
            ]
        },
        {
            id: 26,
            title: "Production Planning & Control (PPC)",
            icon: "🗓️",
            points: [
                "Helps schedule, assign, and track production jobs.",
                "This is vital to meet delivery deadlines, manage workloads, and ensure efficient use of time and materials.",
            ]
        },
        {
            id: 27,
            title: "MIS & Business Reports",
            icon: "📑",
            points: [
                "Offers export-ready and dashboard reports across all departments.",
                "This helps business owners take quicker and more confident decisions based on data.",
            ]
        },
        {
            id: 28,
            title: "Role-Based Security",
            icon: "🔐",
            points: [
                "Restricts access based on user roles and maintains approval workflows. ",
                "This keeps your critical business data secure while maintaining accountability across the organization.",
            ]
        }
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/manufacturer-features.jpg"} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />
        </>
    );
};

export default page;
