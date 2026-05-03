'use client';
import { motion } from 'framer-motion';
import { Zap, Users, Award, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
}

interface StatsProps {
  className?: string;
}

const Stats = ({ className }: StatsProps) => {
  const stats: Stat[] = [
    {
      value: '200',
      label: 'Projects Delivered',
      suffix: '+',
      icon: <Zap className="h-6 w-6" />,
    },
    {
      value: '150',
      label: 'Happy Clients',
      suffix: '+',
      icon: <Users className="h-6 w-6" />,
    },
    {
      value: '8',
      label: 'Years of Experience',
      suffix: '+',
      icon: <Award className="h-6 w-6" />,
    },
    {
      value: '95',
      label: 'Client Satisfaction Rate',
      suffix: '%',
      icon: <TrendingUp className="h-6 w-6" />,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className={cn(
        'relative py-12 md:py-20 overflow-hidden',
        'bg-gradient-to-r from-background via-lime-500/5 to-background',
        className,
      )}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-0 h-72 w-72 bg-lime-500/5 rounded-full blur-3xl" />
        <div className="absolute left-1/4 bottom-0 h-72 w-72 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            By The Numbers
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Proven results and trusted expertise in digital transformation
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div
                className={cn(
                  'relative rounded-md border border-border p-6 md:p-8',
                  'bg-card transition-all duration-300 overflow-hidden',
                  'group-hover:bg-green-500/10 group-hover:border-green-500/30 group-hover:shadow-lg',
                )}
              >
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="inline-block p-3 rounded-lg bg-gradient-to-r from-lime-500/10 to-green-500/10 group-hover:from-green-500/20 group-hover:to-green-500/30 transition-colors duration-300">
                    <div className="text-lime-600 dark:text-lime-400 group-hover:text-green-600">
                      {stat.icon}
                    </div>
                  </div>

                  {/* Value */}
                  <div>
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent">
                      {stat.value}
                      <span className="text-2xl md:text-3xl">
                        {stat.suffix}
                      </span>
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-green-500/5 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { Stats };
