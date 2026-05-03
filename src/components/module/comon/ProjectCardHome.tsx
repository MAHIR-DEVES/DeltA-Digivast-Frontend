'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string | null;
  videoUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

type Props = {
  projects: Project[];
};

export default function ProjectCardHome({ projects }: Props) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Explore our latest work and creative projects
        </p>
      </div>
      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-3">
        {projects.slice(0, 6).map(project => (
          <Link
            key={project.id}
            href={`/portfolio/${project.id}`}
            className="group block bg-white dark:bg-black rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border hover:-translate-y-1"
          >
            {project.imageUrl ? (
              <div className="relative aspect-video overflow-hidden bg-black">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2 py-1 bg-[#6efd0b] text-gray-900 dark:text-gray-900 rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>
            ) : project.videoUrl ? (
              <div className="relative aspect-video bg-black overflow-hidden">
                <iframe
                  src={
                    project.videoUrl.includes('youtu.be')
                      ? `https://www.youtube.com/embed/${project.videoUrl.split('/').pop()}`
                      : project.videoUrl
                  }
                  title={project.title}
                  className="w-full h-full"
                  allowFullScreen
                  frameBorder="0"
                />
                <span className="absolute top-3 left-3 px-2 py-1 bg-[#6efd0b] text-gray-900 dark:text-gray-900 rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>
            ) : (
              <div className="relative aspect-video bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 overflow-hidden">
                <p className="text-sm font-medium">No Preview</p>
                <span className="absolute top-3 left-3 px-2 py-1 bg-[#6efd0b] text-gray-900 dark:text-gray-900 rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>
            )}

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#6efd0b] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
