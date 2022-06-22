(async () => {
    const answer = atob((await (await fetch("/ses.php")).json()).article);
    answer.split("_").forEach(word => {
        document.querySelector("#userGuess").value = word;
        document.querySelector("#submitGuess").click();
    });
})();
