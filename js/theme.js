let themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeBtn.textContent = "Light mode";
}

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "Light mode";
    } else {
        localStorage.setItem("theme", "light");
        themeBtn.textContent = "Dark mode";
    }
});
