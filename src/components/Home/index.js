import { useEffect, useState,useRef } from 'react'
import Logotitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import MouseTrail from "@pjsalita/react-mouse-trail"

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'n', 'd', 'e', 's', 'h',',']
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    ' ',
    'S',
    't',
    'a',
    'c',
    'k',
    ' ',
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]
  
  //mouse trail
  const config = {
    color: "#0fab74",
    idleAnimation: false,
    idleAnimationCount: 10,
    inverted: false,
    size: 10,
    trailCount: 20,
  }

  //animate header letters
  useEffect( () =>{
     setTimeout(() =>{
      setLetterClass('text-animate-hover')
    },4000)
  },[] )


  return (
    <>
      <div className="container-home-page">
        <MouseTrail {...config}></MouseTrail>

        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <img src={Logotitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <span className='jobtitle'>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={1}
              />
            </span>
            <h2>Looking forward to turn ideas into real life products</h2>
          </h1>
          {/* <span className="flat-button">
            CONTACT ME
          </span> */}
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default Home
