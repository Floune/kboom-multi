export default function() {
    scene("game", () => {
        focus()
        layers([
            "bg",
            "game",
            "ui",
        ], "game")


        const powerLabel = add([
            text(`Puissance: ${window.koptions.player.power}`, 24),
            layer("ui"),
            origin("center"),
            pos(width() - 190, 72),
        ]);

        const levelLabel = add([
            text(`Niveau: ${window.koptions.player.currentLevel}`, 24),
            layer("ui"),
            origin("left"),
            pos(100, 48),
        ]);

        const scoreLabel = add([
            text(`Score: ${window.koptions.player.score}`, 24),
            layer("ui"),
            origin("center"),
            pos(width() / 2, 48),
        ]);

        const lifeLabel = add([
            text(`Vies: ${window.koptions.player.life}`, 24),
            layer("ui"),
            origin("center"),
            pos(width() - 150, 48),
        ]);

    })
}