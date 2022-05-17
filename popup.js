const api = typeof browser === 'undefined' ? chrome : browser;
api.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    const tab = tabs[0];
    const solveButton = document.querySelector('#solve');
    const website = getWebsite(tab.url);
    solveButton.style.display = website ? 'block' : 'none';
    solveButton.addEventListener('click', () => {
        api.tabs.sendMessage(tab.id, { solver: website.solver }, (response) => { });
    });
});

document.querySelector('#next').addEventListener('click', () => {
    const index = (parseInt(localStorage.lastVisit) + 1) % websites.length || 0;
    const url = websites[index].url;
    localStorage.setItem('lastVisit', index);
    api.tabs.update(undefined, { url });
    window.close();
})