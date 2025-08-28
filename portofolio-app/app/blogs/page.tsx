import { Suspense } from "react";
import BlogsClient from "@/app/blogs/BlogsClient";

export default function BlogsPage() {
  return (
    <div className="min-h-[70vh] px-4 sm:px-6 md:px-12 lg:px-24 py-10 mt-2 mb-10 z-89">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 mt-20 text-center">
        All Blogs
      </h1>

      <Suspense fallback={<div className="flex justify-center items-center min-h-[40vh]">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>}>
        <BlogsClient />
      </Suspense>
    </div>
  );
}
