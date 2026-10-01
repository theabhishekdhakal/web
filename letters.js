/* Hero title hover: every letter rolls to a colored copy. Colors: edit the list below (any --a --b --c --d). */
(function(){
var COLORS=['--a','--b'];
[].slice.call(document.querySelectorAll('.sp')).forEach(function(h){
 if(!h.hasAttribute('aria-label'))h.setAttribute('aria-label',h.textContent.replace(/\s+/g,' ').trim());
 [].slice.call(h.querySelectorAll('.wd i')).forEach(function(w,wi){
  w.innerHTML=w.textContent.split('').map(function(ch,i){return'<span class="lt" style="--lc:var('+COLORS[(i+wi)%COLORS.length]+')"><span class="o">'+ch+'</span><span class="n" aria-hidden="true">'+ch+'</span></span>'}).join('')});
});
})();
