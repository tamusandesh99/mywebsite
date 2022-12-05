import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Blogs = () => {
  const blogs = ['B', 'l', 'o', 'g', 's']
  const [letterClass, setLetterClass] = useState('text-animate')

  //open tab
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="blog-component">
        <div className="blog-title">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={blogs}
              idx={5}
            />
          </h1>
          <p>
            Blogs I wrote when I was in university. As you know when building
            software or developing web applications where are lots of area to
            cover. So as I was building my projects, I took notes of my research
            as well as I read "Apprenticeship Patterns: Guidance for the
            Aspiring Software Craftsman" by Dave Hoover and wrote my experience
            of how some of the patterns were related to my CS journey.
          </p>
        </div>

        <div className="blogs-table">
                <div className='single-blog'>
                  <div className="blog-table-cell one">
                    <button
                      onClick={() => openInNewTab('https://wp.me/pdmxUR-1o')}
                    >
                      Two Sides of Web development coin
                    </button>
                    <p>what are frontend & backend and how do they work</p>
                  </div>
                </div>
                <div className='single-blog'>
                  <div className="blog-table-cell one">
                    <button
                      onClick={() => openInNewTab('https://wp.me/pdmxUR-17')}
                    >
                      What are Frameworks
                    </button>
                    <p>
                      Every beginners struggles to understand what frameworks
                      are
                    </p>
                  </div>
                </div>
                <div className='single-blog'>
                  <div className="blog-table-cell one">
                    <button
                      onClick={() => openInNewTab('https://wp.me/pdmxUR-1A')}
                    >
                      How are API called
                    </button>
                    <p>
                      API is Application programming interface but how can we
                      use them
                    </p>
                  </div>
                </div>
                <div className='single-blog'>
                  <div className="blog-table-cell two">
                    <button
                      onClick={() =>
                        openInNewTab(
                          'https://tamusandesh.wordpress.com/2021/10/24/docker/'
                        )
                      }
                    >
                      What is Docker
                    </button>
                    <p>When to use Docker and it's comparison</p>
                  </div>
                </div>
                <div className='single-blog'>
                  <div className="blog-table-cell two">
                    <button
                      onClick={() =>
                        openInNewTab(
                          'https://tamusandesh.wordpress.com/2021/11/20/mongodb/'
                        )
                      }
                    >
                      What is MongoDB
                    </button>
                    <p>
                      MongoDB has been at the forefront of application
                      development for developers
                    </p>
                  </div>
                </div>
                <div className='single-blog'>
                  <div className="blog-table-cell two">
                    <button
                      onClick={() =>
                        openInNewTab(
                          'https://tamusandesh.wordpress.com/2022/03/12/craft-over-art/'
                        )
                      }
                    >
                      Craft over Art
                    </button>
                    <p>
                      Make contents that are useful rather than beaufiful or
                      both
                    </p>
                  </div>
                </div>
                <div className='single-blog'>
                  <div className="blog-table-cell three">
                    <button
                      onClick={() =>
                        openInNewTab(
                          'https://tamusandesh.wordpress.com/2022/03/27/learn-how-you-fail/'
                        )
                      }
                    >
                      Learn how you fail
                    </button>
                    <p>Debug how you failed and how to get out of it</p>
                  </div>
                </div>
                <div className='single-blog'>
                  <div className="blog-table-cell three">
                    <button
                      onClick={() =>
                        openInNewTab(
                          'https://tamusandesh.wordpress.com/2022/04/03/rubbing-elbows/'
                        )
                      }
                    >
                      Rubbing Elbows
                    </button>
                    <p>How to get out of software development skills plateau</p>
                  </div>
                </div>
                <div className='single-blog'>
                  <div className="blog-table-cell three">
                    <button
                      onClick={() => openInNewTab('https://wp.me/pdmxUR-2I')}
                    >
                      The Deep End
                    </button>
                    <p>
                      The Opposite of Rubbing Elbows. How to get back into
                      competence
                    </p>
                  </div>
                </div>

        </div>
      </div>
    </>
  )
}

export default Blogs
