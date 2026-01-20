import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce/apps/b2b-and-b2c-catalog-sharing']);

const page = () => {

    const mainTitle = "ProCatalog – Smart Online Catalog Powered by Optigo ERP";
    const mainDescription = `<strong>Turn Your Jewellery Catalog into a 24/7 Sales Engine.</strong>
    </br>
    Take your jewellery business online instantly — with <strong>real-time stock updates, live design sync, and zero manual effort</strong>.
    </br>
<strong>ProCatalog</strong> by <strong>OptigoApps</strong> is a revolutionary <strong>Digital Catalog Platform</strong>, seamlessly connected with <strong>Optigo ERP</strong>, helping jewellers <strong>sell smarter, faster, and more efficiently</strong>.`;

    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Key Features of Procatalog:"

    const section7Data = [
        {
            id: 1,
            title: "One Platform. Unlimited Selling Power.",
            icon: "🚀",
            points: [
                "ProCatalog gives your customers a dynamic digital catalog experience, beautifully showcasing your jewellery collections while syncing every detail with your ERP — from stock to pricing to orders."
            ]
        },
        {
            id: 2,
            title: "Live ERP Connectivity",
            icon: "⚡",
            points: [
                "Stay fully synced — product data, stock, and pricing update in real-time directly from Optigo ERP."
            ]
        },
        {
            id: 3,
            title: "Personalized Customer Catalogs",
            icon: "🎯",
            points: [
                "Create exclusive, private catalogs for each client — tailored to their style and preferences."
            ]
        },
        {
            id: 4,
            title: "Master Catalog Mode",
            icon: "📘",
            points: [
                "Share one universal catalog link for your complete range — simple, fast, and easy to explore."
            ]
        },
        {
            id: 5,
            title: "Auto Order Sync to ERP",
            icon: "🔄",
            points: [
                "Orders placed online instantly reflect in your ERP — no manual entry, no errors."
            ]
        },
        {
            id: 6,
            title: "Instant Share via WhatsApp / Email",
            icon: "📤",
            points: [
                "Share product catalogs or collections in one click — boost sales anytime, anywhere."
            ]
        },
        {
            id: 7,
            title: "Integrated Online Payments",
            icon: "💰",
            points: [
                "Accept secure payments directly through the catalog — faster checkout, faster sales."
            ]
        },
        {
            id: 8,
            title: "Customer Self-Service Portal",
            icon: "🧭",
            points: [
                "Let customers track orders, download invoices, and view ledgers — all in one place."
            ]
        },
        {
            id: 9,
            title: "Zero Manual Work",
            icon: "🤖",
            points: [
                "Say goodbye to repetitive updates — everything stays live and automated."
            ]
        },
    ];

    const section3Data = [
        {
            content: "Go online in minutes – no coding or setup hassle"
        },
        {
            content: "Real-time ERP sync – no manual updates"
        },
        {
            content: "Share your catalog via WhatsApp, Email, or SMS"
        },
        {
            content: "Accept orders 24/7 from anywhere"
        },
        {
            content: "Grow your business without building a full e-commerce website"
        },
    ];

    const section4Data = [
        {
            content: "Whether you serve B2B clients or retail buyers, ProCatalog helps you sell round the clock with live ERP sync, digital cataloging, and instant order management."
        },
        {
            content: "Sell Smarter. Work Faster. Grow Effortlessly — with ProCatalog by OptigoApps."
        },
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/b2b-and-b2c-catalog-sharing.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />

            <section className="ecom_pro_ind_mission_3">
                <div className="text">
                    <h2>Why Choose ProCatalog?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>Transform Your Catalog into a Powerful Sales Channel.</h2>
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
