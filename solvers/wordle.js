for (c of `${new wordle.bundle.GameApp().solution}↵`) {
    document.querySelector("game-app")
        .shadowRoot.querySelector("game-keyboard")
        .shadowRoot.querySelector(`[data-key='${c}']`)
        .click();
}