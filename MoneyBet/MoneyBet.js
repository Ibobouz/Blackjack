document.addEventListener("DOMContentLoaded", () => {
    const Minusbtn = document.getElementById("minusBtn")
    const PlusBtn = document.getElementById("plusBtn")
    const playerEl = document.getElementById("player-el")
    const startButton = document.getElementById("startGame")
    const counter = document.getElementById("counter")
    const error = document.getElementById("ErrorMessage")

    let playerData = JSON.parse(localStorage.getItem("player"))
    if (!playerData) {
        alert("No player data found.")
        window.location.href = "../index/index.html"
        return
    }

    const name = playerData.name
    const chips = playerData.chips
    playerEl.textContent = name + ": $" + chips

    if (chips < 5) {
        alert("You need at least $5 to play!")
        window.location.href = "../index/index.html"
        return
    }

    function minusChips() {
        if (+counter.innerText === 5) {
            error.innerText = "You've reached the minimum!"
        } else {
            counter.innerText = Number(counter.innerText) - 5
            error.innerText = ""
        }
    }

    function plusChips() {
        if (+counter.innerText === chips) {
            error.innerText = "You've reached the limit!"
        } else {
            counter.innerText = Number(counter.innerText) + 5
            error.innerText = ""
        }
    }

    function CreditChange() {
        playerData.chips -= +counter.innerText
        playerData.Bet = +counter.innerText
        localStorage.setItem("player", JSON.stringify(playerData))
    }

    Minusbtn.addEventListener("click", minusChips)
    PlusBtn.addEventListener("click", plusChips)
    startButton.addEventListener("click", CreditChange)
})
