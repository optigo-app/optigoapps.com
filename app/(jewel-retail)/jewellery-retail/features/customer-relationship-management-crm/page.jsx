import React from "react";
import "./page.scss";
import Industries from "@/components/Industries/Industries";
import { generatePageMetadata } from "@/utils/HeadMeta";
import { pages } from "@/utils/pages";

export const metadata = generatePageMetadata(pages['/jewellery-retail/features/customer-relationship-management-crm']);

const page = () => {

    const mainTitle = "Customer Relationship Management";
    const mainDescription = `<strong>Strengthen Relationships. Increase Loyalty. Drive Repeat Sales.</strong>
    <br />
    <strong>Optigo’s</strong> CRM module is built to help jewelry businesses — both wholesale and retail — deliver personalized experiences, manage customer data efficiently, and stay connected with every client. Whether you're handling B2B buyers, high-volume retail customers, or online shoppers, Optigo gives you all the tools to build stronger, lasting relationships.`;

    const mainButtonContent = "Explore more";

    const section = ["section2", "section7"];

    const section2Title = `For Retail Businesses`;

    const section2Data = [
        {
            content: "Retail jewelry businesses need fast access to customer data, shopping preferences, and post-sale engagement tools."
        },
        {
            content: "Optigo helps your front-end and marketing teams engage every walk-in or repeat customer with precision."
        }
    ]

    const section7Title = "Key Features of Optigo’s CRM in Retail";

    const section7Data = [
        {
            id: 1,
            title: "Walk-In to Loyalty",
            icon: "👤",
            points: [
                "Convert every walk-in into a database customer with mobile, email, and interest capture.",
            ]
        },
        {
            id: 2,
            title: "Event Alerts & Reminders",
            icon: "📁",
            points: [
                "Send automated birthday, anniversary, and festival offers.",
            ]
        },
        {
            id: 3,
            title: "Customer Feedback Collection",
            icon: "💬",
            points: [
                "Record satisfaction, complaints, and suggestions right from POS.",
            ]
        },
        {
            id: 4,
            title: "Purchase History",
            icon: "📊",
            points: [
                "Know what they bought before — and recommend intelligently during repeat visits.",
            ]
        },
        {
            id: 5,
            title: "Loyalty Points & Gift Schemes",
            icon: "⏰",
            points: [
                "Run retention programs seamlessly.",
            ]
        },
        {
            id: 6,
            title: "Marketing Integration",
            icon: "🏷️",
            points: [
                "Send WhatsApp campaigns, SMS alerts, and personalized emails directly from CRM.",
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
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/retail-customer-relationship-management.jpg"} mainButtonContent={mainButtonContent} section={section} section7Title={section7Title} section7Data={section7Data} section2Title={section2Title} section2Data={section2Data} />

            <section className="ecom_crm-retail_ind_mission_3">
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
