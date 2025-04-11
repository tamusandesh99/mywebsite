import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faInstagram,
  } from '@fortawesome/free-brands-svg-icons'

  
const Navbar = () => {
  return (
    <div className='main-container-nav'>
      <b> Sandesh Gurung</b>
      <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/sandeshgurung/"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/tamusandesh99"
                >
                  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/sandeshll/"
                >
                  <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
              </li>
            </ul>
    </div>
  )
}

export default Navbar
