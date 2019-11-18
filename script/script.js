$(document).ready(function () {
   $("#portfolio-sec").hide();
   $("#contact-sec").hide();

   /* ===== NAVBAR LINKS ===== */
   
   $("#me-link").click(function () {
      $("#this-is-me-sec, #bg-picture").show();
      $("#portfolio-sec, #contact-sec").hide();
      $(this).addClass("active");
      $("#portfolio-link, #contact-link").removeClass("active");

   });

   $("#portfolio-link").click(function () {
      $("#portfolio-sec").show();
      $("#this-is-me-sec, #contact-sec, #bg-picture").hide();
      $(this).addClass("active");
      $("#me-link, #contact-link").removeClass("active");
   });

   $("#contact-link").click(function () {
      $("#contact-sec").show();
      $("#this-is-me-sec, #portfolio-sec, #bg-picture").hide();
      $(this).addClass("active");
      $("#me-link, #portfolio-link").removeClass("active");
   });

   


   /* ===== LANGUAGE ===== */

   let elementsToTranslate = [
      "#n-me",
      "#n-port",
      "#n-cont",
      "#navbarDropdown",
      // Info - language
      "#i-key-name",
      "#i-key-last",
      "#i-key-occu",
      "#i-val-occu",
      "#i-key-cour",
      "#i-val-cour",
      "#i-key-at",
      "#i-key-star",
      "#i-val-star",
      "#i-key-lear",
      // Portfolio - language
      "#p-card1-tex",
      "#p-card2-tex",
      "#portfolio-sec .btn",
      // Contact - language
      "#c-name",
      "#c-email",
      "#c-mess",
      "#contact-sec button"
   ];

   //let jsonFile = getJSON("http://www.mocky.io/v2/5dcdde1b2e0000670072a0af");
   let jsonFile = getJSON("script/languages.json");
   let jsonEnglish = jsonFile.english;
   let jsonSwedish = jsonFile.swedish;
   let jsonSpanish = jsonFile.spanish;

   $("#n-english").click(function(){controlLanguage("English")});
   $("#n-swedish").click(function(){controlLanguage("Swedish")});
   $("#n-spanish").click(function(){controlLanguage("Spanish")});


   readLocalStorage();

   /* Control language on logalStorage. If none set English as default */
   function readLocalStorage() {
      let readed = localStorage.getItem("language");
      if(readed == null) {
         readed = "English"; // First time - Default
         console.log("No había nada en LocalStorage");
      }
      controlLanguage(readed);
   }

   /* Write (string) on LocalStorage // Send (object) to render */
   function controlLanguage(langString) {
      localStorage.setItem("language", langString);
      renderTranslation(eval("json"+langString));
   }

   /* Take an json language object to render on page */
   function renderTranslation(jsonLanguage) {
      let index = 0;
      $.each(jsonLanguage, function(key, value) {
         $(elementsToTranslate[index]).text(value);
         index++;
      });
   }


   /* ===== Effects ===== */

   let learning = [
      "HTML",
      "CSS",
      "JavaScript",
      "JQuery",
      "Git",
      "GitHub",
      "Bootstrap",
      "Sass",
      "JSON"
   ];

   // Do effects on each learning item (zoom // show name) Infinite loop.
   function infinite() {
      $.each(learning, function (index, value) {
         setTimeout(writeList, index * 1000);
         function writeList() {
            $("#learning div img").removeClass("hooover");
            $("#learning-here").text(value).hide().fadeIn("slow");
            $("#log-" + index).addClass("hooover");
         }
         if (index == learning.length - 1) {
            setTimeout(infinite, (index + 1) * 1000);
         }
      });
   }
   infinite();

});



