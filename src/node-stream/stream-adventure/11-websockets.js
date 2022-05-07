const { stdout } = require('process');
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8099');
const stream = WebSocket.createWebSocketStream(ws);

stream.pipe(stdout);

stream.write('hello\n');
