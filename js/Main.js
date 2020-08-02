//Scroll Animation
$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
  //Searching for game inside table game list
  $("#searchFilter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#data tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(document).ready(function(){
  // Display list of games in the form of card 
  $.ajax({
    url: "../php/Main.php",
    type: 'GET',
    data: "Card=Yes",
    success: function (data) {
      $('#CarouselInner').html(data);
    },
  });

  $.ajax({
    // Display list of game in the form of table
    url: "../php/Main.php",
    type: 'GET',
    data: "Table=Yes",
    success: function (data) {
      $('#data').html(data);
    },
  });
});
// toggling panel to show list of game table
$("#viewGames").click(function(){
  $("#gameListPanel").slideToggle("slow");
});
