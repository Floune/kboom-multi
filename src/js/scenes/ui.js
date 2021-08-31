const powerLabel = add([
    text(  `Puissance: ${player.power}`, 24),
    layer("ui"),
    origin("center"),
    pos(width() - 190, 72),
]);

const levelLabel = add([
    text(`Niveau: ${player.currentLevel}`, 24),
    layer("ui"),
    origin("left"),
    pos(100, 48),
]);

const scoreLabel = add([
    text(`Score: ${player.score}`, 24),
    layer("ui"),
    origin("center"),
    pos(width() / 2, 48),
]);

const lifeLabel = add([
    text(`Vies: ${player.life}`, 24),
    layer("ui"),
    origin("center"),
    pos(width() - 150, 48),
]);