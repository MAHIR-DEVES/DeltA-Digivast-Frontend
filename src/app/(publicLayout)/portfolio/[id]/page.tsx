// src/app/(publicLayout)/portfolio/[id]/page.tsx
import Image from 'next/image';
import { ExternalLink, Calendar, Tag, ArrowLeft } from 'lucide-react';
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

async function getProject(id: string): Promise<Project | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/portfolio/${id}`,
      {
        cache: 'no-store',
      },
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json.data || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#6efd0b] text-gray-900 rounded-lg hover:bg-[#4fd100] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const isVideo =
    project.videoUrl &&
    (project.videoUrl.includes('youtube') ||
      project.videoUrl.includes('youtu.be') ||
      project.videoUrl.includes('vimeo'));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#6efd0b] dark:hover:text-[#6efd0b] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-[#6efd0b] mb-3">
            <Tag size={14} />
            <span className="text-sm font-medium">
              {project.category || 'Uncategorized'}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{formatDate(project.createdAt)}</span>
            </div>
          </div>
        </div>

        {/* Project Media */}
        {(project.imageUrl || project.videoUrl) && (
          <div className="mb-8 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
            {isVideo ? (
              <div className="aspect-video">
                <iframe
                  src={
                    project.videoUrl?.includes('youtu.be')
                      ? `https://www.youtube.com/embed/${project.videoUrl.split('/').pop()}`
                      : project.videoUrl?.includes('youtube')
                        ? project.videoUrl.replace('watch?v=', 'embed/')
                        : project.videoUrl
                  }
                  title={project.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            ) : (
              project.imageUrl && (
                <div className="relative aspect-video">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )
            )}
          </div>
        )}

        {/* Project Description */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            About this project
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Action Button */}
        <a
          href={project.videoUrl || project.imageUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#6efd0b] text-gray-900 rounded-lg hover:bg-[#4fd100] transition-colors font-medium"
        >
          <ExternalLink size={16} />
          View {isVideo ? 'Video' : 'Image'}
        </a>
      </div>
    </div>
  );
}
