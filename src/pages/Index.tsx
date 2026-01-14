import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import QuickFactsSection from "@/components/home/QuickFactsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <QuickFactsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
