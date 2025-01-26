const gallery = document.querySelector('.gallery');

// Function to apply the appropriate grid layout
function applyGridLayout() {
  if (window.matchMedia('(max-width: 700px)').matches) {
    gallery.style.gridTemplateColumns = '1fr'; // One column layout
  } else {
    gallery.style.gridTemplateColumns = '1fr 1fr'; // Two column layout
  }
}