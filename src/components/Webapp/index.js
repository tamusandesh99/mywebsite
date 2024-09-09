import './index.scss'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'


const Webapp = () => {
  //This is for the timer in typing. Countdown
  const [timeLeft, setTimeLeft] = useState(60)
  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId)
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft])

  //Get the quote from API. Exact quote is at quote.condent in data from json
  const url = 'https://api.quotable.io/random'
  const [quote, setQuote] = useState(temporaryQuote())
  const [changeQuote, setChangeQuote] = useState(false)

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        setQuote(response.data.content);
        console.log("API is up - Sandesh Gurung");
      } catch (error) {
        console.log("API is down");
        setQuote(temporaryQuote());
      }
    };

    if (changeQuote) {
      fetchQuote();
      setChangeQuote(false); // Reset changeQuote after fetching
    }
  }, [changeQuote]);

  let randomQuote = quote
  const [userValue, setUserValue] = useState(' ')
  const [outgoingChars, setOutgoingChars] = useState('')
  const [currentChar, setCurrentChar] = useState(randomQuote.charAt(0))
  const [incomingChars, setIncomingChars] = useState(randomQuote.substr(1))
  const incorrectChar = useRef()
  // const [wrongChar, setWrongChar] = useState('timer')

  //Generates new quote if current character length is 0. Re assigns incoming chars
  const createNewQuote = (e) => {
    if (currentChar.length == 0) {
      setChangeQuote(true) // refresh useEffect for new quote
      randomQuote = quote // assign new quote
      setCurrentChar(randomQuote.charAt(0))
      setIncomingChars(randomQuote.substr(1))
      setUserValue('')// resets text area from previous quote
      setOutgoingChars('')// outgoing char should be empty so previous quote doesnt stay in page
      setTimeLeft(60)//reset the timer
    }
  }

  //compares the key pressed in keyboard with the characters in quote. All the comparing happens ONLY when key is pressed
  function checkCharacter(e) {
    let updatedOutgoingChars = outgoingChars
    let updatedIncomingChars = incomingChars

    //2
    if (e === currentChar) {
      setUserValue(userValue + currentChar)
      updatedOutgoingChars += currentChar
      setOutgoingChars(updatedOutgoingChars)

      //5
      setCurrentChar(incomingChars.charAt(0))
      
      //6
      updatedIncomingChars = incomingChars.substring(1)
      setIncomingChars(updatedIncomingChars)
      // setWrongChar('timer')
    } else if (e === 'Shift') {
      console.log("This is Shift")
    }
    else{
      console.log("Wrong letter")
      // setWrongChar('wrong-char-div')
    }
  }

  return (
    <>
      <div className="typing-zone-webapp">
        <div className='timer'>
          {timeLeft === 0 ? <span>You are too slow</span> : timeLeft}
        </div>
        <div className='typing' ref={incorrectChar}>
          <div className='given-quote'>
            <span className="outgoing-char">{outgoingChars}</span>
            <span className="current-char">{currentChar}</span>
            <span className="incoming-char">{incomingChars}</span>
          </div>
          {/* <textarea id="typedQuote" className="quote-typed" onKeyPress={(e) => handler(e)}></textarea> */}
          <textarea
            className="quote-typed"
            value={userValue}
            onChange={(e) => createNewQuote(e.target.value)}
            onKeyDown={(e) => checkCharacter(e.key)}
          ></textarea>
          {/* <div className="typing-result">
            <>Previous Result</>
            <p>
              Total Words:
              <span id="totalWords"> {test()}</span>
            </p>
            <p>
              Total seconds:
              <span id="totalTime"></span>
            </p>
          </div> */}
        </div>
      </div>
    </>
  )
}

//generate random quote on start or if API is down
function temporaryQuote() {
  const tempQuote = [
    '20 percent of your activities will account for 80 percent of your results.',
    'The present moment dies every moment to become the past , is reborn every moment into the future. All experience is now. Now never ends.',
    'Too much sanity may be madness and the maddest of all, to see life as it is and not as it should be. ',
    "What would you do if you weren't afraid?",
    'Success is good at any age, but the sooner you find it, the longer you will enjoy it.',
    'All wealth is the product of labor.',
    "We are all different. Don't judge, understand instead.",
    'Your chances of success in any undertaking can always be measured by your belief in yourself.',
    'Fear does not have any special power unless you empower it by submitting to it.',
    'Setting goals is the first step in turning the invisible into the visible.',
    'Life is a process. We are a process. The universe is a process.',
    "Animals don't hate, and we're supposed to be better than them.",
    'I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.',
    'Sometimes you will never know the value of something, until it becomes a memory.',
    'In all human affairs there are efforts, and there are results, and the strength of the effort is the measure of the result.',
    'Excuses are the lies you convince yourself are true to avoid proving you are worthy of the gift you were given.',
    'There is no absolute success in the world, only constant progress.',
    'The degree of responsibility you take for your life determines how much change you can create in it.',
    "I didn't get there by wishing for it or hoping for it, but by working for it.",
    'Know your gifts and share them.',
    "Happiness is not the absence of problems, it's the ability to deal with them.",
    'We have no more right to consume happiness without producing it than to consume wealth without producing it.',
    'A fear-oriented man is always calculating, planning, arranging, safeguarding. His whole life is lost in this way.',
    'If we have no peace, it is because we have forgotten that we belong to each other.',
    'Until you make the unconscious conscious, it will direct your life and you will call it fate.',
    'Instead of thinking outside the box, get rid of the box.',
    'Weeds are flowers too, once you get to know them.',
    "Every day may not be good, but there's something good in every day.",
    'Forgive yourself for your faults and your mistakes and move on.',
    'We must learn to live together as brothers or perish together as fools.',
    'To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking.',
    'Simplicity is a difficult thing to achieve. ',
    'Keep your face to the sunshine and you cannot see the shadows.',
    'The best revenge is to be unlike him who performed the injury.',
    'Your worth consists in what you are and not in what you have.',
    "Don't set your own goals by what other people make important.",
    'At the center of your being you have the answer; you know who you are and you know what you want.',
    'What the mind can conceive and believe, and the heart desire, you can achieve.',
    'The secret of perfect health lies in keeping the mind always cheerful - never worried, never hurried, never borne down by any fear, thought or anxiety.',
    'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    'A creative man is motivated by the desire to achieve, not by the desire to beat others.',
    'Anyone who wants to achieve a dream must stay strong, focused and steady.',
    "Don't change your mind just because people are offended; change your mind if you're wrong.",
    "This is such a short and precious life that it's really important that you don't spend it being unhappy.",
    'Heart is what separates the good from the great.',
    'The ability to observe without evaluating is the highest form of intelligence.',
    "Forget yesterday - it has already forgotten you. Don't sweat tomorrow - you haven't even met. Instead, open your eyes and your heart to a truly precious gift - today.",
    'When you win, say nothing, when you lose say less.',
    'The real meditation is how you live your life.',
    "People don't care how much you know until they know how much you care.",
  ]
  return tempQuote[Math.floor(Math.random() * tempQuote.length)]
  // return 'This is test!'
}

export default Webapp
