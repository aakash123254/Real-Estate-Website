// Components/Home/Home.js

import React from "react";
import Header from "../Header/Header";
import Navbar from "../Header/Navbar";
import About from "../About/About";
import Apartments from "../Apartments/Apartments";
import Works from "../Works/Works";
import Services from "../Services/Services";
import Agents from "../Agents/Agents";
import Adverts from "../Adverts/Adverts";
import Footer from "../Footer/Footer";

function Home({ onLoginClick }) {
  return (
    <>
      <Navbar />
      <Header />
      
      {/* Login button calls onLoginClick when clicked */}
      <button onClick={onLoginClick} className="login-toggle-button">
        Login
      </button>

      <About />
      <Apartments />
      <Works />
      <Services />
      <Agents />
      <Adverts />
      <Footer />
    </>
  );
}

export default Home;
