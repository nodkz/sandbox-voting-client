import objectAssign from 'object-assign';

export default socket => store => next => action => {
  console.log('in middleware', action);

  if(action.meta && action.meta.remote) {
    const clientId = store.getState().get('clientId');

    console.log('send action to server');
    socket.emit('action', objectAssign({}, action, {clientId}) );
  }

  const result = next(action);

  console.log('newState', store.getState().toJS());

  return result;
}