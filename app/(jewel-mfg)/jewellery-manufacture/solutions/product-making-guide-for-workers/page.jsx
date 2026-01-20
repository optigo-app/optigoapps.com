import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/solutions/product-making-guide-for-workers']);

const page = () => {

    const mainTitle = "Digital Product Making Guide for Workers – Powered by Optigo";
    const mainDescription = `<strong>Optigo</strong> introduces a revolutionary feature that simplifies product manufacturing for karigars (workers) – a visual product-making guide. This innovation bridges the communication gap between design and execution, ensuring accuracy, efficiency, and consistency in your jewellery production process.`;

    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = "Benefits of the Visual Work Guide";

    const section2Data = [
        {
            content: " Increased accuracy in manufacturing",
        },
        {
            content: "Better understanding of task requirements",
        },
        {
            content: "Reduced dependency on specific workers",
        },
        {
            content: "Consistent quality across batches",
        },
        {
            content: "Fully digital process",
        },
    ]

    const section7Title = "Key Features for Product Making Guide"

    const section7Data = [
        {
            id: 1,
            title: "Image-Based Instructions for Every Design",
            icon: "🖼️",
            points: [
                "Upload step-by-step making images in addition to the final jewellery design.",
                "Each department receives its specific set of images for precise task execution.",
                "Ensures that workers clearly understand the required steps for production.",
                "Improves consistency, reduces errors, and supports new or less experienced workers."
            ]
        },
        {
            id: 2,
            title: "TV Display with Scanner for Real-Time Guidance",
            icon: "📺",
            points: [
                "A large TV screen is installed on the production floor, connected to a scanner.",
                "When a worker scans their job card, the system instantly identifies their department.",
                "Displays the exact image of the task they need to perform.",
                "Provides real-time, visual work guidance — improving precision and reducing dependency on verbal instructions."
            ]
        }
    ];

    const section3Data = [
        {
            content: "Any worker can now perform the job with the same quality and confidence, regardless of experience."
        },
        {
            content: "Your floor operations become more efficient, and your workforce becomes digitally empowered."
        },
        {
            content: "With Optigo, your production floor is no longer manual – it's smart, guided, and future-ready."
        },
    ]


    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/product-making-guide-for-workers.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section2Title={section2Title} section2Data={section2Data} />

            <section className="ecom_product_ind_mission_3">
                <div className="text">
                    <h2>Conclusion</h2>
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
