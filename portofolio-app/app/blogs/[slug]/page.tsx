
import Link from "next/link";
import { CalendarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type BlogDetail = {
  title: string;
  slug: string;
  content: string;
  image: string | null;
  category: { name: string; slug: string };
  tags: { name: string; slug: string }[];
  created_at: string;
};

type Props = {
  params: {
    slug: string;
  };
};

async function getBlog(slug: string): Promise<BlogDetail> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
}

export default async function Page({ params }: Props) {
  const { slug } = params;
  const data = await getBlog(slug);


  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 md:py-24 lg:py-32 text-white z-[25]">
      <div className="w-full max-w-5xl mx-auto bg-white/5 backdrop-blur-sm border border-purple-500/40 rounded-2xl shadow-lg px-4 sm:px-6 md:px-10 lg:px-16 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl mt-16 font-bold text-white">
            {data.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 mt-4 text-gray-400 text-sm">
            <CalendarIcon className="w-4 h-4" />
            {new Date(data.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            <Link
              href={`/blogs?category=${data.category.slug}`}
              className="welcome-box border border-[#7042f88b] text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-sm px-2 py-1 rounded"
            >
              {data.category.name}
            </Link>
          </div>

          {data.image && (
            <Image
              src={data.image}
              alt={data.title}
              width={800}
              height={500}
              className="w-full h-auto rounded-xl border border-gray-700 mt-10"
            />
          )}

          <div
            className="max-w-3xl mx-auto mt-6 text-white prose prose-invert prose-li:marker:text-white prose-ol:list-decimal prose-ul:list-disc text-sm md:text-base lg:text-lg"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />

          {data.tags.length > 0 && (
            <>
              <div className="text-center mt-20 mb-2 text-gray-400 font-semibold">
                #Tag
              </div>
              <div className="flex justify-center flex-wrap gap-2 mb-10">
                {data.tags.map((tag) => (
                  <span
                    key={tag.slug}
                    className="welcome-box border border-[#7042f88b] text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-sm px-2 py-1 rounded"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </>
          )}

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10">
            <Link
              href="/blogs"
              className="relative inline-flex z-[89] items-center mt-6 gap-2 pr-2 bg-[#7042f8] text-white font-semibold rounded-md shadow-md hover:bg-[#541ee3] transition-all duration-300 w-fit"
            >
              <span className="flex items-center justify-center w-8 h-10 bg-white text-[#7042f8] font-bold rounded-md shadow">
                ←
              </span>
              <span>All Blogs</span>
            </Link>

            <Link
              href={`/blogs?category=${data.category.slug}`}
              className="relative inline-flex z-[89] items-center gap-2 pr-2 bg-[#7042f8] text-white font-semibold rounded-md shadow-md hover:bg-[#541ee3] transition-all duration-300 w-fit"
            >
              <span className="flex items-center justify-center w-8 h-10 bg-white text-[#7042f8] font-bold rounded-md shadow">
                →
              </span>
              <span>More in {data.category.name}</span>
            </Link>
          </div>

          <div className="mt-20" />
        </div>
      </div>
    </section>
  );
}