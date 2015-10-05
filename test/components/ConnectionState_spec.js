import React from 'react/addons';
import {List} from 'immutable';
import {ConnectionState} from '../../src/components/ConnectionState';
import {expect} from 'chai';

const {renderIntoDocument, findRenderedDOMComponentWithTag}
  = React.addons.TestUtils;

describe('ConnectionState', () => {
  it('is not visible when connected', () => {
    const component = renderIntoDocument(
      <ConnectionState connected={true} />
    );

    const div = findRenderedDOMComponentWithTag(component, 'div');

    expect(div.getDOMNode().style.display).to.equal('none');
  });

  it('is visible when connected', () => {
    const component = renderIntoDocument(
      <ConnectionState connected={false} />
    );

    const div = findRenderedDOMComponentWithTag(component, 'div');

    expect(div.getDOMNode().style.display).to.equal('block');
  });

  it('contains connection state message', () => {
    const component = renderIntoDocument(
      <ConnectionState connected={false} state="Fail" />
    );

    const div = findRenderedDOMComponentWithTag(component, 'div');
    expect(div.getDOMNode().textContent).to.contain('Fail');
  });
});