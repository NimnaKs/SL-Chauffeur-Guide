import HeroSlideshow from "@/components/hero";
import FeaturedDestinations from "@/components/featured-destinations";
import ContactUs from "@/components/contact-us";
import AboutContent from "@/components/aboutContent";
import Testimonials from "@/components/Testimonials";
import SocialGallery from "@/components/social-gallery";

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <AboutContent />
      <FeaturedDestinations />
      <SocialGallery />
      <Testimonials />
      <ContactUs />
    </>
  );
}
