(() => {
    const buttons = Array.from(document.querySelectorAll('div.key'));
    const letters = 'QWERTZUIOPASDFGHJKL~YXCVBNM@';
    const answer = app.getTodaysGameData().solution;
    [...answer, '~'].forEach(c => buttons[letters.indexOf(c)].click())
}
)();
