const recipes = [
    {
        name: "Apple Crisp",
        image: "images/apple-crisp.jpg",
        description: "A warm and delicious dessert with apples and a crispy topping.",
        tags: ["dessert"],
        rating: 4
    },
    {
        name: "Black Beans and Rice",
        image: "images/black-beans-and-rice.jpg",
        description: "A hearty and flavorful dish with black beans and rice.",
        tags: ["main", "vegan"],
        rating: 3
    },
    {
        name: "Chicken Curry",
        image: "images/chicken-curry.webp",
        description: "A spicy and aromatic chicken curry with rich flavors.",
        tags: ["main", "spicy"],
        rating: 5
    },
    {
        name: "Chocolate Chip Cookies",
        image: "images/chocolate-chip-cookies.jpg",
        description: "Classic cookies with gooey chocolate chips.",
        tags: ["dessert", "baking"],
        rating: 4
    },
    {
        name: "Escalopes de Poulet à la Crème",
        image: "images/escalopes-de-poulet-a-la-creme.webp",
        description: "Creamy chicken escalopes with a rich sauce.",
        tags: ["main", "french"],
        rating: 4
    },
    {
        name: "German Gooseberry Cake",
        image: "images/german-gooseberry-cake.jpg",
        description: "A tangy and sweet cake with fresh gooseberries.",
        tags: ["dessert", "baking"],
        rating: 3
    }
];

// Random Functions
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getRandomListEntry(array) {
    const randomIndex = getRandomNumber(array.length);
    return array[randomIndex];
}

// Template Functions
function tagsTemplate(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating
            ? `<span aria-hidden="true" class="icon-star">⭐</span>`
            : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.name} image">
            <div class="content">
                <div class="tags">${tagsTemplate(recipe.tags)}</div>
                <h2>${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p>${recipe.description}</p>
            </div>
        </div>
    `;
}

// Render Functions
function renderRecipes(recipeList) {
    const recipeContainer = document.getElementById('recipeContainer');
    const html = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    recipeContainer.innerHTML = html;
}

function init() {
    const randomRecipe = getRandomListEntry(recipes);
    renderRecipes([randomRecipe]);
}

// Filter Functions
function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(query);
        const descMatch = recipe.description.toLowerCase().includes(query);
        const tagsMatch = recipe.tags.some(tag => tag.toLowerCase().includes(query));
        // Add ingredients if you expand the recipes array later
        const ingredMatch = recipe.ingredients ? recipe.ingredients.some(ing => ing.toLowerCase().includes(query)) : false;
        return nameMatch || descMatch || tagsMatch || ingredMatch;
    });
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
    e.preventDefault(); // Not strictly needed without a form, but included for safety
    const query = document.getElementById('search').value.toLowerCase();
    const filteredRecipes = query ? filterRecipes(query) : recipes; // Show all if query is empty
    renderRecipes(filteredRecipes);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    init();
    document.getElementById('searchButton').addEventListener('click', searchHandler);
});