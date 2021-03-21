const element = document.getElementById("memo");
element.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { message: "選択範囲ちょうだい" },
      function (item) {
        if (!item) {
          alert("選択範囲が見つかりませんでした");
          return;
        }
        alert(item);
      }
    );
  });
});

//get message from PWA app
bg = chrome.extension.getBackgroundPage();
document.getElementById("content").innerHTML = bg.sendContent();
