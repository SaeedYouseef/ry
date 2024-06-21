document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');
    const defaultLang = 'en';

    // Get saved language from localStorage or use default language
    const savedLang = localStorage.getItem('selectedLang');
    const selectedLang = savedLang || defaultLang;
    langSelect.value = selectedLang;

    // Set direction based on selected language
    if (selectedLang === 'en') {
        setDirection('ltr');
    } else {
        setDirection('rtl');
    }

    translatePage(selectedLang);

    langSelect.addEventListener('change', () => {
        const newLang = langSelect.value;
        translatePage(newLang);
        localStorage.setItem('selectedLang', newLang);

        // Update direction on language change
        if (newLang === 'en') {
            setDirection('ltr');
        } else {
            setDirection('rtl');
        }
    });
});

function setDirection(direction) {
    document.getElementById('links-nav').style.direction = direction;
    document.getElementById('about-text').style.direction = direction;
    document.getElementById('contact-form').style.direction = direction;
    document.getElementById('contact-card').style.direction = direction;
    document.getElementById('services').style.direction = direction;
}

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

    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        element.placeholder = translations[key];
    });
}
