import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { CheckCircle } from 'lucide-react';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-wholesale/solutions/real-time-pricing-control']);

const page = () => {

    const mainTitle = "Real-Time Pricing Control – Powered by Optigo";
    const mainDescription = `<strong>Optigo’s</strong> Smart Price Control empowers your business with a centralized pricing engine that manages gold, diamonds, stones, labour, purchases, and sales—in one unified place. Automate smart rules for customer- and vendor‑specific rates, real-time rate fetching, and instant website sync. Save time, eliminate errors, strengthen margins, and build trust through perfectly accurate pricing—every time.`;

    const mainButtonContent = "Explore more";

    const sections = [
        {
            title: "Centralised Price Master",
            description:
                "Optigo allows you to manage all pricing components—gold, diamonds, stones, labour, purchase, and sales—in a single centralized Price Master. This eliminates the need for scattered records and ensures consistency across all transactions. Updates are easy and instant, helping you react quickly to market changes. It’s ideal for custom orders and bulk inventory. The centralized setup saves time, reduces human error, and ensures price accuracy.",
            bullets: [
                "Manage all pricing in one place",
                "Covers gold, diamond, stone, labour, purchase & sales",
                "Simplifies updates with one-click changes",
                "Ensures consistency in pricing",
                "Reduces errors in quotation and billing",
                "Saves time across departments",
                "Supports both custom and ready items",
                "Central source of truth for all teams",
                "Easy access to updated rates",
                "Ideal for growing jewellery businesses",
            ],
        },
        {
            title: "Customer & Vendor-Wise Pricing",
            description:
                "With Optigo, you can assign unique pricing for each customer and vendor. Offer loyalty discounts to repeat buyers, special rates to premium customers, or different pricing for vendors based on supply terms. The system auto-applies correct pricing during orders, quotations, or billing—no need to remember rate policies. This ensures pricing flexibility without sacrificing control or accuracy.",
            bullets: [
                "Set custom prices for each customer or vendor",
                "Manage region-wise or relationship-based pricing",
                "Offer loyalty pricing or quantity-based rates",
                "Automatically applies correct rate on every order",
                "Saves time spent on manual checks",
                "Reduces pricing disputes or errors",
                "Handles bulk and special orders efficiently",
                "Helps maintain profit margins",
                "Supports sales negotiation with rate rules",
                "Fully automated and audit-friendly",
            ],
        },
        {
            title: "Automated Price Fetching",
            description:
                "Optigo eliminates manual pricing by automatically fetching the right rates during every process—quotation, order, billing, or job work. It uses predefined rules to select correct prices based on customer, vendor, item, or order type. This not only boosts speed but also ensures your team works with accurate pricing across every department.",
            bullets: [
                "Real-time price application at all stages",
                "Applies prices in quotations, orders, billing, etc.",
                "Uses pre-set rules for accuracy",
                "Reduces manual price entry errors",
                "Accelerates the transaction process",
                "Keeps pricing consistent across users",
                "No training needed for rate memorization",
                "Ideal for fast-paced sales or purchase teams",
                "Works seamlessly for custom or standard items",
                "Fully integrated into your ERP flow",
            ],
        },
        {
            title: "Real-Time Website Integration",
            description:
                "Connect your backend pricing with your website using Optigo. Any change in gold, labour, diamond, or stone pricing gets reflected live on your e-commerce site—B2B or B2C. This avoids discrepancies between offline and online pricing and builds customer trust. You stay transparent, updated, and professional in every online interaction.",
            bullets: [
                "Auto-sync price updates with website",
                "No manual website changes required",
                "Reflects gold/labour/diamond rate changes instantly",
                "Keeps your product pricing transparent",
                "Ideal for live inventory and e-commerce",
                "Supports B2B and B2C jewellery platforms",
                "Reduces miscommunication and customer issues",
                "Enhances credibility and brand value",
                "Saves time for marketing/sales teams",
                "Always shows updated rates to customers",
            ],
        },
        {
            title: "Benefits of Optigo’s Pricing System",
            description:
                "Optigo transforms pricing from a headache to a competitive advantage. With centralized control, automated application, real-time syncing, and full flexibility, your jewellery business becomes more efficient and scalable. Say goodbye to errors, delays, and confusion—Optigo gives you full clarity and confidence in every transaction.",
            bullets: [
                "Structured, centralized pricing setup",
                "No manual calculation or rate lookup",
                "Automated price fetching at every step",
                "Vendor- and customer-specific pricing policies",
                "Real-time sync with e-commerce websites",
                "Increases speed and reduces cost of errors",
                "Supports smarter sales decisions",
                "Improves accuracy and trust in pricing",
                "Saves hours of manual effort weekly",
                "Scales with your growing jewellery business",
            ],
        },
    ];

    const pairedSections = [];
    for (let i = 0; i < sections.length; i += 2) {
        pairedSections.push(sections.slice(i, i + 2));
    }

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/real-time-pricing-control.jpg'} mainButtonContent={mainButtonContent} />

            <div className="smart-pricing-grid">
                <h2 className="main-heading">Key features of Optigo's price control</h2>

                <p className="main-description">
                    Centralize, automate, and personalize your entire pricing strategy with a single smart system. Stay fast, accurate, and always in sync.
                </p>

                {pairedSections.map((pair, index) => (
                    <div className="feature-pair" key={index}>
                        {pair.map((section, idx) => (
                            <div className="feature-card" key={idx}>
                                <h3>{section.title}</h3>
                                <p className="feature-desc">{section.description}</p>
                                <ul>
                                    {section.bullets.map((bullet, bi) => (
                                        <li key={bi}>
                                            <CheckCircle className="icon" size={18} strokeWidth={2.2} />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}

export default page
