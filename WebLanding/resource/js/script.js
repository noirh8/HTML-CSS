$(document).ready(
    function() {
        // Sticky nav
        $('.about-section').waypoint(
            function(direction) {
                if(direction == "down") {
                    $('nav').addClass('sticky')
                } else {
                    $('nav').removeClass('sticky')
                }
            } , {
                offset: '600px'
            }
        )

        // Scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            event.preventDefault();
        });

        //Mobile Navigation 
        $('.mobile-nav-icon').click(
            function() {
                $('.main-nav').slideToggle(200);

                if($('.mobile-nav-icon').hasClass('fa-bars')) {
                    $('.mobile-nav-icon').addClass('fa-xmark');
                    $('.mobile-nav-icon').removeClass('fa-bars');
                } else {
                    $('.mobile-nav-icon').addClass('fa-bars');
                    $('.mobile-nav-icon').removeClass('fa-xmark');
                }
            }
        )
    }
)