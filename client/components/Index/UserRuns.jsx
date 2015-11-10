'use strict';

import React from 'react';
import moment from 'moment';
import $ from 'jquery';

var UserRuns = React.createClass({
  getInitialState: function() {
    this.state = {workouts: []};
    return this.state;
  },

  componentDidMount: function() {
    var request = this.props.source;

    $.ajax({
      url: request,
      dataType: 'jsonp',
      data: {
        access_token: "c8ffe7c4c71de2ce6a87abcd1ce8c1b3813b2e64",
        per_page: this.props.workouts
      },
      type: "GET",
      success: this.loadWorkouts
    });
  },

  loadWorkouts: function(data) {
    this.setState({
      workouts: data.reverse() // does this need a this.workouts?
    });
  },

  render: function() {
    var runs = [];
    console.log("this.state.workouts", this.state.workouts);
    this.state.workouts.forEach(function(workout) {
      var miles = (workout.distance * 0.000621371).toFixed(1);
      var barHeight = miles * 10;
      var wDay = moment(workout.start_date_local).format('ddd');
      var month = moment(workout.start_date_local).format('MMM');
      var mDay = moment(workout.start_date_local).format('D');

      var barOpacity = 1;

      if (miles < 4.0) {
        barOpacity = 0.25;
      } else if (miles < 6.0) {
        barOpacity = 0.5;
      } else if (miles < 8.0) {
        barOpacity = 0.75;
      } else {
        barOpacity = 1;
      }

      runs.push(
        <div className="workout"><span className="distance-text">{miles}</span><div style={{height: barHeight, opacity: barOpacity}} className="distance"></div><span className="week-day">{wDay}</span><span className="date">{month} {mDay}</span></div>
      );
    });

    return (
      <section className="strava-card">
        {runs}
      </section>
    );
  }
});

UserRuns.defaultProps = {
  items: []
};

module.exports = UserRuns;
