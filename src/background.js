importScripts('websites.js');

const icons = {
    enabled: 'icons/icon16.png',
    disabled: 'icons/icon16-gray.png'
}

const api = chrome || browser;

api.tabs.onUpdated.addListener((tabId, changeInfo, { url }) => {
    const path = getWebsite(url) ? icons.enabled : icons.disabled;
    (api.action || api.browserAction).setIcon({ path, tabId });
});
