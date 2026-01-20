import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-retail/industries/multi-location-chains']);

const page = () => {

    const mainTitle = "Multi-Branch Retail Management with Optigo ERP";
    const mainDescription = `<strong>Expand Anywhere. Stay Connected. Stay in Control.</strong> 
    </br>
    Are you a wholesaler looking to grow your retail presence globally? With <strong>Optigo</strong> ERP’s Multi-Branch Module, you can seamlessly manage multiple branches from one central system—no matter where they are in the world.`;
    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Key Features for Multi-Branch Retail Management:"

    const section7Data = [
        {
            id: 1,
            title: "Centralized Control – Zero Hassle",
            icon: "🔗",
            points: [
                "All your branches are fully integrated with your Head Office (HO) through Optigo ERP.",
                "HO tags and dispatches products to branches",
                "Branches simply scan and receive — no manual inward entries",
                "Eliminates manual errors and duplicate work"
            ]
        },
        {
            id: 2,
            title: "Real-Time Stock & Sales Visibility",
            icon: "📊",
            points: [
                "HO monitors stock and sales across all branches live",
                "Search products by tag and check availability instantly",
                "Easily locate sizes/designs available at other branches"
            ]
        },
        {
            id: 3,
            title: "Simplified Order Management",
            icon: "🛒",
            points: [
                "Branches place transfer requests to HO in one click",
                "HO instantly approves requests — no paperwork",
                "Faster order execution with zero errors"
            ]
        }
    ];

    const section3Data = [
        {
            content: "Global Scalability – Open branches anywhere in the world and stay connected."
        },
        {
            content: "Centralized Inventory Control – Complete visibility over stock and movement."
        },
        {
            content: "Fast & Error-Free Operations – Reduce manual work and eliminate mistakes"
        },
        {
            content: "Enhanced Customer Experience – Serve your customers better with real-time product availability checks."
        },
    ]

    const section4Data = [
        {
            content: "Grow smarter, faster, and error-free with Optigo ERP’s Multi-Branch Module."
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/multi-location-chain-stores.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />

            <section className="ind_mission_1">
                <div className="text">
                    <h2>Why Choose Optigo ERP for Multi-Branch Retail?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>GET STARTED</h2>
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
