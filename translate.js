// Translation data
const translations = {
  no: {
    brand: "Steinkjer Bilformidling",
    home: "Hjem",
    cars: "Biler til salgs",
    wheels: "Aventador Wheels",
    services: "Tjenester",
    gallery: "Galleri",
    contact: "Kontakt",
    call: "Ring Oss",
    seeCars: "Se Biler",
  },
  en: {
    brand: "Steinkjer Car Brokerage",
    home: "Home",
    cars: "Cars for Sale",
    wheels: "Aventador Wheels",
    services: "Services",
    gallery: "Gallery",
    contact: "Contact",
    call: "Call Us",
    seeCars: "See Cars",
  },
};

let currentLang = "no"; // Default language = Norwegian

// Elements
const langBtn = document.getElementById("langBtn");
const langCode = document.getElementById("langCode");
const translatableElements = document.querySelectorAll("[data-lang]");

// Function to update texts
function updateLanguage(lang) {
  translatableElements.forEach((el) => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });
  langCode.textContent = lang === "no" ? "EN" : "NO"; // Show opposite option
}

// Toggle language on click
langBtn.addEventListener("click", () => {
  currentLang = currentLang === "no" ? "en" : "no";
  updateLanguage(currentLang);
});
