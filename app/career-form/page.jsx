import React from 'react'
import './page.scss';
import CareerForm from '@/components/CareerForm.jsx/CareerForm'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages["/career-form"])

const page = () => {
    return (
        <CareerForm />
    )
}

export default page
