import React from 'react'
import { FiGithub } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { useState , useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function Touch() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className='w-full h-auto bg-[#112240] text-center flex flex-col items-center justify-center text-[#f5f5f5] pt-30 gap-1 pb-30 sm:px-4 md:px-0 lg:px-0'>

    <div data-aos="fade-up" data-aos-delay="300">
    <section id='touch'>
    <div>
        <h2 className='text-3xl text-[#f5f5f5] pb-3 pt-35'>Get in Touch</h2>
    </div>
    </section>
    <div className='text-[#f5f5f5] md:px-0 lg:px-0'>
        <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
    </div>
        
    <div className='flex gap-5 justify-center pt-8'>
    <div>
        <div className='border-0 bg-[#0a192f] rounded-full w-15 h-15 flex items-center justify-center hover:bg-sky-400 hover:scale-107 transition duration-300'>
            <div className='text-[#f5f5f5] text-2xl'>
                <a href="mailto:favourayomde437@gmail.com" target="_blank" rel="noopener noreferrer">
                    <MdOutlineMail />
                </a>
            </div>
        </div>
    </div>
    <div>
        <div className='border-0 bg-[#0a192f] rounded-full w-15 h-15 flex items-center justify-center hover:bg-sky-400 hover:scale-107 transition duration-300'>
            <div className='text-[#f5f5f5] text-2xl'>
                <a href="https://github.com/favour9164" target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                </a>
            </div>
        </div>
    </div>

    <div>
        <div className='border-0 bg-[#0a192f] rounded-full w-15 h-15 flex items-center justify-center hover:bg-sky-400 hover:scale-107 transition duration-300'>
            <div className='text-[#f5f5f5] text-2xl'>
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin />
                </a>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Touch;
