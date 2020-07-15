const io = require('socket.io')()
var SimpleSignalServer = require('simple-signal-server')
var signal = new SimpleSignalServer(io)

// 一旦部屋をハードコード
const rooms = {
    "Room One" : new Set(),
    "Room Two" : new Set(),
    "Room Three" : new Set(),
}

// ピアからのリクエストを受け取る
signal.on('discover', (request) => {
    if(!request.discoveryData){
        request.discover({
            rooms: Object.keys(rooms)
        })
    } else {
        const roomID = request.discoveryData
        request.discover({
            roomResponse: roomID,
            peers: Array.from(rooms[roomID])
        })
        if (request.socket.roomID){
            console.log(request.socket.id, '部屋から抜けたで', request.socket.roomID)
            rooms[request.socket.roomID].delete(request.socket.id)
        }
        if (request.socket.roomID !== roomID){
            request.socket.roomID = roomID
            console.log(request.socket.id, '部屋に入ったで', roomID)
            rooms[roomID].add(request.socket.id)
        }
    }
})
io.listen(3000)