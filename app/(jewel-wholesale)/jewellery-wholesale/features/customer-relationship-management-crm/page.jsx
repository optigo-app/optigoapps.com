import React from "react";
import "./page.scss";
import Industries from "@/components/Industries/Industries";
import { generatePageMetadata } from "@/utils/HeadMeta";
import { pages } from "@/utils/pages";

export const metadata = generatePageMetadata(pages['/jewellery-wholesale/features/customer-relationship-management-crm']);

const page = () => {

    const mainTitle = "Customer Relationship Management";
    const mainDescription = `<strong>Strengthen Relationships. Increase Loyalty. Drive Repeat Sales.</strong>
    <br />
    <strong>Optigo’s</strong> CRM module is built to help jewelry businesses — both wholesale and retail — deliver personalized experiences, manage customer data efficiently, and stay connected with every client. Whether you're handling B2B buyers, high-volume retail customers, or online shoppers, Optigo gives you all the tools to build stronger, lasting relationships.`;

    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `For Wholesale Businesses`;

    const section2Data = [
        {
            content: "In wholesale, relationships are long-term and high-value."
        },
        {
            content: "OptigoCRM helps you track every interaction, order, follow-up, and pending payment in one centralized system"
        },
        {
            content: "ensuring your top clients are always attended to."
        }
    ]

    const section7Title = "Key Features of Optigo’s CRM in Wholesale";

    const section7Data = [
        {
            id: 1,
            title: "Customer Master Profiles",
            icon: "👤",
            points: [
                "Store complete details including GST, credit terms, pricing category, purchase history, and contact info.",
            ]
        },
        {
            id: 2,
            title: "KYC & Document Management",
            icon: "📁",
            points: [
                "Securely manage all statutory data (PAN, GST, ID proofs).",
            ]
        },
        {
            id: 3,
            title: "Communication History",
            icon: "💬",
            points: [
                "Full log of follow-ups, meetings, and calls.",
            ]
        },
        {
            id: 4,
            title: "Customer-wise Sales Reports",
            icon: "📊",
            points: [
                "Visual insights into buyer performance, preferences, and growth.",
            ]
        },
        {
            id: 5,
            title: "Reorder Reminders",
            icon: "⏰",
            points: [
                "Automated alerts based on past order frequency or seasonality.",
            ]
        },
        {
            id: 6,
            title: "Tag-Based Segmentation",
            icon: "🏷️",
            points: [
                "Group clients by region, product interest, buying behavior for targeted marketing.",
            ]
        }
    ];

    const section3Data = [
        {
            content: "Advanced Tools:"
        },
        {
            content: "Custom dashboards with CRM KPIs (New leads, Repeat %)"
        },
        {
            content: "Customer funnel analysis from first inquiry to order"
        },
        {
            content: "Sales team performance by customer type"
        },
        {
            content: "Centralized notes and attachments"
        },
        {
            content: `Support & service ticket tracking`
        },
    ]

    const section4Data = [
        {
            content: "Higher customer retention and loyalty"
        },
        {
            content: "Improved conversion rates from inquiries"
        },
        {
            content: "Personalized selling experience for every customer"
        },
        {
            content: "Faster support and query resolution"
        },
        {
            content: "Better campaign performance with segmentation"
        },
        {
            content: "Optigo’s CRM isn't just about managing contacts — it’s about deepening every customer relationship."
        },
    ]

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/wholesale-customer-relationship-management.jpg"} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section2Title={section2Title} section2Data={section2Data} />

            <section className="ecom_crm-whole_ind_mission_3">
                <div className="text">
                    <h2>Unified Insights for All Business Models</h2>
                    <p>Whether you operate retail, wholesale, online, or all three — OptigoCRM gives you real-time, consolidated insights across touchpoints.</p>
                    <ul className="bullet-list">
                        {section3Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
                <div className="text">
                    <h2>Results You Can Expect</h2>
                    <ul className="bullet-list">
                        {section4Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default page;
