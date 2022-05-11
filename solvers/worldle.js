const readFileFromSourceMap = async (url, name) => {
	const data = await (await fetch(`${url}.map`)).json();
	const index = data.sources.findIndex(file => file.endsWith(name));
	return data.sourcesContent[index];
}

const inputCountryAnswer = (country) => {
	const el = document.querySelector('input');
	Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), 'value').set.call(el, country);
	el.dispatchEvent(new Event('input', {
		bubbles: true
	}));
}


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

