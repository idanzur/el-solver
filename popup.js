document.querySelector("#solve").addEventListener("click", async () => {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.tabs.sendMessage(tabs[0].id, { solve: true }, (response) => {});
});