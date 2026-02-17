console.log("Script started");

function startExample() {
    let numBoxes = prompt("how many boxes?");
    let numBadges = prompt("How many badges?");
    let numHours = prompt("how may hours?");

    let isGold = numBoxes >= 100 || numBoxes >= 50 && numBadges >= 10 && numHours >=25;
    alert("is gold status" + isGold);
}