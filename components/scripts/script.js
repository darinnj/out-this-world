// Force the visitor to the top of the page by removing everything from the hash on with root url
window.location.replace("#");
if (typeof window.history.replaceState == 'function') {
  history.replaceState({}, '', window.location.href.slice(0, -1));
}

$(window).load(function() {
    //Preloader
    $("#intro-loader").delay(1000).fadeOut();
    $(".mask").delay(1000).fadeOut("slow");
});

$(document).ready(function(){
    /*===================================================================================*/
    /*  SIZE & RESIZE                                                                    */
    /*===================================================================================*/
    
    // Viewport sizes in pixels
    var narrow = 490;
    var xsmall = 640;
    var small  = 768;
    var medium = 990;
    var wide   = 1200;

    // Get and declare heights
    var winHeight          = $(window).height();//get height
    var winWidth           = $(window).width();//get width
    var navHeight          = $('#navWrapper').height();//get nav height
    var aboutHeight        = $('#about').height();
    var portfolioHeight    = $('#portfolio').height();
    var aboutContentHeight = $('#about .mainContent').height();

    // detect mobile
    var onMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        onMobile = true;
    }

    // Set height
    $('.fullheight').css('height', winHeight);
    $('#projects').css('height', portfolioHeight + 120);
    $('.mainContentContact').css('height', winHeight - navHeight);
    if(winHeight <= xsmall){
        $('#about').css({'min-height': aboutContentHeight + 85});
    }
    if(winWidth >= small){
        $('#about').css({'min-height': aboutContentHeight + 80});
    }


    $(window).resize(function(){
        var winHeight          = $(window).height(); //get height
		var navHeight          = $('#navWrapper').height();//get nav height
		var portfolioHeight    = $('#portfolio').height();
        var aboutContentHeight = $('#about .mainContent').height(); 
		
		$('.fullheight').css('height', winHeight);
        $('#about').css({'min-height': aboutContentHeight + 60});
		$('#projects').css({'height': portfolioHeight + 100});
        $('.mainContentContact').css('height', winHeight - navHeight);

        // Hide main saucer when height is short
        if(winHeight < 300){
            $('#spaceCraft-1').css({'display': 'none'});
        } //winHeight
		
	}); //on resize


    /*===================================================================================*/
    /*  NAVIGATION                                                                       */
    /*===================================================================================*/
	//$('.navbar ul li a span').hide();
    var $navWrapper = $('#navWrapper')
    var $navUL      = $('nav ul');
    var $navLi      = $('nav ul li')
    var liActive    = $navLi.hasClass('active');
    
    // deactivate nav link
    $navLi.click(function(){
        $navLi.each(function(index){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        });

        $(this).addClass('active');

    });

    // xsmall responsive navigation
    if(winWidth <= xsmall){
        $('.navController').click(function(e){
            var navExpanded = $navUL.hasClass('expanded');
            colapseExpand(navExpanded);
            e.preventDefault();
            
        });

        var colapseExpand = function(navExpanded){
             if(navExpanded === false){
                $navUL.addClass('expanded');
                $navUL.animate({right: '0px'}, 'slow', 'easeOutQuart');
            } else {
                $navUL.removeClass('expanded');
                $navUL.animate({right: '-105px'}, 500, 'easeOutCirc');
            }
        };        

        $navUL.mouseleave(function(){
            colapseExpand();
        });
        $navUL.click(function(){
            colapseExpand();
        });

    } //if winWidth xsmall

     // easy scroll
    $('.navbar ul li').click(function(){
        var navLink     = $(this).index();

        switch(navLink){
            case 0: 
                $('html, body').animate({
                    scrollTop: $("#about").offset().top
                }, 1000);
                break;

            case 1:
                 $('html, body').animate({
                    scrollTop: $("#projects").offset().top
                }, 1000);
                break;

            case 2:
                $('html, body').animate({
                    scrollTop: $("#contact").offset().top
                }, 1000);
                break;
            default: console('Missing object index');
        } 
    });

    //On window scroll
    $(window).scroll(function(){
        var windowpos       = $(window).scrollTop()+navHeight;
        var scrollBarPos    = $(window).scrollTop();

        $('nav .navbar ul li').removeClass('active');

        if ( windowpos > $('#about').offset().top) {
            $('nav .navbar ul li').removeClass('active');
            $('li.linkLi1').addClass('active');
        }

        if ( windowpos > $('#projects').offset().top) {
            $('nav .navbar ul li').removeClass('active');
            $('li.linkLi2').addClass('active');
        }

        if ( windowpos > $('#contact').offset().top) {
            $('nav .navbar ul li').removeClass('active'); 
            $('.linkLi3').addClass('active');
        }

        if (scrollBarPos >= 1){
            $navWrapper.css({'border-top': 'solid 2px #30a6de'});

        } else {

            if (winWidth <= xsmall){
                $navWrapper.slideDown(function(){
                    $(this).css({'border-top': 'solid 5px #30a6de'});
                });

            } else {
                $navWrapper.slideDown(function(){
                    $(this).css({'border-top': 'solid 10px #30a6de'});
                });
            }
                
        }
    });

    $('.brand a').click(function(){
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 1000);
    });

    var navBar_in = function(){
        var navIcons   = $('#navWrapper .navbar ul li i');
        var navText   = $('#navWrapper .navbar ul li span');
        
        $('#navWrapper .navbar ul').slideDown(1500);

        // setTimeout(function(){
        //     navIcons.addClass('blueHighlight');
        //     navText.addClass('blueHighlight');
        // }, 1000);
        // setTimeout(function(){
        //     navIcons.toggleClass('blueHighlight');
        //     navText.toggleClass('blueHighlight');
        // }, 2500)

        setTimeout(function(){
            navIcons.addClass('whiteHighlight');
            navText.addClass('whiteHighlight');
        }, 1000);
        setTimeout(function(){
            navIcons.removeClass('whiteHighlight');
            navText.removeClass('whiteHighlight');
        }, 2500)

    } //naBar_in


    /*===================================================================================*/
    /*  WELCOME SCENE                                                                    */
    /*===================================================================================*/
    var spaceCraft1 = document.getElementById('spaceCraft-1');
    var spaceCraft2 = document.getElementById('spaceCraft-2');
    var spaceCraft3 = document.getElementById('spaceCraft-3');

    var welcomeMsg = function(){
        window.setTimeout(function(){
            $(".first, .top, .bottom, .third").cooltext({
                sequence:[
                    {action:"animation", 
                     animation:"cool56",
                     onComplete: welcomeMsgBottom}
                ]
            }); 
        }, 1500);
    } //welcomeMsg

    var welcomeMsgBottom = function(){
        $('.mainMsgBottom').cooltext({
           sequence:[
                {visibility: 'visible',
                 action: 'animation', 
                 animation:"cool16",
                 onComplete: nameBrand_in
                }

           ]
        });
    } //welcomeMsgBottom

    var nameBrand_in = function(){
       $(".nameBrand").cooltext({
           sequence:[
                {visibility: 'visible',
                 action: 'animation', 
                 animation: 'cool117',
                 onComplete: navBar_in
                }
           ]
        });
        $('.nameBrand, .me').cooltext({
           sequence:[
                {visibility: 'visible',
                 action:'animation', 
                 animation:'cool16'
                }
           ]
        });
    } //nameBrand_in

    var spaceCraft2_controller = function(){

        var blinkArrow = function(){
            window.setInterval(function(){
               $('i', spaceCraft2).fadeIn().delay(1500).fadeOut(); 
            }, 2000);
        }

        window.setTimeout(function(){
            blinkArrow();
        }, 1000);

        $(spaceCraft2).hover(function(){
            $('i', this).fadeIn();
        }, function(){
            $('i', this).fadeOut();
        }).css({'cursor': 'pointer'});

        $(spaceCraft2).click(function(){
            $('html, body').animate({
                scrollTop: $("#about").offset().top
            }, 1000);
        });

        $(spaceCraft2).click(function(){
             $('i', this).css({display: 'none'});
        });

    } //spaceCraft2_Welcome


    /*===================================================================================*/
    /*  ABOUT SCENE                                                                      */
    /*===================================================================================*/

    $('#backTop').click(function(){
        $('html, body').animate({
            scrollTop: $("#wrapper").offset().top
        }, 1000);
    });

    var bars_in = function() {
         $('.skillBar li').each(function() {
            $(this).animate({
                opacity: 1,
                left: "0px"
            }, 3500);
            var b = $(this).find("span").attr("data-width");
            $(this).find("span").animate({
                width: b + "%"
            }, 3200)
        });
    }

    var experience_in = function(){
        var i = 0;
        
        var liActive = $('#job ul li').hasClass('bgActive');

        if (!liActive) {
            var loop = setInterval(function() {
                if(i === 5){
                    i = 0;
                }
                $('#job ul li:eq('+i+')').siblings().removeClass('opaDarkBlack40-bg');
                $('#job ul li:eq('+i+')').addClass('opaDarkBlack40-bg');
                i++;
            }, 2000);
        };

        // Date hover
        $('#dates ul li').hover(function(){
            var i = $(this).index();

            $('#job ul li:eq('+i+')').toggleClass('opaDarkBlack40-bg');
            $('#timelinePoints ul li:eq('+i+')').toggleClass('outterGlow');
            $(this).toggleClass('outterGlow');
        });

        // Job hover
        $('#job ul li').hover(function(){
            var i = $(this).index();

            $(this).toggleClass('opaDarkBlack40-bg');
            $('#timelinePoints ul li:eq('+i+')').toggleClass('outterGlow');
            $('#dates ul li:eq('+i+')').toggleClass('outterGlow');
            clearInterval(loop);
        });

        // job click
         $('#job ul li').click(function(){
            var i = $(this).index();

            $(this).siblings().removeClass('bgActive');
            $(this).siblings().removeClass('opaDarkBlack40-bg');
            $(this).addClass('bgActive');
            clearInterval(loop);
         });

        // job and dates click
        $('#dates ul li, #job ul li').click(function(){
            var i = $(this).index();
            
            $('#experienceTerminal ul li').hide()
            $('#experienceTerminal ul li:eq('+i+')').show();
            $('#experienceTerminal ul li:eq('+i+') span').cooltext({
               sequence:[
                    {display: 'block',
                     action: 'animation', 
                     animation:"cool38",
                     speed: '1000'
                    }

               ]
            });

            $('#timelinePoints ul li:eq('+i+')').siblings().removeClass('outterGlow');
            $('#timelinePoints ul li:eq('+i+')').toggleClass('outterGlow');

            $('#job ul li:eq('+i+')').siblings().removeClass('bgActive');
            $('#job ul li:eq('+i+')').addClass('bgActive');
        });

    } //experience_in

    $('.resumeBtn').on('click',function(e){
        e.preventDefault();
        //window.location.href = '/files/DannyRivera_Resume_SrWebDeveloper_2015-WEB-VER.doc';
        window.open(['https://docs.google.com/document/d/1qjz7fyWniyMTYhIelm6mNUBH1i8Vdb4-yX5nn3JYTOE/edit?usp=sharing'], '_blank');
    })

    $('.resumeBtn').on('mouseover',function(e){
       $(this).css({'background-color':' rgba(0, 0, 0, 1)'});
    }).on('mouseout', function(){
        $(this).css({'background-color':' rgba(0, 0, 0, 0.7)'});
    });
                
	/*===================================================================================*/
    /*  ANIMATIONS                                                                       */
    /*===================================================================================*/

    //ScrollMagic initialize
    var controller = new ScrollMagic({
            globalSceneOptions: {
                //triggerHook: 'onLeave',
                loglevel: 1
            }       
        });

    //Pin section titles
    var screenMinusNav  = winHeight - navHeight;

    var yPosWelcome     = $('.welcomeTop').offset().top;
    var yPosAbout       = $('.aboutTop').offset().top - navHeight - 50;
    var yPosProjects    = $('.projectsTop').offset().top - yPosAbout - 220;
    var yPosContact     = $('.contactTop').offset().top - yPosProjects;
    //console.log(yPosAbout + " " + yPosProjects + " " + yPosContact);

    var ss_navBarDrop = new ScrollScene({
            triggerElement: '.welcomeTop',
            triggerHook: 'onLeave'
        }).addTo(controller)
            .setTween(TweenMax.from(navWrapper, 0.7, { height: 0, ease:Power2.easeIn }));

    if(!onMobile){
        var ss_spaceCraft1 = new ScrollScene({
                triggerElement: '.welcomeTop',
                triggerHook: 'onLeave'
            }).addTo(controller)
                .setTween(TweenMax.fromTo(spaceCraft1, 1, 
                    { visibility: 'visible', opacity: 0, width: '0em', height: '0em', bottom: '-5em', left: '10%' }, 
                        { opacity: 1, width:'10em', height:'3em', left: '50%', bottom: '20%', ease:Elastic.easeIn }).delay(5));

        var ss_spaceCraft1 = new ScrollScene({
                triggerElement: '.welcomeTop',
                triggerHook: 'onLeave'
            }).addTo(controller)
                .setTween(TweenMax.to(spaceCraft1, 1, 
                    { visibility: 'hidden', opacity: 0, ease:Linear.easeOut }).delay(7));
    } else {
        var ss_spaceCraft1 = new ScrollScene({
                triggerElement: '.welcomeTop',
                triggerHook: 'onLeave'
            }).addTo(controller)
                .setTween(TweenMax.to(spaceCraft1, 1, 
                    { visibility: 'hidden', opacity: 0, ease:Linear.easeOut }));
    } // onMobile

    if (winWidth <= xsmall){
        var ss_spaceCraft2 = new ScrollScene({
            triggerElement: '.welcomeTop',
            triggerHook: 'onLeave'
        }).addTo(controller)
            .setTween(TweenMax.fromTo(spaceCraft2, 1,
                { opacity: 0, width: '7em', height: '2em', left: '50%', bottom: '20%'},  
                    { visibility: 'visible', opacity: 1, width:'11em', height:'3em', left: '50%', bottom: '20%', ease:Linear.easeIn, onComplete: spaceCraft2_controller }).delay(7));
    } else {
        var ss_spaceCraft2 = new ScrollScene({
            triggerElement: '.welcomeTop',
            triggerHook: 'onLeave'
        }).addTo(controller)
            .setTween(TweenMax.fromTo(spaceCraft2, 1,
                { opacity: 0, width: '11em', height: '3em', left: '50%', bottom: '20%'},  
                    { visibility: 'visible', opacity: 1, width:'15em', height:'4em', left: '50%', bottom: '20%', ease:Linear.easeIn, onComplete: spaceCraft2_controller }).delay(7));
    }

    var ss_spaceCraft2a = new ScrollScene({
                triggerElement: '.welcomeTop',
                triggerHook: 'onLeave',
                offset: 100
            }).addTo(controller)
                .setTween(TweenMax.fromTo(spaceCraft2, 1, 
                    { visibility: 'visible'},
                        { bottom: '-1em', opacity: '0', width:'4', height:'1', ease:Elastic.easeIn }));

    var ss_spaceCraft3 = new ScrollScene({
                triggerElement: 'footer',
                triggerHook: 'onEnter',
                offset: 0,
                duration: 100
            }).addTo(controller)
                .setTween(TweenMax.fromTo(spaceCraft3, 1, 
                    { visibility: 'hidden', opacity: 1, top: '20%', right: '-175px', width:'10em', height:'3em', zIndex: '1', ease:Elastic.easeIn },
                        { visibility: 'visible', opacity: 1, top: '5%',  right: '3000px', width:'7em', height:'2em', ease:Elastic.easeIn }).delay(1));

    var ss_welcomeMsg_enter = new ScrollScene({
            triggerElement: '.welcomeTop',
            triggerHook: 'onLeave'
        }).addTo(controller)
            .setTween(welcomeMsg);

    var ss_pinAbout = new ScrollScene({
            triggerElement: '.aboutTop',
            triggerHook: 'onLeave',
            duration: yPosAbout
        }).addTo(controller)
            .setPin('#about .sceneHeader .sceneTitle');

    var ss_pinTitle = new ScrollScene({
            triggerElement: '.projectsTop',
            triggerHook: 'onLeave',
            duration: yPosProjects
        }).addTo(controller)
            .setPin('#projects .sceneHeader .sceneTitle');

    var ss_pinContact = new ScrollScene({
            triggerElement: '.contactTop',
            triggerHook: 'onLeave'
        }).addTo(controller)
            .setPin('#contact .sceneHeader .sceneTitle');
            //.setTween(navActive);

    var ss_welcomeSection = new ScrollScene({
            triggerElement: '.aboutTop',
            triggerHook: 'onEnter',
            offset: 50
        }).addTo(controller)
            .setTween(TweenMax.to("#welcome", 1, {opacity: 0, top: '15em', ease: Linear.easeNone}));

        var ss_aboutSection = new ScrollScene({
                triggerElement: '.aboutTop',
                triggerHook: 'onEnter',
                offset: 300
            }).addTo(controller)
                .setTween(TweenMax.from("#backTop", 1, {opacity: 0, ease: Linear.easeNone}));

    if(!onMobile){
        var ss_aboutSection = new ScrollScene({
                triggerElement: '.aboutTop',
                triggerHook: 'onEnter',
                offset: 300
            }).addTo(controller)
                .setTween(TweenMax.from("#about", 1, {opacity: 0, ease: Linear.easeNone}));

        var ss_aboutSection = new ScrollScene({
                triggerElement: '.aboutTop',
                triggerHook: 'onEnter',
                offset: 450
            }).addTo(controller)
                .setTween(TweenMax.from("#about > .mainContent > .row1 > article#competencies", 1, {position: 'relative', left: '-800px', ease: Linear.easeNone}));

        var ss_aboutSection = new ScrollScene({
                triggerElement: '.aboutTop',
                triggerHook: 'onEnter',
                offset: 450
            }).addTo(controller)
                .setTween(TweenMax.from("#about > .mainContent > .row1 > article#skills", 1, {position: 'relative', right: '-800px', ease: Linear.easeNone}));

        var ss_aboutSection = new ScrollScene({
                triggerElement: '.aboutTop',
                triggerHook: 'onEnter',
                offset: 450
            }).addTo(controller)
                .setTween(TweenMax.from("#about > .mainContent > .row2 > article", 1, {bottom: '-450px', ease: Linear.easeNone}));

        var ss_aboutSection = new ScrollScene({
                triggerElement: '.aboutTop',
                triggerHook: 'onEnter',
                offset: 450
            }).addTo(controller)
                .setTween(TweenMax.from("#about section h1", 1, {opacity: 0, ease: Linear.easeNone}));

        var ss_aboutSection = new ScrollScene({
                triggerElement: '.aboutTop',
                triggerHook: 'onEnter',
                offset: 450
            }).addTo(controller)
                .setTween(TweenMax.from("#job", 1, {onComplete: experience_in}).delay(3));
    } //!onMobile

    var ss_aboutSection = new ScrollScene({
            triggerElement: '.projectsTop',
            triggerHook: 'onEnter',
            offset: 250
        }).addTo(controller)
            .setTween(TweenMax.to("#about", 1, {opacity: 0, ease: Linear.easeNone}));

    var ss_aboutSection = new ScrollScene({
            triggerElement: '.projectsTop',
            triggerHook: 'onEnter',
            offset: 200
        }).addTo(controller)
            .setTween(TweenMax.to('#about .mainContent .row2', 1, {bottom: '200px', opacity: '0', ease: Linear.easeNone}));

    var ss_aboutSection = new ScrollScene({
            triggerElement: '.projectsTop',
            triggerHook: 'onEnter',
            offset: 150
        }).addTo(controller)
            .setTween(TweenMax.to("#about > .mainContent > .row1 > article#competencies", 1, {position: 'relative', left: '-800px', bottom: '200px', ease: Linear.easeNone}));

    var ss_aboutSection = new ScrollScene({
            triggerElement: '.projectsTop',
            triggerHook: 'onEnter',
            offset: 150
        }).addTo(controller)
            .setTween(TweenMax.to("#about > .mainContent > .row1 > article#skills", 1, {position: 'relative', right: '-800px', bottom: '200px', ease: Linear.easeNone}));

    var ss_aboutSection = new ScrollScene({
            triggerElement: '.aboutTop',
            triggerHook: 'onEnter',
            offset: 10
        }).addTo(controller)
            .setTween(TweenMax.to("#about", 1, {onComplete: bars_in}).delay(0.5));

    var ss_aboutSection = new ScrollScene({
            triggerElement: '.projectsTop',
            triggerHook: 'onEnter',
            offset: 250
        }).addTo(controller)
            .setTween(TweenMax.to("#portfolio-items", 1, {opacity: 1, right: '0px', ease: Linear.easeNone}));

    if(!onMobile){
        var ss_projectSection = new ScrollScene({
                triggerElement: '.projectsTop',
                triggerHook: 'onEnter',
                offset: 150
            }).addTo(controller)
                .setTween(TweenMax.from("#portfolio", 1, {position: 'relative', opacity: 0, zIndex: '-1', bottom: '200px', ease: Linear.easeNone}));

        var ss_projectSection = new ScrollScene({
                triggerElement: '.aboutTop',
                triggerHook: 'onEnter',
                offset: 150
            }).addTo(controller)
                .setTween(TweenMax.from("#projects section h1", 1, {opacity: 0, position: 'relative', bottom: '500px', ease: Linear.easeNone}));
    } // !onMobile

    var ss_projectSection = new ScrollScene({
            triggerElement: '.contactTop',
            triggerHook: 'onEnter',
            offset: 150
        }).addTo(controller)
            .setTween(TweenMax.to("#portfolio", 1, {position: 'relative', opacity: 0, bottom: '200px', ease: Linear.easeNone}));

    if(!onMobile){
        var ss_contactSection = new ScrollScene({
                triggerElement: '.contactTop',
                triggerHook: 'onEnter',
                offset: 200
            }).addTo(controller)
                .setTween(TweenMax.from("#contact", 1, {opacity: 0, ease: Linear.easeNone}).delay(1));

        var ss_contactSection = new ScrollScene({
                triggerElement: '.contactTop',
                triggerHook: 'onEnter',
                offset: 200
            }).addTo(controller)
                .setTween(TweenMax.from("#contact section h1", 1, {opacity: 0, ease: Linear.easeNone}).delay(1));

        var ss_contactSection = new ScrollScene({
                triggerElement: '.contactTop',
                triggerHook: 'onEnter',
                offset: 200
            }).addTo(controller)
                .setTween(TweenMax.from("#formContent", 1, {position: 'relative', right: '-600px', ease: Linear.easeNone}).delay(3));

        var ss_contactSection = new ScrollScene({
                triggerElement: '.contactTop',
                triggerHook: 'onEnter',
                offset: 200
            }).addTo(controller)
                .setTween(TweenMax.from("#googleMap", 1, {position: 'relative', right: '-600px', ease: Linear.easeNone}).delay(3));
    } // !onMobile

    //On window scroll hide spaceCraft
    $(window).scroll(function(){
        var windowpos       = $(window).scrollTop()+navHeight;
        var scrollBarPos    = $(window).scrollTop();

        if (windowpos > $('.projectsTop').offset().top || windowpos > $('.contactTop').offset().top) {
            if($(spaceCraft1).css('opacity') == 1 || $(spaceCraft2).css('opacity') == 1) {
                $(spaceCraft1).hide();
                $(spaceCraft2).hide();
            }
        }
    });

    if(winHeight < 300){
        $('#spaceCraft-1').css({'display': 'none'});
    } //winHeight

	
    /*===================================================================================*/
    /*  CONTACT FORM                                                                     */
    /*===================================================================================*/
    $('#formContent').mouseover(function(){
        $(this).fadeIn(function(){
            $(this).addClass('opaDarkBlack-bg');
        });

        $('form input', this).mouseenter(function(){
            $(this).addClass('innerGlow');
        }).mouseleave(function(){
            $(this).removeClass('innerGlow');
        });

        $('form textarea', this).mouseenter(function(){
            $(this).addClass('innerGlow');
        }).mouseleave(function(){
            $(this).removeClass('innerGlow');
        });

    });

     $('#formContent').mouseout(function(){
        $(this).fadeIn(function(){
            $(this).removeClass('opaDarkBlack-bg');
        });
     });

    $('#contactFormSubmit').hover(function(){
        $(this).toggleClass('outterGlow');
    });

    $(".validate").validate();
    var form        = $('#contactform');
    var submit      = $('#contactFormSubmit');
    var alertx      = $('.form-respond');
    var formHeader  = $('.formHeader');
    // form submit event
    $(document).on('submit', '#contactform', function(e) {
        e.preventDefault(); // prevent default form submit
        // sending ajax request through jQuery
        $.ajax({
            url: 'php/sendemail.php',
            type: 'POST',
            dataType: 'html',
            data: form.serialize(),
            beforeSend: function() {
                alertx.fadeOut();
                formHeader.css({'visibility' :  'hidden'});
                form.after('<img class="imgLoaderForm" src="images/icons/loader-bars.gif">'); 
                form.hide();
                //submit.html('Sending....'); // change submit button text
            },
            success: function(data) {
                form.fadeOut(300);
                $('.imgLoaderForm').fadeOut(300);
                alertx.html(data).fadeIn(1000); // fade in response data    
                // setTimeout(function() {
                //     alertx.html(data).fadeOut(300);
                //     $('#name, #email, #message').val('')
                //     form.fadeIn(1800);
                // }, 4000);
            },
            error: function(e) {
                console.log(e)
            }
        });
    });

	/*===================================================================================*/
    /*  GOOGLE MAPS                                                                      */
    /*===================================================================================*/
	function initMap() {
        var myLatLng = new google.maps.LatLng(40.816963,-73.904572);
        var mapCanvas = document.getElementById('googleMap');
        var mapOptions = {
          center: myLatLng,
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hi!'
        });
    }
    google.maps.event.addDomListener(window, 'load', initMap);

    /*===================================================================================*/
    /*  PORTFOLIO                                                                        */
    /*===================================================================================*/
    var portfolio = portfolio || {},
        $portfolioItems = $('#portfolio-items'),
        $filtrable = $('#portfolio-filter');

    //portfolio full screen description
    portfolio.fullWidth = function() {
        $(window).load(function() {
            $portfolioItems.isotope({
                animationEngine: 'best-available',
                animationOptions: {
                    duration: 250,
                    easing: 'easeInOutSine',
                    queue: false
                }
            });
        });
    }; 

    //Portfolio ajax init
    portfolio.ajax = function() {
        function portfolioInit() {
            var newHash = "",
                $mainContent = $("#portfolio-ajax"),
                $pageWrap = $("#portfolio-wrap"),
                root = '#!projects/',
                rootLength = root.length,
                url;
            $portfolioItems.find("a").click(function() {
                window.location.hash = $(this).attr("href");
                return false;
            });
            $(window).bind('hashchange', function() {
                newHash = window.location.hash;
                url = newHash.replace(/[#\!]/g, '');
                if (newHash.substr(0, rootLength) == root) {
                    if ($pageWrap.is(':hidden')) {
                        $pageWrap.slideDown('3000', function() {});
                    }
                    $pageWrap.niceScroll({
                        cursorcolor: "#666",
                        cursorwidth: 6,
                        cursorborder: 0,
                        cursorborderradius: 0,
                        touchbehavior: true,
                        bouncescroll: true
                    });
                    $pageWrap.append('<div id="preloader"></div>');
                    $mainContent.load(url + " .single-portfolio", function(xhr, statusText, request) {
                        if (statusText == "success") {
                            setTimeout(function() {
                                // $(".slider_container").flexslider({
                                //     directionNav: true,
                                //     controlNav: false
                                // });
                                // $('.single-portfolio .media-container').fitVids();
                                $pageWrap.find('#preloader').remove();
                            }, 300);
                        }
                        if (statusText == "error") {
                            $mainContent.html('<div class="row pad-top pad-bottom"><div class="col-md-12 pad-top pad-bottom"><div class="alert-message error"><p>The Content cannot be loaded.</p></div></div></div>');
                            $pageWrap.find('#preloader').remove();
                        }
                        closeProject();
                        nextProject();
                        prevProject();
                    });
                    $("#portfolio-items article").removeClass("current");
                    $("#portfolio-items a").click(function(){
                        $('html, body').animate({
                            scrollTop: $("#projects").offset().top
                        }, 1000);
                        $("body").css("overflow", "hidden"); //disable scroll
                    })
                    $("#portfolio-items a[href='" + newHash + "']").parent().addClass("current");
                    var projectIndex = $('#portfolio-items').find('article.current').index();
                    var projectLength = $('#portfolio-items article').length - 1;
                    if (projectIndex == projectLength) {
                        jQuery('#next-project').addClass('disabled');
                        jQuery('#prev-project').removeClass('disabled');
                    } else if (projectIndex == 0) {
                        jQuery('#prev-project').addClass('disabled');
                        jQuery('#next-project').removeClass('disabled');
                    } else {
                        jQuery('#prev-project, #next-project').removeClass('disabled');
                    }
                } else if (newHash == '') {
                    $('#portfolio-wrap').fadeOut('100', function() {
                        $('.single-portfolio').remove();
                    });
                }
            });
            $(window).trigger('hashchange');
        }

        function closeProject() {
            $('#close-project').on('click', function() {
                $("body").css("overflow-y", "auto"); // display scrollbars
                $('#portfolio-wrap').fadeOut('100', function() {
                    $('.single-portfolio').remove();
                });
                history.pushState('', document.title, window.location.pathname);
                window.location.hash = '';
                return false;
            });
        }

        function nextProject() {
            $("#next-project").on("click", function() {
                if (window.location.href.indexOf('#undefined') > -1) {
                    $('.single-portfolio').remove();
                    window.location.hash = '!projects/liberty-travel.html';
                } else {
                    $('.single-portfolio').remove();
                    window.location.hash = $("#portfolio-items .current").next().find('a').attr("href");
                }
                return false;
            });
        }

        function prevProject() {
            $("#prev-project").on("click", function() {
                $('.single-portfolio').remove();
                window.location.hash = $("#portfolio-items .current").prev().find('a').attr("href");
                return false;
            });
        }
        if ($portfolioItems.length) {
            portfolioInit();
        }
    };
    portfolio.fullWidth();
    portfolio.ajax();
}); //on load