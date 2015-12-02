import React from 'react';
import $ from 'jquery';

var key = 'bQTVmsvDxOUr9rhtcQQUHKmVIOEeK4HFsphbbuigobItKsdDOP';
var endpoint = 'https://api.tumblr.com/v2/blog/nos.twnsnd.co/info';

var Nav = React.createClass({
  getInitialState: function() {
    this.state = {
      title: "",
      description: "",
      url: ""
    };
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
    var data = results.response.blog;
    console.log(data);

    this.setState({
      title: data.title,
      description: data.description,
      url: data.url
    });
  },

  render: function() {
    return(
      <header>
        <h1 className="tac title">
          <a href={this.state.url}>{this.state.title}</a>
          <a href="http://www.popsugar.com/smart-living/How-Donate-Victims-Beirut-Paris-Attacks-39100804" target="_blank">
            <img src="http://i.imgur.com/TkaNgYh.png" className="love"/>
          </a>
        </h1>
        <div className="tac" dangerouslySetInnerHTML={{__html: this.state.description}}/>
        <nav>
          <a href="https://gumroad.com/newoldstock/">Photo Packs</a>
          <a href="https://twitter.com/newoldstokk">Twitter</a>
          <a href="http://nos.twnsnd.co/rights-and-usage">Rights</a>
          <a href="https://gumroad.com/newoldstock/follow">Updates</a>
        </nav>
      </header>
    );
  }
});

module.exports = Nav;
