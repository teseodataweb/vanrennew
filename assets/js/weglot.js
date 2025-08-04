const flags = document.querySelectorAll(".country-flag");

flags.forEach((flag) => {
  flag.addEventListener("click", () => {
    const lang = flag.getAttribute("data-lang");
    // Llama a la función de traducción con el idioma seleccionado
    translateSite(lang);
  });
});

function translateSite(lang) {
  // Utiliza Weglot para traducir el sitio web
  Weglot.translate(lang);
  // Otra opción es utilizar una biblioteca de traducción como Google Translate
  // google.translate.Translate(lang, 'es', 'en');
}

Weglot.init({
  api_key: "",
  lang: "es",
  default_lang: "es",
  url_pattern: "/:lang",
});

const usaFlag = document.querySelector('.country-flag[data-lang="en"]');
usaFlag.addEventListener("click", () => {
  Weglot.translate("en");
});
