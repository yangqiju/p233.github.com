$(document).ready(function() {
  // get post link
  cate1 = $('.cate1');
  cate2 = $('.CSS');
  cate3 = $('.Front_end');
  cate4 = $('.Mac');
  cate5 = $('.Demo');
  cate6 = $('.Github');

  // switch
  var clickHandler = function(k) {
    return function() {
      $('.label').removeClass('selected');
      $(this).addClass('selected');

      $('.cate1').fadeOut(150);
      window['cate'+k].delay(160).fadeIn(340);

      $('#title_wrap, #post').removeClass();
      $('#title_wrap, #post').addClass('select'+k);
      $('.title').fadeOut(150);
      $('#title'+k).delay(160).fadeIn(340);
    };
  };
  for (var i = 1; i < 7; ++i) {
    $('#label' + i).click(clickHandler(i));
  }

  // ajax content effects
  function contentEffects() {
    // add color scheme to post
    var currentClass = $('#title_wrap').attr("class");
    $('#post').removeClass();
    $('#post').addClass(currentClass);

    // Open Markdown links in new window
    $('#content a').attr('target','_blank');

    // Auto wrap images with <a/> tag
    $('#content img').wrap(function(){
      return '<a class="img" target="_blank" href="' + $(this).attr('src') + '"/>';
    });

    // adjust font size
    $('#fontsize').click(function() {
      $("#content").toggleClass("largefont");
      $(this).toggleClass("return");
    });

    // fullscreen
    $('#fullscreen').click(function() {
      $(document).toggleFullScreen();
      $(this).toggleClass("return");
    });

    // smooth scrolling
    // $('a[href*=#]').click(function() {
    //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //     var $target = $(this.hash);
    //     $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
    //     if ($target.length) {
    //       var targetOffset = $target.offset().top;
    //       $('#container').animate({scrollTop: targetOffset}, 500);
    //       return false;
    //     }
    //   }
    // });

    // Disqus
    var disqus_shortname = 'p233';
    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
  }

  // ajax loading content
  // http://net.tutsplus.com/tutorials/javascript-ajax/how-to-load-in-and-animate-content-with-jquery/
  var hash = window.location.hash.substr(1);
  var href = $('.cate1, #about').each(function() {
    var href = $(this).attr('href');
    if(hash==href.substr(0,href.length-5)) {
      var toLoad = hash+'.html .ajax';
      $('.ajax').load(toLoad)
    }
  });
  $('.cate1, #about').click(function() {
    $('.cate1').removeClass('actived');
    $(this).not('#about').addClass('visited actived'); // click effects
    var toLoad = $(this).attr('href')+' .ajax';
    $('.ajax').fadeOut('fast',loadContent);
    $('#load').remove();
    $('#load').fadeIn('normal');
    window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
    function loadContent() {
      $('.ajax').load(toLoad,'',showNewContent);
    }
    function showNewContent() {
      $('.ajax').fadeIn('normal',hideLoader());
      $("#container").on("click", contentEffects).click();
    }
    function hideLoader() {
      $('#load').fadeOut('normal');
    }
    return false;
  });
});

/*
 jquery.fullscreen 1.1.4
 https://github.com/kayahr/jquery-fullscreen-plugin
 Copyright (C) 2012 Klaus Reimer <k@ailis.de>
 Licensed under the MIT license
 (See http://www.opensource.org/licenses/mit-license)
*/
function d(b){var c,a;if(!this.length)return this;c=this[0];c.ownerDocument?a=c.ownerDocument:(a=c,c=a.documentElement);if(null==b){if(!a.cancelFullScreen&&!a.webkitCancelFullScreen&&!a.mozCancelFullScreen)return null;b=!!a.fullScreen||!!a.webkitIsFullScreen||!!a.mozFullScreen;return!b?b:a.fullScreenElement||a.webkitCurrentFullScreenElement||a.mozFullScreenElement||b}b?(b=c.requestFullScreen||c.webkitRequestFullScreen||c.mozRequestFullScreen)&&b.call(c,Element.ALLOW_KEYBOARD_INPUT):(b=a.cancelFullScreen||
a.webkitCancelFullScreen||a.mozCancelFullScreen)&&b.call(a);return this}jQuery.fn.fullScreen=d;jQuery.fn.toggleFullScreen=function(){return d.call(this,!d.call(this))};var e,f,g;e=document;e.webkitCancelFullScreen?(f="webkitfullscreenchange",g="webkitfullscreenerror"):e.mozCancelFullScreen?(f="mozfullscreenchange",g="mozfullscreenerror"):(f="fullscreenchange",g="fullscreenerror");jQuery(document).bind(f,function(){jQuery(document).trigger(new jQuery.Event("fullscreenchange"))});
jQuery(document).bind(g,function(){jQuery(document).trigger(new jQuery.Event("fullscreenerror"))});
