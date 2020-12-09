 $(document).ready(function() {
   $('#icon').on('click', function() {
     $('#icon').toggleClass('active');

   });
 });

 let selected = [];

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
       $("#btn").show();
     } else {
       $("#" + id).toggleClass("blue"); //Adds the appearance of being selected
       $("#btn").hide(); //keeps the modal button hidden
     }

   });
 });
