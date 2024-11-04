let currentRoll = 1;
let savedResults = [];

function rollDice() {
    currentRoll = Math.floor(Math.random() * 6) + 1;
    displayDice(currentRoll);
}

function displayDice(number) {
    const dice = document.getElementById("dice");
    dice.innerHTML = "";  // Clear existing dots

    // Create dots based on the rolled number
    const dotPositions = {
        1: ["dot-1"],
        2: ["dot-2", "dot-3"],
        3: ["dot-1", "dot-2", "dot-3"],
        4: ["dot-2", "dot-3", "dot-4", "dot-5"],
        5: ["dot-1", "dot-2", "dot-3", "dot-4", "dot-5"],
        6: ["dot-2", "dot-3", "dot-4", "dot-5", "dot-6", "dot-7"]
    };

    dotPositions[number].forEach(dotClass => {
        const dot = document.createElement("div");
        dot.classList.add("dot", dotClass);
        dice.appendChild(dot);
    });
}

function saveResult() {
    savedResults.push(currentRoll);
    displaySavedResults();
}

function resetResults() {
    savedResults = [];
    displaySavedResults();
}

function displaySavedResults() {
    const resultsList = document.getElementById("savedResults");
    resultsList.innerHTML = "";  // Clear current list
    savedResults.forEach((result, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Roll ${index + 1}: ${result}`;
        resultsList.appendChild(listItem);
    });
}

// Initialize with a random roll
rollDice();


//OLD CODE

// let currentRoll = 1;
// let savedResults = [];

// function rollDice() {
//     currentRoll = Math.floor(Math.random() * 6) + 1;
//     document.getElementById("dice").innerText = currentRoll;
// }

// function saveResult() {
//     savedResults.push(currentRoll);
//     displaySavedResults();
// }

// function resetResults() {
//     savedResults = [];
//     displaySavedResults();
// }

// function displaySavedResults() {
//     const resultsList = document.getElementById("savedResults");
//     resultsList.innerHTML = "";  // Clear current list
//     savedResults.forEach((result, index) => {
//         const listItem = document.createElement("li");
//         listItem.textContent = `Roll ${index + 1}: ${result}`;
//         resultsList.appendChild(listItem);
//     });
// }
