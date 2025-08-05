let playerEl = document.getElementById("player-el")
let startButton= document.getElementById("startGame")
let counter = document.getElementById("counter")
let error = document.getElementById("ErrorMessage")
let player = JSON.parse(localStorage.getItem("player"))
let name = player.name
let chips = player.chips
let Bet = player.Bet
playerEl.textContent = name + ": $" + chips
if (player.chips < 5) {
    alert("You need at least $5 to play!")
    window.location.href = "../index/index.html"
}


function minusChips() {
    if (+counter.innerText === 5) {
        error.innerText = "You've reached the minimum!"
    } else {
        counter.innerText = Number(counter.innerText) - 5;
    }
}
function plusChips() {
    if (+counter.innerText === player.chips) {
        error.innerText = "You've reached the limit!"
    } else {
        counter.innerText = Number(counter.innerText) + 5;
    }
}

function CreditChange() {
    player.chips -= +counter.innerText
    player.Bet = +counter.innerText
    localStorage.setItem("player", JSON.stringify(player))
}


window.minusChips = minusChips;
window.plusChips = plusChips;
window.CreditChange = CreditChange;





