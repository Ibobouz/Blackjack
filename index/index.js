let playerEl = document.getElementById("player-el")
let startButton = document.getElementById("startGame")
let playerData = JSON.parse(localStorage.getItem("player"))

playerEl.textContent = playerData.name + ": $" + playerData.chips

startButton.addEventListener("click", () => {
    document.getElementById("message-el").textContent = "Game starting..."
    
    setTimeout(() => {
        window.location.href = "../MoneyBet/MoneyBet.html"
    }, 500)
})
