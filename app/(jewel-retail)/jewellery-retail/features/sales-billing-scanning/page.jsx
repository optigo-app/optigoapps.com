import React from "react";
import "./page.scss";
import Industries from "@/components/Industries/Industries";
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-retail/features/sales-billing-scanning']);


const page = () => {

    const mainTitle = "Sales & Billing with Scanning – Simplify Every Transaction";
    const mainDescription = `<strong>Speed, accuracy, and compliance — all at your fingertips.</strong>
    <br />
    With <strong>Optigo’s</strong> Sales & Billing by Scanning feature, you can streamline your entire billing process using barcode or RFID scanning technology. Whether in a fast-paced retail showroom or a busy wholesale counter, create invoices in seconds, reduce manual errors, and improve customer satisfaction with smart, automated billing.`;

    const mainButtonContent = "Explore more";

    const section = ["section2", 'section5'];

    const section2Title = `Jewelry Business Specific Features`;

    const section2Data = [
        {
            content: "GST & HSN compliance with automatic tax segregation"
        },
        {
            content: "Support for Gold, Diamond, CZ, and multi-material items"
        },
        {
            content: "Sales by weight, piece, or design-wise categories"
        },
        {
            content: "Customer-wise pricing, discount structure, and loyalty linkage"
        },
        {
            content: "Generate printed invoices, e-invoices, and export in PDF/Excel formats"
        },
    ]

    const section5Title = "Built for Both Retail & Wholesale";

    const section5Description = "Simplify your branch operations with centralized product tagging, real-time stock visibility, and effortless inter-branch ordering."
    const section5Data = [
        {
            title: "Walk-in customers can be billed instantly with or without saved customer records.",
        },
        {
            title: "Wholesale customers can have rate lists, credit terms, and memos integrated.",
        },
        {
            title: "Easily handle multi-invoice billing or dispatch from multiple lots.",
        },
    ]

    const section3Data = [
        {
            content: "Barcode / QR Scanners (1D, 2D, Wireless)"
        },
        {
            content: "RFID Readers"
        },
        {
            content: "Thermal & Laser Printers for invoice print"
        },
        {
            content: "POS devices & Bluetooth printers"
        },
        {
            content: "Integrated with e-invoicing systems and Tally exports"
        },
    ]

    const section4Data = [
        {
            content: "Saves up to 70% time in the billing process"
        },
        {
            content: "Reduces human errors by over 90%"
        },
        {
            content: "Accurate inventory tracking down to each piece"
        },
        {
            content: "Better customer experience and faster checkout"
        },
        {
            content: "Supports multi-user, multi-terminal setups"
        },
        {
            content: "Experience faster, smarter billing with Optigo."
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/retail-sales-billing-scanning.jpg"} mainButtonContent={mainButtonContent} section={section} section2Title={section2Title} section2Data={section2Data} section5Title={section5Title} section5Description={section5Description} section5Data={section5Data} />

            <div className="billing-wrapper left-content">
                <div className="billing-text">
                    <h2>💼 How It Works</h2>
                    <ul>
                        <li>Each item is tagged with a unique barcode (or RFID).</li>
                        <li>During billing, the sales executive scans the item directly into the billing screen.</li>
                        <li>The system automatically captures item code, weight, purity, rates, taxes, and discount eligibility.</li>
                        <li>Final invoice is generated with complete details — including customer info, hallmarking certificate numbers, and more.</li>
                        <li>Payment mode is selected and entry is recorded into accounts automatically.</li>
                    </ul>
                </div>
                <div className="billing-image">
                    <img src="/hows.jpg" alt="Billing Process" />
                </div>
            </div>

            <div className="billing-wrapper right-content">
                <div className="billing-image">
                    <img src="/why.jpeg" alt="Scanning-Based Billing" />
                </div>
                <div className="billing-text">
                    <h2>Why Scanning-Based Billing?</h2>
                    <ul>
                        <li>Rapid item selection and billing using barcode/RFID scanners</li>
                        <li>Eliminate human error and product mismatches</li>
                        <li>Real-time stock deduction as items are billed</li>
                        <li>Integrated with approval memos, hallmarking, and taxation</li>
                        <li>Handles retail, wholesale, and branch transactions from a unified screen</li>
                    </ul>
                </div>
            </div>

            <section className="ecom_billing_ind_mission_3">
                <div className="text">
                    <h2>Compatible Hardware & Integration</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>Why Businesses Choose Optigo’s Scanning-Based Billing</h2>
                    <ul className="bullet-list">
                        {section4Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default page;
