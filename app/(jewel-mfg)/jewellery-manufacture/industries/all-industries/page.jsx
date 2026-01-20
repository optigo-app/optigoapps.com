import React from 'react';
import './page.scss';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/industries/all-industries']);

const sections = [
    {
        title: 'Bangle Jewellery Manufacturing',
        points: [
            'Manage custom & bulk production (casting, handmade, CNC workflows)',
            'Auto job assignment by size, design, or purity',
            'Supports single and full-set bangle manufacturing',
            'Barcode-based workflow and weighing scale integration',
            'Real-time stage-wise job tracking',
            'Worker I-Card scanning improves accountability',
            'Metal loss tracking and recovery reports',
            'Set tolerance alerts on excess loss in soldering/polishing',
            'Generate dust and scrap reconciliation automatically',
            'Supports set-wise order tracking (2/4/6/12-piece)',
            'Easily reorder from order history',
            'Size-wise costing based on real metal/labor/time',
            'Auto-invoice creation from completed jobs',
        ],
    },
    {
        title: 'Diamond Jewellery Manufacturing',
        points: [
            'Centralized product development with CAD tracking',
            'Auto-link diamond weight/purity with designs',
            'Role-wise approvals and live status visibility',
            'Barcode job cards with real-time WIP monitoring',
            'Worker logins and task tracking via mobile or I-Card',
            'Avoid manual entry errors; monitor real-time progress',
            'Diamond loss and rejection control with alerts',
            'Record rework/rejection with department-wise responsibility',
            'Reuse previous design/job data for faster processing',
            'Track customer-wise delivery priorities',
            'Direct job-to-invoice sync with margin calculations',
            'Reduce duplicate data entries and financial errors',
        ],
    },
    {
        title: 'Gold Jewellery Manufacturing',
        points: [
            'Built for scalable gold production (custom and bulk)',
            'Auto job allocation by collection/design/purity',
            'Supports same-style multi-line job cards',
            'Real-time job updates and mobile scanning',
            'Barcoded job sheets with weighing scale connectivity',
            'Worker-level data capture and progress monitoring',
            'Precision loss tracking and gold recovery per process',
            'Reports for abnormal loss and alerts for rework',
            'Memo, repair, or sale billing supported',
            'Auto-email updates on production/delivery',
            'Profit analysis and gold costing transparency',
            'Job to invoice generation without switching tools',
        ],
    },
    {
        title: 'Handmade Jewellery Manufacturing',
        points: [
            'Custom manual workflow creation for soldering, engraving, etc.',
            'Assign job cards manually or auto-distribute by design',
            'Track artisan performance in real-time via I-Card login',
            'Reports on speed, efficiency, and rework count',
            'Monitor gold balance per process with alerts',
            'Generate alerts for wastage or high loss by artisan',
            'Track cost and time for repair vs fresh jobs',
            'Document before/after details for clarity',
            'Invoices with design/QC/weight details',
            'Keep customers informed of production status',
        ],
    },
    {
        title: 'CZ Jewellery Manufacturing',
        points: [
            'Master catalog and design database management with media',
            'Categorize by brand, plating, season, or collection',
            'Generate job cards in bulk with barcode tagging',
            'Process multiple variants/sizes in one go',
            'Manage CZ stone loss and multiple-level QC',
            'Auto-log plating defects, polish quality, and more',
            'Inventory separated for sale, approval, memo, online',
            'Dispatch status with auto-email updates to buyers',
            'Generate invoices with batch/design info',
            'Handle returns, exchanges, and credit notes',
        ],
    },
    {
        title: 'Jadau Jewellery Manufacturing',
        points: [
            'Tailored for handmade luxury processes like ghadi, minakari, setting',
            'Preserves traditional craftsmanship with modern visibility',
            'Real-time data on polki, kundan, enamel, foil',
            'Worker-level input, timing, and output logs',
            'Track foil loss, filing waste, and abnormal melt recovery',
            'Generate dust recovery and wastage alerts',
            'Separate QC for enamel, stone setting, polishing',
            'Final delivery includes reports and images',
            'Auto-generate worker payment slips',
            'Track time/loss/effort per artisan for accuracy',
        ],
    },
];

const page = () => {
    return (
        <div>
            <HeroBanner career="Jewellery MFG &gt; All Industries" heading="All Industries" subheading="" buttonData="" src='/manufacturer-all-industries.jpg' />
            <div className="erp-mfg-summary-container">
                <h1 className="erp-title">OptigoApps Jewellery Manufacturing ERP</h1>
                <p className="erp-subtitle">Complete summary solutions for managing all types of jewellery production workflows.</p>

                <div className='erp_section_main'>
                    {sections.map((section, idx) => (
                        <div key={idx} className="erp-section">
                            <h2 className="section-title">{section.title}</h2>
                            <ul className="section-points">
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
