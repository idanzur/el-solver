const solutions = {
	"https://www.nytimes.com/games/wordle/index.html": () => {
		for (c of `${new wordle.bundle.GameApp().solution}↵`) {
			document.querySelector("game-app")
				.shadowRoot.querySelector("game-keyboard")
				.shadowRoot.querySelector(`[data-key='${c}']`)
				.click();
		}
	},

	"https://www.milel.co/": () => {
		for (c of [...word, "הכנס"])
			document.querySelector(`[data-key='${c}']`).click();
	},

	"https://jackli.gg/chessle/": async () => {
		const data = await (await fetch(SERVER_URL_GET)).json();
		data.moves.forEach(m => [game.move(m), syncGameBoard(), submitGuess()]);
	},

	"https://worldle.teuteuf.fr/": async () => {
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
	},

	"https://oec.world/en/tradle/": () => {
		// TODO: fix auto submit
		const country = /export\/([a-z]{3})/.exec(document.querySelector('iframe').src)[1];
		inputCountryAnswer(countriesTradle[country]);
		// document.querySelectorAll('button')[2].click();
	},

	"https://sardle.net/": () => submit_guess(S.secret.name),

	"https://semantle.novalis.org/": () => {
		document.querySelector("input").value = secret;
		document.querySelector("#guess-btn").click();
	},

	"https://www.sedecordle.com/": () => {
		answer.forEach(a => {
			[...a].forEach(c => document.querySelector(`#${c}`).click());
			document.querySelector("#enter1").click();
		})
	},

	"https://xordle.xyz/": async () => {
		const content = await readFileFromSourceMap(document.querySelector("script[defer]").src, "hardcoded.tsx");
		const answers = JSON.parse(content.split("=")[1].replace(';', ''));
		const currentDay = /\d+/.exec(document.querySelector(".Game-options").innerText)[0];
		const words = answers[currentDay].targets;
		const buttons = Array.from(document.querySelectorAll("button[tabindex]"));
		const letters = "qwertyuiopasdfghjkl<zxcvbnm!";
		const mapping = {};
		buttons.forEach((b, i) => {
			mapping[letters[i]] = b;
		});
		words.forEach(word => {
			[...word, '!'].forEach(c => mapping[c].click());
		});
	},

	"https://www.redactle.com/": async () => {
		document.querySelector("#userGuess").value = atob((await (await fetch("/ses.php")).json()).article);
		document.querySelector("#submitGuess").click();
	},

	"https://wordleheb.web.app/": async () => {
		const url = [...document.querySelectorAll('script')].find(e => /js\/app\./.test(e.src)).src;
		const file = await readFileFromSourceMap(url, 'lexicon.js');
		const words = JSON.parse(file.split(' = ')[1])
		const index = Math.floor((new Date((new Date).toString().slice(0, 15)) - new Date(2022, 0, 0)) / 1e3 / 60 / 60 / 24 + 1);
		const word = words[index];
		[...word, '\r'].forEach(c => window.dispatchEvent(new KeyboardEvent('keypress', { keyCode: c.charCodeAt(0) })));
	}

}

const solve = async () => {
	const siteUrl = document.location.href;
	for (const [url, solution] of Object.entries(solutions)) {
		if (siteUrl.startsWith(url)) {
			try {
				await solution();
			} catch (e) {
				alert('failed to solve puzzle');
				console.log(e);
			}
			return;
		}
	}
	alert(`unknown website: ${siteUrl}`);
}

const inputCountryAnswer = (country) => {
	const el = document.querySelector('input');
	Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), 'value').set.call(el, country);
	el.dispatchEvent(new Event('input', {
		bubbles: true
	}));
}

const readFileFromSourceMap = async (url, name) => {
	const data = await (await fetch(`${url}.map`)).json();
	const index = data.sources.findIndex(file => file.endsWith(name));
	return data.sourcesContent[index];
}


const countriesTradle = {
	ago: "Angola",
	bdi: "Burundi",
	ben: "Benin",
	bwa: "Botswana",
	bfa: "Burkina Faso",
	caf: "Central African Republic",
	civ: "Cote d'Ivoire",
	cmr: "Cameroon",
	cod: "Democratic Republic of the Congo",
	cog: "Republic of the Congo",
	com: "Comoros",
	cpv: "Cape Verde",
	dji: "Djibouti",
	dza: "Algeria",
	egy: "Egypt",
	eri: "Eritrea",
	eth: "Ethiopia",
	swz: "Eswatini",
	gab: "Gabon",
	gha: "Ghana",
	gin: "Guinea",
	gmb: "Gambia",
	gnb: "Guinea-Bissau",
	gnq: "Equatorial Guinea",
	ken: "Kenya",
	lso: "Lesotho",
	lbr: "Liberia",
	lby: "Libya",
	mar: "Morocco",
	mdg: "Madagascar",
	mli: "Mali",
	moz: "Mozambique",
	mrt: "Mauritania",
	mus: "Mauritius",
	mwi: "Malawi",
	nam: "Namibia",
	ner: "Niger",
	nga: "Nigeria",
	rwa: "Rwanda",
	sdn: "Sudan",
	sen: "Senegal",
	shn: "Saint Helena",
	sle: "Sierra Leone",
	som: "Somalia",
	ssd: "South Sudan",
	stp: "Sao Tome and Principe",
	syc: "Seychelles",
	tcd: "Chad",
	tgo: "Togo",
	tun: "Tunisia",
	tza: "Tanzania",
	uga: "Uganda",
	zaf: "South Africa",
	zmb: "Zambia",
	zwe: "Zimbabwe",
	atf: "French South Antarctic Territory",
	afg: "Afghanistan",
	are: "United Arab Emirates",
	arm: "Armenia",
	aze: "Azerbaijan",
	bgd: "Bangladesh",
	bhr: "Bahrain",
	brn: "Brunei",
	btn: "Bhutan",
	cck: "Cocos (Keeling) Islands",
	chn: "China",
	cxr: "Christmas Island",
	cyp: "Cyprus",
	geo: "Georgia",
	hkg: "Hong Kong",
	idn: "Indonesia",
	ind: "India",
	iot: "British Indian Ocean Territory",
	irn: "Iran",
	irq: "Iraq",
	isr: "Israel",
	jor: "Jordan",
	jpn: "Japan",
	kaz: "Kazakhstan",
	kgz: "Kyrgyzstan",
	khm: "Cambodia",
	kor: "South Korea",
	kwt: "Kuwait",
	lao: "Laos",
	lbn: "Lebanon",
	lka: "Sri Lanka",
	mac: "Macau",
	mdv: "Maldives",
	mmr: "Burma",
	mng: "Mongolia",
	mys: "Malaysia",
	npl: "Nepal",
	omn: "Oman",
	pak: "Pakistan",
	phl: "Philippines",
	prk: "North Korea",
	pse: "Palestine",
	qat: "Qatar",
	sau: "Saudi Arabia",
	sgp: "Singapore",
	syr: "Syria",
	tha: "Thailand",
	tjk: "Tajikistan",
	tkm: "Turkmenistan",
	tls: "Timor-Leste",
	tur: "Turkey",
	uzb: "Uzbekistan",
	vnm: "Vietnam",
	xxb: "Other Asia",
	yem: "Yemen",
	alb: "Albania",
	and: "Andorra",
	aut: "Austria",
	bgr: "Bulgaria",
	bih: "Bosnia and Herzegovina",
	blr: "Belarus",
	bel: "Belgium",
	lux: "Luxembourg",
	che: "Switzerland",
	cze: "Czechia",
	deu: "Germany",
	dnk: "Denmark",
	esp: "Spain",
	est: "Estonia",
	fin: "Finland",
	fra: "France",
	gbr: "United Kingdom",
	gib: "Gibraltar",
	grc: "Greece",
	hrv: "Croatia",
	hun: "Hungary",
	irl: "Ireland",
	isl: "Iceland",
	ita: "Italy",
	ltu: "Lithuania",
	lva: "Latvia",
	mda: "Moldova",
	mkd: "North Macedonia",
	mlt: "Malta",
	mne: "Montenegro",
	nld: "Netherlands",
	nor: "Norway",
	pol: "Poland",
	prt: "Portugal",
	rou: "Romania",
	rus: "Russia",
	smr: "San Marino",
	srb: "Serbia",
	svk: "Slovakia",
	svn: "Slovenia",
	swe: "Sweden",
	ukr: "Ukraine",
	yug: "Yugoslavia",
	abw: "Aruba",
	aia: "Anguilla",
	ant: "Netherlands Antilles",
	atg: "Antigua and Barbuda",
	bes: "Bonaire",
	bhs: "Bahamas",
	blm: "Saint Barthélemy",
	blz: "Belize",
	bmu: "Bermuda",
	brb: "Barbados",
	can: "Canada",
	cri: "Costa Rica",
	cub: "Cuba",
	cuw: "Curaçao",
	cym: "Cayman Islands",
	dma: "Dominica",
	dom: "Dominican Republic",
	grd: "Grenada",
	grl: "Greenland",
	gtm: "Guatemala",
	hnd: "Honduras",
	hti: "Haiti",
	jam: "Jamaica",
	kna: "Saint Kitts and Nevis",
	lca: "Saint Lucia",
	maf: "Saint Maarten",
	mex: "Mexico",
	msr: "Montserrat",
	nic: "Nicaragua",
	pan: "Panama",
	slv: "El Salvador",
	spm: "Saint Pierre and Miquelon",
	tca: "Turks and Caicos Islands",
	tto: "Trinidad and Tobago",
	usa: "United States",
	vct: "Saint Vincent and the Grenadines",
	vgb: "British Virgin Islands",
	asm: "American Samoa",
	aus: "Australia",
	cok: "Cook Islands",
	fji: "Fiji",
	fsm: "Micronesia",
	gum: "Guam",
	kir: "Kiribati",
	mhl: "Marshall Islands",
	mnp: "Northern Mariana Islands",
	ncl: "New Caledonia",
	nfk: "Norfolk Island",
	niu: "Niue",
	nru: "Nauru",
	nzl: "New Zealand",
	pcn: "Pitcairn Islands",
	plw: "Palau",
	png: "Papua New Guinea",
	pyf: "French Polynesia",
	slb: "Solomon Islands",
	tkl: "Tokelau",
	ton: "Tonga",
	tuv: "Tuvalu",
	vut: "Vanuatu",
	wlf: "Wallis and Futuna",
	wsm: "Samoa",
	arg: "Argentina",
	bol: "Bolivia",
	bra: "Brazil",
	chl: "Chile",
	col: "Colombia",
	ecu: "Ecuador",
	flk: "Falkland Islands",
	guy: "Guyana",
	per: "Peru",
	pry: "Paraguay",
	sur: "Suriname",
	ury: "Uruguay",
	ven: "Venezuela"
}


solve();