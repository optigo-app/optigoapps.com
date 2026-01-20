import React from 'react'
import './page.scss';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/about-us']);

const page = () => {

    const section7Title = "Built Around Your Business"

    const section7Data = [
        {
            id: 1,
            title: "People – Built Around Your Business",
            description: "At Orail, we understand that every jewelry business has its own challenges. That’s why our solutions are tailored to your industry segment—whether you're a manufacturer, wholesaler, or retailer. Our software suites come pre-equipped with industry-specific features, so you don’t need to spend extra time or money on customization. We solve problems you face daily, right out of the box.",
            icon: "👥",
            points: [
                "✅ No Customization Needed",
                "✅ Jewellery-Specific Workflows",
                "✅ Faster Implementation, Lower Costs"
            ]
        },
        {
            id: 2,
            title: "Technology – Flexible, Fast, Future-Ready",
            description: `Our platform, OptigoApps, is designed for agility. It lets your team securely access systems from any browser or device—whether at your desk, in a showroom, or on the go.
            
            <p>Choose how you want to deploy:</p>
            <ul>
                <li>☁️ Cloud-based</li>
                <li>🏢 On-premise</li>
                <li>📱 Hybrid & Mobile-ready</li>
            </ul>
            `,
            icon: "⚡",
            points: [
                "✅ Access Anytime, Anywhere",
                "✅ Seamless Integrations",
                "✅ Supports All Deployment Models"
            ]
        },
        {
            id: 3,
            title: "User Experience – Made Simple for Every Role",
            description: "We believe powerful software should still feel easy to use. That’s why our UI is clean, responsive, and role-based. Every feature is designed with your end-users in mind—from sales teams and production staff to inventory managers and business owners.",
            icon: "🖥️",
            points: [
                "✅ Intuitive Navigation",
                "✅ Minimal Training Required",
                "✅ Boost Productivity with Fewer Clicks"
            ]
        },
        {
            id: 4,
            title: "Collaboration – Teamwork Made Smarter",
            description: "With OptigoApps, your team stays connected in real-time. Share updates, upload attachments, assign tasks, and keep conversations organized—all from a single platform. Get notified instantly when something important happens.",
            icon: "🤝",
            points: [
                "✅ Centralized Communication",
                "✅ Faster Decisions, Less Miscommunication",
                "✅ Increased Efficiency Across Departments"
            ]
        },
        {
            id: 5,
            title: "One Platform. Total Integration.",
            description: "We don’t believe in building software with disconnected modules. OptigoApps is a complete suite where each module—Inventory, CRM, Accounting, Design, Production, etc.—works in sync. This eliminates silos, simplifies reporting, and improves overall business performance.",
            icon: "🔄",
            points: [
                "✅ Deep Functionality, Not Just Features",
                "✅ All-in-One System",
                "✅ Scalable for Every Business Size"
            ]
        },
        {
            id: 6,
            title: "Built with Passion, Not Patches",
            description: "While many software providers rush to fill product gaps with third-party tools or quick fixes, we build every feature ourselves—with patience and purpose. OptigoApps has evolved over a decade through deep industry understanding—not short-term trends.",
            icon: "🔥",
            points: [
                "✅ Continuous Innovation",
                "✅ Customer-Centric Development",
                "✅ No Unstable Add-ons or Acquisitions"
            ]
        },
        {
            id: 7,
            title: "Our People, Your Advantage",
            description: "Behind every powerful platform is a passionate team. At Orail, we invest more in product development and customer service than in sales and marketing—because we believe great service builds trust, not just good ads.",
            icon: "💼",
            points: [
                "✅ Strong Support & Training",
                "✅ Long-Term Client Relationships",
                "✅ Dedicated Jewelry Software Experts"
            ]
        }
    ];

    return (
        <>
            <HeroBanner career="" heading="About us" subheading="" buttonData="" src='/about-banner.png' />

            <section className="about-section">
                <div className="about-card orail">
                    <h2>About Orail</h2>
                    <h4>Culture to Creativity</h4>
                    <p>
                        Founded in 2000 and headquartered in Surat, <strong>Orail</strong> is a forward-thinking cloud software company dedicated to the <strong>jewellery industry</strong>.
                    </p>
                    <p>
                        With over decades of experience, we specialize in developing enterprise-grade software and mobile applications that bring clarity, control, and confidence to jewellery businesses.
                    </p>
                    <p>
                        Our mission is to transform traditional business operations into digital success stories—blending industry culture with technology-driven creativity.
                    </p>
                </div>

                <div className="about-card optigo">
                    <h2>About OptigoApps</h2>
                    <h4>Crafted for Jewellery. Powered by Cloud. Inspired by You.</h4>
                    <p>
                        <strong>OptigoApps</strong>, a flagship ERP product by Orail, is a ready-to-use, cloud-based software built exclusively for jewellery manufacturers, wholesalers, and retailers.
                    </p>
                    <p>
                        It connects all key operations—<strong>order handling, production, inventory, returns, repairs, dispatches, and accounting</strong>—in one powerful, integrated system.
                    </p>
                    <p>
                        Built on <strong>modern cloud architecture</strong>, OptigoApps ensures reliability, speed, and accessibility from anywhere, anytime.
                    </p>
                    <p>
                        We do not offer custom development, as our system is already designed with deep industry understanding, covering the core needs of jewellery businesses without the complications of customization.
                    </p>
                    <p>
                        With a proven track record, excellent after-sales support, and an easy-to-use interface, <strong>OptigoApps turns everyday business into smart business</strong> —helping you scale with purpose, not pressure.
                    </p>
                </div>
            </section>

            <section
                className="about-benefits-bullets"
                style={{
                    backgroundImage: "url(/bg.webp)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="about-benefits-bullets__container">
                    <div className="about-benefits-bullets__header">
                        <h2 className="about-benefits-bullets__title">
                            {section7Title}
                        </h2>
                    </div>

                    <div className="about-benefits-bullets__grid">
                        {section7Data.map((item) => (
                            <div key={item.id} className="about-bullet-card">
                                <div className="about-bullet-card__icon">{item.icon}</div>
                                <div className="about-bullet-card__content">
                                    <h3 className="about-bullet-card__title">{item.title}</h3>
                                    <div className="about-bullet-card__description" dangerouslySetInnerHTML={{ __html: item.description }}>
                                    </div>
                                    <ul className="about-bullet-card__list">
                                        {item.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                    {item.link && (
                                        <a href={item.linkUrl} className="about-bullet-card__link">
                                            {item.link} <ArrowRight className="about-bullet-card__link-arrow" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
