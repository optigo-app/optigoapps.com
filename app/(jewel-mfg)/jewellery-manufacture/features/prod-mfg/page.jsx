import React from "react";
import "./page.scss";
import { ArrowRight, Factory, Truck, Warehouse } from "lucide-react";
import Image from "next/image";
import Industries from "@/components/Industries/Industries";

const page = () => {

    const mainTitle = "Optigo Apps - Complete Jewelry ERP Software Suite: OptigoMFG";
    const mainDescription = `<strong>OptigoApps</strong> offers a complete software suite for the jewelry industry, covering manufacturing, wholesale, and retail. Each solution is tailored to industry needs, providing automation, control, and real-time insights.`;
    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "OptigoMFG - Jewelry Manufacturing Software"

    const section7Data = [
        {
            id: 1,
            title: "Product Development (PD)",
            icon: "🎨",
            points: [
                "Track design iterations and approvals from concept to final sign-off",
                "Manage CAD/CAM files and feedback loops centrally",
                "Accelerate development of new jewelry collections"
            ]
        },
        {
            id: 2,
            title: "Production Management",
            icon: "🏭",
            points: [
                "Monitor the complete manufacturing lifecycle",
                "Track job cards, raw materials, and productivity",
                "Reduce wastage in gold, diamonds, and gemstones"
            ]
        },
        {
            id: 3,
            title: "CRM for Manufacturing",
            icon: "📇",
            points: [
                "Maintain B2B customer records and communication history",
                "Follow up on leads and manage relationships from a single dashboard"
            ]
        },
        {
            id: 4,
            title: "Loss Management",
            icon: "📉",
            points: [
                "Track losses during melting, filing, polishing, and more",
                "Improve material usage efficiency and control costs"
            ]
        },
        {
            id: 5,
            title: "Order Management",
            icon: "📋",
            points: [
                "Manage all types of jewelry orders in one place",
                "Track production timelines, deliveries, and job allocations"
            ]
        },
        {
            id: 6,
            title: "Repair Management",
            icon: "🛠️",
            points: [
                "Assign and monitor customer repairs with status tracking",
                "Ensure timely service and quality assurance on all repairs"
            ]
        },
        {
            id: 7,
            title: "Payroll System",
            icon: "💸",
            points: [
                "Automate payroll for karigars and staff",
                "Support for time-based, task-based, and piece-based wages"
            ]
        },
        {
            id: 8,
            title: "Analytical Reports",
            icon: "📊",
            points: [
                "View dashboards for production, cost, and performance",
                "Get real-time insights into stock, productivity, and profitability"
            ]
        },
        {
            id: 9,
            title: "Accounting Integration",
            icon: "💼",
            points: [
                "Built-in ledger, billing, and vendor payment tracking",
                "Financial reconciliation integrated with inventory and payroll"
            ]
        },
        {
            id: 10,
            title: "Inventory Management",
            icon: "📦",
            points: [
                "Track raw, semi-finished, and finished goods in real-time",
                "Visibility across departments and job stages"
            ]
        },
        {
            id: 11,
            title: "E-signature Workflow",
            icon: "✍️",
            points: [
                "Digitally approve designs, job cards, and financial documents",
                "Speed up decision-making securely and paperlessly"
            ]
        },
        {
            id: 12,
            title: "Stock Reconciliation",
            icon: "🔄",
            points: [
                "Compare physical and system stock regularly",
                "Identify mismatches and maintain audit trails"
            ]
        },
        {
            id: 13,
            title: "Memo & Approval Management",
            icon: "📝",
            points: [
                "Create and track product memos and approvals",
                "Manage order changes with controlled workflows"
            ]
        },
        {
            id: 14,
            title: "Hallmarking & Certification",
            icon: "📃",
            points: [
                "Track BIS certification and hallmarking status",
                "Integrate quality checks within production flow"
            ]
        },
        {
            id: 15,
            title: "Role-based User Controls",
            icon: "🔐",
            points: [
                "Define user roles and restrict access to sensitive data",
                "Ensure operational security across departments"
            ]
        }
    ];



    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/prod-mfg.jpg"} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />
        </>
    );
};

export default page;
