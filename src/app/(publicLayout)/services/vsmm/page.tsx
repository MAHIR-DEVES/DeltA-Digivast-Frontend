'use client';

import React from 'react';
import Image from 'next/image';
import {
  Video,
  Film,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  Play,
  Heart,
  MessageCircle,
  Share2,
  Users,
  TrendingUp,
  Target,
  Sparkles,
  Rocket,
  Award,
  Clock,
  Mail,
  Phone,
  CheckCircle,
  ChevronRight,
  BarChart3,
  Zap,
  Camera,
  Edit3,
  Music,
} from 'lucide-react';

export default function VsmmPage() {
  const services = [
    {
      icon: Video,
      title: 'Video Production',
      description:
        'Professional video content that captures attention and tells your brand story effectively.',
      features: [
        'Commercials & promos',
        'Brand storytelling',
        'Product videos',
        'Testimonials',
        'Explainer videos',
        'Behind-the-scenes',
      ],
      color: 'from-blue-500 to-cyan-500',
      stats: '100+ videos produced',
    },
    {
      icon: Film,
      title: 'Short-Form Content',
      description:
        'Engaging short videos optimized for TikTok, Reels, and Shorts to maximize reach.',
      features: [
        'TikTok content',
        'Instagram Reels',
        'YouTube Shorts',
        'Trending concepts',
        'Daily content',
        'Viral strategies',
      ],
      color: 'from-purple-500 to-pink-500',
      stats: '2M+ monthly views',
    },
    {
      icon: Instagram,
      title: 'Instagram Marketing',
      description:
        'Complete Instagram management including posts, stories, and engagement strategies.',
      features: [
        'Content calendar',
        'Story highlights',
        'Reel production',
        'Hashtag strategy',
        'Engagement tactics',
        'Analytics tracking',
      ],
      color: 'from-pink-500 to-rose-500',
      stats: '50K+ followers grown',
    },
    {
      icon: Facebook,
      title: 'Facebook Marketing',
      description:
        'Build communities and drive engagement with strategic Facebook content and ads.',
      features: [
        'Page management',
        'Group strategies',
        'Facebook Ads',
        'Live videos',
        'Community building',
        'Insights & reporting',
      ],
      color: 'from-blue-600 to-blue-700',
      stats: '300% engagement',
    },
    {
      icon: Youtube,
      title: 'YouTube Marketing',
      description:
        'Grow your YouTube channel with optimized content, SEO, and audience engagement.',
      features: [
        'Channel strategy',
        'Video optimization',
        'Thumbnail design',
        'SEO for YouTube',
        'Audience growth',
        'Monetization help',
      ],
      color: 'from-red-500 to-red-600',
      stats: '1M+ subscribers',
    },
    {
      icon: Music,
      title: 'TikTok Marketing',
      description:
        'Trend-driven content and strategies to build your presence on the fastest-growing platform.',
      features: [
        'Trend analysis',
        'Content creation',
        'Hashtag challenges',
        'Influencer collabs',
        'Ad campaigns',
        'Viral potential',
      ],
      color: 'from-gray-800 to-gray-900',
      stats: '10M+ views',
    },
    {
      icon: Users,
      title: 'Community Management',
      description:
        'Active engagement with your audience to build loyal communities around your brand.',
      features: [
        'Daily engagement',
        'Comment responses',
        'DM management',
        'Crisis handling',
        'Brand advocacy',
        'Feedback collection',
      ],
      color: 'from-green-500 to-emerald-500',
      stats: '24/7 monitoring',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description:
        'Data-driven insights to measure performance and optimize your social media strategy.',
      features: [
        'Performance tracking',
        'Audience insights',
        'Competitor analysis',
        'ROI measurement',
        'Weekly reports',
        'Strategy optimization',
      ],
      color: 'from-orange-500 to-red-500',
      stats: 'Real-time data',
    },
  ];

  const stats = [
    { label: 'Videos Produced', value: '500+', icon: Video },
    { label: 'Social Followers', value: '2.5M+', icon: Users },
    { label: 'Monthly Views', value: '10M+', icon: Play },
    { label: 'Engagement Rate', value: '8.5%', icon: Heart },
  ];

  const platforms = [
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'text-pink-500',
      bg: 'bg-pink-100 dark:bg-pink-900/20',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'text-blue-600',
      bg: 'bg-blue-100 dark:bg-blue-900/20',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      color: 'text-red-600',
      bg: 'bg-red-100 dark:bg-red-900/20',
    },
    {
      name: 'TikTok',
      icon: Music,
      color: 'text-gray-900 dark:text-white',
      bg: 'bg-gray-100 dark:bg-black',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'text-blue-400',
      bg: 'bg-blue-100 dark:bg-blue-900/20',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'text-blue-700',
      bg: 'bg-blue-100 dark:bg-blue-900/20',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Trend-Driven Approach',
      description:
        'We stay on top of latest trends to keep your content relevant and engaging.',
      icon: Zap,
    },
    {
      title: 'Creative Excellence',
      description:
        'High-quality video production that stands out in crowded feeds.',
      icon: Camera,
    },
    {
      title: 'Data-Backed Strategy',
      description: 'Every decision is based on analytics and performance data.',
      icon: BarChart3,
    },
    {
      title: 'Consistent Growth',
      description:
        'Sustainable strategies that build long-term audience loyalty.',
      icon: TrendingUp,
    },
  ];

  const contentTypes = [
    { type: 'Short-form Videos', value: 'Reels, TikTok, Shorts' },
    { type: 'Long-form Content', value: 'YouTube, IGTV, Facebook' },
    { type: 'Live Streaming', value: 'Live videos, Webinars' },
    { type: 'Stories & Updates', value: 'Daily engagement' },
    { type: 'User Generated', value: 'Community content' },
    { type: 'Paid Ads', value: 'Targeted campaigns' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#6efd0b]/10 text-[#6efd0b] rounded-full text-sm font-medium mb-6">
                <Video size={16} />
                Video & Social Media Marketing
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Grow Your Brand with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6efd0b] to-[#2e9e00]">
                  {' '}
                  Video & Social Media
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Video & Social Media Marketing services to grow your brand
                visibility and engagement online. We create content that
                connects and converts.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#6efd0b] text-gray-900 rounded-xl font-semibold hover:bg-[#4fd100] transition-all duration-200 transform hover:scale-105 shadow-lg shadow-[#6efd0b]/25 flex items-center gap-2">
                  <Play size={18} />
                  Get Started
                </button>
                <button className="px-8 py-4 bg-gray-100 dark:bg-black text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700 flex items-center gap-2">
                  <Sparkles size={18} />
                  View Case Studies
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800"
                      ></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    150+ brands trust us
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-[#6efd0b] fill-[#6efd0b]" />
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    10M+ monthly reach
                  </span>
                </div>
              </div>

              {/* Platform Icons */}
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  Active on
                </span>
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-pink-500" />
                  <Facebook className="w-5 h-5 text-blue-600" />
                  <Youtube className="w-5 h-5 text-red-600" />
                  <Music className="w-5 h-5 text-gray-900 dark:text-white" />
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000"
                  alt="Social Media Marketing"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6efd0b]/20 to-transparent"></div>
              </div>

              {/* Floating Stats Card - Views */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-black rounded-xl shadow-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#6efd0b]/20 rounded-lg flex items-center justify-center">
                    <Play className="w-6 h-6 text-[#6efd0b]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Monthly Views
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      10M+
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card - Engagement */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-black rounded-xl shadow-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#6efd0b]/20 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[#6efd0b]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Engagement Rate
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      8.5%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 dark:bg-black py-16 border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#6efd0b]/10 rounded-xl mb-3">
                  <stat.icon className="w-5 h-5 text-[#6efd0b]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-8">
            We manage all major platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-4 py-3 ${platform.bg} rounded-xl`}
              >
                <platform.icon className={`w-5 h-5 ${platform.color}`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#6efd0b]/10 text-[#6efd0b] rounded-full text-sm font-medium mb-4">
              <Sparkles size={16} />
              Our Services
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Video & Social Media Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From content creation to community management – everything you
              need to succeed on social
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-black rounded-md shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="px-2 py-1 bg-[#6efd0b]/10 text-[#6efd0b] rounded-full text-xs font-medium">
                      {service.stats}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-1.5">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle className="w-3 h-3 text-[#6efd0b] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover effect shows more features */}
                  <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    {service.features.slice(4, 6).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 mt-1.5"
                      >
                        <CheckCircle className="w-3 h-3 text-[#6efd0b] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              What makes our video & social media services stand out
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#6efd0b]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#6efd0b]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Content We Create
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Diverse content formats tailored to each platform and your
                audience preferences.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {contentTypes.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-black p-4 rounded-xl border border-gray-200 dark:border-gray-700"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.type}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1000"
                  alt="Content Creation"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6efd0b]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              How we create and execute your social media strategy
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Strategy',
                description: 'Platform selection & content planning',
              },
              {
                step: '02',
                title: 'Creation',
                description: 'High-quality video & photo production',
              },
              {
                step: '03',
                title: 'Publishing',
                description: 'Scheduled posts & real-time engagement',
              },
              {
                step: '04',
                title: 'Analysis',
                description: 'Performance tracking & optimization',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-3xl font-bold text-[#6efd0b]/20 mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-[#6efd0b]">
                    <ChevronRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Grow Your Social Presence?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let's create video content and social strategies that get results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-[#6efd0b] text-gray-900 rounded-xl font-semibold hover:bg-[#4fd100] transition-all duration-200 transform hover:scale-105 shadow-lg shadow-[#6efd0b]/25 flex items-center justify-center gap-2">
              <Video size={18} />
              Start Your Campaign
            </button>
            <button className="px-8 py-4 bg-gray-100 dark:bg-black text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700 flex items-center justify-center gap-2">
              <MessageCircle size={18} />
              Free Consultation
            </button>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            No commitment · Strategy call included · Response within 24 hours
          </p>
        </div>
      </section>
    </div>
  );
}
