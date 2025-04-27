import React from 'react'
import './index.scss'
import CloudCafe from '../../../assets/projects-images/CloudCafe1.jpg'
import Project1 from '../../../assets/projects-images/logo1.png'

const Home = () => {
  return (
    <div className="main-container-home">
      <div className="top-sub-container">
        <div className="name">
          <h1>SANDESH</h1>
          <h1>GURUNG</h1>
        </div>
        <div className="empty-background">
          {/* <p>
            Several React libraries are available for generating "Lorem ipsum"
            text. For instance, the react-lorem-ipsum package offers components
            and functions to create placeholder text, random avatars, names, and
            usernames. Another option is the react-lorem-component, which allows
            customization of the generated text, including the number of
            paragraphs and words. Several React libraries are available for
            generating "Lorem ipsum" text. For instance, the react-lorem-ipsum
            package offers components and functions to create placeholder text,
            random avatars, names, and usernames. Another option is the
            react-lorem-component, which allows customization of the generated
            text, including the number of paragraphs and words.
          </p> */}
        </div>
      </div>

      <div className="bottom-sub-container">
        <div className="bottom about-me">
          <h2>ABOUT ME</h2>
          <div className="about-me-bio">
            <img src={CloudCafe}></img>
            <p>
              Several React libraries are available for generating "Lorem ipsum"
              text. For instance, the react-lorem-ipsum package offers
              components and functions to create placeholder text, random
              avatars, names, and usernames. Another option is the
              react-lorem-component, which allows customization of the generated
              text, including the number of paragraphs and words.
            </p>
          </div>
        </div>
        <div className="bottom skills">
          <h2>SKILLS</h2>
          <div className="about-me-bio">
            <p>
              Several React libraries are available for generating "Lorem ipsum"
              text. For instance, the react-lorem-ipsum package offers
              components and functions to create placeholder text, random
              avatars, names, and usernames. Another option is the
              react-lorem-component, which allows customization of the generated
              text, including the number of paragraphs and words.
            </p>
          </div>
        </div>
        <div className="bottom projects">
          <h2>PROJECTS</h2>
          <div className="project-columns">
            <div className="project">
              <img src={Project1} alt="Project 1" />
              <p>Project 1</p>
            </div>
            <div className="project">
              <img src={Project1} alt="Project 1" />
              <p>Project 1</p>
            </div>
            <div className="project">
              <img src={Project1} alt="Project 1" />
              <p>Project 1</p>
            </div>
          </div>
        </div>
        <div className="bottom contact">
          <h2>CONTACT ME</h2>
          <div className="about-me-bio">
            <p>
              Several React libraries are available for generating "Lorem ipsum"
              text. For instance, the react-lorem-ipsum package offers
              components and functions to create placeholder text, random
              avatars, names, and usernames. Another option is the
              react-lorem-component, which allows customization of the generated
              text, including the number of paragraphs and words.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
