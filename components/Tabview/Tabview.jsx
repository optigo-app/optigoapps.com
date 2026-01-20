'use client'

import React, { useState } from 'react';
import './Tabview.scss';

const tabs = [
    {
        id: 1,
        name: 'Website',
        description: 'A responsive online platform to present your brand and boost product visibility.',
        link: '/website',
        banner: {
            title: 'Dazzling Necklace Collection',
            image: './banner-1.jpg'
        }
    },
    {
        id: 2,
        name: 'Application',
        description: 'A smart solution to streamline operations and enhance user experience on the go.',
        link: '/app',
        banner: {
            title: 'Brilliant Rings for Every Moment',
            image: './banner-2.jpg'
        }
    },
    {
        id: 3,
        name: 'Icatalog',
        description: 'A modern, interactive catalog tailored for effortless product exploration.',
        link: '/icatalog',
        banner: {
            title: 'Stylish Earrings Collection',
            image: './banner-3.jpg'
        }
    },
];


const Tabview = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <h2 className='header_main'>
                Explore our jewellery manufacturing solutions
            </h2>
            <div className="container">
                <div className="tab-view">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`tab ${activeTab.id === tab.id ? 'active' : ''}`}
                            onClick={() => handleTabClick(tab)}
                        >
                            <h3 className="tab-title">{tab.name}</h3>
                            <div className='tab-desc-div'>
                                <p className="tab-description">{tab.description}</p>
                                <a href={tab.link} className="tab-link">View Now</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="banner"
                    style={{ backgroundImage: `url(${activeTab.banner.image})` }}
                >
                </div>
            </div>
        </div>
    );
};

export default Tabview;