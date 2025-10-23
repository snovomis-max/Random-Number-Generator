function generateRandomNumber() {
    const randNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById("result").textContent = randNum;
}