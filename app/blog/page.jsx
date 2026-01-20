import BlogLandingPage from '@/components/BlogLandingPage/BlogLandingPage';
import { WEBSITE_URL } from '@/env';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';
import Script from 'next/script';
import React from 'react';

export const metadata = generatePageMetadata(pages['/blog']);

const page = () => {
    const blogStructuredData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": "#blog",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${WEBSITE_URL}/blog`
        },
        "headline": "Latest Blog Posts | OptigoApps",
        "description": "Explore our latest blog posts about web development, technology trends, and industry insights.",
        "publisher": {
            "@type": "Organization",
            "name": "OptigoApps",
            "logo": {
                "@type": "ImageObject",
                "url": `${WEBSITE_URL}/logo/logo1.jpg`
            }
        },
        "blogPost": [] // This will be populated dynamically with blog posts
    };

    return (
        <>
            <Script
                id="blog-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(blogStructuredData, null, 2)
                }}
            />
            <BlogLandingPage />
        </>
    );
};

export default page
