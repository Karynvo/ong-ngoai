jQuery.noConflict();
jQuery(document).ready(function($){
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    $grid.imagesLoaded().progress(function(){
        $grid.masonry();
    });

    var LuminousGallery = window.LuminousGallery;

    new LuminousGallery(
        document.querySelectorAll(".luminous-img"), 
        {
            arrowNavigation: true
        }, 
        {
            caption: function(trigger) {
                return trigger.querySelector("img").getAttribute("alt");
            }
        }
    );
});
