chrome.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    const tab = tabs[0];
    const solveButton = document.querySelector("#solve");
    solveButton.style.display = getWebsite(tab.url) ? 'block' : 'none';
    solveButton.addEventListener("click", () => {
        chrome.tabs.sendMessage(tab.id, { solve: true }, (response) => { });
    });
});

document.querySelector("#next").addEventListener("click", () => {
    const url = websites[Math.floor(Math.random() * websites.length)].url;
    chrome.tabs.update(undefined, { url });
})