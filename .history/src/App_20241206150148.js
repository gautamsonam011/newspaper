import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {

  c = "Sonam Gautam";
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
