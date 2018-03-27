
$(document).ready(function() {

    //Hide and show navigation on nav-button click or touch
    var flag = false;
    var nav = document.getElementById("nav-button");
    var menu = document.getElementById("menu");

    $(nav).bind('touchstart click', function(){
      if (!flag) {
        flag = true;
        setTimeout(function(){ flag = false; }, 100);
        $(nav).toggleClass("change ''");
        $(menu).toggleClass("d-none d-lg-block ''");
      }
      return false
    });

//Fullpage Options
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors:['home1','coaching2', 'teambuilding3', 'survey4', 'workshop5','about6'], //section anchors
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home','Coaching', 'Team Building', 'Culture Surveys', 'Workshops','About'],
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
    },
    afterLoad: function(anchorLink, index){
        var loadedSection = $(this);
        var menu = $('#menu');

        // show images and move navbar
        if(index == 1){
            $('#menu-home').hide();

            if (screen.width > 500) {
                $('.menu-image').fadeIn();
                $(menu).fadeIn(800);
                $(menu).css({top:'60%'}); 
            }
            else{
                $(menu).css({top:70});
            }
        }

        // hide images and navbar on top
        if(index != 1){
            $('#menu-home').show();
            $('.menu-image').hide();
            $(menu).css({top:0});
            $(menu).fadeIn(800);
        }
    },
    afterRender: function(){ },
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });
});



