'use client';

import React, { useEffect, useState } from 'react'
import './BlogLandingPage.scss';
import BlogHeroSection from '../BlogHeroSection/BlogHeroSection';
import BlogFilter from '../BlogFilter/BlogFilter';
import BlogPageCards from '../BlogPageCards/BlogPageCards';
import BlogsData from '@/public/BlogsData';

const BlogLandingPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState(BlogsData);

    useEffect(() => {
        if (!searchQuery.trim()) {
            setFilteredBlogs(BlogsData);
            return;
        }

        const filteredBlogs = BlogsData.filter((item) => {
            const lowerQuery = searchQuery.toLowerCase();
            return (
                item.title.toLowerCase().includes(lowerQuery) ||
                item.description.toLowerCase().includes(lowerQuery) ||
                item.date.toLowerCase().includes(lowerQuery) ||
                item.duration?.toLowerCase().includes(lowerQuery) ||
                item.author?.toLowerCase().includes(lowerQuery)
            );
        });
        setFilteredBlogs(filteredBlogs);
    }, [searchQuery]);

    return (
        <>
            <BlogHeroSection
                 inputValue={inputValue}
                 setInputValue={setInputValue}
                 onSearch={() => setSearchQuery(inputValue)}
            />
            {/* <BlogFilter /> */}
            <BlogPageCards blogs={filteredBlogs} />
        </>
    )
}

export default BlogLandingPage
