import './App.scss'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Layout from './components/Layout'
import Home from './components/V1.0/Home'
import Webapp from './components/Webapp'
import Terminal from './components/V1.0/Terminal'
import GuestInfo from './components/Projects/GuestInfo'

import NewHome from './components/V1.1/Home'
import NewLayout from './components/V1.1/Layout'

function App() {

  return (
    <>
      <Routes>

      <Route path="/" element={<NewLayout />}>
          <Route index element={<NewHome />} />
        </Route>

        <Route path="/oldsite" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/terminal" element={<Terminal />} />
        <Route path="/webapp" element={<Webapp />} />
        <Route path="/pantry" element={<GuestInfo />} />
      </Routes>
    </>
  )
}

export default App
