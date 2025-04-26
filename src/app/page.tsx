import HeroSection from "@/app/components/HeroSection";
import LocationMap from "./components/LocationMap";
import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUse";
import OurServices from "./components/OurServices";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <OurServices />
      <Testimonial />
      <RegistrationForm />
      <Gallery />
      <LocationMap />
      <Footer />
    </main>
  );
}
