import './index.scss'
import AnimatedLetters from '../V1.0/AnimatedLetters'
import { useEffect, useState } from 'react'
import TagCloud3D from './TagCloud3D/TagCloud3D'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const tagName = [
    'Java',
    'Javscript',
    'C',
    'Html5',
    'React',
    'Vue',
    'Css3',
    'AWS',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="about-page">
        <div className="text-zone-about">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={5}
            />
          </h1>
          <p>
            Ever since I got my hands on HTML and CSS back in 2017, I have been
            curious since then how deep I can go in this void of web
            development.
          </p>
          <br />
          <p>
            Just the HTML and CSS didn't satisfy me at all. I needed the website
            to have functional buttons, send and pass data, most importantly, I
            needed the website to be live. I realized that this was just a tip
            of iceberg, the important jobs were done in backend. With my mind
            full of curiosity, I enrolled into Worcester State University with
            excitement to become a software develoepr.
          </p>
          <br />
          <p>
            While I was in university, I worked with other people who had the
            same goal as me. Built projects that could help/entertain people
            such currency exchange, poker game, and an App that gets daily
            horoscope. As of now, I'm looking for a software developer role with
            the opportunity to work with the latest technologies on challenging
            and diverse projects.
          </p>
        </div>
        <div className="sphere">
          <TagCloud3D />
        </div>
      </div>
    </>
  )
}

export default About
