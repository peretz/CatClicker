var cats = [
    {
        "name" : "Pedrito",
        "id" : "cat1",
        "image" : "images/cat1.jpg",
        "counter" : 0
    },
    {
        "name" : "Juanito",
        "id" : "cat2",
        "image" : "images/cat2.jpg",
        "counter" : 0
    }
]

var displayCat = function(cat) {
    var formattedName = HTMLCatName.replace("%cat-name%", cat.name);
    var formattedImage = HTMLCatImage.replace("%cat-id%", cat.id);
    formattedImage = formattedImage.replace("%cat-image%", cat.image);
    var formattedClickCounter = HTMLCatClickCounter.replace("%cat-id%", cat.id);

    // Add HTML code
    $('#cats-info').append(formattedName);
    $('#cats-info').append(formattedImage);
    $('#cats-info').append(formattedClickCounter);

    // Add Click counter.
    $('#' + cat.id + '-image').click(function(){
       cat.counter = cat.counter + 1;
       $('#' + cat.id + '-click-counter').html("Count: " + cat.counter);
    });
}

// Display cats.
displayCat(cats[0]);
displayCat(cats[1]);
