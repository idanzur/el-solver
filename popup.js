const api = typeof browser === 'undefined' ? chrome : browser;

api.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    const tab = tabs[0];
    const solveButton = document.querySelector('#solve');
    const website = getWebsite(tab.url);
    solveButton.style.display = website ? 'block' : 'none';
    solveButton.addEventListener('click', () => {
        api.tabs.sendMessage(tab.id, website, (response) => { });
    });
});

const selectNext = document.getElementById('select-next');
websites.forEach(({ solver, name }, i) => {
    selectNext.options.add(new Option(name || solver, i));
});

document.querySelector('#next').addEventListener('click', () => {
    const index = selectNext.selectedIndex ?
        selectNext.value :
        (parseInt(localStorage.lastVisit) + 1) % websites.length || 0;
    const url = websites[index].url;
    localStorage.setItem('lastVisit', index);
    api.tabs.update(undefined, { url });
    window.close();
});
