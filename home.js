
var $=function(s){return document.querySelector(s)},all=function(s){return[].slice.call(document.querySelectorAll(s))},R=document.documentElement,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var S=[["Websites and WordPress","Fast, editable sites and custom themes that are easy to run."],["Custom software","Web apps and internal tools built around how you work."],["AI and automation","Chatbots, workflows and reports that give your team hours back."],["UI and UX design","Clear interfaces tested with real users before we build."],["Cloud and DevOps","Reliable hosting, backups and security you don't have to think about."],["Support and care","Updates, monitoring and quick fixes after launch."]];
var HC=["--a","--b","--c","--d"],HF=["#fff","#14112b","#14112b","#14112b"];
all('[data-ac]').forEach(function(e){e.innerHTML=S.slice(0,+e.dataset.ac).map(function(s,i){return'<div class="it" tabindex="0" role="button" style="--hc:var('+HC[i%4]+');--hf:'+HF[i%4]+'"><div><h3>'+s[0]+'</h3><span class="ar">+</span></div><div class="pn"><p>'+s[1]+'</p></div></div>'}).join('');});
document.addEventListener('click',function(e){var i=e.target.closest('.it');if(i)i.classList.toggle('o')});
document.addEventListener('keydown',function(e){if(e.key==='Enter'&&e.target.classList.contains('it'))e.target.classList.toggle('o')});
var C=["--a","--b","--c","--d"],W=[["Northwind store","E-commerce rebuild"],["Kaveri Labs portal","Custom web app"],["Brightpath","Brand and website"],["Orbit Health","Booking platform"],["Lumen Retail","AI product search"],["Atlas Legal","Client dashboard"]];
all('[data-wk]').forEach(function(e){e.innerHTML=W.slice(0,+e.dataset.wk).map(function(w,i){return'<a href="contact.html"><div class="th" style="--x:var('+C[(i+1)%4]+');--y:var('+C[(i+2)%4]+');--z:var('+C[i%4]+')"></div><h3>'+w[0]+'</h3><p>'+w[1]+'</p></a>'}).join('')});
if($('[data-bl]'))$('[data-bl]').innerHTML=[["Choosing a CMS in 2026","Web","4 min"],["Five small automations that save a week","AI","6 min"],["What a good handover looks like","Process","3 min"],["Why fast sites win more customers","Performance","5 min"]].map(function(b){return'<a class="bp" href="blog.html"><span>'+b[1]+'<br>'+b[2]+'</span><h3>'+b[0]+'</h3><h3>→</h3></a>'}).join('');
if($('[data-team]'))$('[data-team]').innerHTML=["Founder","Design lead","Engineering lead","Client success"].map(function(r,i){return'<div class="t t'+'abcd'[i]+'" style="min-height:220px"><div class="av" style="--x:var(--ink);opacity:.85"></div><div><h3>Name Surname</h3><p>'+r+'</p></div></div>'}).join('');
var m=$('[data-mq]'),nm=m.dataset.mq.split('|').map(function(x){return'<span>'+x+'</span><b>✺</b>'}).join('');m.innerHTML='<div>'+nm+nm+nm+nm+'</div>';
var sp=$('.sp');sp.innerHTML=sp.textContent.split(' ').map(function(w,i){return'<span class="wd"><i style="--i:'+i+'">'+w+'</i></span> '}).join('');
all('.sp').forEach(function(h){if(h.querySelector('.wd'))return;h.innerHTML=h.textContent.split(' ').map(function(w,i){return'<span class="wd"><i style="--i:'+i+'">'+w+'</i></span> '}).join('')});
var st=$('#st');st.innerHTML=st.textContent.split(' ').map(function(w){return'<span>'+w+'</span> '}).join('');var sw=all('#st span');
function scrub(){if(rm)return;var r=st.getBoundingClientRect(),vh=innerHeight,p=Math.max(0,Math.min(1,(vh*.85-r.top)/(r.height+vh*.25)));sw.forEach(function(s,i){s.style.opacity=i<p*sw.length?1:.18})}
addEventListener('scroll',scrub,{passive:true});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting||e.target.done)return;var el=e.target,n=+el.dataset.n,t0=performance.now();el.done=1;(function f(t){var k=rm?1:Math.min(1,(t-t0)/1900);el.textContent=Math.round(n*(1-Math.pow(1-k,3)))+el.dataset.s;if(k<1)requestAnimationFrame(f)})(t0)})});
all('[data-n]').forEach(function(e){io.observe(e)});
scrub();ex();pr();
function mn(o){$('#mn').classList.toggle('o',o);$('#mb').setAttribute('aria-expanded',o)}
$('#mb').onclick=function(){mn(1)};$('#x').onclick=function(){mn(0)};
try{var th=localStorage.getItem('tp-theme');if(th)R.dataset.theme=th}catch(e){}
all('.pal button').forEach(function(b){b.onclick=function(){R.dataset.theme=b.dataset.t;try{localStorage.setItem('tp-theme',b.dataset.t)}catch(e){}}});

var hero=$('.hero'),cv=$('#dg'),gx=cv.getContext('2d'),W=0,H=0,DP=Math.min(devicePixelRatio||1,2),M={cx:-999,cy:-999,m:0},
/* PULSE FIELD: needles that flow like a current, swirl around the cursor and ripple like a heartbeat */
PT={x:0,y:0,s:.45,init:0},RG=[],lastBeat=-9999,act=0,CL=null,cf=0,still=0,
hex=function(h){h=(h||'#000').trim().replace('#','');if(h.length===3)h=h.replace(/./g,'$&$&');var n=parseInt(h,16);return[n>>16&255,n>>8&255,n&255]},
mix=function(p,q,k){return[p[0]+(q[0]-p[0])*k,p[1]+(q[1]-p[1])*k,p[2]+(q[2]-p[2])*k]},
rgba=function(c,a){return'rgba('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+','+a+')'};
function fit(){var r=hero.getBoundingClientRect();W=r.width;H=r.height;cv.width=W*DP;cv.height=H*DP;gx.setTransform(DP,0,0,DP,0,0);still=0}
addEventListener('pointermove',function(e){M.cx=e.clientX;M.cy=e.clientY;M.m=!rm&&e.pointerType!=='touch';act=!rm});
addEventListener('pointerdown',function(e){if(rm)return;M.cx=e.clientX;M.cy=e.clientY;act=1;var r=hero.getBoundingClientRect();
if(e.clientY>r.top&&e.clientY<r.bottom&&!(e.target.closest&&e.target.closest('a,button')))RG.push({x:e.clientX-r.left,y:e.clientY-r.top,t:performance.now(),a:1.15})});
addEventListener('pointerup',function(e){if(e.pointerType==='touch')act=0});
R.addEventListener('mouseleave',function(){act=0});
(function L(t){requestAnimationFrame(L);
if(hero.offsetParent===null)return;var r=hero.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;
if(Math.abs(r.width-W)>1||Math.abs(r.height-H)>1)fit();
if(rm&&still)return;
if(!CL||cf++%20===0){var cs=getComputedStyle(R);CL={t:hex(cs.getPropertyValue('--tx')),a:hex(cs.getPropertyValue('--a')),b:hex(cs.getPropertyValue('--b')),c:hex(cs.getPropertyValue('--c'))};CL.k=CL.t[0]>140?CL.c:CL.b}
var tm=rm?0:t,ins=act&&M.cy>r.top&&M.cy<r.bottom&&M.cx>r.left&&M.cx<r.right,
gxp=W*.6+Math.cos(tm*.00021)*W*.24,gyp=H*.42+Math.sin(tm*.00033)*H*.22,
tx=ins?M.cx-r.left:gxp,ty=ins?M.cy-r.top:gyp,ts=rm?0:(ins?1:.45);
if(!PT.init){PT.x=tx;PT.y=ty;PT.init=1}
PT.x+=(tx-PT.x)*.1;PT.y+=(ty-PT.y)*.1;PT.s+=(ts-PT.s)*.06;
if(!rm&&t-lastBeat>4600){lastBeat=t;RG.push({x:W*.78,y:H*.42,t:t,a:1},{x:W*.78,y:H*.42,t:t+240,a:.6})}
RG=RG.filter(function(g){return t-g.t<1900});
gx.clearRect(0,0,W,H);
if(PT.s>.01){var gr=gx.createRadialGradient(PT.x,PT.y,0,PT.x,PT.y,260);gr.addColorStop(0,rgba(CL.a,.2*PT.s));gr.addColorStop(1,rgba(CL.a,0));gx.fillStyle=gr;gx.fillRect(PT.x-260,PT.y-260,520,520)}
gx.lineCap='round';
RG.forEach(function(g){var age=t-g.t;if(age<0)return;gx.strokeStyle=rgba(CL.k,(.4*(1-age/1900)*g.a).toFixed(3));gx.lineWidth=1.5;gx.beginPath();gx.arc(g.x,g.y,age*.42,0,6.283);gx.stroke()});
var G=W<640?34:30,R0=240,n=Math.ceil(W/G)+1,m=Math.ceil(H/G)+1;
for(var i=0;i<n;i++)for(var j=0;j<m;j++){
var x=i*G+(j&1)*G*.5,y=j*G+G*.5,nx=x/W,
a0=Math.sin(x*.0042+tm*.00035)*1.3+Math.cos(y*.0052-tm*.0003)*1.3+nx*.5,
sx=Math.cos(2*a0),sy=Math.sin(2*a0),dx=x-PT.x,dy=y-PT.y,d=Math.hypot(dx,dy)||1,
f=PT.s*Math.max(0,1-d/R0),rg=0;f=f*f*(3-2*f);
if(f>.001){var ac=Math.atan2(dy,dx)+1.5708;sx+=Math.cos(2*ac)*f*3;sy+=Math.sin(2*ac)*f*3}
for(var q=0;q<RG.length;q++){var g=RG[q],age=t-g.t;if(age<0)continue;var ex=x-g.x,ey=y-g.y,z=(Math.hypot(ex,ey)-age*.42)/55,s=Math.exp(-z*z)*(1-age/1900)*g.a;
if(s>.02){var ar=Math.atan2(ey,ex);sx+=Math.cos(2*ar)*s*3;sy+=Math.sin(2*ar)*s*3;if(s>rg)rg=s}}
rg=Math.min(1,rg);
var th=Math.atan2(sy,sx)/2,hl=G*(.16+.3*f+.3*rg),cx=Math.cos(th)*hl,cy=Math.sin(th)*hl,
w=Math.sin(Math.hypot(x-W*.78,y-H*.42)*.012-tm*.0011),
al=(.1+.42*Math.min(1,nx/.85))*(.8+.2*w);al=Math.min(1,al+f*.8+rg*.7);
var cc=f<.5?mix(CL.t,CL.a,f*2):mix(CL.a,CL.b,(f-.5)*2);if(rg>.02)cc=mix(cc,CL.k,Math.min(1,rg*1.6));
gx.strokeStyle=rgba(cc,al.toFixed(3));gx.lineWidth=1.6+f*1.4+rg*1.2;gx.beginPath();gx.moveTo(x-cx,y-cy);gx.lineTo(x+cx,y+cy);gx.stroke()}
still=rm?1:0})(0);
var cu=$('#cu');addEventListener('mousemove',function(e){cu.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)';cu.classList.toggle('g',!!e.target.closest('a,button,.it'))});
var AR='<svg viewBox="0 0 20 20"><path fill="currentColor" d="M1.667 9.167h13.479l-3.813-3.834L12.5 4.167 18.334 10 12.5 15.833l-1.187-1.166 3.833-3.834H1.666V9.167Z"/></svg>';
all('.nv a').forEach(function(a){a.innerHTML=a.textContent.split('').map(function(c,i){c=c===' '?'\u00a0':c;return'<span class="cw"><span class="cs" style="transition-delay:'+i*45+'ms"><span>'+c+'</span><span>'+c+'</span></span></span>'}).join('')});
$('[data-cd]').innerHTML=S.slice(0,4).map(function(s,i){return'<a class="cc" href="services.html" style="--hc:var('+HC[i%4]+');--hf:'+HF[i%4]+'"><div class="ib"><i></i><div class="am"><div class="as">'+AR+AR+'</div></div></div><div class="hw"><div class="hf o">'+s[0]+'</div><div class="hf d">'+s[0]+'</div></div><p class="mu" style="margin:0">'+s[1]+'</p></a>'}).join('');
all('.cta-btn').forEach(function(b){var t=b.textContent;b.innerHTML='<span class="tw"><span class="bf o">'+t+'</span><span class="bf d">'+t+'</span></span><span class="ac2"><span class="am2"><span class="as">'+AR+AR+'</span></span></span>'});

var ms=$('#ms'),mx=$('#mx');function ex(){if(!ms||ms.offsetParent===null)return;var r=ms.getBoundingClientRect(),p=rm?1:Math.max(0,Math.min(1,(innerHeight-r.top)/innerHeight));mx.style.width=(92+p*8)+'%';mx.style.height=(80+p*20)+'vh';mx.style.borderRadius=(24-p*24)+'px'}
addEventListener('scroll',ex,{passive:true});ex();
var pl=$('#pl'),pi=all('.pi'),pf=$('#pf');function pr(){if(!pl||pl.offsetParent===null)return;var r=pl.getBoundingClientRect(),y=innerHeight*.6;pi.forEach(function(e){e.classList.toggle('on',rm||e.getBoundingClientRect().top+28<y)});pf.style.height=Math.max(0,Math.min(r.height-56,y-r.top-28))+'px'}
addEventListener('scroll',pr,{passive:true});pr();
var bub=$('.bub'),bx=0,by=0;(function B(){if(!rm&&bub.offsetParent!==null){var tx=M.m?(M.cx/innerWidth-.5)*40:0,ty=M.m?(M.cy/innerHeight-.5)*40:0;bx+=(tx-bx)*.05;by+=(ty-by)*.05;bub.style.translate=bx+'px '+by+'px'}requestAnimationFrame(B)})();
