import React from 'react/addons';

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function() {
    return <div>Hello from results!</div>;
  }
});