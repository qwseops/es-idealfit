mfnSetup={translate:null},function(t){"use strict";!function(){if(!window.getComputedStyle)return!1;var t,n=document.createElement("div"),e={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var r in document.body.insertBefore(n,null),e)void 0!==n.style[r]&&(n.style[r]="translate3d(1px,1px,1px)",t=window.getComputedStyle(n).getPropertyValue(e[r]));return document.body.removeChild(n),null!=t&&t.length>0&&"none"!==t}()?mfnSetup.translate=function(t,n,e){t.css({left:n,top:e})}:mfnSetup.translate=function(t,n,e){t.css("-"+function(){var t,n,e=document.createElement("div"),r=["ms","O","Webkit","Moz"];for(t in r)if(void 0!==e.style[r[t]+"Transition"]){n=r[t];break}return n}()+"-transform","translate3d("+n+", "+e+", 0)")}}(jQuery),function(t){"use strict";t.fn.mfnParallax=function(){var n,e,r,o=t(this),i=o.parent(),a=function(){var i,a,f,s=t(window).scrollTop();void 0!==e&&s>=e.min&&s<=e.max&&(a=(i=s-e.min)/e.height,f=r+500*a-i-r/e.height*500,mfnSetup.translate(o,n.left+"px",-Math.round(f)+"px"))};t(window).bind("load resize",(function(){setTimeout((function(){(function(){var a,f,s;r=t(window).height(),a=function(n){var e,r,o=n.get(0).naturalWidth,i=n.get(0).naturalHeight,a=n.parent().outerWidth(),f=n.parent().outerHeight(),s=t(window).height();s>f&&(f=s);var u=o/a;return i/u<f?(r=f,(e=o/(i/f))>o&&(r>s?(e=o/(i/s),r=s):(e=o,r=i))):(e=a,r=i/u),[e,r,(a-e)/2,(f-r)/2]}(o),o.removeAttr("style").css({width:a[0],height:a[1]}),mfnSetup.translate(o,a[2]+"px",a[3]+"px"),n={width:a[0],height:a[1],left:a[2],top:a[3]},f=i.offset().top-t(window).height(),s=i.offset().top+t(i).outerHeight(),e={min:f,max:s,height:s-f}})(),a()}),200)})),t(window).bind("scroll",a)},t(document).ready((function(){t(".mfn-parallax").length&&t(".mfn-parallax").each((function(){t(this).mfnParallax()}))}))}(jQuery);