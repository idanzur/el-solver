const api = chrome || browser;

const loadAsset = url => {
    const s = document.createElement('script');
    s.src = api.runtime.getURL(url);
    s.onload = function () { this.remove(); };
    (document.head || document.documentElement).appendChild(s);
}

api.runtime.onMessage.addListener(({ solver, utils = [] }, sender, sendResponse) => {
    if (solver) {
        utils.forEach(util => loadAsset(`utils/${util}.js`));
        loadAsset(`solvers/${solver}.js`);
        sendResponse({ solved: true });
    }
});
