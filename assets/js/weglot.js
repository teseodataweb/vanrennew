document.addEventListener("DOMContentLoaded", function () {

    function initWeglotWhenReady() {
      if (typeof Weglot === 'undefined') {
        console.warn('Weglot not ready, retrying...');
        setTimeout(initWeglotWhenReady, 100);
        return;
      }
      try {
        Weglot.init({
          api_key: "wg_f618157c2837653c3b79e24fe1a42ba70",
          lang: "es",
          default_lang: "es"
        });
        console.log("Weglot initialized");
      } catch (e) {
        console.error("Weglot init error:", e);
      }

      const flags = document.querySelectorAll(".country-flag");

      flags.forEach((flag) => {
        flag.addEventListener("click", () => {
          const lang = flag.getAttribute("data-lang");
          console.log("Switching to language:", lang);
          translateSite(lang);
        });
      });

      function translateSite(lang) {
        try {
          Weglot.translate(lang);
          console.log("Weglot.translate called with:", lang);
        } catch (e) {
          console.error("Weglot.translate error:", e);
        }
      }
    }

    initWeglotWhenReady();
  });