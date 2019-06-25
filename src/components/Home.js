import React, { Component } from "react";
import Intro from "./HomePage/Intro";
import PopularProduct from "./HomePage/PopularProduct";
import HomeAbout from "./HomePage/HomeAbout";
import HomeInstagram from "./HomePage/HomeInstagram";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Intro />
        <PopularProduct />
        <HomeAbout />
        <HomeInstagram />
        <Newsletter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
