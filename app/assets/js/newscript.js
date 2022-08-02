const menuButton = document.getElementById("btn-menu");
const modalBackground = document.getElementById("modal-background");
const menuModal = document.getElementById("modal-menu");

menuButton.addEventListener("click", (e) => {
  e.preventDefault();
  modalBackground.classList.remove("hide");
  menuModal.classList.remove("hide");
  menuButton.removeEventListener("click", (e) => {
    e.preventDefault();
    menuModal.classList.remove("hide");
    modalBackground.classList.remove("hide");
  });
});

modalBackground.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.classList.add("hide");
  menuModal.classList.add("hide");
  modalBackground.removeEventListener("click", (e) => {
    e.preventDefault();
    menuModal.classList.add("hide");
    e.target.classList.add("hide");
  });
});
