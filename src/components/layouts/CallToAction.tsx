'use client';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Clock,
  Zap,
  Rocket,
  Code,
  Palette,
  TrendingUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CallToActionProps {
  className?: string;
}

const CallToAction = ({ className }: CallToActionProps) => {
  const features = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: 'Quick Turnaround',
      description: 'Fast-track your project with our streamlined process',
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance from our dedicated team',
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: 'Premium Quality',
      description: 'Excellence in every project we deliver',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className={cn(
        'relative py-12 md:py-20 overflow-hidden',

        className,
      )}
    >
      {/* Background decoration */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(110,253,11,0.15),rgba(255,255,255,0))]" />
      </div> */}

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Ready to Transform Your{' '}
                <span className="bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent">
                  Digital Presence?
                </span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Join hundreds of satisfied clients who have already experienced
                the power of our digital solutions. Let&apos;s work together to
                bring your vision to life.
              </p>
            </div>

            {/* Features List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="mt-1 flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-lime-500/10 to-green-500/10">
                    <div className="text-lime-600 dark:text-lime-400">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-lime-500 to-green-600 text-black hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border-2 border-lime-500/30 hover:border-lime-500/60 hover:bg-lime-500/5 transition-all duration-300 group"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Animated gradient card */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-lime-500/20 to-green-500/20 rounded-2xl blur-2xl animate-pulse" /> */}

              <div className="relative p-8 md:p-12 rounded-md border-2 border-lime-500/20 bg-gradient-to-br from-lime-500/5 to-green-500/5 backdrop-blur-sm">
                <div className="space-y-6">
                  {/* Icon grid */}

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Rocket, label: 'Fast Delivery' },
                      { icon: Code, label: 'Clean Code' },
                      { icon: Palette, label: 'UI Design' },
                      { icon: TrendingUp, label: 'Growth' },
                    ].map((item, i) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="p-6 rounded-xl bg-gradient-to-br from-lime-500/10 to-green-500/10 border border-lime-500/20 hover:border-lime-500/40 transition-all duration-300 hover:shadow-lg group"
                        >
                          <div className="flex items-start gap-2">
                            {/* Icon */}
                            <div className="text-lime-600 dark:text-lime-400 group-hover:text-green-600 transition-colors">
                              <Icon className="h-6 w-6" />
                            </div>

                            {/* Text */}
                            <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                              {item.label}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  {/* Stats */}
                  <div className="space-y-3 pt-4 border-t border-lime-500/20">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Successful Projects
                      </span>
                      <span className="text-lg font-bold text-lime-600 dark:text-lime-400">
                        200+
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-lime-500 to-green-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Trusted by industry leaders • 5-star rated • Enterprise-ready
            solutions
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export { CallToAction };
