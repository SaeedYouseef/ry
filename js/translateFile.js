document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');
    const defaultLang = 'en';

    const savedLang = localStorage.getItem('selectedLang');
    const selectedLang = savedLang || defaultLang;
    langSelect.value = selectedLang;

    translatePage(selectedLang);

    langSelect.addEventListener('change', () => {
        const newLang = langSelect.value;
        translatePage(newLang);
        localStorage.setItem('selectedLang', newLang);
    });
});

async function loadTranslations(lang) {
    const response = await fetch(`${lang}.json`);
    return await response.json();
}

async function translatePage(lang) {
    const translations = await loadTranslations(lang);
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[key];
    });
}
