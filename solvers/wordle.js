[...new wordle.bundle.GameApp().solution, '↵'].forEach(c =>
    document.querySelector("game-app")
        .shadowRoot.querySelector("game-keyboard")
        .shadowRoot.querySelector(`[data-key='${c}']`)
        .click()
);