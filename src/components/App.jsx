import React from 'react';
import {RouteHandler} from 'react-router';
import {List, Map} from 'immutable';

import {ConnectionStateContainer} from './ConnectionState';

export default React.createClass({
  render: function() {
    return <div>
      <ConnectionStateContainer />
      <RouteHandler />
    </div>
  }
});