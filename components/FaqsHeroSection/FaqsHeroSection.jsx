import React from 'react';
import './FaqsHeroSection.scss';

const FaqsHeroSection = () => {

    return (
        <div className='faq-landing-page'>
            <div className="faq-hero-banner" style={{
                backgroundImage: 'url(/bg.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'left',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="hero-banner-content">
                    <p className="breadcrumb">Frequently Asked Questions</p>
                </div>
            </div>
        </div>
    );
};

export default FaqsHeroSection;
