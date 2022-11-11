(() => {
    ans.slice(0, getAnsLength()).forEach(m => {
        game.move(m);
        syncGameBoard();
    });
    submitGuess();
})();
