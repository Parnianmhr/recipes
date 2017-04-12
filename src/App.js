import React from 'react'
import Title from './Components/Title'
import RecipesContainer from './recipes/RecipesContainer'

class App extends React.Component {
  render() {
    return (
      <div>
        <RecipesContainer recipes={ [] } />
      </div>
    )
  }
}

export default App
