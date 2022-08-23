(async () => {
    const url = document.querySelector('script[data-next-page="/wordle"]').src;
    const file = await readFileFromSourceMap(url, 'lexicon.js');
    const words = [...file.matchAll(/'(.*?)'/g)].map(w => w[1]);
    const index = Math.floor((new Date((new Date).toString().slice(0, 15)) - new Date(2022, 0, -1)) / 1e3 / 60 / 60 / 24 + 1);
    const word = words[index];
    [...word, '\r'].forEach((c, i) =>
        setTimeout(
            () => window.dispatchEvent(new KeyboardEvent('keypress', { keyCode: c.charCodeAt(0) })),
            i * 20
        )
    )
})();
