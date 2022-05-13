chrome.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    const tab = tabs[0];
    const solveButton = document.querySelector("#solve");
    const website = getWebsite(tab.url);
    solveButton.style.display = website ? 'block' : 'none';
    solveButton.addEventListener("click", () => {
        chrome.tabs.sendMessage(tab.id, { solver: website.solver }, (response) => { });
    });
});

document.querySelector("#next").addEventListener("click", () => {
    const url = websites[Math.floor(Math.random() * websites.length)].url;
    chrome.tabs.update(undefined, { url });
    window.close();
})