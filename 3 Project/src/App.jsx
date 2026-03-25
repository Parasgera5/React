import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const jobs = [
  {
    id: 1,
    companyName: "Google",
    logo: "data:image/png;base64,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",
    description: "Work on scalable systems and build next-gen AI-powered products.",
    postedTime: "2 hours ago",
    payScale: "₹25L - ₹40L per annum"
  },
  {
    id: 2,
    companyName: "Microsoft",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEXz8/PzUyWBvAYFpvD/ugjz9fb19Pbz+fr39fr69vPy9frzRAB5uAAAofD/tgDz2tXh6tLzTBbzmoix0oCAxfH70IHS5vL16dLz5ODo7d/zPQDzlIGs0Hje6/N4wvH7znn07d8AnvDzvrPL3q+v1/L43q8L8zFJAAABeUlEQVR4nO3cR24CURREURy6ScbknB32v0VPTAuJL3lU4MG5G3g6evNqtSRJ0lVVvOZUHa8oHKZbXYj1epSu9MHhpp9ts23/3urs3tKNbr9YDftP2caTRjh9DkdISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEh4X+FmnK1/vV/6COFqO8m2/Wg2aD9302y7dWFnt2qnu9oR7qQrDwlLkvRn3XjNqbqXrioA94dZtsPXhVh/H+fZjqcCcXEehDtchL3je7plSTh4yTaYNcL5+2s2QkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCwvsK0/ul50fvl1aLdPvm1GmZrnsLvGtVvAcDJUn6Z/0AqSRGNlRkRI0AAAAASUVORK5CYII=",
    description: "Join cloud and AI teams to build enterprise-grade solutions.",
    postedTime: "5 hours ago",
    payScale: "₹20L - ₹35L per annum"
  },
  {
    id: 3,
    companyName: "Amazon",
    logo: "data:image/png;base64,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",
    description: "Work on distributed systems powering millions of users globally.",
    postedTime: "1 day ago",
    payScale: "₹18L - ₹30L per annum"
  },
  {
    id: 4,
    companyName: "Flipkart",
    logo: "https://logo.clearbit.com/flipkart.com",
    description: "Build scalable e-commerce solutions for India’s largest platform.",
    postedTime: "3 hours ago",
    payScale: "₹12L - ₹22L per annum"
  },
  {
    id: 5,
    companyName: "Zomato",
    logo: "https://logo.clearbit.com/zomato.com",
    description: "Develop food-tech platforms with real-time tracking systems.",
    postedTime: "6 hours ago",
    payScale: "₹10L - ₹18L per annum"
  },
  {
    id: 6,
    companyName: "Infosys",
    logo: "https://logo.clearbit.com/infosys.com",
    description: "Work on enterprise solutions and digital transformation projects.",
    postedTime: "2 days ago",
    payScale: "₹6L - ₹12L per annum"
  },
  {
    id: 7,
    companyName: "TCS",
    logo: "https://logo.clearbit.com/tcs.com",
    description: "Deliver IT services and consulting solutions globally.",
    postedTime: "1 day ago",
    payScale: "₹5L - ₹10L per annum"
  },
  {
    id: 8,
    companyName: "Swiggy",
    logo: "https://logo.clearbit.com/swiggy.com",
    description: "Build logistics and food delivery systems at scale.",
    postedTime: "4 hours ago",
    payScale: "₹8L - ₹16L per annum"
  }
];
  return (
    <div className="parent">
      {jobs.map((elem) => (
        <Card key={elem.id}
        logo={elem.logo}
        companyName={elem.companyName}
        description={elem.description}
        postedTime={elem.postedTime}
        payScale={elem.payScale}
 />
      ))}
    </div>
  );
}

export default App
