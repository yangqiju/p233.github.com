$(function(){
  // Pjax
  $(document).pjax('.cate1, #about', '#pjax', { fragment: "#pjax" });
  // $(document).on("pjax:start", function(){
  //   $('#pjax').hide();
  // });
  $(document).on("pjax:end", function(){
    contentEffects();
    // $('#pjax').fadeIn('normal');
  });

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
      window['cate'+k].delay(160).fadeIn('slow');

      $('#title_wrap, #post').removeClass();
      $('#title_wrap, #post').addClass('select'+k);
      $('.title').fadeOut(150);
      $('#title'+k).delay(160).fadeIn('slow');
    };
  };
  for (var i = 1; i < 7; ++i) {
    $('#label' + i).click(clickHandler(i));
  }

  // click effects
  $('.cate1').click(function() {
    $('.cate1').removeClass("actived");
    $(this).addClass("visited actived");
  });

  contentEffects();
});

// Ajax content effects
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
  if ($('#container').hasClass('largefont')) {
    $('#fontsize').addClass('return');
  } else {
    $('#fontsize').removeClass('return');
  }
  $('#fontsize').click(function() {
    $('#container').toggleClass("largefont");
    $(this).toggleClass("return");
  });

  // fullscreen
  if ($.fullScreen("state") == 'fullscreen') {
    $('#fullscreen').addClass('return');
  } else {
    $('#fullscreen').removeClass('return');
  }
  $('#fullscreen').click(function() {
    if (!$.fullScreen()) {
      alert("Your browser does not support Full Screen API");
    } else {
      $.fullScreen("toggle");
      $(this).toggleClass("return");
    }
  });

  // Lazy loading Disqus
  // http://jsfiddle.net/dragoncrew/SHGwe/1/
  var ds_loaded = false,
      top = $("#disqus_thread").offset().top;
      identifier = $('#identifier').text();
  window.disqus_shortname = 'p233';
  window.disqus_identifier = identifier;

  function check(){
    if ( !ds_loaded && $('#container').scrollTop() + $('#container').height() > top ) {
      $.ajax({
        type: "GET",
        url: "http://" + disqus_shortname + ".disqus.com/embed.js",
        dataType: "script",
        cache: true
      });
      ds_loaded = true;
    }
  }
  $('#container').scroll(check);
  check();
}

/**
* @name jQuery Simple Fullscreen Plugin
* @author Max Schukin
* @version 1.2
* @url https://github.com/rumf/jQuery-fullscreen-plugin/
* @license MIT License
*/
;(function(e,t){function n(e){return this.i(e)}var l={enable:function(){return this.k.call(this.o),!0},disable:function(){return this.l.call(t),!0},toggle:function(){return this.m(),!0},state:function(){return this.n()?"fullscreen":"normal"}};n.prototype={i:function(e){return this.o=e,this.l=t.cancelFullScreen||t.webkitCancelFullScreen||t.mozCancelFullScreen,this.l?(this.p=!0,this.k=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen):this.p=!1,this.p},n:function(){return t.fullScreen||t.webkitIsFullScreen||t.mozFullScreen},m:function(){this.n()?this.l.call(t):this.k.call(this.o)}},e.fullScreen=e.fn.fullScreen=function(c){var u="object"!=typeof this||this==t?t.documentElement:this[0],r=e(u).data("pl_fullscreen");return r||(r=new n(u),e(u).data("pl_fullscreen",r)),c&&r.p?l[c]?l[c].call(r):void 0:r.p}})(jQuery,document);