import React from 'react';
import BlogCard from '@/components/shared/Blog/blogCard';
import { getAllPosts } from '@/components/utils/markdown';

interface Blog {
    title: string;
    date: string;
    excerpt: string;
    coverImage: string;
    slug: string;
    detail: string;
    tag: string;
}

const BlogList: React.FC = () => {
    // Get all posts and map over them to ensure each field is a string
    const posts: Blog[] = getAllPosts(["title", "date", "excerpt", "coverImage", "slug", "detail", "tag"])
        .map(item => ({
            title: typeof item.title === 'string' ? item.title : String(item.title),
            date: typeof item.date === 'string' ? item.date : String(item.date),
            excerpt: typeof item.excerpt === 'string' ? item.excerpt : String(item.excerpt),
            coverImage: typeof item.coverImage === 'string' ? item.coverImage : String(item.coverImage),
            slug: typeof item.slug === 'string' ? item.slug : String(item.slug),
            detail: typeof item.detail === 'string' ? item.detail : String(item.detail),
            tag: typeof item.tag === 'string' ? item.tag : String(item.tag),
        }))

    return (
        <section className='pt-0!'>
            <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.map((blog, i) => (
                        <div key={i} className="w-full">
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogList;
