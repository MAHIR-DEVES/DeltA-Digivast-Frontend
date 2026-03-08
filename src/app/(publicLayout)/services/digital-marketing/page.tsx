'use client';
import React from 'react';
import Image from 'next/image';
import {
  TrendingUp,
  Search,
  Share2,
  MousePointer,
  BarChart3,
  Target,
  Users,
  Globe,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Sparkles,
  Rocket,
  Award,
  Clock,
  PieChart,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  ChevronRight,
} from 'lucide-react';

export default function MarketingPage() {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description:
        "Boost your website's visibility on search engines with our proven SEO strategies. We help you rank higher and drive organic traffic.",
      features: [
        'Keyword research & strategy',
        'On-page optimization',
        'Technical SEO audit',
        'Link building campaigns',
        'Local SEO optimization',
        'Performance tracking',
      ],
      color: 'from-blue-500 to-cyan-500',
      stats: '200% avg. traffic increase',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description:
        'Build a strong social media presence across platforms. Engage your audience and grow your brand community.',
      features: [
        'Platform strategy (FB, IG, LI, Twitter)',
        'Content creation & scheduling',
        'Community management',
        'Paid social campaigns',
        'Influencer partnerships',
        'Analytics & reporting',
      ],
      color: 'from-purple-500 to-pink-500',
      stats: '10k+ avg. monthly reach',
    },
    {
      icon: MousePointer,
      title: 'Paid Advertising',
      description:
        'Maximize ROI with targeted paid campaigns across Google Ads, social media, and display networks.',
      features: [
        'Google Ads (Search & Display)',
        'Social media advertising',
        'Retargeting campaigns',
        'Budget optimization',
        'A/B testing',
        'Conversion tracking',
      ],
      color: 'from-green-500 to-emerald-500',
      stats: '3.5x avg. ROAS',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description:
        'Data-driven insights to measure performance and optimize your marketing strategies for better results.',
      features: [
        'Custom dashboard setup',
        'Conversion tracking',
        'User behavior analysis',
        'ROI measurement',
        'Weekly performance reports',
        'Competitor analysis',
      ],
      color: 'from-orange-500 to-red-500',
      stats: 'Real-time tracking',
    },
    {
      icon: Target,
      title: 'Content Marketing',
      description:
        'Engaging content that tells your brand story and drives customer action across all channels.',
      features: [
        'Blog posts & articles',
        'Video content strategy',
        'Infographics',
        'Email newsletters',
        'Case studies',
        'Whitepapers',
      ],
      color: 'from-indigo-500 to-blue-500',
      stats: '300% engagement boost',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description:
        'Nurture leads and retain customers with personalized email campaigns that convert.',
      features: [
        'Campaign strategy',
        'Email automation',
        'List segmentation',
        'A/B testing',
        'Performance analytics',
        'Newsletter design',
      ],
      color: 'from-pink-500 to-rose-500',
      stats: '25% avg. open rate',
    },
  ];

  const stats = [
    { label: 'Campaigns Managed', value: '500+', icon: Rocket },
    { label: 'Revenue Generated', value: '$50M+', icon: TrendingUp },
    { label: 'Happy Clients', value: '300+', icon: Users },
    { label: 'Years Experience', value: '10+', icon: Award },
  ];

  const whyChooseUs = [
    {
      title: 'Data-Driven Approach',
      description:
        'Every decision is backed by analytics and real-time data to ensure optimal results.',
      icon: BarChart3,
    },
    {
      title: 'Certified Experts',
      description:
        'Our team holds certifications from Google, Facebook, and HubSpot.',
      icon: Award,
    },
    {
      title: 'Custom Strategies',
      description:
        'Tailored marketing plans designed specifically for your business goals.',
      icon: Target,
    },
    {
      title: 'Transparent Reporting',
      description:
        'Regular, detailed reports that show exactly where your money is going.',
      icon: PieChart,
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your business, goals, and target audience',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Custom marketing plan developed for your specific needs',
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Campaigns launched and optimized for maximum performance',
    },
    {
      step: '04',
      title: 'Analysis',
      description: 'Regular reporting and strategy refinement based on data',
    },
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
                <Sparkles size={16} />
                Digital Marketing Agency
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Result-Driven
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6efd0b] to-[#2e9e00]">
                  {' '}
                  Digital Marketing
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Result-driven digital marketing strategies including SEO, social
                media marketing, and paid advertising. We help businesses grow
                with data-backed campaigns.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#6efd0b] text-gray-900 rounded-md font-semibold hover:bg-[#4fd100] transition-all duration-200 transform hover:scale-105 shadow-lg shadow-[#6efd0b]/25 flex items-center gap-2">
                  <Rocket size={18} />
                  Get Free Consultation
                </button>
                <button className="px-8 py-4 bg-gray-100 dark:bg-black text-gray-700 dark:text-gray-300 rounded-md font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700 flex items-center gap-2">
                  <BarChart3 size={18} />
                  View Case Studies
                </button>
              </div>

              {/* Trust Badges */}
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
                    Trusted by 300+ brands
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-[#6efd0b]" />
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    200+ campaigns running
                  </span>
                </div>
              </div>

              {/* Partner Logos */}
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  Trusted Partners
                </span>
                <div className="flex items-center gap-4">
                  <div className="text-gray-400 dark:text-gray-600 font-bold text-sm">
                    Google
                  </div>
                  <div className="text-gray-400 dark:text-gray-600 font-bold text-sm">
                    Meta
                  </div>
                  <div className="text-gray-400 dark:text-gray-600 font-bold text-sm">
                    HubSpot
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000"
                  alt="Digital Marketing Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6efd0b]/20 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-black rounded-md shadow-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#6efd0b]/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#6efd0b]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Average ROI
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      320%
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Platform Card */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-black rounded-md shadow-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    <Facebook className="w-6 h-6 text-blue-600" />
                    <Instagram className="w-6 h-6 text-pink-600" />
                    <Linkedin className="w-6 h-6 text-blue-700" />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    All Platforms
                  </span>
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
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#6efd0b]/10 rounded-md mb-3">
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

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#6efd0b]/10 text-[#6efd0b] rounded-full text-sm font-medium mb-4">
              <Target size={16} />
              Our Services
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Digital Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Data-driven strategies that deliver measurable results across all
              digital channels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-black rounded-md shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-md flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-[#6efd0b]/10 text-[#6efd0b] rounded-full text-xs font-medium">
                      {service.stats}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 text-[#6efd0b] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Features */}
                  <div className="space-y-2 mt-2 pt-2 border-t border-gray-100 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    {service.features.slice(4, 6).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 text-[#6efd0b] flex-shrink-0" />
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
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              What makes our digital marketing services stand out
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black p-6 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#6efd0b]/10 rounded-md flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-black p-6 rounded-md shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-4xl font-bold text-[#6efd0b] mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
                {index !== process.length - 1 && (
                  <div className="absolute top-1/2 right-[-12px] w-8 h-1 bg-[#6efd0b] transform -translate-y-1/2 hidden md:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
