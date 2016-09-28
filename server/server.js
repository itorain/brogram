/* eslint new-cap: ["error", { "capIsNewExceptions": ["Server"] }] */
import express from 'express';
import { Server } from 'http';

const app = express();
const http = Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'client' });
});

io.on('connection', socket => {
    console.log('a user connected');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});
