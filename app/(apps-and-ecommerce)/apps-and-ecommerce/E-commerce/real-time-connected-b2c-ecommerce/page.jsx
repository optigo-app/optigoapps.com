import React from 'react';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce/E-commerce/real-time-connected-b2c-ecommerce']);
import './page.scss';
import Industries from '@/components/Industries/Industries';

const page = () => {
    const mainTitle = "Real-Time Connected B2C E-commerce for Jewellery – Powered by OptigoApps";
    const mainDescription = `<strong>Sell Smarter & Stay in Sync – Real-Time B2C E-commerce for Jewellery</strong><br/>
    <strong>OptigoApps</strong> powers a connected shopping experience across web, mobile, and social. With live stock, dynamic pricing, personalization, and ERP integration, your jewellery business runs smarter—everywhere, all the time.`;

    const mainButtonContent = "Launch Your Connected Store";

    const section = ["section2", "section7"];

    const section2Title = `What Your B2C Customers Experience – Live, Personalized & Instant`;

    const section2Data = [
        { content: "Browse real-time inventory – no out-of-stock surprises." },
        { content: "Customize jewellery by metal, stone, weight, and style with instant price updates." },
        { content: "Track order status, delivery timelines, and reorder in one click." },
        { content: "One-tap checkout with saved addresses and payment preferences." },
        { content: "Instant customer support via integrated WhatsApp & chat." }
    ];

    const section7Title = "Real-Time Functionalities That Drive Jewellery Sales";

    const section7Data = [
        {
            id: 1,
            title: "Built for Jewellery Commerce",
            icon: "💍",
            points: [
                "Advanced filters for carat, purity, stone type, and gifting occasions.",
                "360° product spin views, HD images, and certifications.",
                "Options for personalized packaging and notes."
            ]
        },
        {
            id: 2,
            title: "Live ERP Connectivity",
            icon: "🔄",
            points: [
                "Real-time product availability synced with ERP.",
                "Dynamic price updates based on bullion rates and product changes.",
                "No more manual uploads or mismatched pricing."
            ]
        },
        {
            id: 3,
            title: "Connected Shopping Across Devices",
            icon: "📱",
            points: [
                "Responsive web and mobile apps sync live with backend.",
                "Customers experience the same personalized view across devices.",
                "Push notifications for price drops, offers, and restocks."
            ]
        }
    ];

    const section3Data = [
        { content: "Custom-branded store with your theme, logo, fonts, and UI." },
        { content: "Android & iOS apps connected to your live stock and pricing." },
        { content: "‘Build Your Ring’ – customers create custom designs with live pricing." },
        { content: "‘Design Your Earring’ – personalized drop/hoop styles and size variations." },
        { content: "Cart, wishlist, payment gateways, and secure checkout integrated." },
        { content: "Live sync with ERP to ensure inventory and pricing accuracy." },
        { content: "Auto-generated invoices and real-time order tracking." },
        { content: "Google-optimized architecture for organic traffic." },
        { content: "Engage directly via WhatsApp for queries, offers, and feedback." },
        { content: "Hosted on scalable, secure AWS cloud with real-time performance monitoring." }
    ];

    const section4Data = [
        { content: "Launch a real-time connected jewellery store – built for modern retailing." },
        { content: "Delight customers with fast, personalized, and seamless shopping experiences." },
    ];

    return (
        <>
            <Industries
                mainTitle={mainTitle}
                mainDescription={mainDescription}
                mainImg={'/real-time-connected-b2c-ecommerce.jpg'}
                mainButtonContent={mainButtonContent}
                section={section}
                section7Title={section7Title}
                section7Data={section7Data}
                section2Title={section2Title}
                section2Data={section2Data}
            />

            <section className="ecom_b2c_ind_mission_3">
                <div className="text">
                    <h2>Why Go for Real-Time Connected B2C Jewellery Commerce?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>Get Started with Your Real-Time Jewellery Store</h2>
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
