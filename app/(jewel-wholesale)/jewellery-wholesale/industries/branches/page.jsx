import React from "react";
import "./page.scss";
import Industries from "@/components/Industries/Industries";
import { generatePageMetadata } from "@/utils/HeadMeta";
import { pages } from "@/utils/pages";

export const metadata = generatePageMetadata(pages['/jewellery-wholesale/industries/branches']);

const page = () => {

    const mainTitle = "Optigo ERP – Powerful Branch Management Module";
    const mainDescription = `Expand your jewellery business effortlessly with Optigo ERP’s advanced Branch Module – designed for wholesalers, retailers, and manufacturers. Now, whether you open a new branch in your city or across the globe, Optigo keeps everything centralized, synchronized, and error-free.`;
    const mainButtonContent = "Explore more";

    const section = ["section5", "section2", "section6"];

    const section5Title = "Centralized Retail Management for Multi-Branch Jewelry Stores";
    const section5Tag = "Branches";

    const section5Description = "Simplify your branch operations with centralized product tagging, real-time stock visibility, and effortless inter-branch ordering."
    const section5Data = [
        {
            title: "Centralized Control, Decentralized Operations",
            content: "No more manual tagging, stock entry, or complicated branch operations. The Head Office (HO) manages product tagging and dispatches directly to branches. Branches simply scan and inward the product – no manual entries, no errors."
        },
        {
            title: "Real-Time Visibility Across All Branches",
            content: [
                "- Live stock tracking for every branch.",
                "- View sales performance, stock levels, and product movement from HO dashboard.",
                "- Easy product search with barcode scanning – check availability in other branches instantly.",
                "- Provide the best customer experience by sourcing products from other branches if the required design or size isn’t available locally."
            ]
        },
        {
            title: "Seamless Inter-Branch Ordering",
            content: "Branches can raise order requests to HO in just one click. HO can approve and dispatch the request with no paperwork, no confusion. All data is updated automatically in real-time, keeping records clean and operations smooth."
        },
    ]

    const section2Title = "Key Features:";

    const section2Data = [
        {
            content: "Global multi-branch support",
        },
        {
            content: "Centralized product tagging and distribution"
        },
        {
            content: "Barcode-based stock inward at branch"
        },
        {
            content: "Zero manual entries = Zero human errors"
        },
        {
            content: "Inter-branch product request and transfer system"
        },
        {
            content: "Instant product availability lookup"
        },
        {
            content: "Real-time sales & stock visibility for HO"
        },
    ]

    const section6Title = `Scale faster, manage smarter, and serve better – only with the Optigo ERP Branch Module. `;
    const section6Description = `Want to know more ? Contact us today to schedule a live demo.`


    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/branch.jpg"} mainButtonContent={mainButtonContent} section={section} section5Title={section5Title} section5Tag={section5Tag} section5Description={section5Description} section5Data={section5Data} section2Title={section2Title} section2Data={section2Data} section6Title={section6Title} section6Description={section6Description} />
        </>
    );
};

export default page;
