const directory = "data/members.json";
const cards = document.querySelector("#cards");
let numberOfSpotlights = Math.random() * 2 + 2;

async function getMembersData(){
    const response = await fetch(directory);
    const data = await response.json();
    displayMembers(data.members);
    
}

const displayMembers = (members) =>{
    let name = "";
    
    // console.log(parseInt(numberOfSpotlights));
    for(i=1; i<=parseInt(numberOfSpotlights); i++){
        // console.log(parseInt(numberOfSpotlights));
        let index = Math.random() * 7;
        let arrayElement = parseInt(index);
        let card = document.createElement("section");
        let companyName = document.createElement("h2");
        let address = document.createElement("h4");
        let phoneNumber = document.createElement("h4");
        let url = document.createElement("h4");
        let logo = document.createElement("img");
        // console.log('name=' + name);
        if(name != members[arrayElement].name){
        if (members[arrayElement].level == 3 || members[arrayElement].level == 2){
            companyName.textContent = `${members[arrayElement].name}`;
            // console.log(members[arrayElement].name);
            address.textContent = `${members[arrayElement].address}`;
            phoneNumber.textContent = `Phone: ${members[arrayElement].phone}`;
            url.textContent = `Website: ${members[arrayElement].url}`;
            logo.setAttribute("src", members[arrayElement].image);
            logo.setAttribute("alt", members[arrayElement].name);
            logo.setAttribute("loading", "lazy");

            card.appendChild(companyName);
            card.appendChild(logo);
            card.appendChild(address);
            card.appendChild(phoneNumber);
            card.appendChild(url);

            document.querySelector("#cards").appendChild(card);
            name = members[arrayElement].name;
            // console.log(name);
        }
    
        
    }
    }
    
}

getMembersData();