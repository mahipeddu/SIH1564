document.getElementById("profile-photo").addEventListener("click", function() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    if (dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.remove("show");
    } else {
        dropdownMenu.classList.add("show");
    }
});
