jQuery.noConflict();
jQuery(document).ready(function($){
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        // gutter: 10
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

var options = {
    target: '#chart_div',
    debug: false,
    width: 600,
    height: 600,
    callbacks: {
      /*
        Callbacks should only be overwritten on a need to basis.
        See the section about callbacks below.
      */
    },
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    nodeWidth: 100,
    styles: {
      node: 'node',
      linage: 'linage',
      marriage: 'marriage',
      text: 'nodeText'
    }
};

var data = [{
    name: "Ton-That Niem",                         // The name of the node
    class: "man",                          // The CSS class of the node
    textClass: "nodeText",                  // The CSS class of the text in the node
    depthOffset: 1,                         // Generational height offset
    marriages: [{                           // Marriages is a list of nodes
      spouse: {                             // Each marriage has one spouse
        name: "Nguyen Thi Nguyet",
        class: "woman"
      },
      children: [
        {
            name: "Dang Que Phuong",
            class: "woman",
            marriages: [
                {
                    spouse: {
                        name: "Vo Dinh Huu",
                        class: "man"
                    },
                    children: [
                        {
                            name: "Vo Hoa An",
                            class: "woman"
                        },
                        {
                            name: "Vo Bao An",
                            class: "woman"
                        }
                    ]
                },
                {
                    spouse: {
                        name: "Dang Thuy",
                        class: "man"
                    },
                    children: [
                        {
                            name: "Dang Minh Ha",
                            class: "woman"
                        },
                        {
                            name: "Dang Minh Cong",
                            class: "man"
                        },
                        {
                            name: "Dang Minh Kien",
                            class: "man"
                        }
                    ]
                }
            ]
        },
        {
            name: "Ton-That Chau",
            class: "man",
            marriages: [
                {
                    spouse: {
                        name: "Marta",
                        class: "woman"
                    },
                    children: [
                        {
                            name: "Ton-That Daniel",
                            class: "man"
                        }
                    ]
                }
            ]
        },
        {
            name: "Ton-That Huan",
            class: "man",
            marriages: [
                {
                    spouse: {
                        name: "Nguyen Thuy",
                        class: "woman"
                    },
                    children: [
                        {
                            name: "Ton Elise",
                            class: "woman"
                        },
                        {
                            name: "Ton Anjolie",
                            class: "woman"
                        }
                    ]
                }
            ]
        },
        {
            name: "Ton-That Tuan",
            class: "man",
            marriages: [
                {
                    spouse: {
                        name: "Doan Vy",
                        class: "woman"
                    },
                    children: [
                        {
                            name: "Ton Emma",
                            class: "woman"
                        },
                        {
                            name: "Ton Sophie",
                            class: "woman"
                        }
                    ]
                }
            ]
        }
    ]
    }],
    extra: {}                               // Custom data passed to renderers
}];

dTree.init(data, options);