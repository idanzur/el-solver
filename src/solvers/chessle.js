(async () => {
    const data = await (await fetch(SERVER_URL_GET)).json();
    const moveCount = difficulty == 'n' ? 6 : 12;
    data.moves.slice(0, moveCount).forEach(m => {
        game.move(m);
        syncGameBoard();
    });
    submitGuess();
})();
