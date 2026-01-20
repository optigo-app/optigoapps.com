import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/solutions/ai-based-stock-search']);


const page = () => {

    const mainTitle = "AI-Based Order Feature – Optigo ERP";
    const mainDescription = `<strong>Optigo</strong> introduces a cutting-edge AI-Based Order feature designed specifically for jewelry manufacturers. This intelligent system enables you to generate production plans using both your available stock and the customer's diamond inventory—even down to the last sieve size.`;
    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Key Benefits"

    const section7Data = [
        {
            id: 1,
            title: "Utilize Dead Stock Efficiently",
            icon: "💎",
            points: [
                "Traditionally, one-third of diamond inventory becomes dead stock.",
                "With Optigo, you can utilize every available diamond — even the smallest sieve sizes.",
                "Convert idle inventory into confirmed orders with intelligent design suggestions."
            ]
        },
        {
            id: 2,
            title: "Customer-Specific Design Suggestions",
            icon: "🧠",
            points: [
                "Customers often ask, “What can you make using my stock?”",
                "Instead of spending hours manually matching, Optigo’s AI engine generates tailored design suggestions in seconds.",
                "Delivers accurate and relevant recommendations based on the customer’s current inventory."
            ]
        },
        {
            id: 3,
            title: "Smart Matching with Size Variations",
            icon: "📐",
            points: [
                "Optigo intelligently adjusts for size variations when an exact match isn't available.",
                "Offers production-suitable alternatives instantly, increasing flexibility and reducing rejections.",
                "Helps avoid inventory stagnation by using near-match diamonds in new ways."
            ]
        },
        {
            id: 4,
            title: "Faster Order Conversion",
            icon: "⚡",
            points: [
                "Eliminates delays caused by manual matching and sorting.",
                "AI-driven speed means quicker responses to customer queries.",
                "Result: faster decisions and faster order closures."
            ]
        }
    ];

    const section3Data = [
        {
            content: "You can either spend 5 hours manually checking inventory with your team or let Optigo do it in 5 seconds."
        },
        {
            content: "It’s time to choose: Optigo or Hard Work?"
        },
        {
            content: "Empower your sales team with speed, accuracy, and intelligence. Choose Optigo – Jewelry’s Smart ERP."
        },
    ]


    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/ai-based-stock-search.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />

            <section className="ecom_ai_ind_mission_3">
                <div className="text">
                    <h2>Why Optigo?</h2>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default page
