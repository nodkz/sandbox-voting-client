import React from 'react';
import {RouteHandler} from 'react-router';
import {List} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

export default React.createClass({
  render: function() {
    return <RouteHandler pair={pair} />
  }
});