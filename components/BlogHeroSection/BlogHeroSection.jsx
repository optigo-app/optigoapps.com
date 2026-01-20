'use client';

import React from 'react';
import './BlogHeroSection.scss';
import { Search } from 'lucide-react';

const BlogHeroSection = ({ inputValue, setInputValue, onSearch }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(); // only update searchQuery when user submits
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className='blog-landing-page'>
            <div className="blog-hero-banner" style={{
                // backgroundImage: 'url(/bg1.webp)',
                backgroundImage: 'url(/Blog-Banner.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="hero-banner-content">
                    <p className="breadcrumb">Blogs</p>
                </div>

                {/* <form className="search-overlay-form" onSubmit={handleSubmit}>
                    <div className="search-overlay-input-wrapper">
                        <Search className="search-overlay-search-icon" />
                        <input
                            type="text"
                            placeholder="Search the blog"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="search-overlay-input"
                            autoFocus
                        />
                    </div>
                    <button type="submit" className="search-overlay-submit-btn">
                        Search
                    </button>
                </form> */}
            </div>
        </div>
    );
};

export default BlogHeroSection;
