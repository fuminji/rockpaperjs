
function comInput () {
    let computerC = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * computerC.length);
    return computerC[computerChoice]
}

console.log(comInput());