import express from 'express';
import { Server } from 'http';

const app = express();
const http = Server(app);

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'client' });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});