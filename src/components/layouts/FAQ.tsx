'use client';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface FAQProps {
  className?: string;
}

const FAQ = ({ className }: FAQProps) => {
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('Services');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'Services',
      question: 'What services does DeltA Digivast offer?',
      answer:
        'We offer comprehensive digital solutions including web design & development, digital marketing, video production, social media management, photography, and course creation. Our team specializes in helping businesses establish and grow their online presence.',
    },
    {
      id: 'faq-2',
      category: 'Services',
      question: 'How long does a typical web development project take?',
      answer:
        'Project timelines vary based on complexity and scope. A standard business website takes 4-8 weeks, while custom applications may take 8-16 weeks. We provide detailed timelines after understanding your requirements in the initial consultation.',
    },
    {
      id: 'faq-3',
      category: 'Services',
      question: 'Do you provide ongoing maintenance and support?',
      answer:
        'Yes! We offer flexible maintenance packages that include security updates, performance monitoring, content updates, and technical support. This ensures your website stays secure and performs optimally year-round.',
    },
    {
      id: 'faq-4',
      category: 'Courses',
      question: 'How can I access courses after purchasing?',
      answer:
        "After purchasing a course through Stripe, you'll immediately gain access to all course materials, videos, and resources through your dashboard. You can learn at your own pace and access content anytime.",
    },
    {
      id: 'faq-5',
      category: 'Courses',
      question: 'Are there certificates upon course completion?',
      answer:
        "Yes! Upon completing a course and passing the assessment, you'll receive a certificate of completion that can be shared on your professional profiles and LinkedIn.",
    },
    {
      id: 'faq-6',
      category: 'Courses',
      question: "Can I get a refund if I'm not satisfied with a course?",
      answer:
        "We offer a 7-day money-back guarantee for all courses. If you're not satisfied within the first week, simply contact our support team for a full refund.",
    },
    {
      id: 'faq-7',
      category: 'Team',
      question:
        'What information do employees need to provide for attendance tracking?',
      answer:
        'Employees can check in/out using the dashboard. The system automatically tracks working hours and calculates daily totals. Monthly summaries are generated for payroll and performance reviews.',
    },
    {
      id: 'faq-8',
      category: 'Team',
      question: 'How is salary calculated and when is it paid?',
      answer:
        'Salaries are calculated based on working hours, bonuses, and deductions configured by your admin. Payment status is tracked in the dashboard with clear pending/paid indicators. Admins can manage all salary details.',
    },
    {
      id: 'faq-9',
      category: 'Team',
      question: 'Can I manage multiple team members as a manager?',
      answer:
        'Yes! Managers can view team attendance, approve leave requests, assign tasks, and generate team performance reports. The role-based dashboard provides all necessary management tools.',
    },
    {
      id: 'faq-10',
      category: 'Pricing',
      question: 'What are your pricing models?',
      answer:
        'Our pricing varies based on project scope and requirements. We offer fixed-price packages for standard services, time-based billing for custom projects, and flexible retainer agreements for ongoing support. Contact us for a personalized quote.',
    },
    {
      id: 'faq-11',
      category: 'Pricing',
      question: 'Do you offer payment plans or financing options?',
      answer:
        'Yes! For larger projects, we can arrange payment plans spread across project milestones. We also accept various payment methods and can discuss financing options based on your needs.',
    },
    {
      id: 'faq-12',
      category: 'General',
      question: 'How do I get started with DeltA Digivast?',
      answer:
        "Simply fill out our contact form or call us to schedule a free consultation. We'll discuss your goals, understand your needs, and propose a customized solution that fits your budget and timeline.",
    },
  ];

  const categories = [
    ...Array.from(new Set(faqs.map(faq => faq.category))),
  ] as string[];

  const filteredFaqs = faqs.filter(faq => faq.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      className={cn(
        'relative py-12 md:py-20 overflow-hidden',
        'bg-gradient-to-b from-background via-background to-primary/5',
        className,
      )}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-72 w-72 bg-lime-500/5 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="space-y-4 text-center mb-12">
          <div className="flex items-center justify-center gap-2">
            <div className="rounded-full bg-gradient-to-r from-lime-500/10 to-green-500/10 p-3">
              <HelpCircle className="h-6 w-6 text-lime-600 dark:text-lime-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground">
            Find answers to common questions about our services, courses, and
            team management system.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base',
                selectedCategory === category
                  ? 'bg-gradient-to-r from-lime-500 to-green-600 text-black shadow-lg hover:shadow-xl'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 border border-border',
              )}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="mx-auto containers space-y-4">
          <AnimatePresence mode="wait">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div
                  className={cn(
                    'border rounded-lg transition-all duration-300 overflow-hidden',
                    expandedId === faq.id
                      ? 'border-lime-500/50 bg-lime-500/5 shadow-lg'
                      : 'border-border bg-card hover:border-lime-500/30 hover:shadow-md',
                  )}
                >
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full px-6 py-4 md:px-8 md:py-6 flex items-start justify-between gap-4 hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-start gap-4 text-left flex-1">
                      <div className="mt-1 flex-shrink-0">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-green-600">
                          <span className="text-xs font-bold text-white">
                            ?
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-semibold text-foreground leading-tight">
                          {faq.question}
                        </h3>
                        {faq.category && (
                          <span className="inline-block mt-2 text-xs font-medium px-2 py-1 rounded-full bg-lime-500/10 text-lime-700 dark:text-lime-400">
                            {faq.category}
                          </span>
                        )}
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 text-lime-600 dark:text-lime-400 flex-shrink-0 transition-transform duration-300 mt-1',
                        expandedId === faq.id ? 'rotate-180' : '',
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 md:px-8 py-4 md:py-6 border-t border-lime-500/20 bg-gradient-to-r from-lime-500/5 to-green-600/5">
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Didn&apos;t find what you&apos;re looking for?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-lime-500 to-green-600 text-black hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export { FAQ };
