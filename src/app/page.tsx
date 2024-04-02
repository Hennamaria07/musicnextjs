import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestmonialCard from "@/components/TestmonialCard";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">
          <HeroSection />
          <FeaturedCourses />
          <WhyChooseUs />
          <TestmonialCard />
    </main>
  );
}
