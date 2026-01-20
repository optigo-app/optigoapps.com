import React from 'react';
import {
    ArrowRight,
    Gem,
    ShoppingBag,
    Scale,
    Tag
} from 'lucide-react';
import './Features.scss';
import Link from 'next/link';
import { useHandleUrlNavigation } from '@/utils/useHandleUrlNavigation';

const Features = () => {

    const handleNavigation = useHandleUrlNavigation();

    const industries = [
        {
            id: 1,
            icon: <Gem className="industry-card__icon" />,
            title: "Jewellery Production Software",
            description: "Transform your jewellery business with Optigo’s all-in-one production software, streamlining everything from design to the finished product.",
            link: "Jewellery Production Software",
            linkUrl: "/jewellery-production-software"
        },
        {
            id: 2,
            icon: <Scale className="industry-card__icon" />,
            title: "Jewellery Trading Software",
            description: "Transform your jewellery business with Optigo — the all-in-one platform from design to delivery. Simplify trading operations by managing orders, vendors, pricing, inventory, and accounting effortlessly.",
            link: "Jewellery Trading Software",
            linkUrl: "/jewellery-trading-software"
        },
        {
            id: 3,
            icon: <Tag className="industry-card__icon" />,
            title: "Jewellery Retail Software",
            description: "Simplify your jewellery retail operations with real-time control over inventory, sales, billing, and customer engagement—anytime, anywhere.",
            link: "Jewellery Retail Software",
            linkUrl: "/jewellery-retail"
        },
        {
            id: 4,
            icon: <ShoppingBag className="industry-card__icon" />,
            title: "Jewellery Ecommerce & Apps",
            description: "Empower your jewellery business with powerful eCommerce solutions and mobile apps to manage products, showcase collections, and sell online effortlessly.",
            link: "Jewellery Ecommerce & Apps",
            linkUrl: "/apps-and-ecommerce/E-commerce/real-time-connected-b2b-ecommerce"
        },
        // {
        //     id: 5,
        //     icon: <Sparkles className="industry-card__icon" />,
        //     title: "Contemporary & CNE Collections",
        //     description: "Elevate your modern jewelry lines with design planning tools, seasonal trend integration, and influencer-ready campaign support.",
        //     link: "Contemporary Jewelry",
        //     linkUrl: "/jewellery-manufacture/industries/gold-jewellery-manufacturing/"
        // },
        // {
        //     id: 6,
        //     icon: <Truck className="industry-card__icon" />,
        //     title: "Jewelry Supply Chain",
        //     description: "Coordinate raw material sourcing, vendor workflows, and stone certification within a unified jewelry supply chain platform.",
        //     link: "Supply Chain Integration",
        //     linkUrl: "/jewellery-wholesale/solutions/vendor-management/"
        // },
        // {
        //     id: 7,
        //     icon: <CreditCard className="industry-card__icon" />,
        //     title: "Jewelry Retail & POS",
        //     description: "Optimize billing, inventory sync, loyalty points, and gold rate fluctuations with a dedicated POS for single or multi-location jewelry stores.",
        //     link: "Retail POS System",
        //     linkUrl: "/jewellery-retail/solutions/pos-billing-barcode-scanning/"
        // },
        // {
        //     id: 8,
        //     icon: <Globe className="industry-card__icon" />,
        //     title: "Global Exports & Exhibitions",
        //     description: "Simplify export documentation, exhibition item tracking, and region-specific compliance with our global trade-ready modules.",
        //     link: "Jewelry Export Suite",
        //     linkUrl: "/jewellery-wholesale/solutions/order-reorder-management/"
        // }
    ];

    return (
        <section className="industry-grid" style={{ backgroundImage: 'url(/bg.webp)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
            <div className="industry-grid__container">
                <div className="industry-grid__header">
                    <h2 className="industry-grid__title">
                        Jewellery software built for better business
                    </h2>
                    {/* <a href='/jewellery-manufacture/industries/all-industries/' onClick={(e) => handleNavigation(e, '/jewellery-manufacture/industries/all-industries/')} className="industry-grid__view-all">
                        View all industries
                        <ArrowRight className="industry-grid__arrow" />
                    </a> */}
                </div>

                <div className="industry-grid__grid">
                    {industries.map((industry) => (
                        <div key={industry.id} className="industry-card">
                            <div className="industry-card__icon-wrapper">
                                {industry.icon}
                            </div>

                            <div className="industry-card__content">
                                <h3 className="industry-card__title">{industry.title}</h3>
                                <p className="industry-card__description">{industry.description}</p>

                                <Link href={industry.linkUrl} onClick={(e) => handleNavigation(e, industry.linkUrl)} className="industry-card__link">
                                    {industry.link}
                                    <ArrowRight className="industry-card__link-arrow" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;