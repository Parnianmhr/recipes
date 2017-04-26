import React, { Component } from 'react'
import './App.sass'
// Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'

class App extends Component {
  static childContextTypes = {
      muiTheme: React.PropTypes.object.isRequired,
    }

    getChildContext() {
      return { muiTheme }
    }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app">
          <Navigation />
          <Loading />
          { this.props.children }
          <LoadError />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
