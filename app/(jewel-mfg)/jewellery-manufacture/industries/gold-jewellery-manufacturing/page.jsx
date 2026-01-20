import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { BarChart3, BrainCircuit, Calculator, Package, Timer, Wallet } from 'lucide-react';
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/industries/gold-jewellery-manufacturing']);

const page = () => {

    const mainTitle = "Gold jewellery manufacturing – Powered by Optigoapps";
    const mainDescription = `Gold jewellery manufacturing demands high precision, tight control over material, and the ability to handle bulk orders efficiently. Whether you’re managing custom pieces or large-scale production, <Strong>OptigoApps ERP</strong> helps you handle it all with ease, accuracy, and real-time visibility`;
    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `Built for custom and Bulk production alike`;
    const section2Description = `From small orders to mass production, OptigoApps enables manufacturers to scale seamlessly:`;

    const section2Data = [
        {
            content: "Handle bulk manufacturing with multi-line job cards"
        },
        {
            content: "Auto job allocation by design type, collection, or metal purity"
        },
        {
            content: "Generate repeat job orders in just one click"
        },
        {
            content: "Monitor order-wise or batch-wise production and timelines"
        },
    ]

    const section7Title = "Key features – Optimized for Gold Jewellery Manufacturing"

    const section7Data = [
        {
            "id": 1,
            "title": "Product Development",
            icon: <BrainCircuit color="#6C63FF" size={28} />,
            "points": [
                "Track design flow from concept to final CAD",
                "Auto-link designs with required gold karat, size, and style",
                "Revision control and status visibility across teams"
            ]
        },
        {
            "id": 2,
            "title": "Order & Reorder Management",
            icon: <Package color="#FF6F61" size={28} />,
            "points": [
                "Bulk order creation for collections or same-style pieces",
                "Smart reorder system for repeat clients and bestsellers",
                "Job-wise or batch-wise priority tagging"
            ]
        },
        {
            "id": 3,
            "title": "Real-Time Production Entry",
            icon: <Timer color="#00BFA6" size={28} />,
            "points": [
                "Barcode-based job cards and weighing scale integration",
                "Department-wise task updates with real-time visibility",
                "Worker I-Card scanning for accountability and speed"
            ]
        },
        {
            "id": 4,
            "title": "Loss & Metal Recovery Management",
            icon: <Calculator color="#FFB400" size={28} />,
            "points": [
                "Track filing, polishing, and dust loss stage-wise",
                "Auto calculation of gold recovery vs issued metal",
                "Get alerts on abnormal losses and rework required"
            ]
        },
        {
            "id": 5,
            "title": "WIP & Performance Dashboards",
            icon: <BarChart3 color="#3D5AFE" size={28} />,
            "points": [
                "Know exactly where each batch or job stands",
                "Daily production summary for teams and management",
                "Auto-reporting to clients on progress or delivery status"
            ]
        },
        {
            "id": 6,
            "title": "Integrated Billing & Accounting",
            icon: <Wallet color="#8E24AA" size={28} />,
            "points": [
                "Single platform for production, invoicing, and financials",
                "Direct job-to-invoice generation",
                "Memo, repair, and sales billing – all covered"
            ]
        }
    ]

    const section3Data = [
        {
            content: "Bulk manufacturing made easy"
        },
        {
            content: "Full order control – custom or mass"
        },
        {
            content: "Accurate gold recovery & costing"
        },
        {
            content: "Fast reorders, fewer delays"
        },
        {
            content: "Cloud + Mobile enabled for factory teams"
        },
        {
            content: "Real-time dashboards & client updates"
        },
    ]

    const section4Data = [
        {
            content: "From 1 piece to 1000 pieces – manage everything with confidence."
        },
        {
            content: "Let OptigoApps power your gold jewellery production like never before."
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/gold-jewellery-manufacturing.jpg"} mainButtonContent={mainButtonContent} section={section} section2Title={section2Title} section2Description={section2Description} section2Data={section2Data} section7Title={section7Title} section7Data={section7Data} />

            <section className="mission3">
                <div className="text">
                    <h2>Why Optigoapps for Gold Jewels Manufacturing ?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>GET STARTED</h2>
                    <ul className="bullet-list">
                        {section4Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default page
