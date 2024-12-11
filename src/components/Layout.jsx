import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

function Layout({ children, heroTitle }) {
  console.log(children);
  return (
    <div>
      <Header />
      <HeroSection heroTitle={heroTitle} />
      {children}

      <Footer />
    </div>
  );
}

export default Layout;
