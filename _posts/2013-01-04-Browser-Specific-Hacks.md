---
layout: post
categories: Css
title: CSS 判断浏览器方法整理
---
整理几个常用的判断浏览器的方法，记录在这里方便查阅。不够全面，以后遇到问题了再来更新。

### Conditional Comments

{% prism markup %}
<!--[if IE]>
  According to the conditional comment this is IE
<![endif]-->

<!--[if IE 6]>
  According to the conditional comment this is IE 6
<![endif]-->

<!--[if IE 7]>
  According to the conditional comment this is IE 7
<![endif]-->

<!--[if IE 8]>
  According to the conditional comment this is IE 8
<![endif]-->

<!--[if IE 9]>
  According to the conditional comment this is IE 9
<![endif]-->

<!--[if gte IE 8]>
  According to the conditional comment this is IE 8 or higher
<![endif]-->

<!--[if lt IE 9]>
  According to the conditional comment this is IE lower than 9
<![endif]-->

<!--[if lte IE 7]>
  According to the conditional comment this is IE lower or equal to 7
<![endif]-->

<!--[if gt IE 6]>
  According to the conditional comment this is IE greater than 6
<![endif]-->

<!--[if !IE]> -->
  According to the conditional comment this is not IE
<!-- <![endif]-->
{% endprism %}
<p class="noindent">Source: <a href="http://www.quirksmode.org/css/condcom.html" target="_blank">http://www.quirksmode.org/css/condcom.html</a></p>

### Target IE

{% prism css %}
p {
  color: red; /* All browsers */
  color: red\9; /* IE8 and below */
  *color: red; /* IE7 and below */
  _color: red; /* IE6 */  
}

/* Target IE 10 */
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  p {
    color: red;
  }
}
{% endprism %}

### Target Safari and Chrome

{% prism css %}
@media screen and (-webkit-min-device-pixel-ratio:0) {
  p {
    color: red;
  }
}
{% endprism %}

### Target Firefox

{% prism css %}
@-moz-document url-prefix() {
  p {
    color: red;
  }
}
{% endprism %}

### Target Opera

{% prism css %}
x:-o-prefocus, p {
  color: red;
}
{% endprism %}