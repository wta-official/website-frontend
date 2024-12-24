import BlogPage from '@/components/Blog'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blog",
};

const Blog: React.FC = () => {
  return (
    <BlogPage />
  )
}

export default Blog