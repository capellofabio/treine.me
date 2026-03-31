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

// Detecta click no botão: Se modo noturno ativo, desativa. Senão, ativa.
darkThemeSwitch.addEventListener("click", () => {
    darkTheme = localStorage.getItem("dark-theme")
    if (darkTheme !== "active") {
    enableDarkTheme();
} else if (darkTheme == "active") {
    disableDarkTheme();
}
})

// Se o modo noturno no localStorage estiver ativo, ativa o modo noturno por padrão ao recarregar a página.
if (darkTheme === "active") {
    enableDarkTheme();
}