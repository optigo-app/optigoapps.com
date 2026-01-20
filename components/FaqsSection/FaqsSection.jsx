import React, { useState } from "react";
import "./FaqsSection.scss";
import Link from "next/link";
import { useHandleUrlNavigation } from "@/utils/useHandleUrlNavigation";

const faqs = [
    {
        category: "Jewellery ERP Software",
        items: [
            {
                question: "What is jewellery ERP software and how does it transform jewellery businesses?",
                answer:
                    "Optigo apps Cloud base ERP software integrates critical business functions—such as inventory, production, sales, CRM, finance, and quality control—into a unified platform. It streamlines operations, reduces manual errors, and provides real‑time visibility across your entire jewellery workflow.",
            },
            {
                question: "What are the key benefits of implementing jewellery ERP software?",
                answer:
                    "Benefits include efficient inventory management by karat, batch, and design; automated billing and invoicing; enhanced CRM; better vendor procurement; financial oversight; and data-driven decision-making.",
            },
            {
                question: "Is jewellery ERP software suitable for small businesses?",
                answer:
                    "Yes—most jewellery ERP systems are scalable and customizable, making them ideal whether you're a boutique retailer or a large manufacturer.",
            }
        ]
    },
    {
        category: "Cloud-Based ERP for Jewellers",
        items: [
            {
                question: "Why choose a cloud-based jewellery ERP over traditional on‑premise software?",
                answer:
                    "Optigo apps Cloud ERP offers remote access from any device, lower IT overhead, auto data backups, flexible scalability, and faster implementation—with all updates handled centrally. These features add mobility and cost-efficiency to your jewellery operations.",
            },
            {
                question: "Is cloud-based ERP secure for handling sensitive jewellery data?",
                answer:
                    "Yes. Optigo apps Cloud jewellery ERP platforms provide role-based access control, data encryption, audit logs, and adherence to industry compliance standards to ensure robust security.",
            }
        ]
    },
];

const FaqsSection = () => {

    const handleNavigation = useHandleUrlNavigation();

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faqsec-wrapper">
            <div className="faqsec-container">
                <div className="faqsec-heading">Frequently Asked Questions</div>
                {faqs.map((section, categoryIndex) => (
                    <div key={categoryIndex}>
                        <div className="faqsec-category">{section.category}</div>

                        <dl className="faqsec-list">
                            {section.items.map((faq, faqIndex) => {
                                const id = `${categoryIndex}-${faqIndex}`;
                                const isOpen = openIndex === id;

                                return (
                                    <div className={`faqsec-item ${isOpen ? "open" : ""}`} key={id}>
                                        <dt
                                            className="faqsec-question"
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
                                            className="faqsec-answer-wrapper"
                                            style={{
                                                maxHeight: isOpen ? "500px" : "0px"
                                            }}
                                        >
                                            <div className="faqsec-answer">{faq.answer}</div>
                                        </dd>
                                    </div>
                                );
                            })}
                        </dl>
                    </div>
                ))}
                <div className="faqsec-btn-wrapper">
                    <Link href={'/faqs'} onClick={(e) => handleNavigation(e, '/faqs')} className="faqsec-btn">View More</Link>
                </div>
            </div>
        </section>
    );
};

export default FaqsSection;
