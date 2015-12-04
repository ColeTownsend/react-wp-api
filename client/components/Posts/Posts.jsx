import React from 'react';
import moment from 'moment';
import $ from 'jquery';
import Post from 'components/Post/Post.jsx';

var key = 'bQTVmsvDxOUr9rhtcQQUHKmVIOEeK4HFsphbbuigobItKsdDOP';
var endpoint = 'https://api.tumblr.com/v2/blog/nos.twnsnd.co/posts';
var limit = 6;

var Posts = React.createClass({
  getInitialState: function() {
    this.state = {
      blogPosts: [],
      isLoading: true,
      isLoadingMore: false
    };
    return this.state;
  },

  showLoader() {
    this.setState({isLoading: true});
  },

  hideLoader() {
    this.setState({isLoading: false});
  },

  componentDidMount: function() {
    this.fetchJSON(0, 6, false);
    $(window).unbind('scroll');
    $(window).bind('scroll', () => {
      if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        console.log("test");
        var offset = this.state.blogPosts.length + limit + 1;
        this.setState({isLoadingMore: true}); //To show loader at the bottom

        this.fetchJSON(offset, true);
      }
    });
  },

  fetchJSON: function(offset, isLoadingMore) {
    $.ajax({
      url: endpoint,
      dataType: 'jsonp',
      data: {
        api_key: key,
        offset: offset,
        limit: limit
      },
      type: "GET",
      success: this.loadData
    });
  },

  loadData: function(results) {
    var data = results.response.posts;
    this.setState({blogPosts: this.state.blogPosts.concat(data), loading: false});
    console.log(this.state.blogPosts.length);
  },

  loadMore: function() {
    console.log("test");
  },

  render: function() {
    var photoPosts = [];

    this.state.blogPosts.forEach(function(post) {
      var caption = post.caption;
      var imageURL = post.photos[0].original_size.url;
      var postURL = post.post_url;
      var noteCount = post.note_count;
      var loaded = "hasLoaded";

      photoPosts.push(
        <Post key={post.id} caption={caption} imageURL={imageURL} postURL={postURL} notes={noteCount} loading={loaded}/>
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
