const readFileFromSourceMap = async (url, name) => {
	const data = await (await fetch(`${url}.map`)).json();
	const index = data.sources.findIndex(file => file.endsWith(name));
	return data.sourcesContent[index];
}

(async () => {
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
})();