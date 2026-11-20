/* Legacy block 12 (id="wmtr"), extracted verbatim from reference/original.html. Classic script: shares global scope with the other legacy blocks. */
(function(){let pend=null,tm=null;
const cur=()=>[0,1,2,3].find(k=>{const b=document.getElementById('b'+k);return b&&b.classList.contains('on')});
window.trRun=function(type,mid,dir){
 const v=document.getElementById('v'),w=document.getElementById('wmk');
 if(type==='none'||!v||(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)){mid();return}
 if(type==='glow'){if(w){w.classList.remove('wmf');void w.offsetWidth;w.classList.add('wmf')}setTimeout(mid,300);return}
 const d=dir||1,o={fade:'',slide:'translateX('+(-22*d)+'px)',zoom:'scale(.96)'}[type]||'',n={fade:'',slide:'translateX('+(22*d)+'px)',zoom:'scale(1.03)'}[type]||'';
 v.style.transition='opacity .16s ease,transform .16s ease';v.style.opacity='0';v.style.transform=o;
 setTimeout(()=>{mid();v.style.transition='none';v.style.transform=n;void v.offsetWidth;v.style.transition='opacity .22s ease,transform .22s ease';v.style.opacity='';v.style.transform='';setTimeout(()=>{v.style.transition=''},260)},170)
};
window.tgo=function(i){
 const c=cur();
 if(i===c){if(pend!==null){pend=null;return}return go(i)}
 pend=i;if(tm)return;tm=1;
 trRun(S.trn||'glow',()=>{const x=pend;pend=null;tm=null;if(x!==null)go(x)},i>c?1:-1)
};
window.trSel=function(k){S.trn=k;save();trOpen();trRun(k,()=>{},1)};
window.trOpen=function(){
 if(typeof mnx==='function')mnx();
 const old=document.getElementById('trm');if(old)old.remove();
 const on=S.trn||'glow';
 const L=[['glow','Brillo del logo','Destello suave de la marca de agua'],['fade','Desvanecer','La pantalla se funde'],['slide','Deslizar','La pantalla se desliza al lado'],['zoom','Zoom suave','Aparece con un ligero zoom'],['none','Ninguna','Cambio instantáneo']];
 const d=document.createElement('div');d.className='mdl';d.id='trm';
 d.style.cssText='position:fixed;left:0;right:0;bottom:0;z-index:600;pointer-events:none;display:flex;justify-content:center';
 d.innerHTML='<div style="pointer-events:auto;width:100%;max-width:560px;background:var(--card);color:var(--ink);border-top:1px solid var(--ln,#8884);border-radius:22px 22px 0 0;padding:14px 14px calc(14px + env(safe-area-inset-bottom,0px));box-shadow:0 -12px 40px -12px rgba(0,0,0,.45)"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><b style="font-size:17px">Transición de pestañas</b><button class="g" onclick="document.getElementById(\'trm\').remove()" style="min-height:0;padding:6px 14px">Cerrar</button></div><div class="mut">Toca una para elegirla y verla al momento.</div>'+L.map(x=>'<button class="g" onclick="trSel(\''+x[0]+'\')" style="display:flex;width:100%;justify-content:space-between;align-items:center;text-align:left;min-height:52px;margin-top:8px;border:'+(on==x[0]?'2px solid var(--t)':'1px solid var(--ln,#8884)')+'"><span><b>'+x[1]+'</b><br><span class="mut">'+x[2]+'</span></span><span style="font-size:18px">'+(on==x[0]?'✓':'')+'</span></button>').join('')+'</div>';
 document.body.appendChild(d)
};
})();
