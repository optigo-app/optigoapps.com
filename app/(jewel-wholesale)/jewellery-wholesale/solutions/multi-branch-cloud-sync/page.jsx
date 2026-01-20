import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-wholesale/solutions/multi-branch-cloud-sync']);

const page = () => {

    const mainTitle = "Optigo ERP for Multi-Branch & Cloud Sync";
    const mainDescription = `<strong>Optigo</strong> ERP offers a powerful Branch Module specifically designed for multi-branch jewellery wholesalers. Now, as a wholesaler, you can expand your business to any city or country, and Optigo will centralize all operations seamlessly between your Head Office (HO) and branches. Effortless cloud sync ensures all your locations are always up-to-date, with no manual merging or delays.`;
    const mainButtonContent = "Explore more";

    const section = ["section7", "section6"];

    const section7Title = "Key Features & Benefits of the Branch Module:"

    const section7Data = [
        {
            id: 1,
            title: "Global Branch Expansion",
            icon: "🌍",
            points: [
                "Easily open new branches anywhere in the world.",
                "Optigo’s centralized system ensures real-time data sharing across all branches and Head Office."
            ]
        },
        {
            id: 2,
            title: "Centralized Tagging & Product Dispatch",
            icon: "🏷️",
            points: [
                "No need for branches to tag products or enter purchase details manually.",
                "Head Office will tag each product and dispatch them to respective branches.",
                "Branches simply scan the barcode to inward stock — no manual entries, no errors."
            ]
        },
        {
            id: 3,
            title: "Error-Free Stock Inward at Branches",
            icon: "✅",
            points: [
                "As soon as the branch scans the barcode, the product is automatically inwarded into branch stock.",
                "This eliminates manual data entry and reduces the risk of mistakes."
            ]
        },
        {
            id: 4,
            title: "Live Stock & Sales Visibility",
            icon: "📊",
            points: [
                "HO can view real-time sales and stock reports of all branches.",
                "Complete transparency and monitoring of branch performance from a central dashboard."
            ]
        },
        {
            id: 5,
            title: "Smart Product Search & Transfer",
            icon: "🔍",
            points: [
                "Branches can scan a barcode and instantly check stock availability across other branches.",
                "If a customer needs a different size or variant, they can place a transfer request to HO directly."
            ]
        },
        {
            id: 6,
            title: "One-Click Order Transfers",
            icon: "🚚",
            points: [
                "When a branch requests a product from HO, the Head Office can approve and process the order with a single click.",
                "This automated flow avoids duplicate entries and ensures faster fulfilment."
            ]
        },
        {
            id: 7,
            title: "Improved Efficiency & Control",
            icon: "⚙️",
            points: [
                "Central control with branch-level execution ensures business consistency.",
                "Reduces overhead and allows faster decisions with fewer resources."
            ]
        },
        {
            id: 8,
            title: "Seamless Cloud Sync",
            icon: "☁️",
            points: [
                "Optigo’s cloud sync ensures every branch and Head Office always access the most current data.",
                "Eliminates delays or manual synchronization—so decisions and inventory management remain fast, reliable, and unified."
            ]
        },
    ];


    const section6Title = "Scale Smarter with Optigo’s Multi-Branch & Cloud Sync ERP";
    const section6Description = `With <strong style="color: #FFDE21">Optigo’s</strong> Multi-Branch Module, jewellery wholesalers can expand faster, operate smoother, and serve customers better — all with a centralized, smart, and automated ERP system built for growth.`




    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/multi-branch-cloud-sync.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section6Title={section6Title} section6Description={section6Description} />
        </>
    )
}

export default page
