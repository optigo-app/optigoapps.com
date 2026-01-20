import React from "react";
import "./page.scss";
import Industries from "@/components/Industries/Industries";
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/features/sales-billing']);

const page = () => {

    const mainTitle = "Sales & Billing – OptigoApps";
    const mainDescription = `<strong>Fast, Flexible & Compliant Jewelry Billing for Every Business Model</strong>
    <br />
    <strong>Optigo’s</strong> Sales & Billing Module delivers a complete billing ecosystem for jewelry manufacturers, wholesalers, and retailers. Whether you’re selling across a showroom, exhibition, or online platform — Optigo simplifies and automates your entire billing cycle, ensuring speed, accuracy, and tax compliance at every step.`;

    const mainButtonContent = "Explore more";

    const section = ["section7i"];

    const section7Titlei = "Key Features of Optigo’s Orders & Repair Management";

    const section7Datai = [
        {
            id: 1,
            title: "Versatile Billing Formats",
            icon: "🧾",
            points: [
                "Generate customized invoices tailored to different customer types and sales channels — all from one platform.",
                "Retail billing with GST and hallmark integration",
                "Wholesale, memo, and approval billing support",
                "B2B & B2C invoice compatibility",
                "Multi-currency billing for export clients",
                "Batch billing and backdated entries"
            ]
        },
        {
            id: 2,
            title: "Integrated Taxation & Compliance",
            icon: "📑",
            points: [
                "Stay 100% compliant with built-in GST-ready formats and export documentation.",
                "Auto GST calculation & tagging",
                "HSN/SAC code integration",
                "E-invoice and e-way bill generation (API integrated)",
                "TCS, discounts, and scheme handling"
            ]
        },
        {
            id: 3,
            title: "Customer-wise Pricing & Discounts",
            icon: "🏷️",
            points: [
                "Apply customer-specific rates and flexible discount schemes without manual errors.",
                "Category-wise price configuration (retailers, resellers, distributors)",
                "Custom pricing slabs based on weight/design/type",
                "Promotional discount tracking",
            ]
        },
        {
            id: 4,
            title: "Barcode, Memo & Approval Integration",
            icon: "🔖",
            points: [
                "Link barcode scanning directly to sales and streamline your approval-to-billing process.",
                "Barcode-enabled item selection at POS",
                "Convert memo/approval to invoice easily",
                "Return memo and re-issue handling"
            ]
        },
        {
            id: 5,
            title: "Real-Time Inventory Sync",
            icon: "📦",
            points: [
                "Avoid over-selling or manual errors with automatic inventory deduction during billing.",
                "Live stock check at POS",
                "Auto deduction of sold pieces",
                "Integration with order, production, and repair modules"
            ]
        },
        {
            id: 6,
            title: "Payment Handling & Receipts",
            icon: "💳",
            points: [
                "Capture multiple payment types and generate clear financial reports.",
                "Cash, card, bank transfer, UPI, wallet integration",
                "Split payment options",
                "Auto-generated receipts",
                "Sales ledger updates in real time"
            ]
        },
        {
            id: 7,
            title: "Hardware & Channel Compatibility",
            icon: "🖨️",
            points: [
                "Optigo is designed to work with your existing tools and devices:",
                "Barcode scanners",
                "POS printers",
                "Cloud sync across devices",
                "Omni-channel compatibility: in-store, exhibition, ecommerce",
            ]
        },
        {
            id: 8,
            title: "Reporting & Analytics",
            icon: "📊",
            points: [
                "Get a complete view of your sales performance across branches, time periods, and customer segments.",
                "Daily/weekly/monthly sales reports",
                "Item-wise and category-wise performance",
                "Branch and sales executive-wise comparisons",
                "Tax and billing summary reportsbreakdowns"
            ]
        }
    ];


    const section3Data = [
        {
            content: "Designed for jewelry businesses of all scales"
        },
        {
            content: "Fast & accurate invoice creation with zero redundancy"
        },
        {
            content: "GST, hallmarking, e-invoicing — all included"
        },
        {
            content: "Seamless experience from quotation to collection"
        },
        {
            content: "Enables high-volume, real-time multi-user operations"
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/sales-billing.jpg"} mainButtonContent={mainButtonContent} section={section} section7Titlei={section7Titlei} section7Datai={section7Datai} />

            <section className="sol_sales_business_mission1">
                <div className="text">
                    <h2>Why Optigo Sales & Billing?</h2>
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
