answer.forEach(a => {
    [...a, "enter1"].forEach(c => document.querySelector(`#${c}`).click());
});
