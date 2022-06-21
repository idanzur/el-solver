const readFileFromSourceMap = async (url, name) => {
    const data = await (await fetch(`${url}.map`)).json();
    const index = data.sources.findIndex(file => file.endsWith(name));
    return data.sourcesContent[index];
}

(async () => {
    const url = document.querySelector('script').src;
    const file = await readFileFromSourceMap(url, 'wordlist.ts');
    const words = file.match(/\d+/g);
    const index = Math.floor((Date.now() - 1641013200000) / 86400000);
    const answer = words[index];
    const buttons = Array.from(document.querySelectorAll('div.text-xs'));
    const numbers = '1234567890~!';
    [...answer, '~'].forEach(c => buttons[numbers.indexOf(c)].click());
}
)();