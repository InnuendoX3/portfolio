$(document).ready(function() {
   $("#portfolio-sec").hide();
   $("#contact-sec").hide();

   // Navbar - links
   $("#me-link").click(function(){
      $("#this-is-me-sec").show();
      $("#portfolio-sec, #contact-sec").hide();
      $(this).addClass("active");
      $("#portfolio-link, #contact-link").removeClass("active");

   });

   $("#portfolio-link").click(function(){
      $("#portfolio-sec").show();
      $("#this-is-me-sec, #contact-sec").hide();
      $(this).addClass("active");
      $("#me-link, #contact-link").removeClass("active");
   });

   $("#contact-link").click(function(){
      $("#contact-sec").show();
      $("#this-is-me-sec, #portfolio-sec").hide();
      $(this).addClass("active");
      $("#me-link, #portfolio-link").removeClass("active");
   });


   /* Languages */

   let jsonFile = getJSON("http://www.mocky.io/v2/5dcd99512e00005600729fbb");
   console.log(jsonFile.english.iname);
   //console.log(jsonFile.english.i_at);
   $("#i-key-name").text(jsonFile.english.iname);


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
      $.each(learning, function(key, value) {
         setTimeout(writeList, key * 1000);         
         function writeList() {
            $("#learning div img").removeClass("hooover");
            $("#learning-here").text(value).hide().fadeIn("slow");
            $("#log-" + key).addClass("hooover");
         }
         if (key == learning.length - 1) {
            setTimeout(infinite, (key + 1) * 1000);
         }        
      });
   }
   infinite();

});



