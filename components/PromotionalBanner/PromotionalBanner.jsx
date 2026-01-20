'use client';

import React, { useEffect, useState } from 'react';
import './PromotionalBanner.scss';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Link from 'next/link';
import { useHandleUrlNavigation } from '@/utils/useHandleUrlNavigation';

const PromotionalBanner = () => {
    const [visible, setVisible] = useState(false);
    const handleNavigation = useHandleUrlNavigation();

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 120000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setVisible(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <Dialog open={visible} onOpenChange={setVisible}>
            <DialogContent className="promo-modal-overlay hide-close-button">
                <VisuallyHidden>
                    <DialogTitle>Promotional Offer</DialogTitle>
                </VisuallyHidden>

                <div className="promo-modal">
                    <button className="close-btn" onClick={() => setVisible(false)}>×</button>
                    <img src="/promo.webp" alt="Offer Jewellery" className="promo-image" />
                    <h2 className="promo-title">Turn Browsers into Buyers with Procatalog</h2>
                    <p className="promo-text">
                        Showcase designs digitally, sync with ERP, and sell smarter.
                    </p>
                    <Link href="/apps-and-ecommerce/apps/b2b-and-b2c-catalog-sharing/" onClick={(e) => { handleNavigation(e, "/apps-and-ecommerce/apps/b2b-and-b2c-catalog-sharing/"); setVisible(false) }} className="promo-cta">DISCOVER NOW</Link>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PromotionalBanner;
