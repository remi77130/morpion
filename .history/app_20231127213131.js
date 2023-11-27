const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const path = require('path');

const port = 8080;

// ...

// Serveur statique pour socket.io.js
app.use('/socket.io', express.static(path.join(__dirname, 'node_modules/socket.io/client-dist')));

// Autres chemins statiques pour Bootstrap, jQuery, etc.
app.use('/bootstrap/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/bootstrap/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/base.html'));
});

app.get('/games/tic-tac-toe', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/games/tic-tac-toe.html'));
});

http.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});

// Gestion des connexions WebSocket avec Socket.IO
io.on('connection', (socket) => {
  console.log(`[connection] ${socket.id}`);
  // Gérez vos événements Socket.IO ici
});
