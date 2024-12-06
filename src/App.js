import React, { Component } from 'react'


export default class App extends Component {

  c = "Sonam Gautam";
  render() {
    return (
      <div>
        My class based component {this.c}
      </div>
    )
  }
}
