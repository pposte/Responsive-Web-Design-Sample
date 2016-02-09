/**
 * Created by prateekposte on 2/8/16.
 */
$(document).ready(function() {

// Make the “Back to top” link scroll to the top.
    $("#back-to-top").click(function(e) {
        $('html, body').animate({
            scrollTop: $(".main-story").offset().top
        }, 400);

    });

    //Add a function so when a “Less Important Story” module is clicked it disappears and shows another new version of the module, only 3 “Less Important Story” modules should appear to the user at once.


    var newStories = ["New Story which is less important will be shown here after disappearing the clicked story. "];

    $(".sub-stories").on("click", ".sub-story", function() {
        var $clone = $(this).clone();
        var parent = $(this).parent();
        //Remove this particular node
        $(this).remove();
        $clone.find("p").text(newStories[Math.round(Math.random() * newStories.length)]);
        $clone.appendTo(parent);
    })

});