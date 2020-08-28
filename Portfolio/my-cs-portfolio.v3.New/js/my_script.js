// start video fragment
function start(val)
{
    // get id of a video element
    var id = $(val).attr("id");
    vid = "#" + id;
    $(vid).get(0).play();
}

// stop video fragment
function stop(val)
{
    // get id of a video element
    var id = $(val).attr("id");
    vid = "#" + id;
    $(vid).get(0).load();
}

// run this if html document completely loaded
$(document).ready(function () 
{
    // working with mouse hover a video fragment
    $(".video-fragment").hover( function () { start(this); }, function () { stop(this); } );
});