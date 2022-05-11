(async () => {
    document.querySelector("#userGuess").value = atob((await (await fetch("/ses.php")).json()).article);
    document.querySelector("#submitGuess").click();
})();