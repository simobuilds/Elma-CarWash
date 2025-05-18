// You can add any custom JavaScript here if needed.
// For this static page, you might not need much.
$(document).ready(function() {
    // Example: Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
