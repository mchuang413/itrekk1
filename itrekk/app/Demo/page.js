"use client";
import React from "react";
import Navbar from "../components/Navbar";

const Page = () => {
  // Array of image names
  const imageNames = ['1', '2', '3', '4', '5'];

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-lg shadow-xl bg-base-100 max-h-[80vh] w-11/12 md:w-3/4 lg:w-2/3 overflow-auto p-8">
          {/* Map through the imageNames array to display images */}
          {imageNames.map((imageName, index) => (
            <img src="/assets/${imageName}.png" className="h-8  mb-2 mr-1" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
