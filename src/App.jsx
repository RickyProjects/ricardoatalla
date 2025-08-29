import { useState, useEffect } from 'react'
import aboutme from './assets/aboutme.png'
import moon from './assets/dark.png'
import dropdown from './assets/dropdown.png'
import projects from './assets/projects.png'
import socials from './assets/socials.png'
import darkaboutme from './assets/darkaboutme.png'
import darkmoon from './assets/darksun.png'
import darkdropdown from './assets/darkdropdown.png'
import darkprojects from './assets/darkprojects.png'
import darksocials from './assets/darksocials.png'
import './App.css'

function App() {
  const [pageState, setPageState] = useState(0)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [dark])

  return (
    <>
      <div className="bar-wrap">
        <div className="bar">
          <button className="dropdown">
            <img src={dark ? darkdropdown : dropdown} alt="Dropdown" />
          </button>
          <button className="aboutme">
            <img src={dark ? darkaboutme : aboutme} alt="About Me" />
          </button>
          <button className="socials">
            <img src={dark ? darksocials : socials} alt="Socials" />
          </button>
          <button className="projects">
            <img src={dark ? darkprojects : projects} alt="Projects" />
          </button>
          <button className="dark" onClick={() => setDark(prev => !prev)}>
            <img src={dark ? darkmoon : moon} alt="Dark Mode" />
          </button>
        </div>
      </div>
        <div className="bar-wrapper">
          <div className="bar-design1">

          </div>
          <div className="bar-circle1">

          </div>
          <div className="bar-design2">

          </div>
          <div className="bar-circle2">

          </div>
          <div className="bar-design3">

          </div>
          <div className="bar-circle3">

          </div>

      </div>
      <div className="app">
        <div className="animation">
          <div className="app">
            <div className="loading-wrapper">
              <div className="loading">

              </div>
            </div>
          </div>

          <div className="circle">

          </div>
        </div>
      </div>
    </>
  )
}

export default App
