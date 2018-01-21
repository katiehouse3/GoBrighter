$(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors:['home1','coaching2', 'teambuilding3', 'survey4', 'workshop5','about6'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['home','coaching', 'teambuilding', 'survey', 'workshop','about'],
    showActiveTooltip: true,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',

    //Design
    controlArrows: true,
    verticalCentered: true,
    sectionsColor : [],
    paddingTop: 0,
    paddingBottom: 0,
    fixedElements: '#1, .footer',
    responsiveWidth: 1100,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //events
    onLeave: function(index, nextIndex, direction){
        //after leaving section 2
        if(index == 1 && direction =='down'){
            $('#menu').fadeOut(800);
        }

        if(index == 2 && direction =='up'){
            $('#menu').fadeOut(800);
        }
    },
    afterLoad: function(anchorLink, index){
        var loadedSection = $(this);
        if(index == 1){
            $('#menu-home').hide();

            if (screen.width > 500) {
                $('.menu-image').fadeIn();
                $('#menu').css({top:300}); 
            }
            else{
                $('#menu').css({top:70});
            }

            $('#menu').fadeIn(800);
        }

        if(index != 1){
            $('#menu-home').show();
            $('.menu-image').hide();
            $('#menu').css({top:0});
            $('#menu').fadeIn(800);
        }
    },
    afterRender: function(){ },
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });
});



