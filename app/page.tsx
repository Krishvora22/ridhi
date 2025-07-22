import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import TestimonialSection from "@/components/testimonial-section"
import BrokerComparison from "@/components/broker-comparison"
import BlogSection from "@/components/blog-section"
import ReviewsSection from "@/components/reviews-section"
import AppDownload from "@/components/app-download"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      <BrokerComparison />
      <BlogSection />
      <ReviewsSection />
      <AppDownload />
      <Footer />
    </div>
  )
}
