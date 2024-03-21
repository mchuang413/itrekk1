import React from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-200 fixed w-full z-10 top-0">
        <div className="flex-1">
          {/* Apply `text-base-content` for adaptive text color and fix the Link usage */}
          <Link href="/" className="btn btn-ghost text-xl text-base-content">
            <img src="/assets/logo.png" className="h-8  mb-2 mr-1" />
            iTrekk
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 text-base-content">
            {/* Update Link components for correct Next.js usage */}
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Demo">Demo</Link>
            </li>
            <li>
              <Link href="/About">About</Link>
            </li>
            <li>
              <Link href="/PrivacyPolicy">Privacy Policy</Link>
            </li>
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
