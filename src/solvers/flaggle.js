(() => {
    const id = document.querySelector('form').onsubmit.toString().match(/'(\w{2})'\)/)[1];
    const country = document.getElementById(id).innerText;
    document.getElementById("flag-search").value = country;
    document.getElementById('guessBtn').click();
})();
