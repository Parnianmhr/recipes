import React, { PureComponent } from 'react'
import './LikeButton.sass'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'

class LikeButton extends PureComponent {
  constructor() {
    super()
    this.state = {
      liked: false
    }
  }

  classNames() {
    const { liked } = this.state
    let classes = 'liked'
    if (liked) { classes += 'liked' }
    return classes
  }

  toggleLike() {
    this.setState({
      liked: !this.state.liked
    })
      console.log('Like button clicked!')
    }

  render() {
      const { liked } = this.state
      return (
        <p className={ this.classNames() }>
          <button onclick={ this.toggleLike.bind(this) }>
          <img className="heart" src={ liked ? HeartRed : HeartGrey } />
          <span className="copy">
            <img className="heart" src={ liked ? HeartRed : HeartGrey } />
          </span>
          </button>
          <span className="likes">{ liked ? 'You like this' : null }</span>
        </p>
      )
  }
}
export default LikeButton
