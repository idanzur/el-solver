(async () => {
    const {article} = await (await fetch("/ses.php")).json();
    atob(article).split("_").forEach(word => {
        document.querySelector("#userGuess").value = word;
        document.querySelector("#submitGuess").click();
    });
})();
