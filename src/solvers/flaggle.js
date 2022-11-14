(() => {
    const id = document.querySelector('form').onsubmit.toString().match(/'(\w{2})'\)/)[1];
    document.getElementById("flag-search").value = document.getElementById(id).innerText;
    document.getElementById('guessBtn').click();
})();
