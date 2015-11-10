import 'styles/main.scss';

import React from 'react';
import $ from 'jquery';
import Post from 'components/Workouts/Post.jsx';

React.render(<Post source="http://dev-champorn.pantheon.io/wp-json/posts/1" />, document.body);
