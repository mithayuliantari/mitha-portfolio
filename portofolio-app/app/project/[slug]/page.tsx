'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { projectsDetailData } from '@/constants/projects';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projectsDetailData.find((p) => p.slug === slug);

  if (!project) {
    return <div className="text-white p-12">Project not found.</div>;
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-16 sm:py-20 md:py-24 lg:py-32 text-white z-[25]">
      <div className="w-full max-w-6xl mx-auto bg-white/5 backdrop-blur-sm border border-purple-500/40 rounded-2xl shadow-lg px-4 sm:px-6 md:px-10 lg:px-16 py-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center mt-6">{project.title}</h1>

        <div className="w-full mb-10">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-12">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Description</h2>
            <p className="text-sm sm:text-base text-[#ADB7BE] leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Purpose Website</h2>
            <ul className="list-disc list-inside text-sm sm:text-base text-[#ADB7BE] leading-relaxed">
              {project.goals.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Website Section</h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-[#ADB7BE] leading-relaxed pl-4">
            {project.sections.map((section, i) => (
              <li key={i}>{section}</li>
            ))}
          </ul>
        </div>

        <div className="mb-12 grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-3 gap-6 text-sm sm:text-base text-[#ADB7BE]">
          <div><p><strong>Duration:</strong> {project.duration}</p></div>
          <div><p><strong>Created By:</strong> {project.createdBy}</p></div>
          <div><p><strong>Technologies:</strong> {project.technologies.join(', ')}</p></div>
        </div>

        <div className="mb-16 flex justify-center">
          <a
            href={project.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] text-sm sm:text-base"
          >
            Visit Website
          </a>
        </div>

        <h2 className="text-lg sm:text-xl font-semibold mb-4">Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.screenshots.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Screenshot ${i + 1}`}
              width={400}
              height={250}
              className="rounded-lg object-cover w-full h-auto"
            />
          ))}
        </div>
        <div className='mt-10' />
      </div>
    </section>
  );
}