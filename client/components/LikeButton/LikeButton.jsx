import React from 'react';

var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    if (this.state.liked) {
      return (
        <a href={this.props.postURL} className="liked" onClick={this.handleClick}>
          {this.props.notes} ❤
        </a>
      );
    } else {
      return (
        <a href={this.props.postURL} onClick={this.handleClick}>
          {this.props.notes} ❤
        </a>
      );
    }
  }
});

module.exports = LikeButton;
