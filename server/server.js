const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();


const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  socket.on('disconnect', () => console.log('callback socket disconnection'));
  socket.on('createMessage', (message) => {
    console.log(`message from client: ${message}` );
  })
  socket.emit('newMessage', {
    from: '4head',
    text: '4head!!!',
    createdAt: 234
  });
});

app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
