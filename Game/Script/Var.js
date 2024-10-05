let canvas
let context

let gameInstance
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let menu = false

let varPlayer = {
    life : 60,
    lifeMax : 60,
    energy : 8,
    energyMax : 8,
    energyGen : 1,
}

let varField = {
    place : 'HomeTown',
    field : {},
    positionPlayer : [0, 0],
    camera : [0, 0],
}
