// lib/gtag.js
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// send a manual page_view (we use event page_view so we can control duplicates)
export const pageview = (url) => {
    if (!window.gtag) return;
    window.gtag('event', 'page_view', { page_path: url });
};

// generic event helper for GA4
export const event = (name, params) => {
    if (!window.gtag) return;
    window.gtag('event', name, params);
};
