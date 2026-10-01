/* Tech Prana nav: shrinks into a floating pill on scroll, hides on scroll down, returns on scroll up, sliding hover pill */
(function(){
var sync=function(){};var h=document.querySelector('header'),nv=document.querySelector('.nv'),mn=document.getElementById('mn'),last=scrollY,tick=0;
if(!h)return;
var was=false;function u(){tick=0;var y=scrollY,s=y>40;h.classList.toggle('stuck',s);var mx=document.documentElement.scrollHeight-innerHeight;h.style.setProperty('--p',mx>0?Math.min(1,y/mx):0);if(s!==was){was=s;sync()}}
addEventListener('scroll',function(){if(!tick){tick=1;requestAnimationFrame(u)}},{passive:true});u();
if(!nv)return;
var ind=document.createElement('span');ind.className='nvi';ind.setAttribute('aria-hidden','true');nv.appendChild(ind);
var links=[].slice.call(nv.querySelectorAll('a')),act=nv.querySelector('a.on,a[aria-current]');
var cur=null;function to(a){cur=a;if(!a){ind.style.opacity=0;return}
 if(ind.style.opacity!=='1'){ind.style.transition='none';ind.style.width=a.offsetWidth+'px';ind.style.transform='translateX('+a.offsetLeft+'px)';void ind.offsetWidth;ind.style.transition=''}
 ind.style.opacity=1;ind.style.width=a.offsetWidth+'px';ind.style.transform='translateX('+a.offsetLeft+'px)'}
sync=function(){var t0=performance.now();ind.style.transition='none';(function f(t){if(cur){ind.style.width=cur.offsetWidth+'px';ind.style.transform='translateX('+cur.offsetLeft+'px)'}if(t-t0<900)requestAnimationFrame(f);else ind.style.transition=''})(t0)};
links.forEach(function(a){a.addEventListener('mouseenter',function(){to(a)});a.addEventListener('focus',function(){to(a)})});
nv.addEventListener('mouseleave',function(){to(act)});nv.addEventListener('focusout',function(){to(act)});
addEventListener('resize',function(){to(act)});addEventListener('load',function(){to(act)});to(act);
})();
