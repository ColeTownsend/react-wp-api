import React from 'react';
import moment from 'moment';
import $ from 'jquery';

var key = 'bQTVmsvDxOUr9rhtcQQUHKmVIOEeK4HFsphbbuigobItKsdDOP';
var endpoint = 'https://api.tumblr.com/v2/blog/nos.twnsnd.co/posts';


var Posts = React.createClass({
  getInitialState: function() {
    return {
      title: 'New Old Stock',
      content: 'loading'
    };
  },

  componentDidMount: function() {

    $.ajax({
      url: endpoint,
      dataType: 'jsonp',
      data: {
        api_key: key,
      },
      type: "GET",
      success: this.loadPosts
    });
  },

  loadPosts: function(data) {
    var posts = data.response.posts[0]

    console.log("posts", posts);


    this.setState({
      caption: posts.caption,
      imageURL: posts.photos[0].original_size.url,
      notes: posts.note_count
    });
  },

  rawHTML: function() {
   return { __html: this.state.caption };
  },

  render: function() {

    var caption = this.state.caption;
    var imageURL = this.state.imageURL;
    var notes = this.state.notes

    return (
      <figure className="card photo-post">
        <img src={imageURL}></img>
        <figcaption>
          <span dangerouslySetInnerHTML={this.rawHTML()}/>
          <span className="notes">{notes} Notes</span>
        </figcaption>
      </figure>
    );
  }
});

module.exports = Posts;
