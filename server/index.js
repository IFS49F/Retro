const express = require('express');

const app = express();
const server = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(server);

const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});
