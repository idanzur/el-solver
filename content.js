let solver = undefined;
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.solve) {
            injectSolver();
            sendResponse({ solved: true });
        }
        if (request.solver) {
            solver = request.solver;
            sendResponse({ recieved: true });
        }
    }
);

const injectSolver = () => {
    let s = document.createElement("script");
    s.src = chrome.runtime.getURL(`solvers/${solver}.js`);
    s.onload = function () {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
}