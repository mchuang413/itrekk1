"use client";
import React from "react";
import Navbar from "../components/Navbar";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-lg shadow-xl bg-base-100 max-h-[80vh] w-11/12 md:w-3/4 lg:w-2/3 overflow-auto p-8">
          <img src="/assets/img1.png" alt="Image 1" className="h-8 mb-2 mr-1" />
          <img src="/assets/2.png" alt="Image 2" className="h-8 mb-2 mr-1" />
          <img src="/assets/3.png" alt="Image 3" className="h-8 mb-2 mr-1" />
          <img src="/assets/4.png" alt="Image 4" className="h-8 mb-2 mr-1" />
          <img src="/assets/5.png" alt="Image 5" className="h-8 mb-2 mr-1" />
        </div>
      </div>
    </>
  );
};

export default Page;
