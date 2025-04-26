import HeroSection from "@/app/components/HeroSection";
import ClassList from "./components/ClassList";
import WhatsAppButton from "./components/WhatsAppButton";
import Location from "./components/Location";
import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUse";
import OurServices from "./components/OurServices";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <OurServices />
      <Testimonial />
      <RegistrationForm />
      <Gallery />
      <Footer />
    </main>
  );
}
