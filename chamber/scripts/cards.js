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