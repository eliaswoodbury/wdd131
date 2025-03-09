// Recipe data with the provided images
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

function createRecipeCard(recipe) {
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';

    const img = document.createElement('img');
    img.src = recipe.image;
    img.alt = `${recipe.name} image`;

    const content = document.createElement('div');
    content.className = 'content';

    const tags = document.createElement('div');
    tags.className = 'tags';
    recipe.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'tag';
        tagSpan.textContent = tag;
        tags.appendChild(tagSpan);
    });

    const name = document.createElement('h2');
    name.textContent = recipe.name;

    const rating = document.createElement('span');
    rating.className = 'rating';
    rating.setAttribute('role', 'img');
    rating.setAttribute('aria-label', `Rating: ${recipe.rating} out of 5 stars`);
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.setAttribute('aria-hidden', 'true');
        star.className = i <= recipe.rating ? 'icon-star' : 'icon-star-empty';
        star.innerHTML = i <= recipe.rating ? '⭐' : '☆';
        rating.appendChild(star);
    }

    content.appendChild(tags);
    content.appendChild(name);
    content.appendChild(rating);

    recipeCard.appendChild(img);
    recipeCard.appendChild(content);

    return recipeCard;
}

// Populate recipe cards and handle search
document.addEventListener('DOMContentLoaded', () => {
    const recipeContainer = document.getElementById('recipeContainer');
    const searchInput = document.getElementById('search');

    function displayRecipes(filteredRecipes) {
        recipeContainer.innerHTML = '';
        filteredRecipes.forEach(recipe => {
            const card = createRecipeCard(recipe);
            recipeContainer.appendChild(card);
        });
    }

    // Initial display of all recipes
    displayRecipes(recipes);

    // Search functionality
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query))
        );
        displayRecipes(filteredRecipes);
    });
});