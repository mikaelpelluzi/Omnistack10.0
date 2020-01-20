import socketio from 'socket.io-client' //fazer instalação do pacote 'socket.io-client', -> destinado ao cliente

//IP sendo o mesmo utilizado no axios.
const socket = socketio('http://192.168.1.5:3333', { 
    autoConnect: false,
});

function connect() {
    socket.connect();
}

function disconnect() {
    if (socket.connect) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
}