'use client';
import React from 'react';

import { Contact2 } from '@/components/layouts/contact2';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-black py-24">
        {/* Subtle side gradients */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#6efd0b]/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#6efd0b]/10 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Create Something
            <span className="block text-[#6efd0b]">Amazing Together</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-8">
            Have a project in mind? We'd love to hear about it. Drop us a line
            and we'll get back to you within 24 hours.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { label: 'Projects Completed', value: '500+' },
              { label: 'Happy Clients', value: '300+' },
              { label: 'Team Members', value: '50+' },
              { label: 'Years Experience', value: '10+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
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

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <Contact2></Contact2>
      </section>

      {/* Map */}
      <section className="relative h-[550px]">
        <div className="absolute inset-0  z-10 pointer-events-none"></div>
        <iframe
          className="w-full h-full"
          src="https://maps.google.com/maps?q=rajshahi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          title="Office Location"
        ></iframe>
      </section>
    </div>
  );
}
