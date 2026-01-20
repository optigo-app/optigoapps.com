import React from 'react'
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/apps-and-ecommerce/apps']);

const page = () => {
    return (
        <div>
            Apps
        </div>
    )
}

export default page
