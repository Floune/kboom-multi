const express = require("express")
const app = express()
const http = require("http")
const PORT = process.env.PORT || 3000
const server = http.createServer(app)
const {Server} = require("socket.io")
const io = new Server(server)
const uuid = require('uuid')
const players = []

app.use(express.static(__dirname + "/src"))

io.on('connection', (socket) => {
    console.log("user connected")

    const player = {
        position: {x: 100, y: 100},
        id: socket.id,
        life: 5,
        power: 1,
        score: 0,
        x: 0,
        y: 0,
        currentLevel: 1,
        speed: 200,
    }

    socket.broadcast.emit("new-user", player);
    io.to(socket.id).emit("user-connected", {
        ...player,
        enemies: players,
    });

    players.push(player)

    socket.on('movement', ({input, pos}) => {
        updateState(input, player, pos)
    });

    socket.on("stop", () => {
        stopMoving(player)
    })

    socket.on('disconnect', () => {
        socket.broadcast.emit("user-disconnected", player);
        let index = players.findIndex((p) => {
            return player.id === p.id
        })
        players.splice(index, 1)
        console.log('user ' + player.id + ' disconnected');
        console.log('users restants ' + players.length);
    });

})

function stopMoving(player) {
    console.log("omg")
    player.x = player.y = 0;
}

function updateState(input, player, pos) {
    player.position = pos
    console.log(player.position)
    if (input === "z") {
        player.x = 0
        player.y = -1 * player.speed
    }

    if (input === "s") {
        player.x = 0
        player.y = player.speed
    }

    if (input === "q") {
        player.x = -1 * player.speed
        player.y = 0
    }

    if (input === "d") {
        player.x = player.speed
        player.y = 0
    }
    console.log(players)

}

const playersEmitter = setInterval(() => {
    io.emit("players",
        players
    )
}, 50)

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})