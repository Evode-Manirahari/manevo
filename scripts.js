// Function to generate a random array
function generateArray() {
    const arrayContainer = document.getElementById("array-container");
    arrayContainer.innerHTML = ""; // Clear previous array

    const arraySize = 20; // Number of elements in the array
    const maxNumber = 100; // Maximum value for array elements

    for (let i = 0; i < arraySize; i++) {
        const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        const bar = document.createElement("div");
        bar.classList.add("array-bar");
        bar.style.height = `${randomNumber}px`;
        arrayContainer.appendChild(bar);
    }
}

// Function to start sorting
function startSorting() {
    const algorithm = document.getElementById("algorithm").value;
    const bars = document.querySelectorAll(".array-bar");

    if (algorithm === "bubble") {
        bubbleSort(bars);
    } else if (algorithm === "merge") {
        mergeSort(bars);
    }
}

// Bubble Sort algorithm
function bubbleSort(bars) {
    // Implementation of bubble sort algorithm
    // Modify the bars array to visualize sorting
}

// Merge Sort algorithm
function mergeSort(bars) {
    // Implementation of merge sort algorithm
    // Modify the bars array to visualize sorting
}
