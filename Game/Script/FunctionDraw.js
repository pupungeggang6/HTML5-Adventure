function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.fillStyle = 'White'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.clearRect(0, 0, 1280, 720)
    context.fillRect(0, 0, 1280, 720)
    context.fillStyle = 'Black'
}

function drawField() {
    context.strokeRect(Math.floor(varField.positionPlayer[0] - varField.camera[0] - 20), Math.floor(varField.positionPlayer[1] - varField.camera[1] - 20), 40, 40) 
}

function drawLower() {
    context.strokeRect(UI.game.lower.ability[0], UI.game.lower.ability[1], UI.game.lower.ability[2], UI.game.lower.ability[3])

    for (let i = 0; i < 8; i++) {
        context.strokeRect(UI.game.lower.hand[i][0], UI.game.lower.hand[i][1], UI.game.lower.hand[i][2], UI.game.lower.hand[i][3])
    }

}
