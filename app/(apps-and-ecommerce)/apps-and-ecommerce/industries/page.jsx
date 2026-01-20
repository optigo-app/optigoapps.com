import React from 'react'
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce/industries']);

const page = () => {
    return (
        <div>
            Industries
        </div>
    )
}

export default page
