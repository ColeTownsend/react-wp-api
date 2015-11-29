import React from 'react';
import Like from 'components/Like/Like.jsx';

var Post = React.createClass({
  render: function() {
      return (
        <figure className="card photo-post">
          <div className="image-wrapper hasLoaded">
            <img src={this.props.imageURL} />
          </div>
          <figcaption>
            <span className="caption" dangerouslySetInnerHTML={{__html: this.props.caption}}/>
            <a href={this.props.postURL} className="notes">{this.props.notes} ❤</a>
          </figcaption>
        </figure>
      );
    }
});

Post.defaultProps = {
  caption: 'Something should be here.',
  noteCount: 0,
  postURL: '',
  imageURL: '',
};

module.exports = Post;
