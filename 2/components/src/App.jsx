import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <Card name="Xyz" stringAge='12' numberAge={12} />
  )
}

export default App
