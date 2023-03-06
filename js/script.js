const alModal = document.querySelector(".modal");
const alModalClos = document
.querySelector(".js-modal-clos");

if (alModalClos) {
  alModalClos.addEventListener("click", function () {
    alModal.classList.remove("modal-open");
  });
}
