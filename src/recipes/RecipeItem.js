import React, { PureComponent, PropTypes } from 'react'
import Pescatarian from '../images/pescatarian.svg'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import LikeButton from '../components/LikeButton'
import toggleLikeAction from '../actions/recipes/toggle-like'
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
    toggleLikeAction: PropTypes.func.isRequired,
  }

  toggleLike() {
      const { _id, likedBy, currentUser } = this.props
      if (!currentUser) return

      console.log('CLICK (RecipeItem)', _id)
      this.props.toggleLikeAction({ _id, likedBy }, currentUser)
    }

  render() {
    const { _id, title, photo, summary, vegan, vegetarian, pescatarian, liked, likedBy } = this.props

    return(
      <article className="recipe">
      <header>
        <div className="cover" style={{ backgroundImage: `url(${photo})` }} />
        <h1>
          <Link to={`/recipes/${_id}`}>{ title }</Link>
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
          <LikeButton
            liked={ liked }
            likes={likedBy.length}
            onChange={ this.toggleLike.bind(this) } />
        </footer>
      </article>
    )
  }
}

const mapStateToProps = ({ currentUser }, { likedBy }) => {
  return {
    currentUser,
    liked: likedBy.filter((like) => (like === (currentUser && currentUser._id))).length > 0
  }
}

export default connect(mapStateToProps, { toggleLikeAction })(RecipeItem)
