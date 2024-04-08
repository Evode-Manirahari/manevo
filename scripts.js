
// Sample data for pets
const pets = [
    { name: "Buddy", image: "dog.jpg", description: "Golden Retriever", category: "dog" },
    { name: "Whiskers", image: "cat.jpg", description: "Tabby Cat", category: "cat" },
    { name: "Polly", image: "bird.jpg", description: "Parrot", category: "bird" }
];

// Function to display pets
function displayPets(pets) {
    // Get the container where pets will be displayed
    const petContainer = document.getElementById("pet-container");
    // Clear previous content
    petContainer.innerHTML = "";
    
    // Loop through each pet
    pets.forEach(pet => {
        // Create a new div for each pet
        const petCard = document.createElement("div");
        // Add class to style the div
        petCard.classList.add("pet-card");
        // Populate the div with pet information
        petCard.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}">
            <div class="pet-info">
                <h2>${pet.name}</h2>
                <p>${pet.description}</p>
            </div>
        `;
        // Append the pet card to the container
        petContainer.appendChild(petCard);
    });
}

// Function to filter pets by category
function filterPets(category) {
    // If no category selected, display all pets
    if (category === "") {
        displayPets(pets);
    } else {
        // Filter pets based on selected category
        const filteredPets = pets.filter(pet => pet.category === category);
        // Display filtered pets
        displayPets(filteredPets);
    }
}

// Function to handle search input
function handleSearch() {
    // Get the search input value and convert to lowercase
    const searchInput = document.getElementById("search").value.toLowerCase();
    // Filter pets based on search input
    const filteredPets = pets.filter(pet => pet.name.toLowerCase().includes(searchInput));
    // Display filtered pets
    displayPets(filteredPets);
}

// Event listener for category filter dropdown
document.getElementById("category-filter").addEventListener("change", function() {
    // Call filterPets function with selected category value
    filterPets(this.value);
});

// Event listener for search input
document.getElementById("search").addEventListener("input", handleSearch);

// Initial display of all pets
displayPets(pets);
