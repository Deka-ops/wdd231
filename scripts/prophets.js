const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");

// buttons elements
const all = document.querySelector("#all")
const child = document.querySelector("#child")
const service = document.querySelector("#service")
const born = document.querySelector("#born")

let prophets = [];

async function getProphetData(url) {
    const response = await fetch(url); // fetch the data and store it in a variable

    const data = await response.json(); // promise(return) a JSON file
    // console.table(data.prophets) // formated in tabular form
    prophets = data.prophets;
    displayProphets(prophets); // expect data in an array format
}

getProphetData(url);

const displayProphets = (prophets) => {
    cards.innerHTML = "";

    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let birthDate = document.createElement("p");
        let birthPlace = document.createElement("p");

        let suffix = getSuffix(prophet.order)
        fullName.textContent = `${prophet.name} ${prophet.lastname} - ${prophet.order}${suffix} Latter-day President`; 
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Picture of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`
        birthPlace.textContent = `Birth Place: ${prophet.birthplace}`

        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);

        cards.appendChild(card);
    });
}


function getSuffix(order) {
    let suffix = "th";
    if (order % 10 === 1 && order % 100 !== 11) {
        suffix = "st";
    } else if (order % 10 === 2 && order % 100 !== 12) {
        suffix = "nd";
    } else if (order % 10 === 3 && order % 100 !== 13) {
        suffix = "rd";
    }
    return suffix;
}

// Event Listeners for the button
all.addEventListener("click", ()=> {
    displayProphets(prophets)
    clearButton()
    all.classList.add("active");
});

child.addEventListener("click", ()=> {
    displayProphets(prophets.filter(prophet => prophet.numofchildren >= 10));
    clearButton()
    child.classList.add("active");
})

service.addEventListener("click", ()=> {
    displayProphets(prophets.filter(prophet => prophet.length >= 15));
    clearButton()
    service.classList.add("active");
})

born.addEventListener("click", ()=> {
    displayProphets(prophets.filter(prophet => prophet.birthplace.toLowerCase() === "utah"));
    clearButton()
    born.classList.add("active");
})

function clearButton() {
    filterbuttons = document.querySelectorAll("button");
    filterbuttons.forEach(button => button.className = "");
}





