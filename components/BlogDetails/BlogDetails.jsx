import React from 'react';
import './BlogDetails.scss';
import BlogsData from '@/public/BlogsData';
import Image from 'next/image';
import { Calendar, Clock, User } from 'lucide-react';

const BlogDetail = ({ blogSlug }) => {
    const blog = BlogsData.find(b => b.slug === blogSlug);

    if (!blog) {
        return <p className="not-found">Blog not found.</p>;
    }

    return (
        <div className="blog-detail">
            {/* <div className="blog-hero-banner" style={{
                backgroundImage: `url(/bg1.webp)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="hero-banner-content">
                    <p className="tagline">Optigo Blog</p>
                    <p className="breadcrumb">{blog.title}</p>
                </div>
            </div> */}
            <div className="blog-hero-banner" style={{
                backgroundImage: 'url(/bg.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="hero-banner-content">
                    <p className="breadcrumb">Optigo Blog</p>
                    <h1 className="heading">{blog.title}</h1>
                    <h4 className="subheading">{blog.subheading}</h4>
                </div>

                <div className="hero-banner-image">
                    <Image
                        src={blog.featuredImage}
                        alt={blog.title}
                        height={350}
                        width={350}
                        unoptimized
                    />
                </div>
            </div>

            <div className="blog-detail__content">
                <div className="blog-detail__main">
                    <div className="blog-detail__meta">
                        {blog.author && <span><User size={30} /> <strong>{blog.author}</strong></span>}
                        {blog.date && <span><Calendar size={30} /> {blog.date}</span>}
                        {blog.duration && <span><Clock size={30} /> {blog.duration}</span>}
                    </div>

                    {/* Render raw HTML content safely */}
                    <div
                        className="blog-detail__body"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
