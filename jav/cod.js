document.getElementById("menu_button").addEventListener("click",function() {
    let menu_icone= document.getElementById("menuIcon")
     menu_icone.classList.contains("bi-list")
     ?(menu_icone.classList.remove("bi-list"), menu_icone.classList.add("bi-x"))
     :(menu_icone.classList.add("bi-list"),menu_icone.classList.remove("bi-x"))
})
document.addEventListener("click",function(event) {
    let nav= document.getElementById("navbarNav")
    let menu_icone= document.getElementById("menuIcon")

    if (!nav.contains(event.target) && !menu_icone.contains(event.terget)) {
        if (nav.classList.contains("show")) {
            nav.classList.remove("show")
            menu_icone.classList.remove("bi-x")
            menu_icone.classList.add("bi-list")
        }
    }
})