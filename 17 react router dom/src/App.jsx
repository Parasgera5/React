import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div>
      <h1>Navbar</h1>
      {/* <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a> */}
      {/* use link instead of a tag to avoid page refresh */}
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <h1>Footer</h1>
    </div>
  )
}

export default App