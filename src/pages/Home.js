import React from "react";
import Header from "../components/Header";
import Banner from "../components/home/Banner";
import Gallery from "../components/home/Gallery";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Banner
          title={[<span>Chez vous,</span>, " partout et ailleurs"]}
          src="./assets/img/homeBanner.png"
        />
        <Gallery />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
