const websites = [
    { url: 'https://meduyeket.net/', solver: 'meduyeket' },
    { url: 'https://www.nytimes.com/games/wordle/index.html', solver: 'wordle' },
    { url: 'https://www.milel.co/', solver: 'milel' },
    { url: 'https://jackli.gg/chessle/', solver: 'chessle' },
    { url: 'https://worldle.teuteuf.fr/', solver: 'worldle' },
    { url: 'https://degle.ishefi.com/', solver: 'degle' },
    { url: 'https://flagle.ishefi.com/', solver: 'degle' },
    { url: 'https://oec.world/en/tradle/', solver: 'tradle' },
    { url: 'https://sardle.net/', solver: 'sardle' },
    { url: 'https://semantle.com/', solver: 'semantle' },
    { url: 'https://www.sedecordle.com/', solver: 'sedecordle' },
    { url: 'https://xordle.xyz/', solver: 'xordle' },
    { url: 'https://www.redactle.com/', solver: 'redactle' },
    { url: 'https://wordleheb.web.app/', solver: 'wordleheb' },
    { url: 'https://www.undergroundle.co.uk/', solver: 'undergroundle' },
]

const getWebsite = _url => websites.find(({ url }) => _url.startsWith(url));