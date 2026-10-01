/* Tech Prana inner pages: reveals, counters, timeline, filters, accordion, forms, transitions */
(function(){
var $=function(s,c){return(c||document).querySelector(s)},all=function(s,c){return[].slice.call((c||document).querySelectorAll(s))},
R=document.documentElement,rm=matchMedia('(prefers-reduced-motion:reduce)').matches,
AR='<svg viewBox="0 0 20 20"><path fill="currentColor" d="M1.667 9.167h13.479l-3.813-3.834L12.5 4.167 18.334 10 12.5 15.833l-1.187-1.166 3.833-3.834H1.666V9.167Z"/></svg>',
HC=['--a','--b','--c','--d'],HF=['#fff','#14112b','#14112b','#14112b'];
/* palette (remembered) */
try{var th=localStorage.getItem('tp-theme');if(th)R.dataset.theme=th}catch(e){}
all('.pal button').forEach(function(b){b.onclick=function(){R.dataset.theme=b.dataset.t;try{localStorage.setItem('tp-theme',b.dataset.t)}catch(e){}}});
/* h1 word-by-word mask reveal + intro fade */
all('.sp').forEach(function(h){var w=h.textContent.trim().split(' ');h.setAttribute('aria-label',h.textContent.trim());
h.innerHTML=w.map(function(x,i){return'<span class="wd" aria-hidden="true"><i style="--i:'+i+'">'+x+'</i></span> '}).join('');
var l=h.parentNode.querySelector('.lead');if(l)l.style.setProperty('--n',w.length)});
/* nav letter roll */
all('.nv a').forEach(function(a){a.innerHTML=a.textContent.split('').map(function(c,i){c=c===' '?'\u00a0':c;return'<span class="cw" aria-hidden="true"><span class="cs" style="transition-delay:'+i*45+'ms"><span>'+c+'</span><span>'+c+'</span></span></span>'}).join('')+'<span class="vh">'+a.textContent+'</span>'});
/* menu */
function mn(o){$('#mn').classList.toggle('o',o);$('#mb').setAttribute('aria-expanded',o);if(o)$('#x').focus()}
$('#mb').onclick=function(){mn(1)};$('#x').onclick=function(){mn(0);$('#mb').focus()};addEventListener('keydown',function(e){if(e.key==='Escape')mn(0)});
/* buttons (icon-origin fill) + cards */
all('.cta-btn').forEach(function(b){var t=b.textContent;b.innerHTML='<span class="tw"><span class="bf o">'+t+'</span><span class="bf d" aria-hidden="true">'+t+'</span></span><span class="ac2" aria-hidden="true"><span class="am2"><span class="as">'+AR+AR+'</span></span></span>'});
all('.cc[data-t]').forEach(function(a,i){var t=a.dataset.t,c=+a.dataset.c||i;a.style.cssText='--hc:var('+HC[c%4]+');--hf:'+HF[c%4];
a.innerHTML='<div class="ib" aria-hidden="true"><i></i><div class="am"><div class="as">'+AR+AR+'</div></div></div><div class="hw"><h3 class="hf o">'+t+'</h3><div class="hf d" aria-hidden="true">'+t+'</div></div><p class="mu">'+a.dataset.d+'</p>'});
/* scroll reveals (once, staggered) */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('iv');io.unobserve(e.target)}})},{threshold:.15});
all('.rv').forEach(function(e){if(e.closest('.ab'))return;var p=e.parentNode,k=all('.rv',p).filter(function(x){return x.parentNode===p}).indexOf(e);e.style.setProperty('--rd',Math.min(k,6)*110+'ms');io.observe(e)});
var ab=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('iv');ab.unobserve(e.target)}})},{threshold:.25});all('.ab').forEach(function(e){ab.observe(e)});
/* counters */
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target,n=+el.dataset.n,t0=performance.now();co.unobserve(el);(function f(t){var k=rm?1:Math.min(1,(t-t0)/1900);el.textContent=Math.round(n*(1-Math.pow(1-k,3)))+(el.dataset.s||'');if(k<1)requestAnimationFrame(f)})(t0)})});
all('[data-n]').forEach(function(e){co.observe(e)});
/* timeline fill + dots */
var pl=$('.pl'),pi=all('.pi'),pf=$('.pf');
function tl(){if(!pl)return;var r=pl.getBoundingClientRect(),y=innerHeight*.6;pi.forEach(function(e){e.classList.toggle('on',rm||e.getBoundingClientRect().top+28<y)});pf.style.height=(rm?r.height-56:Math.max(0,Math.min(r.height-56,y-r.top-28)))+'px'}
/* scroll-driven expanding hero */
var mx=$('#mx'),ms=$('#ms');function ex(){if(!mx)return;var r=ms.getBoundingClientRect(),p=rm?1:Math.max(0,Math.min(1,(innerHeight-r.top)/innerHeight));mx.style.width=(92+p*8)+'%';mx.style.height=(80+p*20)+'vh';mx.style.borderRadius=(24-p*24)+'px'}
addEventListener('scroll',function(){tl();ex()},{passive:true});tl();ex();
/* accordion (services rows, FAQ, careers) */
all('.sr .h').forEach(function(b){b.onclick=function(){var r=b.parentNode,o=!r.classList.contains('o');all('.sr.o',r.parentNode).forEach(function(x){if(x!==r&&x.parentNode===r.parentNode){x.classList.remove('o');x.querySelector('.h').setAttribute('aria-expanded','false')}});r.classList.toggle('o',o);b.setAttribute('aria-expanded',o)}});
/* project filter + load more (no-JS: all links/cards stay visible) */
var g=$('.wk[data-filter]');if(g){var cards=all('a',g),cur='all',more=false,pn=$('.pg');
function show(){g.style.opacity=0;setTimeout(function(){var k=0;cards.forEach(function(c){var ok=cur==='all'||c.dataset.s.split(' ').indexOf(cur)>-1;c.hidden=!ok||(c.hasAttribute('data-late')&&!more);if(!c.hidden){c.style.gridColumn='span '+[7,5,5,7][k%4];k++}});g.style.opacity=1},rm?0:350)}
all('.pills a').forEach(function(a){a.onclick=function(e){e.preventDefault();cur=a.dataset.f;all('.pills a').forEach(function(x){x.setAttribute('aria-current',x===a)});show()}});
if(pn){pn.hidden=true;var lm=document.createElement('p');lm.style.marginTop='36px';lm.innerHTML='<button type="button" class="cta-btn">Load more</button>';g.parentNode.appendChild(lm);var b=lm.firstChild;
b.innerHTML='<span class="tw"><span class="bf o">Load more</span><span class="bf d" aria-hidden="true">Load more</span></span><span class="ac2" aria-hidden="true"><span class="am2"><span class="as">'+AR+AR+'</span></span></span>';b.onclick=function(){more=true;lm.hidden=true;show()}}
var q=/[?&]cat=(\w+)/.exec(location.search);if(q){var a=$('.pills a[data-f="'+q[1]+'"]');if(a)a.click()}else show()}
/* forms: validate, no reload */
all('form[data-form]').forEach(function(f){f.setAttribute('novalidate','');f.onsubmit=function(e){e.preventDefault();var bad=0,first;
all('[required]',f).forEach(function(i){var er=$('#'+i.id+'-e'),v=i.type==='checkbox'?i.checked:i.value.trim(),m='';
if(!v)m=i.dataset.m||'Please fill this in.';else if(i.type==='email'&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v))m='Please enter a valid email.';
i.setAttribute('aria-invalid',!!m);if(er)er.textContent=m;if(m){bad=1;first=first||i}});
if(bad){first.focus();return}var h=$('.fd input',f);if(h&&h.value)return;var ok=$('.ok',f);ok.hidden=false;ok.focus();f.reset()}});
/* cursor with "View" label */
var cu=$('#cu');addEventListener('mousemove',function(e){cu.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)';var v=e.target.closest('[data-cur]'),gr=e.target.closest('a,button');cu.classList.toggle('g',!!gr&&!v);cu.classList.toggle('v',!!v);cu.textContent=v?v.dataset.cur:''});
})();
