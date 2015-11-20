import React from 'react';
import moment from 'moment';
import $ from 'jquery';
import Post from 'components/Post/Post.jsx';

var key = 'bQTVmsvDxOUr9rhtcQQUHKmVIOEeK4HFsphbbuigobItKsdDOP';
var endpoint = 'https://api.tumblr.com/v2/blog/nos.twnsnd.co/posts';


var Posts = React.createClass({
  getInitialState: function() {
    this.state = {blogPosts: []};
    return this.state;
  },

  componentDidMount: function() {
    $.ajax({
      url: endpoint,
      dataType: 'jsonp',
      data: {
        api_key: key,
      },
      type: "GET",
      success: this.loadData
    });
  },

  loadData: function(results) {
    var data = results.response.posts;
    this.setState({
      blogPosts: data
    });
  },

  render: function() {
    var photoPosts = [];

    this.state.blogPosts.forEach(function(post) {
      console.log("post", post);

      var caption = post.caption;
      var imageURL = post.photos[0].original_size.url;
      var postURL = post.post_url;
      var noteCount = post.note_count;

      console.log("post src", postURL);

      photoPosts.push(
        <Post key={post.id} caption={caption} imageURL={imageURL} postURL={postURL} notes={noteCount} />
      );
    });

    return (
      <section className="post-block">
        {photoPosts}
      </section>
    );
  }
});

module.exports = Posts;
