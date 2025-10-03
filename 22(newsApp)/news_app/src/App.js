import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  c = "Hello hye bye bye"
  render() {
    return (
      // <>
      //   <div>App: {this.c}</div>
      //   <div>tere nain ne sharab diya do botla</div>
      // </>
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
