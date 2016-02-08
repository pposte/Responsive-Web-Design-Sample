/**
 * Created by prateekposte on 2/8/16.
 */
$(document).ready(function() {

// Make the “Back to top” link scroll to the top of the “Back to Most Important Story” module and not to the top of the page.
    $("#back-to-top").click(function(e) {
        $('html, body').animate({
            scrollTop: $(".main-story").offset().top
        }, 400);

    });

    //Add a function so when a “Less Important Story” module is clicked it disappears and shows another new version of the module, only 3 “Less Important Story” modules should appear to the user at once.

    // Note that the margins are messed up
    var newStories = [ "A new story to replace the old one",
        "Another story to replace another one",
        "It's another story and we are running out of news!",
        "Ello Guvna! What a fine day 'tis!"];

    $(".sub-stories").on("click", ".sub-story", function() {
        var $clone = $(this).clone();
        var parent = $(this).parent();
        //Remove this particular node
        $(this).remove();
        $clone.find("p").text(newStories[Math.round(Math.random() * newStories.length)]);
        $clone.appendTo(parent);
    })

});