'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Play, Volume2, VolumeX } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    id: 1,
    company: 'Ezzeta',
    logo: '/testimonial/ezetta.png',
    logoText: 'Ezzeta',
    quote: 'Optigo is a complete upgrade for everyone—tech-friendly, simple, and incredibly easy to use.',
    quoteHighlights: ['complete upgrade', 'incredibly easy to use.'],
    tagline: 'A smarter, easier way to manage your jewellery business.',
    videoUrl: 'https://cdn99.optigoapps.com/lib/jo/28/videos/EzettaJewels1.mp4',
  },
  {
    id: 2,
    company: 'Promise',
    logo: '/testimonial/promise.png',
    logoText: 'Promise',
    quote: 'Optigo is a complete, integrated solution that connects every part of our jewellery business in one place.',
    quoteHighlights: ['integrated solution', 'in one place.'],
    tagline: 'One platform. One ecosystem. Complete business connectivity.',
    videoUrl: 'https://cdn99.optigoapps.com/lib/jo/28/videos/PromiseJewels.mp4',
  },
  {
    id: 3,
    company: 'Elior',
    logo: '/testimonial/elior.png',
    logoText: 'Elior',
    quote: 'Optigo automates our day-to-day operations, so there’s no need for repetitive manual entries.',
    quoteHighlights: ['automates our day-to-day operations', 'no need for repetitive manual entries.'],
    tagline: 'Less manual work. More automation. Greater accuracy.',
    videoUrl: 'https://cdn99.optigoapps.com/lib/jo/28/videos/EliorJewels.mp4',
  },
];

function TestimonialCard({ item, renderHighlightedQuote }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => setIsPlaying(false));
            }
          });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMutedState = !isMuted;
      videoRef.current.muted = nextMutedState;
      videoRef.current.volume = 1.0;
      setIsMuted(nextMutedState);
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={toggleMute}
      className="group relative w-full h-[520px] sm:h-[640px] rounded-[26px] overflow-hidden cursor-pointer bg-slate-900 border border-slate-200/40"
    >
      {/* Full Background Video */}
      <video
        ref={videoRef}
        src={`${item.videoUrl}#t=0.001`}
        muted={isMuted}
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/95 via-black/70 via-40% to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="absolute top-6 left-6 z-20 flex items-center">
        {item.logo ? (
          <img
            src={item.logo}
            alt={`${item.company} logo`}
            className="h-[50px] sm:h-[50px] w-auto object-contain max-w-[150px] drop-shadow-md opacity-95 group-hover:opacity-100 transition-opacity"
          />
        ) : (
          <span className="text-white text-xl sm:text-2xl font-extrabold tracking-tight drop-shadow-lg opacity-90 group-hover:opacity-100 transition-opacity">
            {item.logoText}
          </span>
        )}
      </div>

      {/* Sound Toggle Control Button */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute video sound' : 'Mute video sound'}
        className="absolute top-6 right-6 z-30 px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/70 text-slate-200 backdrop-blur-md border border-white/15 opacity-80 group-hover:opacity-100 transition-all duration-300 shadow-md flex items-center gap-1.5 text-xs font-medium"
      >
        {isMuted ? (
          <>
            <VolumeX className="w-4 h-4 text-slate-300" />
            <span className="hidden sm:inline">Tap for sound</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 text-slate-200" />
            <span className="hidden sm:inline">Sound On</span>
          </>
        )}
      </button>

      {/* Hover Revealed Text Content */}
      <div className="absolute inset-0 p-6 sm:p-8 z-20 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out translate-y-4 group-hover:translate-y-0">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          "{renderHighlightedQuote(item.quote, item.quoteHighlights)}"
        </h3>
        <p className="text-sm sm:text-base font-semibold text-purple-200 mt-3 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {item.tagline}
        </p>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Helper to render quote with brand purple highlight spans
  const renderHighlightedQuote = (quote, highlights) => {
    if (!highlights || highlights.length === 0) return quote;

    let parts = [{ text: quote, isHighlight: false }];

    highlights.forEach((highlight) => {
      const newParts = [];
      parts.forEach((part) => {
        if (part.isHighlight) {
          newParts.push(part);
        } else {
          const split = part.text.split(highlight);
          split.forEach((subText, idx) => {
            if (subText) newParts.push({ text: subText, isHighlight: false });
            if (idx < split.length - 1) {
              newParts.push({ text: highlight, isHighlight: true });
            }
          });
        }
      });
      parts = newParts;
    });

    return (
      <>
        {parts.map((part, i) =>
          part.isHighlight ? (
            <span key={i} className="text-[#d8b4fe] font-black drop-shadow-sm">
              {part.text}
            </span>
          ) : (
            <span key={i}>{part.text}</span>
          )
        )}
      </>
    );
  };

  const totalCards = testimonials.length;
  const isThreeOrLess = totalCards <= 3;

  return (
    <section className="w-full bg-[#f6f6f8] pt-12 md:pt-16 pb-4 md:pb-6 px-4 sm:px-6 lg:px-12 overflow-hidden rounded-lg">
      <div className="w-full mx-auto">
        {/* Centered Clean Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
            Our customers achieve more
          </h2>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          {!isMounted ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {testimonials.map((item) => (
                <div key={item.id} className="w-full">
                  <TestimonialCard
                    item={item}
                    renderHighlightedQuote={renderHighlightedQuote}
                  />
                </div>
              ))}
            </div>
          ) : (
            <Swiper
              onSwiper={setSwiperRef}
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={isThreeOrLess ? 3 : 3.2}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 16 },
                210: { slidesPerView: 1, spaceBetween: 16 },
                320: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: isThreeOrLess ? 3 : 3.2, spaceBetween: 24 },
                1280: { slidesPerView: isThreeOrLess ? 3 : 3.5, spaceBetween: 24 },
              }}
              // autoplay={{ delay: 6000, disableOnInteraction: false }}
              className="w-full"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="h-full">
                  <TestimonialCard
                    item={item}
                    renderHighlightedQuote={renderHighlightedQuote}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Bottom Right Swiper Navigation Controls */}
          <div className={`flex items-center justify-end gap-3 mt-4 md:mt-6 ${isThreeOrLess ? 'lg:hidden' : ''}`}>
            <button
              onClick={() => swiperRef?.slidePrev()}
              aria-label="Previous slide"
              className="w-12 h-12 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-100 hover:border-slate-400 transition-colors shadow-sm"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => swiperRef?.slideNext()}
              aria-label="Next slide"
              className="w-12 h-12 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-100 hover:border-slate-400 transition-colors shadow-sm"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}