import './index.scss'
import './cube.scss'
import Home from '../Home'
import About from '../About'
import Projects from '../Projects'
import Blogs from '../Blogs'
import Contact from '../Contact'
import Sidebar from '../Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Slide, Bounce, Hinge, JackInTheBox, Roll } from 'react-awesome-reveal'
import { GrSoundcloud } from 'react-icons/gr'
import { useState, useRef, useEffect } from 'react'
import music from '../../assets/projects-images/music.mp3'

const Layout = () => {
  let navigate = useNavigate()
  const nagivateTerminal = () => {
    setOnOff('OFF')
    setMusicDiv('music-off-color')
    song.pause()
    if (window.innerWidth < 450) {
      console.log('ok')
    } else {
      navigate('/terminal')
    }
  }

  const [onOff, setOnOff] = useState('OFF')
  const [musicDiv, setMusicDiv] = useState('music-off-color')
  const [song, setSong] = useState(new Audio(music))

  const setSoundButton = () => {
    if (onOff === 'OFF') {
      setOnOff('ON')
      setMusicDiv('music-on-color')
      song.play()
    } else {
      setOnOff('OFF')
      setMusicDiv('music-off-color')
      song.pause()
    }
  }

  const turnMusicOff = () =>{
    if(onOff == 'ON'){
      setOnOff('OFF')
      setMusicDiv('music-off-color')
      song.pause()
    }
    else{
      console.log('music is off')
    }
  }

  //scroll to bottom
  const bottomRef = useRef(null)
  const [scroll, setScroll] = useState(false)
  const scrollContact = () => {
    console.log('p')
    setScroll(true)
  }
  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    if (scroll) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      setScroll(false)
    }
  }, [scroll])

  return (
    <div className="MyApp">
      <div className="music-content">
        <div>
          <h1 className={musicDiv}>
            <GrSoundcloud />
          </h1>
          <p>Sound</p>
          <button className={musicDiv} onClick={setSoundButton}>
            {onOff}
          </button>
        </div>
      </div>
      <div className="page">
        {/* <span className="tags top-tags"> &lt;body&gt;</span> */}
        {/* <Outlet /> */}
        <div className="terminal-cube">
          {/* <p class="Click-speech">Click Me!</p> */}
          <button className="button-cube" onClick={nagivateTerminal}>
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faTerminal} color="#ADAAAA" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faTerminal} color="#F06529" />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faTerminal} color="#28A4D9" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faTerminal} color="#1c8239" />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faTerminal} color="#EFD81D" />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faTerminal} color="#EC4D28" />
                </div>
              </div>
            </div>
          </button>
        </div>

        <div>
          <Sidebar />
        </div>

        <div className="components">
          <Home />
          <span onClick={scrollContact} className="flat-button">
            CONTACT ME
          </span>
        </div>
        <div className="scroll-down">
          {/* <p>Scroll me</p>
          <p>Scroll me</p> */}
        </div>
        <Slide triggerOnce direction="left" duration={1500}>
          <div className="components">
            <About />
          </div>
        </Slide>
        <Slide triggerOnce direction="left" duration={1500}>
          <div className="components">
          <Projects turnMusicOff={turnMusicOff} />
          </div>
        </Slide>
        <Slide triggerOnce direction="left" duration={1500}>
          <div className="components">
            <Blogs />
          </div>
        </Slide>
        <Slide triggerOnce direction="left" duration={1500}>
          <div className="components">
            <div ref={bottomRef} />
            <Contact sendFunction={scrollContact} />
          </div>
        </Slide>
        <span className="tags bottom-tags">
          {/* <span className="bottom-tag-html"> &lt;/body&gt; </span> */}
        </span>
      </div>
    </div>
  )
}

export default Layout
