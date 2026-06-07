'use client';

import React from 'react';
import Image from 'next/image';
import {
  Code2,
  Zap,
  Globe,
  Smartphone,
  CheckCircle,
  Rocket,
  Users,
  Clock,
  Monitor,
  Server,
  ShoppingCart,
  Gauge,
  Shield,
  Eye,
} from 'lucide-react';
import Link from 'next/link';
import CtaSection from '@/components/module/shared/CtaSection';

export default function WebDevelopmentPage() {
  const services = [
    {
      icon: Globe,
      title: 'Custom Website Design',
      description:
        'Unique, brand-aligned designs that capture your vision and engage your target audience.',
      features: [
        'Custom UI/UX design',
        'Responsive layouts',
        'Interactive elements',
        'Brand integration',
        'Wireframing & prototyping',
        'User journey mapping',
      ],
      color: 'from-blue-500 to-cyan-500',
      stats: '100% custom designs',
    },
    {
      icon: Code2,
      title: 'Frontend Development',
      description:
        'Clean, efficient code using modern frameworks for fast, interactive user experiences.',
      features: [
        'React.js & Next.js',
        'Vue.js & Nuxt.js',
        'TypeScript',
        'Tailwind CSS',
        'Progressive Web Apps',
        'Animation & transitions',
      ],
      color: 'from-purple-500 to-pink-500',
      stats: 'Modern tech stack',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description:
        'Robust server-side solutions that power your applications with scalability and security.',
      features: [
        'Node.js & Express',
        'Python & Django',
        'PHP & Laravel',
        'RESTful APIs',
        'GraphQL',
        'Microservices',
      ],
      color: 'from-green-500 to-emerald-500',
      stats: '99.9% uptime',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description:
        'Powerful online stores with seamless shopping experiences and secure payments.',
      features: [
        'Custom e-commerce',
        'Shopify development',
        'WooCommerce',
        'Payment integration',
        'Inventory management',
        'Shopping cart optimization',
      ],
      color: 'from-orange-500 to-red-500',
      stats: '30% avg. sales increase',
    },
    {
      icon: Smartphone,
      title: 'Responsive Development',
      description:
        'Websites that look and perform perfectly on all devices – desktop, tablet, and mobile.',
      features: [
        'Mobile-first approach',
        'Touch-friendly interfaces',
        'Cross-browser compatibility',
        'Adaptive images',
        'Fast mobile loading',
        'Responsive testing',
      ],
      color: 'from-indigo-500 to-blue-500',
      stats: '100% responsive',
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description:
        'Lightning-fast websites that keep users engaged and improve search rankings.',
      features: [
        'Core Web Vitals',
        'Image optimization',
        'Code splitting',
        'Caching strategies',
        'CDN integration',
        'Load time reduction',
      ],
      color: 'from-pink-500 to-rose-500',
      stats: '90+ PageSpeed score',
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description:
        'Ongoing protection and updates to keep your website safe and running smoothly.',
      features: [
        'SSL certificates',
        'Security audits',
        'Regular backups',
        'Software updates',
        'Malware scanning',
        '24/7 monitoring',
      ],
      color: 'from-yellow-500 to-amber-500',
      stats: 'Bank-level security',
    },
    {
      icon: Zap,
      title: 'CMS Development',
      description:
        'Easy-to-manage content systems that put you in control of your website.',
      features: [
        'WordPress development',
        'Headless CMS',
        'Sanity.io',
        'Contentful',
        'Custom admin panels',
        'Easy content updates',
      ],
      color: 'from-teal-500 to-cyan-500',
      stats: 'User-friendly admin',
    },
  ];

  const stats = [
    { label: 'Websites Launched', value: '20+', icon: Globe },
    { label: 'Happy Clients', value: '15+', icon: Users },
    { label: 'Responsive Score', value: '100%', icon: Smartphone },
    { label: 'Uptime Support', value: '24/7', icon: Clock },
  ];

  const whyChooseUs = [
    {
      title: 'Modern Technologies',
      description:
        'We use the latest frameworks and tools to build fast, scalable websites.',
      icon: Code2,
    },
    {
      title: 'Mobile-First Approach',
      description:
        'Every site is built with mobile users in mind from the start.',
      icon: Smartphone,
    },
    {
      title: 'SEO Optimized',
      description:
        'Built-in best practices to help you rank higher in search results.',
      icon: Eye,
    },
    {
      title: 'Scalable Solutions',
      description:
        'Websites that grow with your business, handling increased traffic seamlessly.',
      icon: Rocket,
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Planning',
      description: 'Wireframing, sitemaps, and technology selection',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Visual design with your brand identity',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Coding with regular progress updates',
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Quality assurance across all devices',
    },
    {
      step: '05',
      title: 'Launch',
      description: 'Deployment and ongoing support',
    },
  ];

  return (
    <div className="min-h-screen  transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#FAFFF7] to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        {/* Premium Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#6efd0b02_25%,transparent_25%,transparent_75%,#6efd0b02_75%,#6efd0b02),linear-gradient(45deg,#6efd0b02_25%,transparent_25%,transparent_75%,#6efd0b02_75%,#6efd0b02)] bg-[size:60px_60px] bg-[position:0_0,30px_30px] opacity-30"></div>

        <div className="container relative mx-auto px-3 md:px-0 py-10 md:py-20 ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#6efd0b]/10 text-[#6efd0b] rounded-full text-sm font-medium mb-6">
                <Code2 size={16} />
                Web Design & Development — Rajshahi
              </span>

              <h1 className="text-2xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                For Rajshahi&apos;s Local Businesses:
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6efd0b] to-[#2e9e00]">
                  {' '}
                  Modern, Responsive & Scalable Websites
                </span>
              </h1>

              <p className=" text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We specialize in crafting modern, responsive, and scalable
                websites tailored to the unique needs of local businesses in
                Rajshahi. Our mission is to help you establish a strong online
                presence that drives results and connects you with your target
                audience effectively.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href={'/contact'}>
                  <button className="px-4 md:px-8 py-2 mdpy-4 bg-[#6efd0b] text-gray-900 rounded-xs font-bold hover:bg-[#4fd100]  shadow-lg shadow-[#6efd0b]/25 flex items-center gap-2 cursor-pointer">
                    <Monitor size={18} />
                    Launch Your Website Project →
                  </button>
                </Link>
              </div>

              <div className="mt-8 text-sm text-gray-500 dark:text-gray-500">
                <span className="bg-[#6efd0b]/20 text-[#6efd0b] px-3 py-1 rounded-full text-xs font-bold mr-2">
                  20+ Website launched In Rajshahi
                </span>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative rounded-xs overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000"
                  alt="Web Development"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6efd0b]/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Premium Bottom Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6efd0b]/30 to-transparent"></div>
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
      <section className="py-10 md:py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Web Services Do We Offer?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From small businesses to large enterprises — custom web solutions
              for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group  p-6 rounded-xs shadow-lg border border-gray-200 dark:border-gray-800 hover:border-[#6efd0b]/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xs flex items-center justify-center`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-[#6efd0b]/10 text-[#6efd0b] rounded-full text-xs font-bold">
                    {service.stats}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300  mb-4">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-300 "
                    >
                      <CheckCircle className="w-3 h-3 text-[#6efd0b]" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className=" ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className=" p-6 rounded-xs shadow-lg border border-gray-200 dark:border-gray-800 text-center hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-[#6efd0b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#6efd0b]" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-300  leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 md:py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            How We Work
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {process.map((item, index) => (
              <div
                key={index}
                className="p-6  rounded-xs border border-gray-200 dark:border-gray-800 shadow-sm"
              >
                <div className="text-4xl font-bold text-[#6efd0b] mb-2">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
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
