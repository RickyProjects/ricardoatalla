import { useState, useEffect } from 'react'
import aboutme from './assets/aboutme.png'
import moon from './assets/dark.png'
import dropdown from './assets/dropdown.png'
import dropdownup from './assets/dropdownup.png'
import projects from './assets/projects.png'
import socials from './assets/socials.png'
import darkaboutme from './assets/darkaboutme.png'
import darkmoon from './assets/darksun.png'
import darkdropdown from './assets/darkdropdown.png'
import darkdropdownup from './assets/darkdropdownup.png'
import darkprojects from './assets/darkprojects.png'
import darksocials from './assets/darksocials.png'
import './App.css'

function App() {
  const [pageState, setPageState] = useState(0)
  const [dark, setDark] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [dark])

  return (
    <>
      <div className={`app-wrapper state-${pageState}`}>
        <div className="bar-wrap">
          <div className={`bar ${dropdownOpen ? "dropdown-active" : ""}`}>
            <button className="dropdown" onClick={() => setDropdownOpen(prev => !prev)}>
              <img src={
                dark 
                  ? (dropdownOpen ? darkdropdownup : darkdropdown)
                  : (dropdownOpen ? dropdownup : dropdown)
              }
              alt="Dropdown" />
            </button>
            <button className={`aboutme ${dropdownOpen ? "hidden" : ""}`} onClick={() => setPageState(2)}>
              <img src={dark ? darkaboutme : aboutme} alt="About Me" />
            </button>
            <button className={`socials ${dropdownOpen ? "hidden" : ""}`} onClick={() => setPageState(3)}>
              <img src={dark ? darksocials : socials} alt="Socials" />
            </button>
            <button className={`projects ${dropdownOpen ? "hidden" : ""}`} onClick={() => setPageState(4)}>
              <img src={dark ? darkprojects : projects} alt="Projects" />
            </button>
            <button className={`dark ${dropdownOpen ? "hidden" : ""}`} onClick={() => setDark(prev => !prev)}>
              <img src={dark ? darkmoon : moon} alt="Dark Mode" />
            </button>
          </div>
        </div>
          <div className="bar-wrapper">
            <div className="bar-design1"></div>
            <div className="bar-circle1"></div>
            <div className="bar-design2"></div>
            <div className="bar-circle2"></div>
            <div className="bar-design3"></div>
            <div className="bar-circle3"></div>

        </div>
        <div className="app">
          <div className="animation">
            <div className="app">
              <div className="loading-wrapper">
                <div className={`loading state-${pageState}`}>
                </div>
              </div>
            </div>

            <div className="circle">

            </div>
          </div>
        </div>     
      </div>
    </>
  )
}

export default App
