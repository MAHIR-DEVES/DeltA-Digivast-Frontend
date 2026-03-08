import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Heart,
  Bookmark,
  Twitter,
  Facebook,
  Linkedin,
  Mail,
} from 'lucide-react';

type Blog = {
  id: string;
  title: string;
  description: string;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

interface Props {
  params: Promise<{ id: string }>;
}

async function getBlog(id: string): Promise<Blog | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/blogs/${id}`,
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

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-[#6efd0b]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-[#6efd0b]" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Blog Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6efd0b] text-gray-900 rounded-xl font-semibold hover:bg-[#4fd100] transition-all duration-200"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

  // Calculate estimated read time (rough estimate based on description length)
  const readTime = Math.max(
    1,
    Math.ceil(blog.description.split(' ').length / 200),
  );

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#6efd0b] dark:hover:text-[#6efd0b] transition-colors group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to all articles
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category/Tag (optional - you can add category to your blog type) */}
        <div className="flex items-center gap-2 text-[#6efd0b] mb-4">
          <span className="text-sm font-medium uppercase tracking-wider">
            Article
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{formatDate(blog.createdAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{readTime} min read</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Last updated: {formatDate(blog.updatedAt)}</span>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between border-y border-gray-200 dark:border-gray-800 py-4 mb-8">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#6efd0b] dark:hover:text-[#6efd0b] transition-colors">
              <Heart size={18} />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#6efd0b] dark:hover:text-[#6efd0b] transition-colors">
              <Bookmark size={18} />
              <span className="text-sm">Save</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#6efd0b] dark:hover:text-[#6efd0b] transition-colors">
              <Share2 size={18} />
              <span className="text-sm">Share</span>
            </button>
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-500 hidden sm:block">
              Share:
            </span>
            <a
              href="#"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Twitter size={16} className="text-gray-600 dark:text-gray-400" />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Facebook
                size={16}
                className="text-gray-600 dark:text-gray-400"
              />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Linkedin
                size={16}
                className="text-gray-600 dark:text-gray-400"
              />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Mail size={16} className="text-gray-600 dark:text-gray-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {blog.imageUrl && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Description as main content */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            {blog.description}
          </p>
        </div>
      </section>
    </div>
  );
}
