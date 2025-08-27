import { useState } from 'react'
import aboutme from './assets/aboutme.png'
import dark from './assets/dark.png'
import dropdown from './assets/dropdown.png'
import projects from './assets/projects.png'
import socials from './assets/socials.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="bar-wrap">
        <div class="bar">
          <button class="dropdown"><img src={dropdown} alt="Dropdown" /></button>
          <button class="aboutme"><img src={aboutme} alt="About Me" /></button>
          <button class="socials"><img src={socials} alt="Socials" /></button>
          <button class="projects"><img src={projects} alt="Projects" /></button>
          <button class="dark"><img src={dark} alt="Dark Mode" /></button>
        </div>
      </div>
        <div class="bar-wrapper">
          <div class="bar-design1">

          </div>
          <div class="bar-circle1">

          </div>
          <div class="bar-design2">

          </div>
          <div class="bar-circle2">

          </div>
          <div class="bar-design3">

          </div>
          <div class="bar-circle3">

          </div>

      </div>
      <div class="app">
        <div class="animation">
          <div class="app">
            <div class="loading-wrapper">
              <div class="loading">

              </div>
            </div>
          </div>

          <div class="circle">

          </div>
        </div>
      </div>
    </>
  )
}

export default App
