let menupie = document.querySelector(".menupie");
let hide = document.querySelector(".hide");

let show = false;
function popUp() {
  console.log(true);
  if (show) {
    hide.style.display = "none";
    show = false
  } else {
      hide.style.display = "block";
      show = true
  }
}
menupie.addEventListener("click", popUp);
