var counter = 0;
$('#cat-image').click(function(){
   counter = counter + 1;
   $('#click-counter').html("Count: " + counter);
});
