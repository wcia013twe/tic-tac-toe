const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square w-10 h-10 flex items-center justify-center border" id="square-${index}">${square}</div>`;
        })
        document.querySelector(`#gameboard`).innerHTML = boardHTML;
    }

    return {
        render,
    }
})();

const createPlayer = (name, mark) => {
    return {
        name,
        mark,
    }
}

const Game = (() => {
    let players = [];
    let currentPlayer;
    let gameOver;

    const start = () => {
        players = [
            createPlayer(document.querySelector("#player1").value, "X"),
            createPlayer(document.querySelector("#player2").value, "O")
        ]
        currentPlayer = 0;
        gameOver = false;
        Gameboard.render();
    }
    return {
        start,
    }
})();

const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', () => {
    Game.start();
})

