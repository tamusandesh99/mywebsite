import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'

const Terminal = () => {
  const [inputValue, setInputValue] = useState('')
  const [textHistory, setTextHistory] = useState([])
  const [time, setTime] = useState(new Date())
  const bottomRef = useRef(null)

  const locale = 'en';
  const day = time.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${time.getDate()} ${time.toLocaleDateString(locale, { month: 'long' })}\n\n`;
  const hour = time.getHours();
  const current = time.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });


  const notCommand = " is not a command. Type 'commands' for list of commands."
  const commandList = [
    'whoami',
    'Whoami',
    'commands',
    'Commands',
    'clear',
    'Clear',
  ]
  const backHome = ['goback', 'goBack', 'Goback', 'GoBack']
  const linkList = [
    'linkedin',
    'Linkedin',
    'LinkedIn',
    'Linkedin',
    'Github',
    'GitHub',
    'github',
    'Instagram',
    'instagram',
    'InstaGram',
  ]

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [textHistory])

  //update time every 15 seconds. less seconds meaning more use of useeffect. More reloading
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    },15*1000)
    return() =>{
      clearInterval(timer)
    }
  }, [])

  //display what is written in input field
  const getText = (e) => {
    setInputValue(e)
  }

  //nativates to home directory. '/' is the home
  let navigate = useNavigate()
  const nagivateTerminal = () => {
    navigate('/')
  }

  //gets the input field data when enter is pressed then searches for commands
  const getEnter = (e) => {
    if (e.key === 'Enter') {
      let trimmedInput = inputValue.trim() //get rid of unseen spaces in input field
      // let newHistory = inputValue.trim()
      // newHistory = textHistory.trim() + '\n' + '> ' + trimmedInput
      if (trimmedInput === 0) {
        console.log('why you checking here my user')
        setInputValue(trimmedInput)
      } else {
        if (backHome.includes(trimmedInput)) {
          setTextHistory((prev) => {
            return [...prev, '>' + trimmedInput]
          })
          nagivateTerminal()
        } else if (linkList.includes(trimmedInput)) {
          setTextHistory((prev) => {
            return [...prev, '>' + trimmedInput]
          })
          myLink(trimmedInput)
        } else if (commandList.includes(trimmedInput)) {
          if (commands(trimmedInput).length === 0) {
            setTextHistory(() => {
              return ['']
            })
          } else {
            // newHistory =
            //   textHistory + '\n' + '> ' + trimmedInput + commands(trimmedInput)
            setTextHistory((prev) => {
              return [...prev, '> ' + trimmedInput, commands(trimmedInput)]
            })
          }
        } else {
          // newHistory = textHistory + '\n' + '> ' + trimmedInput + notCommand
          setTextHistory((prev) => {
            return [...prev, '> ' + trimmedInput + notCommand]
          })
        }
        e.preventDefault()
        setInputValue('')
        // setTextHistory(newHistory)
      }
    }
  }

  return (
    <>
      <div className="terminal">
        <div className="terminal-container">
          <div className="terminal-top-element">
            <p>sandeshgurung.com</p>
            <p>{date}{current}</p>
          </div>
          <div className="terminal-bottom-element">
            {/* <div className="command-list-left">
              <p>this is command</p>
            </div> */}
            <p>Welcome to the terminal mode human</p>
            <br />
            <p>Type 'commands' for list of commands</p>
            {textHistory.map((text) => (
              <div className="text-history">
                <br></br>
                {text}
              </div>
            ))}
            <div className="command-area">
              <p>~ $</p>
              <input
                type="text"
                onKeyDown={(e) => getEnter(e)}
                value={inputValue}
                onChange={(e) => getText(e.target.value)}
                className="terminal-content"
                autoFocus
              ></input>
              <div ref={bottomRef} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const commands = (e) => {
  if (e === 'commands' || e === 'Commands') {
    // return (
    //   '\n' +
    //   'whoami: gets about me' +
    //   '\n' +
    //   'linkedIn: gets my Linked In' +
    //   '\n' +
    //   'github: gets my github' +
    //   '\n' +
    //   'goback: takes back to homepage' +
    //   '\n' +
    //   'clear: clears the terminal history'
    // )

    return [
      'whoami: gets about me',
      <br />,
      'linkedIn: gets my Linked In',
      <br />,
      'github: gets my github',
      <br />,
      'goback: takes back to homepage',
      <br />,
      'clear: clears the terminal history',
    ]
  } else if (e === 'whoami' || e === 'Whoami') {
    return (
      '\n' +
      "I'm Sandesh," +
      '\n' +
      'Software developer who loves building software applications.' +
      'After finding out about html and css in my freshmen year of college, I have been in love with developing applications.' +
      '\n' +
      'Through out my college year I have been exposed to programming langages such as Java, C, and Javascript with its framworks such as Vue and React.' +
      '\n' +
      'Built projects in those 4 years of my life in college with the programming languages I have known and learned new languages when needed.' +
      '\n' +
      'As of now after graduating Worcester State University with a Bachelors of Science in Computer science,' +
      '\n' +
      'Im seeking for software developer role in the field while crusing through the life with terrible music taste.' +
      '\n'
    )
  } else if (e === 'clear' || 'Clear') {
    return ''
  } else {
    console.log('if this comes then it doesnt work')
  }
}

const linkedIn = ['linkedin', 'LinkedIn', 'linkedIn', 'Linkedin']
const gitHub = ['github', 'Github', 'GitHub', 'gitHub']
const instagram = ['Instagram', 'instagram', 'InstaGram']

const myLink = (e) => {
  if (linkedIn.includes(e)) {
    return window.open('https://www.linkedin.com/in/sandeshgurung/', '_blank')
  } else if (gitHub.includes(e)) {
    return window.open('https://github.com/tamusandesh99', '_blank')
  } else if (instagram.includes(e)) {
    return window.open('https://instagram.com/sandeshll', '_blank')
  } else {
  }
}

export default Terminal
