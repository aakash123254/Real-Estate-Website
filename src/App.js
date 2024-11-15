import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Apartments from "./Components/Apartments/Apartments";
import Works from "./Components/Works/Works";
import Services from "./Components/Services/Services";
import Agents from "./Components/Agents/Agents";
import Adverts from "./Components/Adverts/Adverts";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login";
import ApartmentDetail from "./Components/ApartmentDetail";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginSubmit = () => {
    setShowLogin(false); // Hides the login form
  };

  return (
    <Router>
      {showLogin ? (
        <Login onLoginSubmit={handleLoginSubmit} />
      ) : (
        <>
          <Navbar onLoginClick={() => setShowLogin(true)} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <About />
                  <Apartments />
                  <Works />
                  <Services />
                  <Agents />
                  <Adverts />
                  <Footer />
                </>
              }
            />
            <Route path="/apartment/:id" element={<ApartmentDetail />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
