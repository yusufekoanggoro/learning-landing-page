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
      {/* <div className="my-12 w-full">
        <hr className="border-t-2 border-[#004D40] mx-auto w-1/2" />
      </div> */}
      <OurServices />
      {/* <div className="my-12 w-full">
        <hr className="border-t-2 border-[#004D40] mx-auto w-1/2" />
      </div> */}
      <Testimonial />
      {/* <div className="my-12 w-full">
        <hr className="border-t-2 border-[#004D40] mx-auto w-1/2" />
      </div> */}
      <RegistrationForm />
      {/* <div className="my-12 w-full">
        <hr className="border-t-2 border-[#004D40] mx-auto w-1/2" />
      </div> */}
      <Gallery />
      <LocationMap />
      <Footer />
    </main>
  );
}
