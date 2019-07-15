const express = require('express');
const app = express();
const server = require('http').Server(app);
// initialize socket.
const io = require('socket.io')(server);
// process.env.PORT deploy option.
const port = process.env.PORT || 3000;
server.listen(port);

// initialize server folders.
app.use('/pixi', express.static(`${__dirname}/node_modules/pixi.js/dist/`));
app.use(express.static(`${__dirname}/public`));

// get index.html from public folder.
app.get('/', function(req, res) {
	res.sendfile(`${__dirname}/index.html`);
});

io.sockets.on('connection', function(socket) {
  console.log(`client connected ${socket.id}`);

  socket.on('disconnect', function() {
    console.log(`client disconnected ${socket.id}`);
  });
})

console.log(`Server Started at ${port}`);
