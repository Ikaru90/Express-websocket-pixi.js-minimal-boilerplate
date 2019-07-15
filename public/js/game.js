const socket = io();

// Socket connection.
socket.on('connect', function() {
  console.log('Socket connetion');
});

// Create a Pixi Application.
const app = new PIXI.Application();
document.body.appendChild(app.view);
