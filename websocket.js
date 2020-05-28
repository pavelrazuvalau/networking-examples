const wsUri = 'wss://echo.websocket.org/';
let output;

function init() {
  output = document.getElementById('output');
  testWebSocket();
}

function testWebSocket() {
  websocket = new WebSocket(wsUri);

  websocket.addEventListener('open', (evt) => {
    onOpen(evt);
  });

  websocket.addEventListener('close', (evt) => {
    onClose(evt);
  });

  websocket.addEventListener('message', (evt) => {
    onMessage(evt);
  });

  websocket.addEventListener('error', (evt) => {
    onError(evt);
  });
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
}

function onError(evt) {
  writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function doSend(message) {
  writeToScreen('SENT: ' + message);
  for (let i of [1,2,3]) {
    websocket.send(`message ${i}`);
  }
}

function writeToScreen(message) {
  var pre = document.createElement('p');
  pre.style.wordWrap = 'break-word';
  pre.innerHTML = message;
  output.appendChild(pre);
}

window.addEventListener('load', init, false);
