function dropdownToggle() {
  user = document.querySelector(".user__group");
  dropdown = document.querySelector(".dropdown");
  arrow = document.querySelector(".arrow");
  user.addEventListener("click", () => {
    dropdown.classList.toggle("active");
    arrow.classList.toggle("active");
  });
  document.addEventListener("click", (e) => {
    console.log(e.target);
    console.log(!e.target.classList.contains("drop"));
    console.log(!e.target.classList.contains("user__group"));
    if (!e.target.classList.contains("drop")) {
      dropdown.classList.remove("active");
      arrow.classList.remove("active");
    }
  });
}
dropdownToggle();
