import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar'
import Main from './pages/main'
import Footer from './component/footer'
import Projects from './pages/projects'
import Touch from './pages/touch'
import About from './pages/about'
import Skill from './pages/skill'

function App() {

  return (
    <div>
    <div>
      <div>
         <Navbar />
      </div>
     
      <div>
        <Main />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Skill />
      </div>

      <div>
        <Projects />
      </div>

      <div>
        <Touch />
      </div>

      <div>
        <Footer />
      </div>

    </div>

    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/skill' element={<Skill/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/touch' element={<Touch/>}/>
    </Routes>
    </div>
  )
}

export default App
