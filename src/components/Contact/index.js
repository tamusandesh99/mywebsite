import { useState, useEffect,useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import form from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'
import Loader from 'react-loaders'

const Contact = () => {
  const contactMe = ['G','e','t', ' ', 'I','n', ' ', 'T','o','u','c','h']
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_ofspfnf', 'template_dgx5d98', form.current, 'LZgNoXXq4UtBHMbTS')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactMe}
              idx={5}
            />
          </h1>
          <p>Im interested in any freelance opportunities. If not send your anonymous message. A feedback on my website would be wonderful.</p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="user_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li> 
                <li>
                  <textarea
                    placeholder="Send me a message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>

                  <input type="submit" className="flat-button" value="SEND" />

                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
