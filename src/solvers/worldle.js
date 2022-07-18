(async () => {
    const data = await readFileFromSourceMap(document.querySelector("script[defer]").src, "countries.position.ts");
    const jsObject = data
        .split("=")[1]
        .replace(',\n];', ']')
        .replace(/(\w+):/g, '"$1":')
        .replace(/,\n  }/g, '}');
    const countries = JSON.parse(jsObject);
    const countryCode = /\/([a-z]{2})\//.exec(document.querySelector('img[alt="country to guess"]').src)[1].toUpperCase();
    const country = countries.find(c => c.code === countryCode)
    inputCountryAnswer(country.name);
    document.querySelector('button[type=submit]').click();
})();
