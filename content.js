chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.solver) {
            injectSolver(request.solver);
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