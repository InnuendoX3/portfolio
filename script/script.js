$(document).ready(function () {
   $("#portfolio-sec").hide();
   $("#contact-sec").hide();

   // Navbar - links
   $("#me-link").click(function () {
      $("#this-is-me-sec").show();
      $("#portfolio-sec, #contact-sec").hide();
      $(this).addClass("active");
      $("#portfolio-link, #contact-link").removeClass("active");

   });

   $("#portfolio-link").click(function () {
      $("#portfolio-sec").show();
      $("#this-is-me-sec, #contact-sec").hide();
      $(this).addClass("active");
      $("#me-link, #contact-link").removeClass("active");
   });

   $("#contact-link").click(function () {
      $("#contact-sec").show();
      $("#this-is-me-sec, #portfolio-sec").hide();
      $(this).addClass("active");
      $("#me-link, #portfolio-link").removeClass("active");
   });


   /* Languages */

   //eventlistener
   
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

   let jsonFile = getJSON("http://www.mocky.io/v2/5dcdde1b2e0000670072a0af");
   let jsonEnglish = jsonFile.english;
   let jsonSwedish = jsonFile.swedish;
   let jsonSpanish = jsonFile.spanish;

   $("#n-english").click(function(){renderTranslation(jsonEnglish)});
   $("#n-swedish").click(function(){renderTranslation(jsonSwedish)});
   $("#n-spanish").click(function(){renderTranslation(jsonSpanish)});

   renderTranslation(jsonSwedish);

   function renderTranslation(language) {
      let index = 0;
      $.each(language, function(key, value) {
         $(elementsToTranslate[index]).text(value);
         index++;
      });      
   }


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



