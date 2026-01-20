import React, { useState } from 'react';
import './TabView1.scss';
import Link from 'next/link';
import { useHandleUrlNavigation } from '@/utils/useHandleUrlNavigation';

const TabView1 = () => {
    const [activeTab, setActiveTab] = useState('Website');
    const [fadeKey, setFadeKey] = useState(0);

    const handleNavigation = useHandleUrlNavigation();

    const handleTabChange = (id) => {
        setFadeKey(prev => prev + 1); // triggers animation
        setActiveTab(id);
    };

    const tabs = [
        { id: 'Website', label: 'Website' },
        { id: 'Application', label: 'Application' },
        // { id: 'ICatalog', label: 'ICatalog' },
    ];

    const webisteContent = (
        <div className="tab-content">
            <div className="card">
                <div className="suggestions" style={{
                    backgroundImage: 'url(/tab-1.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div className="suggestions_inner">
                        <h3 className='sugg_title'>Connected Commerce, Connected Growth</h3>
                        <p className='sugg_para'>Run your jewellery business smarter with Optigo’s ERP-connected e-commerce. Instant stock updates, automated orders, and personalized pricing. Experience it yourself</p>
                        <Link href='/apps-and-ecommerce/E-commerce/real-time-connected-b2b-ecommerce/' onClick={(e) => handleNavigation(e, "/apps-and-ecommerce/E-commerce/real-time-connected-b2b-ecommerce/")} className='sugg_btn'>Explore e-commerce</Link>
                    </div>
                </div>
                <div className="suggestions">
                    <div className="inner_card">
                        <div className="inner_card_div1" style={{
                            backgroundImage: 'url(/tab-2.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',

                        }}>
                            <div className="suggestions_inner1">
                                <h3 className='sugg_title'>Smart Jewelry Catalog.</h3>
                                <p className='sugg_para'>From catalog to checkout, Optigo makes online jewellery shopping effortless. Real-time stock, automated pricing, and personalized experiences await.</p>
                                <Link href='/apps-and-ecommerce/apps/b2b-and-b2c-catalog-sharing/' onClick={(e) => handleNavigation(e, "/apps-and-ecommerce/apps/b2b-and-b2c-catalog-sharing/")} className='sugg_btn'>Explore Catalogue</Link>
                            </div>
                        </div>
                        <div className="inner_card_div2" style={{
                            backgroundImage: 'url(/tab-3.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}>
                            <div className="suggestions_inner2">
                                <h3 className='sugg_title'>Store That Never Sleeps.</h3>
                                <p className='sugg_para'>Delight your customers with an elegant eCommerce platform that’s simple to browse, easy to buy, and always in sync.</p>
                                <Link href='/apps-and-ecommerce/E-commerce/real-time-connected-b2c-ecommerce/' onClick={(e) => handleNavigation(e, "/apps-and-ecommerce/E-commerce/real-time-connected-b2c-ecommerce/")} className='sugg_btn'>Explore more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const appContent = (
        <div className="tab-content">
            <div className="card">
                <div className="suggestions" style={{
                    backgroundImage: 'url(/tab-4.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div className="suggestions_inner">
                        <h3 className='sugg_title'>Customer App</h3>
                        <p className='sugg_para'>Let your buyers browse collections, place orders, track delivery, and stay connected—all from a beautifully designed mobile app.</p>
                        <Link href='/apps-and-ecommerce/apps/b2b-customer-app/' onClick={(e) => handleNavigation(e, "/apps-and-ecommerce/apps/b2b-customer-app/")} className='sugg_btn'>View more</Link>
                    </div>
                </div>
                <div className="suggestions" style={{
                    backgroundImage: 'url(/tab-5.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div className="suggestions_inner">
                        <h3 className='sugg_title'>Sales Executive App</h3>
                        <p className='sugg_para'>Empower your field team with tools to capture leads, raise quotations, create orders, and share digital catalogues on the go.</p>
                        <Link href='/apps-and-ecommerce/apps/sales-team-mobile-app/' onClick={(e) => handleNavigation(e, "/apps-and-ecommerce/apps/sales-team-mobile-app/")} className='sugg_btn'>View more</Link>
                    </div>
                </div>
            </div>
        </div>
    );

    const icatalogContent = (
        <div className="tab-content">
            <div className="card">
                <div className="suggestions" style={{
                    backgroundImage: 'url(/tab-6.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div className="suggestions_inner">
                        <h3 className='sugg_title' style={{ color: "white" }}>Icatalog</h3>
                        <p className='sugg_para' style={{ color: "white" }}>A modern, interactive catalog tailored for effortless product exploration.</p>
                        <Link href='/' onClick={(e) => handleNavigation(e, "/")} className='sugg_btn'>View more</Link>
                    </div>
                </div>
                <div className="suggestions">
                    <div className="inner_card">
                        <div className="inner_card_div1" style={{
                            backgroundImage: 'url(/tab-7.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}>
                            <div className="suggestions_inner1">
                                <h3 className='sugg_title'>Digital Sharing</h3>
                                <p className='sugg_para'>Share personalized product links via WhatsApp, Email, or QR—no app or login required for the buyer.</p>
                                <Link href='/' onClick={(e) => handleNavigation(e, "/")} className='sugg_btn'>View more</Link>
                            </div>
                        </div>
                        <div className="inner_card_div2" style={{
                            backgroundImage: 'url(/tab-8.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}>
                            <div className="suggestions_inner2">
                                <h3 className='sugg_title'>Smart Filters & Privacy</h3>
                                <p className='sugg_para'>Allow filtering by weight, category, or budget with optional price hiding and buyer-specific views.</p>
                                <Link href='/' onClick={(e) => handleNavigation(e, "/")} className='sugg_btn'>View more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <div className="brand_title_tab">
                <h3 className="brand_section_tag">Portfolio</h3>
                <h2 className="brand_section_title">Our Creations</h2>
            </div>
            <div className="tab-view1">
                <div className="tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => handleTabChange(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div key={fadeKey} className={`content fade-animation`}>
                    {activeTab === 'Website' && webisteContent}
                    {activeTab === 'Application' && appContent}
                    {/* {activeTab === 'ICatalog' && icatalogContent} */}
                </div>
            </div>
        </div>
    );
};

export default TabView1;