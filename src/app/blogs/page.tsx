import BlogPage from '@/components/Blog';
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import NotFound from '../not-found';
import { fetchApi } from '@/utils/api';
import TriangleLoader from '@/components/custome-ui/Loader';

export const metadata: Metadata = {
  title: 'Blog',
};

const Blog = async () => {
  const page = 1;
  try {
    // Fetching blog data
    const blogs = await fetchApi(`blogs/?page=${page}`);
    const totalPages =
      blogs.count % 10 === 0
        ? Math.floor(blogs.count / 10)
        : Math.floor(blogs.count / 10) + 1;

    // Handle case where blogs data is empty or not found
    if (!blogs || blogs.results.length === 0) {
      console.log('No blogs found.');
      return (
        <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center text-white">
          <div className="text-center">
            {/* Icon */}
            <div className="mx-auto mb-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold mb-2">No Blogs Found</h1>

            {/* Message */}
            <p className="text-gray-400">
              It looks like there are no blogs available at the moment. Check
              back later!
            </p>
          </div>
        </div>
      );
    }

    return (
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <TriangleLoader
              visible={true}
              height={80}
              width={80}
              color="#6785A5"
            />
          </div>
        }
      >
        {/* Render the BlogPage component with fetched data */}
        <BlogPage blogs={blogs.results} totalPages={totalPages} />
      </Suspense>
    );
  } catch (error) {
    console.error('Error fetching blog data:', error);

    // Render a user-friendly error message on failure
    return (
      <div className="flex justify-center items-center min-h-screen text-center">
        <div>
          <div className="pb-10 flex justify-center">
            <TriangleLoader
              visible={true}
              height={80}
              width={80}
              color="#6785A5"
            />
          </div>
          <h1 className="text-2xl font-bold mb-4">Error Loading Blogs</h1>
          <p className="text-lg">
            Oops! Something went wrong while fetching the blog data. Please try
            refreshing the page or check back later.
          </p>
        </div>
      </div>
    );
  }
};

export default Blog;
