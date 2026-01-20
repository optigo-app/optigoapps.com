import Industries from '@/components/Industries/Industries'
import React from 'react'
import './page.scss'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture']);

const page = () => {
    const mainTitle = "Jewellery MFG";
    const mainDescription = `An all-in-one solution that streamlines your entire production process — from raw material tracking and job order management to costing, quality checks, and vendor coordination. It ensures accurate inventory, precise costing, and smooth workflows. Built-in CRM and accounting modules manage orders, approvals, and finances efficiently, while real-time dashboards provide actionable insights to boost productivity and support growth.`;

    const mainButtonContent = "Explore more"

    const section = ["section7"];

    const section7Title = "Key features of Jewellery Manufacturing : ";

    // const section7Data = [
    //     {
    //         id: 1,
    //         title: "Design",
    //         icon: <Palette color="#8e44ad" size={32} />,
    //         points: [
    //             "Easily manage style-wise jewellery designs without the need for CAD/CAM integration.",
    //             "Create design masters with reference images, product details, and customer-specific canonizations like metal, purity, size, and stone quality.",
    //             "Link designs directly to orders for smooth production flow.",
    //             "Maintain records of most-used or fast-moving styles.",
    //             "Ideal for managing custom and bulk designs across teams.",
    //             "Ensures better coordination between sales, design, and production teams.",
    //         ]
    //     },
    //     {
    //         id: 2,
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
    //         id: 3,
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
    //         id: 4,
    //         title: "Production Flow",
    //         icon: <Workflow color="#2980b9" size={32} />,
    //         points: [
    //             "Track each production stage from order placement to final QC.",
    //             "Assign jobs internally or to vendors, and monitor progress across steps like casting, setting, polishing, and finishing.",
    //             "View WIP (Work-in-Progress) status in real time.",
    //             "Allocate resources efficiently and control production time-lines.",
    //             "Ensure timely delivery and coordination between departments.",
    //             "Reduces delays, duplication, and human error in manufacturing.",
    //             "Integrated with design, inventory, and delivery modules.",
    //         ]
    //     },
    //     {
    //         id: 5,
    //         title: "Loss Management",
    //         icon: <AlertTriangle color="#c0392b" size={32} />,
    //         points: [
    //             "Identify and control invisible losses in gold, diamonds, and other materials during production or vendor jobs.",
    //             "Track actual returns vs expected outputs to detect variances.",
    //             "Record loss by job, vendor, or process type to improve material control.",
    //             "Supports better costing and settlement decisions.",
    //             "Helps improve accountability among karigars and production teams.",
    //             "Essential for transparent job work operations.",
    //             "Boosts profitability by reducing leakages and wastage.",
    //         ]
    //     },
    //     {
    //         id: 6,
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
    //         id: 7,
    //         title: "Order Management",
    //         icon: <ClipboardList color="#f39c12" size={32} />,
    //         points: [
    //             "Simplify order processing from inquiry to fulfillment.",
    //             "Create and manage retail, wholesale, or custom orders with full design and item specifications.",
    //             "Update each order with its current status – under process, ready, or delivered.",
    //             "Link orders to customers, vendors, and production for smooth tracking.",
    //             "Manage partial orders, rejections, and returns easily.",
    //             "Keep order history organized by client, item, or date.",
    //             "Ensures timely order handling and transparency across teams.",
    //         ]
    //     },
    //     {
    //         id: 8,
    //         title: "Accounting",
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
    //         id: 9,
    //         title: "PPC (Purchase, Payment, Commission)",
    //         icon: <IndianRupee color="#27ae60" size={32} />,
    //         points: [
    //             "Track every rupee flowing in and out of your business — from supplier purchases to customer payments and agent commissions.",
    //             "Manage and record purchase orders, payment schedules, partial payments, and outstanding dues.",
    //             "Assign broker/agent commissions order-wise and auto-calculate based on defined percentages.",
    //             "Helps jewellery businesses stay on top of supplier costs and sales payouts.",
    //             "Brings complete visibility and control over financial transactions linked to daily operations. ",
    //             "Ideal for retail, wholesale, and manufacturing setups with dynamic purchase and sales flows.",
    //         ]
    //     },
    //     {
    //         id: 10,
    //         title: "Delivery",
    //         icon: <PackageCheck color="#9b59b6" size={32} />,
    //         points: [
    //             "Manage jewellery deliveries with accuracy and professionalism.",
    //             "Generate delivery challans with item details, customer info, and dispatch notes.",
    //             "Track dispatched, pending, and partially delivered orders.",
    //             "Record handovers for showroom pickups, courier dispatches, or agent deliveries.",
    //             "Maintain records of what was delivered, when, and to whom.",
    //             "Integrated with order and inventory modules for real-time status updates.",
    //             "Ensures better tracking, fewer disputes, and smooth delivery operations.",
    //         ]
    //     }
    // ];

    const section7Data = [
        {
            id: 1,
            title: "Product Development",
            icon: "🎨",
            points: [
                "Helps streamline the complete journey of jewellery creation—from concept to approval—so designers and manufacturers can collaborate in one place.",
                "This feature ensures faster design cycles, accurate material planning, and easy reference for future production.",
            ]
        },
        {
            id: 2,
            title: "Style Master",
            icon: "📁",
            points: [
                "Serves as a centralized design repository for all jewellery styles, which helps teams avoid duplication, maintain uniformity in catalogues, and speed up production referencing.",
                "It's essential for long-term product standardization and ease of reordering.",
            ]
        },
        {
            id: 3,
            title: "Estimate Generation",
            icon: "🧮",
            points: [
                "Quickly calculates accurate cost estimates for new designs, including metal, stone, labor, and making charges.",
                "This helps sales teams quote transparently, while customers get faster approvals due to clear pricing breakdowns.",
            ]
        },
        {
            id: 4,
            title: "Order Management",
            icon: "📋",
            points: [
                "Provides a real-time dashboard to manage all customer orders, their production status, and delivery schedules.",
                "This feature ensures nothing slips through the cracks and all departments work in sync for on-time order fulfilment.",
            ]
        },
        {
            id: 5,
            title: "Procurement & Purchase",
            icon: "🛒",
            points: [
                "Automates and manages the purchasing process, ensuring the right material is procured at the best price and time.",
                "This reduces overstocking or last-minute shortages and helps maintain smooth production flow.",
            ]
        },
        {
            id: 6,
            title: "Inventory Management",
            icon: "📦",
            points: [
                "Provides complete control over raw, in-process, and finished stock.",
                "This feature helps prevent dead stock, ensures timely replenishment, and maintains production-ready inventory levels at all times.",
            ]
        },
        {
            id: 7,
            title: "Stone Inventory Management",
            icon: "💎",
            points: [
                "Tracks every stone by category, size, and quality.",
                "This is critical in jewellery where stone cost significantly affects pricing and ensures accurate usage across designs without loss or misplacement.",
            ]
        },
        {
            id: 8,
            title: "Stock Valuation",
            icon: "💰",
            points: [
                "Automatically calculates the monetary value of current stock, based on real-time inventory and market rates.",
                "This ensures your financial books reflect true inventory value, which is essential for P&L, audits, and decision-making.",
            ]
        },
        {
            id: 9,
            title: "Sequential Manufacturing Process",
            icon: "🏭",
            points: [
                "Breaks down production into defined steps like casting, filing, setting, and polishing.",
                "This helps allocate jobs more efficiently, track WIP items, and avoid delays or rework in manufacturing.",
            ]
        },
        {
            id: 10,
            title: "Subcontracting Job Work",
            icon: "🔁",
            points: [
                "Helps manage outsourced tasks efficiently by tracking issued stock, expected returns, and karigar payments.",
                "This is crucial when dealing with external labor to maintain quality and quantity consistency.",
            ]
        },
        {
            id: 11,
            title: "Post-Manufacturing Costing",
            icon: "📈",
            points: [
                "Auto-calculates the final cost of a jewellery piece after all manufacturing stages.",
                "This is useful for pricing, profitability analysis, and understanding actual margins after accounting for losses and overheads.",
            ]
        },
        {
            id: 12,
            title: "Barcode Management & Invoicing",
            icon: "🏷️",
            points: [
                "Generates unique barcodes for products which can be used for tracking, stock auditing, and billing.",
                "This speeds up sales processing, ensures inventory accuracy, and eliminates manual entry errors.",
            ]
        },
        {
            id: 13,
            title: "MRP & Rate Management",
            icon: "📉",
            points: [
                "Automates pricing calculations based on real-time metal and stone rates.",
                "This is useful for offering consistent pricing across sales channels and maintaining profit margins even during rate fluctuations.",
            ]
        },
        {
            id: 14,
            title: "Stock Reservation",
            icon: "📌",
            points: [
                "Allows businesses to reserve specific stock against orders or customers.",
                "Avoids dispatch errors",
                "Prioritizes high-value clients"
            ]
        },
        {
            id: 15,
            title: "Sales & Distribution",
            icon: "🚚",
            points: [
                "Tracks every stage of the sales cycle—from enquiry to dispatch—while managing credit limits, delivery logistics, and dealer pricing.",
                "This helps businesses grow across geographies with organized distribution.",
            ]
        },
        {
            id: 16,
            title: "Loss Management",
            icon: "📉",
            points: [
                "Monitors material loss at each manufacturing step (e.g., melting, polishing).",
                "This is critical to control wastage, improve recovery, and maximize profit by refining production processes.",
            ]
        },
        {
            id: 17,
            title: "Dust Collection & Refining",
            icon: "🌪️",
            points: [
                "Logs precious metal dust collected during production and calculates its recovery after refining.",
                "This hidden value significantly adds to profitability and should be tracked diligently.",
            ]
        },
        {
            id: 18,
            title: "Repair Management",
            icon: "🛠️",
            points: [
                "Helps track customer repair items—from intake to delivery—with updates on repair cost and time.",
                "This builds customer trust and adds value to post-sale service.",
            ]
        },
        {
            id: 19,
            title: "Financial Accounting",
            icon: "📚",
            points: [
                "Offers full accounting with auto-posting from all operations (sales, purchase, payroll, inventory).",
                "This ensures accurate financial reports without duplicating efforts, reducing reliance on third-party tools.",
            ]
        },
        {
            id: 20,
            title: "Profit & Loss Reports",
            icon: "📊",
            points: [
                "Generates profit reports by product, order, or customer, making it easier to identify what's working and what's not.",
                "This supports better pricing and sales strategies.",
            ]
        },
        {
            id: 21,
            title: "GST & Tax Reporting",
            icon: "🧾",
            points: [
                "Auto-generates GST returns and HSN-wise summaries from all transactions.",
                "This is essential for regulatory compliance, audit preparedness, and smooth tax filing.",
            ]
        },
        {
            id: 22,
            title: "Multi-Store Management",
            icon: "🏬",
            points: [
                "Allows centralized control over multiple locations, warehouses, or branches.",
                "This ensures consistent policies, real-time stock sharing, and performance tracking across your entire retail or wholesale network.",
            ]
        },
        {
            id: 23,
            title: "Accurate & Reliable Accounting",
            icon: "✅",
            points: [
                "Minimizes financial errors with system validations, integrated modules, and user accountability.",
                "This builds trust in your financial data and supports informed business decisions.",
            ]
        },
        {
            id: 24,
            title: "Smart Stock Optimization",
            icon: "📦",
            points: [
                "Uses smart insights like reorder alerts and fast/slow-moving analysis to keep your stock levels lean and efficient.",
                "This cuts costs and ensures product availability.",
            ]
        },
        {
            id: 25,
            title: "Payroll & Salary Management",
            icon: "💼",
            points: [
                "Automates employee salary calculations based on attendance, incentives, and tax deductions.",
                "This saves time, reduces HR errors, and ensures timely staff payments.",
            ]
        },
        {
            id: 26,
            title: "Production Planning & Control (PPC)",
            icon: "🗓️",
            points: [
                "Helps schedule, assign, and track production jobs.",
                "This is vital to meet delivery deadlines, manage workloads, and ensure efficient use of time and materials.",
            ]
        },
        {
            id: 27,
            title: "MIS & Business Reports",
            icon: "📑",
            points: [
                "Offers export-ready and dashboard reports across all departments.",
                "This helps business owners take quicker and more confident decisions based on data.",
            ]
        },
        {
            id: 28,
            title: "Role-Based Security",
            icon: "🔐",
            points: [
                "Restricts access based on user roles and maintains approval workflows. ",
                "This keeps your critical business data secure while maintaining accountability across the organization.",
            ]
        }
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/jewel-mfg.jpg"} mainButtonContent={mainButtonContent} section7Title={section7Title} section7Data={section7Data} section={section} />

            {/* <section
                className="mfg-benefits-bullets"
                style={{
                    backgroundImage: "url(/bg.webp)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="mfg-benefits-bullets__container">
                    <div className="mfg-benefits-bullets__header">
                        <h2 className="mfg-benefits-bullets__title">
                            {section7Title}
                        </h2>
                    </div>

                    <div className="mfg-benefits-bullets__grid">
                        {section7Data.map((item) => (
                            <div key={item.id} className="mfg-bullet-card">
                                <div className="mfg-bullet-card__icon">{item.icon}</div>
                                <div className="mfg-bullet-card__content">
                                    <h3 className="mfg-bullet-card__title">{item.title}</h3>
                                    <ul className="mfg-bullet-card__list">
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
