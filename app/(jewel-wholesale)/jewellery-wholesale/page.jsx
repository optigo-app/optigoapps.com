import Industries from '@/components/Industries/Industries'
import React from 'react'
import './page.scss'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages['/jewellery-wholesale']);

const page = () => {
    const mainTitle = "Jewellery Wholesale";
    const mainDescription = `<strong>Jewellery wholesale software</strong> streamlines operations by automating order processing, invoicing, and support—freeing teams to focus on growth. Real-time insights into sales, inventory, and finances enable smarter pricing and stock decisions while minimizing errors and stockouts. The system improves compliance, data security, and scalability. With enhanced control and visibility across departments, wholesalers can deliver faster service and scale confidently.`;

    const mainButtonContent = "Explore more"

    const section = ["section7i1"];

    const section7Titlei1 = "Key features of Jewellery Wholesale : ";


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
    //         title: "Dashboard",
    //         icon: <LayoutDashboard color="#2980b9" size={32} />,
    //         points: [
    //             "Get a real-time overview of your jewellery business on a single screen.",
    //             "The dashboard displays key metrics like stock value, orders in progress, sales, purchases, customer balances, and vendor activity.",
    //             "Quickly access pending deliveries, due payments, or low-stock alerts.",
    //             "Helps business owners and managers make faster, data-driven decisions.",
    //             "Designed to keep your team focused on daily priorities.",
    //             "Customization based on roles — from admin to sales or production.",
    //         ]
    //     },
    //     {
    //         id: 5,
    //         title: "Repair",
    //         icon: <Wrench color="#3B82F6" size={24} />,
    //         points: [
    //             "Easily manage jewellery repair jobs for your customers with full tracking.",
    //             "Record item details, reason for repair, estimated delivery dates, and charges (if any).",
    //             "Update job status as it moves through repair stages like polish, stone fixing, or resizing.",
    //             "Notify customers when the item is ready for pickup.",
    //             "Track pending or completed repairs in one place.",
    //             "Ensures transparency and better service for repeat customers.",
    //             "Especially useful for retail showrooms and service desks.",
    //         ]
    //     },
    //     {
    //         id: 6,
    //         title: "Loss Management",
    //         icon: <AlertTriangle color="#c0392b" size={32} />,
    //         points: [
    //             "Monitor gold, diamond, or gemstone loss during manufacturing or vendor job work.",
    //             "Record expected vs actual material returns and identify discrepancies in real time.",
    //             "Track losses by process, vendor, or job ID to ensure better accountability.",
    //             "Helps in cost control and settlement calculations.",
    //             "Strengthens trust with clients and karigars by reducing unexplained material differences.",
    //             "Essential for maintaining material accuracy and business profitability.",
    //         ]
    //     },
    //     {
    //         id: 7,
    //         title: "Production Management",
    //         icon: <Workflow color="#f39c12" size={32} />,
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
    //         id: 8,
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
    //         id: 9,
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
    //         id: 10,
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
    //         id: 11,
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
    //     },
    // ];


    const section7Datai1 = [
        {
            id: 1,
            title: "Design",
            icon: "🎨",
            points: [
                "The design module allows users to digitally manage the complete jewellery design process—from idea generation to production handover.",
                "It helps create design records with images, specifications, approvals, and related costs.",
                "This feature ensures clear communication between designers, production teams, and sales departments, preventing errors in custom or bulk design execution.",
                "Every design entry can be tracked and reused for future orders or reference."
            ]
        },
        {
            id: 2,
            title: "CRM (Customer Relationship Management)",
            icon: "👥",
            points: [
                "This feature centralizes all customer data, communication history, and buying behavior in one place.",
                "It supports follow-ups, inquiries, and categorization of clients based on their preferences or purchase patterns.",
                "By having a clear view of customer interactions and history, teams can improve service, send targeted offers, and maintain stronger client relationships across retail or wholesale operations.",
            ]
        },
        {
            id: 3,
            title: "Dynamic Scalability",
            icon: "📈",
            points: [
                "The system supports business growth without performance compromises.",
                "Whether expanding to more users, multiple branches, or handling increasing data, the ERP remains responsive and adaptable.",
                "Businesses can activate additional features, locations, or user roles instantly—ensuring long-term flexibility without needing to migrate to a new platform.",
            ]
        },
        {
            id: 4,
            title: "Subcontractor Job Work Management",
            icon: "👷‍♂️",
            points: [
                "Jewellery manufacturing often involves multiple karigars or vendors working externally",
                "This feature provides complete control over job work, including raw material issue, job status, due dates, labor cost calculation, and final output.",
                "It maintains clarity and accountability in outsourced work, reduces manual follow-ups, and ensures timely delivery."
            ]
        },
        {
            id: 5,
            title: "Order Management",
            icon: "📋",
            points: [
                "Handle bulk and custom orders with structured processes that track each order from creation to delivery.",
                "The module includes stages like order approval, material allocation, production monitoring, and dispatch tracking.",
                " It simplifies large-order execution by offering full visibility and timely alerts, preventing errors and ensuring on-time fulfillment.",
            ]
        },
        {
            id: 6,
            title: "Multi-Branch Operations",
            icon: "🏢",
            points: [
                "This feature allows centralized control of operations across multiple locations—whether it’s showrooms, warehouses, or offices.",
                "Each branch can operate independently with their own data access, billing, and reporting, while the head office retains full oversight.",
                "This ensures consistency in stock, pricing, and performance tracking across the entire network.",
            ]
        },
        {
            id: 7,
            title: "Material Planning & Allocation",
            icon: "🧮",
            points: [
                "The system automatically generates material requirement plans based on confirmed orders and current stock levels.",
                "It helps procurement teams plan purchases in advance, reduce overstocking, and prevent production halts due to shortages.",
                "It ensures that the right materials are allocated to the right orders at the right time.",
            ]
        },
        {
            id: 8,
            title: "Inventory Control & Management",
            icon: "📦",
            points: [
                "Gain real-time control of inventory across categories, branches, and stock locations.",
                "The system tracks item movement, purchase, sales, repairs, and wastage with serial or barcode-level accuracy.",
                "Alerts for low stock, expiry, or non-moving items ensure better decisions, reduced loss, and optimal stock levels.",
            ]
        },
        {
            id: 9,
            title: "Item Service & Repair Tracking",
            icon: "🛠️",
            points: [
                "This module helps record, track, and manage jewellery service and repair jobs received from clients or internal departments.",
                "It logs details like item condition, expected completion time, repair cost, and delivery status.",
                "All entries are linked to the client profile and help build transparency, trust, and post-sale satisfaction.",
            ]
        },
        {
            id: 10,
            title: "Digitized Product Catalogue",
            icon: "📸",
            points: [
                "Create and maintain a digital catalogue of all your jewellery designs and SKUs with high-quality images, specifications, pricing, and availability.",
                "It becomes an ideal tool for both internal sales teams and customer presentations.",
                "The catalogue can be accessed online or offline and helps eliminate the need for physical samples in many cases.",
            ]
        },
        {
            id: 11,
            title: "Integrated E-commerce Sync",
            icon: "🔄",
            points: [
                "This feature allows seamless synchronization between your ERP system and e-commerce platforms or B2B portals.",
                "Product stock, images, prices, and orders update automatically in both systems, eliminating manual data duplication.",
                "It ensures consistent customer experience across physical and digital channels.",
            ]
        },
        {
            id: 12,
            title: "Smart Scanning (RFID/Barcode/QR)",
            icon: "🔍",
            points: [
                "Supports fast and accurate identification of items using multiple scanning technologies.",
                "Whether managing inventory, billing, repair, or dispatch, scanning eliminates manual errors and improves operational speed.",
                "Compatibility with advanced tags ensures modernized stock tracking in showrooms and warehouses.",
            ]
        },
        {
            id: 13,
            title: "Flexible Rate & Price Management",
            icon: "💲",
            points: [
                "Manage customized pricing structures based on gold rates, customer category, location, or karat.",
                "The system allows flexible pricing rules and automates updates across product lists.",
                "It helps maintain consistency in quotes, billing, and catalogue prices without manual calculations.",
            ]
        },
        {
            id: 14,
            title: "Sales Tracking & Insights",
            icon: "📊",
            points: [
                "Access comprehensive reports to track sales performance by item, branch, customer, or salesperson.",
                "This module gives clear visibility into which products are in demand, which locations are underperforming, and how seasonal trends affect sales.",
                "It helps with strategic planning and inventory decisions.",
            ]
        },
        {
            id: 15,
            title: "Financial Overview (P&L)",
            icon: "💹",
            points: [
                "Automatically calculates Profit & Loss based on your real-time sales, purchases, expenses, and other financial transactions.",
                "The integrated view helps management quickly assess business health, identify cost leaks, and plan for profitability improvements—without depending on external tools."
            ]
        },
        {
            id: 16,
            title: "Compliant GST Stock Reporting",
            icon: "🧾",
            points: [
                "Generate GST-ready reports like GSTR-1 and GSTR-3B with complete linkage to stock and sales data.",
                "This ensures compliance with Indian tax laws, reduces manual work, and helps avoid penalties.",
                "Reports are formatted and export-ready for CA or government submission.",
            ]
        },
        {
            id: 17,
            title: "Transactional SMS Alerts",
            icon: "📲",
            points: [
                "Keep customers updated with automated transactional SMS alerts for order confirmation, repair readiness, delivery status, and payment receipts.",
                "This feature improves communication and service without involving promotional or spam messaging."
            ]
        },
        {
            id: 18,
            title: "Reliable Financial Accuracy",
            icon: "🧮",
            points: [
                "With accounting tightly integrated into sales, purchase, payroll, and inventory, the system ensures error-free financial data.",
                "It eliminates manual double entry, enables faster reconciliations, and supports secure audits.",
                "You get consistent and trustworthy records for every transaction.",
            ]
        },
        {
            id: 19,
            title: "Purchase & Procurement Management",
            icon: "🛒",
            points: [
                "Plan and manage all procurement activities from quotation requests to PO creation, GRN, and vendor payments.",
                "Track delivery timelines, item costs, and supplier performance to maintain control over purchases and reduce unnecessary spending."
            ]
        },
        {
            id: 20,
            title: "Vendor & Karigar Relationship Management",
            icon: "🤝",
            points: [
                "Manage detailed profiles for all vendors and karigars with job records, payment status, and item performance.",
                "This module helps assign work, monitor timelines, and settle payments accurately, ensuring transparency and better supplier relationships."
            ]
        },
        {
            id: 21,
            title: "Role-Based Access & Security",
            icon: "🔐",
            points: [
                "Enhance data privacy by assigning role-wise access to users.",
                "Each employee or user can be limited to specific modules, actions, or reports—ensuring only authorized individuals can access sensitive data like pricing, finances, or customer details."
            ]
        },
        {
            id: 22,
            title: "Excel-Based Salary Upload",
            icon: "📤",
            points: [
                "Easily upload staff salaries using Excel templates without the need for a full HR module.",
                "This feature supports monthly payroll entries, tracks payment status, and integrates with accounting for expense recording and audit clarity."
            ]
        }
    ];

    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={"/jewel-wholesale.jpg"} mainButtonContent={mainButtonContent} section={section} section7Titlei1={section7Titlei1} section7Datai1={section7Datai1} />

            {/* <section
                className="wholesale-benefits-bullets"
                style={{
                    backgroundImage: "url(/bg.webp)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="wholesale-benefits-bullets__container">
                    <div className="wholesale-benefits-bullets__header">
                        <h2 className="wholesale-benefits-bullets__title">
                            {section7Title}
                        </h2>
                    </div>

                    <div className="wholesale-benefits-bullets__grid">
                        {section7Data.map((item) => (
                            <div key={item.id} className="wholesale-bullet-card">
                                <div className="wholesale-bullet-card__icon">{item.icon}</div>
                                <div className="wholesale-bullet-card__content">
                                    <h3 className="wholesale-bullet-card__title">{item.title}</h3>
                                    <ul className="wholesale-bullet-card__list">
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
