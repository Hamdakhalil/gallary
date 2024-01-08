$(document).ready(function() {
    // Add click event listener to each thumbnail
    $('.thumbnail').click(function() {
        // Get the data-image attribute value
        var largeImagePath = $(this).data('image');
        var dataIndex = $(this).index() + 1;

        // Change the source of the corresponding large image with a fadeIn effect
        $('.large-image[data-index="' + dataIndex + '"]').attr('src', largeImagePath).fadeIn();
    });
});

