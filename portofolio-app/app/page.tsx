import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import AboutSection from "@/components/main/AboutSection";
import ProjectsSection from "@/components/main/ProjectsSection";
import EmailSection from "@/components/main/EmailSection";
import Footer from "@/components/main/Footer";
import BlogSection from "@/components/main/BlogSection";

export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://laravel-blog-api.up.railway.app";
  const res = await fetch(`${apiUrl}/api/blogs`, { cache: "no-store" });
  const blogs = res.ok ? await res.json() : [];

  return (
    <main className="h-full w-full">
      {/* Hero tidak diberi padding container */}
      <Hero />

      {/* Bagian lainnya diberi padding */}
      <div className="flex flex-col gap-20 px-4 sm:px-6 md:px-12 lg:px-24 mx-auto">
        <Skills />
        <Encryption />
        <AboutSection />
        <ProjectsSection />
        
        {/* Kirim blogs ke BlogSection */}
        <BlogSection blogs={blogs} />

        <EmailSection />
      </div>

      <Footer />
    </main>
  );
}
