(async () => {
    const file = await (await fetch('bundle.js')).text();
    const words = JSON.parse(/\["BONE.*?]/.exec(file)[0]);
    const index = Math.floor(((new Date).getTime() / 1e3 - 1642564800) / 86400);
    const buttons = Array.from(document.querySelectorAll('.testMainKey,.testDoubleKey'));
    const letters = 'QWERTYUIOPASDFGHJKL~ZXCVBNM@';
    const word = words[index];
    [...word, '~'].forEach(c => buttons[letters.indexOf(c)].click());
})();
