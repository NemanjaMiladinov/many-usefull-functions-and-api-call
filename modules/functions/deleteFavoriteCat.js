import { defaultElementPosition } from "../animation/animation.js";

const deleteItems = (element, catName) => {
  const btnsConfirm = document.querySelectorAll(".btn-confirm");
  const deleteModal = document.querySelector(".confirm-delete-modal");

  console.log("delete favorite cat");
  if (!element) {
    return;
  }

  btnsConfirm.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (e.target.textContent === "yes") {
        console.log("remove favorite element");
        console.log(element.parentElement);
        if (element.parentElement.classList.contains("remove")) {
          console.log("remove element");
          element.parentElement.remove();
          deleteModal.style.display = "none";

          // Remove catName from local storage
          let likedCats = JSON.parse(localStorage.getItem("likedCats")) || [];
          const index = likedCats.indexOf(catName);
          if (index !== -1) {
            likedCats.splice(index, 1);
            localStorage.setItem("likedCats", JSON.stringify(likedCats));
          }

          defaultElementPosition();
          return;
        }
      }
      if (e.target.textContent === "no") {
        console.log("dont remove favorite element");
        element.parentElement.classList.remove("remove");
        deleteModal.style.display = "none";
        defaultElementPosition();
        return;
      }
    });
  });
};

export { deleteItems };
