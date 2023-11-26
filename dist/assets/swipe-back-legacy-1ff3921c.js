System.register(["./App-legacy-72c02e9e.js","./index-legacy-df0c1cbd.js"],(function(t,e){"use strict";var n,r,s;return{setters:[t=>{n=t.w,r=t.x,s=t.y},null],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
t("createSwipeBackGesture",((t,e,i,c,o)=>{const a=t.ownerDocument.defaultView;let l=n(t);const u=t=>l?-t.deltaX:t.deltaX;return r({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:r=>(l=n(t),(t=>{const{startX:e}=t;return l?e>=a.innerWidth-50:e<=50})(r)&&e()),onStart:i,onMove:t=>{const e=u(t)/a.innerWidth;c(e)},onEnd:t=>{const e=u(t),n=a.innerWidth,r=e/n,i=(t=>l?-t.velocityX:t.velocityX)(t),c=i>=0&&(i>.2||e>n/2),d=(c?1-r:r)*n;let h=0;if(d>5){const t=d/Math.abs(i);h=Math.min(t,540)}o(c,r<=0?.01:s(0,r,.9999),h)}})}))}}}));
