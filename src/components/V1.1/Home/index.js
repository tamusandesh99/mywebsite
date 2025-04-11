import React from 'react'
import './index.scss'
import CloudCafe from '../../../assets/projects-images/CloudCafe1.jpg'

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
        <div className="about-me">
          <h>ABOUT ME</h>
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
        <div className="projects">
          <h>ABOUT ME</h>
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
        <div className="projects">
          <h>ABOUT ME</h>
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
        <div className="contact">
          <h>ABOUT ME</h>
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
