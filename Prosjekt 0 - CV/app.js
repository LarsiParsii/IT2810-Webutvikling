document.addEventListener("DOMContentLoaded", () => {
  let headers = document.querySelectorAll(".resume__entry-header--collapsible");

  const toggleCollapseAbility = () => {
    if (window.innerWidth >= 900) {
      headers.forEach((header) => {
        header.classList.remove("resume__entry-header--collapsible");
        header.classList.remove("expanded");
        header.nextElementSibling.classList.remove("resume__box--hidden");
        header.removeEventListener("click", toggleBox);
      });
    } else {
      headers.forEach((header) => {
        header.classList.add("resume__entry-header--collapsible");
        header.addEventListener("click", toggleBox);
      });
    }
  };

  const toggleBox = (event) => {
    let box = event.currentTarget.nextElementSibling;
    event.currentTarget.classList.toggle("expanded");
    box.classList.toggle("resume__box--hidden");
  };

  headers.forEach((header) => {
    header.addEventListener("click", toggleBox);
  });

  window.addEventListener("resize", toggleCollapseAbility);

  // Initial check to set up the correct state
  toggleCollapseAbility();
});
