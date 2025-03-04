import React from 'react';
import HorizontalScroll from './HorizontalScroll';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { BASE_URL } from '@/utils/api';

// Define the shape of the individual blog post
interface Blog {
  id: number;
  title: string;
  image: string;
}

// Define the structure of the response from the API
interface BlogsApiResponse {
  results: Blog[];
}

const News = async () => {
  try {
    // Fetch the blogs data

    const response = await fetch(`${BASE_URL}/blogs/?page=1`, {
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const { results: blogs }: BlogsApiResponse = await response.json();

    // Handle case when no blogs are returned
    if (!blogs || blogs.length === 0) {
      return (
        <section className="p-6 sm:p-8 lg:p-16 text-white">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6">In the news</h2>
          <p className="text-lg">
            No news articles available at the moment. Please check back later.
          </p>
        </section>
      );
    }

    return (
      <section className="p-6 sm:p-8 lg:p-16 text-white">
        <h2 className="text-2xl lg:text-4xl font-bold mb-6">In the news</h2>

        <HorizontalScroll>
          {blogs.map((article) => (
            <div
              key={article.id}
              className="max-w-[calc(75%-1rem)] sm:max-w-[calc(50%-1rem)] lg:max-w-[calc(35%-1rem)] flex-shrink-0 snap-start overflow-hidden min-h-full"
            >
              <Link
                href={`/blogs/${article.id}`}
                passHref
                className="group block"
              >
                <Image
                  src={article.image}
                  alt={article.title || 'News article image'}
                  width={400}
                  height={250}
                  className="w-full h-96 md:min-w-[600px] object-cover rounded-md transition-transform group-hover:scale-105"
                />
                <div className="p-3 sm:p-4 space-y-4">
                  <h4 className="text-lg md:text-xl font-semibold line-clamp-2">
                    {article.title}
                  </h4>
                  <span className="flex items-center text-lg hover:underline">
                    <span>Read more</span> <ArrowRight className="ml-1" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </HorizontalScroll>
      </section>
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: any) {
    return (
      <section className="p-6 sm:p-8 lg:p-16 text-white">
        <h2 className="text-2xl lg:text-4xl font-bold mb-6">In the news</h2>
        <p className="text-lg text-red-500">
          Failed to load news articles. Please try again later.
        </p>
      </section>
    );
  }
};

export default News;
