if (!localStorage.getItem("player")) {
    const defaultPlayer = {
        name: "Player 1",
        chips: 200,
        Bet: 0
    };
    localStorage.setItem("player", JSON.stringify(defaultPlayer));
}