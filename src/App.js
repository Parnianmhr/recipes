import React, { Component } from 'react'
import './App.sass'

class App extends Component {
  render() {
    return (
      <div className="app">
        { this.props.children }
      </div>
    )
  }
}

export default App
