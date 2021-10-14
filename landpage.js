    const menupie = document.getElementsByClassName(".menupie")[0]
    const hiddenmenu = document.getElementsByClassName(".hiddenmenu")[0]
    
    menupie.addEventListener("click", () => {
        hiddenMenu.classList.toggle("hiddenmenu-active");
    });





// let menu = document.querySelector("#menu-icon");
// let ulTop = document.querySelector(".ul-top");
// let remove = document.querySelector(".remove")


// let show = false;
// function popUp() {
//     console.log(true)
//   if (show) {
//     // remove.style.display = "block"
//     ulTop.style.display = "none";
//     show= false
//   } else {
//     ulTop.style.display = "block";
//     // remove.style.display = "none"
//     show = true
//   }
// }
// menu.addEventListener("click", popUp);