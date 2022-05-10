const activeTabs = [
    "https://www.nytimes.com/games/wordle/index.html",
    "https://www.milel.co/",
    "https://jackli.gg/chessle/",
    "https://worldle.teuteuf.fr/",
    "https://oec.world/en/tradle/",
    "https://sardle.net/",
    "https://semantle.novalis.org/",
    "https://www.sedecordle.com/",
    "https://xordle.xyz/",
    "https://www.redactle.com/",
    "https://wordleheb.web.app/"
];

const icons = {
    enabled: "icons/icon16.png",
    disabled: "icons/icon16-gray.png"
}

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, { url }) => {
    const path = activeTabs.some(_url => url.startsWith(_url)) ? icons.enabled : icons.disabled;
    chrome.action.setIcon({ path, tabId });
})