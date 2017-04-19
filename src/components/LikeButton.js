import React, { PureComponent } from 'react'
import './LikeButton.sass'

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
            { liked ? '❤️' : '♡' }
          </button>
          <span className="likes">{ liked ? 'You like this' : null }</span>
        </p>
      )
  }
}
export default LikeButton
