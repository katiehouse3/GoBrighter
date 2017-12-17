
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

$(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors:['Home', 'Coaching', 'Teams', 'Workshops', 'Consulting','CLOGuide', 'About'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'Coaching', 'Teams', 'Workshops', 'Consulting','CLO Guide', 'About'],
    showActiveTooltip: false,
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
    normalScrollElements: '#element1, .element2',
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
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 600,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){
         $('#menu').hide();
    },
    afterLoad: function(anchor, index){
        if(index == 1){
             $('#menu').fadeOut(800);
        }else{
             $('#menu').fadeIn(800);   
        }
      },
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });
});


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
$(window).on("load", function() {
    $( ".lght1" ).fadeOut("slow", 
        function() { $(this).delay(400).fadeIn("fast", 
            function() { $(this).fadeOut(200,
                function() { $(this).delay(100).fadeIn("fast"); }); });  });

    $( ".lght2" ).fadeOut("slow", 
        function() { $(this).delay(400).fadeIn("fast", 
            function() { $(this).fadeOut(400,
                function() { $(this).delay(100).fadeIn("fast"); }); });  });

   $( ".lght3" ).fadeOut("slow", 
        function() { $(this).delay(400).fadeIn("fast", 
            function() { $(this).delay(20).fadeOut(600,
                function() { $(this).delay(100).fadeIn("fast"); }); });  });

   $( ".lght4" ).fadeOut("slow", 
        function() { $(this).delay(400).fadeIn("fast", 
            function() { $(this).delay(20).fadeOut(800,
                function() { $(this).delay(100).fadeIn("fast"); }); });  });

   $( ".lght5" ).fadeOut("slow", 
        function() { $(this).delay(400).fadeIn("fast", 
            function() { $(this).delay(20).fadeOut(1000,
                function() { $(this).delay(100).fadeIn("fast"); }); });  });

   $( ".lght6" ).fadeOut("slow", 
        function() { $(this).delay(400).fadeIn("fast", 
            function() { $(this).delay(20).fadeOut(1200,
                function() { $(this).delay(100).fadeIn("fast"); }); });  });

});




//Light 1
$(".L1").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
  $(this).removeClass("swingimage")  
})

$(".L1").hover(function(){
  $(this).addClass("swingimage");        
})

//Light2
$(".L2").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
  $(this).removeClass("swingimage")  
})

$(".L2").hover(function(){
  $(this).addClass("swingimage");        
})

//Light3
$(".L3").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
  $(this).removeClass("swingimage")  
})

$(".L3").hover(function(){
  $(this).addClass("swingimage");        
})

//Light 4
$(".L4").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
  $(this).removeClass("swingimage")  
})

$(".L4").hover(function(){
  $(this).addClass("swingimage");        
})

//Light5
$(".L5").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
  $(this).removeClass("swingimage")  
})

$(".L5").hover(function(){
  $(this).addClass("swingimage");        
})

//Light6
$(".L6").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
  $(this).removeClass("swingimage")  
})

$(".L6").hover(function(){
  $(this).addClass("swingimage");        
})


