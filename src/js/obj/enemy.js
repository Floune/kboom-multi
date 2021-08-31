export function spawnEnemy(data, first) {
    const options = [
        sprite("player"),
        area(),
        layer("game"),
        solid(),
        "enemy",
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
    ]

    if (first === false) {
        options.push(pos(data.position.x, data.position.y))
    } else {
        options.push(pos(center()))
    }
    return add(options)


}
