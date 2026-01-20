'use client'

import React, { useEffect, useState } from 'react';
import './BlogPageCards.scss';
import { useRouter } from 'next/navigation';
import BlogsData from '@/public/BlogsData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useHandleUrlNavigation } from '@/utils/useHandleUrlNavigation';

const BlogPageCards = ({ blogs }) => {
    const handleNavigation = useHandleUrlNavigation();

    const blogsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const startIndex = (currentPage - 1) * blogsPerPage;
    const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

    const handlePrev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    return (
        <section className="blogpagecards">
            <div className="blogpagecards__header">
                <div className="blogpagecards_head_title">
                    <h2>Search Results</h2>
                    <span>Displaying Results {blogs.length > 0 ? `${startIndex + 1} - ${Math.min(startIndex + blogsPerPage, blogs.length)}` : `0`} of {BlogsData.length}</span>
                </div>
            </div>

            <hr style={{ marginBlock: "2rem", border: "1px solid #c2c2c2" }} />

            <div className="blogpagecards__grid">
                {currentBlogs.length > 0 ? (
                    currentBlogs.map((item, index) => (
                        <Link href={`/blog/${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                            className="blogresource-card"
                            key={index}
                            onClick={(e) =>
                                handleNavigation(e, `/blog/${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`)
                            }
                        >
                            <div className="blogresource-card__imgDiv">
                                <img src={item.image} alt={item.title} className="blogresource-card__image" />
                            </div>
                            <div className="blogresource-card__content">
                                <h3 className="blogresource-card__title">{item.title}</h3>
                                {(item?.date || item?.duration) && (
                                    <span className="blogresource-card__date">
                                        {item?.date}
                                        {item?.date && item?.duration && <>&nbsp;&middot;&nbsp;</>}
                                        {item?.duration}
                                    </span>
                                )}
                                {item?.author !== "" && (
                                    <span className="blogresource-card__author">
                                        {item.author}
                                    </span>
                                )}
                                <p className="blogresource-card__desc">{item.description}</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="no-blogs-found">
                        <p>No blog posts found for your search.</p>
                    </div>
                )}
            </div>

            {/* Pagination Controls */}
            {blogs.length > blogsPerPage && (
                <div className="pagination-controls numbered">
                    <button
                        className="pagination-arrow"
                        onClick={() => {
                            setCurrentPage((prev) => Math.max(prev - 1, 1));
                        }}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter((page) => {
                            if (totalPages <= 5) return true;
                            if (currentPage <= 3) return page <= 4 || page === totalPages;
                            if (currentPage >= totalPages - 2) return page >= totalPages - 3 || page === 1;
                            return Math.abs(page - currentPage) <= 1 || page === 1 || page === totalPages;
                        })
                        .map((page, idx, arr) => {
                            const prevPage = arr[idx - 1];
                            const showEllipsis = prevPage && page - prevPage > 1;
                            return (
                                <React.Fragment key={page}>
                                    {showEllipsis && <span className="pagination-ellipsis">...</span>}
                                    <button
                                        className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                                        onClick={() => {
                                            setCurrentPage(page);
                                        }}
                                    >
                                        {page}
                                    </button>
                                </React.Fragment>
                            );
                        })}

                    <button
                        className="pagination-arrow"
                        onClick={() => {
                            setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                        }}
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight />
                    </button>
                </div>
            )}
        </section>
    );
};

export default BlogPageCards;
