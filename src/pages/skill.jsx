import React from 'react'
import { useState , useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Skill() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className='w-full h-auto bg-[#112240] text-center flex flex-col items-center justify-center text-[#f5f5f5] gap-1 pb-14'>
    <div data-aos="fade-up" data-aos-delay="300">
      <section id='skill'>
        <div>
            <h2 className='text-3xl text-[#f5f5f5] pb-10 pt-40'>Skills</h2>
        </div>
      </section>
      <div className='flex text-[#f5f5f5] gap-8 text-start sm:flex flex-col md:flex-row lg:flex-row'>
        <div className='h-60 w-63 bg-[#0a192f] border border-sky-500/30 rounded-lg'>
        
        <h4 className='font-bold text-xl pt-5 pl-6 pb-4 text-sky-400'>Fontend</h4>

        <div className='font-semibold pl-6 pt-5'>
            <h5 className=''>React</h5>
            <h5 className='pt-4'>Tailwind</h5>
            <h5 className='pt-4'>Javascript</h5>
        </div>
      </div>

      <div className='h-60 w-63 bg-[#0a192f] border border-sky-500/30 rounded-lg'>
        <div>
        <h4 className='font-bold text-xl pt-5 pl-6 pb-4 text-sky-400'>Tools</h4>
        </div>

        <div className='font-semibold pl-6 pt-5'>
            <h5>Git</h5>
            <h5 className='pt-4'>Figma</h5>
            <h5 className='pt-4'>Vs code</h5>
        </div>
      </div>

      <div className='h-60 w-63 bg-[#0a192f] border border-sky-500/30  rounded-lg'>
        <div>
        <h4 className='font-bold text-xl pt-5 pl-6 pb-4 text-sky-400'>Other</h4>
        </div>

        <div className='font-semibold pl-6 pt-5'>
            <h5>Testing</h5>
            <h5 className='pt-4'>Rest API</h5>
            <h5 className='pt-4'>CL/CD</h5>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Skill;
