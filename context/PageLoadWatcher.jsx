'use client'

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useLoading } from '@/context/LoadingContext';

const PageLoadWatcher = () => {

    const pathname = usePathname();
    const { complete } = useLoading();

    useEffect(() => {
        if (!pathname) return;

        // Complete the loading bar after small delay
        const timeout = setTimeout(() => {
            complete();
        }, 200); // Optional delay for smoother UX

        return () => clearTimeout(timeout);
    }, [pathname, complete]);

    return null;
}

export default PageLoadWatcher
