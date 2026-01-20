import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/solutions/automate-entry-process']);


const page = () => {

    const mainTitle = "Effortless Data Entry & Automation – Powered by Optigo";
    const mainDescription = `At <strong>Optigo</strong>, we redefine how your factory runs — making every data entry easy, smooth, and hassle-free. With our cutting-edge technology, you don’t need to rely on manual typing and paper logs. Instead, we automate your operations through smart barcode and QR code systems.`;
    const mainButtonContent = "Explore more";

    const section = ["section7"];

    const section7Title = "Key features and Functionalities:"

    const section7Data = [
        {
            id: 1,
            title: "Barcode & QR Code Integrated Operations",
            icon: "📲",
            points: [
                "From employee ID cards to job cards and material tracking — everything is labelled with a barcode or QR code.",
                "Assign materials? Scan it.",
                "Place them on a weighing scale? Optigo automatically fetches the weight and updates the system.",
                "Material issued to staff? Scan, weigh, and done! No manual entries, no errors."
            ]
        },
        {
            id: 2,
            title: "Smart Diamond Bagging Process",
            icon: "💎",
            points: [
                "Traditionally, diamond bagging requires two people — one for bagging and one for entry — leading to errors and added labor costs.",
                "With Optigo, this entire process becomes automated:",
                "Scan the diamond bag",
                "Place it on the scale",
                "System records weight and completes the entry instantly",
                "Save time, cost, and avoid entry mistakes with a smarter workflow."
            ]
        },
        {
            id: 3,
            title: "Production Process Made Intelligent",
            icon: "🏭",
            points: [
                "Each step of your production is seamlessly tracked using scanning-based issue and receive entries.",
                "Issuing jobs to karigars",
                "Receiving completed work",
                "Verifying stock in the evening",
                "Finding floor-running jobs"
            ]
        }
    ];


    const section3Data = [
        {
            content: "No more manual mistakes"
        },
        {
            content: "Zero paperwork"
        },
        {
            content: "Faster production cycles"
        },
        {
            content: "Real-time traceability"
        },
        {
            content: "Cost-effective and secure"
        },
    ]


    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/automate-entry-process.jpg'} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} />

            <section className="ecom_auto_ind_mission_3">
                <div className="text">
                    <h2>Why choose Automation?</h2>
                    <p>Every movement is traceable in real time using barcode scanning. Your entire factory can now run on auto mode, reducing human effort and maximizing accuracy.</p>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                    <p>Experience the power of automation, intelligence, and speed — only with Optigo.</p>
                </div>
            </section>
        </>
    )
}

export default page
