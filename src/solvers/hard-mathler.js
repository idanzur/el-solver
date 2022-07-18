(async () => {
    const url = document.querySelector('script[defer]').src;
    const file = await readFileFromSourceMap(url, 'wordlist.ts');
    const words = file.match(/[\d\/\-\*+\(\)]{8}/g);
    const index = Math.floor((Date.now() - 1643752800000) / 86400000);
    const answer = words[index];
    const buttons = Array.from(document.querySelectorAll('button'));
    const numbers = '0123456789~+-*/()!';
    [...answer, '~'].forEach(c => buttons[numbers.indexOf(c)].click());
}
)();
