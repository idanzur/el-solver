const activeTabs = {
    "https://www.nytimes.com/games/wordle/index.html": "wordle",
    "https://www.milel.co/": "milel",
    "https://jackli.gg/chessle/": "chessle",
    "https://worldle.teuteuf.fr/": "worldle",
    "https://oec.world/en/tradle/": "tradle",
    "https://sardle.net/": "sardle",
    "https://semantle.com/": "semantle",
    "https://www.sedecordle.com/": "sedecordle",
    "https://xordle.xyz/": "xordle",
    "https://www.redactle.com/": "redactle",
    "https://wordleheb.web.app/": "wordleheb"
}

const icons = {
    enabled: "icons/icon16.png",
    disabled: "icons/icon16-gray.png"
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, { url }) => {
    const activeUrl = Object.keys(activeTabs).find(_url => url.startsWith(_url));
    let iconPath = icons.disabled;
    if (activeUrl) {
        iconPath = icons.enabled;
        chrome.tabs.sendMessage(tabId, { solver: activeTabs[activeUrl] }, (response) => {});
    }
    chrome.action.setIcon({ path: iconPath, tabId });
})