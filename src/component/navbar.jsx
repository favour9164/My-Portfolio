import React from 'react'
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

function Navbar() {

  const [ control, setControl ]= useState(false);

  const handleClick = () => {
    document.body.classList.toggle('overflow-hidden');
    document.body.classList.toggle('data-aos', 'fade-left');
    setControl(!control);
  }

  const handleDismiss = () => {
    document.body.classList.remove('overflow-hidden');
    setControl(false);
  }


  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-20 bg-[#0a192f] z-50 sm:px-4 md:px-0 lg:px-0">

        <div className="flex items-center justify-between  h-full px-6 md:px-12">

          {/* Logo */}
          <div className="flex items-center gap-3 text-white font-bold">
            <img src="./iconF.png" className="w-10" alt="" />
            <h3 className="text-lg">Favour</h3>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-white font-medium">

            <a href="#about" className="hover:text-sky-500 transition">
              About
            </a>

            <a href="#skill" className="hover:text-sky-500 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-sky-500 transition">
              Projects
            </a>

            <a href="#touch" className="hover:text-sky-500 transition">
              Contact
            </a>

          </div>

          {/* Hamburger */}
          <button onClick={handleClick} className="md:hidden focus:outline-none">
            <RxHamburgerMenu className="text-2xl text-white md:hidden" />
          </button>

        </div>

        {/* Mobile Menu */}
        {control && (
          <div className="md:hidden bg-[#0a192f] text-white flex flex-col items-center gap-8 py-10 text-lg absolute right-0 top-20 w-50 px-6 z-40">

            <a href="#about" onClick={handleDismiss} data-aos="fade-left" className='hover:text-sky-500'>About</a>

            <a href="#skill" onClick={handleDismiss} data-aos="fade-left" className='hover:text-sky-500'>Skills</a>

            <a href="#projects" onClick={handleDismiss} data-aos="fade-left" className='hover:text-sky-500'>Projects</a>

            <a href="#touch" onClick={handleDismiss} data-aos="fade-left" className='hover:text-sky-500'>Contact</a>

          </div>
        )}

      </div>

    </div>
  )
}

export default Navbar;
