import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-wholesale/solutions/ecom']);

const page = () => {

    const mainTitle = "Optigo eCommerce – Integrated, Intelligent, and Tailored for B2B Jewelry Businesses";
    const mainDescription = `<strong>Optigo</strong> offers a next-generation eCommerce platform that is seamlessly integrated with Optigo ERP, specially designed for the B2B jewelry industry. This advanced system enables jewelry manufacturers and wholesalers to take their digital presence to the next level, while maintaining complete control over product visibility, pricing, and customer interaction.`;
    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Key Features & Capabilities:"

    const section7Data = [
        {
            id: 1,
            title: "Controlled Product Visibility",
            icon: "👁️",
            points: [
                "Display designs based on customer type or category",
                "Manage visibility for designs, collections, and product segments"
            ]
        },
        {
            id: 2,
            title: "Personalized Pricing",
            icon: "💰",
            points: [
                "Show customer-specific pricing",
                "Supports pre-defined rates or negotiated terms"
            ]
        },
        {
            id: 3,
            title: "Product Customization",
            icon: "🛠️",
            points: [
                "Customers can choose metal type, diamond quality, and size",
                "Auto-adjusts pricing and weight in real time"
            ]
        },
        {
            id: 4,
            title: "Customer Portal Access",
            icon: "🔐",
            points: [
                "Customers log in to view their ledger, order status, and reports",
                "Reduces dependency on sales team"
            ]
        },
        {
            id: 5,
            title: "Real-Time Stock & Availability",
            icon: "📦",
            points: [
                "Live sync with ERP to reflect current stock",
                "Auto-hides sold products to avoid duplication"
            ]
        },
        {
            id: 6,
            title: "Integrated Payments & Shipments",
            icon: "🚚",
            points: [
                "Multiple payment gateway support",
                "Automated shipment tracking and invoice delivery"
            ]
        },
        {
            id: 7,
            title: "Smart SEO & Auto Highlights",
            icon: "📈",
            points: [
                "SEO-optimized to boost search visibility",
                "Auto-tags bestsellers and trending products based on sales/clicks"
            ]
        },
        {
            id: 8,
            title: "Rich Product Display",
            icon: "🖼️",
            points: [
                "Multiple images, 360° views, and variant switching",
                "Video support for immersive showcasing"
            ]
        },
        {
            id: 9,
            title: "Search by Stock Availability",
            icon: "🔍",
            points: [
                "Search filters based on customer's diamond stock",
                "Helps customers place orders aligned to their inventory"
            ]
        },
        {
            id: 10,
            title: "Modern & Mobile-Responsive UI",
            icon: "📱",
            points: [
                "Minimal and fast UI",
                "Works seamlessly across devices – mobile, tablet, desktop"
            ]
        }
    ];

    const section3Data = [
        {
            content: "ERP-Connected: Real-time sync with Optigo ERP – no manual updates required"
        },
        {
            content: "Customer-Centric: Personalized experience for every buyer"
        },
        {
            content: "Efficient Order Management: Streamlined process from product selection to payment and dispatch"
        },
        {
            content: "Boost Sales Digitally: Reach more customers with a professional and automated online platform"
        },
        {
            content: "Built for B2B Jewelry: Not just eCommerce – a solution tailored to how your business works"
        }
    ]

    const section4Data = [
        {
            content: "Take your jewelry business online with full control, customization, and real-time intelligence."
        },
        {
            content: "Empower your customers while streamlining your operations with Optigo eCommerce."
        },
        {
            content: "Book a Free Demo"
        },
        {
            content: "Call: +91-XXXXXXXXXX"
        },
        {
            content: "Email: info@optigoapps.com"
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/ecom.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />

            <section className="sol_mission1">
                <div className="text">
                    <h2>Why Optigoapps Optigo eCommerce ?</h2>
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
