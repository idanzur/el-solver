chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (request.solver) {
            injectSolver(request.solver);
            sendResponse({ solved: true })
        }
    }
);

const injectSolver = solver => {
    const s = document.createElement("script");
    s.src = chrome.runtime.getURL(`solvers/${solver}.js`);
    s.onload = function () {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
}