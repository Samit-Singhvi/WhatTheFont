let bgpage = chrome.extension.getBackgroundPage();
let word = bgpage.word;
let fontDisplayer = document.querySelector("#font");
let colorDisplayer = document.querySelector("#color");
let sizeDisplayer = document.querySelector("#size");

fontDisplayer.innerHTML = word.fontFamily;
colorDisplayer.innerHTML = word.color;
sizeDisplayer.innerHTML = word.fontSize;

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  (xCoord = message.xCoord), (yCoord = message.yCoord);
  console.log(message.tabId);
  console.log(`Message reached at popup.js: ${JSON.stringify(message)}`);
  let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=250,height=200,left=${
    xCoord + 120
  },top=${yCoord + 130}`;
  console.log(`X : ${xCoord}, Y : ${yCoord}`);
  open("/popup.html", "test", params);
});

document.onclick = () => {
  window.close();
};

// Open popup automatically when text is selected
