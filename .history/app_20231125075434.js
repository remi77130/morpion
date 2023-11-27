const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io'); // Importation de 'Server' de socket.io

const app = express();
const server = http.createServer(app);

const io = new Server(server); // Utilisation de 'Server' de socket.io

const port = 8080;

app.use('/bootstrap/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/bootstrap/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/base.html'));
});

io.on('connection', (socket) => {
    console.log('A user connected');

    // Ajoutez ici vos gestionnaires d'événements pour le jeu du morpion avec socket.io

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});
