$(document).ready(function () {

            $('button').on('click', function () {
                 var animal = $(this).data('name');
                 var queryURL ="https://api.giphy.com/v1/gifs/search?q=&api_key=SPjAcb8MMCYRgWrsXLLvmRywhsVNA7RV";
                 
                 $.ajax({
                     url: queryURL,
                     method: 'GET'
                 })
                 .done(function(response){

                    console.log(response)

                    var results = response.data;

                    for(var i=0; i< results.length; i++){

                        var animalDiv = $('<div/>');

                        var p = $('<p/>');

                        p.text(results[i].rating);

                        var animalImage = $('<img/>');
                        
                        animalImage.addClass('anImg')

                        animalImage.attr('src', results[i].images.fixed_height.url);

                        animalImage.attr('data-still', results[i].images.fixed_height_still.url)

                        animalImage.attr('data-animate', results[i].images.fixed_height.url)

                        .attr('data-state','still');

                        animalDiv.append(p);

                        animalDiv.append(animalImage);

                        animalDiv.prependTo($('#gifs'));
                    }
                    $('anImg').on('click',function(){

                        var state = $(this).attr('data-state');
                        console.log(this);

                        if(state == 'still'){

                            $(this).attr('data-state','animate');

                        }






                    })


                 })





                })
























            })