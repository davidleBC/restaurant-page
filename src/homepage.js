import homeimg from "../image/main.jpg";

export const createHome = () => {
    
// Homepage image
const image = document.createElement("img");
image.src = homeimg;
image.classList.add("mainimg")

// Homepage heading text
const headline = document.createElement("p");
headline.textContent = "Emerald Pandan Restaurant";
headline.classList.add("header");

// Description text
const descript = document.createElement("p");
descript.textContent = "An homage to Vietnamese cuisine.";
descript.classList.add("tagline");

// Search and append to div#content
const el = document.querySelector("div#content");


    el.appendChild(image);
    el.appendChild(headline);
    el.appendChild(descript);
}
