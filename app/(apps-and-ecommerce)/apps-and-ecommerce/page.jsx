import Industries from '@/components/Industries/Industries'
import React from 'react'
import './page.scss'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce']);

const page = () => {
    const mainTitle = "Apps & E-commerce – Powered by OptigoApps";
    const mainDescription = `OptigoApps delivers a complete suite of <strong>E-commerce Platforms, Mobile Applications, and ERP-to-ERP</strong> Connectivity – all fully integrated with your ERP. From websites to mobile apps for customers, dealers, and sales teams, every solution helps your jewellery business run smarter, faster, and fully connected.`;

    const mainButtonContent = "Explore more"

    const section = ["section7i", "section7i1"];

    const section7Titlei = "Key Features of E-commerce Platforms";

    const section7Datai = [
        {
            id: 1,
            title: "B2B Jewellery Website – Real-Time Connected",
            icon: "🏢",
            points: [
                "<strong style='font-size: 1.05rem;'>Key Features : </strong>",
                "Dealer Login & Personalization",
                "Real-Time Inventory & Live Stock Catalogs",
                "Secure & Instant Order Placement",
                "ERP Integration",
                "Multi-Tier Dealer Management",
                "Customizable Product Visibility",
                "Bulk & Reorder Management",
                "Mobile-Ready Access",
                "Analytic & Insights",
                "Secure Data Management",
                "<strong style='font-size: 1.05rem;'>Benefits for Your Business : </strong>",
                "Accelerates order processing and reduces manual follow-ups.",
                "Enhances dealer satisfaction with accurate, real-time information.",
                "Reduces errors in pricing, stock, and invoicing.",
                "Provides scalable tools for regional or global distribution networks.",
                "Improves visibility into performance metrics and sales analytic.",
            ]
        },
        {
            id: 2,
            title: "B2C Jewellery Website – Real-Time Connected",
            icon: "🛍️",
            points: [
                "<strong style='font-size: 1.05rem;'>Key Features : </strong>",
                "Live Stock Updates",
                "Dynamic Pricing & Personalization",
                "Cart-to-Delivery Workflow",
                "Mobile-Friendly & Responsive",
                "360° Product Views & HD Images",
                "One-Tap Checkout & Payment Options",
                "Customer Support Integration",
                "Push Notifications",
                "SEO Optimized & Scalable",
                "<strong style='font-size: 1.05rem;'>Benefits for Your Business : </strong>",
                "Enhances customer satisfaction with real-time information and personalization.",
                "Increases online sales with smooth, user-friendly shopping workflows.",
                "Reduces errors with live ERP synchronization.",
                "Scalable for growing traffic, multiple stores, and mobile users.",
                "Builds trust and loyalty through transparency and instant support.",
            ]
        },
        {
            id: 3,
            title: "Omnichannel E-commerce",
            icon: "🌐",
            points: [
                "<strong style='font-size: 1.05rem;'>Key Features : </strong>",
                "Multi-Channel Integration",
                "Consistent Pricing & Product Data",
                "Centralized Customer & Order Management",
                "Real-Time ERP Synchronization",
                "Customer Experience Personalization",
                "Unified Reporting & Analytics",
                "Mobile-First & Responsive",
                "Flexible & Scalable",
                "<strong style='font-size: 1.05rem;'>Benefits for Your Business : </strong>",
                "Provides a consistent, connected experience for customers and partners.",
                "Reduces operational complexity by centralizing multi-channel management.",
                "Enhances order accuracy and reduces errors through live ERP sync.",
                "Increases efficiency for sales teams and customer service.",
                "Supports scalable growth without compromising data integrity or user experience.",
            ]
        },
    ];

    const section7Titlei1 = "Key features of Applications : ";

    const section7Datai1 = [
        {
            id: 1,
            title: "SCAVU – Secure Cloud Access for Virtual Union",
            icon: "☁️",
            points: [
                "<strong style='font-size: 1.05rem;'>Key Features : </strong>",
                "Seamless ERP Connectivity",
                "Intelligent Data Mapping",
                "QR-Code Automation",
                "Real-Time Updates",
                "Secure & Scalable Architecture",
                "Automated Business Operations",
                "Faster Business Cycles",
                "<strong style='font-size: 1.05rem;'>Benefits for Your Business : </strong>",
                "Saves time by eliminating manual data entry and reconciliation.",
                "Provides accurate, real-time updates across all partner ERPs.",
                "Reduces errors and increases operational efficiency.",
                "Scales seamlessly as your business grows with multiple partners.",
                "Improves overall collaboration, transparency, and speed of business processes.",
            ]
        },
        {
            id: 2,
            title: "Express App (For Your Sales Team)",
            icon: "🚀",
            points: [
                "<strong style='font-size: 1.05rem;'>Key Features : </strong>",
                "Real-Time Stock & Pricing Access",
                "Instant Order Capture & Reporting",
                "Customer History & Outstanding Balances",
                "ERP-Integrated Workflow",
                "Mobile Productivity",
                "Enhanced Communication",
                "Secure & Role-Based Access",
                "Sales Analytics & Insights",
                "<strong style='font-size: 1.05rem;'>Benefits for Your Business : </strong>",
                "Speeds up sales cycles with instant access to live stock and pricing.",
                "Reduces errors and miscommunication between field sales and ERP.",
                "Improves customer service with better insights and faster responses.",
                "Ensures real-time visibility into orders, payments, and customer interactions.",
                "Enhances team productivity and accountability across locations.",
            ]
        },
        {
            id: 3,
            title: "Sales Rep App – Empower Your Sales Team Anywhere",
            icon: "📱",
            points: [
                "<strong style='font-size: 1.05rem;'>Key Features : </strong>",
                "Customer Management",
                "Instant Catalog Sharing",
                "Smart Order Processing",
                "Outstanding Payment Tracking",
                "Customer Insights",
                "Role-Based Security",
                "On-the-Go Productivity",
                "Real-Time ERP Integration",
                "Performance Analytics",
                "<strong style='font-size: 1.05rem;'>Benefits for Your Business : </strong>",
                "Increases sales team efficiency and productivity.",
                "Reduces errors in orders, pricing, and customer information.",
                "Improves customer satisfaction through personalized engagement.",
                "Provides real-time visibility into sales activities and outstanding payments.",
                "Enables flexible, location-independent operations for sales teams.",
            ]
        },
        {
            id: 4,
            title: "Admin App – Your Jewellery Business, Always in Control",
            icon: "🛠️",
            points: [
                "<strong style='font-size: 1.05rem;'>Key Features : </strong>",
                "Track Sales & Orders Instantly",
                "Monitor Ongoing Production (WIP)",
                "Check Raw Material Stock & Allocation",
                "Access Customer Outstanding Reports",
                "Update Metal Prices On-The-Go",
                "Download Performance Reports Anytime",
                "Secure Admin-Only Access",
                "Real-Time ERP Integration",
                "Smart Dashboard & Analytics",
            ]
        },
        {
            id: 5,
            title: "B2C Mobile App – Real-Time Connected Jewellery Shopping",
            icon: "🛒",
            points: [
                "<strong style='font-size: 1.05rem;'>Key Features : </strong>",
                "Live Inventory & Instant Customization",
                "Advanced Filtering & Smart Search",
                "Immersive Visual Experience",
                "ERP-Connected Pricing & Stock Sync",
                "Integrated Communication Channels",
                "Personalized Recommendations",
                "Secure Payments & Wallet Integration",
                "Exclusive Offers & Notifications",
                "<strong style='font-size: 1.05rem;'>Benefits for Your Business : </strong>",
                "Expand your store’s reach beyond physical locations.",
                "Reduce manual order handling and errors.",
                "Increase customer engagement and repeat purchases.",
                "Provide a premium, transparent, and personalized shopping experience",
                "Streamline your operations by connecting your mobile app directly with ERP for real-time insights.",
            ]
        },
        {
            id: 6,
            title: "B2B Mobile App – Jewellery Distribution on the Go",
            icon: "🏬",
            points: [
                "<strong style='font-size: 1.05rem;'>Key Features : </strong>",
                "Customer-Specific Pricing, Discounts & Credit Terms",
                "Controlled Product Visibility",
                "Bulk & Reorder Management",
                "Real-Time Stock & Pricing Sync",
                "Multi-Tier Dealer Management",
                "Customer Self-Service Portal",
                "Push Notifications & Instant Updates",
                "High-Quality Product Visuals",
                "Integrated Payments",
                "Analytics & Reports",
                "<strong style='font-size: 1.05rem;'>Benefits for Your Business : </strong>",
                "Reduce Calls & WhatsApp Follow-Ups",
                "Faster, Error-Free Order Processing",
                "24/7 Transparency for Dealers & Retailers",
                "Scalable, Mobile-First Solution",
                "Streamlined Operations & Cost Savings",
            ]
        },
        {
            id: 7,
            title: "Exhibition & Sales Team Tablet App – Boost Your Sales On the Go - I catalog",
            icon: "🚀",
            points: [
                "<strong style='font-size: 1.05rem;'>Key Features : </strong>",
                "Digital Product Showcase",
                "Fast, Paperless Order Booking",
                "Quick Customer Interaction",
                "Real-Time ERP Sync",
                "Customizable Product Filters",
                "Offline Mode Capability",
                "Order Tracking & Updates",
                "Professional Sales Experience",
                "Analytics & Insights",
                "<strong style='font-size: 1.05rem;'>Benefits for Your Business : </strong>",
                "Boost Sales at Exhibitions",
                "Reduce Manual Errors",
                "Enhance Customer Experience",
                "Save Time & Resources",
                "Seamless ERP Integration",
            ]
        },
        {
            id: 8,
            title: "B2B & B2C Catalog Sharing App – Dynamic Product Catalogs in Your Customers’ Hands",
            icon: "📖",
            points: [
                "<strong style='font-size: 1.05rem;'>Key Features : </strong>",
                "Secure Catalog Links",
                "Customizable Catalogs",
                "Real-Time Stock & Pricing Updates",
                "Direct Order Placement",
                "Interactive & Visual Experience",
                "Personalized Recommendations",
                "Multi-Platform Sharing",
                "Analytics & Insights",
                "Offline Access",
                "<strong style='font-size: 1.05rem;'>Benefits for Your Business : </strong>",
                "Enhance Customer Engagement",
                "Reduce Manual Efforts",
                "Faster Sales Cycle",
                "Boost Accuracy & Transparency",
                "Expand Reach",
                "Track & Optimize Performance",
            ]
        },
        {
            id: 9,
            title: "B2B & B2C Catalog Sharing App – Real-Time, Interactive Product Catalogs",
            icon: "📂",
            points: [
                "<strong style='font-size: 1.05rem;'>Key Features : </strong>",
                "Secure Catalog Links",
                "Customizable Catalogs",
                "Real-Time Stock & Price Updates",
                "Direct Order Placement",
                "Interactive Visuals",
                "Multi-Channel Sharing",
                "Personalized Recommendations",
                "Offline Access",
                "Analytics & Insights",
                "<strong style='font-size: 1.05rem;'>Benefits for Your Business : </strong>",
                "Boost Sales Efficiency",
                "Enhance Customer & Dealer Experience",
                "Faster Order Processing",
                "Maintain Accuracy & Transparency",
                "Expand Reach & Engagement",
                "Data-Driven Decisions",
            ]
        },
        {
            id: 10,
            title: "Showroom App (EVO App) – Transform Your Showroom into a Digital Experience",
            icon: "🏢",
            points: [
                "<strong style='font-size: 1.05rem;'>Key Features : </strong>",
                "Full Catalog Access",
                "Real-Time Stock & Product Details",
                "Instant Orders & Inquiries",
                "Interactive Product Visuals",
                "Modern, Engaging Showroom Experience",
                "Customer Personalization",
                "ERP Integration",
                "Multi-Device Compatibility",
                "Analytics & Insights",
                "<strong style='font-size: 1.05rem;'>Benefits for Your Business : </strong>",
                "Enhanced Customer Experience",
                "Faster & Accurate Sales Processing",
                "Engage & Impress Visitors",
                "Streamlined Operations",
                "Actionable Insights",
                "Stay Ahead of Competition",
            ]
        },
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/appandecom.jpg"} mainButtonContent={mainButtonContent} section={section} section7Titlei={section7Titlei} section7Datai={section7Datai} section7Titlei1={section7Titlei1} section7Datai1={section7Datai1} />
        </>
    )
}

export default page
