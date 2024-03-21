"use client";
import React from "react";
import Navbar from "../components/Navbar";

const Page = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="relative h-screen w-screen overflow-hidden mt-10">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/assets/bkgrd.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered content */}
        <div className="flex justify-center items-center h-full">
          {/* Promo video with rounded corners and sound */}
          <video
            autoPlay
            loop
            className="z-10 rounded-lg"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          >
            <source src="/assets/promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default Page;
