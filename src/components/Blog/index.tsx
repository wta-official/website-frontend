"use client";

import React, { useState, useMemo } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Images from "@/components/custome-ui/Images";
import Link from "next/link";
import Image from "next/image";

// Define types for the blog object
interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
}

// Define props for the BlogPage component
interface BlogPageProps {
  blogs: Blog[];
}

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogPage: React.FC<BlogPageProps> = ({ blogs }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Calculate total pages
  const totalPages = useMemo(
    () => Math.ceil(blogs.length / itemsPerPage),
    [blogs.length]
  );

  // Get blogs for the current page
  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return blogs.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage, blogs]);

  const handlePageChange = (page: number): void => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div>
      {/* Hero Section */}
      {paginatedBlogs[0] && (
        <Link href={`blogs/${paginatedBlogs[0].id}`}>
          <Images imageUrl={paginatedBlogs[0].image}>
            <div className="flex-grow w-full flex flex-col justify-end px-4 sm:px-6 md:px-12 lg:px-20 py-6">
              <div className="md:mb-6 space-y-2">
                <p className="space-x-2 text-sm md:text-base lg:text-lg text-gray-300">
                  <span>{formatDate(paginatedBlogs[0].date)}</span>
                  <span>.</span>
                  <span>{paginatedBlogs[0].author}</span>
                </p>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
                  {paginatedBlogs[0].title}
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-gray-300">
                  {paginatedBlogs[0].description}
                </p>
              </div>
            </div>
          </Images>
        </Link>
      )}

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 px-4 sm:px-6 md:px-12 lg:px-16 md:py-8">
        {paginatedBlogs.slice(1).map((post) => (
          <Link key={post.id} href={`blogs/${post.id}`} className="group">
            <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="my-4 space-y-2">
              <p className="space-x-2 text-xs sm:text-sm text-gray-300">
                <span>{post.date}</span>
                <span>.</span>
                <span>{post.author}</span>
              </p>
              <h1 className="text-base md:text-lg lg:text-xl font-bold">
                {post.title}
              </h1>
              <p className="text-sm md:text-base text-gray-300">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Section */}
      <Pagination className="my-8 flex justify-center">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
              aria-disabled={currentPage === 1}
              className={
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
              className={
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BlogPage;
