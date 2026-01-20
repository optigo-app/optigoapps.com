"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import LoadingBar from "react-top-loading-bar";

export default function TopLoadingBar() {
    const pathname = usePathname();
    const ref = useRef(null);

    useEffect(() => {
        if (!pathname) return;
        ref.current?.continuousStart();

        const timeout = setTimeout(() => {
            ref.current?.complete();
        }, 600); // simulate loading delay

        return () => clearTimeout(timeout);
    }, [pathname]);

    return <LoadingBar color="#f11946" height={3} ref={ref} />;
}
