import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce/industries/jewellery-retailers']);


const page = () => {

    const mainTitle = "B2C Jewellery E-commerce & Mobile App – Powered by OptigoApps";
    const mainDescription = `<strong>Deliver a Premium Shopping Experience – Online & On-the-Go</strong>
    </br>
    <strongOptigoApps</strong> offers a complete B2C e-commerce solution tailored for jewellery retailers. Whether you sell gold, diamond, silver, or customized jewellery – our platform helps you launch a fully customizable website and mobile app with advanced features like 'Build Your Ring' and 'Design Your Earring'. Create a world-class online shopping experience that reflects your brand and engages today’s digital buyers.`;
    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `What Your Customers Get`;

    const section2Data = [
        {
            content: "Explore thousands of jewellery designs with HD images and videos."
        },
        {
            content: "Personalize jewellery based on size, metal, stones, and style."
        },
        {
            content: " Track orders, delivery status, and re-order from their history."
        },
        {
            content: "One-click checkout with saved addresses and payment preferences."
        },
        {
            content: "Instant support with integrated WhatsApp or live chat."
        },
    ]

    const section7Title = "Key Features and Functionalities"

    const section7Data = [
        {
            id: 1,
            title: "Designed for Jewellery Retail",
            icon: "💍",
            points: [
                "Unlike generic e-commerce platforms, OptigoApps understands the unique needs of jewellery businesses.",
                "We offer product filters for metal, carat, purity, stone type, price range, and occasion.",
                "You can display certifications, product videos, 360° views, and offer gifting options like custom notes and premium packaging."
            ]
        },
        {
            id: 2,
            title: "Real-Time ERP Integration",
            icon: "🔄",
            points: [
                "Our platform is seamlessly connected to Optigo ERP.",
                "Every product update, price change, and stock movement is automatically reflected on your website and app.",
                "Say goodbye to manual uploads and mismatched information."
            ]
        },
        {
            id: 3,
            title: "Perfect for Growing Jewellery Brands",
            icon: "🚀",
            points: [
                "Reach customers beyond your local area with online presence.",
                "Offer online ordering, home delivery, and in-store pickup.",
                "Boost your digital presence with social media integration.",
                "Retain customers with loyalty points, promo codes, and referral rewards."
            ]
        }
    ];


    const section3Data = [
        {
            content: "Fully customizable website with your branding, fonts, and color themes."
        },
        {
            content: "Mobile app for Android & iOS – your store in every customer’s pocket."
        },
        {
            content: "'Build Your Ring' feature – customers can select diamond, metal, purity, and size to create custom rings."
        },
        {
            content: "'Design Your Earring' tool – personalized options for studs, drops, and hoops with real-time price updates."
        },
        {
            content: "Easy-to-use interface with cart, wishlist, secure checkout, and multiple payment gateways."
        },
        {
            content: "Real-time stock sync with ERP – never display out-of-stock items again."
        },
        {
            content: "Invoice generation, tracking updates, and customer login for order history."
        },
        {
            content: "SEO-optimized product listings to boost your visibility on Google."
        },
        {
            content: "WhatsApp chat and marketing tool integrations to engage directly with customers."
        },
        {
            content: "Secure, scalable, and cloud-based infrastructure hosted on AWS."
        }
    ];

    const section4Data = [
        {
            content: "Launch a modern, feature-rich jewellery store online with OptigoApps."
        },
        {
            content: "Give your customers the experience they expect and grow your brand across every channel – web, mobile, and social."
        },
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/app-ecom-jewellery-retailers.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section2Title={section2Title} section2Data={section2Data} />

            <section className="ecom_retail_ind_mission_3">
                <div className="text">
                    <h2>Why Choose Optigo B2C E-commerce?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>Get Started with Your Jewellery E-commerce Website & App</h2>
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
