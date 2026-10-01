/* Tech Prana page transitions: each destination page has its own shape, color and centered label.
   ==== CHANGE THE SPEED HERE (in milliseconds, 1000 = 1 second) ====
   DUR   = how long the color cover takes to sweep in, and again to sweep out. Smaller = snappier.
   HOLD  = how long the new page stays covered before it opens. 0 = opens right away.
   LABEL = show the big page name in the middle (true/false). */
(function(){
var R=document.documentElement,rm=matchMedia('(prefers-reduced-motion:reduce)').matches,DUR=420,HOLD=0,LABEL=true,EASE='cubic-bezier(.7,0,.2,1)',
FULL='inset(0 0 0 0)',
T={ /* c=color, f=text color, l=label, v=shape */
 index:{c:'#ff5a5f',f:'#14112b',l:'Home',v:'up'},
 about:{c:'#5b3df5',f:'#fff',l:'About',v:'circle'},
 services:{c:'#ffc93c',f:'#14112b',l:'What we do',v:'slant'},
 work:{c:'#6ee7c8',f:'#14112b',l:'Work',v:'right'},
 blog:{c:'#14112b',f:'#fff',l:'Insights',v:'down'},
 contact:{c:'#ff5a5f',f:'#14112b',l:'Say hello',v:'iris'}};
var ALIAS={service:'services',project:'work',post:'blog',careers:'about',privacy:'index',search:'blog','404':'index'};
function key(u){var k=(u.split('?')[0].split('/').pop()||'index').replace('.html','');return T[k]?k:(ALIAS[k]||'index')}
function shapes(v,x,y){return{
 up:['inset(100% 0 0 0)',FULL,'inset(0 0 100% 0)'],
 down:['inset(0 0 100% 0)',FULL,'inset(100% 0 0 0)'],
 right:['inset(0 100% 0 0)',FULL,'inset(0 0 0 100%)'],
 iris:['inset(0 50% 0 50%)',FULL,'inset(0 50% 0 50%)'],
 circle:['circle(0px at '+x+'px '+y+'px)','circle(150% at '+x+'px '+y+'px)','circle(0px at '+x+'px '+y+'px)'],
 slant:['polygon(-50% 0,-50% 0,-100% 100%,-100% 100%)','polygon(-50% 0,150% 0,150% 100%,-50% 100%)','polygon(150% 0,150% 0,100% 100%,100% 100%)']}[v]}
/* The label is drawn by CSS (#wp:after in style.css) from these variables, so the OLD and NEW page draw
   exactly the same text in the same font at the same spot: no gap, no redraw, no flicker. */
function vars(c){R.style.setProperty('--wpc',c.c);R.style.setProperty('--wpf',c.f);R.style.setProperty('--wpl',LABEL?'"'+c.l+'"':'""')}
function prep(c){var w=document.getElementById('wp');vars(c);w.style.cssText='transform:none;visibility:visible;background:'+c.c+';color:'+c.f;return w}
/* leaving: sweep the color in, fade the label in, then go to the new page */
document.addEventListener('click',function(e){var a=e.target.closest('a[href]');
 if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.button||a.target||rm)return;
 var u=a.getAttribute('href');if(!/\.html(\?.*)?$/.test(u)||/^https?:/.test(u)||u.split('?')[0]===location.pathname.split('/').pop())return;
 e.preventDefault();var k=key(u),c=T[k],r=a.getBoundingClientRect(),x=e.clientX||r.left+r.width/2,y=e.clientY||r.top+r.height/2,s=shapes(c.v,x,y),w=prep(c);
 w.style.clipPath=s[0];void w.offsetWidth;w.style.transition='clip-path '+DUR+'ms '+EASE;w.style.clipPath=s[1];w.style.setProperty('--lo',1);
 try{sessionStorage.setItem('tp-t',JSON.stringify({k:k,x:x,y:y}))}catch(x){}
 setTimeout(function(){location.href=u},DUR)});
/* arriving: the new page starts already covered WITH the label, then the label fades and the cover leaves */
var st=null;try{st=JSON.parse(sessionStorage.getItem('tp-t'));sessionStorage.removeItem('tp-t')}catch(e){}
if(st&&T[st.k]&&!rm){vars(T[st.k]);R.classList.add('tp-in');
 document.addEventListener('DOMContentLoaded',function(){var c=T[st.k],s=shapes(c.v,st.x,st.y),w=prep(c);w.style.clipPath=s[1];w.style.setProperty('--lo',LABEL?1:0);R.classList.remove('tp-in');
 void w.offsetWidth;setTimeout(function(){w.style.setProperty('--ld','0s');w.style.setProperty('--lo',0);w.style.transition='clip-path '+DUR+'ms '+EASE;w.style.clipPath=s[2];setTimeout(function(){w.style.cssText=''},DUR+50)},HOLD)})}
addEventListener('pageshow',function(e){if(e.persisted){document.getElementById('wp').style.cssText='';R.classList.remove('tp-in')}});
})();
