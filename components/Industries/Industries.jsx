'use client'

import React from 'react'
import './Industries.scss'
import { ArrowRight, Factory, Truck, Warehouse } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useHandleUrlNavigation } from '@/utils/useHandleUrlNavigation';

const Industries = ({ mainTitle, mainDescription, mainButtonContent, mainImg, section,
    sectiion1Data, section1Title, section4Title, sectiion4Data, section4Title1, section6Title, section6Description, section2Title, section2Description, section2Data, section7Title, section7Data, section5Title, section5Tag, section5Description, section5Data, section8Title, section8Data, section7Datai, section7Titlei, section7Datai1, section7Titlei1 }) => {

    const benefits = [
        {
            id: 1,
            icon: <Factory className="industry-card__icon" />,
            title: "Jewelry Manufacturing",
            description: "Digitally transform your jewelry production process, manage karigar work, and streamline operations with our advanced manufacturing solutions.",
            link: "Jewelry manufacturing",
            linkUrl: "#"
        },
        {
            id: 2,
            icon: <Truck className="industry-card__icon" />,
            title: "Jewelry Logistics",
            description: "Ensure safe and timely delivery of precious goods with secure logistics and tracking tools tailored for the jewelry supply chain.",
            link: "Jewelry logistics",
            linkUrl: "#"
        },
        {
            id: 3,
            icon: <Warehouse className="industry-card__icon" />,
            title: "Wholesale Distribution",
            description: "Manage bulk jewelry orders, pricing, and inventory across locations with ease using our wholesale distribution modules.",
            link: "Jewelry wholesale",
            linkUrl: "#"
        },
    ];

    const handleNavigation = useHandleUrlNavigation();

    return (
        <div className="industries-optigo-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>{mainTitle}</h1>
                    <p dangerouslySetInnerHTML={{ __html: mainDescription }} />
                    {/* <Link href={'#'} onClick={(e) => handleNavigation(e, '#')} className='primary-btn'>
                        {mainButtonContent}
                    </Link> */}
                </div>
                <div className="hero-image">
                    <Image src={mainImg !== "" ? mainImg : "/diamond-jewellery-manufacturing.jpg"} width={500} height={500} loading="eager" alt="Jewelry Team" unoptimized />
                </div>
            </section>

            {section?.includes("section1") && (
                <>
                    {/* Workflow and challenges */}
                    <div
                        className="manufacturing-ui"
                        style={{
                            backgroundImage: 'url(/bg.webp)',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: "no-repeat"
                        }}
                    >
                        <h2>{section1Title}</h2>
                        <div className="section-grid">
                            {sectiion1Data.map((item, index) => (
                                <div className="card" key={index}>
                                    <div className="emoji">{item.icon}</div>
                                    <h3>{item.title}</h3>

                                    {item.challenges.length > 0 && (
                                        <>
                                            <div className="sub-heading text-red-600">Challenges:</div>
                                            <ul>
                                                {item.challenges.map((ch, i) => (
                                                    <li key={i}>{ch}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}

                                    {item.solutions.length > 0 && (
                                        <>
                                            <div className="sub-heading text-green-600">OptigoApps Solution:</div>
                                            <ul>
                                                {item.solutions.map((sol, i) => (
                                                    <li key={i}>{sol}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {section?.includes("section2") && (
                <div className='mission_main'>
                    <section className="mission">
                        <div className="text">
                            <h2 style={{ marginBottom: section2Description === "" ? 0 : '1rem' }}>{section2Title}</h2>
                            {section2Description !== "" &&
                                <p style={{ marginBottom: "1rem" }}>{section2Description}</p>
                            }
                            <ul className="bullet-list">
                                {section2Data?.map((item, index) => (
                                    <li key={index}>{item?.content}</li>
                                ))}
                            </ul>
                        </div>
                        {/* <div className="mission-image">
                            <Image src="/mission.jpg" height={300} width={300} style={{ width: !section2Description ? "350px" : "430px" }} alt="Jewelry Workshop" />
                        </div> */}
                    </section>
                </div>
            )}

            {
                section?.includes("section3") &&
                <>
                    {/* Benefits Section */}
                    <section className="benefits-grid" style={{ backgroundImage: 'url(/bg.webp)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
                        <div className="benefits-grid__container">
                            <div className="benefits-grid__header">
                                <h2 className="benefits-grid__title">
                                    Jewellery software built for better business
                                </h2>
                                <button className="benefits-grid__view-all">
                                    View all industries
                                    <ArrowRight className="benefits-grid__arrow" />
                                </button>
                            </div>

                            <div className="benefits-grid__grid">
                                {benefits.map((benefit) => (
                                    <div key={benefit.id} className="benefits-card">
                                        <div className="benefits-card__icon-wrapper">
                                            {benefit.icon}
                                        </div>

                                        <div className="benefits-card__content">
                                            <h3 className="benefits-card__title">{benefit.title}</h3>
                                            <p className="benefits-card__description">{benefit.description}</p>

                                            <a href={benefit.linkUrl} className="benefits-card__link">
                                                {benefit.link}
                                                <ArrowRight className="benefits-card__link-arrow" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            }

            {section?.includes("section7") && (
                <section
                    className="benefits-bullets"
                    style={{
                        backgroundImage: "url(/bg.webp)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="benefits-bullets__container">
                        <div className="benefits-bullets__header">
                            <h2 className="benefits-bullets__title">
                                {section7Title}
                            </h2>
                        </div>

                        <div className="benefits-bullets__grid">
                            {section7Data.map((item) => (
                                <div key={item.id} className="bullet-card">
                                    <div className="bullet-card__icon">{item.icon}</div>
                                    <div className="bullet-card__content">
                                        <h3 className="bullet-card__title">{item.title}</h3>
                                        <ul className="bullet-card__list">
                                            {item.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                        {item.link && (
                                            <a href={item.linkUrl} className="bullet-card__link">
                                                {item.link} <ArrowRight className="bullet-card__link-arrow" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {section?.includes("section7i") && (
                <section
                    className="benefits-bullets-iu"
                    style={{
                        backgroundImage: "url(/bg.webp)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="benefits-bullets-iu__container">
                        <div className="benefits-bullets-iu__header">
                            <h2 className="benefits-bullets-iu__title">
                                {section7Titlei}
                            </h2>
                        </div>

                        <div className="benefits-bullets-iu__grid">
                            {section7Datai.map((item) => (
                                <div key={item.id} className="bullet-card-iu">
                                    <div className="bullet-card-iu__icon">{item.icon}</div>
                                    <div className="bullet-card-iu__content">
                                        <h3 className="bullet-card-iu__title">{item.title}</h3>
                                        <ul className="bullet-card-iu__list">
                                            {item.points.map((point, i) => (
                                                <li
                                                    key={i}
                                                    dangerouslySetInnerHTML={{ __html: point }}
                                                />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {section?.includes("section7i1") && (
                <section
                    className="benefits-bullets-iu1"
                    style={{
                        backgroundImage: "url(/bg.webp)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="benefits-bullets-iu1__container">
                        <div className="benefits-bullets-iu1__header">
                            <h2 className="benefits-bullets-iu1__title">
                                {section7Titlei1}
                            </h2>
                        </div>

                        <div className="benefits-bullets-iu1__grid">
                            {section7Datai1.map((item) => (
                                <div key={item.id} className="bullet-card-iu1">
                                    <div className="bullet-card-iu1__icon">{item.icon}</div>
                                    <div className="bullet-card-iu1__content">
                                        <h3 className="bullet-card-iu1__title">{item.title}</h3>
                                        <ul className="bullet-card-iu1__list">
                                            {item.points.map((point, i) => (
                                                <li
                                                    key={i}
                                                    dangerouslySetInnerHTML={{ __html: point }}
                                                />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {
                section?.includes("section4") &&
                <>
                    {/* Services Section */}
                    <section className="core-services">
                        <h3 className="section-tag">{section4Title1 !== "" && section4Title1}</h3>
                        <h2>{section4Title}</h2>
                        <div className="service-columns">
                            {(() => {
                                const mid = Math.ceil(sectiion4Data.length / 2);
                                const leftServices = sectiion4Data.slice(0, mid);
                                const rightServices = sectiion4Data.slice(mid);
                                return (
                                    <>
                                        <div className="left-column">
                                            {leftServices.map((service, idx) => (
                                                <div className="service-item" key={idx}>
                                                    <div className="icon">{service.icon}</div>
                                                    <div>
                                                        <h4>{service.title}</h4>
                                                        <p>{service.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="right-column">
                                            {rightServices.map((service, idx) => (
                                                <div className="service-item" key={idx + mid}>
                                                    <div className="icon">{service.icon}</div>
                                                    <div>
                                                        <h4>{service.title}</h4>
                                                        <p>{service.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                );
                            })()}
                        </div>
                    </section>

                    {/* <div className="erp-feature-section">
                        <h2 className="erp-feature-title">OptigoApps – The Complete Diamond Jewellery ERP</h2>
                        <div className="erp-feature-grid">
                            {sectiion4Data.map((item, index) => (
                                <div className="erp-feature-card" key={index}>
                                    <div className="erp-feature-icon">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </>
            }


            {
                section?.includes("section5") &&
                <>
                    {/* benefits */}
                    <section className="erp-benefits">
                        <h3 className="tagline">{section5Tag}</h3>
                        <h2 className="headline">{section5Title}</h2>
                        <p className="subtext">
                            {section5Description}
                        </p>

                        <div className="benefit-grid">
                            {section5Data.map((item, idx) => (
                                <div className="benefit-card" key={idx}>
                                    <h4>{item.title}</h4>
                                    {Array.isArray(item.content) ? (
                                        <ul>
                                            {item.content.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{item.content}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            }

            {
                section?.includes("section8") &&
                <section className="advanced-features">
                    <div className="container">
                        <h2>{section8Title}</h2>
                        <div className="features-grid">
                            {section8Data.map((feature, index) => (
                                <div className="feature-card" key={index}>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            }

            {
                section?.includes("section6") &&
                <section className="demo-cta">
                    <div className="cta-content">
                        <h2>{section6Title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: section6Description }} />
                        <button onClick={(e) => handleNavigation(e, "/contactus")}>Book A Demo</button>
                    </div>
                </section>
            }

        </div >
    )
}

export default Industries
