document.addEventListener("DOMContentLoaded", () => {
    console.log("¡Salva la Ciudad listo! 🌱");

    const btnLang = document.getElementById("btn-lang");
    let currentLang = "es";

    if (btnLang) {
        btnLang.addEventListener("click", () => {
            // Alternamos idioma
            currentLang = currentLang === "es" ? "en" : "es";

            // Cambiar texto del botón
            btnLang.textContent = currentLang === "es" ? "🌐 EN" : "🌐 ES";

            // Buscar todos los elementos traducibles
            const translatableElements = document.querySelectorAll("[data-es]");

            translatableElements.forEach(element => {
                const textToTranslate = element.getAttribute(`data-${currentLang}`);
                if (textToTranslate) {
                    element.textContent = textToTranslate;
                }
            });
        });
    }
});