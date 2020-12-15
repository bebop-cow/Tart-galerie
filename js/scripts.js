


 $(document).ready(function() {
   $('#icon').on('click', function() {
     $('#icon').toggleClass('active');

     var text = $('#orientation-text').text();
     $("#orientation-text").text(
       text == "Portait" ? "Landscape" : "Portait");

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
       ctx.drawImage(images[i], 21, 20, 87, 104);

       // Add frame
       ctx.drawImage(document.getElementById('frame'), 0, 0);
     }
   }
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

 $(document).ready(function(){
  

            $("#download-button").on('click', function() { 
                html2canvas(document.getElementById("download"),{allowTaint: true,
useCORS: true}).then(function (canvas) {
       document.body.appendChild(canvas);
    }); 
            });

 })
