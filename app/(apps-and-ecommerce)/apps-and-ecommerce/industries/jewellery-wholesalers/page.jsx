import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce/industries/jewellery-wholesalers']);

const page = () => {

    const mainTitle = "B2B JEWELLERY E-COMMERCE – POWERED BY OPTIGOAPPS";
    const mainDescription = `<strong>Your Wholesale Jewellery Store. Fully Integrated. Fully Controlled.</strong>
    </br>
    Welcome to the next era of jewellery wholesale. <strong>OptigoApps</strong> delivers a tailor-made B2B jewellery e-commerce platform crafted exclusively for wholesalers, exporters, and manufacturers. Fully integrated with Optigo ERP, it offers live inventory, real-time pricing, order tracking, and complete customer control — all in one platform.`;
    const mainButtonContent = "Explore more";

    const section = ["section2", "section7", "section8"];

    const section2Title = `REAL-WORLD WHOLESALER BENEFITS`;

    const section2Data = [
        {
            content: "Upload and manage 1000s of SKUs in bulk"
        },
        {
            content: "Offer different price slabs per buyer segment"
        },
        {
            content: "Expand globally without hiring extra staff"
        },
        {
            content: "Eliminate back-and-forth calls for invoices or stock info"
        },
        {
            content: "Build customer loyalty through a smooth reordering experience"
        },
        {
            content: "Go 100% digital and reduce manual entries and errors"
        },
    ]

    const comparisonData = [
        {
            feature: "Real-Time Stock",
            genericEcommerce: "❌",
            optigoB2B: "✅"
        },
        {
            feature: "Customer-Specific Pricing",
            genericEcommerce: "❌",
            optigoB2B: "✅"
        },
        {
            feature: "Metal-Based Auto Pricing",
            genericEcommerce: "❌",
            optigoB2B: "✅"
        },
        {
            feature: "Production Stage Tracking",
            genericEcommerce: "❌",
            optigoB2B: "✅"
        },
        {
            feature: "Integrated with ERP",
            genericEcommerce: "❌",
            optigoB2B: "✅"
        },
        {
            feature: "Jewellery-Specific Filters (Size, Metal, Purity)",
            genericEcommerce: "❌",
            optigoB2B: "✅"
        },
        {
            feature: "Secure B2B Login",
            genericEcommerce: "❌",
            optigoB2B: "✅"
        }
    ];


    const section7Title = "FEATURES BUILT FOR WHOLESALE EXCELLENCE"

    const section7Data = [
        {
            id: 1,
            title: "Secure Login",
            icon: "🔐",
            points: [
                "Only verified B2B customers can access your portal.",
                "Helps protect confidential product and pricing information."
            ]
        },
        {
            id: 2,
            title: "Payment Gateway Integration",
            icon: "💳",
            points: [
                "Accept advance payments or final invoices online.",
                "Provides seamless and secure transaction experience."
            ]
        },
        {
            id: 3,
            title: "Shipment & Courier Integration",
            icon: "🚚",
            points: [
                "Direct API connections with major shipping partners for live tracking.",
                "Enables real-time order tracking for your customers."
            ]
        },
        {
            id: 4,
            title: "360° Product View & HD Images",
            icon: "📸",
            points: [
                "Upload multiple photos, metal/color variants, and 360° spin views.",
                "Showcase 360° spin views for an immersive product experience."
            ]
        },
        {
            id: 5,
            title: "Smart Product Tagging",
            icon: "📈",
            points: [
                "Auto-tag bestsellers, newly launched, trending, and hot picks.",
                "Highlights top-performing products to buyers."
            ]
        },
        {
            id: 6,
            title: "Mobile-Optimized UI",
            icon: "📱",
            points: [
                "Lightning-fast experience for buyers on-the-go.",
                "Responsive design ensures ease of use across devices."
            ]
        },
        {
            id: 7,
            title: "SEO-Ready Architecture",
            icon: "🌍",
            points: [
                "Improve visibility across Google and buyer networks.",
                "Drive more traffic and boost B2B discovery online."
            ]
        },
        {
            id: 8,
            title: "WhatsApp Inquiry Button",
            icon: "💬",
            points: [
                "Let customers chat directly with sales reps for specific designs.",
                "Simplifies buyer communication and shortens sales cycles."
            ]
        }
    ];



    const section3Data = [
        {
            content: "Showcase Designs with Full Control."
        },
        {
            content: "Personalized Pricing for Each Customer."
        },
        {
            content: "Let Customers Customize Products."
        },
        {
            content: "Live Inventory & Instant Sync."
        },
        {
            content: "Complete Customer Portal with Self-Service."
        },
        {
            content: "Reduce Sales Team Dependency."
        },
    ]


    const section4Data = [
        {
            content: "No more Excel. No more WhatsApp chaos. With OptigoApps, your wholesale jewellery business becomes:"
        },
        {
            content: "💡 Smarter"
        },
        {
            content: "🔒 More Secure"
        },
        {
            content: "⚡ Faster"
        },
        {
            content: "💰 More Profitable"
        }
    ];

    const section8Title = "SEAMLESS ERP CONNECTION";

    const section8Data = [
        {
            title: "Auto Inventory Sync",
            content: "No need to update stock manually."
        },
        {
            title: "Live Pricing with Metal Rates",
            content: "Pricing adjusts with daily bullion updates."
        },
        {
            title: "Order Processing Linked to ERP",
            content: "Orders from website directly enter your ERP workflow."
        },
        {
            title: "Digital Ledger & Billing Access",
            content: "Customers can download everything on demand."
        },
        {
            title: "Production Flow Visibility",
            content: "From CAD to Casting to QC – customers can track it all."
        }
    ];


    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/app-ecom-jewellery-wholesalers.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section2Title={section2Title} section2Data={section2Data} section8Title={section8Title} section8Data={section8Data} />

            <section className="wholesaler-comparison">
                <h2>WHAT MAKES OPTIGO STAND OUT?</h2>
                <div className="comparison-table">
                    <div className="table-header">
                        <div>Feature</div>
                        <div>Generic E-commerce</div>
                        <div>Optigo B2B Jewellery E-commerce</div>
                    </div>
                    {comparisonData.map((row, index) => (
                        <div className="table-row" key={index}>
                            <div className="feature">{row.feature}</div>
                            <div className="desktop">{row.genericEcommerce}</div>
                            <div className="cloud">{row.optigoB2B}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="ecom_whole_ind_mission_3">
                <div className="text">
                    <h2>WHY OPTIGO E-COMMERCE FOR JEWELLERY WHOLESALERS?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>READY TO DIGITIZE YOUR WHOLESALE JEWELLERY BUSINESS?</h2>
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
