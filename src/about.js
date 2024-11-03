export const createAbout = () => {
    
    const headline = document.createElement("p");
    headline.textContent = "About Us";
    headline.classList.add("header");

    const descript = document.createElement("p");
    descript.textContent = "A family-owned business where we invite your family to dine with us.";
    descript.classList.add("tagline");    

    const el = document.querySelector("div#content");
    el.appendChild(headline);
    el.appendChild(descript);
};