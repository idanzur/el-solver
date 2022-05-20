const inputCountryAnswer = country => {
	const el = document.querySelector('input');
	Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), 'value').set.call(el, country);
	el.dispatchEvent(new Event('input', { bubbles: true }));
}

const country = /What does (.*) export/.exec(document.querySelector('iframe').contentDocument.title)[1];
inputCountryAnswer(country);