document.addEventListener('DOMContentLoaded', () => {
    // Alternador de idioma
    const btnLang = document.getElementById('btn-lang');
    let currentLang = 'es';

    btnLang.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        btnLang.textContent = currentLang === 'es' ? '🌐 EN' : '🌐 ES';

        const elementsToTranslate = document.querySelectorAll('[data-es][data-en]');

        elementsToTranslate.forEach(element => {
            const translation = element.getAttribute(`data-${currentLang}`);
            if (translation) {
                element.innerHTML = translation;
            }
        });
    });
});