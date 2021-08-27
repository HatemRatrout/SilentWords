const express = require("express");
const http = require("http")
const cors = require("cors");
const app = express();
const server = http.createServer(app)
const port = 8000;
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: [ "GET", "POST" ]
    }
})

const rooms = {};


require("./server/config/mongoose.config");



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


require("./server/routes/word.routes")(app);
////////////////////////////////////////////// socket.io
io.on("connection", socket => {
    socket.on("join room", roomID => {

            console.log("ASD");
        if (rooms[roomID]) {
            rooms[roomID].push(socket.id);
        } else {
            rooms[roomID] = [socket.id];
        }
        const otherUser = rooms[roomID].find(id => id !== socket.id);
        if (otherUser) {
            socket.emit("other user", otherUser);
            socket.to(otherUser).emit("user joined", socket.id);
        }
    });

    socket.on("offer", payload => {
        io.to(payload.target).emit("offer", payload);
    });

    socket.on("answer", payload => {
        io.to(payload.target).emit("answer", payload);
    });

    socket.on("ice-candidate", incoming => {
        io.to(incoming.target).emit("ice-candidate", incoming.candidate);
    });
    socket.on('rooms',room => {
        io.emit("roomsli",room);
    })
    socket.on('message', msg =>{
        io.emit('message',msg)
        console.log(msg);
    } )
});


server.listen(8000, () => console.log('server is running on port 8000'));