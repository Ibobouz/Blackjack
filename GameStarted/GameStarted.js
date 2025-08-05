import { fullDeck } from "./deck.js";

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
const message = document.getElementById('message')
const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")
const playerEl = document.getElementById("player-el")
const DrawBtn = document.getElementById("DrawCards")
const NewCardBtn = document.getElementById("NewCard")
const cashoutBtn = document.getElementById("Cashout")
const mainMenuBtn = document.getElementById("mainMenu")
let playerData = JSON.parse(localStorage.getItem("player"))

playerEl.textContent = playerData.name + ": $" + playerData.chips + " Bet: $" + playerData.Bet;
document.getElementById("NewCard").style.display = "none"

function getRandomCard() {
     let randomCard = fullDeck[Math.floor(Math.random() * fullDeck.length)]
     let numericValue
     if (["J", "Q", "K"].includes(randomCard.value)) {
         numericValue = 10
     } else if (randomCard.value === "A") {
         numericValue = 11
    } else {
         numericValue = Number(randomCard.value)
     }
     return {
       suit: randomCard.suit,
       value: randomCard.value,
       img: randomCard.img,
       numericValue: numericValue
     };
 }
DrawBtn.addEventListener ("click", function DrawCards() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard.numericValue + secondCard.numericValue
    renderGame()
    document.getElementById("NewCard").style.display = "inline-block"
    document.getElementById("DrawCards").style.display = "none"
    return firstCard && secondCard
})


function renderGame() {
    
    cardsEl.innerHTML = "Cards: "
    cards.forEach(card => {
         const imgEl = document.createElement("img");
         imgEl.src = card.img;                // Pfad aus deck.js
         imgEl.alt = `${card.value} of ${card.suit}`;
         cardsEl.appendChild(imgEl);
     });
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message.textContent = "Do you want to draw a new card?"

    } else if (sum === 21) {
        message.textContent = "You've got Blackjack!"
        hasBlackJack = true
        document.getElementById("DrawCards").style.display = "none"
        document.getElementById("NewCard").style.display = "none"

    } else if (sum > 21) {
        message.textContent = "You're out of the game!"
        isAlive = false
        document.getElementById("DrawCards").style.display = "none"
        document.getElementById("NewCard").style.display = "none"
        document.getElementById("Cashout").style.display = "none"
        document.getElementById("mainMenu").style.display = "inline-block"
    }
}

NewCardBtn.addEventListener("click", function newCard() {
     if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card.numericValue
        cards.push(card)
        renderGame()
    }

})

cashoutBtn.addEventListener("click", function cashOut() {
    document.getElementById("DrawCards").style.display = "none"
    document.getElementById("NewCard").style.display = "none"
    let wins = 0
    if (sum < 10 || sum > 21) {
        wins = 0
    } else if (sum > 10 && sum < 15) {
        wins = playerData.Bet 
    } else if (sum >= 15 && sum < 20) {
        let multiplier = 1 + (sum - 10) * 0.1
        wins = Math.floor(playerData.Bet * multiplier)
    } else if(sum ===20) {
        wins = Math.floor(playerData.Bet * 1.95)
    } else if (sum === 21) {
        wins = playerData.Bet * 2
    }
    playerData.chips += wins
    localStorage.setItem("player", JSON.stringify(playerData))
    messageEl.textContent = "You've won $" + wins
    document.getElementById("Cashout").style.display = "none"
    document.getElementById("mainMenu").style.display = "inline-block"
})

mainMenuBtn.addEventListener("click", function mainMenu() {
    window.location.href = "../index/index.html"
})
window.playerData = playerData
