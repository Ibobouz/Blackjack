let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = document.getElementById('message')
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let player = JSON.parse(localStorage.getItem("player"))

playerEl.textContent = player.name + ": $" + player.chips + " Bet: $" + player.Bet;

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function DrawCards() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

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


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function cashOut() {
    document.getElementById("DrawCards").style.display = "none"
    document.getElementById("NewCard").style.display = "none"
    let wins = 0
    if (sum <= 10 && sum > 21) {
        wins = 0
    } else if (sum > 10 && sum < 15) {
        wins = player.Bet 
    } else if (sum > 15 && sum < 21) {
        let multiplier = 1 + Math.random() * 0.5
        wins = Math.floor(player.Bet * multiplier)
    } else if (sum === 21) {
        wins = player.Bet * 2
    }
    player.chips += wins
    localStorage.setItem("player", JSON.stringify(player))
    messageEl.textContent = "You've won $" + wins
    document.getElementById("Cashout").style.display = "none"
    document.getElementById("mainMenu").style.display = "inline-block"
}

function mainMenu() {
    window.location.href = "../index/index.html"
}