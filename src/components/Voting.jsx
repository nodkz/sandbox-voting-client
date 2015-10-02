import React from 'react';
import Vote from './Vote.jsx';
import Winner from './Winner.jsx';

export default React.createClass({
  render: function() {
    return <div className="voting">
      { this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />
      }
    </div>;
  }
});