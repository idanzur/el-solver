const websites = [
    { url: 'https://converged.yt/primel/', solver: 'primel', utils: ['readFileFromSourceMap'] },
    { url: 'https://meduyeket.net/', solver: 'meduyeket' },
    { url: 'https://www.nytimes.com/games/wordle/index.html', solver: 'wordle', utils: ['readFileFromSourceMap'] },
    { url: 'https://www.milel.co/', solver: 'milel' },
    { url: 'https://jackli.gg/chessle/', solver: 'chessle' },
    { url: 'https://worldle.teuteuf.fr/', solver: 'worldle', utils: ['inputCountryAnswer'] },
    { url: 'https://degle.ishefi.com/', solver: 'degle', utils: ['readFileFromSourceMap', 'inputCountryAnswer'] },
    { url: 'https://flagle.ishefi.com/', solver: 'degle', utils: ['readFileFromSourceMap', 'inputCountryAnswer'] },
    { url: 'https://oec.world/en/tradle/', solver: 'tradle', utils: ['inputCountryAnswer'] },
    { url: 'https://sardle.net/', solver: 'sardle' },
    { url: 'https://semantle.com/', solver: 'semantle' },
    { url: 'https://www.sedecordle.com/', solver: 'sedecordle' },
    { url: 'https://xordle.xyz/', solver: 'xordle', utils: ['readFileFromSourceMap'] },
    { url: 'https://www.redactle.com/', solver: 'redactle' },
    { url: 'https://wordleheb.web.app/', solver: 'wordleheb', utils: ['readFileFromSourceMap'] },
    { url: 'https://www.undergroundle.co.uk/', solver: 'undergroundle' },
]

const getWebsite = _url => websites.find(({ url }) => _url.startsWith(url));
