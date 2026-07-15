document.addEventListener("DOMContentLoaded", () => {
    console.log("¡GreenNova anuncios cargado correctamente! 🌱");

    // --- LÓGICA DEL CAMBIO DE IDIOMA ---
    const btnLang = document.getElementById("btn-lang");
    let currentLang = "es"; // Idioma por defecto

    if (btnLang) {
        btnLang.addEventListener("click", () => {
            // Alternamos el idioma actual
            currentLang = currentLang === "es" ? "en" : "es";

            // Cambiamos el texto visual del botón
            btnLang.textContent = currentLang === "es" ? "🌐 EN" : "🌐 ES";

            // Buscamos todos los elementos que tengan traducciones disponibles
            const translatableElements = document.querySelectorAll("[data-es]");

            translatableElements.forEach(element => {
                if (currentLang === "en") {
                    // Si el elemento es el párrafo del enlace, debemos mantener el tag <a> estructural
                    if (element.classList.contains("box-desc") && element.querySelector("a")) {
                        element.innerHTML = 'Access the game through this <a href="#">link</a>.';
                    } else {
                        element.textContent = element.getAttribute("data-en");
                    }
                } else {
                    // Volvemos al español
                    if (element.classList.contains("box-desc") && element.querySelector("a")) {
                        element.innerHTML = 'Accese al juego mediante este <a href="#">enlace</a>.';
                    } else {
                        element.textContent = element.getAttribute("data-es");
                    }
                }
            });
        });
    }
});