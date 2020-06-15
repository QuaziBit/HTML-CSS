$(document).ready(function(){
    $('#registration').click(function(){

        var html = "<div class='registration_element' id='registration_element'>" +
                    
                        "<div class='registration_block'>" +
                            "<div class='registration_header'>USER REGISTRATION</div>" +
                            "<div class='registration_body'>" +
                                "<input type='text' id='user_name' class='reg_box' name='user_name' placeholder='User Name'>" +
                                "<input type='text' id='user_pass' class='reg_box' name='user_pass' placeholder='Password'>" +
                                "<input type='text' id='conf_pass' class='reg_box' name='conf_pass' placeholder='Confirm Password'>" +
                                "<input type='email' id='user_email' class='reg_box' name='user_email' placeholder='Email'>" +   
                                      
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
                $( "#search_container" ).empty();

                $( "#form_container" ).empty();
                $( "#form_container" ).append(html);
                $( ".registration_element" ).hide();
                $( ".registration_element" ).slideToggle();
            });
        }    
        else if ($( ".registration_element" ).is(':visible')) 
        { 
            $( ".registration_element" ).slideUp(function() {
                $( "#form_container" ).empty();
            });
        }
        else if ($( ".login_element" ).is(':visible')) 
        { 
            $( ".login_element" ).slideUp(function() {
                $( "#form_container" ).empty();
                $( "#form_container" ).append(html);
                $( ".registration_element" ).hide();
                $( ".registration_element" ).slideToggle();
            });
        }
        else 
        {
            $( "#form_container" ).empty();
            $( "#form_container" ).append(html);
            $( ".registration_element" ).hide();
            $( ".registration_element" ).slideToggle();
        }

    });

});

$(document).on('click', '#cancel', function() {
    $( ".registration_element" ).slideUp(function() {
        $( ".registration_element" ).empty();
    });
});

$(document).on('click', '#submit', function() {
    $( ".registration_element" ).slideUp(function() {
        $( ".registration_element" ).empty();
    });
});