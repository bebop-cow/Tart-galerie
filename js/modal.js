let x = 0;
let y = 0;

  $(document).ready(function() {
    $('#icon').on('click', function() {
      $('#icon').toggleClass('active');

      var text = $('#orientation-text').text();
      $("#orientation-text").text(
        text == "Portait" ? "Landscape" : "Portait");

      if (text !== "Landscape") {
        $("#box-container").css("flex-direction", "row");
        x = 150;
        y = 0;
        
        
      } else {
        $("#box-container").css("flex-direction", "column");
        x = 0;
        y = 150;
        return x, y;
      }


    });
  });
  console.log(x,y);
  
  function merge() {
	var canvas = document.getElementById('myCanvas'),
			ctx = canvas.getContext('2d'),
      imageObj1 = new Image(),
      imageObj2 = new Image();

      imageObj1.src = $('#image2').attr('src');
      imageObj1.onload = function() {
        ctx.drawImage(imageObj1, 0, 0, 150, 150);
        
      imageObj2.src = $('#image3').attr('src');
      imageObj2.onload = function() {
      ctx.drawImage(imageObj2, x, y, 150, 150);
      var img = canvas.toDataURL('image/jpeg');
      $('.merged-image').attr('src', img);
      $('.merged-image').removeClass('hidden');
    }
  };
}




  $(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

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
        }, 800, function() {

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  


