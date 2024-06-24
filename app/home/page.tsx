import React from "react";
import HeroSection from "./hero";
import TestimonialsSection from "./Testimonials";
import PartnerLogosSection from "./PartnerLogo";
import Section1 from "./services";
import Shop from "../shop/page";
import ContactUs from "../contact-us/contactus";
import AboutUs from "../about/aboutus";
export default function LandingPage() {
  return (
    <>
      {/* Hero section */}
      <HeroSection />
      {/* Section 1 (Responsive classes added) */}
      <Section1 />
      {/* Section 2 (Responsive classes added) */}
      <AboutUs />
      {/* <MushroomProductsSection /> */}
      <Shop />
      {/* Section 4 (Responsive classes added) */}
      <TestimonialsSection />
      {/* Section 5 (Responsive classes added) */}
      <ContactUs />
      {/* Section 6 (Responsive classes added) */}
      <PartnerLogosSection />
    </>
  );
}
