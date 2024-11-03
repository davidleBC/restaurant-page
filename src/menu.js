export const createMenu = () => {
    
    const headline = document.createElement("p");
    headline.textContent = "Menu";
    headline.classList.add("header");

    const descript = document.createElement("p");
    descript.innerText = "Pho.....$10 \r\n Spring Rolls.....$5 \r\n Pandan Surprise.....$8";
    descript.classList.add("tagline");    

    const el = document.querySelector("div#content");
    el.appendChild(headline);
    el.appendChild(descript);
};