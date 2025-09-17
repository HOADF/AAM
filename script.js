const menuIcon = document.getElementById("menuIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

menuIcon.addEventListener("click", () => {
  dropdownMenu.style.display = dropdownMenu.style.display === "flex" ? "none" : "flex";
});

document.addEventListener("click", (e) => {
  if (!menuIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.style.display = "none";
  }
});

function menuAction(id) {
  alert(`Вы выбрали пункт ${id}`);
}
