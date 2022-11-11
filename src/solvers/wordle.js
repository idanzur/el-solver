(async () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const {solution} = await (await fetch(`/svc/wordle/v2/${year}-${month}-${day}.json`)).json();
    [...solution, '↵'].forEach(c => document.querySelector(`[data-key='${c}']`).click());
})();
