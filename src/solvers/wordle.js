
(async () => {
    const jsUrl = document.querySelector('link[rel=stylesheet]').href.replace(/\.css$/, '.js');
    const data = await (await fetch(jsUrl)).text();
    const answers = JSON.parse(/\["cigar".*?]/.exec(data)[0]);
    const today = new Date();
    const start = new Date('2021-06-18');
    const index = Math.round(Math.abs((today - start) / 86400000)) - 1;
    const answer = answers[index];
    [...answer,  '↵'].forEach( c => document.querySelector(`[data-key='${c}']`).click());
})();
