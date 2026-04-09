'use client';

import Image from 'next/image';
import {
  Play,
  Camera,
  Film,
  Video,
  Clapperboard,
  Calendar,
  Users,
  Star,
  Phone,
  Mail,
  Award,
} from 'lucide-react';

export default function VideographyPage() {
  const services = [
    {
      icon: Film,
      title: 'Commercials',
      description:
        'High-impact commercial videos that tell your brand story and drive engagement.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Video,
      title: 'Event Coverage',
      description:
        'Professional coverage of weddings, conferences, concerts, and special events.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Camera,
      title: 'Corporate Videos',
      description:
        'Polished corporate content including interviews, testimonials, and company profiles.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Clapperboard,
      title: 'Creative Storytelling',
      description:
        'Artistic and narrative-driven videos that captivate and inspire audiences.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: Film },
    { label: 'Happy Clients', value: '300+', icon: Users },
    { label: 'Years Experience', value: '12+', icon: Award },
    { label: 'Awards Won', value: '25+', icon: Star },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director, Nike',
      content:
        'The team delivered exceptional quality. Our commercial exceeded expectations.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Michael Chen',
      role: 'CEO, Tech Innovators',
      content:
        'Professional, creative, and incredibly talented. They captured our brand perfectly.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Event Coordinator',
      content:
        'Our wedding video is absolutely beautiful. They captured every moment.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-black py-24">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#6efd0b]/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#6efd0b]/5 to-transparent"></div>

        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#6efd0b] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#6efd0b]/10 text-[#6efd0b] rounded-full text-sm font-medium mb-6">
                <Camera size={16} />
                Professional Video Production
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Bringing Your Vision to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6efd0b] to-[#2e9e00]">
                  {' '}
                  Life
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Professional video production services for commercials, events,
                corporate shoots, and creative storytelling.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#6efd0b] text-gray-900 rounded-xl font-semibold hover:bg-[#4fd100] transition flex items-center gap-2">
                  <Play size={18} />
                  Watch Showreel
                </button>

                <button className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold transition flex items-center gap-2">
                  <Calendar size={18} />
                  Book Consultation
                </button>
              </div>
            </div>

            {/* Video */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Video"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="w-20 h-20 bg-[#6efd0b] rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-gray-900 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#6efd0b]/10 rounded-xl mb-3">
                  <stat.icon className="w-5 h-5 text-[#6efd0b]" />
                </div>

                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Client Testimonials
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t.name}
                    </h4>

                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {t.role}
                    </p>
                  </div>
                </div>

                <div className="flex mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let&apos;s discuss your vision and create something amazing
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+880123456789"
              className="px-6 py-3 bg-[#6efd0b] text-gray-900 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call Us
            </a>

            <a
              href="mailto:info@agency.com"
              className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
