import { Blog } from '@/components/layouts/blog';
import BrandLogoSection from '@/components/layouts/BrandLogoSection';
import ClientReview from '@/components/layouts/ClientReview';
import { Contact2 } from '@/components/layouts/contact2';
import { Hero } from '@/components/layouts/hero';
import HeroVideo from '@/components/layouts/HeroVideo';
import { ServiceSection } from '@/components/layouts/ServiceSection';
import { getHeroData } from '@/service/hero.service';
import React from 'react';

export default async function HomePage() {
  const data = await getHeroData();
  const hero = data?.data;
  return (
    <div>
      <Hero
        badge="Trusted by 200+ Brands Worldwide"
        heading={hero?.title}
        description={hero?.description}
        image={{
          src: hero?.imageUrl,
          alt: hero?.heading,
        }}
      />
      <BrandLogoSection></BrandLogoSection>
      <HeroVideo></HeroVideo>
      <ServiceSection></ServiceSection>
      <ClientReview></ClientReview>
      <Blog></Blog>
      <Contact2></Contact2>
    </div>
  );
}
