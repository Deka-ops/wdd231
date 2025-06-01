const dir = "data/memberships.json";
const showInfo = document.querySelector("#show-info");
const membershipCard = document.querySelector("#membership");
const closeButton = document.querySelector("#show-info button");
const title = document.querySelector("#show-info h2");
const benefits = document.querySelector("#show-info p");
const description = document.querySelector("#show-info h3");


closeButton.addEventListener("click", ()=>{showInfo.close()});

async function getMembershipsData(){
    const response = await fetch(dir);
    const data = await response.json();
    displayMemberships(data.memberships);
    
}

const displayMemberships = (memberships) =>{
    memberships.forEach(membership => {
        let card = document.createElement("section");
        let membershipTitle = document.createElement("h2");
        // let benefits = document.createElement("h4");
        let cost = document.createElement("h4");
        // console.log(membership);
        membershipTitle.textContent = `${membership.name}`;
        // benefits.textContent = `Benefits:${membership.benefits}`;
        cost.textContent = `Cost: $${membership.fees}/mo `;
        card.appendChild(membershipTitle);
        card.addEventListener("click", () => {displayInfo(membership)});
        
        // card.appendChild(benefits);
        card.appendChild(cost);
        
        membershipCard.appendChild(card);
    });
}

getMembershipsData();

function displayInfo(membership){
    
    // console.log(membership.name);
    title.innerHTML = membership.name;
    description.innerHTML = membership.description;
    benefits.innerHTML = `<h4>Benefits:</h4>${membership.benefits}`;
    showInfo.showModal();
    
}

