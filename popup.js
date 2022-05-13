chrome.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    const tab = tabs[0];
    const solveButton = document.querySelector("#solve");
    solveButton.style.display = getWebsite(tab.url) ? 'block' : 'none';
    solveButton.addEventListener("click", () => {
        chrome.tabs.sendMessage(tab.id, { solve: true }, (response) => { });
    });
});