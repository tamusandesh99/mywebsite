import React from 'react'
import { useState } from 'react'
import './index.scss'

const GuestInfo = () => {
  const [inputValue, setInputValue] = useState('')
  const [filterInput, setFilterInput] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [state, setState] = useState('')
  const [zipcode, setZipcode] = useState('')

  const getInputValue = (e) => {
    if (filterInput.length < 5) {
      setFilterInput((prev) => {
        return [...prev, +e]
      })
      console.log(filterInput)
    } else if (inputValue.length < 7) {
      setInputValue(e)

    } else if (e == 'Delete' || e == 'Backspace') {
      console.log('ss')
      setFilterInput('')
    }
  }

  const displayData = () => {
    if (inputValue == '0719136') {
      setName('Sandesh Gurung')
      setAge('23')
      setState('Massachusetts')
      setZipcode('01545')
    }
    setFilterInput('')
  }

  const handleBackspace = (e) => {
    if (e.keyCode === 8) {
      setInputValue('')
      setName('')
      setAge('')
      setState('')
      setZipcode('')
    }
  }

  const submitData = () => {
    setInputValue('')
    setName('')
    setAge('')
    setState('')
    setZipcode('')
    setFilterInput('')
  }

  const getName = (e) => {
    setName(e)
  }

  const getAge = (e) => {
    setAge(e)
  }

  const getState = (e) => {
    setState(e)
  }

  const getZipcode = (e) => {
    setZipcode(e)
  }
  return (
    <>
      <div className="guestInfo">
        <div className="inner-blue">
          <div className="inner-yellow">
            <div className="center-content">
              <p>Enter guest ID</p>
              <input
                type="text"
                className="id-num"
                value={inputValue}
                onChange={(e) => getInputValue(e.target.value)}
                onKeyDown={handleBackspace}
                autoFocus
              ></input>
              <br></br>
              <button
                onClick={(e) => {
                  displayData()
                }}
              >
                Enter
              </button>
              <br></br>
              <br></br>
              <p>Enter guest name</p>
              <input value={name} onChange={(e) => getName(e.target.value)} type="text"  className="GuestInfo"></input>
              <br></br>
              <br></br>
              <p>Enter guest age</p>
              <input value={age} onChange={(e) => getAge(e.target.value)} type="text" className="GuestInfo"></input>
              <br></br>
              <br></br>
              <p>Residency out of state or in state</p>
              <input value={state} onChange={(e) => getState(e.target.value)} type="text" className="GuestInfo"></input>
              <br></br>
              <br></br>
              <p>Zipcode</p>
              <input value={zipcode} onChange={(e) => getZipcode(e.target.value)} type="text" className="GuestInfo"></input>
              <br></br>
              <button
                className="submit"
                onClick={(e) => {
                  submitData()
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GuestInfo
