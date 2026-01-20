import React from 'react'
import dynamic from 'next/dynamic'
import './Home.scss'

// Dynamically imported components
const Features = dynamic(() => import('../Features/Features'))
const BrandLogo = dynamic(() => import('../BrandLogo/BrandLogo'))
const Features1 = dynamic(() => import('../Features1/Features1'))
const BlogCards = dynamic(() => import('../BlogCards/BlogCards'))
const TabView1 = dynamic(() => import('../Tabview/Tabview1'))
const HeroBannerCarousel = dynamic(() => import('../HeroBanner/HeroBannerCarousel'))
const FaqsSection = dynamic(() => import('../FaqsSection/FaqsSection'))
const Contact = dynamic(() => import('../Contact/Contact'))

const Home = () => {
    return (
        <>
            {/* <HeroSlider /> */}
            <HeroBannerCarousel />
            {/* <HeroBanner /> */}
            <BrandLogo />
            <Features />
            <Features1 />
            {/* <Tabview /> */}
            <TabView1 />
            <BlogCards />
            <FaqsSection />
            <div id="contact-section">
                <Contact />
            </div>
        </>
    )
}

export default Home
