import React from 'react'
import { FiGithub } from "react-icons/fi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useState , useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className='w-full h-auto bg-[#0c1e39] text-center flex flex-col items-center justify-center text-[#f5f5f5]  gap-10 pb-10 '>

      <div data-aos="fade-down" data-aos-delay="300">
        <section id='projects'>
      <div>
            <h2 className='text-3xl text-[#f5f5f5] pb-10 pt-36'>Projects</h2>
        </div>
        </section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mx-5 my-5">
      <div className='max-w-xl bg-[#0a192f] text-[#f5f5f5] border border-sky-500/30 p-5 rounded-lg hover:border-sky-500'>
        <div className='text-sky-400 font-bold text-xl pt-5 text-start pb-4'>
            <h5>BidSpirit</h5>
        </div>

        <div className='pb-1 text-start w-full md:w-full lg:w-full'>
            <p>
                Bidspirit is an online auction platform where people can buy and sell items through live bidding.
            </p>
        </div>

        <div className='flex gap-1.5 pt-2 pb-3'>
          <button className='w-20 h-8 bg-[#273b56] text-sky-400 text-sm font-medium rounded-2xl'>bootstrap</button>
          <button className='w-20 h-8 bg-[#273b56] text-sky-400 text-sm font-medium rounded-2xl'>React</button>
          <button className='w-18 h-8 bg-[#273b56] text-sky-400 text-sm font-medium rounded-2xl'>css</button>
        </div>

     
      <div className='flex gap-5 pt-2'>
        <button>
        <div className='flex gap-2 hover:text-sky-400 transition duration-300'>
          <div style={{fontSize:"18px" , paddingTop:"4px"}}>
            <FiGithub />
          </div>
          <a href="https://github.com/favour9164/Bidspirits" target="_blank" rel="noopener noreferrer">
            <h6>Code</h6>
          </a>
        </div>
        </button>

        <button>
        <div className='flex gap-2 hover:text-sky-400 transition duration-300'>
          
          <div style={{fontSize:"18px" , paddingTop:"3px"}}>
              <BsBoxArrowUpRight />
          </div>
          <a href="https://bidspirits.vercel.app/" target="_blank" rel="noopener noreferrer">
            <h6>Live Demo</h6>
          </a>
        </div>
        </button>

      </div>
      </div>

      <div className='max-w-xl bg-[#0a192f] text-[#f5f5f5] border border-sky-500/30 p-5 rounded-lg hover:border-sky-500'>
        <div className='text-sky-400 font-bold text-xl pt-5 text-start pb-4'>
            <h5>Quiz App</h5>
        </div>

        <div className='pb-1 text-start  w-full md:w-full lg:w-full'>
            <p>
                Quiz App is a web application that allows users to create and take quizzes on various topics.
            </p>
        </div>

        <div className='flex gap-1.5 pt-2 pb-3'>
          <button className='w-20 h-8 bg-[#273b56] text-sky-400 text-sm font-medium rounded-2xl'>Tailwind</button>
          <button className='w-20 h-8 bg-[#273b56] text-sky-400 text-sm font-medium rounded-2xl'>React</button>
          <button className='w-18 h-8 bg-[#273b56] text-sky-400 text-sm font-medium rounded-2xl'>css</button>
        </div>

    
        <div className='flex gap-5 pt-2'>
        <div className='flex gap-2 hover:text-sky-400 transition duration-300'>
          <div style={{fontSize:"18px" , paddingTop:"4px"}}>
            <FiGithub />
          </div>
          <h6>Code</h6>
        </div>

       <div className='flex gap-2 hover:text-sky-400 transition duration-300 rounded-lg '>
          <div style={{fontSize:"18px" , paddingTop:"3px"}}>
              <BsBoxArrowUpRight />
          </div>
          <a href="https://quiz-app-seven-wheat-96.vercel.app/" target="_blank" rel="noopener noreferrer">
            <h6>Live Demo</h6>
          </a>
        </div>
      </div>
      </div>

    
      <div className='max-w-xl bg-[#0a192f] text-[#f5f5f5] border border-sky-500/30 p-5 rounded-lg hover:border-sky-500'>
        <div className='text-sky-400 font-bold text-xl pt-5 text-start pb-4'>
            <h5>BidSpirit</h5>
        </div>

        <div className='pb-1 text-start  w-full md:w-full lg:w-full'>
            <p>
                Bidspirit is an online auction platform where people can buy and sell items through live bidding.
            </p>
        </div>

        <div className='flex gap-1.5 pt-2 pb-3'>
          <button className='w-20 h-8 bg-[#273b56] text-sky-400 text-sm font-medium rounded-2xl'>Tailwind</button>
          <button className='w-20 h-8 bg-[#273b56] text-sky-400 text-sm font-medium rounded-2xl'>React</button>
          <button className='w-18 h-8 bg-[#273b56] text-sky-400 text-sm font-medium rounded-2xl'>css</button>
        </div>

    
        <div className='flex gap-5 pt-2'>
        <div className='flex gap-2 hover:text-sky-400 transition duration-300'>
          <div style={{fontSize:"18px" , paddingTop:"4px"}}>
            <FiGithub />
          </div>
          <h6>Code</h6>
        </div>
        
        <div className='flex gap-2 hover:text-sky-400 transition duration-300'>
          <div style={{fontSize:"18px" , paddingTop:"3px"}}>
              <BsBoxArrowUpRight />
          </div>
          <h6>Live Demo</h6>
        </div>
      </div>
      </div>

      <div className='max-w-xl bg-[#0a192f] text-[#f5f5f5] border border-sky-500/30 p-5 rounded-lg hover:border-sky-500'>
        <div className='text-sky-400 font-bold text-xl pt-5 text-start pb-4'>
            <h5>BidSpirit</h5>
        </div>

        <div className='pb-1 text-start  w-full md:w-full lg:w-full'>
            <p>
                Bidspirit is an online auction platform where people can buy and sell items through live bidding.
            </p>
        </div>

        <div className='flex gap-1.5 pt-2 pb-3'>
          <button className='w-20 h-8 bg-[#273b56] text-sky-400 text-sm font-medium rounded-2xl'>Tailwind</button>
          <button className='w-20 h-8 bg-[#273b56] text-sky-400 text-sm font-medium rounded-2xl'>React</button>
          <button className='w-18 h-8 bg-[#273b56] text-sky-400 text-sm font-medium rounded-2xl'>css</button>
        </div>

    
        <div className='flex gap-5 pt-2'>
        <div className='flex gap-2 hover:text-sky-400 transition duration-300'>
          <div style={{fontSize:"18px" , paddingTop:"4px"}}>
            <FiGithub />
          </div>
          <h6>Code</h6>
        </div>

       <div className='flex gap-2 hover:text-sky-400 transition duration-300'>
          <div style={{fontSize:"18px" , paddingTop:"3px"}}>
              <BsBoxArrowUpRight />
          </div>
          <h6>Live Demo</h6>
        </div>
      </div>
      </div>

      </div>
    </div>

    </div>
  )
}

export default Projects;
