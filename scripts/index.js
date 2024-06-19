const menu = document.querySelector(".menu")
const mainNav = document.querySelector(".main-nav")


menu.addEventListener("click", (e) => {
    console.log("main")
    mainNav.classList.toggle("vertical")
})

mainNav.addEventListener("click", (e) => {
    mainNav.classList.remove("vertical")
})