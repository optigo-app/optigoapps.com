import React from "react";
import "./BlogCards.scss";
import { ArrowRight } from "lucide-react";
import BlogsData from "@/public/BlogsData";
import Link from "next/link";
import { useHandleUrlNavigation } from "@/utils/useHandleUrlNavigation";

const blogcards = [
    {
        type: "Infographic",
        title: "The 4 Stages of Jewelry Retail Digitization",
        description:
            "Explore the four key stages of digital transformation in jewelry retail – from inventory automation to customer personalization – and how each step enhances brand loyalty and efficiency.",
        linkText: "View the infographic",
        image: "https://lirp.cdn-website.com/2723519e/dms3rep/multi/opt/juwelier+digitalisering-1920w.jpg"
    },
    {
        type: "Executive Brief",
        title: "Why Traditional Jewelry ERPs Are Holding You Back",
        description:
            "Jewelry businesses today demand real-time pricing, gold rate sync, and AI-driven sales insights. Legacy ERP systems lack the flexibility to meet these needs. Discover how modern ERP drives profitability.",
        linkText: "Read the brief",
        image: "https://www.credencys.com/wp-content/uploads/2024/08/blog-1-4.jpg"
    },
    {
        type: "White Paper",
        title: "Trust & Transparency in Gemstone Sourcing",
        description:
            "Consumers are demanding ethical sourcing and certification transparency. Learn how jewelry brands can implement governance tools to track provenance and enhance buyer trust.",
        linkText: "Read the white paper",
        image: "https://i.ytimg.com/vi/NrK8-OHIgiE/maxresdefault.jpg"
    },
    {
        type: "Infographic",
        title: "Using AI to Forecast Jewelry Trends & Demand",
        description:
            "From seasonal spikes to personalized gifting, AI helps jewelry brands anticipate demand. See how data-driven insights can elevate design, inventory planning, and customer engagement.",
        linkText: "View the infographic",
        image: "https://aijourn.com/wp-content/uploads/2024/07/ring-780x470.jpg"
    }
];

const BlogCards = () => {

    const handleNavigation = useHandleUrlNavigation();

    return (
        <section className="blogcards">
            <div className="blogcards__header">
                <div className="blogcards_head_title">
                    <h5>Blogs</h5>
                    <h2>Explore the latest Optigo blogs</h2>
                </div>
                <a href={'/blog'} className="blogcards__view-more" onClick={(e) => handleNavigation(e, "/blog")}>
                    View more blogs <ArrowRight className="industry-grid__arrow" />
                </a>
            </div>
            <div className="blogcards__grid">
                {BlogsData?.slice(0, 4)?.map((item, index) => {
                    const url = `/blog/${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`;
                    return (
                        <Link href={url} className="resource-card" key={index} onClick={
                            (e) => handleNavigation(e, url)
                        }>
                            <div className="resource-card__imgDiv">
                                <img src={item.image} alt={item.title} className="resource-card__image" />
                            </div>
                            <div className="resource-card__content">
                                {/* <p className="resource-card__type">{item.type}</p> */}
                                <h3 className="resource-card__title">{item.title}</h3>
                                {(item?.date || item?.duration) && (
                                    <span className="resource-card__date">
                                        {item?.date}
                                        {item?.date && item?.duration && <>&nbsp;&middot;&nbsp;</>}
                                        {item?.duration}
                                    </span>
                                )}
                                <p className="resource-card__desc">{item.description}</p>
                                {/* <a href="#" className="resource-card__link">
                                {item.linkText}
                                <ArrowRight className="resource-card__link-arrow" />
                            </a> */}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    );
};

export default BlogCards;
