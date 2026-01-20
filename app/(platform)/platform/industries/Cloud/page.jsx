import React from 'react'
import './page.scss';
import Industries from '@/components/Industries/Industries'

const page = () => {

    const mainTitle = "Cloud ERP vs Desktop ERP – A Smart Choice for Jewellery Businesses";
    const mainDescription = `Choosing the right ERP system is crucial for the smooth operation of a jewellery business. Below is a comparison between <strong>Cloud-Based ERP</strong> and <strong>Desktop-Based ERP</strong> to help you understand which suits your business needs better:`;
    const mainButtonContent = "Explore more";

    const comparisonData = [
        {
            feature: "Accessibility",
            cloud: "Access from anywhere via internet on mobile, tablet or desktop",
            desktop: "Access limited to specific devices or office premises only"
        },
        {
            feature: "Real-Time Data Sync",
            cloud: "Instant updates across branches, users, and devices",
            desktop: "Data must be manually synced or updated periodically"
        },
        {
            feature: "Device Compatibility",
            cloud: "Works on smartphones, tablets, laptops and desktops",
            desktop: "Mostly limited to desktop computers (Windows)"
        },
        {
            feature: "Scalability",
            cloud: "Easily scalable without extra infrastructure",
            desktop: "Scaling requires more hardware and manual installations"
        },
        {
            feature: "Data Security",
            cloud: "Cloud-hosted with encrypted backups and security layers",
            desktop: "Depends on local IT setup and backup frequency"
        },
        {
            feature: "Installation & Maintenance",
            cloud: "No physical installation needed; updates handled by cloud system",
            desktop: "Manual setup and update process; needs in-house IT support"
        },
        {
            feature: "Cost Structure",
            cloud: "Subscription-based, pay-as-you-grow model",
            desktop: "High upfront cost with ongoing maintenance expenses"
        },
        {
            feature: "Multi-Branch Management",
            cloud: "Centralized management across all branches",
            desktop: "Complicated and often disconnected systems"
        },
        {
            feature: "Disaster Recovery",
            cloud: "Regular cloud backups ensure fast recovery",
            desktop: "Manual backups prone to error or data loss"
        },
        {
            feature: "System Updates",
            cloud: "Automatic feature and security updates without downtime",
            desktop: "Manual and may require system downtime"
        }
    ];

    const section4Data = [
        {
            content: "Empower your travelling sales team with real-time or offline access."
        },
        {
            content: "Secure and centralized system accessible across devices."
        },
        {
            content: "Easily manage inventory, orders, billing, and more from any location."
        },
        {
            content: "No need for local IT setup – everything runs from the cloud."
        },
        {
            content: "Faster updates, seamless experience, and lower total cost of ownership."
        },
    ]


    return (
        <>
            <Industries mainTitle={mainTitle} mainDescription={mainDescription} mainImg={'/cloud-desktop.jpg'} mainButtonContent={mainButtonContent} />
            <section className="erp-comparison">
                <h2>Cloud ERP vs Desktop ERP</h2>
                <div className="comparison-table">
                    <div className="table-header">
                        <div>Feature</div>
                        <div>Cloud ERP</div>
                        <div>Desktop ERP</div>
                    </div>
                    {comparisonData.map((row, index) => (
                        <div className="table-row" key={index}>
                            <div className="feature">{row.feature}</div>
                            <div className="cloud">{row.cloud}</div>
                            <div className="desktop">{row.desktop}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="ind_mission1">
                <div className="text">
                    <h2>Why Jewellery Businesses Prefer Optigo Cloud ERP</h2>
                    <ul className="bullet-list">
                        {section4Data?.map((item, index) => (
                            <li key={index}>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default page
