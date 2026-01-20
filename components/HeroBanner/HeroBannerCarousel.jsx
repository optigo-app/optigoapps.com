'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './HeroBannerCarousel.scss';
import Link from 'next/link';
import { useHandleUrlNavigation } from '@/utils/useHandleUrlNavigation';

const slides = [
    {
        id: 1,
        background: '/bg.webp',
        breadcrumb: "",
        heading: 'Unified platform For Jewellers',
        subheading: 'ERP + CRM + E-Commerce — seamless connected. From backend to customer experience, everything flows. One platform, for Easy of doing business.',
        image: '/home-banner-1.jpg',
        link: "/jewellery-manufacture/industries/gold-jewellery-manufacturing/",
    },
    {
        id: 2,
        background: '/bg.webp',
        breadcrumb: "",
        heading: 'Real Time Production & Predictive Intelligence',
        subheading: 'Drive productivity with High Accuracy.',
        image: '/home-banner-2.jpg',
        link: "/jewellery-wholesale/industries/domestic-international-wholesalers/",
    },
    {
        id: 3,
        background: '/bg.webp',
        breadcrumb: "",
        heading: 'Mobile First controls for business Leaders',
        subheading: 'Stay connected from anywhere, effortlessly.',
        image: '/home-banner-3.jpg',
        link: "/jewellery-retail/industries/franchise-showrooms/",
    },
    {
        id: 4,
        background: '/bg.webp',
        breadcrumb: "",
        heading: 'Omnichannel Ecommerce | Simplicity for High Growth',
        subheading: 'App + Ecommerce + CRM Retail in Order sync Show your Inventory in real time Every sale auto-syncs to ERP instantly. Grow faster with complete channel harmony.',
        image: '/home-banner-4.jpg',
        link: "/apps-and-ecommerce/industries/jewellery-wholesalers/",
    },
    {
        id: 5,
        background: '/bg.webp',
        breadcrumb: "",
        heading: 'AI Driven Insights For jewellers',
        subheading: 'Blend of Tech-intelligence & human expertise.',
        image: '/home-banner-5.jpg',
        link: "/apps-and-ecommerce/industries/jewellery-wholesalers/",
    },
];


const HeroBannerCarousel = () => {

    const handleNavigation = useHandleUrlNavigation();

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isHoveredPrev, setIsHoveredPrev] = useState(false);
    const [isHoveredNext, setIsHoveredNext] = useState(false);

    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <div className="hero-banner-carousel">
            <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                effect="fade"
                pagination={{ clickable: true }}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                className="hero-banner-swiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='hero-banner-carousel-div'>
                            <div className="hero-banner-carousel-inner" style={{
                                backgroundImage: `url(${slide.background})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>
                                <div className="hero-banner-carousel-content">
                                    <p className="breadcrumb">{slide.breadcrumb}</p>
                                    <h1 className="heading">{slide.heading}</h1>
                                    <p className="subheading">{slide.subheading}</p>
                                    {/* <Link href={slide.link} onClick={(e) => handleNavigation(e, slide.link)} className="cta-button">Explore Collection &nbsp;→</Link> */}
                                </div>

                                <div className="hero-banner-carousel-image">
                                    <Image
                                        src={slide.image}
                                        alt={slide.heading}
                                        height={200}
                                        width={200}
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Nav Buttons */}
            <div
                ref={prevRef}
                className="swiper-button-prev1"
                onMouseEnter={() => setIsHoveredPrev(true)}
                onMouseLeave={() => setIsHoveredPrev(false)}
            >
                <Image
                    className="left-arrow"
                    src={isHoveredPrev ? "/left-white-arrow.svg" : "/left-arrow.svg"}
                    alt="Left arrow"
                    width={50}
                    height={50}
                    draggable={false}
                    style={{ pointerEvents: "none", userSelect: "none" }}
                />
            </div>

            <div
                ref={nextRef}
                className="swiper-button-next1"
                onMouseEnter={() => setIsHoveredNext(true)}
                onMouseLeave={() => setIsHoveredNext(false)}
            >
                <Image
                    className="right-arrow"
                    src={isHoveredNext ? "/right-white-arrow.svg" : "/right-arrow.svg"}
                    alt="Right arrow"
                    width={50}
                    height={50}
                    draggable={false}
                    style={{ pointerEvents: "none", userSelect: "none" }}
                />
            </div>
        </div>
    );
};

export default HeroBannerCarousel;
