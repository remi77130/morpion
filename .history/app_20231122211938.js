const { Socket } = require('socket.io'); // Importation socket.io

const express = require('express') // Importation socket.io

const app = express(); //On creer un constante 'app' 
const http = require('http').createServer(app); // On enregistre la creation du server avec la variable app
const path = require('path')
const port = 8080;

const io = require('socket.io')(http);// On creer un server avec socket et express en définissant une constante 'io' Ici on a donc socket.io qui 
//est paramettrer pour etre le server pour recevoir les requêtes des clients.


app.get('/',(req, res) => { 
    res.sendFile(path.join(__dirname, 'templates/base.html')) // Chemin 
});