const api = chrome || browser;
api.runtime.onMessage.addListener(({ solver }, sender, sendResponse) => {
    if (solver) {
        const s = document.createElement('script');
        s.src = api.runtime.getURL(`solvers/${solver}.js`);
        s.onload = function () { this.remove(); };
        (document.head || document.documentElement).appendChild(s);
        sendResponse({ solved: true })
    }
});