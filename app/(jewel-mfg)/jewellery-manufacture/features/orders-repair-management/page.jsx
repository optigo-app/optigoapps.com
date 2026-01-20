import React from "react";
import "./page.scss";
import Industries from "@/components/Industries/Industries";
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/features/orders-repair-management']);

const page = () => {

    const mainTitle = "Orders & Repair Management – OptigoApps";
    const mainDescription = `<strong>End-to-End Order & Repair Workflow Designed for Jewelry Manufacturers</strong>
    <br />
    <strong>Optigo’s</strong> Orders & Repair Management Module is built exclusively for jewelry manufacturers handling custom production, job work, and repair orders. Whether you're managing bulk B2B orders, one-of-a-kind custom jobs, or in-process repairs, Optigo ensures that every order is efficiently tracked, scheduled, and completed with complete transparency and zero delays.`;

    const mainButtonContent = "Explore more";

    const section = ["section7i"];

    const section7Titlei = "Key Features of Optigo’s Orders & Repair Management";

    const section7Datai = [
        {
            id: 1,
            title: "Custom Order Management",
            icon: "📋",
            points: [
                "Streamline all your custom jewelry manufacturing orders from multiple sources including retail clients, wholesalers, or internal teams. Each order is tracked from design approval to delivery.",
                "Key Features:",
                "Work order creation with design, size, stone, and metal specifications",
                "Customer-wise or vendor-wise job records",
                "Auto-linked production and inventory transactions",
                "Order status tracking through every stage",
                "Priority-based order queues with timeline alerts",
            ]
        },
        {
            id: 2,
            title: "Walk-in & Bulk B2B Job Handling",
            icon: "📥",
            points: [
                "Cater to both individual custom requirements and large-scale manufacturing jobs with ease.",
                "Walk-in client job entry system",
                "B2B job import through Excel/JSON/API",
                "Batch order processing for karigars",
                "Price management by order type (weight-based, per piece, or design complexity)",
            ]
        },
        {
            id: 3,
            title: "Job Sheet & Karigar Allocation",
            icon: "🗂️",
            points: [
                "Assign tasks, track progress, and control delivery at every step.",
                "Auto-generated job sheets",
                "Karigar-wise assignment and tracking",
                "Raw material issuance & tracking linked with inventory",
                "Ready-for-delivery alerts & barcode tagging",
            ]
        },
        {
            id: 4,
            title: "Repair Order Management",
            icon: "🛠️",
            points: [
                "Effortlessly manage customer or dealer repair orders for damaged, returned, or altered jewelry.",
                "Detailed issue logging with images & descriptions",
                "Repair quotation generation & approval flow",
                "Internal/external repair task assignment",
                "Real-time progress updates",
                "Inward/outward entry logs",
            ]
        },
        {
            id: 5,
            title: "Delivery & Timeline Tracking",
            icon: "⏱️",
            points: [
                "Ensure on-time delivery and proactive communication with order-wise delivery scheduling and alerts.",
                "Expected vs actual delivery date tracking",
                "Auto-alerts for delayed jobs",
                "Delivery packaging list with invoice/memo tagging",
            ]
        },
        {
            id: 6,
            title: "Integration with Production, Inventory & Billing",
            icon: "🔄",
            points: [
                "All orders and repairs are integrated seamlessly with other core modules:",
                "Production – Auto-generate production entries from orders",
                "Inventory – Track material consumption and finished goods",
                "Accounts – Link job billing, vendor payment & repair charges",
                "CRM – Connect repair status and order updates with customer profiles",
            ]
        },
        {
            id: 7,
            title: "Analytics & Job Status Reports",
            icon: "📊",
            points: [
                "Get a complete overview of ongoing and completed orders for smarter manufacturing planning.",
                "Order status dashboards (Pending, In Progress, Completed)",
                "Repair summary reports",
                "Karigar efficiency reports",
                "Material consumption vs order summary",
            ]
        }
    ];


    const section3Data = [
        {
            content: "Built for custom jewelry manufacturers"
        },
        {
            content: "End-to-end traceability of each job"
        },
        {
            content: "Streamlines order communication, tracking & delivery"
        },
        {
            content: "Full visibility on repairs and production rework"
        },
        {
            content: "Improves efficiency and reduces delays in job lifecycle"
        },
        {
            content: `Take control of your order and repair operations with Optigo — the intelligent system trusted by leading jewelry manufacturers.`
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/manufacturer-orders-repair-management.jpg"} mainButtonContent={mainButtonContent} section={section} section7Titlei={section7Titlei} section7Datai={section7Datai} />

            <section className="sol_order-rep_business_mission1">
                <div className="text">
                    <h2>Why Optigo for Manufacturing Order Management?</h2>
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
