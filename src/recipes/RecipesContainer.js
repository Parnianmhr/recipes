import React, { PureComponent } from 'react'
import Title from './components/Title'

class RecipesContainer extends PureComponent {
  renderRecipe(recipe, index) {
    return null
  }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
        </header>

        <main>
          {this.props.recipes.map(this.renderRecipe) }
        </main>
      </div>
    )
  }
}

export default RecipesContainer
