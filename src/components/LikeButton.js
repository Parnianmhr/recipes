import React, { PureComponent, PropTypes } from 'react'
import './LikeButton.sass'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'

class LikeButton extends PureComponent {
  static propTypes = {
      onChange: PropTypes.func.isRequired,
      liked: PropTypes.bool.isRequired,
    }

  classNames() {
    const { liked } = this.props
    let classes = 'like'
    if (liked) { classes += 'liked' }
    return classes
  }

  toggleLike() {
    console.log('CLICK (LikeButton)')
    this.props.onChange()
  }

  // likeStatus() {
  //   const { liked, likes } = this.props
  //   const likesOtherThanYours = (likes || 0) - 1
  //   if (liked && likesOtherThanYours > 0) {
  //     return `You and ${likesOtherThanYours} others like this`
  //   }
  //   if (liked) return 'You like this'
  //   if (likes > 0) return `${likes} others like this`
  //   return null
  // }


  render() {
    const { liked } = this.props
    return (
      <p className={ this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
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
