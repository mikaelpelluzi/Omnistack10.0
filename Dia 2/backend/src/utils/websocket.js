const socketio = require('socket.io');

exports.setupWebsocket = (serve) => {
    const io = socketio(serve);

    io.on('connection', socket => {
        
    })
}