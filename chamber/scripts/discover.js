// Visitor message logic
const visitorMessage = document.querySelector(".visitor-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysPassed = Math.floor((now - Number(lastVisit)) / msPerDay);
  if (daysPassed < 1) {
    visitorMessage.textContent = "Back so soon! Awesome!";
  } else {
    visitorMessage.textContent = `You last visited ${daysPassed} day${daysPassed === 1 ? "" : "s"} ago.`;
  }
}

localStorage.setItem("lastVisit", now);

// Load and display places from JSON
const gridContainer = document.querySelector(".places-grid");
import {places} from "../data/places.mjs"
fetch("data/places.json")
  .then((response) => {
    if (!response.ok) throw new Error("Failed to load JSON");
    return response.json();
  })
  .then((data) => {
    data.forEach((place) => {
      const card = document.createElement("section");
      card.classList.add("place-card");

      const title = document.createElement("h2");
      title.textContent = place.name;

      const figure = document.createElement("figure");
      const img = document.createElement("img");
      img.src = place.image;
      img.alt = place.name;
      img.loading = "lazy";
      figure.appendChild(img);

      const address = document.createElement("address");
      address.textContent = place.address;

      const desc = document.createElement("p");
      desc.textContent = place.description;

      const button = document.createElement("button");
      button.textContent = "Learn More";

      card.append(title, figure, address, desc, button);
      gridContainer.appendChild(card);
    });
  })
  .catch((err) => {
    console.error("Error loading places:", err);
    gridContainer.innerHTML = `<p class="error">Unable to load locations. Please try again later.</p>`;
  });

  import {places} from "../data/places.mjs"

const message = document.querySelector("#message");
const description = document.querySelector("#message p");
const closeButton = document.querySelector("#message button");
const title = document.querySelector("#message h2");

closeButton.addEventListener("click", () => {message.close()});

const displayPlaces = (places) =>{
    places.forEach(place => {
        
        let card = document.createElement("figure");
        let name = document.createElement("h2");
        let address = document.createElement("address");
        let cost = document.createElement("p");
        let photo = document.createElement("img");
        let learnMore = document.createElement("input");
        
        name.textContent = `${place.name}`;
        address.textContent = `Find us at: ${place.address}`;
        cost.textContent = `Cost: ${place.cost}`;
        cost.setAttribute("id","cost");
        photo.setAttribute("src", place.image);
        photo.setAttribute("alt", `${place.name}`);
        photo.setAttribute("loading", "lazy");
        learnMore.setAttribute("type", "submit");
        learnMore.setAttribute("value", "Learn More");
        learnMore.setAttribute("id", "learn");

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(cost);
        card.appendChild(photo); 
        card.appendChild(learnMore);      
        
        learnMore.addEventListener("click", () => {modalDescription(place)});

        document.querySelector("#cards").appendChild(card);
    });
}

displayPlaces(places);

function modalDescription(place){
    
    title.innerHTML = place.name;
    description.innerHTML = place.description;
    message.showModal();
    
}

//Footer copyright and last modified information
const ElmtYear = document.querySelector("#current-year");
const ElmtLastModified = document.querySelector("#last-modified");
const currentYear = new Date();
const lastModified = document.querySelector("#last-modified");
const date = new Date(document.lastModified);
let year = currentYear.getFullYear();
const spanElmt = document.createElement("span");

document.querySelector('#current-year').innerHTML = '&COPY;' +  year + ' Medicine Hat Chamber Of Commerce';
document.querySelector('#last-modified').innerHTML = date;
ElmtYear.appendChild(spanElmt);
ElmtLastModified.appendChild(spanElmt);   


const directory = "data/members.json";
const cards = document.querySelector("#cards");

async function getMembersData(){
    const response = await fetch(directory);
    const data = await response.json();
    displayMembers(data.members);
    
}

const displayMembers = (members) =>{
    members.forEach(member => {
        let card = document.createElement("section");
        let companyName = document.createElement("h2");
        let address = document.createElement("h4");
        let phoneNumber = document.createElement("h4");
        let url = document.createElement("h4");
        let logo = document.createElement("img");
        

        companyName.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phoneNumber.textContent = `Phone: ${member.phone}`;
        url.textContent = `Website: ${member.url}`;
        logo.setAttribute("src", member.image);
        logo.setAttribute("alt", `${member.name}`);
        logo.setAttribute("loading", "lazy");

        card.appendChild(companyName);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(url);

        document.querySelector("#cards").appendChild(card);
    });
}

getMembersData();