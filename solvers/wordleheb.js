(async () => {
    const url = [...document.querySelectorAll('script')].find(e => /js\/app\./.test(e.src)).src;
    const file = await readFileFromSourceMap(url, 'lexicon.js');
    const words = JSON.parse(file.split(' = ')[1])
    const index = Math.floor((new Date((new Date).toString().slice(0, 15)) - new Date(2022, 0, 0)) / 1e3 / 60 / 60 / 24 + 1);
    const word = words[index];
    [...word, '\r'].forEach(c => window.dispatchEvent(new KeyboardEvent('keypress', { keyCode: c.charCodeAt(0) })));
})();
