import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce/apps/exhibition-and-sales-team-tablet-app']);

const page = () => {

    const mainTitle = "iCatalog – Tablet-Based App for Order, Sales & Memo";
    const mainDescription = `<strong>Optigo iCatalogue</strong> is your ultimate digital showcase — a smart, elegant, and powerful tool designed for modern jewellers.
Display your entire collection in breathtaking clarity, customize designs in real time, and create instant quotations — all from your tablet, even without internet.
Whether you’re at an exhibition, showroom, or client visit — iCatalogue helps you sell smarter, faster, and beautifully.`;

    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `Designed for Tablets – Built for Performance`;

    const section2Data = [
        {
            content: "A larger display for high-quality images & videos"
        },
        {
            content: "Multi-product comparison on a single screen"
        },
        {
            content: "Easy navigation and better user experience during customer demos"
        },
    ]

    const section7Title = "Key Features of iCatalog:"

    const section7Data = [
        {
            id: 1,
            title: "Online + Offline Functionality",
            icon: "📴",
            points: [
                "Stay connected, even without the internet.",
                "Whether you're at exhibitions, client showrooms, or on remote visits, Optigo’s app works seamlessly offline.",
                "Access your entire product catalogue, create quotations, and take orders — all without needing a network connection.",
                "Data automatically syncs with your ERP once you’re back online.",
            ]
        },
        {
            id: 2,
            title: "High-Resolution Product Display",
            icon: "🖼️",
            points: [
                "Present your jewellery like never before.",
                "With high-definition images and embedded videos, every product shines in stunning clarity — helping your customers experience brilliance and craftsmanship virtually.",
                "Perfect for showcasing designs to clients in-Exhibition or on the go.",
            ]
        },
        {
            id: 3,
            title: "Product Customization Made Simple",
            icon: "⚙️",
            points: [
                "Empower your buyers with choices.",
                "Let them customize jewellery in real time — selecting metal purity, diamond quality, sizes, and more.",
                "Give them a personalized shopping experience that matches their taste and budget perfectly.",
            ]
        },
        {
            id: 4,
            title: "Personalized Customer Pricing",
            icon: "💰",
            points: [
                "Every customer is unique — so are their prices.",
                "Optigo allows you to set custom pricing levels for different clients or regions.",
                " Whether it’s wholesalers, retailers, or end customers, display rates specific to their category instantly and accurately.",
            ]
        },
        {
            id: 5,
            title: "Real-Time ERP Connectivity",
            icon: "🔗",
            points: [
                "Powered by Optigo ERP, the app keeps your inventory and pricing always updated.— making order management effortless and precise."
            ]
        },
        {
            id: 6,
            title: "Tag Scanning",
            icon: "📷",
            points: [
                "Save time and avoid manual order process.",
                "Quickly scan jewellery tags using your tablet camera or a scanner to instantly add items to your cart.",
                "Fast, accurate, and User-friendly!",
            ]
        },
        {
            id: 8,
            title: "Instant Quotation Generation & Sharing",
            icon: "📩",
            points: [
                "Generate professional quotations in seconds — directly from your tablet.",
                "Share instantly via WhatsApp, Email & other sharing options.",
                "Speed up your sales process and impress customers with quick, modern service.",
            ]
        }
    ];

    const section3Data = [
        {
            content: "Cut down on sample production costs"
        },
        {
            content: "Speed up the order-taking process"
        },
        {
            content: "Avoid errors in manual entries"
        },
        {
            content: "Give your team a modern digital edge"
        },
        {
            content: "Boosts Customer Retention & Engagement"
        },
    ];

    const section4Data = [
        {
            content: "Impress customers with modern, interactive presentations"
        },
        {
            content: "Help customers take faster buying decisions"
        },
        {
            content: "Reduce dependency on printed catalogs and physical samples"
        },
        {
            content: "Take both stock orders and make-to-order requests"
        },
        { content: "Show out-of-stock designs and still take orders" },
        { content: "Improve employee productivity and reduce double entry" },
    ];

    const section6Title = "iCatalog = Offline Power + Tablet Convenience + Sales Acceleration";
    const section6Description = `Upgrade your sales game with <strong style='color: #FFDE21'>OptigoApps’ iCatalog</strong> – the tablet-based app made for jewelry businesses.`;

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/exhibition-and-sales-team-tablet-app.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section2Title={section2Title} section2Data={section2Data} />

            <section className="ecom_ilog_ind_mission_3">
                <div className="text">
                    <h2>Why iCatalog is a Game Changer</h2>
                    <p>Traditional methods involve carrying multiple sample boxes, writing codes on paper, and sending quotes days later. With iCatalog on a tablet, you eliminate delays, reduce risk, and increase professionalism.</p>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>Business Benefits</h2>
                    <ul className="bullet-list">
                        {section4Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* <section className="ilog-demo-cta">
                <div className="cta-content">
                    <h2>{section6Title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: section6Description }} />
                    <button onClick={(e) => handleNavigation(e, "/contactus")}>Book A Demo</button>
                </div>
            </section> */}
        </>
    )
}

export default page
