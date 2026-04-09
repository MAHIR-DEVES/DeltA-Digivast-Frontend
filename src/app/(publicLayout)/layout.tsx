import { Footer } from '@/components/layouts/footer';
import { Navbar } from '@/components/layouts/navbar';
import React from 'react';
import { Toaster } from 'sonner';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Toaster position="top-right" />
      <Footer></Footer>
    </div>
  );
}
