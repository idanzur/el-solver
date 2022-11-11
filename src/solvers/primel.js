(() => {
    const {solution} = JSON.parse(localStorage.getItem('gameState'));
    const buttons = Array.from(document.querySelectorAll('div.text-xs'));
    const numbers = '1234567890~!';
    [...solution, '~'].forEach(c => buttons[numbers.indexOf(c)].click());
}
)();
