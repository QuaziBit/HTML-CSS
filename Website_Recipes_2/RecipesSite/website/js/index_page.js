/* Click events */
$(document).ready(function(){
    $('#sub_site_name').click(function(){
        if ($( ".search_element" ).is(':visible')) {
            $( ".search_element" ).slideUp();
        }
        if ($( ".registration_element" ).is(':visible')) 
        { 
            $( ".registration_element" ).slideUp(function() {
                $( "#form_container" ).empty();
            });
        }
        if ($( ".login_element" ).is(':visible')) 
        { 
            $( ".login_element" ).slideUp(function() {
                $( "#form_container" ).empty();
            });
        }
    });

    $('#all_recipes').click(function(){
        if ($( ".search_element" ).is(':visible')) {
            $( ".search_element" ).slideUp();
        }
        if ($( ".registration_element" ).is(':visible')) 
        { 
            $( ".registration_element" ).slideUp(function() {
                $( "#form_container" ).empty();
            });
        }
        if ($( ".login_element" ).is(':visible')) 
        { 
            $( ".login_element" ).slideUp(function() {
                $( "#form_container" ).empty();
            });
        }
    });
    $('#world_recipes').click(function(){

        var body = "<div class='drop_down_list'>" + 
                        "<label for='list'>Countries: </label>" + 
                        "<select id='drop_down_list' name='list'>" + 
                            "<option value='First Choice' selected='selected'>First Choice</option>" + 
                            "<option value='Second Choice'>Second Choice</option>" + 
                            "<option value='Third Choice'>Third Choice</option>" + 
                            "<option value='Fourth Choice'>Fourth Choice</option>" +
                        "</select>" + 
                  "</div>";


        showSearchOption("sub_world_recipes", "World Recipes", body);
    });
    $('#meal_type').click(function(){
        
        var body = "<div class='drop_down_list'>" + 
                        "<label for='list'>Meal Types: </label>" + 
                        "<select id='drop_down_list' name='list'>" + 
                            "<option value='First Choice' selected='selected'>First Choice</option>" + 
                            "<option value='Second Choice'>Second Choice</option>" + 
                            "<option value='Third Choice'>Third Choice</option>" + 
                            "<option value='Fourth Choice'>Fourth Choice</option>" +
                        "</select>" + 
                  "</div>";

        showSearchOption("sub_meal_type", "Meal Type", body);
    });
    $('#diet_health').click(function(){
        
        var body = "<div class='drop_down_list'>" + 
                        "<label for='list'>Diet and Health: </label>" + 
                        "<select id='drop_down_list' name='list'>" + 
                            "<option value='First Choice' selected='selected'>First Choice</option>" + 
                            "<option value='Second Choice'>Second Choice</option>" + 
                            "<option value='Third Choice'>Third Choice</option>" + 
                            "<option value='Fourth Choice'>Fourth Choice</option>" +
                        "</select>" + 
                  "</div>";

        showSearchOption("sub_diet_health", "Diet Health", body);
    });
    $('#seasonal').click(function(){
        
        var body = "<div class='drop_down_list'>" + 
                        "<label for='list'>Seasons: </label>" + 
                        "<select id='drop_down_list' name='list'>" + 
                            "<option value='First Choice' selected='selected'>First Choice</option>" + 
                            "<option value='Second Choice'>Second Choice</option>" + 
                            "<option value='Third Choice'>Third Choice</option>" + 
                            "<option value='Fourth Choice'>Fourth Choice</option>" +
                        "</select>" + 
                  "</div>";

        showSearchOption("sub_seasonal", "Seasonal", body);
    });
    $('#cooking_style').click(function(){
        
        var body = "<div class='drop_down_list'>" + 
                        "<label for='list'>Cooking Styles: </label>" + 
                        "<select id='drop_down_list' name='list'>" + 
                            "<option value='First Choice' selected='selected'>First Choice</option>" + 
                            "<option value='Second Choice'>Second Choice</option>" + 
                            "<option value='Third Choice'>Third Choice</option>" + 
                            "<option value='Fourth Choice'>Fourth Choice</option>" +
                        "</select>" + 
                  "</div>";

        showSearchOption("sub_cooking_style", "Cooking Style", body);
    });
    $('#popular_recipes').click(function(){
        var body = "SEARCH PROPERTIES";
        showSearchOption("sub_popular_recipes", "Popular Recipes", body);
    });
    $('#by_name').click(function(){
        var body = "<div class='search_box'>" + 
                        "<input id='recipe_search' type='text' class='recipe_search' name='recipe_search' placeholder='Enter recipe name'>" + 
                    "</div>";

        showSearchOption("sub_by_name", "By Name", body);
    });

    $('#previous_page').click(function(){
        //showSearchOption("sub_previous_page", "previous_page", "");
        loadRecipes("previous_page");
    });
    $('#next_page').click(function(){
        //showSearchOption("sub_next_page", "next_page", "");
        loadRecipes("next_page");
    });
});

function showSearchOption(id, header, body) {

    // insert this html
    var html = "<span id=" + id + " class='search_element'>" + 

                    "<div class='search_options'>" +
                        "<div class='search_options_header'>" + header + "</div>" +

                        "<div class='search_options_body'>" + 
                            
                            body + 
                            "<div class='h_line'></div>" + 
                            "<div class='search_buttons'>" + 
                                "<div id='cancel' class='cancel'>Cancel</div>" + 
                                "<div id='submit' class='submit'>Submit</div>" +
                            "</div>" + 
                        
                        "</div>" +
                    "</div>" +

                "</span>";

   // if element is visible slide-up, remove and after add new element
   if ($( ".search_element" ).is(':visible')) 
   {
        var test = $(".search_element").attr("id");
        
        if (test == id) 
        {
            $( ".search_element" ).slideUp();
        } 
        else 
        {
            $( ".search_element" ).slideUp(function() {
                $( "#search_container" ).empty();
                $( "#search_container" ).append(html);
                $( ".search_element" ).hide();
                $( ".search_element" ).slideToggle();
            });
        }

    } 
    else if ($( ".registration_element" ).is(':visible')) 
    { 
        $( ".registration_element" ).slideUp(function() {
            $( "#form_container" ).empty();

            $( "#search_container" ).empty();
            $( "#search_container" ).append(html);
            $( ".search_element" ).hide();
            $( ".search_element" ).slideToggle();
        });
    } 
    else if ($( ".login_element" ).is(':visible')) 
    { 
        $( ".login_element" ).slideUp(function() {
            $( "#form_container" ).empty();

            $( "#search_container" ).empty();
            $( "#search_container" ).append(html);
            $( ".search_element" ).hide();
            $( ".search_element" ).slideToggle();
        });
    }
    else
    {
        // if no element add new
        $( "#search_container" ).empty();
        $( "#search_container" ).append(html);
        $( ".search_element" ).hide();
        $( ".search_element" ).slideToggle();
    }
}

/*
//works on dynamically created elements
$(document).delegate('selector', 'click', function()
{
 //your code
});
*/

/* works on dynamically created elements */
$(document).on('click', '#cancel', function() {
    $( ".search_element" ).slideUp();
});

$(document).on('click', '#submit', function() {
    $( ".search_element" ).slideUp();
});

/* Load  */
function loadRecipes(id) {
    var html;
    if (id == "previous_page") {
        html = "<p>Previous page</p>";
        $( "#recipe_container" ).empty();
        $( "#recipe_container" ).append(html);
    } else if (id == "next_page") {
        html = "<p>Next page</p>";
        $( "#recipe_container" ).empty();
        $( "#recipe_container" ).append(html);
    }
}
