// app/sitemap.js

export const dynamic = "force-static";

import { WEBSITE_URL } from '@/env';
import BlogsData from '@/public/BlogsData';
import jobData from "@/public/jobsOpenings";
import fs from 'fs';
import path from 'path';

// console.log(BlogsData);

async function getBlogSlugs() {
    try {
        return BlogsData.map(blog => ({
            slug: blog.slug,
            lastModified: blog.date ? new Date(blog.date).toISOString() : new Date().toISOString()
        }));
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}

async function getCareerSlugs() {
    try {
        return jobData.map(job => ({
            slug: job.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
            lastModified: new Date().toISOString()
        }));
    } catch (error) {
        console.error('Error fetching career posts:', error);
        return [];
    }
}

export default async function sitemap() {
    const routesPath = path.join(process.cwd(), 'routes.txt');
    const staticRoutes = fs.readFileSync(routesPath, 'utf8')
        .split('\n')
        .filter(Boolean)
        .map(route => route.trim());

    // Add home route if not present
    if (!staticRoutes.includes('/')) {
        staticRoutes.unshift('/');
    }

    // Get dynamic routes
    const [blogSlugs, careerSlugs] = await Promise.all([
        getBlogSlugs(),
        getCareerSlugs()
    ]);

    // Generate sitemap entries for all routes
    const allRoutes = [
        ...staticRoutes.map(route => ({
            url: route,
            lastModified: new Date(),
            changeFrequency: route === '/' ? 'daily' : 'weekly',
            priority: route === '/' ? 1.0 : 0.7,
        })),

        ...blogSlugs.map(post => ({
            url: `/blog/${post.slug}`,
            lastModified: post.lastModified ? new Date(post.lastModified) : new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        })),

        ...careerSlugs.map(post => ({
            url: `/career/${post.slug}`,
            lastModified: post.lastModified ? new Date(post.lastModified) : new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        }))
    ];

    // Process and return all routes
    return allRoutes.map(({ url, ...rest }) => ({
        url: `${WEBSITE_URL}${url.startsWith('/') ? '' : '/'}${url}`.replace(/&/g, '&amp;'),
        ...rest
    }));
}
