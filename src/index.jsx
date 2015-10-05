import React from 'react';
import Router, {Route, DefaultRoute} from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import io from 'socket.io-client';

import reducer from './reducer';
import {setClientId, setState, setConnectionState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import getClientId from './client_id'
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

require('./style.css');

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state => {
    console.log('get state from server');
    store.dispatch(setState(state));
  }
);
['connect', 'connect_error', 'connect_timeout', 'reconnect',
'reconnecting', 'reconnect_error', 'reconnect_failed'].forEach(
  ev =>
    socket.on(ev, () =>
      store.dispatch(setConnectionState(ev, socket.connected))
    )
);

const finalCreateStore = compose(
  // Enables your middleware:
  applyMiddleware(remoteActionMiddleware(socket)), // any Redux middleware, e.g. redux-thunk
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);
const store = finalCreateStore(reducer);
store.dispatch(setClientId(getClientId()));



const routes = <Route handler={App}>
  <Route path="/results" handler={ResultsContainer} />
  <DefaultRoute handler={VotingContainer} />
</Route>;

Router.run(routes, (Root) => {
  React.render(
    <div>
      <Provider store={store}>
        {() => <Root />}
      </Provider>
      {/*<DebugPanel top={true} right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>*/}
    </div>,
    document.getElementById('app')
  )
});
