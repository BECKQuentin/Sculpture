$(function(){
    //NAVBAR
    $('.arrowUp').hide(0);
    $('nav a').on('click', function() {
        $('nav').slideUp(200);
    })
    $(window).bind('mousewheel DOMMouseScroll', function(event){
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            // scroll up
            $('nav').slideDown(200);
            $('.arrowUp').hide(200);
            //circle up            
            $('.circle1').animate({  fake: 500, fake2: 0 }, {
                step: function(now,fx) {
                  $(this).css('transform','translate('+now+'px,'+now+'px )'); 
                },
                duration:'medium'
            },'linear');
            $('.circle2').animate({  fake: 500, fake2: 0 }, {
                step: function(now,fx) {
                  $(this).css('transform','translate('+now+'px,'+now+'px )'); 
                },
                duration:'medium'
            },'linear');
            $('.circle3').animate({  fake: 500, fake2: 0 }, {
                step: function(now,fx) {
                  $(this).css('transform','translate('+now+'px,'+now+'px )'); 
                },
                duration:'medium'
            },'linear');
            $('.main_image img').animate({  fake: 500, fake2: 0 }, {
                step: function(now,fx) {
                  $(this).css('transform','translate('+now+'px,'+now+'px )'); 
                },
                duration:'medium'
            },'linear');
        }
        else {
            // scroll down            
            $('.arrowUp').show(200);
            $('nav').slideUp(200);
            // circle down
            $('.circle1').animate({  fake: 500, fake2: 160 }, {
                step: function(now,fx) {
                  $(this).css('transform','translate('+now+'px,'+now+'px )'); 
                },
                duration:'medium'
            },'linear');
            $('.circle2').animate({  fake: 500, fake2: 180 }, {
                step: function(now,fx) {
                  $(this).css('transform','translate('+now+'px,'+now+'px )'); 
                },
                duration:'medium'
            },'linear');
            $('.circle3').animate({  fake: 500, fake2: 200 }, {
                step: function(now,fx) {
                  $(this).css('transform','translate('+now+'px,'+now+'px )'); 
                },
                duration:'medium'
            },'linear');
            $('.main_image img').animate({  fake: 500, fake2: 120 }, {
                step: function(now,fx) {
                  $(this).css('transform','translate('+now+'px,'+now+'px )'); 
                },
                duration:'medium'
            },'linear');
        }        
    });
    //AROWWUP
    $('.arrowUp').on('click', function() {
        $('html, body').animate({ 
            scrollTop: '0px' 
        }, 
        1000);
        //circle up            
        $('.circle1').animate({  fake: 500, fake2: 0 }, {
            step: function(now,fx) {
              $(this).css('transform','translate('+now+'px,'+now+'px )'); 
            },
            duration:'medium'
        },'linear');
        $('.circle2').animate({  fake: 500, fake2: 0 }, {
            step: function(now,fx) {
              $(this).css('transform','translate('+now+'px,'+now+'px )'); 
            },
            duration:'medium'
        },'linear');
        $('.circle3').animate({  fake: 500, fake2: 0 }, {
            step: function(now,fx) {
              $(this).css('transform','translate('+now+'px,'+now+'px )'); 
            },
            duration:'medium'
        },'linear');
        $('.main_image img').animate({  fake: 500, fake2: 0 }, {
            step: function(now,fx) {
              $(this).css('transform','translate('+now+'px,'+now+'px )'); 
            },
            duration:'medium'
        },'linear');

    })
    //COMPETENCES
    $('.langages_stop').on('click', function() {
        $('.langages_stop i').toggleClass('fa-times').toggleClass('fa-check');        
    })

    $('.langages_stop').on('click', function() {
      if($('.langages_stop i').hasClass('fa-times')) {        
        $('.langages li').css('animation-play-state', 'running');
      }
      else if ($('.langages_stop i').hasClass('fa-check')) {
        $('.langages li').css('animation-play-state', 'paused');
      }
    })
})//Jquery