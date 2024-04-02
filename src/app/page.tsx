import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestmonialCard from "@/components/TestmonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">
          <HeroSection />
          <FeaturedCourses />
          <WhyChooseUs />
          <TestmonialCard />
          <UpcomingWebinars />
          <Instructors />
          <Footer />
    </main>
  );
}
