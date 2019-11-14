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

   let jsonFile = getJSON("http://www.mocky.io/v2/5dcdde1b2e0000670072a0af");
   console.log(jsonFile.english.iname);
   //console.log(jsonFile.english.i_at);
   // navbar - language
   $("#n-me").text(jsonFile.english.n_me);
   $("#n-port").text(jsonFile.english.n_portfolio);
   $("#n-cont").text(jsonFile.english.n_contact);
   $("#navbarDropdown").text(jsonFile.english.n_dropdown);
   // Info - language
   $("#i-key-name").text(jsonFile.spanish.i_key_name);
   $("#i-key-last").text(jsonFile.spanish.i_key_last);
   $("#i-key-occu").text(jsonFile.swedish.i_key_occupation);
   $("#i-val-occu").text(jsonFile.swedish.i_val_occupation);
   $("#i-key-cour").text(jsonFile.english.i_key_course);
   $("#i-val-cour").text(jsonFile.english.i_val_course);
   $("#i-key-at").text(jsonFile.english.i_key_at);
   $("#i-key-star").text(jsonFile.english.i_key_start);
   $("#i-val-star").text(jsonFile.english.i_val_start);
   $("#i-key-lear").text(jsonFile.english.i_key_learning);
   // Portfolio - language
   $("#p-card1-tex").text(jsonFile.english.p_card1_text);
   $("#p-card2-tex").text(jsonFile.english.p_card2_text);
   $("#portfolio-sec .btn").text(jsonFile.english.p_button);
   // Contact - language
   $("#c-name").text(jsonFile.english.c_name);
   $("#c-email").text(jsonFile.english.c_email);
   $("#c-mess").text(jsonFile.english.c_message);
   $("#contact-sec button").text(jsonFile.english.c_button);


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



