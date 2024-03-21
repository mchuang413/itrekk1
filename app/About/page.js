"use client";
import React from 'react';
import Navbar from '../components/Navbar';

const Page = () => {
  return (
    <>
        <Navbar></Navbar>
        <div className="min-h-screen bg-base-100 text-base-content flex items-center justify-center p-4">
        <div className="max-w-4xl bg-base-200 shadow-xl rounded-lg p-8">
            <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">Hello, I'm Michael Chuang</h1>
            <p className="text-xl mt-4">Sophomore at Cupertino High School</p>
            </div>
            <div className="mb-6">
            <p>
                My passion lies in coding and creating projects, and I'm excited about how this website can assist you. In a rapidly advancing technological world, prioritizing well-being and maintaining a happy lifestyle is crucial. 
            </p>
            <p className="mt-4">
                Beyond coding, I'm a competitive swimmer representing the <strong>Santa Clara Swim Club national swim team</strong>. Swimming serves as a valuable means to relax the body during stressful times.
            </p>
            </div>
            {/* Consider adding a personal photo or relevant visual */}
            <div className="flex justify-center mt-8">
            <img src="/assets/logo.png" alt="Michael Chuang" className="rounded-full w-48 h-48 object-cover" />
            </div>
        </div>
        </div>
    </>
  );
}

export default Page;
