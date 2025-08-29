//app/blogs/BlogsClient.tsx
"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";
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

export default function BlogsClient() {
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

  const fetchData = useCallback(
    async (category: string = "all", signal?: AbortSignal) => {
      try {
        let url = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?per_page=20`;
        if (category !== "all") {
          url += `&category=${encodeURIComponent(category)}`;
        }

        const resBlogs = await fetch(url, { signal });
        const jsonBlogs = await resBlogs.json();
        setBlogs(Array.isArray(jsonBlogs) ? jsonBlogs : (jsonBlogs.data ?? []));


        if (categories.length === 0) {
          const resCats = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/categories`,
            { signal }
          );
          const jsonCats: Category[] = await resCats.json();
          setCategories(jsonCats);
        }
      } catch (e: unknown) {
        const error = e as Error;
        if (error.name === "AbortError") {
          // silent abort
        } else {
          setBlogs([]);
        }
      } finally {
        setLoading(false);
      }
    },
    [categories.length]
  );

    useEffect(() => {
    const controller = new AbortController();
    setSelectedCategory(categoryFromUrl);
    fetchData(categoryFromUrl, controller.signal);
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryFromUrl]);


  const handleCategoryClick = (slug: string) => {
    setSelectedCategory(slug);
    setLoading(true);
    router.replace(
      slug === "all"
        ? "/blogs"
        : `/blogs?category=${encodeURIComponent(slug)}`,
      { scroll: false }
    );
  };

  return (
    <>
      <div className="mb-6">
        <div className="flex gap-2 flex-wrap justify-center items-center relative z-89 px-2 sm:px-4">
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
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-28">
              {blogs.map((b) => (
                <div
                  key={b.id}
                  className="bg-gradient-to-b from-[#1a1330] backdrop-blur-xl border border-[#2a1b4d] rounded-xl overflow-hidden shadow-md hover:shadow-lg flex flex-col transition z-89 h-full"
                >
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

                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-white">
                      {b.title}
                    </h3>
                    <p className="text-[#ADB7BE] text-sm sm:text-base md:text-[17px] flex-1">
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
                        onClick={() =>
                          (window.location.href = `/blogs/${b.slug}`)
                        }
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
    </>
  );
}
