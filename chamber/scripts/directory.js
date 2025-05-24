const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbutton.addEventListener("click", () =>{
    display.classList.add("cards");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () =>{
    display.classList.add("list");
    display.classList.remove("cards");
});

//Footer copyright and last modified information
const ElmtYear = document.querySelector("#current-year");
const ElmtLastModified = document.querySelector("#last-modified");
const currentYear = new Date();
const lastModified = document.querySelector("#last-modified");
const date = new Date(document.lastModified);
let year = currentYear.getFullYear();
const spanElmt = document.createElement("span");

document.querySelector('#current-year').innerHTML = '&COPY;' +  year + ' Aba Chamber Of Commerce';
document.querySelector('#last-modified').innerHTML = date;
ElmtYear.appendChild(spanElmt);
ElmtLastModified.appendChild(spanElmt);     

const hamburgerButton = document.querySelector("#hamButton");
const navElement = document.querySelector("#animated-nav");

hamburgerButton.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
});

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
