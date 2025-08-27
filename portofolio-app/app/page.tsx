import Hero from "@/components/main/Hero";
import Skills from "@/components/main/CircleLayout";
import AboutSection from "@/components/main/AboutSection";
import ProjectsSection from "@/components/main/ProjectsSection";
import EmailSection from "@/components/main/EmailSection";
import Footer from "@/components/main/Footer";
import BlogSection from "@/components/main/BlogSection";

export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL!;
  const res = await fetch(`${apiUrl}/api/blogs?per_page=9`, { cache: "no-store" });
  const json = res.ok ? await res.json() : { data: [] };
  const blogs = json.data ?? [];

  return (
    <main className="h-full w-full">
      <Hero />
      <div className="flex flex-col gap-20 px-4 sm:px-6 md:px-12 lg:px-24 mx-auto">
        <AboutSection />
        <Skills />
        <ProjectsSection />
        <BlogSection blogs={blogs} />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
