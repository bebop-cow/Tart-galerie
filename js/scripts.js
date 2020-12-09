 $(document).ready(function() {
   $('#icon').on('click', function() {
     $('#icon').toggleClass('active');

   });
 });

$(document).ready(function () {
  $('.image').click(function () {
    var id = ( $(this).attr('id'));
    $("#"+id).toggleClass( "blue" );   
         });
      });
