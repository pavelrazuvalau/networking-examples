const wsUri = 'wss://echo.websocket.org/';
let output;

function init() {
  output = document.getElementById('output');
  testWebSocket();
}

function testWebSocket() {
  websocket = new WebSocket(wsUri);
  websocket.onopen = (evt) => {
    onOpen(evt);
  };
  websocket.onclose = (evt) => {
    onClose(evt);
  };
  websocket.onmessage = (evt) => {
    onMessage(evt);
  };
  websocket.onerror = (evt) => {
    onError(evt);
  };
}

function onOpen(evt) {
  writeToScreen('CONNECTED');
  doSend('WebSocket rocks');
}

function onClose(evt) {
  writeToScreen('DISCONNECTED');
}

function onMessage(evt) {
  writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data + '</span>');
  websocket.close();
}

function onError(evt) {
  writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function doSend(message) {
  writeToScreen('SENT: ' + message);
  websocket.send(message);
}

function writeToScreen(message) {
  var pre = document.createElement('p');
  pre.style.wordWrap = 'break-word';
  pre.innerHTML = message;
  output.appendChild(pre);
}

window.addEventListener('load', init, false);
