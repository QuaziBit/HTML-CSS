$(document).ready(function(){
    $('#login').click(function(){
        

        var html = "<div class='login_element' id='login_element'>" +
                        "<div class='login_block'>" +
                            "<div class='login_header'>USER LOGIN</div>" +
                            "<div class='login_body'>" +
    
                                "<input type='text' id='user_name' class='login_box' name='user_name' placeholder='User Name'>" +
                                "<input type='text' id='user_pass' class='login_box' name='user_pass' placeholder='Password'>" +
    
                                "<div class='h_line'></div>" +
                                "<div class='search_buttons'>" +
                                    "<div id='cancel' class='cancel'>Cancel</div>" +
                                    "<div id='submit' class='submit'>Submit</div>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>";


        if ($( ".search_element" ).is(':visible')) 
        {
            $( ".search_element" ).slideUp(function() {
                $( ".search_element" ).empty();

                $( "#form_container" ).empty();
                $( "#form_container" ).append(html);
                $( ".login_element" ).hide();
                $( ".login_element" ).slideToggle();
            });            
        } 
        else if ($( ".login_element" ).is(':visible')) 
        { 
            $( ".login_element" ).slideUp(function() {
                $( "#form_container" ).empty();
            });
        }
        else if ($( ".registration_element" ).is(':visible')) 
        { 
            $( ".registration_element" ).slideUp(function() {
                $( "#form_container" ).empty();
                $( "#form_container" ).append(html);
                $( ".login_element" ).hide();
                $( ".login_element" ).slideToggle();
            });
        }
        else 
        {
            $( "#form_container" ).empty();
            $( "#form_container" ).append(html);
            $( ".login_element" ).hide();
            $( ".login_element" ).slideToggle();
        }
            
    });

});

$(document).on('click', '#cancel', function() {
    $( ".login_element" ).slideUp(function() {
        $( ".login_element" ).empty();
    });
});

$(document).on('click', '#submit', function() {
    $( ".login_element" ).slideUp(function() {
        $( ".login_element" ).empty();
    });
});