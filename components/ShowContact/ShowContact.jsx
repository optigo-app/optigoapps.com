'use client';

import { usePathname } from 'next/navigation';
import Contact from '../Contact/Contact';

export default function ShowContact() {
    const pathname = usePathname();

    const hideOnPaths = [
        '/',
        '/career',
        '/career-form',
        '/contactus',
        '/optigo-ai'
        // Add more paths here if needed
    ];

    const shouldHide = hideOnPaths.some((path) =>
        pathname === path || pathname.startsWith(`${path}/`)
    );

    if (shouldHide) return null;

    return <Contact />;
}
