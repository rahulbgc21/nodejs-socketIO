import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors : {
        origin : "*"
    }
});


io.on('connection', (socket) => {
    console.log('user connected==>', socket.id);

    socket.on("message", (msg)=>{
        io.emit("message", `${ socket.id.substring(0,2)} said ${msg}`);
    });
});


server.listen(8080, () => {
    console.log('server running at http://localhost:8080');
});