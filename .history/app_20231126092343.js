// nous mettons en place un serveur en utilisant les modules Socket.io et Express, en définissant une constante 'io'. 
//Cette configuration permet à Socket.io d'être le serveur capable de recevoir les requêtes des clients.

const { Socket } = require('socket.io'); // Importation socket.io

const express = require('express') // Importation socket.io

const app = express(); //Nous créons une constante 'app'
const http = require('http').createServer(app); // Nous enregistrons la création du serveur en utilisant la variable 'app'
const path = require('path')
const port = 8080;

const io = require('socket.io')(http);//Constante 'io'

app.use('/bootstrap/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/bootstrap/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.use(express.static('public'));//lier les dependance public

app.get('/',(req, res) => { 
    res.sendFile(path.join(__dirname, 'templates/base.html')) // Chemin 
});

app.get('/games/tic-tac-toe',(req, res) => { 
    res.sendFile(path.join(__dirname, 'templates/games/tic-tac-toe.html')) // Chemin 
}); // On creer l'Url 

http.listen(port, () => {    // On ecoute les connexion entrante
    console.log(`Listening on http://localhost:${port}/`);
});