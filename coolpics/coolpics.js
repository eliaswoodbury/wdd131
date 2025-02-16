const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description:
      "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "****"
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
    imgSrc:
      "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description:
      "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐"
  }
];

// Display Articles Function
function displayArticles() {
  const container = document.getElementById("articles-container");

  if (!container) {
    console.error("Error: Could not find #articles-container in DOM.");
    return;
  }

  articles.forEach((article) => {
    const articleElement = document.createElement("article");

    articleElement.innerHTML = `
      <h2>${article.title}</h2>
      <p><strong>Date:</strong> ${article.date}</p>
      <img src="${article.imgSrc}" alt="${article.imgAlt}">
      <p>${article.description}</p>
      <p><strong>Recommended Ages:</strong> ${article.ages}</p>
      <p><strong>Genre:</strong> ${article.genre}</p>
      <p><strong>Rating:</strong> ${article.stars}</p>
    `;

    container.appendChild(articleElement);
  });
}

// Toggle Navigation
function toggleNav() {
  let navElement = document.querySelector("nav");
  if (navElement) {
    navElement.classList.toggle("hide");
  }
}

// Attach event listener to menu button safely
const menuButton = document.querySelector("#menu-toggle");
if (menuButton) {
  menuButton.addEventListener("click", toggleNav);
} else {
  console.warn("Warning: No menu button found.");
}

// Handle window resizing for navigation
function handleResize() {
  let navElement = document.querySelector("nav");

  if (!navElement) return; // Prevent errors

  if (window.innerWidth > 1000) {
    navElement.classList.remove("hide");
  } else {
    navElement.classList.add("hide");
  }
}

window.addEventListener("resize", handleResize);
handleResize();

// Image Viewer Template
function viewerTemplate(imageSrc, altText) {
  const newSrc = imageSrc.replace("-sm", "-full"); // More reliable transformation
  return `
    <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${newSrc}" alt="${altText}" style="max-width: 90%; max-height: 90%;">
    </div>
  `;
}

// View Image Handler
function viewHandler(event) {
  if (event.target.tagName === "IMG") {
    const imageSrc = event.target.src;
    const altText = event.target.alt;

    document.querySelector(".viewer")?.remove(); // Remove existing viewer

    document.body.insertAdjacentHTML("beforeend", viewerTemplate(imageSrc, altText));

    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
  }
}

// Close Image Viewer
function closeViewer() {
  document.querySelector(".viewer")?.remove();
}

// Attach event listener to images inside the .gallery section safely
const gallery = document.querySelector(".gallery");
if (gallery) {
  gallery.addEventListener("click", viewHandler);
} else {
  console.warn("Warning: No .gallery element found.");
}

// Execute displayArticles function when the DOM is ready
document.addEventListener("DOMContentLoaded", displayArticles);
