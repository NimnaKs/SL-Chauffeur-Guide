import HeroSlideshow from "@/components/hero";
import FeaturedDestinations from "@/components/featured-destinations";
import ContactUs from "@/components/contact-us";
import AboutContent from "@/components/aboutContent";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <AboutContent />
      <FeaturedDestinations />
      <Testimonials />
      <ContactUs />
    </>
  );
}
