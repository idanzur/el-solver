(async () => {
    const url = document.querySelector('script[defer]').src;
    const appFile = await readFileFromSourceMap(url, 'App.tsx');
    const today = new Date().toISOString().split('T')[0];
    const movieId = new RegExp(`"${today}":.*?id:\\s*"(.*?)"`).exec(appFile)[1];
    const moviesFile = await readFileFromSourceMap(url, 'movies.ts');
    const answer = new RegExp(`${movieId}(?:.|\\n)*?title:\\s*"(.*?)"`).exec(moviesFile)[1]
    inputCountryAnswer(answer);
    document.querySelectorAll('*[id^="react-select-2-option"]')[0].click();
    setTimeout(() => document.querySelector('button').click(), 0);
})();
