var socket = new WebSocket("ws://localhost:8999");

function subscribe(cb) {
  socket.onmessage = function (event) {
    cb(JSON.parse(event.data));
  }
}
export { subscribe };