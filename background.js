chrome.browserAction.onClicked.addListener(() => {
  console.log("button clicked");
});

window.word = "samit";
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(`Message reached at background.js ${message.message}`);
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message);

    window.word = message;
  });
});
