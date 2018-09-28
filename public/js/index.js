const socket = io();
socket.on('connect', () => {
  console.log(`connected`);
  socket.emit('createMessage', {
    from: 'Andrew',
    text: 'works!'
  });

});
socket.on('disconnect', 
  () => console.log('disconnected'));
socket.on('newMessage',
  (message) => { console.log('newMessage from server :', message)}); // custom event
