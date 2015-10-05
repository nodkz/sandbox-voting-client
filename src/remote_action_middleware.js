export default socket => store => next => action => {
  console.log('in middleware', action);

  if(action.meta && action.meta.remote) {
    console.log('send action to server');
    socket.emit('action', action);
  }

  return next(action);
}