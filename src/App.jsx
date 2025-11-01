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
import face from './assets/face.png'
import tile from './assets/Tiles.png'
import slime from './assets/slime.png'
import powder from './assets/powder.png'
import soon from './assets/soon.png'
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

  const renderContent = () => {
    switch (pageState) {
      case 2:
        return <div>
          <img src={face} className="face"/>
          <p className="AboutText">Hi, I'm Ricardo! Thanks for stopping by my portfolio! 
        I'm currently a second year computer science student at the University of Ottawa. 
        I hope to work in cybersecurity, but as of now, I work on various side projects.</p>
        <p>Coding has always been a passion of mine. 
          Since I was a toddler, I've had a rampant mind, so programming has allowed me to see my crazy ideas come to life! 
          Take a look at them in the projects tab!</p></div>
        
      case 3:
        return <div><h1><b>SOCIALS</b></h1><p></p><p className="SocialsText">You can contact me by sending me a DM on Instagram <a href="https://www.instagram.com/rickyatalla?igsh=MXNtNGc0Ync5dmg1dw%3D%3D&utm_source=qr">@rickyatalla</a></p>
        <p>Learn more about me on my LinkedIn <a href="https://www.linkedin.com/in/ricardo-atalla-2b0837343/">@ricardo-atalla</a></p>
        <p>Take a look or try out some of my projects on my GitHub <a href="https://github.com/RickyProjects">@RickyProjects</a></p>
          </div>
      case 4:
        return <div className="ProjectsTitle">
          <p>If you'd like to try out any of my other projects, take a look at my <a href="https://github.com/RickyProjects">GitHub</a>!</p>

          <div className="ProjectsList">
            <div>
              <p className="TwirlingTiles"><a href="https://github.com/RickyProjects/Twirling-Tiles-Terrain">Twirling Tiles</a>: Creates a 3 dimensional terrain with a selectable grid size. Blocks are breakable and placeable by clicking circles. </p>
              <img src={tile} className="tile" />
            </div>
            <div>
              <p className="SlimySkirmish"><a href="https://github.com/RickyProjects/Slimy-Skirmish">Slimy Skirmish</a>: A 2D story and adventure video game that follows the story of slime lost in a barren wasteland of ruins.</p>
              <img src={slime} className="slime" />
            </div>
            <div>
              <p className="PowderSimulation">Powder Simulation: A simulation of how different powdered materials interact using a sandbox format (in progress).</p>
              <img src={powder} className="powder" />
            </div>
            <div>
              <p className="ComingSoon">Many more projects are in the works. Check back in a few months and I'm certain many more projects will be here!</p>
              <img src={soon} className="soon" />
            </div>
          </div>
        </div>

      default:
        return <p className="text-xl text-center"></p>
    }
  }

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
                  <div className="content-wrapper">
                    {renderContent()}
                  </div>
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
