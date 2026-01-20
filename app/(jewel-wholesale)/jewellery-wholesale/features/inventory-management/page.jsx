import React from "react";
import "./page.scss";
import Industries from "@/components/Industries/Industries";
import { generatePageMetadata } from "@/utils/HeadMeta";
import { pages } from "@/utils/pages";

export const metadata = generatePageMetadata(pages['/jewellery-wholesale/features/inventory-management']);

const page = () => {

    const mainTitle = "Inventory Management – OptigoApps";
    const mainDescription = `<strong>Complete Control Over Your Jewelry Inventory – Anytime, Anywhere</strong>
    <br />
    <strong>Optigo’s</strong> Inventory Management Module is built specifically for the B2B jewelry industry, addressing every complex requirement of inventory tracking, stock reconciliation, and real-time movement across locations. From polished diamonds to gold jewelry, raw materials to finished pieces – our system ensures 100% traceability, transparency, and automation.`;

    const mainButtonContent = "Explore more";

    const section = ["section7i"];

    const section7Titlei = "Key Features of Optigo’s Inventory Management";

    const section7Datai = [
        {
            id: 1,
            title: "Real-Time Stock Visibility",
            icon: "📡",
            points: [
                "Stay updated with real-time stock levels across all branches, showrooms, and production units.",
                "Whether you operate from a single location or manage multiple warehouses, Optigo offers centralized inventory control that helps avoid stock-outs, excesses, and manual mismatches.",
                "Key Features:",
                "Real-time inward/outward entry logging",
                "Location-wise and department-wise tracking",
                "Automatic stock updates on transactions (Sales, Purchase, Memo, Job work)",
                "Multi-branch inventory sync",
                "Role-based user controls for inventory access",
            ]
        },
        {
            id: 2,
            title: "Batch-wise & Barcode-enabled Inventory",
            icon: "🔖",
            points: [
                "Never lose track of any piece. Each item can be tracked via barcode scanning or batch numbers, helping you identify its exact movement, history, and location.",
                "Functionality includes:",
                "Barcode generation and printing",
                "Batch-wise inventory classification",
                "Variant tracking (purity, weight, type, certification)",
            ]
        },
        {
            id: 3,
            title: "Raw Material & Finished Goods Separation",
            icon: "⚖️",
            points: [
                "Track raw gold, diamonds, colored stones, findings, and more — separate from finished products. This makes it easy to monitor consumption, wastage, and conversion.",
                "Raw Material inward and usage tracking",
                "Mapping of raw-to-finished goods",
                "Karigar/raw material handover logs",
                "Job work integration for customer-supplied material",
            ]
        },
        {
            id: 4,
            title: "Reorder & Safety Stock Levels",
            icon: "🚨",
            points: [
                "Avoid business disruptions with intelligent alerts.",
                "Define reorder levels for each item",
                "Set safety stock thresholds",
                "Automated alerts and stock requests for low inventory",
            ]
        },
        {
            id: 5,
            title: "Loss Reduction & Stock Accuracy",
            icon: "📉",
            points: [
                "With integrated tracking and intelligent logs, Optigo helps minimize losses across your production, sales, or approval processes.",
                "Daily stock variance reporting",
                "Physical vs system stock reconciliation",
                "Pilferage and wastage monitoring",
                "Memo/Approval returns & adjustments",
            ]
        },
        {
            id: 6,
            title: "Approval Memo & Temporary Transfer Handling",
            icon: "📝",
            points: [
                "Handle items on approval or consignment with full visibility and accountability.",
                "Memo creation with auto-due date tracking",
                "Return management with condition logging",
                "Approval to sale conversion",
            ]
        },
        {
            id: 7,
            title: "Powerful Stock Reports & Audit Tools",
            icon: "📊",
            points: [
                "Optigo offers detailed reporting for audit, valuation, and decision-making.",
                "Item ledger, movement, and balance reports",
                "Branch-wise inventory valuation",
                "Audit logs and role-wise tracking",
                "GST-ready reports with HSN/SAC code tagging",
            ]
        },
        {
            id: 8,
            title: "Seamless Integration with Other Modules",
            icon: "🔗",
            points: [
                "The inventory system is deeply integrated with:",
                "Sales & Billing – auto deduction of sold items",
                "Production – raw consumption & job tracking",
                "Accounts – auto updates for asset tracking",
                "Repair Management – item in/out tracking for repair jobs",
            ]
        }
    ];

    const section3Data = [
        {
            content: "Built for the jewelry trade – handles metals, stones, and finished goods distinctly"
        },
        {
            content: "Reduces stock mismatch losses and enhances speed"
        },
        {
            content: "Barcode, QR, image & certificate tracking in one place"
        },
        {
            content: "Enables multi-user, multi-branch, multi-device access"
        },
        {
            content: "Your inventory is your core asset — let Optigo manage it intelligently, efficiently, and securely."
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/wholesale-inventory-management.jpg"} mainButtonContent={mainButtonContent} section={section} section7Titlei={section7Titlei} section7Datai={section7Datai} />

            <section className="sol_wh_inven_business_mission1">
                <div className="text">
                    <h2>Why Optigo Inventory Management?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default page;
