import React from 'react'
import Contact from '@/components/Contact/Contact'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages["/contactus"])

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  )
}

export default page
