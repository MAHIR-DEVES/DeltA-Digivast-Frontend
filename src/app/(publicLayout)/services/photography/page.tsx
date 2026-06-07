'use client';

import React from 'react';
import {
  Sparkles,
  Calendar,
  Users,
  Award,
  Clock,
  CheckCircle,
  Package,
  Heart,
  Briefcase,
  PartyPopper,
  ShoppingBag,
  Users2,
  Palette,
  Layout,
  ArrowUpRight,
  Camera,
} from 'lucide-react';
import CtaSection from '@/components/module/shared/CtaSection';

export default function PhotographyPage() {
  const services = [
    {
      icon: ShoppingBag,
      title: 'Product Photography',
      description:
        'High-quality product shots for e-commerce, catalogs, and marketing materials. We make your products look their absolute best.',
      features: [
        'White background shots',
        'Lifestyle product photos',
        '360-degree views',
        'Fast turnaround',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Calendar,
      title: 'Event Photography',
      description:
        'Capture every moment of your special events with professional coverage that tells your story.',
      features: [
        'Corporate events',
        'Conferences & seminars',
        'Product launches',
        'Award ceremonies',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Briefcase,
      title: 'Corporate Photography',
      description:
        'Professional imagery for your business including headshots, office environments, and team photos.',
      features: [
        'Executive portraits',
        'Team photos',
        'Office environment',
        'Brand storytelling',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Heart,
      title: 'Lifestyle Photography',
      description:
        "Authentic, candid shots that capture real moments and tell your brand's human story.",
      features: [
        'Brand lifestyle',
        'Fashion shoots',
        'Family portraits',
        'Authentic moments',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: PartyPopper,
      title: 'Wedding Photography',
      description:
        'Beautiful, timeless wedding photography that preserves your special day forever.',
      features: [
        'Engagement sessions',
        'Full-day coverage',
        'Second shooter',
        'Wedding albums',
      ],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Users2,
      title: 'Portrait Photography',
      description:
        'Stunning portraits for individuals, families, and professionals in our studio or on location.',
      features: [
        'Studio portraits',
        'Outdoor sessions',
        'Family portraits',
        'Professional headshots',
      ],
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  const stats = [
    { label: 'Years Experience', value: '1+', icon: Award },
    { label: 'Happy Clients', value: '80+', icon: Users },
    { label: 'Graphic Designs', value: '500+', icon: Palette },
    { label: 'Logo Designs', value: '40+', icon: Layout },
  ];

  const whyChooseUs = [
    {
      title: 'Professional Equipment',
      description:
        'We use state-of-the-art cameras and lighting equipment for the highest quality results.',
      icon: Camera,
    },
    {
      title: 'Experienced Team',
      description:
        'Our photographers have years of experience across multiple photography genres.',
      icon: Award,
    },
    {
      title: 'Quick Turnaround',
      description:
        'Get your edited photos within 48-72 hours, ready for immediate use.',
      icon: Clock,
    },
    {
      title: 'Custom Packages',
      description:
        'Flexible packages tailored to your specific needs and budget.',
      icon: Package,
    },
  ];

  return (
    <div className="min-h-screen  transition-colors duration-300">
      {/* Hero Section  */}
      <section className="relative bg-[#FAFFF7] dark:bg-gray-950 overflow-hidden ">
        {/* Premium Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6efd0b]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6efd0b]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6efd0b]/[0.02] rounded-full blur-3xl"></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6efd0b08_1px,transparent_1px),linear-gradient(to_bottom,#6efd0b08_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative px-4 sm:px-6 lg:px-8 py-10 md:py-28 lg:py-36">
          <div className="text-center">
            {/* Premium Badge with Animation */}
            <div className="inline-flex mb-8 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-[#6efd0b]/20 blur-xl rounded-full group-hover:blur-2xl transition-all duration-500"></div>
                <span className="relative inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-[#6efd0b]/30 rounded-full text-sm font-medium text-[#2e9e00] dark:text-[#6efd0b] shadow-lg">
                  <Sparkles size={14} className="text-[#6efd0b]" />
                  Professional Graphics Design
                  <ArrowUpRight size={14} className="opacity-70" />
                </span>
              </div>
            </div>
            {/* Premium Responsive Heading */}
            <div className="mb-4 md:mb-8">
              <h1 className="font-bold tracking-tight leading-[1.1] text-center">
                <span className="block text-gray-800 dark:text-gray-100 text-xl sm:text-4xl md:text-5xl lg:text-6xl">
                  আপনার Brand-এর জন্য Creative
                </span>

                <span className="block mt-2 text-xl sm:text-5xl md:text-6xl">
                  <span className="bg-gradient-to-r from-[#6efd0b] via-[#8bff3a] to-[#2e9e00] bg-clip-text text-transparent">
                    Graphics Design
                  </span>
                </span>
              </h1>
            </div>

            {/* Premium Description */}
            <p className="text-gray-600 dark:text-gray-300 text-base text-sm md:text-xl max-w-2xl mx-auto leading-relaxed md:mb-10">
              We create stunning graphics that elevate your brand and captivate
              your audience. From logos to marketing materials, our designs make
              a lasting impression.
            </p>
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
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#6efd0b]/10 rounded-md mb-3">
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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#6efd0b]/10 text-[#6efd0b] rounded-full text-sm font-medium mb-4">
              <Sparkles size={16} />
              Our Services
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              GRAPHICS SERVICES WE OFFER
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group  p-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-300 dark:border-gray-800 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-[#6efd0b]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              What sets our graphics services apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className=" p-6 rounded-xs shadow-lg border border-gray-200 dark:border-gray-800 text-center"
              >
                <div className="w-14 h-14 bg-[#6efd0b]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#6efd0b]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10 md:py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                title: 'Project Brief',
                description:
                  'Your requirements, goals, and vision for the design project. The more details you provide, the better we can tailor our designs to your needs.',
              },
              {
                step: '02',
                title: 'Concept Design',
                description:
                  'Our design team creates initial concepts based on your brief. We present these concepts to you for feedback and refinement.',
              },
              {
                step: '03',
                title: 'Revisions & Finalization',
                description:
                  'Based on your feedback, we make revisions to the design. We work closely with you to ensure the final design meets your expectations.',
              },
              {
                step: '04',
                title: 'Final Delivery',
                description:
                  'If the design is to your liking, we will deliver all file formats (AI, EPS, PNG, PDF) and high-quality versions for your use.',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className=" p-6 rounded-xs shadow-lg border border-gray-200 dark:border-gray-800">
                  <div className="text-4xl font-bold text-[#6efd0b] mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
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
