answer.forEach(a => {
    [...a].forEach(c => document.querySelector(`#${c}`).click());
    document.querySelector("#enter1").click();
})