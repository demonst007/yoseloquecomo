/* Legacy block 10 (id="calmajs"), extracted verbatim from reference/original.html. Classic script: shares global scope with the other legacy blocks. */
(function(){
const CT=[
{i:'sus',e:'😮‍💨',n:'Suspiro fisiológico',s:'Bajar revoluciones rápido',ph:[['Inspira por la nariz',2.5,1.3],['Otra inspiración corta',1.2,1.5],['Suelta despacio por la boca',6,1]]},
{i:'r46',e:'🌬️',n:'Respiración 4-6',s:'La básica del día a día',ph:[['Inspira',4,1.5],['Suelta',6,1]]},
{i:'cj',e:'⬜',n:'Caja 4-4-4-4',s:'Para centrarte',ph:[['Inspira',4,1.5],['Aguanta',4,1.5],['Suelta',4,1],['Aguanta',4,1]]},
{i:'r478',e:'🌙',n:'4-7-8',s:'Para dormir',ph:[['Inspira',4,1.5],['Aguanta',7,1.5],['Suelta',8,1]]},
{i:'rmp',e:'💪',n:'Relajación muscular',s:'8 min · de pies a cara',g:1},
{i:'esc',e:'🧘',n:'Escaneo corporal',s:'5 min · antes de dormir',g:1}];
const MZ=['los pies','los gemelos','los muslos','los glúteos','el abdomen','el pecho','las manos','los antebrazos','los brazos','los hombros','el cuello','la mandíbula','la frente y los ojos'];
const SZ=['Nota cómo el cuerpo se apoya y suelta el peso','Pies','Piernas','Caderas y glúteos','Abdomen','Pecho y espalda','Manos y brazos','Hombros y cuello','Cara y mandíbula','Todo el cuerpo a la vez'];
const gph=i=>i=='rmp'?MZ.flatMap(z=>[['Tensa '+z,7,1.25],['Suelta y nota la diferencia',30,1]]):SZ.map((z,k)=>[k?'Lleva la atención a: '+z:z,30,1]);
const g=()=>{S.cm=S.cm||{};S.cm.lg=S.cm.lg||{};S.cm.d=S.cm.d||3;S.cm.r=S.cm.r||{on:0,h:22};return S.cm};
let sel='r46',ses=null;
const iso=t=>new Date(t).toISOString().slice(0,10);
const days=()=>{const l=g().lg;return Object.keys(l).filter(k=>l[k]>=60)};
window.calN=()=>days().length;
function streak(){const l=g().lg;let t=Date.parse(td()),c=0;if(!(l[td()]>=60))t-=864e5;while(l[iso(t)]>=60){c++;t-=864e5}return c}
function wk(){const t=Date.parse(td()),dw=(new Date(t).getUTCDay()+6)%7,l=g().lg;return[...Array(7)].map((_,i)=>({s:l[iso(t-(dw-i)*864e5)]||0}))}
function body(){const m=g(),W=wk(),tot=Math.round(W.reduce((a,x)=>a+x.s,0)/60),t=CT.find(x=>x.i==sel),st=streak();
return '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'+CT.map(x=>'<button class="g" style="text-align:left;padding:10px;'+(x.i==sel?'border:2px solid var(--t)':'')+'" onclick="calSel(\''+x.i+'\')"><span style="font-size:20px">'+x.e+'</span><br><b style="font-size:14px">'+x.n+'</b><br><span class="mut" style="font-size:12.5px">'+x.s+'</span></button>').join('')+'</div>'
+(t.g?'':'<div class="row" style="gap:6px;margin:10px 0 0;align-items:center"><span class="mut" style="font-size:13px">Duración</span>'+[1,3,5,10].map(x=>'<button class="g" style="padding:6px 12px;'+(m.d==x?'border:2px solid var(--t)':'')+'" onclick="calDur('+x+')">'+x+' min</button>').join('')+'</div>')
+'<button style="width:100%;margin-top:10px;padding:12px;font-size:16px" onclick="calGo()">▶ Empezar: '+t.n+'</button>'
+'<div style="display:flex;gap:5px;margin:12px 0 4px">'+W.map((x,i)=>'<div style="flex:1;text-align:center"><div style="height:26px;border-radius:8px;background:'+(x.s>=60?'var(--ok)':'color-mix(in srgb,var(--ink) 12%,transparent)')+'"></div><small class="mut" style="font-size:11.5px">'+'LMXJVSD'[i]+'</small></div>').join('')+'</div>'
+'<div class="mut" style="font-size:13px">Esta semana: <b>'+tot+' min</b> · racha de <b>'+st+'</b> '+(st==1?'día':'días')+'. Cuenta cada día con 1 min o más.</div>'
+'<label style="display:flex;align-items:center;gap:8px;margin-top:10px;font-size:14px;flex-wrap:wrap"><input type="checkbox" '+(m.r.on?'checked ':'')+'onchange="calRem(this.checked)"> Recordarme en Pendientes desde las <select onchange="calHr(this.value)" style="padding:4px">'+[20,21,22,23].map(h=>'<option value="'+h+'"'+(m.r.h==h?' selected':'')+'>'+h+':00</option>').join('')+'</select></label>'}
function card(){try{const tot=Math.round(wk().reduce((a,x)=>a+x.s,0)/60),st=streak();return plC('ca','🧘 Calma',tot+' min esta semana · racha '+st,body())}catch(e){return ''}}
const re=()=>{const b=document.getElementById('pcb_ca');if(b)b.innerHTML=body()};
window.calSel=i=>{sel=i;re()};window.calDur=x=>{g().d=x;save();re()};
window.calRem=v=>{g().r.on=v?1:0;save()};window.calHr=v=>{g().r.h=+v;save()};
const vib=n=>{try{navigator.vibrate&&navigator.vibrate(n)}catch(e){}};
window.calQ=(i,m)=>{if(ses)return;const o=g(),d=o.d;sel=i;o.d=m;calGo();o.d=d};
window.calGo=()=>{if(ses)return;const t=CT.find(x=>x.i==sel),ph=t.g?gph(t.i):t.ph,L=ph.reduce((a,p)=>a+p[1],0),tot=t.g?L:g().d*60;
const o=document.createElement('div');o.id='calz';o.style.cssText='position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:26px;padding:24px;text-align:center;color:#eaf1ff;background:radial-gradient(circle at 50% 38%,#17306b,#0a1226 70%)';
o.innerHTML='<button onclick="calEnd(1)" style="position:absolute;top:calc(14px + env(safe-area-inset-top,0px));right:16px;background:rgba(255,255,255,.12);color:#fff;border:0;border-radius:50%;width:42px;height:42px;font-size:20px">✕</button><div style="font-size:15px;opacity:.7">'+t.e+' '+t.n+'</div><div style="width:200px;height:200px;display:flex;align-items:center;justify-content:center"><div id="calc" style="width:160px;height:160px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#9cc4ff,#3b6fe0 70%);box-shadow:0 0 60px #3b6fe099;transform:scale(1);transition:transform 1s ease-in-out"></div></div><div id="calt" style="font-size:30px;font-weight:800;line-height:1.2;min-height:76px"></div><div id="cals" style="font-size:44px;font-weight:800;font-variant-numeric:tabular-nums"></div><div id="calr" style="font-size:15px;opacity:.65"></div>';
document.body.appendChild(o);try{navigator.wakeLock&&navigator.wakeLock.request('screen').then(w=>{ses&&(ses.wl=w)}).catch(()=>{})}catch(e){}
ses={ph,L,tot,t0:Date.now(),k:-1,g:t.g};
ses.iv=setInterval(()=>{const e=(Date.now()-ses.t0)/1e3;if(e>=ses.tot){calEnd(0);return}
let p=ses.g?e:e%ses.L,k=0,a=0;for(;k<ph.length;k++){if(p<a+ph[k][1])break;a+=ph[k][1]}if(k>=ph.length)k=ph.length-1;
const P=ph[k],c=document.getElementById('calc');
if(ses.k!==k||ses.g&&ses.k!==k){ses.k=k;document.getElementById('calt').textContent=P[0];c.style.transition='transform '+(ses.g?2:P[1])+'s ease-in-out';c.style.transform='scale('+P[2]+')';vib(25)}
document.getElementById('cals').textContent=Math.max(1,Math.ceil(a+P[1]-p));
const r=Math.ceil(ses.tot-e);document.getElementById('calr').textContent='Quedan '+Math.floor(r/60)+':'+String(r%60).padStart(2,'0')},200)};
window.calEnd=x=>{if(!ses)return;const s=ses;ses=null;clearInterval(s.iv);try{s.wl&&s.wl.release()}catch(e){}
const e=Math.min(Math.round((Date.now()-s.t0)/1e3),s.tot),z=document.getElementById('calz');
if(e>=30){const m=g(),t=td();m.lg[t]=(m.lg[t]||0)+e;save()}
if(x||!z){z&&z.remove();try{semana()}catch(_){}return}
vib([60,60,60]);z.innerHTML='<div style="font-size:52px">🌿</div><div style="font-size:28px;font-weight:800">Hecho</div><div style="font-size:16px;opacity:.75">'+Math.round(e/60)+' min de calma</div><button onclick="document.getElementById(\'calz\').remove();semana()" style="padding:12px 28px;font-size:16px">Cerrar</button>'};
const _c=window.semana;window.semana=function(){const r=_c.apply(this,arguments);try{if(!document.getElementById('pch_ca')){const a=document.getElementById('pch_pr'),c=a&&a.closest('.card'),h=card();if(c)c.insertAdjacentHTML('afterend',h);else{const f=$('v').firstElementChild;f?f.insertAdjacentHTML('afterend',h):$('v').insertAdjacentHTML('afterbegin',h)}}}catch(e){}return r};
})();
