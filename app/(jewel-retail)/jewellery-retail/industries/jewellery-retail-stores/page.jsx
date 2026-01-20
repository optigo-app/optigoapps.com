import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-retail/industries/jewellery-retail-stores']);

const page = () => {

    const mainTitle = "Retail Store Management with Optigo ERP";
    const mainDescription = `<strong>Digitize Your Retail Business. Manage Everything Seamlessly.</strong> 
    </br>
    <strong>Optigo</strong> ERP empowers retail businesses to transform their operations into a fully digital ecosystem. Whether you run a single store or multiple branches, our solution covers every aspect of retail management—from inventory and billing to customer relationship management and loyalty programs.`;
    const mainButtonContent = "Explore more";

    const section = ["section7", "section6", "section8"];

    const section7Title = "Key Features for Retail Store Management:"

    const section7Data = [
        {
            id: 1,
            title: "Complete Stock & Order Management",
            icon: "📦",
            points: [
                "Track and manage your entire inventory with real-time updates.",
                "Simplify purchase and sales order management with automated processes.",
                "Maintain accurate stock levels and avoid errors or shortages."
            ]
        },
        {
            id: 2,
            title: "Integrated CRM for Customer Insights",
            icon: "📊",
            points: [
                "View your customer’s entire purchase history, payments, and outstanding ledgers.",
                "Send invoices, estimates, and offers directly via WhatsApp.",
                "Build strong customer relationships through personalized engagement."
            ]
        },
        {
            id: 3,
            title: "Mobile App for Sales Teams",
            icon: "📱",
            points: [
                "Enable your sales team to manage the entire customer journey from anywhere.",
                "Create estimates, manage bookings, and convert them to bills seamlessly.",
                "Access customer details, product catalogs, and payment status instantly."
            ]
        },
        {
            id: 4,
            title: "POS & Billing Made Easy",
            icon: "🧾",
            points: [
                "Generate bills quickly through an intuitive POS system.",
                "Manage old gold billing, exchange transactions, and repair services efficiently.",
                "Complete accounting integration for accurate financial management."
            ]
        }
    ];

    const section8Title = "Advanced Retail Features";

    const section8Data = [
        {
            title: "Repair Management",
            content: "Track and manage customer repair orders effortlessly."
        },
        {
            title: "Old Gold Billing",
            content: "Simplify old gold transactions with automated billing."
        },
        {
            title: "Accounting Integration",
            content: "Full financial control, including ledgers and reports."
        },
        {
            title: "Branch Management",
            content: "Manage multiple branches centrally with real-time visibility."
        },
        {
            title: "Customer Loyalty Programs",
            content: "Reward your customers and retain them."
        },
        {
            title: "Saving Schemes",
            content: "Offer flexible saving plans to increase engagement."
        },
        {
            title: "B2C Website Integration",
            content: "Take your retail business online with ease."
        },
        {
            title: "Customer Mobile App",
            content: " Give your customers convenience at their fingertips."
        },
    ]

    const section6Title = "Transform Your Retail Store with Optigo ERP";
    const section6Description = `With <strong style="color: #FFDE21">Optigo</strong> ERP, you can fully digitize your retail store, streamline operations, enhance customer experience, and drive growth with ease.`



    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/jewellery-retail-stores.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section6Title={section6Title} section6Description={section6Description} section8Title={section8Title} section8Data={section8Data} />
        </>
    )
}

export default page
