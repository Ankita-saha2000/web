!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e(t.jQuery)}(this,function(t){"use strict";function e(t){return"number"==typeof t&&!isNaN(t)}function i(t){return void 0===t}function a(t,i){var a=[];return e(i)&&a.push(i),a.slice.apply(t,a)}function o(t,e){for(var i=arguments.length,o=Array(i>2?i-2:0),n=2;n<i;n++)o[n-2]=arguments[n];return function(){for(var i=arguments.length,n=Array(i),r=0;r<i;r++)n[r]=arguments[r];return t.apply(e,o.concat(a(n)))}}function n(e){var i=[];return t.each(e,function(t){i.push(t)}),i}function r(t){var e=t.match(/^(https?:)\/\/([^:/?#]+):?(\d*)/i);return e&&(e[1]!==location.protocol||e[2]!==location.hostname||e[3]!==location.port)}function h(t){var e="timestamp="+(new Date).getTime();return t+(-1===t.indexOf("?")?"?":"&")+e}function s(t,e){if(!t.naturalWidth||B){var i=document.createElement("img");i.onload=function(){e(this.width,this.height)},i.src=t.src}else e(t.naturalWidth,t.naturalHeight)}function d(t){var i=[],a=t.translateX,o=t.translateY,n=t.rotate,r=t.scaleX,h=t.scaleY;return e(a)&&0!==a&&i.push("translateX("+a+"px)"),e(o)&&0!==o&&i.push("translateY("+o+"px)"),e(n)&&0!==n&&i.push("rotate("+n+"deg)"),e(r)&&1!==r&&i.push("scaleX("+r+")"),e(h)&&1!==h&&i.push("scaleY("+h+")"),i.length?i.join(" "):"none"}function c(t,e){var i=Math.abs(t.degree)%180,a=(i>90?180-i:i)*Math.PI/180,o=Math.sin(a),n=Math.cos(a),r=t.width,h=t.height,s=t.aspectRatio,d=void 0,c=void 0;return e?c=(d=r/(n+o/s))/s:(d=r*n+h*o,c=r*o+h*n),{width:d,height:c}}function l(i,a,o){var n=t("<canvas>")[0],r=n.getContext("2d"),h=0,s=0,d=a.naturalWidth,l=a.naturalHeight,p=a.rotate,m=a.scaleX,g=a.scaleY,f=e(m)&&e(g)&&(1!==m||1!==g),u=e(p)&&0!==p,v=u||f,w=d*Math.abs(m||1),x=l*Math.abs(g||1),b=void 0,y=void 0,C=void 0;return f&&(b=w/2,y=x/2),u&&(b=(w=(C=c({width:w,height:x,degree:p})).width)/2,y=(x=C.height)/2),n.width=w,n.height=x,o.fillColor&&(r.fillStyle=o.fillColor,r.fillRect(0,0,w,x)),v&&(h=-d/2,s=-l/2,r.save(),r.translate(b,y)),u&&r.rotate(p*Math.PI/180),f&&r.scale(m,g),r.imageSmoothingEnabled=!!o.imageSmoothingEnabled,o.imageSmoothingQuality&&(r.imageSmoothingQuality=o.imageSmoothingQuality),r.drawImage(i,Math.floor(h),Math.floor(s),Math.floor(d),Math.floor(l)),v&&r.restore(),n}function p(t,e,i){var a="",o=void 0;for(o=e,i+=e;o<i;o+=1)a+=k(t.getUint8(o));return a}function m(t){var e=new DataView(t),i=e.byteLength,a=void 0,o=void 0,n=void 0,r=void 0,h=void 0,s=void 0,d=void 0,c=void 0,l=void 0;if(255===e.getUint8(0)&&216===e.getUint8(1))for(c=2;c<i;){if(255===e.getUint8(c)&&225===e.getUint8(c+1)){s=c;break}c+=1}if(s&&(o=s+10,"Exif"===p(e,s+4,4)&&((r=18761===(h=e.getUint16(o)))||19789===h)&&42===e.getUint16(o+2,r)&&(n=e.getUint32(o+4,r))>=8&&(d=o+n)),d)for(i=e.getUint16(d,r),l=0;l<i;l+=1)if(c=d+12*l+2,274===e.getUint16(c,r)){c+=8,a=e.getUint16(c,r),B&&e.setUint16(c,1,r);break}return a}function g(t){var e=t.replace(C,""),i=atob(e),a=i.length,o=new ArrayBuffer(a),n=new Uint8Array(o),r=void 0;for(r=0;r<a;r+=1)n[r]=i.charCodeAt(r);return o}function f(t){var e=new Uint8Array(t),i=e.length,a="",o=void 0;for(o=0;o<i;o+=1)a+=k(e[o]);return"data:image/jpeg;base64,"+btoa(a)}function u(e,i){var a=e.pageX,o=e.pageY,n={endX:a,endY:o};return i?n:t.extend({startX:a,startY:o},n)}function v(e){var i=t.extend({},e),a=[];return t.each(e,function(e,o){delete i[e],t.each(i,function(t,e){var i=Math.abs(o.startX-e.startX),n=Math.abs(o.startY-e.startY),r=Math.abs(o.endX-e.endX),h=Math.abs(o.endY-e.endY),s=Math.sqrt(i*i+n*n),d=(Math.sqrt(r*r+h*h)-s)/s;a.push(d)})}),a.sort(function(t,e){return Math.abs(t)<Math.abs(e)}),a[0]}function w(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function x(e){var i=0,a=0,o=0;return t.each(e,function(t,e){var n=e.startX,r=e.startY;i+=n,a+=r,o+=1}),i/=o,a/=o,{pageX:i,pageY:a}}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}t=t&&t.hasOwnProperty("default")?t.default:t;var y={viewMode:0,dragMode:"crop",aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},C=/^data:.*,/,M=/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i,$="undefined"!=typeof window?window.navigator:null,B=$&&M.test($.userAgent),k=String.fromCharCode,D={render:function(){var t=this;t.initContainer(),t.initCanvas(),t.initCropBox(),t.renderCanvas(),t.cropped&&t.renderCropBox()},initContainer:function(){var t=this,e=t.options,i=t.$element,a=t.$container,o=t.$cropper,n="cropper-hidden";o.addClass(n),i.removeClass(n),o.css(t.container={width:Math.max(a.width(),Number(e.minContainerWidth)||200),height:Math.max(a.height(),Number(e.minContainerHeight)||100)}),i.addClass(n),o.removeClass(n)},initCanvas:function(){var e=this,i=e.options.viewMode,a=e.container,o=a.width,n=a.height,r=e.image,h=r.naturalWidth,s=r.naturalHeight,d=Math.abs(r.rotate)%180==90,c=d?s:h,l=d?h:s,p=c/l,m=o,g=n;n*p>o?3===i?m=n*p:g=o/p:3===i?g=o/p:m=n*p;var f={naturalWidth:c,naturalHeight:l,aspectRatio:p,width:m,height:g};f.left=(o-m)/2,f.top=(n-g)/2,f.oldLeft=f.left,f.oldTop=f.top,e.canvas=f,e.limited=1===i||2===i,e.limitCanvas(!0,!0),e.initialImage=t.extend({},r),e.initialCanvas=t.extend({},f)},limitCanvas:function(t,e){var i=this,a=i.options,o=a.viewMode,n=i.container,r=n.width,h=n.height,s=i.canvas,d=s.aspectRatio,c=i.cropBox,l=i.cropped&&c;if(t){var p=Number(a.minCanvasWidth)||0,m=Number(a.minCanvasHeight)||0;o&&(o>1?(p=Math.max(p,r),m=Math.max(m,h),3===o&&(m*d>p?p=m*d:m=p/d)):p?p=Math.max(p,l?c.width:0):m?m=Math.max(m,l?c.height:0):l&&(p=c.width,(m=c.height)*d>p?p=m*d:m=p/d)),p&&m?m*d>p?m=p/d:p=m*d:p?m=p/d:m&&(p=m*d),s.minWidth=p,s.minHeight=m,s.maxWidth=1/0,s.maxHeight=1/0}if(e)if(o){var g=r-s.width,f=h-s.height;s.minLeft=Math.min(0,g),s.minTop=Math.min(0,f),s.maxLeft=Math.max(0,g),s.maxTop=Math.max(0,f),l&&i.limited&&(s.minLeft=Math.min(c.left,c.left+c.width-s.width),s.minTop=Math.min(c.top,c.top+c.height-s.height),s.maxLeft=c.left,s.maxTop=c.top,2===o&&(s.width>=r&&(s.minLeft=Math.min(0,g),s.maxLeft=Math.max(0,g)),s.height>=h&&(s.minTop=Math.min(0,f),s.maxTop=Math.max(0,f))))}else s.minLeft=-s.width,s.minTop=-s.height,s.maxLeft=r,s.maxTop=h},renderCanvas:function(t){var e=this,i=e.canvas,a=e.image,o=a.rotate,n=a.naturalWidth,r=a.naturalHeight;if(e.rotated){e.rotated=!1;var h=c({width:a.width,height:a.height,degree:o}),s=h.width/h.height,l=1===a.aspectRatio;if(l||s!==i.aspectRatio){if(i.left-=(h.width-i.width)/2,i.top-=(h.height-i.height)/2,i.width=h.width,i.height=h.height,i.aspectRatio=s,i.naturalWidth=n,i.naturalHeight=r,l&&o%90||o%180){var p=c({width:n,height:r,degree:o});i.naturalWidth=p.width,i.naturalHeight=p.height}e.limitCanvas(!0,!1)}}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),e.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,e.$canvas.css({width:i.width,height:i.height,transform:d({translateX:i.left,translateY:i.top})}),e.renderImage(),e.cropped&&e.limited&&e.limitCropBox(!0,!0),t&&e.output()},renderImage:function(e){var i=this,a=i.canvas,o=i.image,n=void 0;o.rotate&&(n=c({width:a.width,height:a.height,degree:o.rotate,aspectRatio:o.aspectRatio},!0)),t.extend(o,n?{width:n.width,height:n.height,left:(a.width-n.width)/2,top:(a.height-n.height)/2}:{width:a.width,height:a.height,left:0,top:0}),i.$clone.css({width:o.width,height:o.height,transform:d(t.extend({translateX:o.left,translateY:o.top},o))}),e&&i.output()},initCropBox:function(){var e=this,i=e.options,a=e.canvas,o=i.aspectRatio,n=Number(i.autoCropArea)||.8,r={width:a.width,height:a.height};o&&(a.height*o>a.width?r.height=r.width/o:r.width=r.height*o),e.cropBox=r,e.limitCropBox(!0,!0),r.width=Math.min(Math.max(r.width,r.minWidth),r.maxWidth),r.height=Math.min(Math.max(r.height,r.minHeight),r.maxHeight),r.width=Math.max(r.minWidth,r.width*n),r.height=Math.max(r.minHeight,r.height*n),r.left=a.left+(a.width-r.width)/2,r.top=a.top+(a.height-r.height)/2,r.oldLeft=r.left,r.oldTop=r.top,e.initialCropBox=t.extend({},r)},limitCropBox:function(t,e){var i=this,a=i.options,o=a.aspectRatio,n=i.container,r=n.width,h=n.height,s=i.canvas,d=i.cropBox,c=i.limited;if(t){var l=Number(a.minCropBoxWidth)||0,p=Number(a.minCropBoxHeight)||0,m=Math.min(r,c?s.width:r),g=Math.min(h,c?s.height:h);l=Math.min(l,r),p=Math.min(p,h),o&&(l&&p?p*o>l?p=l/o:l=p*o:l?p=l/o:p&&(l=p*o),g*o>m?g=m/o:m=g*o),d.minWidth=Math.min(l,m),d.minHeight=Math.min(p,g),d.maxWidth=m,d.maxHeight=g}e&&(c?(d.minLeft=Math.max(0,s.left),d.minTop=Math.max(0,s.top),d.maxLeft=Math.min(r,s.left+s.width)-d.width,d.maxTop=Math.min(h,s.top+s.height)-d.height):(d.minLeft=0,d.minTop=0,d.maxLeft=r-d.width,d.maxTop=h-d.height))},renderCropBox:function(){var t=this,e=t.options,i=t.container,a=i.width,o=i.height,n=t.cropBox;(n.width>n.maxWidth||n.width<n.minWidth)&&(n.left=n.oldLeft),(n.height>n.maxHeight||n.height<n.minHeight)&&(n.top=n.oldTop),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),t.limitCropBox(!1,!0),n.left=Math.min(Math.max(n.left,n.minLeft),n.maxLeft),n.top=Math.min(Math.max(n.top,n.minTop),n.maxTop),n.oldLeft=n.left,n.oldTop=n.top,e.movable&&e.cropBoxMovable&&t.$face.data("action",n.width===a&&n.height===o?"move":"all"),t.$cropBox.css({width:n.width,height:n.height,transform:d({translateX:n.left,translateY:n.top})}),t.cropped&&t.limited&&t.limitCanvas(!0,!0),t.disabled||t.output()},output:function(){var t=this;t.preview(),t.completed&&t.trigger("crop",t.getData())}},T={initPreview:function(){var e=this,i=e.crossOrigin,a=i?e.crossOriginUrl:e.url,o=document.createElement("img");i&&(o.crossOrigin=i),o.src=a;var n=t(o);e.$preview=t(e.options.preview),e.$clone2=n,e.$viewBox.html(n),e.$preview.each(function(e,o){var n=t(o),r=document.createElement("img");n.data("preview",{width:n.width(),height:n.height(),html:n.html()}),i&&(r.crossOrigin=i),r.src=a,r.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',n.html(r)})},resetPreview:function(){this.$preview.each(function(e,i){var a=t(i),o=a.data("preview");a.css({width:o.width,height:o.height}).html(o.html).removeData("preview")})},preview:function(){var e=this,i=e.image,a=e.canvas,o=e.cropBox,n=o.width,r=o.height,h=i.width,s=i.height,c=o.left-a.left-i.left,l=o.top-a.top-i.top;e.cropped&&!e.disabled&&(e.$clone2.css({width:h,height:s,transform:d(t.extend({translateX:-c,translateY:-l},i))}),e.$preview.each(function(e,a){var o=t(a),p=o.data("preview"),m=p.width,g=p.height,f=m,u=g,v=1;n&&(u=r*(v=m/n)),r&&u>g&&(f=n*(v=g/r),u=g),o.css({width:f,height:u}).find("img").css({width:h*v,height:s*v,transform:d(t.extend({translateX:-c*v,translateY:-l*v},i))})}))}},W="undefined"!=typeof window?window.PointerEvent:null,Y=W?"pointerdown":"touchstart mousedown",X=W?"pointermove":"touchmove mousemove",H=W?" pointerup pointercancel":"touchend touchcancel mouseup",O={bind:function(){var e=this,i=e.options,a=e.$element,n=e.$cropper;t.isFunction(i.cropstart)&&a.on("cropstart",i.cropstart),t.isFunction(i.cropmove)&&a.on("cropmove",i.cropmove),t.isFunction(i.cropend)&&a.on("cropend",i.cropend),t.isFunction(i.crop)&&a.on("crop",i.crop),t.isFunction(i.zoom)&&a.on("zoom",i.zoom),n.on(Y,o(e.cropStart,this)),i.zoomable&&i.zoomOnWheel&&n.on("wheel mousewheel DOMMouseScroll",o(e.wheel,this)),i.toggleDragModeOnDblclick&&n.on("dblclick",o(e.dblclick,this)),t(document).on(X,e.onCropMove=o(e.cropMove,this)).on(H,e.onCropEnd=o(e.cropEnd,this)),i.responsive&&t(window).on("resize",e.onResize=o(e.resize,this))},unbind:function(){var e=this,i=e.options,a=e.$element,o=e.$cropper;t.isFunction(i.cropstart)&&a.off("cropstart",i.cropstart),t.isFunction(i.cropmove)&&a.off("cropmove",i.cropmove),t.isFunction(i.cropend)&&a.off("cropend",i.cropend),t.isFunction(i.crop)&&a.off("crop",i.crop),t.isFunction(i.zoom)&&a.off("zoom",i.zoom),o.off(Y,e.cropStart),i.zoomable&&i.zoomOnWheel&&o.off("wheel mousewheel DOMMouseScroll",e.wheel),i.toggleDragModeOnDblclick&&o.off("dblclick",e.dblclick),t(document).off(X,e.onCropMove).off(H,e.onCropEnd),i.responsive&&t(window).off("resize",e.onResize)}},z=/^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,R={resize:function(){var e=this,i=e.options,a=e.$container,o=e.container,n=Number(i.minContainerWidth)||200,r=Number(i.minContainerHeight)||100;if(!e.disabled&&o.width!==n&&o.height!==r){var h=a.width()/o.width;if(1!==h||a.height()!==o.height){var s=void 0,d=void 0;i.restore&&(s=e.getCanvasData(),d=e.getCropBoxData()),e.render(),i.restore&&(e.setCanvasData(t.each(s,function(t,e){s[t]=e*h})),e.setCropBoxData(t.each(d,function(t,e){d[t]=e*h})))}}},dblclick:function(){var t=this;t.disabled||"none"===t.options.dragMode||t.setDragMode(t.$dragBox.hasClass("cropper-crop")?"move":"crop")},wheel:function(t){var e=this,i=t.originalEvent||t,a=Number(e.options.wheelZoomRatio)||.1;if(!e.disabled&&(t.preventDefault(),!e.wheeling)){e.wheeling=!0,setTimeout(function(){e.wheeling=!1},50);var o=1;i.deltaY?o=i.deltaY>0?1:-1:i.wheelDelta?o=-i.wheelDelta/120:i.detail&&(o=i.detail>0?1:-1),e.zoom(-o*a,t)}},cropStart:function(e){var i=this;if(!i.disabled){var a=i.options,o=i.pointers,r=e.originalEvent,h=void 0;r&&r.changedTouches?t.each(r.changedTouches,function(t,e){o[e.identifier]=u(e)}):o[r&&r.pointerId||0]=u(r||e),h=n(o).length>1&&a.zoomable&&a.zoomOnTouch?"zoom":t(e.target).data("action"),z.test(h)&&(i.trigger("cropstart",{originalEvent:r,action:h}).isDefaultPrevented()||(e.preventDefault(),i.action=h,i.cropping=!1,"crop"===h&&(i.cropping=!0,i.$dragBox.addClass("cropper-modal"))))}},cropMove:function(e){var i=this,a=i.action;if(!i.disabled&&a){var o=i.pointers,n=e.originalEvent;e.preventDefault(),i.trigger("cropmove",{originalEvent:n,action:a}).isDefaultPrevented()||(n&&n.changedTouches?t.each(n.changedTouches,function(e,i){t.extend(o[i.identifier],u(i,!0))}):t.extend(o[n&&n.pointerId||0],u(n||e,!0)),i.change(e))}},cropEnd:function(e){var i=this;if(!i.disabled){var a=i.action,o=i.pointers,r=e.originalEvent;r&&r.changedTouches?t.each(r.changedTouches,function(t,e){delete o[e.identifier]}):delete o[r&&r.pointerId||0],a&&(e.preventDefault(),n(o).length||(i.action=""),i.cropping&&(i.cropping=!1,i.$dragBox.toggleClass("cropper-modal",i.cropped&&i.options.modal)),i.trigger("cropend",{originalEvent:r,action:a}))}}},E={change:function(e){var i=this,a=i.options,o=i.pointers,r=o[n(o)[0]],h=i.container,s=i.canvas,d=i.cropBox,c=i.action,l=a.aspectRatio,p=d.width,m=d.height,g=d.left,f=d.top,u=g+p,w=f+m,x=0,b=0,y=h.width,C=h.height,M=!0,$=void 0;!l&&e.shiftKey&&(l=p&&m?p/m:1),i.limited&&(x=d.minLeft,b=d.minTop,y=x+Math.min(h.width,s.width,s.left+s.width),C=b+Math.min(h.height,s.height,s.top+s.height));var B={x:r.endX-r.startX,y:r.endY-r.startY};switch(c){case"all":g+=B.x,f+=B.y;break;case"e":if(B.x>=0&&(u>=y||l&&(f<=b||w>=C))){M=!1;break}u+B.x>y&&(B.x=y-u),p+=B.x,l&&(m=p/l,f-=B.x/l/2),p<0&&(c="w",p=0);break;case"n":if(B.y<=0&&(f<=b||l&&(g<=x||u>=y))){M=!1;break}f+B.y<b&&(B.y=b-f),m-=B.y,f+=B.y,l&&(p=m*l,g+=B.y*l/2),m<0&&(c="s",m=0);break;case"w":if(B.x<=0&&(g<=x||l&&(f<=b||w>=C))){M=!1;break}g+B.x<x&&(B.x=x-g),p-=B.x,g+=B.x,l&&(m=p/l,f+=B.x/l/2),p<0&&(c="e",p=0);break;case"s":if(B.y>=0&&(w>=C||l&&(g<=x||u>=y))){M=!1;break}w+B.y>C&&(B.y=C-w),m+=B.y,l&&(p=m*l,g-=B.y*l/2),m<0&&(c="n",m=0);break;case"ne":if(l){if(B.y<=0&&(f<=b||u>=y)){M=!1;break}m-=B.y,f+=B.y,p=m*l}else B.x>=0?u<y?p+=B.x:B.y<=0&&f<=b&&(M=!1):p+=B.x,B.y<=0?f>b&&(m-=B.y,f+=B.y):(m-=B.y,f+=B.y);p<0&&m<0?(c="sw",m=0,p=0):p<0?(c="nw",p=0):m<0&&(c="se",m=0);break;case"nw":if(l){if(B.y<=0&&(f<=b||g<=x)){M=!1;break}m-=B.y,f+=B.y,p=m*l,g+=B.y*l}else B.x<=0?g>x?(p-=B.x,g+=B.x):B.y<=0&&f<=b&&(M=!1):(p-=B.x,g+=B.x),B.y<=0?f>b&&(m-=B.y,f+=B.y):(m-=B.y,f+=B.y);p<0&&m<0?(c="se",m=0,p=0):p<0?(c="ne",p=0):m<0&&(c="sw",m=0);break;case"sw":if(l){if(B.x<=0&&(g<=x||w>=C)){M=!1;break}p-=B.x,g+=B.x,m=p/l}else B.x<=0?g>x?(p-=B.x,g+=B.x):B.y>=0&&w>=C&&(M=!1):(p-=B.x,g+=B.x),B.y>=0?w<C&&(m+=B.y):m+=B.y;p<0&&m<0?(c="ne",m=0,p=0):p<0?(c="se",p=0):m<0&&(c="nw",m=0);break;case"se":if(l){if(B.x>=0&&(u>=y||w>=C)){M=!1;break}m=(p+=B.x)/l}else B.x>=0?u<y?p+=B.x:B.y>=0&&w>=C&&(M=!1):p+=B.x,B.y>=0?w<C&&(m+=B.y):m+=B.y;p<0&&m<0?(c="nw",m=0,p=0):p<0?(c="sw",p=0):m<0&&(c="ne",m=0);break;case"move":i.move(B.x,B.y),M=!1;break;case"zoom":i.zoom(v(o),e.originalEvent),M=!1;break;case"crop":if(!B.x||!B.y){M=!1;break}$=i.$cropper.offset(),g=r.startX-$.left,f=r.startY-$.top,p=d.minWidth,m=d.minHeight,B.x>0?c=B.y>0?"se":"ne":B.x<0&&(g-=p,c=B.y>0?"sw":"nw"),B.y<0&&(f-=m),i.cropped||(i.$cropBox.removeClass("cropper-hidden"),i.cropped=!0,i.limited&&i.limitCropBox(!0,!0))}M&&(d.width=p,d.height=m,d.left=g,d.top=f,i.action=c,i.renderCropBox()),t.each(o,function(t,e){e.startX=e.endX,e.startY=e.endY})}},L={crop:function(){var t=this;t.ready&&!t.disabled&&(t.cropped||(t.cropped=!0,t.limitCropBox(!0,!0),t.options.modal&&t.$dragBox.addClass("cropper-modal"),t.$cropBox.removeClass("cropper-hidden")),t.setCropBoxData(t.initialCropBox))},reset:function(){var e=this;e.ready&&!e.disabled&&(e.image=t.extend({},e.initialImage),e.canvas=t.extend({},e.initialCanvas),e.cropBox=t.extend({},e.initialCropBox),e.renderCanvas(),e.cropped&&e.renderCropBox())},clear:function(){var e=this;e.cropped&&!e.disabled&&(t.extend(e.cropBox,{left:0,top:0,width:0,height:0}),e.cropped=!1,e.renderCropBox(),e.limitCanvas(!0,!0),e.renderCanvas(),e.$dragBox.removeClass("cropper-modal"),e.$cropBox.addClass("cropper-hidden"))},replace:function(t,e){var i=this;!i.disabled&&t&&(i.isImg&&i.$element.attr("src",t),e?(i.url=t,i.$clone.attr("src",t),i.ready&&i.$preview.find("img").add(i.$clone2).attr("src",t)):(i.isImg&&(i.replaced=!0),i.options.data=null,i.load(t)))},enable:function(){var t=this;t.ready&&(t.disabled=!1,t.$cropper.removeClass("cropper-disabled"))},disable:function(){var t=this;t.ready&&(t.disabled=!0,t.$cropper.addClass("cropper-disabled"))},destroy:function(){var t=this,e=t.$element;t.loaded?(t.isImg&&t.replaced&&e.attr("src",t.originalUrl),t.unbuild(),e.removeClass("cropper-hidden")):t.isImg?e.off("load",t.start):t.$clone&&t.$clone.remove(),e.removeData("cropper")},move:function(t,e){var a=this,o=a.canvas;a.moveTo(i(t)?t:o.left+Number(t),i(e)?e:o.top+Number(e))},moveTo:function(t,a){var o=this,n=o.canvas,r=!1;i(a)&&(a=t),t=Number(t),a=Number(a),o.ready&&!o.disabled&&o.options.movable&&(e(t)&&(n.left=t,r=!0),e(a)&&(n.top=a,r=!0),r&&o.renderCanvas(!0))},zoom:function(t,e){var i=this,a=i.canvas;t=(t=Number(t))<0?1/(1-t):1+t,i.zoomTo(a.width*t/a.naturalWidth,e)},zoomTo:function(t,e){var i=this,a=i.options,o=i.pointers,r=i.canvas,h=r.width,s=r.height,d=r.naturalWidth,c=r.naturalHeight;if((t=Number(t))>=0&&i.ready&&!i.disabled&&a.zoomable){var l=d*t,p=c*t,m=void 0;if(e&&(m=e.originalEvent),i.trigger("zoom",{originalEvent:m,oldRatio:h/d,ratio:l/d}).isDefaultPrevented())return;if(m){var g=i.$cropper.offset(),f=o&&n(o).length?x(o):{pageX:e.pageX||m.pageX||0,pageY:e.pageY||m.pageY||0};r.left-=(l-h)*((f.pageX-g.left-r.left)/h),r.top-=(p-s)*((f.pageY-g.top-r.top)/s)}else r.left-=(l-h)/2,r.top-=(p-s)/2;r.width=l,r.height=p,i.renderCanvas(!0)}},rotate:function(t){var e=this;e.rotateTo((e.image.rotate||0)+Number(t))},rotateTo:function(t){var i=this;e(t=Number(t))&&i.ready&&!i.disabled&&i.options.rotatable&&(i.image.rotate=t%360,i.rotated=!0,i.renderCanvas(!0))},scale:function(t,a){var o=this,n=o.image,r=!1;i(a)&&(a=t),t=Number(t),a=Number(a),o.ready&&!o.disabled&&o.options.scalable&&(e(t)&&(n.scaleX=t,r=!0),e(a)&&(n.scaleY=a,r=!0),r&&o.renderImage(!0))},scaleX:function(t){var i=this,a=i.image.scaleY;i.scale(t,e(a)?a:1)},scaleY:function(t){var i=this,a=i.image.scaleX;i.scale(e(a)?a:1,t)},getData:function(e){var i=this,a=i.options,o=i.image,n=i.canvas,r=i.cropBox,h=void 0,s=void 0;return i.ready&&i.cropped?(s={x:r.left-n.left,y:r.top-n.top,width:r.width,height:r.height},h=o.width/o.naturalWidth,t.each(s,function(t,i){i/=h,s[t]=e?Math.round(i):i})):s={x:0,y:0,width:0,height:0},a.rotatable&&(s.rotate=o.rotate||0),a.scalable&&(s.scaleX=o.scaleX||1,s.scaleY=o.scaleY||1),s},setData:function(i){var a=this,o=a.options,n=a.image,r=a.canvas,h={},s=void 0,d=void 0,c=void 0;t.isFunction(i)&&(i=i.call(a.element)),a.ready&&!a.disabled&&t.isPlainObject(i)&&(o.rotatable&&e(i.rotate)&&i.rotate!==n.rotate&&(n.rotate=i.rotate,s=!0,a.rotated=s),o.scalable&&(e(i.scaleX)&&i.scaleX!==n.scaleX&&(n.scaleX=i.scaleX,d=!0),e(i.scaleY)&&i.scaleY!==n.scaleY&&(n.scaleY=i.scaleY,d=!0)),s?a.renderCanvas():d&&a.renderImage(),c=n.width/n.naturalWidth,e(i.x)&&(h.left=i.x*c+r.left),e(i.y)&&(h.top=i.y*c+r.top),e(i.width)&&(h.width=i.width*c),e(i.height)&&(h.height=i.height*c),a.setCropBoxData(h))},getContainerData:function(){return this.ready?this.container:{}},getImageData:function(){return this.loaded?this.image:{}},getCanvasData:function(){var e=this,i=e.canvas,a={};return e.ready&&t.each(["left","top","width","height","naturalWidth","naturalHeight"],function(t,e){a[e]=i[e]}),a},setCanvasData:function(i){var a=this,o=a.canvas,n=o.aspectRatio;t.isFunction(i)&&(i=i.call(a.$element)),a.ready&&!a.disabled&&t.isPlainObject(i)&&(e(i.left)&&(o.left=i.left),e(i.top)&&(o.top=i.top),e(i.width)?(o.width=i.width,o.height=i.width/n):e(i.height)&&(o.height=i.height,o.width=i.height*n),a.renderCanvas(!0))},getCropBoxData:function(){var t=this,e=t.cropBox;return t.ready&&t.cropped?{left:e.left,top:e.top,width:e.width,height:e.height}:{}},setCropBoxData:function(i){var a=this,o=a.cropBox,n=a.options.aspectRatio,r=void 0,h=void 0;t.isFunction(i)&&(i=i.call(a.$element)),a.ready&&a.cropped&&!a.disabled&&t.isPlainObject(i)&&(e(i.left)&&(o.left=i.left),e(i.top)&&(o.top=i.top),e(i.width)&&i.width!==o.width&&(r=!0,o.width=i.width),e(i.height)&&i.height!==o.height&&(h=!0,o.height=i.height),n&&(r?o.height=o.width/n:h&&(o.width=o.height*n)),a.renderCropBox())},getCroppedCanvas:function(e){var i=this;if(!i.ready||!window.HTMLCanvasElement)return null;if(t.isPlainObject(e)||(e={}),!i.cropped)return l(i.$clone[0],i.image,e);var a=i.getData(),o=a.width,n=a.height,r=o/n,h=void 0,s=void 0,d=void 0;t.isPlainObject(e)&&(h=e.width,s=e.height,h?(s=h/r,d=h/o):s&&(h=s*r,d=s/n));var c=Math.floor(h||o),p=Math.floor(s||n),m=t("<canvas>")[0],g=m.getContext("2d");m.width=c,m.height=p,e.fillColor&&(g.fillStyle=e.fillColor,g.fillRect(0,0,c,p));var f=function(){var t=l(i.$clone[0],i.image,e),r=t.width,h=t.height,s=i.canvas,c=[t],p=a.x+s.naturalWidth*(Math.abs(a.scaleX||1)-1)/2,m=a.y+s.naturalHeight*(Math.abs(a.scaleY||1)-1)/2,g=void 0,f=void 0,u=void 0,v=void 0,w=void 0,x=void 0;return p<=-o||p>r?(p=0,g=0,u=0,w=0):p<=0?(u=-p,p=0,g=w=Math.min(r,o+p)):p<=r&&(u=0,g=w=Math.min(o,r-p)),g<=0||m<=-n||m>h?(m=0,f=0,v=0,x=0):m<=0?(v=-m,m=0,f=x=Math.min(h,n+m)):m<=h&&(v=0,f=x=Math.min(n,h-m)),c.push(Math.floor(p),Math.floor(m),Math.floor(g),Math.floor(f)),d&&(u*=d,v*=d,w*=d,x*=d),w>0&&x>0&&c.push(Math.floor(u),Math.floor(v),Math.floor(w),Math.floor(x)),c}();return g.imageSmoothingEnabled=!!e.imageSmoothingEnabled,e.imageSmoothingQuality&&(g.imageSmoothingQuality=e.imageSmoothingQuality),g.drawImage.apply(g,w(f)),m},setAspectRatio:function(t){var e=this,a=e.options;e.disabled||i(t)||(a.aspectRatio=Math.max(0,t)||NaN,e.ready&&(e.initCropBox(),e.cropped&&e.renderCropBox()))},setDragMode:function(t){var e=this,i=e.options,a=void 0,o=void 0;e.loaded&&!e.disabled&&(a="crop"===t,o=i.movable&&"move"===t,t=a||o?t:"none",e.$dragBox.data("action",t).toggleClass("cropper-crop",a).toggleClass("cropper-move",o),i.cropBoxMovable||e.$face.data("action",t).toggleClass("cropper-crop",a).toggleClass("cropper-move",o))}},N=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),I=/^data:/,P=/^data:image\/jpeg;base64,/,U=function(){function e(i,a){b(this,e);var o=this;o.$element=t(i),o.options=t.extend({},y,t.isPlainObject(a)&&a),o.loaded=!1,o.ready=!1,o.completed=!1,o.rotated=!1,o.cropped=!1,o.disabled=!1,o.replaced=!1,o.limited=!1,o.wheeling=!1,o.isImg=!1,o.originalUrl="",o.canvas=null,o.cropBox=null,o.pointers={},o.init()}return N(e,[{key:"init",value:function(){var t=this,e=t.$element,i=void 0;if(e.is("img")){if(t.isImg=!0,i=e.attr("src"),t.originalUrl=i,!i)return;i=e.prop("src")}else e.is("canvas")&&window.HTMLCanvasElement&&(i=e[0].toDataURL());t.load(i)}},{key:"trigger",value:function(e,i){var a=t.Event(e,i);return this.$element.trigger(a),a}},{key:"load",value:function(e){var i=this,a=i.options,o=i.$element;if(e)if(i.url=e,i.image={},a.checkOrientation&&window.ArrayBuffer)if(I.test(e))P.test(e)?i.read(g(e)):i.clone();else{var n=new XMLHttpRequest;n.onerror=t.proxy(function(){i.clone()},this),n.onload=function(){i.read(this.response)},a.checkCrossOrigin&&r(e)&&o.prop("crossOrigin")&&(e=h(e)),n.open("get",e),n.responseType="arraybuffer",n.withCredentials="use-credentials"===o.prop("crossOrigin"),n.send()}else i.clone()}},{key:"read",value:function(t){var e=this,i=e.options,a=m(t),o=e.image,n=0,r=1,h=1;if(a>1)switch(e.url=f(t),a){case 2:r=-1;break;case 3:n=-180;break;case 4:h=-1;break;case 5:n=90,h=-1;break;case 6:n=90;break;case 7:n=90,r=-1;break;case 8:n=-90}i.rotatable&&(o.rotate=n),i.scalable&&(o.scaleX=r,o.scaleY=h),e.clone()}},{key:"clone",value:function(){var e=this,i=e.options,a=e.$element,o=e.url,n="",s=void 0;i.checkCrossOrigin&&r(o)&&((n=a.prop("crossOrigin"))?s=o:(n="anonymous",s=h(o))),e.crossOrigin=n,e.crossOriginUrl=s;var d=document.createElement("img");n&&(d.crossOrigin=n),d.src=s||o;var c=t(d);e.$clone=c,e.isImg?a[0].complete?e.start():a.one("load",t.proxy(e.start,this)):c.one("load",t.proxy(e.start,this)).one("error",t.proxy(e.stop,this)).addClass("cropper-hide").insertAfter(a)}},{key:"start",value:function(){var e=this,i=e.$clone,a=e.$element;e.isImg||(i.off("error",e.stop),a=i),s(a[0],function(i,a){t.extend(e.image,{naturalWidth:i,naturalHeight:a,aspectRatio:i/a}),e.loaded=!0,e.build()})}},{key:"stop",value:function(){var t=this;t.$clone.remove(),t.$clone=null}},{key:"build",value:function(){var e=this,i=e.options,a=e.$element,o=e.$clone;if(e.loaded){e.ready&&e.unbuild();var n=t('<div class="cropper-container"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-action="e"></span><span class="cropper-line line-n" data-action="n"></span><span class="cropper-line line-w" data-action="w"></span><span class="cropper-line line-s" data-action="s"></span><span class="cropper-point point-e" data-action="e"></span><span class="cropper-point point-n" data-action="n"></span><span class="cropper-point point-w" data-action="w"></span><span class="cropper-point point-s" data-action="s"></span><span class="cropper-point point-ne" data-action="ne"></span><span class="cropper-point point-nw" data-action="nw"></span><span class="cropper-point point-sw" data-action="sw"></span><span class="cropper-point point-se" data-action="se"></span></div></div>'),r=n.find(".cropper-crop-box"),h=r.find(".cropper-face");e.$container=a.parent(),e.$cropper=n,e.$canvas=n.find(".cropper-canvas").append(o),e.$dragBox=n.find(".cropper-drag-box"),e.$cropBox=r,e.$viewBox=n.find(".cropper-view-box"),e.$face=h,a.addClass("cropper-hidden").after(n),e.isImg||o.removeClass("cropper-hide"),e.initPreview(),e.bind(),i.aspectRatio=Math.max(0,i.aspectRatio)||NaN,i.viewMode=Math.max(0,Math.min(3,Math.round(i.viewMode)))||0,e.cropped=i.autoCrop,i.autoCrop?i.modal&&e.$dragBox.addClass("cropper-modal"):r.addClass("cropper-hidden"),i.guides||r.find(".cropper-dashed").addClass("cropper-hidden"),i.center||r.find(".cropper-center").addClass("cropper-hidden"),i.cropBoxMovable&&h.addClass("cropper-move").data("action","all"),i.highlight||h.addClass("cropper-invisible"),i.background&&n.addClass("cropper-bg"),i.cropBoxResizable||r.find(".cropper-line, .cropper-point").addClass("cropper-hidden"),e.setDragMode(i.dragMode),e.render(),e.ready=!0,e.setData(i.data),e.completing=setTimeout(function(){t.isFunction(i.ready)&&a.one("ready",i.ready),e.trigger("ready"),e.trigger("crop",e.getData()),e.completed=!0},0)}}},{key:"unbuild",value:function(){var t=this;t.ready&&(t.completed||clearTimeout(t.completing),t.ready=!1,t.completed=!1,t.initialImage=null,t.initialCanvas=null,t.initialCropBox=null,t.container=null,t.canvas=null,t.cropBox=null,t.unbind(),t.resetPreview(),t.$preview=null,t.$viewBox=null,t.$cropBox=null,t.$dragBox=null,t.$canvas=null,t.$container=null,t.$cropper.remove(),t.$cropper=null)}}],[{key:"setDefaults",value:function(e){t.extend(y,t.isPlainObject(e)&&e)}}]),e}();t.extend(U.prototype,D),t.extend(U.prototype,T),t.extend(U.prototype,O),t.extend(U.prototype,R),t.extend(U.prototype,E),t.extend(U.prototype,L);var A=t.fn.cropper;t.fn.cropper=function(e){for(var i=arguments.length,a=Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];var n=void 0;return this.each(function(i,o){var r=t(o),h=r.data("cropper");if(!h){if(/destroy/.test(e))return;var s=t.extend({},r.data(),t.isPlainObject(e)&&e);r.data("cropper",h=new U(o,s))}if("string"==typeof e){var d=h[e];t.isFunction(d)&&(n=d.apply(h,a))}}),void 0!==n?n:this},t.fn.cropper.Constructor=U,t.fn.cropper.setDefaults=U.setDefaults,t.fn.cropper.noConflict=function(){return t.fn.cropper=A,this}});