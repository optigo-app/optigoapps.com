'use client';

import React, { useRef, useEffect, useState } from 'react';
import './HeroSlider.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    // Ensure refs are available when Swiper mounts
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="heroSliderMain relative">
            {isMounted && (
                <Swiper
                    modules={[Navigation, Pagination, EffectFade]}
                    loop={true}
                    effect="fade"
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onSwiper={(swiper) => {
                        // Connect navigation buttons manually
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    className="mySwiper"
                >
                    {[1, 2, 3, 4].map((i) => (
                        <SwiperSlide key={i}>
                            <Image
                                src={`/image ${i}.jpg`}
                                alt={`Slide ${i}`}
                                width={1920}
                                height={500}
                                style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            {/* Navigation buttons with refs */}
            <div ref={prevRef} className="swiper-button-prev"></div>
            <div ref={nextRef} className="swiper-button-next"></div>
        </div>
    );
};

export default HeroSlider;
