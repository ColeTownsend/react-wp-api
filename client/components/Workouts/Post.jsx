import React from 'react';
import moment from 'moment';
import $ from 'jquery';


var Post = React.createClass({
  getInitialState: function() {
    return {
      title: 'hi',
      content: 'hi'
    };
  },

  componentDidMount: function() {
    console.log("result");

   $.get(this.props.source, function(result) {
     console.log("result", result);

     if (this.isMounted()) {
       this.setState({
         title: result.title,
         content: result.content
       });
       console.log(this.state);
     }
   }.bind(this));
 },

 rawHTML: function() {
    return { __html: this.state.content };
  },

  render: function() {

    var title = this.state.title;
    var content = this.state.content;

    return (
      <article className="card">
        <p>{{title}}</p>
          <div className="content" dangerouslySetInnerHTML={this.rawHTML()}
          />
      </article>
    );
  }
});

module.exports = Post;
