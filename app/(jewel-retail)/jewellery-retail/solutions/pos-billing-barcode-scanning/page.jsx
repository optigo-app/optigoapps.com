import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { generatePageMetadata } from "@/utils/HeadMeta";
import { pages } from "@/utils/pages";

export const metadata = generatePageMetadata(pages['/jewellery-retail/solutions/pos-billing-barcode-scanning']);

const page = () => {

    const mainTitle = "Optigo ERP – Revolutionizing Retail Store Management";
    const mainDescription = `<strong>Optigo</strong> is a revolutionary solution designed specifically for the modern retail jewellery business. With Optigo’s advanced Point of Sale (POS) system, managing your retail store becomes incredibly simple, fast, and customer-friendly – all from a single tablet.`;
    const mainButtonContent = "Explore more";

    const section = ["section2", "section4"];

    const section2Title = "💡 Easy Billing with Optigo POS";

    const section2Data = [
        {
            content: "Optigo’s POS system enables you to perform fast and accurate billing directly from a tablet."
        },
        {
            content: "Whether your tags use QR codes, barcodes, or RFID technology – simply scan the tag, apply discounts, receive payments, and generate bills instantly."
        },
        {
            content: "No special hardware required."
        },
    ]

    const section4Title = "Key Features:"

    const section4Data = [
        {
            icon: "🔍",
            title: "Instant Tag Scanning",
            description:
                "Scan product tags instantly – supports QR code, barcode, and RFID..",
        },
        {
            icon: "💸",
            title: "On-the-Spot Discounts",
            description:
                "Add discounts directly during billing.",
        },
        {
            icon: "💳",
            title: "Multi-Mode Payment Support",
            description:
                "Receive payments – cash, UPI, card, or multi-mode.",
        },
        {
            icon: "📤",
            title: "Digital or Printed Bills",
            description:
                "Print or send the bill via Email or WhatsApp.",
        },
        {
            icon: "♻️",
            title: "Old Gold Acceptance",
            description:
                "Accept old gold items directly at the counter.",
        },
        {
            icon: "🎁",
            title: "Loyalty & Scheme Redemption",
            description:
                "Redeem store schemes or loyalty points during checkout.",
        },
        {
            icon: "📱",
            title: "Tablet-First POS",
            description:
                "All billing operations available on a single tablet – no need for desktop systems.",
        }
    ];

    const section3Data = [
        {
            content: "Quick and error-free billing from anywhere in the store."
        },
        {
            content: "Tab-based POS eliminates the need for bulky systems."
        },
        {
            content: "Reduces waiting time and improves staff efficiency."
        },
        {
            content: "Accept old gold and manage loyalty seamlessly."
        },
        {
            content: "Easy integration with all store processes through Optigo ERP."
        }
    ]

    const section14Data = [
        {
            content: "With Optigo, your store becomes smarter and faster."
        },
        {
            content: "Long queues are eliminated, billing becomes smoother, and your customers leave happier."
        },
        {
            content: "You can instantly send the invoice to customers via WhatsApp or Email, giving them a seamless and professional experience."
        },
        {
            content: "Ready to simplify your store operations and delight your customers?"
        },
        {
            content: "Optigo makes your jewellery retail store smarter, faster, and more efficient."
        },
    ]


    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/pos-billing-barcode-scanning.jpg'} mainButtonContent={mainButtonContent} section={section} section2Title={section2Title} section2Data={section2Data} section4Title={section4Title} sectiion4Data={section4Data} />

            <section className="sol_retail_pos_mission1">
                <div className="text">
                    <h2>🚀 Why Retailers Choose Optigo POS</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>😊 Enhance Customer Experience</h2>
                    <ul className="bullet-list">
                        {section14Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default page
