import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import './RecipesContainer.sass'

class RecipesContainer extends PureComponent {
  static propTypes = {
     updateRecipe: PropTypes.func.isRequired,
     recipes: PropTypes.array.isRequired,
   }

  renderRecipe(recipe, index) {
    return <RecipeItem
    key={index} { ...recipe }
    onChange={ this.updateRecipe.bind(this) } />
   }

  updateRecipe(id, changes) {
      console.log('CLICK (RecipesContainer)', id, changes)
      this.props.updateRecipe(id, changes)
    }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
      </div>
    )
  }
}

const mapSatetToProps = ({ recipes }) => ({
  recipes
})

export default connect(mapSatetToProps)(RecipesContainer)
