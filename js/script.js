// First cat
var cat1 = {
    "name" : "Pedrito",
    "id" : "cat1",
    "image" : "images/cat1.jpg"
}

cat1.display = function() {
    var formattedName = HTMLCatName.replace("%cat-name%", cat1.name);
    var formattedImage = HTMLCatImage.replace("%cat-id%", cat1.id);
    formattedImage = formattedImage.replace("%cat-image%", cat1.image);
    var formattedClickCounter = HTMLCatClickCounter.replace("%cat-id%", cat1.id);

    $('#cats-info').append(formattedName);
    $('#cats-info').append(formattedImage);
    $('#cats-info').append(formattedClickCounter);
}

cat1.display();

var counter1 = 0;
$('#cat1-image').click(function(){
   counter1 = counter1 + 1;
   $('#cat1-click-counter').html("Count: " + counter1);
});

var counter2 = 0;
$('#cat2-image').click(function(){
   counter2 = counter2 + 1;
   $('#cat2-click-counter').html("Count: " + counter2);
});
