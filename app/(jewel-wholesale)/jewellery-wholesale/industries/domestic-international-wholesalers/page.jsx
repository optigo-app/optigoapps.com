import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-wholesale/industries/domestic-international-wholesalers']);

const page = () => {

    const mainTitle = "Complete ERP Solution for Domestic & International Jewellery Wholesalers";
    const mainDescription = `<strong>Optigo</strong> Software is designed to empower both domestic and international jewellery wholesalers by covering the entire business workflow — from order placement to final delivery. Our platform supports multi-currency billing, export documentation, custom invoice formats, raw material tracking, stock reconciliation, and much more.`;
    const mainButtonContent = "Explore more";

    const section = ["section7", "section6"];

    const section7Title = "Key Features for Global Jewellery Wholesalers:"

    const section7Data = [
        {
            id: 1,
            title: "Multi-Currency Billing & Taxation",
            icon: "💱",
            points: [
                "Handle transactions in multiple currencies",
                "Supports GST, VAT, and custom tax structures",
                "Ideal for domestic and international billing"
            ]
        },
        {
            id: 2,
            title: "Custom Invoice Formats",
            icon: "🧾",
            points: [
                "Create e-invoice, export invoice, and packing list",
                "Include certificates for customs and export",
                "Flexible formats for different markets"
            ]
        },
        {
            id: 3,
            title: "Complete Order-to-Delivery Workflow",
            icon: "📦",
            points: [
                "Manage everything from order to delivery",
                "Issue & track raw materials to karigars",
                "Track production stages and vendor POs"
            ]
        },
        {
            id: 4,
            title: "Order & Job Tracking",
            icon: "🕵️‍♂️",
            points: [
                "Track production progress in real-time",
                "Monitor delivery status and delays",
                "See status per design, vendor, or order"
            ]
        },
        {
            id: 5,
            title: "Tagging & Barcode System",
            icon: "🏷️",
            points: [
                "Tag products with barcode or RFID",
                "Enable quick approval and stock audits",
                "Fast product identification & tracking"
            ]
        },
        {
            id: 6,
            title: "Inventory & Stock Management",
            icon: "📊",
            points: [
                "Live stock tracking by type and branch",
                "Filter inventory by karat, category, or vendor",
                "Supports multi-location visibility"
            ]
        },
        {
            id: 7,
            title: "Accounts & Billing with E-Invoice",
            icon: "💼",
            points: [
                "Generate GST and export-compliant invoices",
                "Track receivables, ledgers, and payments",
                "Direct integration with accounting modules"
            ]
        },
        {
            id: 8,
            title: "Digital Catalogue Sharing",
            icon: "📤",
            points: [
                "Send ready stock digitally to clients",
                "Share images, weights, and prices instantly",
                "Supports WhatsApp, email, and direct links"
            ]
        },
        {
            id: 9,
            title: "Exhibition Order Management",
            icon: "🎪",
            points: [
                "Track orders received at trade shows",
                "Tag, assign vendors, and schedule delivery",
                "Streamline exhibition workflows"
            ]
        },
        {
            id: 10,
            title: "Memo/Approval Transactions",
            icon: "📝",
            points: [
                "Manage jewellery sent/received on approval",
                "Convert approved items into invoices",
                "Track due dates and returns easily"
            ]
        },
        {
            id: 11,
            title: "Stock Reconciliation Tools",
            icon: "🔁",
            points: [
                "Compare physical and system stock",
                "Identify shortages or excess instantly",
                "Generate automatic variance reports"
            ]
        }
    ];


    const section6Title = "Built for Every Jewellery Business";
    const section6Description = `Whether you sell locally or export globally, <strong style="color: #FFDE21">Optigo</strong> simplifies complex operations — helping you save time, reduce errors, and grow profitably from a single platform.`


    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/domestic-international-wholesalers.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section6Title={section6Title} section6Description={section6Description} />
        </>
    )
}

export default page
