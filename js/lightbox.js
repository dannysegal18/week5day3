$(document).ready(function() {
    // Open the lightbox when an image is clicked
    $(".image img").click(function() {
        var imageUrl = $(this).attr("src");
        $(".lightbox img").attr("src", imageUrl);
        $(".backdrop, .lightbox").fadeIn(200);
    });

    // Close the lightbox when the close button is clicked
    $(".close, .backdrop").click(function() {
        $(".backdrop, .lightbox").fadeOut(200);
    });

    // Close the lightbox when the escape key is pressed
    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            $(".backdrop, .lightbox").fadeOut(200);
        }
    });
});