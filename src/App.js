import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Webapp from './components/Webapp'
import Terminal from './components/Terminal'
import GuestInfo from './components/Projects/GuestInfo'

function App() {
  return (
    <>
      <Routes>
        <Route path="/terminal" element={<Terminal />} />
        <Route path="/webapp" element={<Webapp />} />
        <Route path="/pantry" element={<GuestInfo />} />

        <Route path="/*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
