import React from 'react';
import './page.scss';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-wholesale/industries']);

const sections = [
    {
        title: 'Optigo – International Jewellery Wholesalers Solution',
        points: [
            'Multi-Currency & Global Tax Support: Seamless handling of GST, VAT, and international duties.',
            'Custom Invoice & Export Documents: Create export invoices, packing lists, certificates, and e-invoices.',
            'End-to-End Order Fulfillment: Track orders from booking to raw material to delivery.',
            'Barcode & RFID Tagging: Tag items for quick approval, auditing, and sales tracking.',
            'Real-Time Inventory Visibility: View stock by karat, category, vendor, or warehouse.',
            'Integrated Accounts & Billing: Generate GST/export invoices with full ledger visibility.',
            'Digital Catalogue Sharing: Share products with images, weights, and pricing via WhatsApp or Email.',
            'Memo & Approval Handling: Manage memos and convert approved pieces to sales automatically.',
            'Exhibition Order Management: Schedule, tag, and track trade show orders easily.',
            'Stock Reconciliation: Match system and physical stock with instant variance reports.'
        ],
    },
    {
        title: 'Optigo – Jewellery Distributors ERP',
        points: [
            'Centralized Order Management: Handle bulk/custom orders with complete control and costing.',
            'Vendor Purchase Management: Send and track POs with vendor rate agreements.',
            'Raw Material Control: Track issue/return of gold, silver, CZ, diamonds by weight and purity.',
            'Live Inventory Tracking: Real-time view of raw/finished stock by type, location, and value.',
            'Barcode & RFID Tagging: Enable stock audit and approval-sale control with unique tagging.',
            'Billing & e-Invoice Integration: Tax-compliant invoicing with full accounting integration.',
            'Digital Catalogue Sharing: Share ready/custom stock catalogues via link, WhatsApp, or Email.',
            'Exhibition Order Support: Track show orders with tagging and batch-wise delivery tracking.',
            'Memo Transactions: Monitor due dates and auto-convert approved memos to invoices.',
            'Stock Reconciliation Tools: Identify inventory shortages or surpluses instantly.'
        ],
    },
    {
        title: 'Optigo – Multi-Branch Wholesalers Module',
        points: [
            'Centralized Branch Control: Manage all branches across cities or countries from HO.',
            'HO-Based Tagging & Dispatch: HO tags and dispatches, branches only scan to receive stock.',
            'Error-Free Inwarding: Barcode scanning at branches auto-updates stock, no manual input.',
            'Real-Time Sales & Stock Dashboard: HO can monitor every branch’s performance instantly.',
            'Branch Product Search & Transfer: Check stock across branches, request transfer with one click.',
            'One-Click Order Fulfillment: Fulfill inter-branch orders instantly from HO.',
            'Improved Operational Efficiency: Centralized decision-making and branch-level execution.',
            'Scalable for Global Expansion: Enables rapid growth with full control and clarity.'
        ],
    },
];

const page = () => {
    return (
        <div>
            <HeroBanner career="Jewellery WholeSale &gt; All Industries" heading="All Industries" subheading="" buttonData="" src='/wholesale-all-industries.jpg' />
            <div className="erp-whole-summary-container-1">
                <h1 className="erp-title-1">OptigoApps Jewellery Wholesaler ERP</h1>
                <p className="erp-subtitle-1">A complete ERP suite designed for domestic, international, and multi-branch jewellery wholesalers to manage every aspect of operations—faster, smarter, and more profitably.</p>

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
