parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({9:[function(require,module,exports) {
jQuery(document).ready(function(e){setTimeout(function(){e("h1.responsive-headline").fitText(1,{minFontSize:"40px",maxFontSize:"90px"})},100),e(".smoothscroll").on("click",function(a){a.preventDefault();var t=this.hash,n=e(t);e("html, body").stop().animate({scrollTop:n.offset().top},800,"swing",function(){window.location.hash=t})});var a=e("section"),t=e("#nav-wrap a");a.waypoint({handler:function(a,n){var o;o=e(this),"up"===n&&(o=o.prev());var i=e('#nav-wrap a[href="#'+o.attr("id")+'"]');t.parent().removeClass("current"),i.parent().addClass("current")},offset:"35%"}),e("header").css({height:e(window).height()}),e(window).on("resize",function(){e("header").css({height:e(window).height()}),e("body").css({width:e(window).width()})}),e(window).on("scroll",function(){var a=e("header").height(),t=e(window).scrollTop(),n=e("#nav-wrap");t>.2*a&&t<a&&e(window).outerWidth()>768?n.fadeOut("fast"):t<.2*a?n.removeClass("opaque").fadeIn("fast"):n.addClass("opaque").fadeIn("fast")}),e(".item-wrap a").magnificPopup({type:"inline",fixedContentPos:!1,removalDelay:200,showCloseBtn:!1,mainClass:"mfp-fade"}),e(document).on("click",".popup-modal-dismiss",function(a){a.preventDefault(),e.magnificPopup.close()}),e(".flexslider").flexslider({namespace:"flex-",controlsContainer:".flex-container",animation:"slide",controlNav:!0,directionNav:!1,smoothHeight:!0,slideshowSpeed:7e3,animationSpeed:600,randomize:!1}),e("form#contactForm button.submit").click(function(){e("#image-loader").fadeIn();var a="contactName="+e("#contactForm #contactName").val()+"&contactEmail="+e("#contactForm #contactEmail").val()+"&contactSubject="+e("#contactForm #contactSubject").val()+"&contactMessage="+e("#contactForm #contactMessage").val();return e.ajax({type:"POST",url:"inc/sendEmail.php",data:a,success:function(a){"OK"==a?(e("#image-loader").fadeOut(),e("#message-warning").hide(),e("#contactForm").fadeOut(),e("#message-success").fadeIn()):(e("#image-loader").fadeOut(),e("#message-warning").html(a),e("#message-warning").fadeIn())}}),!1})});
},{}]},{},[9], null)
//# sourceMappingURL=init.1dfe63e0.map