'use client';
import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface NewsletterProps {
  className?: string;
}

const Newsletter = ({ className }: NewsletterProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section
      className={cn(
        'relative py-12 md:py-20 overflow-hidden',
        'bg-gradient-to-r from-background via-green-500/5 to-background',
        className,
      )}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 bg-lime-500/5 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Stay Updated with{' '}
              <span className="bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent">
                Latest Insights
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Subscribe to our newsletter and get exclusive tips on web design,
              digital marketing, and business growth delivered to your inbox
              every week.
            </p>
          </div>

          {/* Newsletter Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              {/* Background blur effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-lime-500/20 to-green-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

              <div className="relative flex flex-col sm:flex-row gap-3 p-1 rounded-xl border border-border bg-card hover:border-lime-500/30 transition-colors">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={isLoading}
                  className={cn(
                    'flex-1 px-4 py-3 bg-transparent outline-none text-foreground placeholder:text-muted-foreground',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                  )}
                />
                <button
                  type="submit"
                  disabled={isLoading || isSuccess}
                  className={cn(
                    'relative px-6 py-3 rounded-lg font-medium whitespace-nowrap',
                    'transition-all duration-300 overflow-hidden group/btn',
                    isSuccess
                      ? 'bg-green-600 text-white'
                      : 'bg-gradient-to-r from-lime-500 to-green-600 text-black hover:shadow-lg hover:scale-105',
                    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
                  )}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Subscribing...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Subscribe
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* Info text */}
            <p className="text-xs md:text-sm text-muted-foreground text-center mt-4">
              ✓ No spam • ✓ Unsubscribe anytime • ✓ Weekly insights
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export { Newsletter };
