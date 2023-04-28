import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Welcome from "../components/homePage/Welcome";
import LatestFood from "../components/homePage/LatestFood";
import Footer from "../components/Footer";

function Homepage(props) {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Welcome />
      <LatestFood />
      <Footer />
      This is the Hompegae
    </div>
  );
}

export default Homepage;
