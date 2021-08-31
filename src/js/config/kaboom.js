

window.koptions = {
    userData: "",
    player: "",
    players: [],
    width: window.innerWidth, // width of canvas
    height: window.innerHeight, // height of canvas
    clearColor: [0, 0, 0, 1], // background color (default is a checker board background)
    fullscreen: false,
    debug: true,
    global: true
}

window.randomRgb = () => {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}