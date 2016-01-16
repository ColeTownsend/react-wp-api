import 'styles/main.scss';
import 'assets/fonts/font.css';

import React from 'react';
import $ from 'jquery';
import Posts from 'components/Posts/Posts.jsx';
import Nav from 'components/Nav/Nav.jsx';


var App = React.createClass({
  render: function() {
    return (
      <main className="container">
        <Nav />
        <Posts />
      </main>
    );
  }
});

React.render(<App />, document.body);
