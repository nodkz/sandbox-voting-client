import React from 'react/addons';
import classNames from 'classnames';

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],
  getPair: function() {
    return this.props.pair || [];
  },
  isDisabled: function() {
    return false;
    //return !!this.props.hasVoted;
  },
  hasVotedFor: function(entry) {
    return this.props.hasVoted === entry;
  },
  render: function() {
    return <div className="voting">
      {
        this.getPair().map(entry =>
            <button key={entry}
                    onClick={()=>this.props.vote(entry)}
                    disabled={this.isDisabled()}
                    className={
                      classNames({
                        voted: this.hasVotedFor(entry)
                      })}
                    >
              <h1>{entry}</h1>
              <div className="label">Voted</div>
            </button>
        )
      }
    </div>;
  }
});