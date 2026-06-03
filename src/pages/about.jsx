import React from 'react'
import { useState , useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);


  return (
    <div className='w-full h-auto pt-30 bg-[#0c1e39] text-center flex flex-col items-center justify-center text-[#f5f5f5] gap-1 pb-12 '>
      <div className='w-lvh' data-aos="fade-right">
        <section id='about'>
          <div>
            <h2 className='text-3xl text-[#f5f5f5] pb-10 pt-30'>About Me</h2>
          </div>
        </section>
      <div className="">
        <p className="text-justify w-full md:w-full lg:w-full px-3">
          I'm a passionate developer with expertise in building modern web applications. With a strong foundation in frontend technologies, I create seamless user experiences backed by robust, scalable systems. I love tackling challenging problems and continuously learning new technologies to stay at the forefront of web development.
        </p>
    </div>
      </div>
    </div>
  )
}

export default About;
