import React from "react";
import "./page.scss";
import Industries from "@/components/Industries/Industries";
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce/apps/accounts-payments']);

const page = () => {

    const mainTitle = "Accounts & Payments – OptigoApps";
    const mainDescription = `<strong>Smarter Accounting Built for the Jewelry Industry</strong>
    <br />
    <strong>Optigo’s</strong> Accounts & Payments Module is a powerful financial backbone tailored for jewelry manufacturers and wholesalers. It simplifies accounting workflows, offers deep financial visibility, and ensures your transactions stay accurate, timely, and fully integrated with your operations — all in one platform.`;

    const mainButtonContent = "Explore more";

    const section = ["section7i"];

    const section7Titlei = "Key Features of Optigo’s Accounts & Payments";

    const section7Datai = [
        {
            id: 1,
            title: "End-to-End Financial Management",
            icon: "💼",
            points: [
                "Go beyond basic ledgers. Optigo helps you manage every aspect of your jewelry business’s financials with smart automation and real-time integration.",
                "Key Capabilities:",
                "Customer & vendor account management",
                "Payment & receipt entries",
                "Sales, purchase, job work, and repair billing sync",
                "Ledger-wise transaction history",
                "Opening balance & credit limit setup",
            ]
        },
        {
            id: 2,
            title: "Real-Time Sync with Business Operations",
            icon: "🔄",
            points: [
                "Optigo auto-syncs financial transactions across all modules:",
                "Sales Invoices & Collections",
                "Purchase Invoices & Vendor Payments",
                "Repair Charges & Receivables",
                "Job Work Billing & Settlements",
                "Every financial activity is reflected in your accounts without manual duplication, reducing errors and improving efficiency.",
            ]
        },
        {
            id: 3,
            title: "Outstanding Management",
            icon: "📋",
            points: [
                "Never miss a payment again. Keep track of receivables, payables, and overdue balances — all in one dashboard.",
                "Customer-wise and vendor-wise balance tracking",
                "Auto-reminders for outstanding follow-ups",
                "Statement of accounts (SOA) generation",
                "Settlement adjustments and credit note management",
            ]
        },
        {
            id: 4,
            title: "Banking, Cash Flow & Reconciliation",
            icon: "🏦",
            points: [
                "Keep a close eye on your cash flow with intelligent tracking tools.",
                "Multi-bank account handling",
                "Payment mode-wise reports (Cash, Bank, Online)",
                "Daily cash register & petty cash control",
                "Reconciliation with physical & ledger entries"
            ]
        },
        {
            id: 5,
            title: "Taxation & Compliance",
            icon: "📜",
            points: [
                "Simplify your compliance processes with built-in tools for tax reporting and analysis.",
                "GST-ready invoicing & taxation",
                "Taxable/non-taxable tagging on entries",
                "HSN/SAC code management",
                "Export-friendly reports for filing",
            ]
        },
        {
            id: 6,
            title: "Powerful Financial Reports",
            icon: "📊",
            points: [
                "Get deeper insights into your profitability, expenses, and dues with just a few clicks.",
                "Daybook, Cash Book, and General Ledger",
                "Customer/Supplier Ledger",
                "Trial Balance, P&L, Balance Sheet",
                "Expense summary reports"
            ]
        }
    ];

    const section3Data = [
        {
            content: "Fully integrated with all business operations"
        },
        {
            content: "Zero manual duplication"
        },
        {
            content: "Improves financial accuracy and clarity"
        },
        {
            content: "Made for non-accountants – simple UI with powerful tools"
        },
        {
            content: "Scalable for multi-branch and multi-user access"
        },
        {
            content: `Keep your business financially strong, transparent, and compliant — with Optigo’s intelligent accounting solution.`
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/manufacturer-account.jpg"} mainButtonContent={mainButtonContent} section={section} section7Titlei={section7Titlei} section7Datai={section7Datai} />

            <section className="sol_acc_pay_business_mission1">
                <div className="text">
                    <h2>Why Choose Optigo Accounts & Payments?</h2>
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
