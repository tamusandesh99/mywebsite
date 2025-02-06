import React from 'react'
import './index.scss'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Popup from './Popup'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import AnimatedLetters from '../V1.0/AnimatedLetters'

const Projects = ({ turnMusicOff }) => {
  //Set Popup image on click
  const [closeBtn, setCloseBtn] = useState(false)
  const [showImage, setShowImage] = useState()
  const [letterClass, setLetterClass] = useState('text-animate')
  const projectTitle = ['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']

  const popup = (e) => {
    setCloseBtn(true)
    setShowImage(e)
  }

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  //navigate to terminal mode
  let navigate = useNavigate()
  const nagivateTerminal = () => {
    navigate('/terminal')
    turnMusicOff()
  }

  //navigate to typing webapp
  const navigateTyping = () => {
    navigate('/webapp')
  }

  //navigate to guest info
  const navigatePantry = () => {
    navigate('/pantry')
  }

  //open tab
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const [isHoveringTerminal, setIsHoveringTerminal] = useState(false)
  const [isHoveringCafe, setIsHoveringCafe] = useState(false)
  const [isHoveringDiscord, setIsHoveringDiscord] = useState(false)
  const [isHoveringTyping, setIsHoveringTyping] = useState(false)
  const [isHoveringLibre, setIsHoveringLibre] = useState(false)
  const [isHoveringWeb, setIsHoveringWeb] = useState(false)

  const handleMouseOver = (projectButton) => {
    if (projectButton === 'terminal') {
      setIsHoveringTerminal(true)
    } else if (projectButton === 'cafe') {
      setIsHoveringCafe(true)
    } else if (projectButton === 'discord') {
      setIsHoveringDiscord(true)
    }
    if (projectButton === 'typing') {
      setIsHoveringTyping(true)
    } else if (projectButton === 'libre') {
      setIsHoveringLibre(true)
    } else if (projectButton === 'web') {
      setIsHoveringWeb(true)
    }
  }

  const handleMouseOut = (projectButton) => {
    if (projectButton === 'terminal') {
      setIsHoveringTerminal(false)
    } else if (projectButton === 'cafe') {
      setIsHoveringCafe(false)
    } else if (projectButton === 'discord') {
      setIsHoveringDiscord(false)
    }
    if (projectButton === 'typing') {
      setIsHoveringTyping(false)
    } else if (projectButton === 'libre') {
      setIsHoveringLibre(false)
    } else if (projectButton === 'web') {
      setIsHoveringWeb(false)
    }
  }

  return (
    <>
      <div className="projects-component">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={projectTitle}
            idx={15}
          />
        </h1>

        <p className="project-des">
          Some of my projects I have done while I was in university. I have done
          some projects together with amazing people while some of the projects,
          I have done solely. It is just a picture for now, will add
          repositories in future. Although the projects may only make myself
          proud, in the future I will add projects to impress everyone.
        </p>
        <Popup
          trigger={closeBtn}
          setTrigger={setCloseBtn}
          sendImage={showImage}
        ></Popup>

        <div className="project-table">
          <div
            className="single-project logo-terminal"
            onMouseOver={() => handleMouseOver('terminal')}
            onMouseOut={() => handleMouseOut('terminal')}
          >
            <button onClick={nagivateTerminal}>
              {/* <p>Enter Termianl Mode</p> */}
              {/* <img src={logoTerminal}></img> */}
              {isHoveringTerminal && (
                <div className="project-hover-div">Click Me</div>
              )}
            </button>
          </div>
          <div
            className="single-project logo-cafe"
            onMouseOver={() => handleMouseOver('cafe')}
            onMouseOut={() => handleMouseOut('cafe')}
          >
            {' '}
            <button
              onClick={(e) =>
                openInNewTab('https://github.com/tamusandesh99/TwitchBot')
              }
            >
              {/* <p>Cafe Website</p> */}
              {isHoveringCafe && (
                <div className="project-hover-div">Click Me</div>
              )}
            </button>
          </div>
          <div
            className="single-project logo-discord"
            onMouseOver={() => handleMouseOver('discord')}
            onMouseOut={() => handleMouseOut('discord')}
          >
            <button
              onClick={() =>
                openInNewTab('https://github.com/tamusandesh99/BotDai')
              }
            >
              {/* <p>Discord Bot</p> */}
              {/* <img src={logoDiscord}></img> */}
              {isHoveringDiscord && (
                <div className="project-hover-div">Click Me</div>
              )}
            </button>
          </div>
          <div
            className="single-project logo-typing"
            onMouseOver={() => handleMouseOver('typing')}
            onMouseOut={() => handleMouseOut('typing')}
          >
            <button onClick={navigateTyping}>
              {/* <p>Practice your Typing</p> */}
              {/* <img src={logoTyping}></img> */}
              {isHoveringTyping && (
                <div className="project-hover-div">Click Me</div>
              )}
            </button>
          </div>
          <div
            className="single-project logo-pantry"
            onMouseOver={() => handleMouseOver('libre')}
            onMouseOut={() => handleMouseOut('libre')}
          >
            {' '}
            <button onClick={(e) => popup('libre')}>
              {/* <p>Libre Food Pantry</p> */}
              {/* <img src={logoPantry}></img> */}
              {isHoveringLibre && (
                <div className="project-hover-div">Click Me</div>
              )}
            </button>
          </div>
          <div
            className="single-project logo-mysite"
            onMouseOver={() => handleMouseOver('web')}
            onMouseOut={() => handleMouseOut('web')}
          >
            {' '}
            <button onClick={(e) => popup('myweb')}>
              {/* <p>Old Website</p> */}
              {/* <img src={logoMyweb}></img> */}
              {isHoveringWeb && (
                <div className="project-hover-div">Click Me</div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
