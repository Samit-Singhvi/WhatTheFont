document.addEventListener("mouseup", getSelectedText);

function getSelectedText(event) {
  let selection = window.getSelection();
  if (selection.toString().length > 0) {
    let selectedText = {
      message: selection.toString(),
      fontFamily: window.getComputedStyle(selection.anchorNode.parentElement)
        .fontFamily,
      fontSize: window.getComputedStyle(selection.anchorNode.parentElement)
        .fontSize,
      color: window.getComputedStyle(selection.anchorNode.parentElement).color,
      xCoord: event.clientX,
      yCoord: event.clientY,
    };
    console.log(`Message reached at contentScripts.js ${selectedText.message}`);
    chrome.runtime.sendMessage(selectedText);

    // Close window only if click event occurs outside the selected text
  }
}
