(async () => {
    const data = await (await fetch(SERVER_URL_GET)).json();
    data.moves.forEach(m => {
        game.move(m);
        syncGameBoard();
    });
    submitGuess();
})()