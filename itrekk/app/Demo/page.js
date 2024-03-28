"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const images = [
  "/assets/img1.png",
  "/assets/img2.png",
  "/assets/3.png",
  "/assets/4.png",
  "/assets/5.png",
];

const Page = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Navbar />

      {/* Container for game images with padding-top to push it below the navbar */}
      <div className="pt-16 py-4 flex flex-wrap justify-center items-center bg-gray-100">
        {/* Images with adjusted paths for consistency and click handler */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            className="m-2 w-48 md:w-64 lg:w-96 hover:scale-105 transition-transform duration-200 ease-in-out object-cover cursor-pointer"
            onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>

      {/* Modal for displaying the clicked image */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Selected"
            className="max-w-full max-h-full p-4"
            onClick={(e) => e.stopPropagation()} // Prevents click inside the modal from closing it
          />
        </div>
      )}
    </>
  );
};

export default Page;
