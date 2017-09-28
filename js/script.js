// First cat
var cat1 = {
    "name" : "Pedrito",
    "id" : "cat1",
    "image" : "images/cat1.jpg"
}

var cat2 = {
    "name" : "Juanito",
    "id" : "cat2",
    "image" : "images/cat2.jpg"
}

var displayCat = function(cat) {
    var formattedName = HTMLCatName.replace("%cat-name%", cat.name);
    var formattedImage = HTMLCatImage.replace("%cat-id%", cat.id);
    formattedImage = formattedImage.replace("%cat-image%", cat.image);
    var formattedClickCounter = HTMLCatClickCounter.replace("%cat-id%", cat.id);

    $('#cats-info').append(formattedName);
    $('#cats-info').append(formattedImage);
    $('#cats-info').append(formattedClickCounter);
}

displayCat(cat1);
displayCat(cat2);

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
