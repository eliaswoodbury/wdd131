const searchInput = document.querySelector('input[type="text"]');
const recipeCard = document.querySelector('.recipe-card');

searchInput.addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase();
    if (text.includes('apple')) {
        recipeCard.style.display = 'block';
    } else {
        recipeCard.style.display = 'none';
    }
});