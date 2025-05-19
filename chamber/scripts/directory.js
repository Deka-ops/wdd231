const getCompanyGrid = document.querySelector("#comp-grid");
const getCompanyList = document.querySelector("#comp-list");


const getGridBtn = document.querySelector("#grid-btn");
const getListBtn = document.querySelector("#list-btn");

let allCompanies = [];

const url = "data/members.json"
 
async function getCompanies() {
    const response = await fetch(url); // fetch data from the url
    const data = await response.json(); // convert the data to json
    allCompanies = data.companies;

    displayGrid(allCompanies)
    displayList(allCompanies)

}
getCompanies();




// Show grid
getGridBtn.addEventListener("click", () => {
    getCompanyList.style.display = "none";
    getCompanyGrid.style.display = "grid";
});


// Build and display grid view
function displayGrid(allCompanies) {
    getCompanyGrid.innerHTML = "";
    
    allCompanies.forEach(allCompany => {
        let container = document.createElement("div");
        container.setAttribute("style", "width: 100%; height: 292px;");

        container.innerHTML = `
            <h1>${allCompany.name}</h1>
            <p>${allCompany.address}</p>
            <p>${allCompany.phoneNumbers}</p>
            <a href="${allCompany.webAddress}" target="_blank" style="color:#2a7b48;">Visit Site</a>
        `
        getCompanyGrid.appendChild(container);        
    });
}




// Show list
getListBtn.addEventListener("click", () => {    
    getCompanyGrid.style.display = "none";
    getCompanyList.style.display = "grid";
});

// Build and display list view
function displayList(allCompanies) {
    getCompanyList.innerHTML = "";
    
    allCompanies.forEach(allCompany => {

        let table = document.createElement("div");
        table.classList.add("table-list");

        table.innerHTML = `
            <div>${allCompany.name}</div>
            <div>${allCompany.address}</div>
            <div>${allCompany.phoneNumbers}</div>
            <div>${allCompany.websitesUrls}</div>
        `
        getCompanyList.appendChild(table);
        
    });
}

const gridContainer = document.querySelector("#comp-grid");
const listContainer = document.querySelector("#comp-list");

async function getMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {
  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("member-card");
    card.innerHTML = `
      <img src="images/members/${member.image}" alt="${member.name} logo">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p class="membership-level">Membership: ${["", "Member", "Silver", "Gold"][member.membership]}</p>
    `;
    gridContainer.appendChild(card);
    const listItem = card.cloneNode(true);
    listContainer.appendChild(listItem);
  });
}

getMembers();

// Toggle grid/list view
document.getElementById("grid-btn").addEventListener("click", () => {
  gridContainer.style.display = "grid";
  listContainer.style.display = "none";
});
document.getElementById("list-btn").addEventListener("click", () => {
  gridContainer.style.display = "none";
  listContainer.style.display = "block";
});
