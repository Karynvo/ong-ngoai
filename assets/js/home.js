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

    $grid.on( 'click', '.grid-item', function() {
        // change size of item via class
        $( this ).toggleClass('grid-item--gigante');
        // trigger layout
        $grid.masonry();
    });
});
