
(async () => {
    const data = await readFileFromSourceMap(document.querySelector("script[defer]").src, "countries.position.ts");
    const countryCode = /\/([a-z]{2})\//.exec(document.querySelector('img[alt="country to guess"]').src)[1].toUpperCase();
    const country = new RegExp(`code:\\s*"${countryCode}"[\\s\\S]+?name:\\s*"(.*?)"`, 'g').exec(data)[1]
    inputCountryAnswer(country);
    document.querySelector('button[type=submit]').click();
})();
