const websites = {
    "https://www.nytimes.com/games/wordle/index.html": "wordle",
    "https://www.milel.co/": "milel",
    "https://jackli.gg/chessle/": "chessle",
    "https://worldle.teuteuf.fr/": "worldle",
    "https://oec.world/en/tradle/": "tradle",
    "https://sardle.net/": "sardle",
    "https://semantle.com/": "semantle",
    "https://www.sedecordle.com/": "sedecordle",
    "https://xordle.xyz/": "xordle",
    "https://www.redactle.com/": "redactle",
    "https://wordleheb.web.app/": "wordleheb"
}

const getWebsite = (url) => Object.keys(websites).find(_url => url.startsWith(_url));