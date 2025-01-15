import React from "react";
import ImageSlideshow from "./components/ImageSLideShow";
import CarouselComponent from "./components/CarouselComponent";
import ShareWithUs from "./components/ShareWithUs";
import Header from "components/Header";
import Footer from "components/Footer";
import LimitedEdition from "./components/LimitedEdition";
import MostLovedStyles from "./components/MostLovedStyles";
import {
  BlogSectionCard,
  ConfidenceBanner,
  LimitedEditionSection,
} from "./components/BottomSection";
import EvergreenClassics from "./components/EvergreenClassics";
import GiftSection from "./components/GiftSection";
import BlogSection from "./components/BlogSection";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <ImageSlideshow />
      </div>
      <main>
        <div className="bg-gray-100" style={{ marginTop: "4rem" }}>
          <MostLovedStyles />
        </div>
        <div style={{ marginTop: "12rem" }}>
          <LimitedEdition />
        </div>
        <div style={{ marginTop: "12rem" }}>
          <EvergreenClassics />
        </div>
        <div style={{ marginTop: "12rem" }}>
          <GiftSection />
        </div>
        <div style={{ marginTop: "6rem" }}>
          <ShareWithUs />
        </div>
        <div style={{ marginTop: "6rem" }}>
          <BlogSection />
        </div>
      </main>
    </div>
  );
};

export default Home;
