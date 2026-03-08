import React from 'react';
import Image from 'next/image';
import {
  Users,
  Target,
  Award,
  Heart,
  Play,
  Camera,
  Code,
  TrendingUp,
} from 'lucide-react';

type TeamMember = {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
  designation: string;
  skills: string;
  experience: number;
};

async function getTeam(): Promise<TeamMember[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users`,
    {
      cache: 'no-store',
    },
  );

  const data = await res.json();

  return data.data;
}

export default async function AboutUs() {
  const team = await getTeam();

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description:
        'We push boundaries and embrace new technologies to deliver cutting-edge solutions.',
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description:
        'Our team pours heart and soul into every project, ensuring exceptional results.',
    },
    {
      icon: Award,
      title: 'Excellence Always',
      description:
        'We never settle for good when great is possible. Quality is our signature.',
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description:
        'Your success is our success. We build lasting relationships through trust.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-black pt-5 md:mt-0 md:py-32">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#6efd0b]/5 to-transparent dark:from-[#6efd0b]/10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#6efd0b]/5 to-transparent dark:from-[#6efd0b]/10"></div>

        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-800/30 dark:to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-800/30 dark:to-transparent"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-72 h-72 bg-[#6efd0b]/5 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 -right-20 w-72 h-72 bg-[#4fd100]/5 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#6efd0b]/10 text-[#6efd0b] rounded-full text-sm font-medium mb-6">
            Welcome to Our Agency
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            We Create Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6efd0b] to-[#2e9e00]">
              Experiences That Matter
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-400 mb-10">
            We help brands grow with creative design, powerful marketing
            strategies, and modern digital solutions that drive real results.
          </p>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="bg-gray-50 dark:bg-black py-16 border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed', icon: Briefcase },
              { number: '300+', label: 'Happy Clients', icon: Users },
              { number: '10+', label: 'Years Experience', icon: Award },
              { number: team.length, label: 'Team Members', icon: Star },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#6efd0b]/10 rounded-xl mb-3">
                  <stat.icon className="w-5 h-5 text-[#6efd0b]" />
                </div>

                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.number}
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#6efd0b] font-semibold text-sm uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
                We're More Than Just a
                <span className="text-[#6efd0b]"> Creative Agency</span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Our agency specializes in videography, photography, digital
                marketing, and web development. We work with businesses to
                create powerful digital experiences that attract customers and
                grow revenue.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                With a talented team of designers, developers, and marketing
                strategists, we bring ideas to life and help brands stand out in
                the digital world.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Camera, label: 'Photography' },
                  { icon: Play, label: 'Videography' },
                  { icon: TrendingUp, label: 'Marketing' },
                  { icon: Code, label: 'Development' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <div className="p-2 bg-[#6efd0b]/10 rounded-lg">
                      <item.icon className="w-4 h-4 text-[#6efd0b]" />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000"
                  alt="agency team"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6efd0b]/20 to-transparent"></div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#6efd0b]/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#4fd100]/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black p-4 md:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-[#6efd0b]/10 w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <value.icon className="w-5 h-5 md:w-6 md:h-6 text-[#6efd0b]" />
                </div>

                <h3 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">
                  {value.title}
                </h3>

                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (API DATA) */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#6efd0b] font-semibold text-sm uppercase tracking-wider">
              Our People
            </span>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              Meet the Team
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-400">
              The talented people behind our success
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8">
            {team.map((member: TeamMember) => (
              <div
                key={member.id}
                className="group bg-white dark:bg-black rounded-md shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="relative h-40 sm:h-48 md:h-64 overflow-hidden">
                  <Image
                    src={member.photoUrl}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-4 md:p-6">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h4>

                  <p className="text-[#6efd0b] font-medium mb-2 text-sm md:text-base">
                    {member.designation}
                  </p>

                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Experience: {member.experience} Years
                  </p>

                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    Skills: {member.skills}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
