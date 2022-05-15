importScripts('websites.js');

const icons = {
    enabled: 'icons/icon16.png',
    disabled: 'icons/icon16-gray.png'
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, { url }) => {
    const path = getWebsite(url) ? icons.enabled : icons.disabled;
    chrome.action.setIcon({ path, tabId });
})