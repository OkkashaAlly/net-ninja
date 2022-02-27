import React from "react";
import "./App.scss";
import Modal from "./components/Modal";
import OffCanvas from "./components/OffCanvas";
import ContactSection from "./sections/ContactSection";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import PricingSection from "./sections/PricingSection";
import ReviewsSection from "./sections/ReviewsSection";
import TopicsSection from "./sections/TopicsSection";
import UpdatesSection from "./sections/UpdatesSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <PricingSection />
      <TopicsSection />
      <ReviewsSection />
      <ContactSection />
      <UpdatesSection />
      <Modal />
      <OffCanvas />
    </>
  );
}

export default App;
