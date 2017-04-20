import React, { PureComponent } from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import './App.sass'

class App extends PureComponent {
  updateRecipe(id, changes) {
    console.log('CLICK (App)', id, changes)
    const newRecipes = this.state.recipes.map((recipe) => {
      if (recipe._id === id) {
       // return a new recipe with the changes
      return Object.assign({}, recipe, changes)
     }

  // return the recipe, unchanged
     return recipe
   })

   this.setState({
     recipes: newRecipes
    })
   }

  render() {
    return (
      <div className="app">
        <RecipesContainer
        updateRecipe={ this.updateRecipe.bind(this) }/>
      </div>
    )
  }
}

export default App
