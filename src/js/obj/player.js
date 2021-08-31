export function spawnPlayer(data, socket) {

    let player = add([
        sprite("player"),
        pos(center()),
        area(),
        layer("game"),
        solid(),
        "player",
        "movable",
        {
            uuid: data.id,
            speed: data.speed,
            name: name,
            score: data.score,
            life: data.life,
            power: data.power,
            currentLevel: data.currentLevel,
        }
    ]);
    player.action(() => {
       // camPos(player.pos)
        if (keyIsReleased("q") || keyIsReleased("d") || keyIsReleased("z") || keyIsReleased("s")) {
            console.log("bonjour")
            socket.emit('stop')
        }
        checkBoundariesAndBlock(player)
    })

    keyDown("q", () => {
        //player.move(-1 * player.speed, 0)
        socket.emit('movement', {input: "q", pos:player.pos});
    });

    keyDown("d", () => {
         //player.move(player.speed, 0)
        socket.emit('movement', {input: "d", pos:player.pos});
    });

    keyDown("z", () => {
         //player.move(0, -1 * player.speed)
        socket.emit('movement', {input: "z", pos:player.pos});
    });

    keyDown("s", () => {
        //player.move(0, player.speed)
        socket.emit('movement', {input: "s", pos:player.pos});
    });



    window.koptions.player= player
    return player;
}

function checkBoundariesAndBlock(m) {
    if (m.pos.x <= m.width / 2) {
        m.pos.x = 1 + m.height / 2
    }
    if (m.pos.x >= (width() - m.width / 2)) {
        m.pos.x = width() - m.width / 2
    }
    if (m.pos.y <= m.height / 2) {
        m.pos.y = m.height / 2
    }
    if (m.pos.y >= (height() - m.height / 2)) {
        m.pos.y = height() - m.height / 2
    }
}
