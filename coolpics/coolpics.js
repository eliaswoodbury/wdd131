function toggleNav() {
  let navElement = document.querySelector("nav");
  navElement.classList.toggle("hide");
}

document.querySelector("button").addEventListener("click", toggleNav);

// Function to handle window resizing
function handleResize() {
  let navElement = document.querySelector("nav");
  
  if (window.innerWidth > 1000) {
    navElement.classList.remove("hide"); // Show menu on large screens
  } else {
    navElement.classList.add("hide"); // Hide menu on small screens
  }
}

// http://127.0.0.1:5500/coolpics/norris-sm.jpeg
// Run the function when the page loads and when the window resizes
window.addEventListener("resize", handleResize);
handleResize();

function viewerTemplate(imageSrc, altText) {
  const splitUrl = imageSrc.split("-")
  const newSrc = splitUrl[0] + "-full" + splitUrl[1].slice(2)
  return `
    <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${newSrc}" alt="${altText}" style="max-width: 90%; max-height: 90%;">
    </div>
  `;
}

function viewHandler(event) {
  if (event.target.tagName === "IMG") {
    const imageSrc = event.target.src;
    const altText = event.target.alt;

    document.querySelector(".viewer")?.remove(); // Remove existing viewer

    document.body.insertAdjacentHTML("beforeend", viewerTemplate(imageSrc, altText));

    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
  }
}

function closeViewer() {
  document.querySelector(".viewer")?.remove();
}

// Attach event listener to images inside the .gallery section
const gallery = document.querySelector(".gallery");
if (gallery) {
  gallery.addEventListener("click", viewHandler);
}
