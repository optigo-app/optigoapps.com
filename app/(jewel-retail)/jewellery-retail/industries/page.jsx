import React from 'react';
import './page.scss';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-retail/industries']);

const sections = [
    {
        title: 'Optigo – Jewellery Boutique ERP',
        points: [
            'Custom Order Management: Record client preferences, assign vendors, track status, provide design previews.',
            'Stock & Order Management: Barcode-tracked inventory (Gold, Diamond, Silver, CZ, Jadau), automate reordering, manage seasonal displays.',
            'CRM: Maintain purchase history, send updates via WhatsApp/SMS, personalized promotions, and follow-up schedules.',
            'Mobile App for Sales: Book appointments, manage custom orders, create POS bills, and view real-time inventory.',
            'Repair & Old Gold Management: Track repairs, monitor timelines, bill old gold, and capture customer feedback.',
            'Integrated Accounting: Auto-generate invoices, customer ledgers, Tally export, and financial summaries.',
            'eCommerce B2C Website: Virtual try-on, secure checkout, product reviews, and online browsing.',
            'Branch & Franchise Management: Centralized pricing, monitor staff, manage promotions and sync branding.',
            'Customer Loyalty & Saving Schemes: Points, vouchers, tiered rewards, saving plans, and automated notifications.',
        ],
    },
    {
        title: 'Optigo – Multi-Branch Retail ERP',
        points: [
            'Centralized Control: HO tags products, branches receive via scan, no manual entries or tagging needed.',
            'Branch-Specific Policies: Configure local pricing, staff roles, branding guidelines, and schemes per branch.',
            'Real-Time Stock & Sales Visibility: Track stock, sales, and performance across all locations instantly.',
            'Simplified Order Management: One-click stock transfers, urgent deliveries, and real-time shipping status.',
            'Product Locator: Instantly check availability of products across branches by barcode scan.',
            'Global Scalability: Seamlessly expand into new cities or countries with centralized control.',
            'Error-Free Operations: Barcode-driven workflow ensures zero manual entry mistakes.',
            'Enhanced Customer Experience: Faster service, better fulfillment, and improved satisfaction.',
        ],
    },
    {
        title: 'Optigo – Retail Store ERP',
        points: [
            'Complete Stock & Order Management: Real-time inventory, automated reordering, stock categorization by supplier.',
            'Integrated CRM: Segment customers by preferences, track purchase history, WhatsApp invoices, referral sources.',
            'Mobile App for Sales: Estimate, bill, and track customer journeys even in offline mode.',
            'POS & Billing: Fast billing, old gold/repair handling, integrated accounting, and digital receipts.',
            'Advanced Features: Repair management, customer app, loyalty programs, analytics, seasonal promotions.',
            'Omnichannel Experience: Integrate with B2C website, showroom systems, and CRM in real-time.',
            'Data-Driven Forecasting: Forecast demand based on past sales and stock turnover.',
        ],
    },
    {
        title: 'Optigo – Franchise ERP',
        points: [
            'Centralized Control: HO manages pricing, quality standards, product dispatch, and marketing materials.',
            'Franchise Dashboards: Monitor franchise sales, stock, employee performance, and profitability in real-time.',
            'Standardized Operations: Ensure consistent branding and quality across all franchisees.',
            'Real-Time Tracking: Review sales trends, feedback, and customer satisfaction per franchise.',
            'Simplified Order Flow: Manage requests, dispatch approvals, and bulk orders seamlessly.',
            'Supply Chain Optimization: Route optimization, reverse logistics, and efficient inventory allocation.',
            'Training & Support: Provide onboarding, training content, and franchise assistance within the platform.',
            'Scalable Growth: Open and manage new franchises quickly while maintaining full control.'
        ],
    }
];


const page = () => {
    return (
        <div>
            <HeroBanner career="Jewellery Retail &gt; All Industries" heading="All Industries" subheading="" buttonData="" src='/retail-all-industries.jpg' />
            <div className="erp-retail-summary-container-1">
                <h1 className="erp-title-1">OptigoApps Jewellery Retail ERP</h1>
                <p className="erp-subtitle-1">A complete ERP suite designed for Boutique, Multi-Branch Retail, Retail Store, and Franchise jewellery retailers to manage every aspect of operations—faster, smarter, and more profitably.</p>

                <div className='erp_section_main-1'>
                    {sections.map((section, idx) => (
                        <div key={idx} className="erp-section-1">
                            <h2 className="section-title-1">{section.title}</h2>
                            <ul className="section-points-1">
                                {section.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;
