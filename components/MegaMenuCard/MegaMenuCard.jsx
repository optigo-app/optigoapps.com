'use client';

import { useHandleUrlNavigation } from '@/utils/useHandleUrlNavigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Section = ({ title, items, linkText, setActiveMenu }) => {

    const handleNavigation = useHandleUrlNavigation();

    return (
        <div>
            {/* <h4 className='text-md font-semibold text-red-600 uppercase mb-2 tracking-[3px] cursor-pointer'> */}
            <h4 className='text-md font-semibold text-[var(--primary-color)] uppercase mb-2 tracking-[3px] cursor-pointer'>
                {title}
            </h4>

            <ul className='space-y-3 text-gray-700 text-[15px]'>
                {items.map((item, idx) => (
                    // <li key={idx} className='w-fit hover:text-red-600'>
                    <li key={idx} className='w-fit hover:text-[var(--primary-color)]'>
                        <Link
                            href={item.url}
                            onClick={(e) => { handleNavigation(e, item.url); setActiveMenu(null) }}
                            className='hover:underline cursor-pointer'
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}

                {linkText && (
                    // <li className='text-red-600 mt-2 font-medium text-lg'>
                    <li className='text-[var(--primary-color)] mt-2 font-medium text-lg'>
                        <Link
                            href={linkText.url}
                            onClick={(e) => { handleNavigation(e, linkText.url); setActiveMenu(null) }}
                            className='cursor-pointer'
                        >
                            {linkText.label}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
};

const PromoCard = ({ title, description, buttonText, link, setActiveMenu }) => {
    const paths = ["Platform", "Blog", "Career"];
    const isInclude = paths.includes(title);
    const handleNavigation = useHandleUrlNavigation();

    return (
        <>
            {isInclude ?
                <div className='bg-[#f3e9ff] p-6 h-full rounded-lg w-96 text-md'>
                    <h4 className='text-xl font-semibold mb-2'>{title}</h4>
                    <p className='mb-4'>{description}</p>
                    <button
                        className='text-white mt-3 px-4 py-1 rounded-lg cursor-pointer hover:opacity-90'
                        style={{
                            background: 'var(--primary-background)'
                        }}
                        onClick={(e) => { handleNavigation(e, link); setActiveMenu(null); }}
                    >
                        {buttonText}
                    </button>
                </div>
                :
                <div className='bg-[#f3e9ff] p-6 h-full rounded-lg w-96 text-lg'>
                    <h4 className='text-xl font-semibold mb-2'>{title}</h4>
                    <p className='mb-4'>{description}</p>
                    <button
                        className='text-white px-4 py-2 mt-3 rounded-lg cursor-pointer hover:opacity-90'
                        style={{
                            background: 'var(--primary-background)'
                        }}
                        onClick={(e) => { handleNavigation(e, link); setActiveMenu(null); }}
                    >
                        {buttonText}
                    </button>
                </div>
            }
        </>

    );
};


const contentMap = {
    'Manufacturer': {
        industries: [
            { name: 'Diamond Jewellery Manufacturing', url: '/jewellery-manufacture/industries/diamond-jewellery-manufacturing' },
            { name: 'Gold Jewellery Manufacturing', url: '/jewellery-manufacture/industries/gold-jewellery-manufacturing' },
            { name: 'Handmade Jewellery', url: '/jewellery-manufacture/industries/handmade-jewellery' },
            { name: 'CZ Manufacturing', url: '/jewellery-manufacture/industries/cz-manufacturing' },
            { name: 'Kundan/Jadau Manufacturing', url: '/jewellery-manufacture/industries/kundan-jadau-manufacturing' },
            { name: 'Bangles Manufacturing', url: '/jewellery-manufacture/industries/bangles-manufacturing' },
        ],
        solutions: [
            { name: 'Product Development ', url: '/jewellery-manufacture/solutions/product-development' },
            { name: 'Automate Entry Process', url: '/jewellery-manufacture/solutions/automate-entry-process' },
            { name: 'Real-Time Loss & Recovery Control', url: '/jewellery-manufacture/solutions/real-time-loss-recovery-control' },
            { name: 'Inventory Tracking', url: '/jewellery-manufacture/solutions/inventory-tracking' },
            { name: 'Product Making Guide for workers', url: '/jewellery-manufacture/solutions/product-making-guide-for-workers' },
            { name: 'AI Based Stock Search', url: '/jewellery-manufacture/solutions/ai-based-stock-search' },
        ],
        features: [
            { name: 'Inventory Management', url: '/jewellery-manufacture/features/inventory-management' },
            { name: 'Production process & Loss Management', url: '/jewellery-manufacture/features/production-process-loss-management' },
            { name: 'Orders & Repair Management', url: '/jewellery-manufacture/features/orders-repair-management' },
            { name: 'Accounts & Payments', url: '/jewellery-manufacture/features/accounts-payments' },
            { name: 'Sales & billing', url: '/jewellery-manufacture/features/sales-billing' },
            { name: 'Analytics & Dashboards', url: '/jewellery-manufacture/features/analytics-dashboards' },
        ],
        promos: [
            {
                title: 'Product Development',
                description: 'Streamline jewellery production with OptigoApps.',
                buttonText: 'Explore Product Solutions →',
                link: '/jewellery-manufacture/solutions/product-development',
            },
            {
                title: 'SCAVU Data Exchange',
                description: 'Seamlessly connect and exchange data across systems.',
                buttonText: 'Discover SCAVU Exchange →',
                link: '/apps-and-ecommerce/apps/vendor-customer-integrations',
            }
        ],
        links: {
            // industries: { label: 'All industries →', url: '/jewellery-manufacture/industries/all-industries' },
            // solutions: { label: 'All solutions →', url: '/solutions' },
            features: { label: 'All features →', url: '/jewellery-manufacture/features/all-features' },
        }
    },

    'Wholesale': {
        industries: [
            { name: 'Jewellery Distributors', url: '/jewellery-wholesale/industries/jewellery-distributors' },
            { name: 'Domestic/International Wholesalers', url: '/jewellery-wholesale/industries/domestic-international-wholesalers' },
            { name: 'Multi-Branch Wholesalers', url: '/jewellery-wholesale/industries/multi-branch-wholesalers' },
        ],
        solutions: [
            { name: 'Vendor Management', url: '/jewellery-wholesale/solutions/vendor-management' },
            { name: 'Order & Re-Order Management', url: '/jewellery-wholesale/solutions/order-reorder-management' },
            { name: 'Real-Time Pricing Control', url: '/jewellery-wholesale/solutions/real-time-pricing-control' },
            { name: 'Multi-Branch & Cloud Sync', url: '/jewellery-wholesale/solutions/multi-branch-cloud-sync' },
            { name: 'Repair Management', url: '/jewellery-wholesale/solutions/repair-management' },
            { name: 'Advance Analytical Reports', url: '/jewellery-wholesale/solutions/advance-analytical-reports' },
        ],
        features: [
            { name: 'Inventory Management', url: '/jewellery-wholesale/features/inventory-management' },
            { name: 'Sales & Billing with scanning', url: '/jewellery-wholesale/features/sales-billing-scanning' },
            { name: 'Approval Memo & Reconciliation', url: '/jewellery-wholesale/features/approval-memo-reconciliation' },
            { name: 'Accounts & Payments', url: '/jewellery-wholesale/features/accounts-payments' },
            { name: 'Customer Relationship Management (CRM)', url: '/jewellery-wholesale/features/customer-relationship-management-crm' },
        ],
        promos: [
            {
                title: 'Inventory Management',
                description: 'Real-time inventory control and full traceability for B2B jewellery.',
                buttonText: 'Explore Inventory Solutions →',
                link: '/jewellery-wholesale/features/inventory-management',
            },
            {
                title: 'Multi-Branch Wholesalers',
                description: 'Manage multiple branches with real-time inventory, pricing, and orders.',
                buttonText: 'Discover Branch Exchange →',
                link: '/jewellery-wholesale/solutions/multi-branch-cloud-sync',
            }
        ],
        links: {
            // industries: { label: 'All industries →', url: '/jewellery-wholesale/industries/all-industries' },
            // solutions: { label: 'All solutions →', url: '/solutions' },
            features: { label: 'All features →', url: '/jewellery-wholesale/features/all-features' },
        }
    },

    'Jewellery Retail': {
        industries: [
            { name: 'Jewellery Retail Stores', url: '/jewellery-retail/industries/jewellery-retail-stores' },
            { name: 'Multi-Location Chain Stores', url: '/jewellery-retail/industries/multi-location-chain-stores' },
            { name: 'Franchise Showrooms', url: '/jewellery-retail/industries/franchise-showrooms' },
            { name: 'Boutique Jewellery Brands', url: '/jewellery-retail/industries/boutique-jewellery-brands' },
        ],
        solutions: [
            { name: 'POS Billing & Barcode Scanning', url: '/jewellery-retail/solutions/pos-billing-barcode-scanning' },
            { name: 'Orders & Vendor Management', url: '/jewellery-retail/solutions/orders-vendor-management' },
            { name: 'Repair & Old Gold Management', url: '/jewellery-retail/solutions/repair-old-gold-management' },
            { name: 'Business Analytics', url: '/jewellery-retail/solutions/business-analytics' },
            { name: 'Schemes & Loyalty Programm', url: '/jewellery-retail/solutions/schemes-loyalty-programm' },
        ],
        features: [
            { name: 'Inventory Management', url: '/jewellery-retail/features/inventory-management' },
            { name: 'Customer Relationship Management (CRM)', url: '/jewellery-retail/features/customer-relationship-management-crm' },
            { name: 'Accounts & Payments', url: '/jewellery-retail/features/accounts-payments' },
            { name: 'Sales & Billing with Scanning', url: '/jewellery-retail/features/sales-billing-scanning' },
            { name: 'Approval Memo & Reconciliation', url: '/jewellery-retail/features/approval-memo-reconciliation' },
        ],
        promos: [
            {
                title: 'Smart POS & Billing',
                description: 'Speed up your retail operations with barcode-enabled POS, approval memos, and seamless billing.',
                buttonText: 'Explore POS Features →',
                link: '/jewellery-retail/solutions/pos-billing-barcode-scanning/',
            },
            {
                title: 'Retail ERP with CRM & Analytics',
                description: 'Manage inventory, customer relationships, and branches with real-time insights and cloud sync.',
                buttonText: 'Discover Retail ERP →',
                link: '/jewellery-retail/features/all-features/',
            }
        ],

        links: {
            // industries: { label: 'All industries →', url: '/jewellery-retail/industries/all-industries' },
            // solutions: { label: 'All solutions →', url: '/solutions' },
            features: { label: 'All features →', url: '/jewellery-retail/features/all-features' },
        }
    },

    'Apps & Ecommerce': {
        industries: [
            { name: 'Jewellery Manufacturing', url: '/apps-and-ecommerce/industries/jewellery-manufacturing' },
            { name: 'Jewellery Wholesalers', url: '/apps-and-ecommerce/industries/jewellery-wholesalers' },
            { name: 'Jewellery Retailers', url: '/apps-and-ecommerce/industries/jewellery-retailers' },
        ],
        solutions: [
            { name: 'Real time Connected B2B Ecommerce', url: '/apps-and-ecommerce/E-commerce/real-time-connected-b2b-ecommerce' },
            { name: 'Real time Connected B2C Ecommerce', url: '/apps-and-ecommerce/E-commerce/real-time-connected-b2c-ecommerce' },
            { name: 'Omnichannel Ecommerce', url: '/apps-and-ecommerce/E-commerce/omnichannel-ecommerce' },
        ],
        features: [
            { name: 'Sales Team Mobile App (Optigo Express)', url: '/apps-and-ecommerce/apps/sales-team-mobile-app' },
            { name: 'Exhibition & Sales team tablet App (Icatalog)', url: '/apps-and-ecommerce/apps/exhibition-and-sales-team-tablet-app' },
            { name: 'B2B & B2C Catalog Sharing (ProCatalog)', url: '/apps-and-ecommerce/apps/b2b-and-b2c-catalog-sharing' },
            { name: 'Show Room App (EVO)', url: '/apps-and-ecommerce/apps/show-room-app' },
            { name: 'Vendor Customer integrations (SCAVU)', url: '/apps-and-ecommerce/apps/vendor-customer-integrations' },
            { name: 'Management App', url: '/apps-and-ecommerce/apps/management-app' },
            { name: 'Sales Representative App', url: '/apps-and-ecommerce/apps/sales-representative-app' },
            { name: 'B2b Customer APP', url: '/apps-and-ecommerce/apps/b2b-customer-app' },
            { name: 'B2c Customer APP', url: '/apps-and-ecommerce/apps/b2c-customer-app' },
        ],
        promos: [
            {
                title: 'Omnichannel Jewellery Commerce',
                description: 'Unify your B2B, B2C, and showroom experiences with real-time connected apps and eCommerce solutions.',
                buttonText: 'See Omnichannel in Action →',
                link: '/apps-and-ecommerce/E-commerce/omnichannel-ecommerce',
            },
            {
                title: 'Sales & Showroom Apps',
                description: 'Equip your teams with powerful tools like Optigo Express, Icatalog, EVO, and more.',
                buttonText: 'Explore Sales Solutions →',
                link: '/apps-and-ecommerce/apps/sales-team-mobile-app',
            }
        ],
        links: {}
    },

    'About Us': {
        industries: [
            {
                title: 'Platform',
                description: 'Discover our platform that powers innovation and seamless digital experiences.',
                url: '/platform'
            },
        ],
        solutions: [
            {
                title: 'Blog',
                description: 'Read insights, updates, and stories from our team and industry experts.',
                url: '/blog'
            },
        ],
        features: [
            {
                title: 'Career',
                description: 'Join our team and grow your career with exciting opportunities.',
                url: '/career'
            },
        ],
    }

};

const MegaMenuCard = ({ title, setActiveMenu }) => {

    const data = contentMap[title];
    if (!data) return null;

    const router = useRouter();

    return (
        <div className="absolute w-[110rem] left-[-5%] bg-[#f7f7f8] shadow-2xl p-12 flex justify-between rounded-md animate-in">
            {title === 'About Us' ? (
                <div className='flex gap-5'>
                    {[...(data.industries || []), ...(data.solutions || []), ...(data.features || [])].map((item, idx) => (
                        <PromoCard key={idx} title={item.title} description={item.description} buttonText={`Explore ${item.title}`} link={item.url} setActiveMenu={setActiveMenu} />
                    ))}
                </div>
            ) : (
                <>
                    <Section title="Industries" items={data.industries || []} linkText={data.links?.industries} navigate={router} setActiveMenu={setActiveMenu} />

                    {data.solutions?.length > 0 && (
                        <Section
                            title={title === 'Apps & Ecommerce' ? 'E-Commerce' : 'Solutions'}
                            items={data.solutions}
                            linkText={data.links?.solutions}
                            navigate={router}
                            setActiveMenu={setActiveMenu}
                        />
                    )}
                    {data.features?.length > 0 && (
                        <Section
                            title={title === 'Apps & Ecommerce' ? 'Apps' : 'Feature'}
                            items={data.features}
                            linkText={data.links?.features}
                            navigate={router}
                            setActiveMenu={setActiveMenu}
                        />
                    )}

                    {data.promos?.length > 0 ? (
                        <div className='flex flex-col gap-5'>
                            {data.promos.map((promo, idx) => (
                                <PromoCard key={idx} {...promo} setActiveMenu={setActiveMenu} />
                            ))}
                        </div>
                    ) : (
                        <div className='bg-purple-200 p-6 h-full rounded-lg w-96 text-lg invisible' />
                    )}
                </>
            )}
        </div>
    );
};

export default MegaMenuCard;
