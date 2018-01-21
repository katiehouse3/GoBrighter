
$(document).ready(function() {

           var element = document.getElementById("menu");
           var nav = document.getElementById("nav-button");

            $('#nav-button').on('touchstart click', function(e) {    
            e.preventDefault(); //prevent default behavior

            if(e.type == "touchstart") {
               $(element).toggleClass("hidden-phone null");
                $(nav).toggleClass("change null");
            } 

            else if(e.type == "click") {
                $(element).toggleClass("hidden-phone null");
                $(nav).toggleClass("change null");
            }
            });


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

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#1, #2',
    scrollOverflow: false,
    scrollOverflowReset: true,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    sectionsColor : [],
    paddingTop: 0,
    paddingBottom: 0,
    fixedElements: '#nav-button, .footer',
    responsiveWidth: 700,
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
                $('#menu').css({top:550}); 
            }
            else{
                $('#menu').css({top:10});
            }

            $('#menu').fadeIn(800);
        }

        if(index != 1){
            $('#menu-home').show();
            $('.menu-image').hide();
            $('#menu').css({top:10});
            $('#menu').fadeIn(800);
        }
    },
    afterRender: function(){ },
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });
});



