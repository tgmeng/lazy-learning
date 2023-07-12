const fs = require("fs");
const http = require("http");
const { parse } = require("url");
const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ noServer: true });

wss.on("connection", function connection(ws, request, client) {
  ws.on("message", function message(msg) {
    console.log(`Received message ${msg} from user ${client}`);
    ws.send('Hi~')
  });
});

const server = http.createServer(function (req, res) {
  fs.readFile(__dirname + req.url, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});

server.on("upgrade", function upgrade(request, socket, head) {
  const { pathname } = parse(request.url);
  if (pathname === "/ws") {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit("connection", ws, request);
    });
  } else {
    socket.destroy();
  }
});

server.listen(8080);
