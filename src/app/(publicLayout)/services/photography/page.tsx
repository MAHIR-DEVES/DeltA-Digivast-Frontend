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
  Camera,
} from 'lucide-react';
import CtaSection from '@/components/module/shared/CtaSection';
import Image from 'next/image';

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
                  Professional Graphics Design Services
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                Rajshahi&apos;s Trusted Graphics Design Agency
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Professional graphics design services in Rajshahi. We create
                stunning visuals that elevate your brand and captivate your
                audience.
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
                    src={'/image/Graphic-Design-Services.jpeg'}
                    alt="Graphics Design Team"
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
