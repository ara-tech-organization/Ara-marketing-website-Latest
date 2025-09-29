import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import AboutSection from "../components/home/AboutSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";
import WorkProcess from "@/components/home/WorkProcess";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WorkProcess />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
