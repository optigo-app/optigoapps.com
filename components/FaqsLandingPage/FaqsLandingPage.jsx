'use client';

import React, { useState } from "react";
import "./FaqsLandingPage.scss";
import FaqsData from "@/public/FaqsData";
import FaqsHeroSection from "../FaqsHeroSection/FaqsHeroSection";

const FaqsLandingPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (id) => {
        setTimeout(() => {
            setOpenIndex(openIndex === id ? null : id);
        }, 300);
    };

    return (
        <>
            <FaqsHeroSection />
            <section className="faq-wrapper" aria-labelledby="faq-heading">
                <div className="faq-container">
                    {/* <h2 id="faq-heading" className="faq-heading">Frequently Asked Questions</h2> */}

                    {FaqsData.map((section, categoryIndex) => (
                        <div key={categoryIndex}>
                            <div className="faq-category">{section.category}</div>

                            <dl className="faq-list">
                                {section.items.map((faq, faqIndex) => {
                                    const id = `${categoryIndex}-${faqIndex}`;
                                    const isOpen = openIndex === id;

                                    return (
                                        <div className={`faq-item ${isOpen ? "open" : ""}`} key={id}>
                                            <dt
                                                className="faq-question"
                                                role="button"
                                                aria-expanded={isOpen}
                                                tabIndex={0}
                                                onClick={() => toggleFaq(id)}
                                                onKeyDown={(e) => e.key === "Enter" && toggleFaq(id)}
                                            >
                                                {faq.question}
                                                <span className="arrow">{isOpen ? "−" : "+"}</span>
                                            </dt>
                                            <dd
                                                className="faq-answer-wrapper"
                                                style={{
                                                    maxHeight: isOpen ? "500px" : "0px"
                                                }}
                                            >
                                                <div className="faq-answer">{faq.answer}</div>
                                            </dd>
                                        </div>
                                    );
                                })}
                            </dl>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default FaqsLandingPage;
