//Global Variable
let selected = [];



$(document).ready(function() {
	$('.collapsible').each(function() {
		var tis = $(this), state = false, answer = tis.next('div').slideUp();
		tis.click(function() {
			state = !state;
			answer.slideToggle(state);
			tis.toggleClass('active',state);
		});
	});
});

$(document).ready(function(){
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
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//Image selection
$(document).ready(function() {

  $('.image').click(function() {
    var id = ($(this).attr('id')); //gets the id of the image that was clicked and passes it to the variable id

    //This handles a double click for deselection.
    const myIndex = selected.indexOf(id); //Checks the array (selected) to see if the value of id is present.
    //if true: removes the id - if false: adds the id
    myIndex > -1 ? selected.splice(myIndex, 1) : selected.push(this.id);

    //if the array is more than two, the modal button to make the wallpaper will appear and the last element added to the array is removed to it stays at length = 2

    if (selected.length > 2) {
      console.log("array full, deselect an image to add a seperate one")
      selected.pop(this.id);
    } else if (selected.length == 2) {
      $("#MakeWallpaper-button").addClass('MakeWallpaper-ready');
      $("#" + id).toggleClass("blue");
      document.querySelector('#MakeWallpaper-button').scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      $("#" + id).toggleClass("blue"); //Adds the appearance of being selected
      $("#MakeWallpaper-button").removeClass('MakeWallpaper-ready'); //keeps the button hidden
      $("#orientation").hide();
      $("#download").hide();

    }

    $('#MakeWallpaper-button').click(function() {

      let firstImageSelected = $("#" + selected[0]).attr('src');
      let secondImageSelected = $("#" + selected[1]).attr('src');

      $('.td1-Image').attr("src", firstImageSelected);

      $('.td2-Image').attr("src", secondImageSelected);

      $(".td1").css("display", "");
      $(".td2").css("display", "");

      $("#orientation").show();

    });

  });
});



//Orientation
$(document).ready(function() {
  $('#icon').on('click', function() {
    $('#icon').toggleClass('active');
    $('#download').show();

    var text = $('#orientation-text').text();
    $("#orientation-text").text(
      text == "Potrait" ? "Landscape" : "Potrait");

    if (text !== "Landscape") {
      $("#myTable-Landscape").css("display", "inline");
      $("#myTable-Potrait").css("display", "none");
      $("#myTable").css({
        "height": "600px",
        "transition": "width 3s, height 3s",
        "width": "1000px	",
        "margin-left": "",
        "margin-right": ""
      });



    } else {
      $("#myTable-Potrait").css("display", "inline");
      $("#myTable-Landscape").css("display", "none");
      $("#myTable").css({
        "height": "800px",
        "transition": "width 3s, height 3s",
        "width": "500px",
        "margin-left": "",
        "margin-right": ""
      });

    };
  });
});


$(document).ready(function() {
  $("#foo").click(function() {
    var convertMeToImg = $('#myTable')[0];
    html2canvas(convertMeToImg, {
      allowTaint: true,
      useCORS: true,
      logging: false,
    }).then(function(canvas) {
      $('#preview').append(canvas);
    });
  });

});
