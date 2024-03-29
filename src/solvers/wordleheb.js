(async () => {
    const jsFiles = [...document.querySelectorAll('script[src*="/_next"]')];
    const files = await Promise.all(
        jsFiles.map(e => readFileFromSourceMap(e.src, 'lexicon.js'))
    );
    const file = files.find(data => data);
    const words = [...file.matchAll(/'(.*?)'/g)].map(w => w[1]);
    const index = Math.floor((new Date((new Date).toString().slice(0, 15)) - new Date(2022, 0, -1)) / 1e3 / 60 / 60 / 24 + 1);
    const word = words[index];
    [...word, '\r'].forEach((c, i) =>
        setTimeout(
            () => window.dispatchEvent(new KeyboardEvent('keypress', {keyCode: c.charCodeAt(0)})),
            i * 20
        )
    )
})();
