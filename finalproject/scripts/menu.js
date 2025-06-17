document.addEventListener("DOMContentLoaded", () => {
  formatYear();
  setupHamburger();
  fetchMenuItems();
});

async function fetchMenuItems() {
  try {
    const response = await fetch("data/dishes.json");
    if (!response.ok) throw new Error("Failed to load menu data.");

    const data = await response.json();
    displayMenu(data);
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
}

function displayMenu(dishes) {
  const container = document.getElementById("menuContainer");
  container.innerHTML = "";

  dishes.forEach((dish) => {
    const card = document.createElement("div");
    card.className = "dish-card";
    card.innerHTML = `
      <img src="${dish.image}" alt="${dish.name}" loading="lazy" />
      <h3>${dish.name}</h3>
      <p><strong>Origin:</strong> ${dish.origin}</p>
      <p><strong>Description:</strong> ${dish.description}</p>
      <p><strong>Price:</strong> ₦${dish.price}</p>
      <button class="button more-info-btn" data-id="${dish.id}">More Info</button>
    `;
    container.appendChild(card);
  });

  // Attach event listeners to "More Info" buttons
  document.querySelectorAll(".more-info-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      const dish = dishes.find((d) => d.id == id);
      if (dish) showModal(dish);
    });
  });
}

function showModal(dish) {
  const modal = document.getElementById("dishModal");
  const content = modal.querySelector(".modal-content");

  content.innerHTML = `
    <button class="close-btn" id="closeModal">&times;</button>
    <h2>${dish.name}</h2>
    <img src="${dish.image}" alt="${dish.name}" loading="lazy" style="max-width:100%; border-radius:5px;" />
    <p><strong>Origin:</strong> ${dish.origin}</p>
    <p>${dish.description}</p>
    <p><strong>Price:</strong> ₦${dish.price}</p>
  `;

  modal.classList.remove("hidden");

  // Close when clicking the X
  const closeBtn = modal.querySelector("#closeModal");
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Close when clicking outside the modal content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  }, { once: true }); // prevent multiple listeners
}
