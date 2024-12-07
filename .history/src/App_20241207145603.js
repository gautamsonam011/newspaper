import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


export default class App extends Component {

  render() {
    return (
      <div>
        <router>
          <Navbar/>
          <News pageSize={5} country="in" category="entertainment" />
          <Switch>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
          </Switch>
        </router>
      </div>
    )
  }
}
