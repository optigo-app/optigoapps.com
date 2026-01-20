import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce/apps/vendor-customer-integrations']);

const page = () => {

    const mainTitle = "SCAVU – Secure Cloud Access for Virtual Union";
    const mainDescription = `<strong>What is SCAVU ?</strong>
    </br>
    <strong>SCAVU </strong> OptigoApps’ <strong>advanced ERP-to-ERP connectivity platform</strong> that allows businesses to <strong>link, synchronize, and automate operations seamlessly</strong>. Designed for <strong>jewellery manufacturers, wholesalers, and suppliers</strong>, SCAVU ensures <strong>error-free order processing, instant invoice generation, and real-time stock updates</strong>, helping your business run smarter, faster, and more efficiently.`;

    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Why Choose SCAVU ?"

    const section7Data = [
        {
            id: 1,
            title: "Seamless Connectivity",
            icon: "📶",
            points: [
                "Connect with vendors, customers, and business partners effortlessly, enabling real-time collaboration across multiple ERP systems.",
            ]
        },
        {
            id: 2,
            title: "Intelligent Data Mapping",
            icon: "🧭",
            points: [
                "SCAVU automatically aligns different product codes and tags, ensuring consistent, error-free data between systems."
            ]
        },
        {
            id: 3,
            title: "QR Code Automation",
            icon: "🔲",
            points: [
                "Scan bills, delivery notes, and POs to instantly update connected ERPs—no manual entry required.",
            ]
        },
        {
            id: 4,
            title: "Real-Time Synchronization",
            icon: "🔄",
            points: [
                "Orders, invoices, stock levels, and POs update instantly, giving your business full visibility at all times.",
            ]
        },
        {
            id: 5,
            title: "Secure & Scalable",
            icon: "🔒",
            points: [
                "Built on Optigo’s cloud-first architecture, SCAVU provides safe, reliable, and 24/7 connectivity, even for multiple partners.",
            ]
        },
    ];

    const section3Data = [
        {
            content: "✅ Save Time & Reduce Errors – Eliminate manual data entry and reconciliation."
        },
        {
            content: "✅ Automated Business Operations – Streamline order, invoice, and stock management."
        },
        {
            content: "✅ Accurate Real-Time Updates – Keep every partner and ERP system aligned."
        },
        {
            content: "✅ Faster Business Cycles – Accelerate transactions and improve partner satisfaction."
        },
        {
            content: "✅ Flexible & Scalable – Works with customers, vendors, and other Optigo users seamlessly."
        },
        {
            content: "SCAVU by OptigoApps – Link, sync, and automate your business operations effortlessly. "
        },
        {
            content: "Make collaboration faster, smarter, and error-free."
        }
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/vendor-customer-integrations.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />

            <section className="vendor_scavu_ind_mission_3">
                <div className="text">
                    <h2>Benefits of SCAVU</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default page
