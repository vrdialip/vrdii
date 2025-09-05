import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './components/nav.jsx'
import Home from './components/home.jsx'
import About from './components/About.jsx'
import Skills from './components/skills.jsx'
import Projects from './components/project.jsx'
import Contact from './components/contact.jsx'
import Particles from '../ReactBits/Particles.jsx'
import Copyright from './components/copyright.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1, // biar di belakang konten
        pointerEvents: 'none', // biar klik tetap kena konten
      }}
    >
      <Particles
        particleColors={['#ffffff', '#fbee0c']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>

    <Nav/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Copyright/>
  </StrictMode>,
)
