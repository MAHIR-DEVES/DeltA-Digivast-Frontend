'use client';

import React from 'react';
import Image from 'next/image';
import {
  Code2,
  Globe,
  Smartphone,
  Zap,
  Palette,
  ShoppingCart,
  Shield,
  Gauge,
  Users,
  Rocket,
  CheckCircle,
  Sparkles,
  Award,
  Clock,
  Mail,
  Phone,
  ChevronRight,
  Server,
  Wifi,
  Lock,
  Eye,
} from 'lucide-react';

export default function WebDevelopment() {
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
    { label: 'Websites Launched', value: '250+', icon: Globe },
    { label: 'Happy Clients', value: '200+', icon: Users },
    { label: 'Years Experience', value: '12+', icon: Award },
    { label: 'Avg. Load Time', value: '<1.5s', icon: Gauge },
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

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PHP', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
    { name: 'WordPress', category: 'CMS' },
    { name: 'Shopify', category: 'E-commerce' },
    { name: 'Tailwind', category: 'CSS' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'AWS', category: 'Cloud' },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We learn about your business, goals, and target audience',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Wireframing, sitemaps, and technology selection',
    },
    {
      step: '03',
      title: 'Design',
      description: 'Visual design with your brand identity',
    },
    {
      step: '04',
      title: 'Development',
      description: 'Coding with regular progress updates',
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Quality assurance across all devices',
    },
    {
      step: '06',
      title: 'Launch',
      description: 'Deployment and ongoing support',
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
                <Code2 size={16} />
                Web Design & Development
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Modern, Responsive &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6efd0b] to-[#2e9e00]">
                  Scalable Websites
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Modern, responsive, and scalable website design and development
                tailored to your business needs. We build digital experiences
                that drive results.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#6efd0b] text-gray-900 rounded-xl font-semibold hover:bg-[#4fd100] transition-all duration-200 transform hover:scale-105 shadow-lg shadow-[#6efd0b]/25 flex items-center gap-2">
                  <Rocket size={18} />
                  Start Your Project
                </button>
                <button className="px-8 py-4 bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700 flex items-center gap-2">
                  <Eye size={18} />
                  View Our Work
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
                    Trusted by 200+ businesses
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Gauge className="w-4 h-4 text-[#6efd0b]" />
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Average load time: 1.2s
                  </span>
                </div>
              </div>

              {/* Technologies Strip */}
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  Built with
                </span>
                <div className="flex items-center gap-4">
                  <div className="text-gray-400 dark:text-gray-600 font-bold text-sm">
                    React
                  </div>
                  <div className="text-gray-400 dark:text-gray-600 font-bold text-sm">
                    Next.js
                  </div>
                  <div className="text-gray-400 dark:text-gray-600 font-bold text-sm">
                    Node.js
                  </div>
                  <div className="text-gray-400 dark:text-gray-600 font-bold text-sm">
                    Tailwind
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000"
                  alt="Web Development Team"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6efd0b]/20 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#6efd0b]/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-[#6efd0b]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Websites Launched
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      250+
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Performance Card */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#6efd0b]/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#6efd0b]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      PageSpeed Score
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      95+
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

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#6efd0b]/10 text-[#6efd0b] rounded-full text-sm font-medium mb-4">
              <Sparkles size={16} />
              Our Services
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Web Development Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From concept to launch, we deliver websites that perform and
              impress
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
                  <div className="space-y-1.5 mb-3">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400"
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
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              What makes our web development services stand out
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-3"
              >
                <div className="w-12 h-12 bg-[#6efd0b]/20 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#6efd0b]" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
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

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A glimpse of our toolkit for modern web development
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-xl shadow p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-200"
              >
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  {tech.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Step-by-step approach to delivering quality websites
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300"
              >
                <div className="text-[#6efd0b] font-bold text-xl mb-2">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-[#6efd0b]/10 dark:bg-[#6efd0b]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Contact us today and let’s build something amazing together.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="px-8 py-4 bg-[#6efd0b] text-gray-900 rounded-xl font-semibold hover:bg-[#4fd100] transition-all duration-200 transform hover:scale-105 shadow-lg shadow-[#6efd0b]/25 flex items-center gap-2">
              <Rocket size={18} />
              Get Started
            </button>
            <button className="px-8 py-4 bg-white dark:bg-black text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 border border-gray-200 dark:border-gray-700 flex items-center gap-2">
              <Mail size={18} />
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
