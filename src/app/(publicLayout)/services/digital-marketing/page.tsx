'use client';
import React from 'react';
import Image from 'next/image';
import {
  TrendingUp,
  Search,
  Share2,
  BarChart3,
  Target,
  Users,
  CheckCircle,
  Sparkles,
  Rocket,
  Award,
  PieChart,
} from 'lucide-react';
import CtaSection from '@/components/module/shared/CtaSection';

export default function MarketingPage() {
  const services = [
    {
      icon: Target,
      title: '📘 Facebook Ads & Boost Management',
      description:
        'শুধু boost দিলেই হয় না — সঠিকভাবে করতে হয়। রাজশাহীর specific audience targeting, সঠিক content, সঠিক budget allocation — এই সব মিলিয়েই real result আসে। আমরা সেটাই করি।',
      features: [
        'Local audience targeting',
        'Budget optimization',
        'Content strategy',
        'Ad performance tracking',
      ],
      color: 'from-blue-500 to-cyan-500',
      stats: 'Real Result',
    },
    {
      icon: Share2,
      title: '📱 Social Media Marketing',
      description:
        'আপনার Facebook page ও Instagram-এ regular, engaging content। Post scheduling, caption writing, hashtag strategy — সব আমরা handle করি।',
      features: [
        'Daily posting schedule',
        'Caption writing',
        'Hashtag strategy',
        'Community management',
      ],
      color: 'from-purple-500 to-pink-500',
      stats: 'Organic Reach',
    },
    {
      icon: Search,
      title: '🎯 Targeted Audience Research',
      description:
        'রাজশাহীর কোন মানুষ আপনার customer হতে পারে — সেটা research করে বের করি। Age, location, interest — সব analyze করে campaign তৈরি হয়।',
      features: [
        'Customer behavior study',
        'Competitor analysis',
        'Interest analysis',
        'Location targeting',
      ],
      color: 'from-green-500 to-emerald-500',
      stats: 'Precision targeting',
    },
    {
      icon: BarChart3,
      title: '📈 Campaign Performance Tracking',
      description:
        'আপনার টাকা কোথায় যাচ্ছে, কত result আসছে — সব আপনি জানবেন। Regular performance report দিই।',
      features: [
        'Weekly performance reports',
        'Budget transparency',
        'ROI measurement',
        'Strategy refinement',
      ],
      color: 'from-orange-500 to-red-500',
      stats: 'Transparency',
    },
  ];

  const stats = [
    { label: 'Campaigns Managed', value: '100+', icon: Rocket },
    { label: 'Happy Clients', value: '80+', icon: Users },
    { label: 'Success Rate', value: '95%', icon: TrendingUp },
    { label: 'Years Experience', value: '1+', icon: Award },
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
    <div className="min-h-screen  transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#FAFFF7] to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        {/* Premium Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#6efd0b02_25%,transparent_25%,transparent_75%,#6efd0b02_75%,#6efd0b02),linear-gradient(45deg,#6efd0b02_25%,transparent_25%,transparent_75%,#6efd0b02_75%,#6efd0b02)] bg-[size:60px_60px] bg-[position:0_0,30px_30px] opacity-30"></div>
        <div className="container mx-auto px-4 md:px-0 py-10 md:py-20 ">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              {/* Premium Badge */}
              <div className="inline-flex">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6efd0b]/10 to-transparent border-l-4 border-[#6efd0b] rounded-r-lg text-sm font-medium text-lime-500 dark:text-[#6efd0b]">
                  <Sparkles size={16} />
                  Digital Marketing Agency — Rajshahi
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                Rajshahi&apos;s Trusted Digital Marketing Agency
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Facebook Ads management, social media marketing, and targeted
                audience research in Rajshahi. We help local businesses grow
                with data-backed campaigns that deliver real results.
              </p>
            </div>

            {/* Right Content - Premium Image Card */}
            <div className="relative">
              {/* Decorative blurred circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6efd0b]/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#2e9e00]/20 rounded-full blur-3xl"></div>

              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000"
                    alt="Digital Marketing Team"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6efd0b]/10 via-transparent to-transparent"></div>

                {/* Floating trust badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#6efd0b]/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-[#6efd0b]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-900 dark:text-white">
                        Trusted by 30+ Businesses
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-300">
                        in Rajshahi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Bottom Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6efd0b]/50 to-transparent"></div>

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6efd0b]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2e9e00]/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Stats Section */}
      <section className=" py-16 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#6efd0b]/10 rounded-xs mb-3">
                  <stat.icon className="w-5 h-5 text-[#6efd0b]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-10 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#6efd0b]/10 text-[#6efd0b] rounded-full text-sm font-medium mb-4">
              <Target size={16} />
              Our Services
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Digital Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Data-driven strategies that deliver measurable results across all
              digital channels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group  rounded-xs shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:-translate-y-1 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xs flex items-center justify-center group-hover:scale-110 transition-transform`}
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
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
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
      <section className="pt-10 md:pt-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us — Not Another Agency
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className=" p-6 rounded-xs shadow-lg border border-gray-200 dark:border-gray-800 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#6efd0b]/10 rounded-xs flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#6efd0b]" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
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
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className=" p-6 rounded-xs shadow-lg border border-gray-200 dark:border-gray-800 h-full">
                  <div className="text-4xl font-bold text-[#6efd0b] mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
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
      {/* CTA section */}
      <CtaSection></CtaSection>
    </div>
  );
}
