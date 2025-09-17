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

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

function menuAction(id) {
  showToast(`Вы выбрали пункт ${id}`);
}
