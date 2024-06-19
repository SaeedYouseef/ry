
document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');
    const defaultLang = 'en';

    translatePage(defaultLang);

    langSelect.addEventListener('change', () => {
        const selectedLang = langSelect.value;
        translatePage(selectedLang);
    });
});

async function loadTranslations(lang) {
    const response = await fetch(`../json/${lang}.json`);
    return await response.json();
}

async function translatePage(lang) {
    const translations = await loadTranslations(lang);
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[key];
    });
}
