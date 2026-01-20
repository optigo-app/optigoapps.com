'use client'

import { ArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ScrollTop = () => {

    const [showScroll, setShowScroll] = useState(false);

    // Show button after scrolling down
    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            {showScroll && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '30px',
                        right: '30px',
                        // backgroundColor: '#7c3aed',
                        background: 'var(--primary-background)',
                        color: 'white',
                        padding: '12px 12px',
                        borderRadius: '50%',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        cursor: 'pointer',
                        border: 'none',
                        zIndex: 50,
                    }}
                >
                    <ArrowUp />
                </button>
            )}
        </div>
    )
}

export default ScrollTop
