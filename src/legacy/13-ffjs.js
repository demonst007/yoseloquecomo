/* Legacy block 13 (id="ffjs"), extracted verbatim from reference/original.html. Classic script: shares global scope with the other legacy blocks. */
(function(){
window.ffSel=function(k){try{if(k)localStorage.setItem('ffont',k);else localStorage.removeItem('ffont')}catch(e){}ffApply(k);ffOpen(1)};
window.ffOpen=function(keep){
 if(typeof mnx==='function'&&!keep)mnx();
 const old=document.getElementById('ffm');if(old)old.remove();
 let on=null;try{on=localStorage.getItem('ffont')}catch(e){}
 ffLoadAll();
 const L=[[null,'Actual','Barlow',"'Barlow Condensed'"]].concat(Object.keys(FF).map(k=>[k,FF[k].n,FF[k].d,FF[k].fd||"'Barlow Condensed'"]));
 const d=document.createElement('div');d.className='mdl';d.id='ffm';
 d.style.cssText='position:fixed;left:0;right:0;bottom:0;z-index:600;pointer-events:none;display:flex;justify-content:center';
 d.innerHTML='<div style="pointer-events:auto;width:100%;max-width:560px;background:var(--card);color:var(--ink);border-top:1px solid var(--ln,#8884);border-radius:22px 22px 0 0;padding:14px 14px calc(14px + env(safe-area-inset-bottom,0px));box-shadow:0 -12px 40px -12px rgba(0,0,0,.45)"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><b style="font-size:17px">Tipo de letra</b><button class="g" onclick="document.getElementById(\'ffm\').remove()" style="min-height:0;padding:6px 14px">Cerrar</button></div><div class="mut">Toca una para elegirla. Se aplica al momento en toda la app.</div>'+L.map(x=>'<button class="g" onclick="ffSel('+(x[0]?"\'"+x[0]+"\'":'null')+')" style="display:flex;width:100%;justify-content:space-between;align-items:center;text-align:left;min-height:56px;margin-top:8px;border:'+((on||null)==x[0]?'2px solid var(--t)':'1px solid var(--ln,#8884)')+'"><span><b style="font-size:18px">'+x[1]+'</b><br><span class="mut">'+x[2]+' · 1.240 kcal</span></span><span style="font-size:18px">'+((on||null)==x[0]?'✓':'')+'</span></button>').join('')+'</div>';
 document.body.appendChild(d)
};
})();
