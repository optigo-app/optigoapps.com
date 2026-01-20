'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { findPathInContentMap } from '@/utils/breadcrumbUtils';
import { WEBSITE_URL } from '@/env';
import contentMap from '@/data/contentMap';

const BreadcrumbSchema = () => {
    const pathname = usePathname();
    const breadcrumbItems = findPathInContentMap(contentMap, pathname);

    // If no items found, return null
    if (!breadcrumbItems || breadcrumbItems.length <= 1) return null;

    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `${WEBSITE_URL}${item.url}`
        }))
    };

    return (
        <>
            {/* <nav
                className="text-sm py-4 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto"
                aria-label="Breadcrumb"
                itemScope
                itemType="https://schema.org/BreadcrumbList"
            >
                <ol className="flex flex-wrap items-center gap-2">
                    {breadcrumbItems.map((item, index) => (
                        <li
                            key={item.url}
                            className="flex items-center"
                            itemProp="itemListElement"
                            itemScope
                            itemType="https://schema.org/ListItem"
                        >
                            {index > 0 && (
                                <span className="mx-2 text-gray-400">/</span>
                            )}
                            {index === breadcrumbItems.length - 1 ? (
                                <span
                                    className="text-gray-600"
                                    itemProp="name"
                                >
                                    {item.name}
                                </span>
                            ) : (
                                <Link
                                    href={item.url}
                                    className="text-blue-600 hover:underline"
                                    itemProp="item"
                                >
                                    <span itemProp="name">{item.name}</span>
                                </Link>
                            )}
                            <meta itemProp="position" content={String(index + 1)} />
                        </li>
                    ))}
                </ol>
            </nav> */}

            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbStructuredData, null, 2)
                }}
            />
        </>
    );
};

export default BreadcrumbSchema;
