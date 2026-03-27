import Link from 'next/link';
import {
  Calendar,
  ArrowLeft,
  Clock,
  Users,
  BookOpen,
  DollarSign,
  User,
  Tag,
  Star,
  Play,
  Award,
  ChevronRight,
} from 'lucide-react';
import Image from 'next/image';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  students: number;
  price: number;
  status: 'PUBLISHED' | 'DRAFT' | 'ARCHIVED';
  instructor: string;
  startDate?: string;
  imageUrl?: string;
}

interface Props {
  params: Promise<{ id: string }>;
}

async function getCourses(id: string): Promise<Course | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/courses/${id}`,
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

export default async function CoursesDetailPage({ params }: Props) {
  const { id } = await params;
  const course = await getCourses(id);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#6efd0b]/20 to-blue-500/20 rounded-full" />
            <div className="relative w-32 h-32 bg-gradient-to-br from-[#6efd0b] to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-8 transform rotate-6 shadow-2xl">
              <BookOpen className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Course Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
            Oops! The course you're looking for doesn't exist or has been
            removed.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#6efd0b] text-gray-900 rounded-2xl font-semibold hover:bg-[#4fd100] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft size={20} />
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }

  // Safe formatter with fallback values
  const formatNumber = (num: number | undefined | null) => {
    if (num === undefined || num === null) return '0';
    return num.toLocaleString();
  };

  const formatDate = (date: string | undefined) => {
    if (!date) return 'Not scheduled';
    try {
      return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return 'Invalid date';
    }
  };

  return (
    <div className="min-h-screen  dark:bg-black">
      {/* Hero Section with Modern Design */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02] bg-[size:50px_50px]" /> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#6efd0b] transition-colors mb-8 group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Courses
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Status Badge */}
              <div className="flex flex-wrap gap-3">
                <span
                  className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${
                    course.status === 'PUBLISHED'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : course.status === 'DRAFT'
                        ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                  }`}
                >
                  {course.status === 'PUBLISHED'
                    ? '● Live Now'
                    : course.status === 'DRAFT'
                      ? '● In Development'
                      : '● Archived'}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded-full text-sm font-medium">
                  <Tag size={14} />
                  {course.category || 'Uncategorized'}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {course.title || 'Untitled Course'}
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {course.description || 'No description available'}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="p-2 bg-[#6efd0b]/10 rounded-lg">
                    <Clock size={20} className="text-[#6efd0b]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Duration
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {course.duration || 'TBD'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="p-2 bg-[#6efd0b]/10 rounded-lg">
                    <Users size={20} className="text-[#6efd0b]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Students
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {formatNumber(course.students)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="p-2 bg-[#6efd0b]/10 rounded-lg">
                    <User size={20} className="text-[#6efd0b]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Instructor
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {course.instructor || 'Unknown'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="p-2 bg-[#6efd0b]/10 rounded-lg">
                    <Calendar size={20} className="text-[#6efd0b]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Start Date
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {formatDate(course.startDate)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Course Price
                  </p>
                  <div className="flex items-baseline gap-1">
                    {/* <DollarSign size={32} className="text-[#6efd0b]" /> */}
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {course.price !== undefined && course.price !== null
                        ? course.price
                        : '0'}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">Tk</span>
                  </div>
                </div>
                {/* <button
                  className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${
                    course.status === 'PUBLISHED'
                      ? 'bg-gradient-to-r from-[#6efd0b] to-green-500 text-gray-900 hover:scale-105 shadow-lg hover:shadow-xl'
                      : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={course.status !== 'PUBLISHED'}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {course.status === 'PUBLISHED' ? (
                      <>
                        Enroll Now
                        <ChevronRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    ) : (
                      'Coming Soon'
                    )}
                  </span>
                  {course.status === 'PUBLISHED' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4fd100] to-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button> */}
              </div>
            </div>

            {/* Right Content - Image */}

            <div className="relative w-full h-80 lg:h-[28rem] rounded-md overflow-hidden shadow-lg">
              {course.imageUrl ? (
                <Image
                  src={course.imageUrl}
                  alt={course.title || 'Course preview'}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center p-12">
                  <BookOpen
                    size={80}
                    className="text-gray-400 dark:text-gray-600 mb-4"
                  />
                  <p className="text-gray-500 dark:text-gray-400">
                    Course preview image
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Course Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[#6efd0b]/10 rounded-xl flex items-center justify-center mb-4">
              <Play size={24} className="text-[#6efd0b]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Learn at Your Pace
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Self-paced learning with lifetime access to all course materials
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[#6efd0b]/10 rounded-xl flex items-center justify-center mb-4">
              <Star size={24} className="text-[#6efd0b]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Expert Instruction
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Learn from industry experts with years of real-world experience
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[#6efd0b]/10 rounded-xl flex items-center justify-center mb-4">
              <Award size={24} className="text-[#6efd0b]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Certificate of Completion
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Earn a certificate to showcase your new skills
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
