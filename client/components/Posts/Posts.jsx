import React from 'react';
import moment from 'moment';
import $ from 'jquery';
import localData from 'assets/tumblr.js'

var key = 'bQTVmsvDxOUr9rhtcQQUHKmVIOEeK4HFsphbbuigobItKsdDOP';
var endpoint = 'https://api.tumblr.com/v2/blog/nos.twnsnd.co/posts';


var Posts = React.createClass({
  getInitialState: function() {
    return {
      title: 'New Old Stock',
      caption: 'loading',
      loading: 'loading-image',
      notes: 0,
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
      success: this.loadPosts,
      error: this.savedPosts
    });
  },

  loadPosts: function(data) {
    var posts = data.response.posts[0]

    console.log("posts", posts);

    this.setState({
      caption: posts.caption,
      imageURL: posts.photos[0].original_size.url,
      notes: posts.note_count,
      loading: 0
    });
  },

  savedPosts: function() {
    var posts = localData.response.posts[0]

    console.log("posts", posts);


    this.setState({
      caption: posts.caption,
      imageURL: posts.photos[0].original_size.url,
      notes: posts.note_count,
      loading: 0
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
        <div className={this.state.loading ? 'loading' : 'hasLoaded'}>
          <img src={imageURL}></img>
        </div>
        <figcaption>
          <span dangerouslySetInnerHTML={this.rawHTML()}/>
          <span className="notes">{notes} Notes</span>
        </figcaption>
      </figure>
    );
  }
});

module.exports = Posts;
