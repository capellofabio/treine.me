let darkTheme = localStorage.getItem("dark-theme")
const darkThemeSwitch = document.getElementById("dark-theme-btn");

function enableDarkTheme() {
    document.body.classList.add("dark-theme");
    localStorage.setItem("dark-theme", "active");
}

function disableDarkTheme() {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("dark-theme", null);
}

darkThemeSwitch.addEventListener("click", () => {
    darkTheme = localStorage.getItem("dark-theme")
    if (darkTheme !== "active") {
    enableDarkTheme();
} else if (darkTheme == "active") {
    disableDarkTheme();
}
})

if (darkTheme === "active") {
    enableDarkTheme();
}