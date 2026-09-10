import React from 'react'
import About from './about'
import Skill from './skill'
import Projects from './projects'
import Touch from './touch'
import Footer from '../component/footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { useState , useEffect , useNavigate} from 'react'
import Aos from 'aos'
function Main() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className='flex w-full bg-[#0c1e39] pt-65 text-center  items-center justify-center text-[#f5f5f5] gap-20 pb-8 sm:gap-10 md:gap-20 lg:gap-20 flex-col md:flex-row lg:flex-row'>
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

        <div className='flex gap-5 justify-center'>
            <div>
                <a href="#projects">
                    <button className="px-6 py-3 bg-sky-400 text-white rounded-xl shadow-lg hover:bg-sky-400 hover:shadow-xl hover:scale-105 transition duration-300">
                        View Project
                    </button>
                </a>  
            </div>
            <div>
                <a href="#touch">
                    <button className='px-6 py-3 border-2 border-sky-400 text-[#f5f5f5] text-center rounded-lg hover:shadow-xl hover:scale-105 transition duration-300'>
                        Get in Touch
                    </button>
                </a>
                
            </div>
        </div> 
        </div>
        </div> 
        
        <div data-aos="fade-right" data-aos-delay="300">
        <img src="./favour.png" alt="Profile" className='w-64 h-64 rounded-full object-cover border-4 border-sky-400' />
        </div>
    </div>
  )
}

export default Main
