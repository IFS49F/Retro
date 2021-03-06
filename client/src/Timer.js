import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:4000');

const subscrbieToTimer = (cb) => {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
};

export { subscrbieToTimer };
