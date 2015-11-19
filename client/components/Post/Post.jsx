import React from 'react';

var Post = React.createClass({
  render: function() {
    return (
      <figure className="card photo-post">
        <div>
          <img src={imageURL} />
        </div>
        <figcaption>
          <span dangerouslySetInnerHTML={this.rawHTML()}/>
          <a src={postURL} className="notes">{notes} Notes</a>
        </figcaption>
      </figure>
    );
  }
});

Post.defaultProps = {
  caption: 'Something should be here.',
  notes: 0,
  postURL: '',
  imageURL: ''
};

module.exports = Post;
