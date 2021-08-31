import {spawnEnemy} from "./obj/enemy.js"
import game from "./scenes/game.js"
import {spawnPlayer} from "./obj/player.js";

var socket = io();
let updatePlayers

kaboom(window.koptions);
game(socket)

loadSprite("star", "./assets/img/star.png")
loadSprite("player", "./assets/img/player.png")

socket.on("user-connected", ({enemies, ...player}) => {
    updatePlayers = createPlayers(enemies, player)
})

socket.on("players", (players) => {
    updatePlayers(players)
})

socket.on("new-user", (player) => {
    spawnEnemy(player, true)
})

socket.on("user-disconnected", (player) => {
    every("enemy", (enemy) => {
        console.log(player.uuid, enemy.uuid)
        if (player.id === enemy.uuid) {
            console.log("bonjour")
            enemy.destroy()
        }
    })
})

function createPlayers(playersData, player) {
    let p = spawnPlayer(player, socket)
    console.log("bienvenue " + p.uuid)

    playersData.forEach(e => {
        return spawnEnemy(e, false)
    })
    return (data) => {
        every("movable", (movable) => {
            data.forEach(d => {
                if (movable.uuid === d.id) {
                    movePlayer(movable, d)
                }
            })
        })
    }
}

function movePlayer(player, data) {
    console.log("ca bouge")
    player.move(data.x, data.y)
}

go("game")
