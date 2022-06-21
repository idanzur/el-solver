const readFileFromSourceMap = async (url, name) => {
	const data = await (await fetch(`${url}.map`)).json();
	const index = data.sources.findIndex(file => file.endsWith(name));
	return data.sourcesContent[index];
}
