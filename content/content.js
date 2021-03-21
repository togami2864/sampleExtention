const receiver = document.getElementById("recieve");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("拡張側：");
  receiver.innerHTML = "success!!";
  sendResponse("ok");
});

const button = document.getElementById("send");
button.addEventListener("click", () => {
  chrome.system.cpu.getInfo(function (info) {
    console.log(JSON.stringify(info));
  });
  const message = "numOfProcessors:~";
  var port = chrome.extension.connect({ name: "test" });
  port.postMessage({ msg: message });
  console.log("clicked");
});
