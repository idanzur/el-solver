
(async () => {
    const jsUrl = document.querySelector('link[rel=stylesheet]').href.replace(/\.css$/, '.js');
    const data = await (await fetch(jsUrl)).text();
    const words = JSON.parse(/\["cigar".*?]/.exec(data)[0]);
    const index = Math.round((new Date().setHours(0, 0, 0, 0) - 1624050000000) / 86400000)
    const answer = words[index];
    [...answer,  '↵'].forEach( c => document.querySelector(`[data-key='${c}']`).click());
})();
