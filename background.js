importScripts('websites.js');
let activeWebsite;
const icons = {
    enabled: "icons/icon16.png",
    disabled: "icons/icon16-gray.png"
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, { url }) => {
    activeWebsite = getWebsite(url);
    let iconPath = icons.disabled;
    if (activeWebsite) {
        iconPath = icons.enabled;
        chrome.tabs.sendMessage(tabId, { solver: activeWebsite.solver }, (response) => { });
    }
    chrome.action.setIcon({ path: iconPath, tabId });
})