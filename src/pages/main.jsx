import React from 'react'
import About from './about'
import Skill from './skill'
import Projects from './projects'
import Touch from './touch'
import Footer from '../component/footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { useState , useEffect } from 'react'
import Aos from 'aos'
function Main() {

    useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className='flex w-full bg-[#0c1e39] h-screen text-center flex-col items-center justify-center text-[#f5f5f5] gap-1 pb-8 '>
    <div className=''>
    <div className=''data-aos="fade-up" data-aos-delay="300">
        <div>
        <h1 className=" text-6xl font-bold text-sky-400 font-sans">
            Frontend Developer
        </h1>
        </div>
        <div className=' text-[#f5f5f5] p-7 text-xl font-medium'>
        <h3>Building elegant solutions to complex problems with modern web technologies</h3>
        </div>

        <div className='flex gap-5  justify-center'>
            <div>
                <button className="px-6 py-3 bg-sky-400 text-white rounded-xl  shadow-lg hover:bg-sky-400 hover:shadow-xl hover:scale-105 transition duration-300">
                View Project
                </button>
            </div>
            <div>
                <button className='px-6 py-3 border-2 border-sky-400 text-[#f5f5f5] text-center rounded-lg hover:shadow-xl hover:scale-105 transition duration-300'>
                    Get in Touch
                </button>
            </div>
        </div> 
        </div>
        </div> 
        
    </div>
  )
}

export default Main
