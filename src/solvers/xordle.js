(async () => {
    const content = await readFileFromSourceMap(document.querySelector("script[defer]").src, "hardcoded.tsx");
    const answers = JSON.parse(content.split("=")[1].replace(';', ''));
    const currentDay = /\d+/.exec(document.querySelector(".Game-options").innerText)[0];
    const words = answers[currentDay].targets;
    const buttons = Array.from(document.querySelectorAll("button[tabindex]"));
    const letters = "qwertyuiopasdfghjkl<zxcvbnm!";
    words.forEach(word => {
        [...word, '!'].forEach(c => buttons[letters.indexOf(c)].click());
    });
})();
