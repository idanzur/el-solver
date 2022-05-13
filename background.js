importScripts('websites.js');
let activeUrl;
const icons = {
    enabled: "icons/icon16.png",
    disabled: "icons/icon16-gray.png"
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, { url }) => {
    activeUrl = getWebsite(url);
    let iconPath = icons.disabled;
    if (activeUrl) {
        iconPath = icons.enabled;
        chrome.tabs.sendMessage(tabId, { solver: websites[activeUrl] }, (response) => { });
    }
    chrome.action.setIcon({ path: iconPath, tabId });
})