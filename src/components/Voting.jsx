import React from 'react/addons';
import {connect} from 'react-redux';
import Vote from './Vote.jsx';
import Winner from './Winner.jsx';

export const Voting = React.createClass({
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

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(mapStateToProps)(Voting);
