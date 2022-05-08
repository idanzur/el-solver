
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (request.solve) {
            injectSolver();
            sendResponse({ solved: true });
        }
    }
);
const injectSolver = () => {
    let s = document.createElement("script");
    s.src = chrome.runtime.getURL("solver.js");
    s.onload = function () {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
}