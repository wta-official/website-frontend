import Images from '@/components/custome-ui/Images';
import TriangleLoader from '@/components/custome-ui/Loader';
import { BASE_URL } from '@/utils/api';
import { Metadata } from 'next';
import React, { Suspense } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `Blogs: ${resolvedParams.id}`,
  };
}

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const formatContent = (content: string): string => {
  const sections = content.split('\n\n'); // Assuming double newlines as section separators
  return sections
    .map((section, index) => {
      if (index === 0) {
        return `<p class=\"text-xl font-semibold\">${section}</p>`;
      }
      if (section.startsWith('1.')) {
        const items = section
          .split('\n')
          .map((item) => `<li>${item.slice(2)}</li>`);
        return `<ol class=\"list-decimal ml-6\">${items.join('')}</ol>`;
      }
      if (section.startsWith('-')) {
        const items = section
          .split('\n')
          .map((item) => `<li>${item.slice(1)}</li>`);
        return `<ul class=\"list-disc ml-6\">${items.join('')}</ul>`;
      }
      if (section.includes('"')) {
        return `<blockquote class=\"border-l-4 pl-4 italic text-gray-400\">${section}</blockquote>`;
      }
      return `<p>${section}</p>`;
    })
    .join('');
};

const Blog = async ({ params }: Props) => {
  try {
    const resolvedParams = await params;

    const response = await fetch(`${BASE_URL}/blogs/${resolvedParams.id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const blog = await response.json();

    return (
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-32">
            <TriangleLoader
              visible={true}
              height={80}
              width={80}
              color="#6785A5"
            />
          </div>
        }
      >
        <Images imageUrl={blog.image}>
          <div className="flex-grow w-full flex flex-col justify-end px-4 sm:px-6 md:px-12 lg:px-20 py-6">
            <div className="md:mb-6 space-y-2">
              <p className="space-x-2 text-sm md:text-base lg:text-lg text-gray-300">
                <span>{formatDate(blog.created_at)}</span>
                <span>.</span>
                <span>{blog.author}</span>
              </p>
              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
                {blog.title}
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-gray-300">
                {blog.description}
              </p>
            </div>
          </div>
        </Images>

        <section className="prose prose-lg lg:prose-xl mx-auto p-10 md:p-16 lg:p-20">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blog.content}
          </ReactMarkdown>
        </section>

        {/* <section className="prose prose-lg lg:prose-xl mx-auto p-10 md:p-16 lg:p-20">
          <div
            dangerouslySetInnerHTML={{ __html: formatContent(blog.content) }}
          />
        </section> */}
      </Suspense>
    );
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return (
      <div className="flex justify-center items-center min-h-screen">
        <TriangleLoader visible={true} height={80} width={80} color="#6785A5" />
      </div>
    );
  }
};

export default Blog;
