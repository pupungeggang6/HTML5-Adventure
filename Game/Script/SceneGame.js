function loopGame() {
    if (menu === false) {
        if (state === '') {
            movePlayer()
        }
    }
    displayGame() 
}

function displayGame() {
    drawSceneInit()

    drawField()
    drawLower()
    context.strokeRect(UI.game.buttonMenu[0], UI.game.buttonMenu[1], UI.game.buttonMenu[2], UI.game.buttonMenu[3]) 
}

function mouseUpGame(x, y, button) {
    if (button === 0) {
        if (state === '') {
            if (pointInsideRectArray(x, y, UI.game.buttonMenu)) {
                scene = 'Title'
                state = ''
            }
        }
    }
}

function keyDownGame(key) {

}

function keyUpGame(key) {
}
