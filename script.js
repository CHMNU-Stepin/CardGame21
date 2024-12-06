const playerName = prompt("Введіть своє ім’я:", "Гравець");
const playerNameElement = document.getElementById("player-name");
const playerScoreElement = document.getElementById("player-score");
const playerNumElement = document.getElementById("player-num");
const playerCardElement = document.getElementById("player-card");
const compNameElement = document.getElementById("comp-name");
const compScoreElement = document.getElementById("comp-score");
const compNumElement = document.getElementById("comp-num");
const compCardElement = document.getElementById("comp-card");

playerNameElement.textContent = playerName;
compNameElement.textContent = "Комп'ютер";

let playerScore = 0;
let compScore = 0;

const cards = {
    "cards/ace_of_clubs.svg": { value: 1, name: "Ace" },
    "cards/ace_of_diamonds.svg": { value: 1, name: "Ace" },
    "cards/ace_of_hearts.svg": { value: 1, name: "Ace" },
    "cards/ace_of_spades.svg": { value: 1, name: "Ace" },
    "cards/2_of_clubs.svg": { value: 2, name: "2" },
    "cards/2_of_diamonds.svg": { value: 2, name: "2" },
    "cards/2_of_hearts.svg": { value: 2, name: "2" },
    "cards/2_of_spades.svg": { value: 2, name: "2" },
    "cards/3_of_clubs.svg": { value: 3, name: "3" },
    "cards/3_of_diamonds.svg": { value: 3, name: "3" },
    "cards/3_of_hearts.svg": { value: 3, name: "3" },
    "cards/3_of_spades.svg": { value: 3, name: "3" },
    "cards/4_of_clubs.svg": { value: 4, name: "4" },
    "cards/4_of_diamonds.svg": { value: 4, name: "4" },
    "cards/4_of_hearts.svg": { value: 4, name: "4" },
    "cards/4_of_spades.svg": { value: 4, name: "4" },
    "cards/5_of_clubs.svg": { value: 5, name: "5" },
    "cards/5_of_diamonds.svg": { value: 5, name: "5" },
    "cards/5_of_hearts.svg": { value: 5, name: "5" },
    "cards/5_of_spades.svg": { value: 5, name: "5" },
    "cards/6_of_clubs.svg": { value: 6, name: "6" },
    "cards/6_of_diamonds.svg": { value: 6, name: "6" },
    "cards/6_of_hearts.svg": { value: 6, name: "6" },
    "cards/6_of_spades.svg": { value: 6, name: "6" },
    "cards/7_of_clubs.svg": { value: 7, name: "7" },
    "cards/7_of_diamonds.svg": { value: 7, name: "7" },
    "cards/7_of_hearts.svg": { value: 7, name: "7" },
    "cards/7_of_spades.svg": { value: 7, name: "7" },
    "cards/8_of_clubs.svg": { value: 8, name: "8" },
    "cards/8_of_diamonds.svg": { value: 8, name: "8" },
    "cards/8_of_hearts.svg": { value: 8, name: "8" },
    "cards/8_of_spades.svg": { value: 8, name: "8" },
    "cards/9_of_clubs.svg": { value: 9, name: "9" },
    "cards/9_of_diamonds.svg": { value: 9, name: "9" },
    "cards/9_of_hearts.svg": { value: 9, name: "9" },
    "cards/9_of_spades.svg": { value: 9, name: "9" },
    "cards/10_of_clubs.svg": { value: 10, name: "10" },
    "cards/10_of_diamonds.svg": { value: 10, name: "10" },
    "cards/10_of_hearts.svg": { value: 10, name: "10" },
    "cards/10_of_spades.svg": { value: 10, name: "10" },
    "cards/jack_of_clubs.svg": { value: 10, name: "Jack" },
    "cards/jack_of_diamonds.svg": { value: 10, name: "Jack" },
    "cards/jack_of_hearts.svg": { value: 10, name: "Jack" },
    "cards/jack_of_spades.svg": { value: 10, name: "Jack" },
    "cards/queen_of_clubs.svg": { value: 10, name: "Queen" },
    "cards/queen_of_diamonds.svg": { value: 10, name: "Queen" },
    "cards/queen_of_hearts.svg": { value: 10, name: "Queen" },
    "cards/queen_of_spades.svg": { value: 10, name: "Queen" },
    "cards/king_of_clubs.svg": { value: 10, name: "King" },
    "cards/king_of_diamonds.svg": { value: 10, name: "King" },
    "cards/king_of_hearts.svg": { value: 10, name: "King" },
    "cards/king_of_spades.svg": { value: 10, name: "King" }
};

function getRandomCard() {
    const keys = Object.keys(cards);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return { path: randomKey, ...cards[randomKey] };
}

function playRound() {
    const playerCard = getRandomCard();
    const compCard = getRandomCard();

    playerNumElement.textContent = playerCard.value;
    compNumElement.textContent = compCard.value;

    playerCardElement.src = playerCard.path;
    playerCardElement.alt = playerCard.name;

    compCardElement.src = compCard.path;
    compCardElement.alt = compCard.name;

    if (playerCard.value > compCard.value) {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (compCard.value > playerCard.value) {
        compScore++;
        compScoreElement.textContent = compScore;
    }

    if (playerScore === 3 || compScore === 3) {
        const winner = playerScore === 3 ? playerName : "Комп'ютер";
        alert(`Гра завершена! Переможець: ${winner}`);
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    compScore = 0;
    playerScoreElement.textContent = 0;
    compScoreElement.textContent = 0;
    playerNumElement.textContent = "0";
    compNumElement.textContent = "0";
    playerCardElement.src = "cards/red_joker.svg";
    compCardElement.src = "cards/black_joker.svg";
}
