//Image selection
$(document).ready(function() {
  let selected = [];
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
      $("#btn").show();
       $("#" + id).toggleClass("blue");
    } else {
      $("#" + id).toggleClass("blue"); //Adds the appearance of being selected
      $("#btn").hide(); //keeps the modal button hidden
    }

  });
});

//Modal 

//Orientation Filter
 $(document).ready(function() {
   $('#icon').on('click', function() {
     $('#icon').toggleClass('active');
     $('#download').css("display","block")

     var text = $('#orientation-text').text();
     $("#orientation-text").text(
       text == "Potrait" ? "Landscape" : "Potrait");

     if (text !== "Landscape") {
       $("#box-container").css("flex-direction", "row");
       $("#myTable-Landscape").css("display", "inline");
       $("#myTable").css({"height":"400px", "width":"","margin-left": "","margin-right": "" });
       $("#myTable-Potrait").css("display", "none");
       

     } else {
       $("#box-container").css("flex-direction", "column");
       $("#myTable-Potrait").css("display", "inline");
       $("#myTable").css({"height":"600px", "width":"300px","margin-left": "auto","margin-right": "auto" });
       
       $("#myTable-Landscape").css("display", "none");

     }
   });
 });

//Draw Function
function draw() {

  var mytable = document.getElementById('myTable');
  var images = mytable.getElementsByTagName('img');


  // Loop through all images
  for (var i = 0; i < images.length; i++) {

    /* console.log(images.length);
    console.log($(".imgGallery").length); */

    // Don't add a canvas for the frame image
    if (document.images[i].getAttribute('id') != 'frame') {

      // Create canvas element
      var canvas = document.createElement('canvas');
      canvas.setAttribute('width', 132);
      canvas.setAttribute('height', 150);

      // Insert before the image
      images[i].parentNode.insertBefore(canvas, images[i]);

      var ctx = canvas.getContext('2d');

      // Draw image to canvas
      ctx.drawImage(images[i], 21, 20, 104, 104);

      // Add frame
      ctx.drawImage(document.getElementById('frame'), 0, 0);
    }
  }
}


