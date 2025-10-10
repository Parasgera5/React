import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  pageSize = 15;
  c = "Hello hye bye bye"
  
  render() {
    return (
      // <>
      //   <div>App: {this.c}</div>
      //   <div>tere nain ne sharab diya do botla</div>
      // </>
      <div>
        <Router>
          <Navbar />
          <Routes>
            {/* key -> helps the react to do a re render means re mount because wo samajhta hai ki same hi link hi so no need to re render. Toh exact keyword lagane se respective category mein jaake reload karenge toh wo respective category mein chala jayega par when we also added the unique key to it toh ab no need to reload the window when hitting the respective url means catorgory from the navbar => unique se re rendering ki notification milti hai react ko so that wo respective url pe hit karte hi re render ya fir kehlo mount karde */}
            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
