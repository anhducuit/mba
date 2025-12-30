
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/home/HeroSection';
import ServiceSection from '@/components/home/ServiceSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <PageLayout
      title="MBA Fulfillment Hub - Giải pháp kho vận chuyên nghiệp"
      description="Dịch vụ kho vận, vận chuyển, cung cấp vật liệu đóng gói và tư vấn setup kho chuyên nghiệp cho doanh nghiệp."
    >
      <HeroSection />
      <ServiceSection />
      <BenefitsSection />
      <TestimonialSection />
      <ContactSection />
    </PageLayout>
  );
};

export default Index;
