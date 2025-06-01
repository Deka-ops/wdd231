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
    let numCards = 0;
    let index_array=[];
    
    while(numCards < parseInt(numberOfSpotlights)){
    
        let index = Math.random() * 7;
        let arrayElement = parseInt(index);
        let card = document.createElement("section");
        let companyName = document.createElement("h2");
        let address = document.createElement("h4");
        let phoneNumber = document.createElement("h4");
        let url = document.createElement("h4");
        let logo = document.createElement("img");
        
        if(!index_array.includes(parseInt(index))){
            index_array.push(parseInt(index));
            if(members[arrayElement].level != 1){
                if(name != members[arrayElement].name){
                
                    companyName.textContent = `${members[arrayElement].name}`;
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
                
                    numCards++;   
              
                }
            }
        } 
        
    }
    
}

getMembersData();