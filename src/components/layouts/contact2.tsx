'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast, Toaster } from 'sonner';

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
  className?: string;
}

const Contact2 = ({
  title = 'Contact Us',
  description = 'We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!',
  phone = '(123) 34567890',
  email = 'email@example.com',
  web = { label: 'shadcnblocks.com', url: 'https://shadcnblocks.com' },
  className,
}: Contact2Props) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      from: 'Homepage Contact Form',
      company: formData.get('message'), // message goes to company
      date: new Date().toISOString(),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/leads`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) throw new Error('Failed to submit');

      const result = await res.json();
      if (res.ok) {
        toast.success('Message sent successfully!');
        form.reset();
      } else {
        toast.error(
          result.message || 'Failed to send message. Please try again.',
        );
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={cn('py-20', className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:gap-20">
          {/* Left Side */}
          <div className="flex max-w-md flex-col gap-10">
            <div>
              <h1 className="mb-3 text-4xl font-semibold lg:text-5xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">Contact Details</h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-bold">Phone: </span> {phone}
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline ml-1">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold">Web: </span>
                  <a href={web.url} target="_blank" className="underline ml-1">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid w-full max-w-3xl grid-cols-2 gap-6 rounded-lg border p-6 md:p-10"
          >
            {/* Name */}
            <div className="grid gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                name="name"
                type="text"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email */}
            <div className="grid gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Phone */}
            <div className="grid gap-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input
                name="phone"
                type="text"
                id="phone"
                placeholder="Your Phone"
                required
              />
            </div>

            {/* Address */}
            <div className="grid gap-1.5">
              <Label htmlFor="address">Address</Label>
              <Input
                name="address"
                type="text"
                id="address"
                placeholder="Your Address"
              />
            </div>

            {/* Message full width */}
            <div className="grid gap-1.5 col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                name="message"
                id="message"
                placeholder="Type your message here."
                required
              />
            </div>

            {/* Button full width with spinner */}
            <Button
              type="submit"
              className="w-full col-span-2"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </div>
      </div>
      <Toaster position="top-right" richColors closeButton />
    </section>
  );
};

export { Contact2 };
