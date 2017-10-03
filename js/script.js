$(function(){

    var model = {
        currentCat: null,
        cats: [
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
    }

    var octopus = {
        init: function(){
            model.currentCat = model.cats[0];

            viewCat.init();
            viewListOfCats.init();
        },

        getCats: function() {
            return model.cats; 
        },

        getCurrentCat: function() {
            return model.currentCat;
        },

        setCurrentCat: function(cat) {
            model.currentCat = cat;
        },

        increaseCounter: function() {
            model.currentCat.counter++;
            viewCat.render();
        }
    }

    var viewCat = {
        init: function() {
            // Preload elements so that we don't need to be
            // loading them continuously.
            this.$catName = $('#cat-name');
            this.$catImage = $('#cat-image');
            this.$catClickCounter = $('#cat-click-counter');

            // Add click counter.
            $('#cat-image').click(function(){
                octopus.increaseCounter();
            });

            this.render();
        },
        render: function() {
            var currentCat = octopus.getCurrentCat();
            this.$catName.html("Me llamo " + currentCat.name + "!");
            this.$catImage.attr("src", currentCat.image);
            this.$catClickCounter.html("Count: " + currentCat.counter);
        }
    }

    var viewListOfCats = {

        init: function() {
            $('#cats-list').html("");

            octopus.getCats().forEach(function(cat) {
                var elem = document.createElement('li');
                elem.textContent = cat.name;
                elem.addEventListener('click', (function(localCat) {
                    return function() {
                        octopus.setCurrentCat(localCat);
                        viewCat.render();
                    };
                })(cat));

                $('#cats-list').append(elem);
            });
        }
    };

    octopus.init();
});
