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

   function infinite() {

      $.each(learning, function(key, value) {
         setTimeout(writeList, key * 1000);
         
         function writeList() {
            $("#learning div img").removeClass("hooover");
            $("#learning-here").text(value).hide().fadeIn("slow");
            $("#log-" + key).addClass("hooover");
         }
         console.log("#log-" + key);
         console.log(learning.length);
         console.log(key);
         if (key == learning.length - 1) {
            setTimeout(infinite, (key + 1) * 1000);
         }
        
      });

   }

   infinite();

});



