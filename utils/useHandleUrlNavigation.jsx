'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLoading } from '@/context/LoadingContext';

export const isSamePath = (a, b) =>
    a.replace(/\/+$/, '') === b.replace(/\/+$/, '');

export const useHandleUrlNavigation = () => {
    const pathname = usePathname();
    const { start, complete } = useLoading();
    const router = useRouter();

    const handleNavigation = (e, url, delay = 300) => {
        e.preventDefault();
        start();

        if (!isSamePath(url, pathname)) {
            router.push(url);
        } else {
            setTimeout(() => {
                complete();
            }, delay);
        }
    };

    return handleNavigation;
};
