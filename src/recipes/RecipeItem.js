import React, { PureComponent, PropTypes } from 'react'
import Pescatarian from '../images/pescatarian.svg'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import LikeButton from '../components/LikeButton'
// import toggleLikeAction from '../actions/recipes/toggle-like'
import './RecipeItem.sass'

class RecipeItem extends PureComponent {
  static propTypes = {
    _id:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }

  toggleLike() {
      const { onChange, _id, liked} = this.props
      console.log('CLICK (RecipeItem)', _id)
      onChange(_id, {liked: !liked })
    }

  render() {
    const { _id, title, photo, summary, vegan, vegetarian, pescatarian, liked } = this.props

    return(
      <article className="recipe">
      <header>
        <div className="cover" style={{ backgroundImage: `url(${photo})` }} />
        <h1>
        
        </h1>
        <ul className="categories">
            { vegan && <li title="vegan"><img src={Vegan} className='imageclass'/></li> }
            { !vegan && vegetarian && <li title="vegetarian"><img src={Vegetarian} /></li> }
            { pescatarian && <li title="pescatarian"><img src={Pescatarian} /></li> }
          </ul>
        </header>
        <main>
          <p>{ summary }</p>
        </main>
        <footer>
          <LikeButton liked={ liked } onChange={ this.toggleLike.bind(this) } />
        </footer>
      </article>
    )
  }
}



export default RecipeItem
