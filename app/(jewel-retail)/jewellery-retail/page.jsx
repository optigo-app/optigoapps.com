import Industries from '@/components/Industries/Industries'
import React from 'react'
import './page.scss'
import { generatePageMetadata } from "@/utils/HeadMeta";
import { pages } from "@/utils/pages";

export const metadata = generatePageMetadata(pages['/jewellery-retail']);

const page = () => {
    const mainTitle = "Jewellery Retail";
    const mainDescription = `<strong>Retail jewellery software</strong> provides real-time stock visibility, accurate inventory tracking, and variation management—reducing losses from overstocking or stock-outs. Integrated POS, instant billing, and secure payments enable quick, error-free transactions and enhance customer experience. The result: smoother operations, better service, and increased conversions.`;

    const mainButtonContent = "Explore more"

    const section = ["section7i1"];

    const section7Titlei1 = "Key features of Jewellery Retail : ";

    // const section7Data = [
    //     {
    //         id: 1,
    //         title: "Customer Relationship Management (CRM)",
    //         icon: <UserRound color="#2c3e50" size={32} />,
    //         points: [
    //             "Track every customer, lead, and inquiry with detailed purchase history and interaction records.",
    //             "Record walk-ins, enquire, and preferences to help your team offer a more personalized service.",
    //             "Maintain data for both retail and B2B clients, including past orders, preferred designs, and buying patterns.",
    //             "Useful for building customer loyalty and understanding what sells.",
    //             "Helps your sales team stay informed and better prepared during client interactions.",
    //             "A simple, centralized system to manage all customer information.",
    //         ]
    //     },
    //     {
    //         id: 2,
    //         title: "Vendor Relationship Management (VRM)",
    //         icon: <Truck color="#e67e22" size={32} />,
    //         points: [
    //             "Streamline and monitor job work issued to vendors and karigars.",
    //             "Track raw material issues, labour charges, expected delivery dates, and actual returns.",
    //             "Record wastage or losses and calculate accurate settlements.",
    //             "Maintain vendor-wise performance history, work quality, and efficiency.",
    //             "Helps identify reliable vendors and eliminate loss due to mismanagement.",
    //             "Supports gold, diamond, and stone job tracking.",
    //             "Crucial for manufacturers and wholesalers working with multiple vendors.",
    //         ]
    //     },
    //     {
    //         id: 3,
    //         title: "Inventory Management",
    //         icon: <Boxes color="#16a085" size={32} />,
    //         points: [
    //             "Get complete control over your jewellery inventory across locations and categories.",
    //             "Manage raw materials (gold, diamonds, gemstones), semi-finished, and finished products with item-wise tracking.",
    //             "Update stock automatically based on purchases, sales, and production.",
    //             "Use bar-codes or tags to identify items and reduce manual errors.",
    //             "View real-time stock availability branch-wise or by item type.",
    //             "Track dead stock, fast-moving designs, and balance stock after every transaction.",
    //             "Helps reduce overstocking, shortages, and mismatches.",
    //         ]
    //     },
    //     {
    //         id: 4,
    //         title: "Accounts",
    //         icon: <FileBarChart2 color="#34495e" size={32} />,
    //         points: [
    //             "Manage your entire jewellery business’s financial with smart, built-in accounting tools.",
    //             "Automatically generate ledgers for customers, vendors, agents, and employees.",
    //             "Track payments received and pending, apply GST, manage discounts, and handle credit sales — all from a single dashboard.",
    //             "Integrate seamlessly with your sales, purchase, and inventory modules to reflect accurate balances.",
    //             "Export reports to Tally or Excel for your accountant.",
    //             "Reduces manual work and ensures error-free bookkeeping.",
    //             "Fully GUST-compliant and ready for audits.",
    //         ]
    //     },
    //     {
    //         id: 5,
    //         title: "Dashboard",
    //         icon: <LayoutDashboard color="#4E2A84" size={32} />,
    //         points: [
    //             "Get a real-time overview of your jewellery business on a single screen.",
    //             "The dashboard displays key metrics like stock value, orders in progress, sales, purchases, customer balances, and vendor activity.",
    //             "Quickly access pending deliveries, due payments, or low-stock alerts.",
    //             "Helps business owners and managers make faster, data-driven decisions.",
    //             "Designed to keep your team focused on daily priorities.",
    //             "Customization based on roles — from admin to sales or production.",
    //         ]
    //     },
    // ];

    const section7Datai1 = [
        {
            id: 1,
            title: "Jewellery Billing & Estimation",
            icon: "🧾",
            points: [
                "Create fast and accurate bills using barcode/RFID-based scanning.",
                "Automate price calculations with real-time metal rate updates.",
                "Generate estimates for walk-in customers and convert them to orders in a single click.",
            ]
        },
        {
            id: 2,
            title: "Design / SKU Management",
            icon: "💎",
            points: [
                "Manage your entire design catalog with SKU-wise classification including metal type, purity, stone details, collection, category, brand, and more.",
                "Easily track inventory availability and reorder needs.",
            ]
        },
        {
            id: 3,
            title: "Customer CRM & Loyalty",
            icon: "🤝",
            points: [
                "Track customer history, preferences, birthdays, and anniversaries.",
                "Launch loyalty programs, reward points, and special offers.",
                "Send personalized promotions via WhatsApp, SMS, or email directly from the system.",
            ]
        },
        {
            id: 4,
            title: "Multi-Branch & Franchise Management",
            icon: "🏬",
            points: [
                "Manage pricing, inventory, billing, and reports across multiple branches or franchisees from a central dashboard.",
                "Standardize operations and get real-time visibility into each outlet’s performance.",
            ]
        },
        {
            id: 5,
            title: "Order Management",
            icon: "📝",
            points: [
                "Capture customized or repeat orders from customers with complete specifications.",
                "Set order priority and promise dates.",
                "Share order details on WhatsApp/email and get customer confirmation through e-signature to prevent disputes.",
            ]
        },
        {
            id: 6,
            title: "Inventory Management",
            icon: "📦",
            points: [
                "Track stock in real-time with barcode, QR, and RFID-coded tagging from raw materials to finished goods.",
                "Segment raw materials by shape, size, color, quality.",
                "Classify finished products by 8 levels including product type, collection, brand, purity, etc.",
            ]
        },
        {
            id: 7,
            title: "Subcontractor / Karigar Management",
            icon: "🛠️",
            points: [
                "Manage job orders, issue raw materials, track status, returns, and balance sheets with karigars and vendors.",
                "Monitor gold wastage, output, and time for every production stage.",
            ]
        },
        {
            id: 8,
            title: "Buy Back / Old Gold Exchange",
            icon: "🔁",
            points: [
                "Handle old gold purchases and exchanges accurately with automatic valuation and proper GST billing.",
                "Maintain audit trails and link transactions to customer accounts for complete transparency.",
            ]
        },
        {
            id: 9,
            title: "Digital Catalogue",
            icon: "🖼️",
            points: [
                "Showcase your jewellery designs digitally to customers in-store or remotely.",
                "Share design links instantly and track customer interest.",
            ]
        },
        {
            id: 10,
            title: "Discount & Scheme Management",
            icon: "🏷️",
            points: [
                "Set up promotional offers, flat or slab-wise discounts, and sales schemes.",
                "Auto-apply discounts at billing and monitor their effectiveness.",
            ]
        },
        {
            id: 11,
            title: "Pricing Rules",
            icon: "⚖️",
            points: [
                "Define pricing logic based on metal purity, diamond/carat rate, making charges, and customer category.",
                "Ensure consistent and profitable pricing across branches.",
            ]
        },
        {
            id: 12,
            title: "Repair Management",
            icon: "🔧",
            points: [
                "Manage jewellery repairs from customer drop-off to final delivery.",
                " Assign tasks to karigars, track repair progress, and notify customers.",
            ]
        },
        {
            id: 13,
            title: "Financial Control & Accounting",
            icon: "💰",
            points: [
                "Integrated accounting with real-time updates from every transaction.",
                "Manage ledger entries, GST, balance sheets, and reconciliation with ease.",
            ]
        },
        {
            id: 14,
            title: "Barcode / RFID Management",
            icon: "📡",
            points: [
                "Use barcode and RFID tags for every product and raw material.",
                "Enable fast physical audits, tag scanning, and real-time stock updates.",
            ]
        },
        {
            id: 15,
            title: "Reports & Retail Analytics",
            icon: "📊",
            points: [
                "Get powerful reports and dashboards on sales, footfall conversion, top-selling styles, schemes, customer trends, and more.",
                "Make informed decisions using actionable data."
            ]
        },
        {
            id: 16,
            title: "E-Invoicing & GST Compliance",
            icon: "📄",
            points: [
                "Generate GST-compliant e-invoices and e-way bills directly from the system.",
                "Ensure seamless regulatory compliance and audit readiness.",
            ]
        },
        {
            id: 17,
            title: "Payroll & HR",
            icon: "👨‍💼",
            points: [
                "Handle staff salaries, incentives, attendance, and shifts.",
                "Configure payroll components and automate monthly payroll processing."
            ]
        },
        {
            id: 18,
            title: "Kitty / Chit Fund Schemes",
            icon: "🏦",
            points: [
                "Manage gold savings schemes like kitty or chit-fund.",
                "Track customer contributions, maturity dates, and redemption status.",
            ]
        },
        {
            id: 19,
            title: "Audit Trail & Data Security",
            icon: "🔐",
            points: [
                "Maintain a complete log of every activity in the system.",
                "Track user actions and ensure data protection with advanced role-based access controls."
            ]
        }
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/jewel-retail.jpg"} mainButtonContent={mainButtonContent} section={section} section7Titlei1={section7Titlei1} section7Datai1={section7Datai1}
            />

            {/* <section
                className="retail-benefits-bullets"
                style={{
                    backgroundImage: "url(/bg.webp)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="retail-benefits-bullets__container">
                    <div className="retail-benefits-bullets__header">
                        <h2 className="retail-benefits-bullets__title">
                            {section7Title}
                        </h2>
                    </div>

                    <div className="retail-benefits-bullets__grid">
                        {section7Data.map((item) => (
                            <div key={item.id} className="retail-bullet-card">
                                <div className="retail-bullet-card__icon">{item.icon}</div>
                                <div className="retail-bullet-card__content">
                                    <h3 className="retail-bullet-card__title">{item.title}</h3>
                                    <ul className="retail-bullet-card__list">
                                        {item.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

        </>
    )
}

export default page
