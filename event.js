let content;
chrome.extension.onConnect.addListener(function (port) {
  port.onMessage.addListener(function (msg) {
    getData(msg.msg);
  });
});

function getData(msg) {
  content = `<h1>${msg}</h1>`;
}

function sendContent() {
  return content;
}

function say() {
  alert("hello");
}
