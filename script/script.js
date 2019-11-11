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

});


