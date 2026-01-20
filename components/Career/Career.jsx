import React from 'react';
import './Career.scss';

import HeroBanner from '../HeroBanner/HeroBanner';
import { ArrowRight } from 'lucide-react';

const Career = () => {

    const careerCards = [
        {
            title: "Consulting services",
            description:
                "Deliver the highest levels of service acting as a true partner and consultant to your customers.",
            linkText: "View opportunities",
            image: "/career-banner-1.jpeg"
        },
        {
            title: "Development",
            description:
                "Create the most innovative technology to drive value in our customer business applications from one industry to another.",
            linkText: "View opportunities",
            image: "/career-banner-2.jpeg"
        },
        {
            title: "Business operations",
            description:
                "Partner closely with our sales and services teams to develop the best customer industry solutions.",
            linkText: "View opportunities",
            image: "/career-banner-3.jpeg"
        },
        {
            title: "Early career",
            description:
                "Providing career growth and networking opportunities for individuals new to their career through both vertical and lateral role-changes here at OptigoApps.",
            linkText: "View opportunities",
            image: "/career-banner-4.webp"
        },
        {
            title: "Sales and marketing",
            description:
                "Work in teams that inspire excellence, collaborating to ensure our customers have the world’s most disruptive ERP solutions.",
            linkText: "View opportunities",
            image: "/career-banner-5.png"
        }
    ];

    return (
        <>
            <HeroBanner />

            {/* Benefits */}
            <section className='career_benefits'
                style={{
                    backgroundImage: 'url(/bg1.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="career_content_div">
                    <div className="career_title">
                        <h3 className="career_section_tag">Benefits</h3>
                        <h2 className="career_section_title">We care about your total well-being</h2>
                        <p>At Optigo, our benefits support physical, financial and emotional well-being. We work to help you realize your professional goals, discover opportunities aligned with your strengths and interests, maximize your individual contributions and earn rewards based on the value you create. Benefits vary by location, so talk with your recruiter to learn what is available. </p>
                    </div>
                </div>
            </section>

            {/* Find your team */}
            <section className="careercards">
                <div className="careercards__header">
                    <div className="careercards_head_title">
                        <h5>Find your team</h5>
                        <h2>Explore open positions in your field of interest and location – and find your new team.</h2>
                    </div>
                </div>
                <div className="careercards__grid">
                    {careerCards.map((item, index) => (
                        <div className="resource-card" key={index}>
                            <div className="resource-card__imgDiv">
                                <img src={item.image} alt={item.title} className="resource-card__image" />
                            </div>
                            <div className="resource-card__content">
                                <h3 className="resource-card__title">{item.title}</h3>
                                <p className="resource-card__desc">{item.description}</p>
                                <a href="#" className="resource-card__link">
                                    {item.linkText}
                                    <ArrowRight className="resource-card__link-arrow" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Career;
