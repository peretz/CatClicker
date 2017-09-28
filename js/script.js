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
    },
    {
        "name" : "Luis",
        "id" : "cat3",
        "image" : "images/cat3.jpg",
        "counter" : 0
    },
    {
        "name" : "Mario",
        "id" : "cat4",
        "image" : "images/cat4.jpg",
        "counter" : 0
    },
    {
        "name" : "Chuchito",
        "id" : "cat5",
        "image" : "images/cat5.jpg",
        "counter" : 0
    },
    {
        "name" : "Kevin",
        "id" : "cat6",
        "image" : "images/cat6.jpg",
        "counter" : 0
    }
]

var displayCat = function(cat) {
    var formattedName = HTMLCatName.replace("%cat-name%", cat.name);
    var formattedImage = HTMLCatImage.replace("%cat-id%", cat.id);
    formattedImage = formattedImage.replace("%cat-image%", cat.image);
    var formattedClickCounter = HTMLCatClickCounter.replace("%cat-id%", cat.id);

    // Add HTML code
    $('#cat-info').append(formattedName);
    $('#cat-info').append(formattedImage);
    $('#cat-info').append(formattedClickCounter);

    // Add Click counter.
    $('#' + cat.id + '-image').click(function(){
       cat.counter = cat.counter + 1;
       $('#' + cat.id + '-click-counter').html("Count: " + cat.counter);
    });
}

// Display cats.
for (var i = 0; i < cats.length; i++) {
    displayCat(cats[i]);
}
