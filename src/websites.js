const websites = [
    { url: 'https://www.lewdlegame.com/App', solver: 'lewdle' },
    { url: 'https://ducc.pythonanywhere.com/flaggle/', solver: 'flaggle' },
    { url: 'https://wordle.at/', name: "wördl", solver: 'german-wordle' },
    { url: 'https://emovi.teuteuf.fr/', solver: 'emovi', utils: ['readFileFromSourceMap', 'inputCountryAnswer'] },
    { url: 'https://hard.mathler.com/', solver: 'hard-mathler' },
    { url: 'https://www.mathler.com/', solver: 'mathler' },
    { url: 'https://converged.yt/primel/', solver: 'primel' },
    { url: 'https://www.haaretz.co.il/riddles/ty-page/meduyeket/index.html', solver: 'meduyeket' },
    { url: 'https://www.nytimes.com/games/wordle/index.html', solver: 'wordle' },
    { url: 'https://www.milel.co/', solver: 'milel' },
    { url: 'https://jackli.gg/chessle/', solver: 'chessle' },
    { url: 'https://worldle.teuteuf.fr/', solver: 'worldle', utils: ['readFileFromSourceMap', 'inputCountryAnswer'] },
    { url: 'https://degle.ishefi.com/', solver: 'degle', utils: ['readFileFromSourceMap', 'inputCountryAnswer'] },
    { url: 'https://oec.world/en/tradle/', solver: 'tradle', utils: ['inputCountryAnswer'] },
    { url: 'https://sardle.net/', solver: 'sardle' },
    { url: 'https://semantle.com/', solver: 'semantle' },
    { url: 'https://www.sedecordle.com/', solver: 'sedecordle' },
    { url: 'https://xordle.org/', solver: 'xordle', utils: ['readFileFromSourceMap'] },
    { url: 'https://www.redactle.com/', solver: 'redactle' },
    { url: 'https://www.haaretz.co.il/riddles/ty-page/haaretz-wordle', solver: 'wordleheb', utils: ['readFileFromSourceMap'] },
    { url: 'https://www.undergroundle.co.uk/', solver: 'undergroundle' },
]
    .map((value, index) => ({ ...value, index }))
    .sort((a, b) => (a.name || a.solver) > (b.name || b.solver) ? 1 : -1);

const getWebsite = _url => websites.find(({ url }) => _url.startsWith(url));
