import React from 'react'
import { pages } from '@/utils/pages';
import { generatePageMetadata } from '@/utils/HeadMeta';

export const metadata = generatePageMetadata(pages['/jewellery-manufacture/solutions']);

const page = () => {
    return (
        <div>
            Solutions
        </div>
    )
}

export default page
