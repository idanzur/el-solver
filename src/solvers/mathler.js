(() => {
    const {solution} = JSON.parse(localStorage.getItem('gameState'));
    const buttons = Array.from(document.querySelectorAll('button'));
    const numbers = '0123456789~+-*/!';
    [...solution, '~'].forEach(c => buttons[numbers.indexOf(c)].click());
}
)();
