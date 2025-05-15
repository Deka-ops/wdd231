// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const courseButtons = document.querySelectorAll(".course-btn");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      courseButtons.forEach(course => {
        // Show all if 'all' is selected
        if (filter === "all") {
          course.style.display = "inline-block";
        } else {
          // Show only matching course type
          if (course.classList.contains(filter)) {
            course.style.display = "inline-block";
          } else {
            course.style.display = "none";
          }
        }
      });
    });
  });
});