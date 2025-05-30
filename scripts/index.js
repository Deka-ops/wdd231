
const menu = document.querySelector("#menu").addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.display = "block";
});

const hideMenu = document.querySelector(".close-menu").addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.display = "none";
});


const dateObject = new Date();
const currentYear = document.querySelector("#currentYear").textContent += dateObject.getFullYear();


document.querySelector("#lastModified").textContent = 
    `Last Modified ${new Date(document.lastModified).toLocaleDateString()}`

document.getElementById("menu").addEventListener("click", function () {
    const nav = document.getElementById("animatemenu");
    nav.classList.toggle("open");
});

document.querySelector(".close-menu").addEventListener("click", function () {
    document.getElementById("animatemenu").classList.remove("open");
});

function displayCourseDetails(course) {
    CourseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">X</button>
    <h2>${course.subject}${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.tecnology.join(', ')}</p>
    `;
    courseDetails.showModal();

    closeModal.addEventListener("click", () => {
        courseDetails.close();
    })

}

courseDiv.addEventListener('click', () => {
    displayCourseDetails(course);
});