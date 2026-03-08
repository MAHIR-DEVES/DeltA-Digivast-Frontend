'use client';

import React from 'react';
import Image from 'next/image';
import {
  Camera,
  Sparkles,
  Calendar,
  Users,
  Star,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Package,
  Heart,
  Briefcase,
  PartyPopper,
  ShoppingBag,
  Users2,
  Image as ImageIcon,
  ChevronRight,
} from 'lucide-react';

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
    { label: 'Years Experience', value: '12+', icon: Award },
    { label: 'Happy Clients', value: '850+', icon: Users },
    { label: 'Photos Taken', value: '50K+', icon: Camera },
    { label: 'Events Covered', value: '300+', icon: Calendar },
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
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-black py-24">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#6efd0b]/5 to-transparent dark:from-[#6efd0b]/10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#6efd0b]/5 to-transparent dark:from-[#6efd0b]/10"></div>

        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#6efd0b] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#6efd0b]/10 text-[#6efd0b] rounded-full text-sm font-medium mb-6">
            <Camera size={16} />
            Professional Photography Services
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Capturing Life's
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6efd0b] to-[#2e9e00]">
              {' '}
              Beautiful Moments
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-400 mb-10">
            High-quality photography services including product, event,
            corporate, and lifestyle shoots. We turn ordinary moments into
            extraordinary memories.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-[#6efd0b] text-gray-900 rounded-md font-semibold hover:bg-[#4fd100] transition-all duration-200 transform hover:scale-105 shadow-lg shadow-[#6efd0b]/25 flex items-center gap-2">
              <Camera size={18} />
              Book a Session
            </button>
            <button className="px-8 py-4 bg-gray-100 dark:bg-black text-gray-700 dark:text-gray-300 rounded-md font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700 flex items-center gap-2">
              <ImageIcon size={18} />
              View Portfolio
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
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
                Trusted by 850+ clients
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                (4.9/5 from 300+ reviews)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-black py-16 border-y border-gray-200 dark:border-gray-700">
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
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#6efd0b]/10 text-[#6efd0b] rounded-full text-sm font-medium mb-4">
              <Sparkles size={16} />
              Our Services
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Photography Services We Offer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional photography tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-black p-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <CheckCircle className="w-4 h-4 text-[#6efd0b]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-4 text-[#6efd0b] hover:text-[#4fd100] font-medium text-sm flex items-center gap-1 transition-colors">
                  Learn More <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              What sets our photography services apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black p-6 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="w-14 h-14 bg-[#6efd0b]/10 rounded-md flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Simple and straightforward process from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your vision, requirements, and goals',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'We create a detailed shot list and schedule',
              },
              {
                step: '03',
                title: 'Photoshoot',
                description: 'Professional photography session',
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Edited photos delivered within 48-72 hours',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-black p-6 rounded-md shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-4xl font-bold text-[#6efd0b]/20 mb-4">
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

      {/* Pricing Note */}
      <section className="py-12 bg-[#6efd0b]/5 dark:bg-[#6efd0b]/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Package className="w-12 h-12 text-[#6efd0b] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Custom Packages Available
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Every project is unique. Contact us for a personalized quote
            tailored to your specific needs.
          </p>
          <button className="px-6 py-3 bg-[#6efd0b] text-gray-900 rounded-md font-semibold hover:bg-[#4fd100] transition-all duration-200">
            Request a Quote
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Capture Your Moments?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Let's discuss your photography needs. Get in touch with us
                  today for a free consultation.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-[#6efd0b]" />
                    <span>+880 1234 567890</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-[#6efd0b]" />
                    <span>photography@agency.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-[#6efd0b]" />
                    <span>123 Creative Agency Street, Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6efd0b]/50"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6efd0b]/50"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6efd0b]/50"
                  ></textarea>
                  <button className="w-full py-3 px-6 bg-[#6efd0b] text-gray-900 font-semibold rounded-md hover:bg-[#4fd100] transition-all duration-200">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
