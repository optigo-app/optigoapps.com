import React from 'react'
import './EmployeeBenefits.scss'
import { BookOpen, Film, Globe, Handshake, Lightbulb, PartyPopper, Puzzle, UserCheck, Rocket, Target, Users } from 'lucide-react';

const EmployeeBenefits = () => {

    const section7Title = "At OptigoApps";
    const section7Description = "We Believe in Growing Together";

    const section7Data = [
        {
            id: 1,
            title: "Goal-Focused",
            icon: <Target size={28} color="#b2069b" />,
            points: [
                "We set clear, ambitious goals and celebrate each milestone as a team — driving both success and personal growth."
            ]
        },
        {
            id: 2,
            title: "Outings",
            icon: <Film size={28} color="#3909c2" />,
            points: [
                "From team lunches to movie days and beyond, we believe in bonding beyond the workspace.",
                "These shared experiences help us build stronger connections, boost team spirit, and create lasting memories together."
            ]
        },
        {
            id: 3,
            title: "Together Time",
            icon: <Puzzle size={28} color="#f59e0b" />,
            points: [
                "Our monthly Fun Saturday is a dedicated hour to step back, unwind, and connect.",
                "It’s all about refreshing the mind, recharging energy, and sparking creativity — because great ideas (and great teams) thrive when we take time to have fun together."
            ]
        },
        {
            id: 4,
            title: "Celebrations",
            icon: <PartyPopper size={28} color="#ec4899" />,
            points: [
                "Whether it's festivals, birthdays, or project milestones — we celebrate every moment that matters to our team."
            ]
        },
        {
            id: 5,
            title: "Competitive and Supportive Environment",
            icon: <Handshake size={28} color="#10b981" />,
            points: [
                "We push each other to excel while maintaining a culture rooted in trust, mutual respect, and open communication."
            ]
        },
        {
            id: 6,
            title: "Employee-First",
            icon: <UserCheck size={28} color="#ef4444" />,
            points: [
                "Your voice matters. We prioritize work-life balance, mental well-being, and your long-term career growth."
            ]
        },
        {
            id: 7,
            title: "Learning and Development",
            icon: <BookOpen size={28} color="#3b82f6" />,
            points: [
                "We invest in your future with access to training, mentorship, and certifications — because when you grow, we all grow."
            ]
        },
        {
            id: 8,
            title: "Innovation-Friendly",
            icon: <Lightbulb size={28} color="#facc15" />,
            points: [
                "Have an idea? Let’s bring it to life — together.",
                "We thrive on creative thinking and encourage everyone to share bold ideas, challenge the norm, and contribute fresh perspectives."
            ]
        },
        {
            id: 9,
            title: "Inclusive Culture",
            icon: <Users size={28} color="#06b6d4" />,
            points: [
                "We embrace diversity and ensure every voice is heard, respected, and included — no matter your background or role."
            ]
        },
        // {
        //     id: 10,
        //     title: "Grow and Innovate with OptigoApps",
        //     icon: <Rocket size={28} color="#8b5cf6" />,
        //     points: [
        //         "We don’t just hire employees — we welcome heroes ready to innovate, learn, and achieve together."
        //     ]
        // }
    ];

    return (
        <section
            className="employee-benefits"
            style={{
                // backgroundImage: "url(/bg.webp)",
                // backgroundPosition: "center",
                // backgroundSize: "cover",
                // backgroundRepeat: "no-repeat",
            }}
        >
            <div className="employee-benefits__container">
                <div className="employee-benefits__header">
                    <h2 className="employee-benefits__title">
                        {section7Title}
                    </h2>
                    <p>{section7Description}</p>
                </div>

                <div className="employee-benefits__grid">
                    {section7Data.map((item) => (
                        <div key={item.id} className="employee-benefits-card">
                            <div className="employee-benefits-card__icon">{item.icon}</div>
                            <div className="employee-benefits-card__content">
                                <h3 className="employee-benefits-card__title">{item.title}</h3>
                                <ul className="employee-benefits-card__list">
                                    {item.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmployeeBenefits
