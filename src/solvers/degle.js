(async () => {
    const promises = Array.from(document.querySelectorAll('script[defer]'))
        .map(({src}) => readFileFromSourceMap(src, "countries.position.ts"));
    const data = (await Promise.all(promises)).find(data => data);
    const countryCode = /\/([a-z]{2})\//.exec(document.querySelector('img[alt="country to guess"]').src)[1].toUpperCase();
    const country = new RegExp(`code:\\s*"${countryCode}".*?name:\\s*"(.*?)"`, 's').exec(data)[1]
    inputCountryAnswer(country);
    document.querySelector('button[type=submit]').click();
})();
