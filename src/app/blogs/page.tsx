import BlogPage from "@/components/Blog";
import React, { Suspense } from "react";
import { Metadata } from "next";
import NotFound from "../not-found";
import { fetchApi } from "@/utils/api";
import TriangleLoader from "@/components/custome-ui/Loader";

export const metadata: Metadata = {
  title: "Blog",
};

const Blog = async () => {
  try {
    // Fetching blog data
    const blogs = await fetchApi("blogs");

    // Handle case where blogs data is empty or not found
    if (!blogs || blogs.results.length === 0) {
      console.log("No blogs found.");
      return <NotFound />;
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
        <BlogPage blogs={blogs.results} />
      </Suspense>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);

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
