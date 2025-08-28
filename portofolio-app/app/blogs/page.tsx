"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
// import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { CalendarIcon } from "@heroicons/react/24/outline";

type BlogItem = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  image: string | null;
  created_at: string;
  category?: { name: string; slug: string };
  tags?: { name: string; slug: string }[];
};

type Category = { name: string; slug: string };

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true);

  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryFromUrl = useMemo(
    () => searchParams.get("category") ?? "all",
    [searchParams]
  );

  const toArray = <T,>(payload: any): T[] => {
    if (Array.isArray(payload)) return payload as T[];
    if (Array.isArray(payload?.data)) return payload.data as T[];
    if (payload?.data && typeof payload.data === "object") return [];
    return [];
  };

  async function fetchData(category: string = "all", signal?: AbortSignal) {
    try {
      // setLoading(true);
      let url = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?per_page=20`;
      if (category !== "all") {
        url += `&category=${encodeURIComponent(category)}`;
      }

      const resBlogs = await fetch(url, { signal });
      const jsonBlogs = await resBlogs.json();
      setBlogs(toArray<BlogItem>(jsonBlogs));

      if (categories.length === 0) {
        const resCats = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/categories`,
          { signal }
        );
        const jsonCats = await resCats.json();
        setCategories(toArray<Category>(jsonCats));
      }
    } catch (e: any) {
      if (e?.name === "AbortError") {
      }else{
        setBlogs([]);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    setSelectedCategory(categoryFromUrl);
    fetchData(categoryFromUrl, controller.signal);
    return () => 
    {
      controller.abort();
    };
  }, [categoryFromUrl]);

  const handleCategoryClick = (slug: string) => {
    setSelectedCategory(slug);
    setLoading(true);
    // fetchData(slug);
    router.replace(slug === "all" ? "/blogs" : `/blogs?category=${encodeURIComponent(slug)}`, {
      scroll: false,
    });
  };

  return (
    <div className="min-h-[70vh] px-4 sm:px-6 md:px-12 lg:px-24 py-10 mt-2 mb-10 z-89">

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 mt-20 text-center">
        All Blogs
      </h1>

      <div className="mb-6">
        <div className="flex gap-2 flex-wrap justify-center items-center relative z-89">
          <button
            onClick={() => handleCategoryClick("all")}
            className={`px-3 py-2 cursor-pointer rounded transition ${
              selectedCategory === "all"
                ? "bg-[#7042f8]"
                : "bg-gray-700 hover:bg-gray-600"
            } text-white text-sm`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => handleCategoryClick(cat.slug)}
              className={`px-3 py-2 cursor-pointer rounded transition ${
                selectedCategory === cat.slug
                  ? "bg-[#7042f8]"
                  : "bg-gray-700 hover:bg-gray-600"
              } text-white text-sm`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>  

      {loading ? (
        <div className="flex justify-center items-center min-h-[40vh]">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>


          {blogs.length === 0 ? (
            <h2 className="text-gray-400 font-bold text-center text-2xl mt-40">
              No blogs found.
            </h2>
          ) : (
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-28">
              {blogs.map((b) => (
                <div key={b.id} className="bg-gradient-to-b from-[#1a1330] backdrop-blur-xl border border-[#2a1b4d] rounded-xl overflow-hidden shadow-md hover:shadow-lg flex flex-col transition z-89">
                  {b.image ? (
                    <Image
                      src={b.image}
                      alt={b.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-800 flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center text-gray-400 text-sm mb-2">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {new Date(b.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                      {b.title}
                    </h3>
                    <p className="text-[#ADB7BE] text-sm md:text-base flex-1">
                      {b.excerpt ?? ""}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {b.tags?.map((tag) => (
                        <span
                          key={tag.slug}
                          className="welcome-box border border-[#7042f88b] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-sm px-2 py-1 rounded"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4">
                      <button
                        onClick={() => window.location.href = `/blogs/${b.slug}`}
                        className="text-blue-400 hover:text-blue-300 font-medium cursor-pointer relative z-89"
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

    </div>
  );
}
