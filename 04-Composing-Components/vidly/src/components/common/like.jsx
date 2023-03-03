import React, { Component } from 'react'

class Like extends Component {
  render() {
    let classes = 'fa fa-heart'
    if (!this.props.liked) classes += '-o'

    return (
      <i
        onClick={this.props.onClick} // (3)
        style={{ cursor: 'pointer' }}
        className={classes}
        aria-hidden='true'
      ></i>
    )
  }
}

export default Like
