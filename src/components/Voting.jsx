import React from 'react/addons';
import Vote from './Vote.jsx';
import Winner from './Winner.jsx';

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function() {
    return <div className="voting">
      { this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />
      }
    </div>;
  }
});