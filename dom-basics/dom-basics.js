const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);


const image = document.createElement("img");
image.setAttribute("src", "https://picsum.photos/200");
image.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(image);


const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section")
newSection.innerHTML = "<h2> What's up homies</h1><h2>DOM Basics</h2><p>This was added through Javascript</p>";
document.body.appendChild(newSection)

