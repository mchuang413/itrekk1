"use client";
import React from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ThemeSwitcher from "./components/ThemeSwitcher"; // Make sure this component is correctly implemented

const HomePage = () => {
  return (
    <>
      <Navbar>
        <ThemeSwitcher />
      </Navbar>
      <div className="hero min-h-screen">
        {/* Include a video as the background */}
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/assets/adventureVideo.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for better text visibility */}
        <div className="hero-overlay bg-opacity-60"></div>

        {/* Hero content */}
        <div className="hero-content text-center text-neutral-content relative">
          <div className="max-w-md mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              iTrekk - Immerse Yourself in Adventure
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              Step into another world and discover the unseen. Embark on virtual
              journeys and unlock the mysteries that await.
            </p>
            <button className="btn btn-accent">Get Started</button>
            {/* Ensure that you define the btn-accent class in your styles to match your logo color */}
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default HomePage;
