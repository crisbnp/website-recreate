// NAVIGATION TOGGLE

let mainMenu = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
let searchInput = document.getElementById("search-input");

navBarToggle.addEventListener('click', toggleActive);

function toggleActive() {
    mainMenu.classList.toggle('active');
    searchInput.placeholder = "Search for Patreon creators and creations";
}

// TYPEWRITER TEXT EFFECT

let index = 0;
let charPosition = 0;
let speed = 150;
let creators = ['musicians', 'writers', 'visual artists', 'podcasters', 'gaming creators', 'artists', 'animators', 'photographers', 'science creators', 'education creators', 'crafters', 'dancers and actors', 'all creators', 'video creators'];

let text = document.getElementById('text').innerText;

//create typing-effect function 

const type = () => {
    if (charPosition < creators[index].length) {
        document.getElementById("text").innerHTML += creators[index].charAt(charPosition);
        charPosition++
        setTimeout(type, speed);
    } else {
        setTimeout(erase, speed);
    }
}

//create erase backwards-effect function

const erase = () => {
    if (charPosition >= 0) {
        let newText = creators[index].substring(0, charPosition);
        document.getElementById('text').innerHTML = newText;
        charPosition --
        setTimeout(erase, speed);
    } else {
        index++;
        if (index >= creators.length)
         index = 0;
        setTimeout(type, speed)
    }
}

setTimeout(type,speed)

//ACCORDION FAQ 

let questions = document.getElementsByClassName("question");

for (let i = 0; i < questions.length; i++) {
    function toggleQ() {
        // toggle between adding and removing active class, highlight button that controls the panel
        this.classList.toggle("active");

        // toggle between hiding and showing the active panel
        let panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

        if (panel.style.display) {
            
        }
    }

    questions[i].addEventListener("click", toggleQ)
}