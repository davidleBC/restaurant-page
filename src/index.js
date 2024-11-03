import { createHome } from "./homepage.js";
import { createAbout } from "./about.js";
import { createMenu } from "./menu.js";
import stylecss from "./styles.css";

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");
const content = document.querySelector("#content");

function removeChildElements() {
    while (content.lastElementChild) {
        content.removeChild(content.lastElementChild);
     }
}

createHome();

home.addEventListener("click", function(e) {
    removeChildElements();
    createHome();
})

menu.addEventListener("click", function(e) {
    removeChildElements();
    createMenu();
  })

about.addEventListener("click", function(e) {
    removeChildElements();
    createAbout();
})

