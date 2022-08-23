(async () => {
    const content = await readFileFromSourceMap(document.querySelector("script[defer]").src, "hardcoded.tsx");
    const currentDay = /\d+/.exec(document.querySelector(".Game-options").innerText)[0];
    const answers = JSON.parse(new RegExp(`"${currentDay}".*?"targets".*?(\\[.*?])`, 's').exec(content)[1]);
    const buttons = Array.from(document.querySelectorAll("button[tabindex]"));
    const letters = "qwertyuiopasdfghjkl<zxcvbnm!";
    answers.forEach(word => {
        [...word, '!'].forEach(c => buttons[letters.indexOf(c)].click());
    });
})();
