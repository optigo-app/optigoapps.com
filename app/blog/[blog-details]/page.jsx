// app/blog/[blog-details]/page.jsx

import BlogsData from '@/public/BlogsData';
import BlogDetail from '@/components/BlogDetails/BlogDetails';
import { generatePageMetadata } from '@/utils/HeadMeta';
import { WEBSITE_URL } from '@/env';

// 👇 Generate dynamic metadata for each blog page
export async function generateMetadata({ params }) {
    const resolvedParams = await params; // ✅ Await it
    const blogSlug = resolvedParams['blog-details'];

    const blog = BlogsData.find(
        (b) =>
            b.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === blogSlug
    );

    if (!blog) {
        return {}; // default metadata if blog not found
    }

    const pageData = {
        title: blog.title,
        description: blog.description || blog.excerpt || '',
        url: `${WEBSITE_URL}/blog/${blogSlug}`,
        image: blog.image || `${WEBSITE_URL}/orail_logo.jpg`,
        keywords: blog.keywords || ['jewellery blog', 'Optigo Apps blog', 'industry insights'],
    };

    return generatePageMetadata(pageData);
}

// 👇 Generate all valid paths for static generation
export async function generateStaticParams() {
    return BlogsData.map((blog) => ({
        'blog-details': blog.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
    }));
}

// 👇 Blog detail page component
export default async function BlogDetailsPage({ params }) {
    const resolvedParams = await params; // ✅ Await it
    const blogSlug = resolvedParams['blog-details'];

    const blog = BlogsData.find(
        (b) =>
            b.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === blogSlug
    );

    return <BlogDetail blogSlug={blogSlug} blog={blog} />;
}
