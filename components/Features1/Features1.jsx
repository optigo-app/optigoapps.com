import React from 'react';
import {
    ArrowRight,
} from 'lucide-react';
import './Features1.scss';
import Link from 'next/link';
import { useHandleUrlNavigation } from '@/utils/useHandleUrlNavigation';

const Features1 = () => {

    const handleNavigation = useHandleUrlNavigation();

    // const enterprises = [
    //     {
    //         id: 1,
    //         title: "Jewelry ERP System",
    //         description:
    //             "Centralize your entire business operations with a cloud-based ERP tailored for jewelry. Manage karigar work, gold rates, inventory, billing, and accounting in one place.",
    //         link: "Jewelry ERP",
    //         linkUrl: "/jewellery-manufacture"
    //     },
    //     {
    //         id: 2,
    //         title: "Jewelry E-commerce Platform",
    //         description:
    //             "Sell jewelry online with a modern e-commerce platform built for the industry. Sync inventory, showcase HD catalogs, and offer customizations with real-time order tracking.",
    //         link: "Jewelry E-commerce",
    //         linkUrl: "/apps-and-ecommerce/industries/jewellery-manufacturing/"
    //     },
    //     {
    //         id: 3,
    //         title: "SCAVU – Smart Camera AI for Valuation & Utility",
    //         description:
    //             "Use SCAVU to automatically identify jewelry items, estimate value, and detect patterns using smart AI vision tools — ideal for appraisals, insurance, and showroom automation.",
    //         link: "SCAVU Integration",
    //         linkUrl: "/apps-and-ecommerce/apps/vendor-customer-integrations"
    //     },
    //     {
    //         id: 4,
    //         title: "Jewelry Mobile App",
    //         description:
    //             "Offer a personalized jewelry app for your customers and staff. Enable catalog browsing, try-on AR, customer login, karigar tracking, and real-time pricing on mobile.",
    //         link: "Jewelry App",
    //         linkUrl: "/apps-and-ecommerce/apps/b2b-customer-app"
    //     },
    //     {
    //         id: 5,
    //         title: "Jewelry POS System",
    //         description:
    //             "Boost your retail experience with a jewelry-focused POS system. Handle barcode-based billing, weight-wise pricing, return/exchange, and dynamic gold rate updates.",
    //         link: "Jewelry POS",
    //         linkUrl: "/jewellery-retail/solutions/pos-billing-barcode-scanning/"
    //     }
    // ];

    const enterprises = [
        {
            id: 1,
            title: "Icatalog",
            description:
                "Your entire jewellery collection — beautifully displayed, intelligently connected, and ready to Take orders & sell on the go.",
            link: "Icatalog",
            linkUrl: "/apps-and-ecommerce/apps/exhibition-and-sales-team-tablet-app/"
        },
        {
            id: 2,
            title: "Express",
            description:
                "From scanning jewellery tags to billing and syncing with ERP—everything happens in seconds. Smart, paperless, and always connected—your entire sales team’s power in one app.",
            link: "Express",
            linkUrl: "/apps-and-ecommerce/apps/sales-team-mobile-app/"
        },
        {
            id: 3,
            title: "Evo",
            description:
                "Deliver a personalised shopping experience, powered by real-time data and effortless mobile control – all synced with Optigo ERP.",
            link: "Evo",
            linkUrl: "/apps-and-ecommerce/apps/show-room-app/"
        },
        {
            id: 4,
            title: "Admin",
            description:
                "The Admin App is designed exclusively for business owners and management teams to stay in control anytime, anywhere. It provides real-time visibility into key business insights, enabling faster and smarter decisions.",
            link: "Admin",
            linkUrl: "/apps-and-ecommerce/apps/management-app/"
        },
        {
            id: 5,
            title: "Sales Rep",
            description:
                "The Sales Rep App is designed to help your sales team work smarter and close deals faster. With real-time access to customer insights, order details, and performance reports, your team can stay productive and informed—anytime, anywhere.",
            link: "Sales Rep",
            linkUrl: "/apps-and-ecommerce/apps/sales-representative-app/"
        },
        {
            id: 6,
            title: "Procatalog",
            description:
                "Turn every jewellery design into a selling opportunity. ProCatalog lets you showcase products digitally, accept orders instantly, and manage everything directly through your ERP — saving time, effort, and resources.",
            link: "Procatalog",
            linkUrl: "/apps-and-ecommerce/apps/b2b-and-b2c-catalog-sharing/"
        }
    ];

    return (
        <section className='enterprise_main_div'>
            <div className="enterprise-grid"
            // style={{ backgroundImage: 'url(/bg1.webp)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}
            >
                <div className="enterprise-grid__container">
                    <div className="enterprise-grid__header">
                        <div className="brand_title">
                            {/* <h3 className="brand_section_tag">Enterprise Applications</h3> */}
                        </div>
                        <h2 className="enterprise-grid__title">
                            Special in Optigo
                        </h2>
                        {/* <p>Explore our cloud solutions for ERP, SCM, HCM, financial management, and sustainability and ESG. All OptigoApps enterprise software runs on our powerful cloud innovation platform and integrates seamlessly.</p> */}
                    </div>

                    <div className="enterprise-grid__grid">
                        {enterprises.map((enterprise) => (
                            <div key={enterprise.id} className="enterprise-card">
                                <div className="enterprise-card__content">
                                    <h3 className="enterprise-card__title">{enterprise.title}</h3>
                                    <p className="enterprise-card__description">{enterprise.description}</p>

                                    <Link href={enterprise.linkUrl} onClick={(e) => handleNavigation(e, enterprise.linkUrl)} className="enterprise-card__link">
                                        {enterprise.link}
                                        <ArrowRight className="enterprise-card__link-arrow" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features1;