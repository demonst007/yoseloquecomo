/* Legacy block 08, extracted verbatim from reference/original.html. Classic script: shares global scope with the other legacy blocks. */
let PROT=155,GT=70;const D=[['Empuje',2650],['Tracción',2700],['Torso',2700],['Cuádriceps y Gemelo',2800],['Femoral',2750],['Cardio',2400],['Descanso',2450],['Abdominales',2500]];const DS=D.find(d=>d[0]=='Descanso');function mig5(){let ch=0;Object.keys(S.gh||{}).forEach(k=>{const a=S.gh[k].filter(x=>x.kg||x.r);if(a.length!=S.gh[k].length){ch=1;if(a.length)S.gh[k]=a;else delete S.gh[k]}});if(ch)save();if(S.v5)return;const g=gE(),o={};Object.keys(g).forEach(k=>{let n=k;if(/cu[aá]dr/i.test(k))n='Cuádriceps y Gemelo';else if(/femor/i.test(k))n='Femoral';if(n!=k)mg(k+'|',n+'|');o[n]=g[k]});if(!o.Torso)o.Torso=[];const r={};['Empuje','Tracción','Torso','Cuádriceps y Gemelo','Femoral'].forEach(k=>{if(o[k])r[k]=o[k]});Object.keys(o).forEach(k=>{if(!r[k])r[k]=o[k]});S.ge=r;S.v5=1;save()}
const mtg=d=>{const t=S.t[d]||'Descanso';return (D.find(z=>z[0]==t)||DS)[1]+cAdj(d,t)};
let RM={};
const OB=[[-0.5,'Bajar 0,5 kg/semana (recomendado)'],[-0.8,'Bajar 0,8 kg/semana'],[-1,'Bajar 1 kg/semana (agresivo)'],[0,'Mantener peso'],[0.25,'Ganar 0,25 kg/semana (recomendado)'],[0.5,'Ganar 0,5 kg/semana']];
const tgt=m=>Math.max(1500,Math.round((m+1100*(S.obj??-0.5))/10)*10);
const G={
'Empuje':[
['Press superior en máquina de discos',80,8,0,3,['Press superior con mancuernas','Press superior en máquina Smith','Press en máquina de placas']],
['Máquina de fondos',140,8,0,3,['Fondos en paralelas (con o sin peso)']],
['Cruces de polea',0,0,0,3,['Aperturas con mancuernas','Pec deck en máquina de placas']],
['Press de hombro en máquina de discos',60,8,0,3,['Press de hombro en máquina de placas','Press de hombro con mancuernas','Press de hombro en máquina Smith']],
['Elevaciones laterales en polea',5,12,1,3,['Elevaciones laterales con mancuernas']],
['Jalón de tríceps con cuerda',15,8,1,3,[]],
['Francés con mancuernas tumbado en banco',10,10,1,3,['Tirón katana con polea','Tirón por detrás de la cabeza unilateral con mancuerna']]],
'Tracción':[
['Remo en T',50,8,0,3,['Remo con barra']],
['Jalón al pecho con agarre neutro',80,8,0,3,['Dominadas']],
['Remo en máquina Technogym',50,8,0,3,['Remo con mancuerna']],
['Cruces en polea posterior',5,10,1,3,['Pec deck inverso en máquina de placas (deltoides posterior)']],
['Curl predicador sentado en banco',7.5,10,1,3,['Curl predicador en máquina Technogym']],
['Martillo con mancuernas sentado alterno',12,8,1,3,['Martillo con cuerda en polea']]],
'Cuádriceps y gemelo':[
['Extensiones de cuádriceps en máquina Technogym',80,8,0,3,['Extensiones en máquina de placas']],
['Hack con goma (kg por lado)',40,8,0,3,[]],
['Prensa inclinada (kg por lado)',80,0,0,3,[]],
['Búlgaras',10,10,0,3,['Prensa a una pierna']],
['Elevaciones de gemelo en máquina Technogym',40,0,1,4,[]]],
'Femoral':[
['Peso muerto con barra hexagonal (kg por lado)',40,8,0,3,['Peso muerto unilateral con pesa rusa']],
['Femoral tumbado en Hammer Strength (kg por lado)',15,8,0,3,['Femoral tumbado en máquina de placas']],
['Femoral sentado en máquina de placas',0,0,1,3,[]],
['Hip thrust en máquina Technogym',40,8,0,3,[]],
['Glúteo en máquina de discos',100,0,1,3,[]],
['Abductor',0,0,1,3,[]]],
'Abdominales':[['Elevaciones de piernas colgado',0,0,1,3,[]],['Crunch tumbado con peso',0,0,1,3,[]]]};
const MD=[['Cuello','Por debajo de la nuez, cinta horizontal, cabeza recta.'],['Pecho','A la altura de los pezones, brazos relajados, tras soltar el aire.'],['Cintura','A la altura del ombligo, relajado, tras soltar el aire.'],['Cadera','En la parte más ancha de los glúteos.'],['Bíceps','Brazo relajado, en lo más grueso, a medio camino entre hombro y codo.'],['Muslo','De pie, en lo más grueso, a mitad entre ingle y rodilla.'],['Gemelo','De pie, en lo más grueso de la pantorrilla.']];

function sgw(){S.gw=num($('gw').value);save();peso()}
function goalCard(W){const gw=S.gw,l=W[W.length-1];if(!l)return '';let t=`<div class="card"><b>🎯 Peso objetivo</b><div class="row" style="margin-top:8px"><input id="gw" inputmode="decimal" placeholder="kg" value="${gw||''}" style="flex:1 1 90px"><button onclick="sgw()">Guardar</button></div>`;
if(gw){t+=runTrack(W,gw);const R=W.filter(w=>Date.parse(td())-Date.parse(w.d)<=28*864e5);let sl=0;if(R.length>2){const x=R.map(w=>(Date.parse(w.d)-Date.parse(R[0].d))/864e5),y=R.map(w=>w.kg),mx=x.reduce((a,b)=>a+b)/x.length,my=y.reduce((a,b)=>a+b)/y.length,sx=x.reduce((a,b)=>a+(b-mx)**2,0);sl=sx?x.reduce((a,b,i)=>a+(b-mx)*(y[i]-my),0)/sx:0}
let RGT='';{const sp=A=>{if(A.length<3)return 0;const x=A.map(w=>(Date.parse(w.d)-Date.parse(A[0].d))/864e5),y=A.map(w=>w.kg),mx=x.reduce((a,b)=>a+b)/x.length,my=y.reduce((a,b)=>a+b)/y.length,sx=x.reduce((a,b)=>a+(b-mx)**2,0);return sx?x.reduce((a,b,i)=>a+(b-mx)*(y[i]-my),0)/sx:0},dd=l.kg-gw,fd=v=>new Date(Date.parse(td())+Math.ceil(Math.abs(dd/v))*864e5),ok=v=>v&&(dd>0)==(v<0)&&Math.abs(dd/v)<730,cs=[sp(R),sp(W.filter(w=>Date.parse(td())-Date.parse(w.d)<=14*864e5)),sp(W)].filter(ok);if(cs.length>1){const a=fd(cs.reduce((m,v)=>Math.abs(v)>Math.abs(m)?v:m)),b=fd(cs.reduce((m,v)=>Math.abs(v)<Math.abs(m)?v:m));if(b-a>3*864e5){const f=x=>x.toLocaleDateString('es-ES',{day:'numeric',month:'short'});RGT=` Rango según tu ritmo de las últimas 2 semanas, 4 semanas y total: <b>${f(a)} – ${f(b)}</b> (${b.getFullYear()}).`}}if(RGT&&pzMn())RGT+=' Ojo: estos días incluyen mantenimiento o pausa.'}
const df=l.kg-gw;t+=Math.abs(df)<.2?'<div class="tip">¡Objetivo conseguido!</div>':sl&&(df>0)==(sl<0)&&Math.abs(df/sl)<730?`<div class="tip">Te faltan ${fm(Math.abs(df))} kg. Al ritmo de las últimas 4 semanas (${fm(Math.abs(sl*7))} kg/semana) llegarías sobre el <b>${new Date(Date.parse(td())+Math.ceil(Math.abs(df/sl))*864e5).toLocaleDateString('es-ES',{day:'numeric',month:'long',year:'numeric'})}</b>.${RGT}</div>`:`<div class="tip">Te faltan ${fm(Math.abs(df))} kg. Aún no hay tendencia hacia el objetivo: necesito 3 pesos en las últimas 4 semanas.</div>`}
{const o=S.obj??-0.5,d2=l.kg-gw;if(gw&&o&&(d2>0)==(o<0)&&Math.abs(d2)>=.2){const w=Math.ceil(Math.abs(d2)/Math.abs(o));t+=`<div class='tip'>Con el ritmo que has elegido (${fm(Math.abs(o))} kg/semana): unas <b>${w} semanas</b> (~${w*7} días).</div>`}}
return t+'</div>'}
const CB={},CN={};function cb(v,i){CB[v]=+i;peso()}
function cn(v,i){CN[v]=+i;peso()}
function cmp(){return ['frente','lado','espalda'].map(v=>{const a=S.bf.filter(x=>(x.v||'frente')==v);if(a.length<2)return '';const i=Math.min(CB[v]??0,a.length-1),k=Math.min(CN[v]??a.length-1,a.length-1),b=a[i],c=a[k];return ba(b,c,v)+`<div class="mut" style="margin-top:10px"><b>Antes y ahora (${v})</b> · toca una foto para cambiarla por otra fecha</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:6px"><div><img class="ph" src="${b.u}" alt="Antes" onclick="pk('${v}','b')" style="cursor:pointer"><div class="mut">${b.d}</div></div><div><img class="ph" src="${c.u}" alt="Ahora" onclick="pk('${v}','n')" style="cursor:pointer"><div class="mut">${c.d}</div></div></div>`}).join('')}

const SLS=['Desayuno','Almuerzo','Comida','Merienda','Cena'],CHD={};let SL=null,AV='',BD='Cintura';
function dfl(){const h=new Date().getHours();return h<10?'Desayuno':h<13?'Almuerzo':h<17?'Comida':h<20?'Merienda':'Cena'}
function ss(i){SL=SLS[i];document.querySelectorAll('.sl').forEach((b,j)=>b.classList.toggle('on',j==i))}
function leg(x){let t=x.a;if(!t){const k=x.k||0,p=x.p||0,h=x.h||0,g=x.g||0,n=(x.n||'').toLowerCase(),o=[];if(k<40)return '';
if(/naranja|mandarina|kiwi|fresa|pimiento|lim[oó]n|pomelo|br[oó]coli|pi[nñ]a|mango|coliflor/.test(n))o.push('Rico en vitamina C.');
if(/az[uú]car|chocolate|galleta|bollo|donut|refresco|cola|helado|caramelo|mermelada|miel|tarta|pastel|croissant|natilla|flan|nutella/.test(n))o.push('Mucho azúcar: con moderación.');
if(g*9>=k*.5&&g>=15)o.push('Mucha grasa: con moderación.');
if(h*4>=k*.6&&h>=40)o.push('Muchos hidratos: no abuses y repártelos.');
if(p*4>=k*.4&&p>=20)o.push('Gran fuente de proteína: gran alimento.');t=o.join(' ')}
return t?`<br><span class="lg">💡 ${esc(t)}</span>`:''}
function tt(id,i){const c=CHD[id],p=c.P[i],q=c.P[i-1],x=c.X(i),y=c.Y(p.v),dl=q?p.v-q.v:0;return{x,y,tx:Math.max(2,Math.min(176,x-61)),ty:y<56?y+12:y-52,a:new Date(Date.parse(p.d)).toLocaleDateString('es-ES',{weekday:'short',timeZone:'UTC'}).replace('.','')+' '+p.d.slice(8)+'/'+p.d.slice(5,7)+(q?'  '+(dl<=0?'−':'+')+fm(Math.abs(dl)):''),b:fm(p.v)+' '+c.u}}
function chx(e,id){if(e.type=='pointermove'&&!e.buttons)return;const c=CHD[id],r=e.currentTarget.getBoundingClientRect(),n=c.P.length,i=Math.max(0,Math.min(n-1,Math.round(((e.clientX-r.left)/r.width*300-34)/256*(n-1))));chs(id,i)}
function chs(id,i){const c=CHD[id];if(!c||c.i===i)return;c.i=i;const t=tt(id,i),z=(k,o)=>{for(const a in o)$(k+id).setAttribute(a,o[a])};z('cl',{x1:t.x,x2:t.x});z('cc',{cx:t.x,cy:t.y});z('cr',{x:t.tx,y:t.ty});z('ca',{x:t.tx+10,y:t.ty+17});z('cb',{x:t.tx+10,y:t.ty+37});$('ca'+id).textContent=t.a;$('cb'+id).textContent=t.b}
function dc(P,u,m,tr){if(P.length<2)return '';const n=P.length,v=P.map(x=>x.v),mn=Math.min(...v),mx=Math.max(...v),pd=((mx-mn)||1)*.2,lo=mn-pd,hi=mx+pd,X=i=>34+i/(n-1)*256,Y=y=>104-(y-lo)/(hi-lo)*88,id='c'+Object.keys(CHD).length,col=i=>{if(!i)return 'var(--mut)';const d=v[i]-v[i-1];return !d?'var(--mut)':((d<0)==(m=='down')?'var(--ok)':'#D64545')},dt=d=>d.slice(8)+'/'+d.slice(5,7),tot=v[n-1]-v[0],pt=v.map((y,i)=>[X(i),Y(y)]);
let d='M'+pt[0];for(let i=0;i<n-1;i++){const a=pt[i-1]||pt[i],b=pt[i],c=pt[i+1],e=pt[i+2]||c;d+=`C${b[0]+(c[0]-a[0])/6},${b[1]+(c[1]-a[1])/6} ${c[0]-(e[0]-b[0])/6},${c[1]-(e[1]-b[1])/6} ${c}`}
CHD[id]={P,X,Y,u,i:n-1};const t=tt(id,n-1),tx=(x,y,a,z)=>`<text x="${x}" y="${y}" text-anchor="${a}" font-size="9" fill="var(--mut)">${z}</text>`;
const tr2=tr?`<polyline fill="none" stroke="var(--t)" stroke-width="1.5" stroke-dasharray="5 3" opacity=".6" points="${v.map((_,i)=>{const a=v.slice(Math.max(0,i-6),i+1);return X(i)+','+Y(a.reduce((x,y)=>x+y,0)/a.length)}).join(' ')}"/>`:'';
return `<svg class="ic" viewBox="0 0 300 126" role="img" aria-label="Gráfica interactiva de ${u}" onpointerdown="chx(event,'${id}')" onpointermove="chx(event,'${id}')"><defs><linearGradient id="g${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--t);stop-opacity:.35"/><stop offset="1" style="stop-color:var(--t);stop-opacity:0"/></linearGradient></defs>${[mn,mx].map(y=>`<line x1="34" x2="290" y1="${Y(y)}" y2="${Y(y)}" stroke="var(--ln)" stroke-dasharray="2 3"/>`+tx(30,Y(y)+3,'end',fm(y))).join('')}<path d="${d}L${X(n-1)},108L${X(0)},108Z" fill="url(#g${id})"/><path class="ln" pathLength="1" d="${d}" fill="none" stroke="var(--t)" stroke-width="2.5" stroke-linecap="round"/>${tr2}${v.map((y,i)=>`<circle cx="${X(i)}" cy="${Y(y)}" r="${n>20?2.5:4}"${i==n-1?' class="lp"':''} fill="${col(i)}" stroke="var(--card)" stroke-width="1.5"/>`).join('')}<line id="cl${id}" x1="${t.x}" x2="${t.x}" y1="12" y2="108" stroke="var(--t)" stroke-dasharray="3 3" opacity=".6"/><circle id="cc${id}" cx="${t.x}" cy="${t.y}" r="6" fill="var(--card)" stroke="var(--t)" stroke-width="3"/><rect id="cr${id}" x="${t.tx}" y="${t.ty}" width="122" height="46" rx="9" fill="rgba(15,15,35,.88)" stroke="var(--t)" stroke-width="1"/><text id="ca${id}" x="${t.tx+10}" y="${t.ty+17}" font-size="11" fill="#fff">${t.a}</text><text id="cb${id}" x="${t.tx+10}" y="${t.ty+37}" font-size="17" font-weight="700" fill="#fff">${t.b}</text>${tx(34,121,'start',dt(P[0].d))}${tx(290,121,'end',dt(P[n-1].d))}${v.map((y,i)=>`<circle cx="${X(i)}" cy="${Y(y)}" r="${Math.max(4,Math.min(12,128/(n-1)))}" fill="transparent" style="cursor:pointer" onclick="chs('${id}',${i})"/>`).join('')}</svg><div class="mut" style="margin-bottom:6px">Toca un punto para ver su valor · ${u}: ${tot>0?'+':tot<0?'−':''}${fm(Math.abs(tot))} en total · mín ${fm(mn)} · máx ${fm(mx)}</div>`}
function imc(kg){const H=1.78,b=kg/(H*H),Z=[[0,18.5,'Bajo peso','#3B82F6'],[18.5,25,'Normal','#16A34A'],[25,30,'Sobrepeso','#F59E0B'],[30,35,'Obesidad I','#EF4444'],[35,99,'Obesidad II+','#991B1B']],z=Z.find(q=>b>=q[0]&&b<q[1])||Z[4],y=v=>140-(Math.max(15,Math.min(40,v))-15)/25*130,Y=y(b),w=25*H*H;
let s='<svg viewBox="0 0 120 176" style="width:100px;flex:0 0 100px" role="img" aria-label="Termómetro de IMC"><defs><clipPath id="tc"><rect x="26" y="10" width="20" height="140" rx="10"/></clipPath></defs><g clip-path="url(#tc)">';
Z.forEach(q=>{const t=y(Math.min(q[1],40)),bt=q[0]?y(q[0]):150;s+=`<rect x="26" y="${t}" width="20" height="${bt-t+1}" fill="${q[3]}" opacity=".85"/>`});
s+=`</g><circle cx="36" cy="156" r="14" fill="${z[3]}"/>`+[18.5,25,30,35].map(t=>`<text x="52" y="${y(t)+3}" font-size="9" fill="currentColor" opacity=".7">${t}</text>`).join('')+`<line x1="22" x2="50" y1="${Y}" y2="${Y}" stroke="#fff" stroke-width="2.5"/><path d="M24 ${Y}L10 ${Y-6}L10 ${Y+6}Z" fill="currentColor"/></svg>`;
const adv=kg>w?`Para bajar de 25 te sobran ${fm(Math.round((kg-w)*10)/10)} kg.`:b<18.5?`Te faltan ${fm(Math.round((18.5*H*H-kg)*10)/10)} kg para el rango normal.`:'Estás en rango normal.';
return `<div class="card"><div class="row" style="flex-wrap:nowrap;gap:12px">${s}<div><div class="big" style="color:${z[3]}">${fm(Math.round(b*10)/10)}</div><div><b>IMC · ${z[2]}</b></div><div class="mut">Con 1,78 m, tu rango normal es ${fm(Math.round(18.5*H*H*10)/10)}–${fm(Math.round(w*10)/10)} kg. ${adv}</div><div class="mut" style="margin-top:6px">El IMC no distingue músculo de grasa: con gimnasio puede salir alto. Mira también cintura y % de grasa.</div></div></div></div>`}
const BP={Cuello:[130,53],Pecho:[130,86],Cintura:[130,138],Cadera:[130,188],Bíceps:[184,108],Muslo:[148,245],Gemelo:[152,315]};
function body(){const sel=BD,i=MD.findIndex(m=>m[0]==sel),a=ml(sel),x=a[a.length-1],q=a[a.length-2],f0=a[0],Lm=(d,w)=>`<path d="${d}" stroke="var(--t)" stroke-width="${w+3}"/><path d="${d}" stroke="var(--ln)" stroke-width="${w}"/>`;
let s='<svg viewBox="0 0 340 360" role="img" aria-label="Figura con tus medidas" style="max-height:400px"><defs><linearGradient id="bgf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--t);stop-opacity:.4"/><stop offset="1" style="stop-color:var(--t);stop-opacity:.1"/></linearGradient></defs><g fill="url(#bgf)" stroke="var(--t)" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"><path d="M172 70C184 70 192 80 192 96C193 116 192 132 196 150C198 166 200 180 200 192L190 194C188 178 184 160 180 146C176 130 172 110 168 90Z"/><path d="M88 70C76 70 68 80 68 96C67 116 68 132 64 150C62 166 60 180 60 192L70 194C72 178 76 160 80 146C84 130 88 110 92 90Z"/><path d="M138 50C150 56 166 60 174 70C178 90 168 112 162 140C158 160 160 180 166 200C172 240 168 262 162 288C158 306 168 326 156 350L160 358L138 358L140 346C138 322 138 300 136 286C134 262 132 236 130 218C128 236 126 262 124 286C122 300 122 322 120 346L122 358L100 358L104 350C92 326 102 306 98 288C92 262 88 240 94 200C100 180 102 160 98 140C92 112 82 90 86 70C94 60 110 56 122 50Z"/><ellipse cx="130" cy="28" rx="17" ry="21"/></g><g fill="none" stroke="var(--t)" stroke-width="1" opacity=".45" stroke-linecap="round"><path d="M104 94Q118 106 130 96Q142 106 156 94"/><path d="M130 98V170M121 128H139M121 144H139M122 160H138"/></g>';
const lab=[];Object.entries(BP).forEach(([n,[px,py]])=>{const v=ml(n),on=n==sel,val=v.length?fm(v[v.length-1]):'–';s+=`<g onclick="bd('${n}')" style="cursor:pointer"><line x1="${px}" y1="${py}" x2="205" y2="${py}" stroke="var(--t)" stroke-dasharray="2 3" opacity=".5"/><rect x="${px-20}" y="${py-14}" width="${340-px+20}" height="28" fill="transparent"/><circle cx="${px}" cy="${py}" r="${on?10:7}" fill="var(--t)" stroke="#fff" stroke-width="2"/>${on?'':`<text x="208" y="${py+4}" font-size="11.5" fill="currentColor">${n} ${val}</text>`}</g>`;if(on)lab.push([n,val,py])});
lab.forEach(([n,val,py])=>{s+=`<g onclick="bd('${n}')" style="cursor:pointer"><rect x="204" y="${py-22}" width="132" height="44" rx="10" fill="var(--t)"/><text x="214" y="${py-6}" font-size="12" fill="#fff" opacity=".9">${n}</text><text x="214" y="${py+16}" font-size="22" font-weight="700" fill="#fff">${val}${val=='–'?'':' cm'}</text></g>`});
s+=`</svg><div class="tip" style="margin-top:8px;font-size:17px"><b style="font-size:24px">${sel}</b>: ${x?'<b style="font-size:24px;color:var(--t)">'+fm(x)+' cm</b>'+(q!=null?` (${x-q<=0?'−':'+'}${fm(Math.abs(x-q))} vs anterior)`:'')+(a.length>1?` · ${x-f0<=0?'−':'+'}${fm(Math.abs(x-f0))} desde el inicio`:''):'sin datos todavía: guárdala en la pestaña Anotar'}<div class="mut">${MD[i][1]}</div></div>`;
if(a.length>1)s+=dc(S.m.filter(z=>z.v[sel]).map(z=>({d:z.d,v:z.v[sel]})),'cm',/Cintura|Cadera|Cuello/.test(sel)?'down':'up');else s+='<div class="mut" style="margin-top:6px">Con 2 mediciones aparece la gráfica.</div>';return s}
function figMini(){let s='<svg viewBox="40 6 180 358" style="width:100%;max-height:290px" role="img" aria-label="Figura con tus medidas"><defs><linearGradient id="bgf2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B69CFF" stop-opacity=".55"/><stop offset="1" stop-color="#B69CFF" stop-opacity=".15"/></linearGradient></defs><g fill="url(#bgf2)" stroke="#fff" stroke-opacity=".8" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"><path d="M172 70C184 70 192 80 192 96C193 116 192 132 196 150C198 166 200 180 200 192L190 194C188 178 184 160 180 146C176 130 172 110 168 90Z"/><path d="M88 70C76 70 68 80 68 96C67 116 68 132 64 150C62 166 60 180 60 192L70 194C72 178 76 160 80 146C84 130 88 110 92 90Z"/><path d="M138 50C150 56 166 60 174 70C178 90 168 112 162 140C158 160 160 180 166 200C172 240 168 262 162 288C158 306 168 326 156 350L160 358L138 358L140 346C138 322 138 300 136 286C134 262 132 236 130 218C128 236 126 262 124 286C122 300 122 322 120 346L122 358L100 358L104 350C92 326 102 306 98 288C92 262 88 240 94 200C100 180 102 160 98 140C92 112 82 90 86 70C94 60 110 56 122 50Z"/><ellipse cx="130" cy="28" rx="17" ry="21"/></g><g fill="none" stroke="var(--t)" stroke-width="1" opacity=".45" stroke-linecap="round"><path d="M104 94Q118 106 130 96Q142 106 156 94"/><path d="M130 98V170M121 128H139M121 144H139M122 160H138"/></g>';
 Object.entries(BP).forEach(([n,[px,py]])=>{const on=n==BD;s+=`<g onclick="bd('${n}')" style="cursor:pointer"><rect x="${px-30}" y="${py-18}" width="60" height="36" fill="transparent"/><circle cx="${px}" cy="${py}" r="${on?10:6.5}" fill="${on?'#fff':'#B69CFF'}" stroke="#fff" stroke-width="2"/></g>`});
 return s+'</svg>'}
function mxBody(){const i=MD.findIndex(m=>m[0]==BD),a=ml(BD),x=a[a.length-1],q=a[a.length-2],f0=a[0];
 return `<div class="mdt"><b>${BD}</b><span class="mv">${x!=null?fm(x)+' cm':'sin datos'}</span>${x!=null&&q!=null?` <span class="mut">(${x-q<=0?'−':'+'}${fm(Math.abs(x-q))} vs anterior)</span>`:''}${x!=null&&a.length>1?`<div class="mut">${x-f0<=0?'−':'+'}${fm(Math.abs(x-f0))} cm desde el inicio</div>`:''}<div class="mut" style="margin-top:4px">📏 ${MD[i][1]}</div></div><div class="mev"><div class="mevt">Evolución de las medidas · ${BD}</div>${a.length>1?dc(S.m.filter(z=>z.v[BD]).map(z=>({d:z.d,v:z.v[BD]})),'cm',/Cintura|Cadera|Cuello/.test(BD)?'down':'up'):'<div class="mut">Con 2 mediciones aparece la gráfica.</div>'}</div>`}
function msBody(){
 const rows=MD.map(m=>{const v=ml(m[0]),y=v[v.length-1];return `<div class="mli${m[0]==BD?' on':''}" data-n="${m[0]}" onclick="bd('${m[0]}')"><span>${m[0]}:</span><span class="mvl"><input class="mi" inputmode="decimal" placeholder="–" value="${MP[m[0]]!=null?esc(MP[m[0]]):(y!=null?fm(y):'')}" aria-label="${m[0]} en cm" onfocus="bd('${m[0]}')" onclick="event.stopPropagation()" oninput="pM('${m[0]}',this.value)"><em>cm</em></span></div>`}).join('');
 return `<div class="mg"><div>${rows}</div><div id="mfig">${figMini()}</div></div><div id="msv">${mpH()}</div><div id="mx">${mxBody()}</div>`}
function bd(n){BD=n;document.querySelectorAll('.mli').forEach(e=>e.classList.toggle('on',e.dataset.n==n));const f=$('mfig'),x=$('mx');if(f)f.innerHTML=figMini();if(x)x.innerHTML=mxBody()}
function setM(n,v){const d=td(),x=num(v);let e=S.m.find(z=>z.d==d);if(x){if(e)e.v[n]=x;else{S.m.push({d,v:{[n]:x}});S.m.sort((a,b)=>a.d<b.d?-1:1)}}else if(e){delete e.v[n];if(!Object.keys(e.v).length)S.m=S.m.filter(z=>z!=e)}save();bd(n);setTimeout(()=>{const a=document.activeElement;if(!a||a.tagName!='INPUT')peso()},300)}
let MP={};
function applyM(n,v){const d=td(),x=num(v);let e=S.m.find(z=>z.d==d);if(x){if(e)e.v[n]=x;else{S.m.push({d,v:{[n]:x}});S.m.sort((a,b)=>a.d<b.d?-1:1)}}else if(e){delete e.v[n];if(!Object.keys(e.v).length)S.m=S.m.filter(z=>z!=e)}}
function mpH(){const k=Object.keys(MP).length;return k?`<div class="row" style="margin-top:12px;gap:8px"><button style="flex:1;background:#16A34A;color:#fff;font-weight:800;padding:12px;border-radius:12px;border:0" onclick="svM()">Guardar medidas (${k})</button><button class="g" onclick="cxM()">Descartar</button></div>`:''}
function pM(n,v){const T=S.m.find(z=>z.d==td()),x=num(v);if(String(v).trim()===''){if(T&&T.v[n]!=null)MP[n]='';else delete MP[n]}else if(x&&!(T&&T.v[n]==x))MP[n]=v;else delete MP[n];const e=$('msv');if(e)e.innerHTML=mpH()}
function svM(){const l=Object.keys(MP);if(!l.length)return;l.forEach(n=>applyM(n,MP[n]));MP={};save();okAdd('Medidas guardadas');peso()}
function cxM(){MP={};const m=$('ms');if(m)m.innerHTML=msBody()}
let RPO=0,RPG=false,WLT=null;
function regRows(W,o){const A=[...W].reverse();return A.slice(o,o+5).map((w,i)=>{const q=A[o+i+1],d=q?w.kg-q.kg:0,fb=wfb(w,q);return `<div class="wr" style="grid-template-columns:82px 1fr 1.2fr;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none" onpointerdown="wlS('${w.d}')" onpointerup="wlC()" onpointerleave="wlC()" onpointercancel="wlC()" oncontextmenu="return false"><span>${w.d}</span><span><b>${fm(w.kg)} kg</b>${q?` <span class="mut">(${d<=0?'−':'+'}${fm(Math.abs(d))})</span>`:''}</span><span class="mut">${fb?fb[0]:'–'}${w.c?` · ${esc(w.c)}`:''}</span></div>`}).join('')}
function regTab(W,o){return `<div class="wt"><div class="wh" style="grid-template-columns:82px 1fr 1.2fr"><span>Fecha</span><span>Peso</span><span>Ritmo</span></div>${regRows(W,o)}</div>`}
function rpC(n){return (n>5?'Mostrando '+(RPO+1)+'–'+Math.min(n,RPO+5)+' de '+n+' · ':'')+'mantén pulsado un peso para borrarlo'}
function rpT(){const d=$('wrd'),h=$('wrh');if(!d||!h)return;const mx=+d.dataset.mx||0;h.style.top='calc((100% - 26px) * '+(mx?RPO/mx:0)+')'}
function rpS(v){RPO=+v;const W=[...S.w].sort((a,b)=>a.d<b.d?-1:1),r=$('wrt');if(r)r.innerHTML=regTab(W,RPO);const c=$('wrc');if(c)c.textContent=rpC(W.length);rpT()}
function rpD(e){RPG=true;try{$('wrd').setPointerCapture(e.pointerId)}catch(x){}rpM(e)}
function rpU(){RPG=false}
function rpM(e){if(!RPG)return;const d=$('wrd');if(!d)return;const mx=+d.dataset.mx||0,r=d.getBoundingClientRect(),f=Math.min(1,Math.max(0,(e.clientY-r.top-13)/Math.max(1,r.height-26))),v=Math.round(f*mx);if(v!=RPO)rpS(v)}
function wlC(){if(WLT){clearTimeout(WLT);WLT=null}}
function wlS(d){wlC();WLT=setTimeout(()=>{WLT=null;const w=S.w.find(x=>x.d==d);if(!w)return;try{if(navigator.vibrate)navigator.vibrate(30)}catch(e){}pmod(`<b style="font-size:18px">¿Borrar este peso?</b><div style="margin:10px 0">${d.split('-').reverse().join('/')} · <b>${fm(w.kg)} kg</b></div><div class="row"><button onclick="pmodX();delW('${d}')">Sí, borrar</button><button class="g" onclick="pmodX()">No</button></div>`,1)},550)}
function regPesos(W){const n=W.length,mx=Math.max(0,n-5);if(RPO>mx)RPO=mx;return `<div class="mct" style="margin-top:18px">Registro de pesos</div><div style="display:flex;gap:8px;align-items:stretch"><div id="wrt" style="flex:1;min-width:0">${regTab(W,RPO)}</div>${n>5?`<div id="wrd" data-mx="${mx}" style="width:30px;position:relative;touch-action:none;background:var(--ln);border-radius:15px;margin:6px 0;cursor:pointer" onpointerdown="rpD(event)" onpointermove="rpM(event)" onpointerup="rpU()" onpointercancel="rpU()" role="slider" aria-label="Mover a pesos anteriores" aria-valuemin="0" aria-valuemax="${mx}"><div id="wrh" style="position:absolute;left:2px;width:26px;height:26px;border-radius:13px;background:var(--t);top:calc((100% - 26px) * ${mx?RPO/mx:0});box-shadow:0 1px 4px rgba(0,0,0,.3)"></div></div>`:''}</div><div class="mut" id="wrc" style="text-align:center;font-size:13px;margin-top:6px">${rpC(n)}</div>${wLast(W)}`}
function medCard(W){return `<div class="card mcard" id="mc"><div class="mct">Medidas y evolución</div><div id="ms">${msBody()}</div>${SM?'<button class="g" style="margin-top:10px" onclick="advMed()">Consejo de la IA sobre mis medidas y fotos</button><div class="tip" id="am" hidden></div>':''}${W&&W.length?regPesos(W):''}</div>`}
function bodyCard(){return `<h2>Tu cuerpo · toca un punto</h2><div class="card" id="bw">${body()}</div>`}
const K='plan1';let S={w:[],f:{},t:{},g:{},gh:{},m:[],bf:[],bo:''},tab=0,gd='Empuje',SM=null,DL=null,pend=[];
try{S=Object.assign(S,JSON.parse(localStorage.getItem(K)||'{}'))}catch(e){}
if(!S.fav)S.fav=[{n:'Desayuno habitual (leche, Nesquik, corn flakes)',k:280,p:13,h:43,g:5}];
const sv=()=>{try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}};
let REF=null,PT;
const save=()=>{S.ts=Date.now();sv();push()};
function push(){clearTimeout(PT);PT=setTimeout(async()=>{if(!REF)return;try{await REF.set({j:JSON.stringify(Object.assign({},S,{bf:[]})),t:S.ts||0});$('cloud').textContent='☁ Guardado en tu cuenta'}catch(e){$('cloud').textContent='No se pudo subir a la nube: sigue guardado en el móvil'}},1500)}
const td=()=>new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10);
let DT=td();
function dd(n){const d=new Date(Date.parse(DT)+n*864e5).toISOString().slice(0,10);if(d>td())return;DT=d;dieta()}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const num=v=>{const n=parseFloat(String(v).replace(',','.'));return isNaN(n)?0:n};
const fm=n=>String(Math.round(n*10)/10).replace('.',',');
const $=id=>document.getElementById(id);
$('fecha').textContent=new Date().toLocaleDateString('es-ES',{weekday:'long',day:'numeric',month:'long'});
const TC=window.TC=['#F08A24','#8B5CF6','#2745D6','#0FA38A'];function go(i){tab=i;document.querySelectorAll('.mdl').forEach(x=>x.remove());OP=null;document.body.style.setProperty('--t',TC[i]);if(i!=1)UNL=false;[0,1,2,3].forEach(k=>$('b'+k).classList.toggle('on',k==i));[dieta,peso,gym,semana][i]();remShow();scrollTo(0,0)}
function fill(a,b){const r=Object.assign({},a),by=(x,y)=>{const m={};[...(y||[]),...(x||[])].forEach(e=>m[e.d]=e);return Object.values(m).sort((p,q)=>p.d<q.d?-1:1)};
 r.f=Object.assign({},a.f);Object.keys(b.f||{}).forEach(d=>{if(!(r.f[d]&&r.f[d].length))r.f[d]=b.f[d]});
 r.t=Object.assign({},b.t,a.t);r.cal=Object.assign({},b.cal,a.cal);r.g=Object.assign({},b.g,a.g);
 r.gh=Object.assign({},a.gh);Object.keys(b.gh||{}).forEach(k=>{const A=r.gh[k]||[],ds=new Set(A.map(x=>x.d));r.gh[k]=[...A,...b.gh[k].filter(x=>!ds.has(x.d))].sort((x,y)=>x.d<y.d?-1:1)});
 r.w=by(a.w,b.w);const mm={};(b.m||[]).forEach(e=>mm[e.d]=e);(a.m||[]).forEach(e=>mm[e.d]=mm[e.d]?{d:e.d,v:Object.assign({},mm[e.d].v,e.v)}:e);r.m=Object.values(mm).sort((p,q)=>p.d<q.d?-1:1);
 const fn=new Set((a.fav||[]).map(x=>x.n));r.fav=[...(a.fav||[]),...(b.fav||[]).filter(x=>!fn.has(x.n))];
 if(!r.pad)r.pad=b.pad;if(r.obj==null)r.obj=b.obj;if(!r.ge)r.ge=b.ge;if(!r.pin)r.pin=b.pin;if(!r.bo)r.bo=b.bo;return r}
async function cloud(){try{const db=await claude.use('db'),us=await claude.use('user');if(!db||!us)return;const id=await us.id();if(!id)return;REF=db.doc('data/users/'+id+'/plan');const sn=await REF.get();
 if(sn.exists){try{localStorage.setItem(K+'_bak',JSON.stringify(S))}catch(e){}const c=JSON.parse(sn.data().j);S=Object.assign(fill(S,c),{bf:S.bf||[]});if(!S.fav)S.fav=[];S.ts=Date.now();sv();go(tab)}push();
 $('cloud').textContent='☁ Guardado en tu cuenta'}catch(e){$('cloud').textContent='Solo en este móvil'}}
function ch(v,u){if(v.length<2)return '';const mn=Math.min(...v),mx=Math.max(...v),r=(mx-mn)||1,P=v.map((x,i)=>[5+i/(v.length-1)*290,80-(x-mn)/r*70]);return `<svg viewBox="0 0 300 90" role="img" aria-label="Gráfica de puntos"><polyline fill="none" stroke="var(--acc)" stroke-width="2" points="${P.map(p=>p.join(',')).join(' ')}"/>${P.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="3.5" fill="var(--acc)"/>`).join('')}</svg><div class="row mut" style="justify-content:space-between"><span>${fm(v[0])} ${u}</span><span>${fm(v[v.length-1])} ${u}</span></div>`}
const d2b=u=>{const a=u.split(','),m=a[0].match(/:(.*?);/)[1],s=atob(a[1]),x=new Uint8Array(s.length);for(let i=0;i<s.length;i++)x[i]=s.charCodeAt(i);return new Blob([x],{type:m})};
const rs=(f,mx)=>new Promise((ok,ko)=>{const r=new FileReader();r.onerror=ko;r.onload=()=>{const im=new Image();im.onerror=ko;im.onload=()=>{const w=Math.min(mx,im.width),c=document.createElement('canvas');c.width=w;c.height=im.height*w/im.width;c.getContext('2d').drawImage(im,0,0,c.width,c.height);const u=c.toDataURL('image/jpeg',.72);ok({u,b:d2b(u)})};im.src=r.result};r.readAsDataURL(f)});

function dieta(){
 mc();const t=S.t[DT]||'Descanso',goal=tgt((D.find(d=>d[0]==t)||DS)[1])+cAdj(DT,t)+gAdj(DT),L=S.f[DT]||[],su=k=>L.reduce((a,x)=>a+(x[k]||0),0);
 const k=su('k'),p=su('p'),hh=su('h'),gg=su('g'),rk=goal-k-rsv(DT),HT=(mset(goal),HTG);RM={k:rk,p:PROT-p,h:HT-hh,g:GT-gg};
 let h=`<div class="card"><div class="ctl"><div class="cr"><button class="g" onclick="dd(-1)" aria-label="Día anterior">‹</button><label class="dpill"><span class="dw">${(()=>{const w=new Date(DT+'T12:00:00').toLocaleDateString('es-ES',{weekday:'long'});return w.charAt(0).toUpperCase()+w.slice(1)})()}${DT==td()?'<i class="dtg">Hoy</i>':''}</span><b class="dm">${new Date(DT+'T12:00:00').toLocaleDateString('es-ES',{day:'numeric',month:'long'})}</b><input type="date" value="${DT}" max="${td()}" aria-label="Fecha" onchange="DT=this.value||td();dieta()"></label><button class="g" onclick="dd(1)" aria-label="Día siguiente">›</button>${DT!=td()?'<button class="g" onclick="DT=td();dieta()">Hoy</button>':''}</div>${DT!=td()?'<div class="tip" style="margin:0 0 10px">Estás editando un día anterior.</div>':''}${usel(t)}${smCap()}${adChips(t)}<div class="cr"><select aria-label="Objetivo" onchange="S.obj=parseFloat(this.value);save();dieta()">${OB.map(o=>`<option value="${o[0]}"${o[0]==(S.obj??-0.5)?' selected':''}>${o[1]}</option>`).join('')}</select></div></div>${(S.obj??-0.5)==-1?'<div class="mut" style="margin-top:6px">Ojo: 1 kg/semana es muy agresivo (hambre y riesgo de perder músculo). Mejor solo unas semanas. Nunca bajo 1.500 kcal.</div>':(S.obj??-0.5)==-0.8?'<div class="mut" style="margin-top:6px">Ritmo alto: vigila hambre, sueño y fuerza en el gimnasio.</div>':(S.obj??-0.5)==0.5?'<div class="mut" style="margin-top:6px">Con +0,5 kg/semana ganas más grasa que con +0,25.</div>':''}
 <div style="margin:12px 0;padding:16px 14px 14px;border-radius:18px;background:linear-gradient(135deg,var(--t),color-mix(in srgb,var(--t) 50%,#000));color:#fff;box-shadow:0 6px 16px rgba(0,0,0,.18)"><div style="display:flex;align-items:center;gap:18px"><div class="rg" style="width:150px;height:150px;margin:0;flex:none"><svg width="150" height="150" viewBox="0 0 140 140"><circle cx="70" cy="70" r="58" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="11"/><circle cx="70" cy="70" r="58" fill="none" stroke="${rk<0?'#FFC9C9':'#fff'}" stroke-width="11" stroke-linecap="round" stroke-dasharray="${(Math.min(1,(k+rsv(DT))/Math.max(goal,1))*364.4).toFixed(1)} 364.4"/></svg><div class="rc"><div class="big" style="font-size:44px;line-height:1;color:#fff">${rk<0?'-':''}${Math.abs(rk)}</div><div style="font-size:13px;opacity:.92;margin-top:3px">${rk<0?'kcal de más':'kcal restantes'}</div></div></div><div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:10px"><div><div style="font-size:13px;opacity:.85"><span>🏆</span> Objetivo</div><div style="font-weight:600;font-size:18px">${goal} kcal</div></div><div><div style="font-size:13px;opacity:.85">Tomadas</div><div style="font-weight:600;font-size:18px">${k} kcal</div></div>${rsv(DT)?`<div><div style="font-size:13px;opacity:.85">Reservadas</div><div style="font-weight:600;font-size:18px">${rsv(DT)} kcal</div></div>`:''}</div></div><div class="sc">${[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12A9 9 0 1 1 12 3v9z"/><path d="M15.5 3.6A9 9 0 0 1 20.4 8.5H15.5z"/></svg>','Macros','dm'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2.5-6 4 12 2.5-6H21"/></svg>','Cardio','dc'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 14.5V19a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-4.5"/><path d="M7 14.5a4 4 0 1 1 1.2-7.8 4 4 0 0 1 7.6 0A4 4 0 1 1 17 14.5z"/></svg>','Mambo','dmb']].map(x=>`<button class="sb${OP==x[2]?' on':''}" onclick="sh('${x[2]}')" aria-label="${x[1]}">${x[0]}${x[1]}</button>`).join('')}</div></div>
 ${[['Calorías',k,goal,'kcal','#8B5CF6'],['Proteína',p,PROT,'g','#2DA44E'],['Hidratos',hh,HT,'g','#F5A524'],['Grasas',gg,GT,'g','#E5484D']].map(b=>{const pc=Math.round(b[1]/Math.max(b[2],1)*100);return `<div class="mut" style="display:flex;justify-content:space-between;font-weight:700"><span><span style="color:${b[4]}">●</span> ${b[0]}: ${fm(b[1])} / ${b[2]} ${b[3]}</span><b>${pc}%</b></div><div class="bar"><i style="width:${Math.min(100,pc)}%;background:${b[4]}"></i></div>`}).join('')}</div>`;
 if(rk<0)h+=`<div class="tip">Te has pasado un poco. Sin drama: mañana vuelves a tu cifra y miramos la media de la semana.</div>`;
 if(k>0){const pk=k/goal,pp=p/PROT,ph=hh/Math.max(HT,1),pg=gg/GT,f=[...S.fav].filter(x=>x.k).sort((a,b)=>b.p/b.k-a.p/a.k)[0];let m='';
  if(ph>pp+0.25)m='Vas alto de hidratos para la proteína que llevas. En la próxima comida prioriza proteína (huevos, claras, pollo, atún) y deja el pan o el arroz para después.';
  else if(pg>pk+0.25)m='Vas alto de grasas. En la próxima, plancha o horno y sin aceite extra.';
  else if(pp<pk-0.25)m='Vas corto de proteína para las calorías que llevas: la próxima comida con una buena ración de proteína.';
  else m='Vas equilibrado. Sigue así.';
  h+=`<div class="tip">${m}${f&&f.p/f.k>=0.08&&m.indexOf('equilibrado')<0?' De tus favoritas, la que más proteína da: '+esc(f.n)+'.':''}</div>`}
 h+=mcCard(goal,HT)+(SM?"<details id='dmb' class='card'><summary><b>🤖 Mambo</b> <span class='mut'>ideas de menú</span></summary><button class='g' style='margin:8px 0' onclick='chef()'>Generar ideas</button><div id='chf' hidden></div></details>":'')+cdCard(t)+`<div class="card" id="addc"><b>Añadir comida</b><div class="row" style="margin:8px 0">${SLS.map((z,i)=>`<button class="chip sl${z==(SL||dfl())?' on':''}" onclick="ss(${i})">${z}</button>`).join('')}<button class="chip" onclick="ayM()">⏳ Ayuno${ayN()?' ●':''}</button></div>
 <div class="row" style="margin:8px 0"><input id="fq" placeholder="Ej. 65 g de plátano… (puedes dictar con Gboard)" style="flex:1 1 200px"></div>
  <div style="margin:8px 0"><input id="fdq" placeholder="🔎 Buscar en la base de alimentos (pollo, arroz, yogur…)" oninput="fdS(this.value)" autocomplete="off" style="width:100%"><div id="fdr"></div></div>${rvH(rk,L)}${cfH()}
  ${SM?`<div class="row"><label class="b">📷 Foto<input class="hid" type="file" accept="image/*" capture="environment" onchange="addP(this.files);qask();this.value=''"></label><label class="b">Galería<input class="hid" type="file" accept="image/*" multiple onchange="addP(this.files);qask();this.value=''"></label><button onclick="calc()">Calcular</button></div>
 <div class="mut" id="fs" style="margin:6px 0">Alimento genérico (65 g de plátano): escríbelo y pulsa Calcular, sin foto. Si es un producto de marca, añade foto del envase. Al hacer la foto te pregunto si es en casa o fuera de casa.</div>`:'<div class="mut" id="fs">El cálculo con foto no está disponible ahora: usa la entrada a mano.</div>'}
 <details id="man"${SM?'':' open'}><summary>Introducir a mano (opcional)</summary><div class="row" style="margin-top:8px"><input id="fn" placeholder="Nombre" style="flex-basis:100%"><label class="mut" style="flex:1 1 70px">Calorías (kcal)<input id="fk" inputmode="decimal" style="width:100%"></label><label class="mut" style="flex:1 1 70px">Proteína (g)<input id="fp" inputmode="decimal" style="width:100%"></label><label class="mut" style="flex:1 1 70px">Hidratos (g)<input id="fh" inputmode="decimal" style="width:100%"></label><label class="mut" style="flex:1 1 70px">Grasas (g)<input id="fg" inputmode="decimal" style="width:100%"></label><label class="mut" style="flex:1 1 70px">Gramos (opcional)<input id="fgr" inputmode="decimal" oninput="fdQ()" style="width:100%"></label><select id="fu" aria-label="Valores" style="flex:1 1 100%"><option value="1">Los valores son de esa cantidad</option><option value="100">Los valores son por 100 g</option></select><button onclick="addF()">Añadir</button><button class="g" onclick="addFav()">★ Favorita</button></div></details></div>`;
 h+=`<div class="card" id="favl"><b>Mis comidas</b>${favBar()}<div id="favlist">${favHtml()}</div><div class="mut" style="margin-top:8px">Toca una para ver qué lleva. Para crear una nueva, marca varias comidas de la lista de hoy y pulsa “Crear comida con las marcadas”.</div></div>`;
 h+=`<h2>Mi dietario</h2><div class="card">${lst(L)}${UN&&UN.d==DT?'<button class="g" style="margin-top:8px" onclick="undo()">↩ Deshacer el último borrado</button>':''}</div>`;
 $('v').innerHTML=h;xtra();{const a=$('addc'),b=$('v').querySelector('.card');if(a&&b)b.after(a);const sc=window._mo==OP?((document.querySelector('.mdi')||{}).scrollTop||0):0;window._mo=OP;document.querySelectorAll('.mdl').forEach(x=>x.remove());['dm','dc','dmb'].forEach(i=>{const e=$(i);if(!e)return;if(OP!=i){e.style.display='none';return}e.open=true;e.style.display='';const o=document.createElement('div');o.className='mdl';o.onclick=ev=>{if(ev.target==o)sh(i)};const w=document.createElement('div');w.className='mdb';const x=document.createElement('button');x.className='mdx';x.textContent='✕';x.setAttribute('aria-label','Cerrar');x.onclick=()=>sh(i);const n=document.createElement('div');n.className='mdi';w.append(x,n);n.append(e);o.append(w);document.body.append(o);n.scrollTop=sc})}}
async function ai(){const o=$('ia');o.hidden=false;o.textContent='Pensando…';const t=S.t[DT]||'Descanso',goal=tgt((D.find(d=>d[0]==t)||DS)[1])+cAdj(DT,t)+gAdj(DT),L=S.f[DT]||[],su=k=>L.reduce((a,x)=>a+(x[k]||0),0),HT=(mset(goal),HTG),rk=Math.round(goal-su('k')-rsv(DT)),rp=Math.round(PROT-su('p')),rh=Math.round(HT-su('h')),rg=Math.round(GT-su('g')),sl=SL||dfl(),se=(SMT[smEf(DT)]||{}).n,kc=num((CAL()[DT]||{}).kc),pd=[1,2,3].map(i=>new Date(Date.parse(DT)-i*864e5).toISOString().slice(0,10)),ult=[...new Set(pd.flatMap(d=>(S.f[d]||[]).map(x=>String(x.n).replace(/\s*\(.*$/,''))))].slice(0,25).join(', ')||'sin datos',fav=(S.fav||[]).slice(0,25).map(x=>x.n+': '+(x.k||0)+' kcal P'+(x.p||0)+' H'+(x.h||0)+' G'+(x.g||0)).join('; ');
 try{const r=await SM.json(`Eres nutricionista deportivo. Hoy es ${t}${se?' con entreno '+se:''}${kc?' y cardio de '+kc+' kcal':''}. Próxima comida: ${sl} (ahora son las ${new Date().getHours()} h). Objetivo del día: ${goal} kcal, ${PROT} g proteína, ${HT} g hidratos, ${GT} g grasas. Lleva ${Math.round(su('k'))} kcal, ${Math.round(su('p'))} g P, ${Math.round(su('h'))} g H, ${Math.round(su('g'))} g G. Le quedan ${rk} kcal, ${rp} g P, ${rh} g H, ${rg} g G (negativo = se ha pasado). Hoy ha comido: ${L.map(x=>x.n).join(', ')||'nada'}. Los 3 días anteriores comió: ${ult}. Sus comidas habituales (por ración): ${fav||'sin datos'}. Responde en máximo 80 palabras: 1) cuál es la prioridad ahora (el macro que más falta o sobra, con la cifra); 2) dos opciones de tipos distintos para ${sl} que encajen en lo que le queda, con gramos exactos y kcal/proteína aproximadas de cada una. Usa sus habituales, pero no repitas lo que ya ha comido hoy ni lo de los 3 días anteriores. Si le quedan menos de 150 kcal, dile que cierre con algo ligero o nada; si se ha pasado, di cuánto y cómo compensar sin pasar hambre. Variación ${Math.floor(Math.random()*1000)}. Responde solo JSON: {"consejo":"texto"}`,{modelTier:'default',cache:false});o.textContent=r.consejo}catch(e){o.textContent='No he podido pedir consejo ahora.'}}
const FDB=`Pechuga de pollo (cruda)|113|21.7|0|2.9
Pechuga de pollo (plancha/cocida)|165|31|0|3.6
Muslo de pollo sin piel (crudo)|112|17.9|0|4.4
Contramuslo de pollo con piel (crudo)|190|17|0|13
Pechuga de pavo (cruda)|105|24|0|1
Fiambre de pavo (lonchas)|100|18|2|2
Jamón cocido (york)|100|18|1|2.5
Jamón serrano|241|31|0|13
Lomo de cerdo (crudo)|143|21|0|6
Solomillo de cerdo (crudo)|120|21|0|3.5
Chuleta de cerdo (cruda)|200|18|0|14
Lomo embuchado|380|50|1|19
Ternera magra (filete crudo)|125|21|0|4.5
Solomillo de ternera (crudo)|140|21|0|6
Entrecot de ternera (crudo)|200|20|0|13
Carne picada de ternera (magra)|130|20|0|5
Carne picada mixta (cerdo y ternera)|215|18|0|16
Hamburguesa de ternera (cruda)|250|17|1|20
Pierna de cordero (cruda)|170|19|0|10
Conejo (crudo)|135|21|0|6
Chorizo|455|24|2|38
Salchichón|450|25|1|38
Bacon|417|14|1|40
Salmón (crudo)|200|20|0|13
Salmón ahumado|175|22|0|9
Atún fresco (crudo)|140|24|0|5
Atún al natural (lata, escurrido)|100|23|0|1
Atún en aceite (lata, escurrido)|200|27|0|10
Merluza (cruda)|80|17|0|1
Bacalao fresco (crudo)|80|18|0|0.7
Dorada (cruda)|120|20|0|4.5
Lubina (cruda)|110|19|0|3.5
Lenguado (crudo)|85|17|0|1.5
Rape (crudo)|75|15|0|1.5
Sardinas frescas|165|21|0|9
Sardinas en lata en aceite (escurridas)|210|25|0|12
Caballa (cruda)|205|19|0|14
Boquerones frescos|130|20|0|5
Anchoas en aceite (lata)|210|27|0|11
Gambas / langostinos (crudos)|85|18|0|1
Calamar (crudo)|80|15|2|1.5
Pulpo (cocido)|91|18|1|1
Mejillones (cocidos)|90|14|4|2
Almejas (crudas)|70|12|3|1
Surimi (palitos de cangrejo)|96|9|12|0.5
Huevo entero|143|12.5|0.7|10
Clara de huevo|48|11|0.7|0.2
Yema de huevo|322|16|0.6|27
Tortilla francesa (2 huevos)|190|13|1|15
Tortilla de patatas|165|6|12|10
Leche entera|63|3.2|4.7|3.6
Leche semidesnatada|46|3.3|4.8|1.6
Leche desnatada|34|3.4|4.9|0.2
Bebida de soja (sin azúcar)|33|3.3|0.5|1.8
Bebida de almendra (sin azúcar)|15|0.5|0.3|1.1
Bebida de avena|45|0.5|8|1.5
Yogur natural|62|4|5|3.3
Yogur natural desnatado|40|4|5.5|0.2
Yogur griego natural|115|4.5|4|9
Yogur griego 0 %|55|10|3.5|0.2
Skyr natural|63|11|4|0.2
Kéfir|55|3.5|4.5|3
Queso fresco batido 0 %|46|8|3.9|0.2
Requesón|98|11|3|4.3
Queso fresco de Burgos|175|12|2|13
Mozzarella|250|18|1|20
Queso manchego curado|400|26|0.5|33
Queso semicurado|380|25|0|31
Queso edam|330|25|1|25
Parmesano|400|36|0|28
Queso feta|265|14|4|21
Queso crema untable|250|6|4|23
Mantequilla|745|0.7|0.6|82
Nata para cocinar (20 %)|195|2.5|3.5|20
Nata para montar (35 %)|340|2|3|36
Arroz blanco (crudo)|355|7|78|0.6
Arroz blanco (cocido)|130|2.7|28|0.3
Arroz integral (crudo)|350|7.5|74|2.5
Arroz integral (cocido)|123|2.7|26|1
Pasta (cruda)|355|12.5|72|1.5
Pasta (cocida)|150|5.5|30|0.9
Pasta integral (cruda)|335|13|63|2.5
Pan blanco (barra)|265|9|53|1.5
Pan integral|245|9|43|3
Pan de molde blanco|265|8|49|3.5
Pan de molde integral|250|9|42|4
Pan de centeno|250|8|48|1.5
Pan de pita|275|9|56|1.2
Tortilla de trigo (wrap)|310|8|52|7.5
Tortitas de arroz|385|8|82|3
Copos de avena|375|13|60|7
Cereales de maíz (corn flakes)|370|7|84|1
Cuscús (crudo)|360|12|73|1.5
Cuscús (cocido)|110|3.8|23|0.2
Quinoa (cruda)|365|14|64|6
Quinoa (cocida)|120|4.4|21|1.9
Harina de trigo|350|10|73|1
Galletas María|440|7|75|12
Maíz dulce (lata)|85|3|15|1.2
Lentejas (crudas)|340|24|50|1.5
Lentejas (cocidas)|116|9|20|0.4
Garbanzos (crudos)|360|20|55|5
Garbanzos (cocidos)|135|8|19|3
Alubias blancas (crudas)|330|22|50|1.5
Alubias blancas (cocidas)|105|7|16|0.6
Guisantes (congelados)|80|5.5|11|0.4
Soja texturizada|330|50|20|1
Hummus|230|8|11|18
Tofu firme|120|12|2|7
Tempeh|195|19|9|11
Tomate|18|0.9|3.5|0.2
Lechuga|14|1.2|1.8|0.2
Pepino|12|0.7|2|0.1
Zanahoria (cruda)|38|0.9|7.5|0.2
Cebolla|35|1.2|7|0.1
Ajo|130|6|26|0.5
Pimiento rojo|30|1|6|0.3
Pimiento verde|20|1|3.5|0.2
Calabacín (crudo)|18|1.5|2.5|0.3
Berenjena|22|1|4|0.2
Brócoli (crudo)|34|3|4|0.4
Coliflor (cruda)|27|2.4|3|0.3
Espinacas (crudas)|22|2.7|1.2|0.7
Judías verdes (crudas)|25|1.8|4|0.3
Champiñones (crudos)|22|3|0.5|0.3
Espárragos|20|2|2|0.2
Alcachofa|40|3|6|0.2
Acelgas|20|1.8|2.5|0.2
Repollo / col|25|1.3|4|0.2
Rúcula|25|2.6|2|0.7
Puerro|30|2|5|0.3
Apio|15|0.7|2.5|0.2
Remolacha (cocida)|45|1.7|9|0.1
Calabaza|26|1|5|0.1
Patata (cruda)|80|2|17|0.1
Patata (cocida)|85|2|19|0.1
Boniato (crudo)|90|1.6|20|0.1
Patatas fritas de bolsa|540|6|50|35
Patatas fritas caseras|310|4|38|16
Gazpacho|45|1|5|2.5
Aceitunas verdes|145|1|1|15
Tomate frito (bote)|80|1.5|11|3.5
Tomate triturado|25|1.3|4|0.2
Plátano|90|1.2|20|0.3
Manzana|52|0.3|12|0.2
Pera|55|0.4|12|0.2
Naranja|45|0.9|10|0.2
Mandarina|40|0.8|9|0.2
Fresas|33|0.7|6|0.3
Uvas|70|0.7|16|0.2
Melón|32|0.8|7|0.1
Sandía|30|0.6|7|0.1
Piña|50|0.5|11|0.1
Kiwi|55|1.1|11|0.5
Melocotón|45|0.9|10|0.1
Albaricoque|43|1|9|0.1
Cerezas|63|1|14|0.3
Arándanos|57|0.7|12|0.3
Frambuesas|45|1.2|7|0.6
Mango|60|0.8|14|0.4
Aguacate|160|2|2|15
Higos frescos|65|0.8|14|0.3
Granada|70|1|15|1
Pomelo|35|0.7|8|0.1
Ciruela|45|0.7|10|0.2
Dátiles|280|2|65|0.4
Pasas|300|3|70|0.5
Zumo de naranja|45|0.7|10|0.2
Almendras|600|21|7|53
Nueces|650|15|4|63
Avellanas|650|15|6|62
Anacardos|580|18|30|44
Cacahuetes|590|26|9|50
Pistachos|590|20|18|50
Pipas de girasol|590|21|13|50
Semillas de chía|490|17|8|31
Semillas de lino|530|18|2|42
Crema de cacahuete 100 %|600|25|12|50
Crema de cacao con avellanas (tipo Nutella)|540|6|57|31
Aceite de oliva|900|0|0|100
Aceite de girasol|900|0|0|100
Mayonesa|680|1|1|75
Ketchup|100|1.2|23|0.2
Salsa de soja|60|8|6|0
Miel|300|0.3|80|0
Azúcar|400|0|100|0
Mermelada|250|0.4|62|0.1
Chocolate negro 70 %|580|8|35|42
Chocolate con leche|540|7|58|31
Helado de vainilla|200|3.5|24|10
Magdalena|430|6|52|22
Croissant|410|8|45|21
Pizza margarita|260|11|30|10
Croquetas|200|6|19|11
Cerveza|43|0.4|3.5|0
Cerveza sin alcohol|20|0.3|4.5|0
Vino tinto|70|0.1|0.3|0
Destilado (ron, whisky, ginebra)|235|0|0|0
Coca-Cola|42|0|10.6|0
Coca-Cola Zero|0.5|0|0|0
Proteína de suero (whey concentrado)|400|78|7|6
Proteína de suero aislada|375|90|2|1
Pechuga de pavo (cocida)|135|30|0|1
Lomo de cerdo (cocido)|180|29|0|7
Ternera magra (cocida)|175|29|0|6
Hígado de ternera (crudo)|135|20|4|4
Salmón (cocido)|206|22|0|12.5
Merluza (cocida)|95|20|0|1.5
Bacalao fresco (cocido)|105|23|0|0.9
Gambas / langostinos (cocidos)|99|24|0.2|0.3
Trucha (cruda)|140|20|0|6
Pez espada (crudo)|144|20|0|6.7
Sepia (cruda)|79|16|1|0.7
Huevo cocido|155|13|1|11
Leche condensada|321|8|54|9
Camembert|300|20|0.5|24
Brie|334|21|0.5|28
Gouda|356|25|2|27
Cheddar|403|25|1.3|33
Emmental|380|28|1|29
Ricotta|174|11|3|13
Margarina|717|0.2|0.7|80
Pasta integral (cocida)|124|5.3|26|0.5
Avena cocida (con agua)|71|2.5|12|1.5
Bulgur (crudo)|342|12|63|1.3
Bulgur (cocido)|83|3|19|0.2
Mijo (crudo)|378|11|73|4.2
Trigo sarraceno (crudo)|343|13|72|3.4
Cebada perlada (cruda)|352|10|78|1.2
Palomitas de maíz (sin aceite)|387|13|78|4.5
Harina de avena|389|17|66|7
Harina integral de trigo|340|13|72|2.5
Harina de garbanzo|387|22|58|7
Pan rallado|395|13|72|5
Biscotes|390|11|75|4.5
Edamame|121|12|9|5
Habas (cocidas)|110|8|20|0.4
Brócoli (cocido)|35|2.4|7|0.4
Espinacas (cocidas)|23|3|3.6|0.3
Zanahoria (cocida)|35|0.8|8|0.2
Judías verdes (cocidas)|35|1.9|8|0.3
Coliflor (cocida)|23|1.8|4|0.5
Calabacín (cocido)|15|1.1|2.7|0.4
Champiñones (cocidos)|28|2.2|5.3|0.5
Nabo|28|0.9|6|0.1
Rábano|16|0.7|3.4|0.1
Pimiento amarillo|27|1|6|0.2
Cebolleta|32|1.8|7|0.2
Col lombarda|31|1.4|7|0.2
Coles de Bruselas|43|3.4|9|0.3
Endivia|17|1.3|3.4|0.2
Hinojo|31|1.2|7|0.2
Col rizada (kale)|35|2.9|4.4|1.5
Canónigos|21|2|3.6|0.4
Berros|11|2.3|1.3|0.1
Lechuga romana|17|1.2|3.3|0.3
Setas shiitake|34|2.2|7|0.5
Limón|29|1.1|9|0.3
Lima|30|0.7|11|0.2
Coco fresco|354|3.3|15|33
Papaya|43|0.5|11|0.3
Chirimoya|75|1.6|18|0.7
Caqui|70|0.6|19|0.2
Nectarina|44|1.1|10|0.3
Moras|43|1.4|10|0.5
Lichi|66|0.8|17|0.4
Maracuyá|97|2.2|23|0.7
Orejones (albaricoque seco)|241|3.4|63|0.5
Ciruelas pasas|240|2.2|64|0.4
Higos secos|249|3.3|64|0.9
Zumo de manzana|46|0.1|11|0.1
Zumo de piña|53|0.4|13|0.1
Pipas de calabaza|559|30|11|49
Sésamo|573|18|23|50
Piñones|675|14|13|68
Nueces de macadamia|718|8|14|76
Nueces pecanas|691|9|14|72
Castañas asadas|245|3.2|53|2.2
Mantequilla de almendra|614|21|19|56
Tahini (crema de sésamo)|595|17|21|54
Semillas de cáñamo|553|32|9|49
Aceite de coco|862|0|0|100
Mostaza|62|4|6|3.5
Chocolate blanco|540|6|60|32
Cacao soluble (tipo Cola Cao)|375|5|78|4
Café solo|2|0.1|0|0
Bebida de arroz|47|0.3|9.5|1
Leche de coco (lata)|197|2|3|21
Vino blanco|70|0.1|0.3|0
Cava|75|0.2|2|0
Tónica|35|0|8.5|0
Red Bull|45|0|11|0
Gatorade|26|0|6|0`.split('\n').map(l=>{const a=l.split('|');return{n:a[0],k:+a[1],p:+a[2],h:+a[3],g:+a[4]}});
const fnz=t=>t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
FDB.forEach(f=>f.z=' '+fnz(f.n).replace(/[^a-z0-9]+/g,' ')+' ');
function fdS(q){const o=$('fdr');if(!o)return;const t=fnz(q).replace(/[^a-z0-9]+/g,' ').split(' ').filter(Boolean);if(!t.length){o.innerHTML='';return}
const r=FDB.filter(f=>t.every(w=>f.z.includes(' '+w))).sort((a,b)=>(!!a.m-!!b.m)||(b.z.startsWith(' '+t[0])-a.z.startsWith(' '+t[0]))||a.n.length-b.n.length).slice(0,10);
o.innerHTML=r.length?r.map(f=>`<button class="g" style="display:flex;justify-content:space-between;align-items:center;gap:8px;width:100%;text-align:left;margin:4px 0" onclick="fdU(${FDB.indexOf(f)})"><span>${f.m?'🛒 ':''}${esc(f.n)}</span><span class="mut" style="white-space:nowrap">${f.k} kcal · P${f.p} H${f.h} G${f.g}</span></button>`).join('')+'<div class="mut">Valores medios por 100 g, orientativos. Respeta el estado del nombre (crudo o cocido). 🛒 = producto de supermercado (etiquetas AESAN 2022, los 2.500 más vendidos): si la etiqueta actual dice otra cosa, manda la etiqueta.</div>':'<div class="mut">No lo encuentro. Prueba con otra palabra o usa Calcular.</div>'}
const UNT={};`Huevo entero|huevo:55
Clara de huevo|clara:33
Yema de huevo|yema:18
Huevo cocido|huevo:50
Jamón serrano|loncha:15
Jamón cocido (york)|loncha:15
Fiambre de pavo (lonchas)|loncha:15
Queso semicurado|loncha:20
Queso edam|loncha:20
Queso manchego curado|cuña:30
Mozzarella|bola:125;loncha:20
Yogur natural|yogur:125
Yogur natural desnatado|yogur:125
Yogur griego natural|yogur:125
Yogur griego 0 %|yogur:125
Skyr natural|tarrina:150
Leche entera|vaso:200
Leche semidesnatada|vaso:200
Leche desnatada|vaso:200
Bebida de soja (sin azúcar)|vaso:200
Bebida de avena|vaso:200
Pan blanco (barra)|rebanada:30
Pan integral|rebanada:30
Pan de molde blanco|rebanada:28
Pan de molde integral|rebanada:28
Pan de centeno|rebanada:28
Tortilla de trigo (wrap)|unidad:60
Pan de pita|unidad:60
Tortitas de arroz|tortita:9
Biscotes|biscote:8
Copos de avena|cucharada:10;ración:40
Arroz blanco (crudo)|ración:80
Pasta (cruda)|ración:80
Pechuga de pollo (cruda)|filete:150
Pechuga de pollo (plancha/cocida)|filete:110
Salmón (crudo)|lomo:150
Atún al natural (lata, escurrido)|lata:52
Atún en aceite (lata, escurrido)|lata:52
Surimi (palitos de cangrejo)|palito:15
Anchoas en aceite (lata)|anchoa:3
Aceite de oliva|cucharada:10;cucharadita:5
Aceite de girasol|cucharada:10;cucharadita:5
Mantequilla|cucharadita:5;porción:10
Miel|cucharada:20;cucharadita:7
Azúcar|cucharadita:5
Crema de cacahuete 100 %|cucharada:16
Crema de cacao con avellanas (tipo Nutella)|cucharada:15
Mayonesa|cucharada:15
Ketchup|cucharada:17
Almendras|puñado:30
Nueces|puñado:30
Avellanas|puñado:30
Anacardos|puñado:30
Cacahuetes|puñado:30
Pistachos|puñado:30
Plátano|plátano:110
Manzana|manzana:150
Pera|pera:150
Naranja|naranja:130
Mandarina|mandarina:70
Kiwi|kiwi:70
Melocotón|melocotón:130
Aguacate|mitad:70
Tomate|tomate:120
Zanahoria (cruda)|zanahoria:80
Cebolla|cebolla:100
Patata (cruda)|patata:170
Patata (cocida)|patata:170
Aceitunas verdes|aceituna:4
Chocolate negro 70 %|onza:10
Chocolate con leche|onza:10
Galletas María|galleta:6
Croissant|unidad:60
Croquetas|croqueta:30
Tortilla de patatas|ración:150
Proteína de suero (whey concentrado)|scoop:30
Proteína de suero aislada|scoop:30
Zumo de naranja|vaso:200
Cerveza|caña:200;botellín:330
Vino tinto|copa:150
Coca-Cola|lata:330
Coca-Cola Zero|lata:330`.split('\n').forEach(l=>{const[a,b]=l.split('|');UNT[a]=b.split(';').map(x=>{const[u,g]=x.split(':');return[u,+g]})});
const FBK=n=>n.replace(/\s*\([^)]*\)\s*$/,''),FST=n=>/crud[oa]s?\)$/.test(n)?'r':/cocid[oa]s?\)$/.test(n)?'c':'',FPR={};let FC=null,AE=0;
FDB.forEach((f,i)=>{const t=FST(f.n);if(t)(FPR[FBK(f.n)]=FPR[FBK(f.n)]||{})[t]=i});
`Hacendado macarron natural|366|12|74|1.5
Coca cola refresco de cola normal con cafeina cola|42|0|10.6|0
Hacendado leche semi desnatada sin aditivo|46|3.1|4.8|1.6
Gallo spaguetti 3 natural|344|12|68|2
Hacendado tomate frito natural|77|1.5|9.5|3.5
Hacendado loncha fina loncha (sc) jamon cocido|101|18.6|0.9|2.5
Hacendado pieza entera excluir base (sc) espetec natural|421|27.5|1.4|34
Hacendado tomate triturado|26|0.8|5.1|1.1
Incarlopsa jamon curado valor indis|248|33.5|1|12.2
Jungly yogur natural natural|163|2|5|15
Hacendado pipa aguasal natural|636|28.7|5.5|53.7
Coca cola zero refresco de cola sin calorias con cafeina cola|0|0|0|0
Hacendado leche entera sin aditivo|63|3.1|4.6|3.6
Sin marca huevo gallina libre de jaula|154|12.5|0.7|11.2
Hacendado leche desnatada 0,0 sin aditivo|35|3.2|4.9|0.3
Hacendado loncha pechuga de pavo bajo en sal|76|16.5|1.3|0.5
Hacendado queso fundido loncha|242|11.8|12|16
Hacendado tronco atun superfacil|357|19|0.9|31
Coca cola zero zero refresco de cola sin calorias sin cafeina |0|0|0|0
Hacendado cinta bacon cerdo natural|293|16.6|0.5|25
Hacendado mozzarella hilo pizza|281|22|1|21
Hacendado garbanzo legumbre cocida|90|5.5|9.5|2.2
Hacendado pan de molde blanco sin lactosa|256|10|45|3.2
Hacendado loncha loncha (sc) chorizo|356|21|2.7|29
Hacendado pan de molde sn crtz blanco|225|8|42|2.1
Hacendado filete merluza crudo|82|18|0.5|1.2
Hacendado loncha pechuga de pavo natural|78|17.8|0.6|0.5
Hacendado maiz dulce|82|2.5|14|1.4
Hacendado patata frita lisa regular natural|537|7|50|33
Hacendado patata frita lisa regular natural|538|6.3|49|34
Central lechera asturiana leche semi desnatada sin aditivo|45|3.1|4.7|1.6
Hacendado croissant natural sin aditivo|403|8.2|40.5|22.6
Casa tarradellas pieza entera excluir base (sc) espetec natura|421|27.5|1.4|34
Hacendado mayonesa regular sin lactosa|599|0.6|2.4|65
Hacendado frankfurt|201|11.5|5.2|14.9
Hacendado arroz redondo|344|8.2|75|1
Hacendado aceite de girasol refinado|821|0|0|91.2
Coca cola zero refresco de cola (intr s/azucr)sin caloria con |0|0|0|0
Hacendado tortilla patata cbll|193|5.7|17|11
Hacendado fresh salsa guacamole aguacate|149|1.9|2|13.7
Hacendado yogur natural natural|94|3.3|11.6|3.8
Incarlopsa para cocinar jamon curado valor indis|234|33.7|1|10.6
Fanta refresc d nrnj cn gs normal naranja|19|0|4.5|0
Bimbo pan molde rebanada gruesa normal|252|9.8|45|2.7
Hacendado tronco atun superfacil|357|19|0.9|31
Hacendado loncha havarti natural|396|19|1.3|35
Hacendado cuatro quesos hilo|352|25|0|28
Hacendado queso burgos|164|10.9|4.2|11.5
Combino macarron 6 natural|354|12|72|1.2
Hacendado pico normal|416|11.2|77.7|6.2
Hacendado caldo pollo|5|0.5|1.3|0.5
Hacendado zumo de fruta regular naranja|44|0.7|9.9|0.1
Hacendado loncha loncha (sc) lomo embuchado sin lactosa|199|38|0.5|5
Hacendado nuez sin sal natural|716|17|2.2|69.6
Hacendado receta artesanal tomate frito aceite de oliva|201|1.6|14.3|15
Sin marca picado cerdo y vacuno bandeja|172|17|1|12
Hacendado tortilla trigo|294|8|53|5.3
Buitoni oblea empanadilla|342|6.8|48.1|13.2
Hacendado loncha fiambre de york natural|102|11.3|7.1|3.2
Hacendado yogur etnico natural|129|3.9|3.9|10.8
Navidul jamon curado valor indis|212|30|0.5|10
Nestle chocolate natural chocolate con leche sin aditivo sin r|542|6.2|58.9|30.8
Hacendado yogur natural natural|62|3.7|4.1|3.4
Hacendado harina normal par cndmntcn y rpstr|350|10|73|1.3
Hacendado loncha gouda natural|345|23.4|0|27.9
Hacendado galleta maria aceite|443|7|71|14
Hacendado coctel surtido surtido|498|15|41|29
Hacendado zero refresco de cola (intr s/azucr)sin caloria con |0|0|0.1|0
Hacendado patata frita lisa regular aceite girasol crujiente|551|6.3|46|37
Hacendado gaseosa blanca normal|0|0|0|0
Hacendado rebuenas sandwich chocolate|501|6.1|68|22
Hacendado piña su jugo|55|0.4|13.2|0.1
Hacendado queso blanco untar natural|241|4.2|3.7|23
Ligeresa original mayonesa ligero salsa fina|277|0.7|9|27
Hacendado helices vegetal|359|12|74|1.7
Hacendado yogur etnico stracciatella|159|3.4|15.4|9.3
Hacendado tronco atun superfacil|83|16|0.7|0.9
Hacendado natillas vainilla regular|127|3.8|18.1|4.4
Hacendado aceite vegetal light sin sal regular|370|0|2.2|40
Hacendado mantequilla sin sal regular|743|0.5|0.8|82
Hacendado alubia legumbre cocida|83|5.8|10.7|0.4
Hacendado batido chocolate|61|2.1|11|0.7
Hacendado pan de molde blanco|249|9|47|2.1
Hacendado ketchup|115|1.3|27|0
Hacendado mejillon ria gallega en escabeche|193|13|4.1|14
Hacendado mejillon en escabeche|193|13|4.1|14
Hacendado mejillon en escbc cn act d ol|193|13|4.1|14
Hacendado queso fundido polvo pasta|297|21|15|17
Hacendado regaña aceite oliva|448|11.8|65|15
Hacendado fresh ensalada 4 estacions|17|0.9|2|0.2
Hacendado sopa gazpacho tradicional|44|0.8|3.6|2.4
Hacendado queso mozzarella|202|17|2|14
Matutano lay's patata frita lisa regular al punto de sal|509|6.3|52.7|29.2
Hacendado flan vainilla regular|95|2.4|17.7|1.6
Campofrio la original frankfurt|198|13|2.8|15
Hacendado salchichon loncha loncha (sc)|372|22|3.6|30
Hacendado entero esparrago medio natural|15|1.3|1.6|0.1
La selva loncha bacon cerdo ahumado y sin lactosa|349|14.9|1|31.7
La cestera pan de molde blanco sin lactosa|246|9.2|45|2.5
Hacendado lasana bolonesa|143|7.4|14|6.1
Alitey bebida de avena|46|1.4|8.1|0.8
Hacendado refresco de cola normal con cafeina cola|42|0|10.4|0
Sos arroz|347|6.7|77|1.1
Hacendado nacho|540|10|73|22
Hacendado patata prefrita alargado ancho|116|2.1|20|2.4
Hacendado flan huevo al bano maria regular|143|4.6|22.3|3.9
Hacendado yogur sabores surtido|82|3.6|11.4|2.5
Hacendado hot dog normal|270|9|48|4
Central lechera asturiana mantequilla sin sal regular|742|0.6|0.4|82
Hacendado patata prefrita alargada fina|156|2.5|24|5
Hacendado magdalena ffp-magdalenas natural sin relleno|415|5|51|21
Sin marca huevo gallina criada en jaula|150|12.5|0.5|11.1
Solis tomate frito natural|72|1.2|9.1|3.1
Hacendado humus|301|6.4|8.7|25.5
Dia macarron natural|358|11|74|1.5
Carrefour spaguetti natural|349|12|70|1.5
Hacendado emmental hilo gratinar|369|27|0.2|29
Hellmann's mayonesa regular normal|554|0.8|2.2|61
Hacendado champinon laminado natural|21|2.8|1.5|0.1
Nestle nesquik cacao instantaneo lata|386|5.1|78.9|3.6
Hacendado pan rallado normal|368|9.6|78.1|1.3
Dia leche semi desnatada sin aditivo|45|3.2|4.7|1.5
Brillante sabroz arroz basmati cocido|164|3.9|31|2.2
Central lechera asturiana leche entera sin aditivo|63|3.1|4.6|3.6
Orlando tomate frito natural|76|1.1|9.3|3.5
Sin marca hamburgesa cerdo y vacuno bandeja|221|17.7|1.5|16
Matutano doritos triangulo maiz bolsa|497|6.6|56.9|25.8
Hacendado sarta dulce y sin lactosa excluir base (sc) chorizo|443|25|0.2|38
Hacendado loncha mortadela natural|244|13.2|7.3|18
Bruggen copo avena sin procesar natural|375|14|59|7
Hacendado arroz largo|345|7.2|77|0.7
Hacendado aceite de oliva refinado y virgen|822|0|0|91.4
Hacendado pan de molde integral y sin lactosa|247|11|39|3.7
Pepsi max zero refresco de cola (intr s/azucr)sin caloria con |1|0.1|0.1|0
Milbona yogur natural natural|91|3.3|11.6|3.5
Matutano cheeto pelotazos pelotazo maiz bolsa|520|5.4|61.4|27.8
Hacendado leche semi desnatada vitamina y acido folico|44|3|4.6|1.5
Mercadona canonigo|14|1.8|0.7|0.4
Aquarius bebida isotonica normal limon|18|0|4.3|0
Milbona leche entera sin aditivo|63|3.1|4.6|3.6
Hacendado postre con nata chocolate regular|160|3.1|18|8.3
Hacendado yogur liquido sabores regular fresa|67|1.8|12.4|1.2
Melendez patata|62|1.4|13.3|0.2
Eroski huevo gallina criada en jaula|164|13|0.7|12
Hacendado loncha loncha (sc) longaniza natural|351|30|3.7|24
Danone yogur natural natural|60|3.3|4.3|3.3
Hacendado yogur etnico natural|141|3.8|11.1|9
Hacendado natillas vainilla regular|152|3.8|24.9|4
Matutano ruffles patata frita ondulada regular jamon|505|6.1|54.2|28.6
Hacendado almohadilla arroz y avena y trig leche|447|10|65|15.4
La receta huevo gallina criada en jaula|132|12.5|0.6|8.9
Anitin(mercadona) rosquilleta pipa|521|11.5|49.2|30.2
Freshona tomate frito natural|74|1.4|10|3
Hacendado pistacho con sal natural|617|25|10|51
Hacendado maiz rostr pr mcrnds saladas|456|9.8|55|20
Gallina blanca 100% natural caldo casero pollo|5|0.4|0.2|0.3
Hacendado especialidades cookie pepita chcl ngr y c/lche no ba|494|5.5|62|24
Hacendado burguer sin lactosa|270|10|45|4.5
Verdifresh ensalada brote tierno|27|2.6|1.2|0.9
Hacendado lenteja pardina extra|320|24.5|48.1|1.2
Cola cao original cacao soluble bote plastico|377|6.6|78|2.5
Hacendado loncha havarti natural|267|27|1.6|17
Holland corona loncha edam tierna/o|321|25.4|0|24
Carrefour tronco atun superfacil|196|22|0.5|12
Hacendado patata frita ondulada regular jamon|533|6.6|50|33
Sin marca hamburgesa pollo bandeja|148|16|4.3|7.5
Hacendado loncha mortadela aceituna|244|10.5|5.6|20
Hacendado leche desnatada 0,0 vitamina y acido folico|34|3.1|4.7|0.3
Artiach dinosaurios galleta relieve cereal|478|5.7|72|18
Hacendado maxi burguer normal|273|9.4|44|5.9
Hacendado pizza|267|14.4|27.6|11
Matutano cheetos pandilla fantasma de patata bolsa|479|5.8|62.1|22.3
Hacendado nugget pollo|228|13.1|22|9.4
Hacendado tira de maiz bolsa|535|6.3|53.3|32
Hacendado almendra sin sal cruda|603|25|5.4|51
Hacendado crsssss!!! patata frita ondulada regular natural|550|5.7|53|34
Hacendado refresc vtmnd cn lch normal mediterraneo|19|0.4|4.3|0
Real valle loncha loncha (sc) chorizo|316|20|2.7|25
Hacendado pieza entera gamba crudo|72|14.7|0.5|1
Hacendado valencianas ffp-magdalenas aceite girasol sin rellen|445|5.7|54|22
Hacendado gellytina gelatina fresa regular|65|0|16|0
Fanta refresc d lmon cn gs normal limon|19|0|4.4|0
Hacendado masa de hojaldre|395|7.1|42|21.5
El molino del dia pan de molde blanco|242|8.1|48|1.3
El molino del dia pan de molde blanco|246|9.2|45|2.5
Aragonesa harina normal uso comun|349|12|70|1.8
Danone activia yogur natural natural|42|4|5|0.4
Hacendado linnea v yogur natural natural|39|4.5|4.9|0.1
Hacendado tomate frito aceite de oliva|77|1.5|9.5|3.5
Real valle jamon curado reserva|235|29.5|0.3|12.9
Hacendado filete anchoa natural en aceite de oliva|192|25|0.3|10.1
Hacendado queso burgos|68|12.2|4.4|0.2
Hacendado cuquis gusanito bolsa|473|6.5|72|17
Hacendado aceite de oliva virgen extra|822|0|0|91
Hacendado fondue chocolate negro|529|5.8|48|33
Hacendado arroz con leche natural regular|143|3.1|24.2|3.7
Entrepinares queso fundido hilo gratinar|313|21|10|21
Freshona tomate triturado|21|1|3.5|0.1
Hacendado stick excluir base (sc) longaniza sin lactosa|505|32|2|41
Danone activia yogur natural natural|51|3.9|7|0.4
Hacendado loncha loncha (sc) salami natural|462|16|5.1|42
Pepsi refresco de cola normal con cafeina cola|28|0|7|0
Hacendado queso blanco untar natural|142|9.9|7.1|8
Mercadona espinaca|22|0.1|1|0.8
Alipende huevo gallina libre de jaula|150|12.5|0.1|11.1
Brillante arroz redondo cocido|182|3.4|36|2.7
Hacendado patata frita lisa regular churreria|530|7.1|52.3|30.8
Hacendado postre lacteo chocolate bajo en grasa|81|8.4|8.7|1.1
Monells loncha bacon cerdo ahumado|293|15|2|25
El pozo bien star loncha pechuga de pavo natural|75|17|0.5|0.5
Eurovo huevo gallina criada en jaula|133|12.1|0.5|9.2
Nestea bebida de te bajo en calorias limon|19|0|4.5|0
Ybarra mayonesa regular normal|641|0.9|3.4|69
Kania mayonesa regular normal|656|0.9|1.7|71.6
Real valle jamon curado valor indis|234|30|1.5|12
El pozo extratierno escalopin lomo cerdo bandeja|118|20|0.5|4
Dagu huevo gallina criada en jaula|138|12.5|0.7|9.5
Sin marca picado vacuno bandeja|182|17|0.9|12
Hacendado leche entera sin aditivo|63|3.1|4.6|3.6
Hacendado pan de leche natural sin aditivo|332|8.5|51|10
Hacendado entero guisante fino|82|6|11|0.4
Dia tomate frito natural|72|1.1|9.3|3.3
Hacendado loncha loncha (sc) jamon cocido bajo en grasa|101|18.6|0.9|2.5
Alesto selection nuez sin sal natural|712|15.5|3.7|69.1
El horno de mercadona pan rebanado normal|274|11|45.3|4.6
Milbona leche semi desnatada sin aditivo|46|3.1|4.7|1.6
Milbona queso fundido loncha|194|12.7|8.7|12
Roncero loncha mezcla tierno natural|378|21|1.5|32
Hacendado pan de molde integral|238|11|37|3.2
Hacendado guisante mediano|59|4|10|0.2
Hacendado linnea v yogur con frutas surtido|53|4.5|5.7|0.1
Pescanova palito surimi|94|8.4|11.7|1.1
Mercadona lechuga iceberg|16|0.7|1.5|0.6
Fanta zero refresc d nrnj cn gs (intr s/azucr)sin caloria nara|4|0|0.8|0
Hacendado almohadilla arroz y trigo crema chocolate avln|447|7.3|72|14
Hacendado bebida de fruta (intr s/azucr)sin caloria piña|27|0.3|6.3|0
Hacendado+proteinas natillas vainilla regular|77|10|5.8|1.5
Hacendado mantequilla con sal regular|734|0.5|0.8|81
Donuts donut natural sin relleno cubierto de azucar|409|5.8|46|22
Hacendado yogur liquido sabores regular piña coco/fresa platan|65|2.4|10.4|1.5
Hacendado salsa barbacoa|150|1.2|35.5|0.1
Dia leche entera sin aditivo|63|3.1|4.6|3.6
Nocilla original cacao|546|5|58|32
Hacendado leche semi desnatada calcio|51|3.9|5.2|1.6
Hacendado anacardo sin sal natural|604|21.9|19|48.2
Logo carrefour pan de molde blanco|266|9.7|45|4.6
Hacendado natillas chocolate con leche regular|125|3.7|19|3.7
Lovilio mozzarella hilo pizza|300|22.1|2.7|22.3
Choco buns nickleon paw patrol bollo con pepita natural pepita|353|8.6|42|16
Roncero queso burgos|179|11|3.4|13.5
Hacendado classic chocolate natural chocolate con leche sin ad|543|7.9|52|33
Tulipan original aceite vegetal sin sal regular|678|0.5|0.5|75
Hacendado rulo cabra natural|335|17|1.1|29.2
Hacendado loncha loncha (sc) jamon cocido en su jugo bajo en g|99|17.2|1.4|2.7
Campo largo garbanzo legumbre cocida|99|5.6|13.2|1.7
Casa tarradellas pizza|224|14|25.2|7.5
Hacendado sardinilla en aceite de oliva|366|17.1|0.1|33
La casera gaseosa blanca sin calorias|0|0|0|0
Real valle loncha bacon cerdo cocido y ahumado sin lcts|250|16|7.5|20
Logo carrefour tomate frito natural|73|1.2|8.9|3.5
Cuetara choco flakes especialidades galleta y cereal arroz cho|450|6.3|73|14
Incarlopsa jamon curado valor indis|234|33.7|1|10.6
Hacendado pimiento rojo tira|31|0.5|6.1|0.2
Hacendado batido chocolate y leche|61|3.1|10|0.9
Guillen clara liquida gallina|50|11|0.2|0.1
Hacendado penne rigati natural|347|12|67|1.9
Hacendado caldo pescado|4|1|0.5|0.5
Hacendado filete anchoa natural en aceite de girasol|187|24|0.9|9.7
Hacendado cuajada natural regular|90|4.9|6.3|5
La cestera tortilla trigo|316|8|53|7.4
Ocean sea palito surimi|116|8.6|10.9|4.5
Hacendado yogur etnico limon|135|3.3|12.9|7.8
Hacendado figura merluza empanado|240|8.8|26.8|10.9
Alesto coctel surtido natural|646|20.4|6.4|58
Hacendado tronco atun superfacil|363|18|0.2|32
Danone danet natillas vainilla regular|109|3.1|17.7|2.9
Milbona yogur ecologico con cereales fresa|298|2.1|11.5|27
Hacendado yogomix yogur con cereales natural|126|4.8|19|3.4
Bimbo sin corteza pan de molde sn crtz normal|230|9.3|41|2.6
Nixe tronco atun superfacil|292|19|0|24
Hacendado tortilla de patata|157|5.7|11|9.8
Hacendado corazon alcachofa natural|26|1.7|3.2|0.4
Real valle jamon curado reserva|235|29.5|0.3|12.9
Hacendado yogur liquido sabores regular fresa|65|2.4|10.3|1.5
Hacendado filete caballa|308|18|0.6|26
Navidul ayudas jamon curado valor indis|212|30|0.5|10
La cestera croissant natural sin aditivo|454|8.4|45.7|26
Heinz ketchup|102|1.2|23.2|0.1
Hacendado queso vaca|168|11.8|4.5|11.4
Dia huevo gallina criada en jaula|132|12.5|0.6|8.9
Philadelphia original queso blanco untar natural|249|3.7|2.8|25
Hacendado pizza|253|12.1|29.8|9.1
Oreo mini mini sandwich vainilla|476|5.1|68|20
Nutricia leche condensada entera|321|7.5|54.9|8
Dia leche desnatada sin aditivo|35|3.3|4.8|0.3
Central lechera asturiana leche desnatada sin aditivo|34|3.2|4.7|0.2
Hacendado horchata|84|0.6|14|2.7
Pringles original patata frita lisa regular natural|534|5.9|56|31
Central lechera asturiana leche entera sin aditivo|63|3.1|4.6|3.6
Borges cestas cacahuete con sal natural|607|26|6.1|51
El pozo loncha loncha (sc) jamon cocido|89|15.5|1.3|2
Milbona yogur natural natural|61|3.3|3.8|3.5
Consum macarron natural|349|12|70|1.5
Carrefour tomate triturado|20|0.9|3.4|0.5
Philadelphia queso blanco untar natural|154|5.9|4.1|12
Aquarius zero bebida isotonica sin calorias limon|1|0|0|0
Hacendado sandwich chocolate|481|6.8|64|21
Hacendado loncha fiambre magro sandwich natural|118|12.5|8|4
Hacendado loncha chopped de cerdo natural|198|12.6|7.2|13.2
Milbona leche desnatada sin aditivo|34|3.3|4.8|0.2
Real valle loncha fina loncha (sc) jamon cocido|100|18|5|2.4
Schweppes tonica|25|0|5.8|0
Hacendado yogur natural natural|36|4.3|4.5|0.1
Hacendado galleta relieve|472|6.8|68|18
Real valle loncha fina loncha (sc) jamon cocido sin lactosa|98|18.5|0.3|2.5
Milbona yogur etnico stracciatella|148|2.4|15.4|8.2
Hacendado sarta picante sin lactosa excluir base (sc) chorizo|443|25|0.2|38
Pescanova angurinas no es surimi gula al natural|188|8.8|7.5|13.6
Hacendado fresh refresc d nrnj cn gs normal naranja|21|0.1|4.8|0
Hacendado complet galleta tostada|431|7|79|9.2
Certossa burguer normal|260|9.7|46|3.3
Hacendado troceado judia verde plana|31|1.9|4.2|0.2
Hacendado rebanada normal|397|11.9|73.8|5.1
Sin marca hamburgesa vacuno bandeja|207|19.4|0.9|14
Hacendado cacahuete sin sal natural|609|28|8.9|49
Hacendado animadas pjmasks galleta tostada|472|6.8|73|16
Gallina blanca yatekomo noodle pollo|88|1.6|11|4
Milbona emmental hilo|376|28|3|28
Garofalo mafalda corta 79 natural|357|14|73|1
Hacendado mayonesa ligero salsa fina|294|0.7|6.5|31
Calve mayonesa regular casera|384|0.5|5.2|41
Central lechera asturiana leche semi desnatada sin aditivo|45|3.1|4.7|1.6
Chips ahoy! minis especialidades mini cookie pepitas chocolate|504|5.8|64|24
Hacendado yogur etnico fresa|139|3.3|13.8|7.8
Lovilio queso mozzarella|245|18|1.5|18.5
Hacendado especialidad fermentada fresa ligero 0%|53|8.3|5|0.1
La cestera pan de molde normal|233|10|39|2.8
Hacendado salchichon loncha loncha (sc)|339|25|3.6|25
Hacendado patata frita lisa bajo en caloria natural|464|4.4|65|20
Verdifresh canonigo y rucula|24|2.1|1.9|0.5
Hacendado pistacho sin sal natural|616|22|11|53
Hacendado wrap trigo|294|8|53|5.3
La fallera arroz extra|347|6.7|77|1.1
Burgo de arias el original queso burgos|164|11|3|12
Hacendado troceado espinaca|26|2.9|1.6|0.4
Valor huesitos original barrita barrita barquillo & crm d cc|500|6.5|66|23
El horno de mercadona berlina natural sin relleno cubierto de |410|5.4|42|24
Hacendado pizza|267|14.4|27.6|11
Mercadona ensalada cesar|167|8.4|9.8|10
Hacendado especialidad fermentada arandano ligero 0%|53|8.3|5|0.1
Milbona mantequilla light sin sal regular|371|0.2|2.1|40.1
Hacendado bombon sin relleno|576|12|22|46
Pascual leche semi desnatada sin aditivo|46|3.3|4.7|1.6
Puleva batido chocolate y leche|63|3.1|10|1.2
Milbona leche semi desnatada sin aditivo|45|3.2|4.7|1.5
Milbona loncha gouda tierna/o|344|23.1|0|27.9
Hacendado melocoton almibar|74|0.5|18|0
Hacendado mousse chocolate regular|178|4.8|24|6.7
Hacendado troceado cebolla|41|1.2|7.9|0.1
Avicola barco huevo gallina criada en jaula|150|12.5|0.2|11.1
Vita d'or aceite de girasol refinado|827|0|0|91.9
Milbona cuatro quesos hilo|347|25|2|26.5
Hacendado pasa sin semilla|324|4.8|73|1.1
Danone danacol yogur liquido clstrl natural desnatado natural|38|2.7|4.3|1.1
Hacendado digestive avena galleta maria integral avena y fibra|477|7.5|61|21
Edulis ensalada deluxe|22|1.3|1.8|0.5
Tulipan aceite vegetal con sal regular|678|0.5|0.5|75
Hacendado yogur sabores fresa|82|3.6|11.4|2.5
Hacendado bebida de cafe normal capuccino|59|3|8.6|1.3
El pavo facil lasagne natural|360|12|73|1.4
Hacendado fritada aceite de oliva|92|1.2|10|4.8
Gallo ensaladas helices 3 sabores y fibra|344|12|67|2
Hacendado aceite de oliva refinado y virgen|822|0|0|91.4
Carrefour leche entera sin aditivo|63|3|4.7|3.6
Milbona queso fundido hilo gratinar|321|18|11.2|22.7
Aquarius bebida isotonica bajo en calorias naranja|19|0|4.4|0
Hacendado tagliatelle nido huevo|358|12|8|3.3
Hacendado leche desnatada 0,0 calcio|40|3.9|5.3|0.3
Hacendado gelatina fr s az/mltf s az/lm s az ligero|1|0|0|0
Risi risketos palito de maiz bolsa|556|5.5|53.5|35.5
Alesto anacardo sin sal natural|600|20.5|19.8|47.6
Edulis canonigo|25|2.5|1.5|0.6
Hacendado ensaimada natural cubierto de azcr gls|423|9.4|37|26
Pascual leche entera sin aditivo|64|3.2|4.6|3.6
Hacendado digestive galleta maria fibra|483|6|66|21
Hacendado yogur con frutas pera|45|3.7|7.1|0.1
Real valle salchichon loncha loncha (sc)|372|21|4.5|30
Hacendado flan queso regular|148|4.6|18.7|6
Hacendado popitos flash polin helado individual surtido|32|0|8|0
Hacendado tira pollo horno|107|23.4|0.6|1.2
Hacendado caldos pollo|180|12.6|21.7|4.4
Hacendado especialidad fermentada mango y maracuya ligero 0%|56|8.3|5.8|0.1
Pascual bifrutas refresc vtmnd cn lch normal tropical|21|0.6|9.6|0
Hacendado bombon helado individual bombon almendra|324|4.7|31.2|19.8
Roncero loncha vaca tierno natural|384|22.5|1.6|32
Hacendado sobaos ffp-bollería - otros natural sin relleno|461|5.5|50|26
C.l.asturiana sin lactosa leche semi desnatada sin aditivo|45|3.1|4.7|1.6
Hacendado yogur sabores limon|82|3.6|11.4|2.5
Sondey grandino especialidades cookie pepita de choclt ngr no |493|7|58|25
Hacendado tostada integral|376|16|59.4|6
Litoral alubia fabada asturiana|145|6.5|7.6|8.7
Churreria santa ana patata frita lisa regular natural|493|6.7|55.5|26.2
Hacendado base pizza aceite de oliva|270|8.6|49.5|4.2
Danone danonino paw patrol queso fresco suisse fresa|89|6.1|11|2.3
Hacendado cono de maiz bolsa|537|5.2|51|34
Hacendado grana padano hilo|398|33|0|29
Hacendado coctel surtido natural|653|19.5|8.5|58.3
Hacendado salsa alioli|749|1.2|1.5|82
Hacendado zumo de fruta regular manzana|44|0.1|11.3|0.1
Fin carre chocolate natural chocolate con leche sin aditivo si|534|7|57.7|30.2
Dia nuestra alacena loncha pechuga de pavo natural|74|17|0.5|0.5
Hacendado chocolate natural chocolate negro sin aditivo sin re|529|5.8|48|33
Digestive galleta banada/cbrta dietetico fibra sin relleno cub|463|6|63|20
Dia nuestra alacena loncha fina loncha (sc) jamon cocido|98|18.5|0.3|2.5
Hacendado cuidacol yogur liquido clstrl sabores regular fresa|47|3.3|5.2|1.4
Sin marca alas pollo bandeja|181|16.8|0.7|12.5
Auchan macarron natural|349|12|70|1.5
Hacendado yogur sabores macedonia|82|3.6|11.4|2.5
Hacendado yogur natural natural|71|3.8|4.5|4.2
Vemondo bebida de avena|46|1.4|8.3|0.8
Hacendado yogur con frutas fruta silvestre|46|3.8|7.5|0.1
Verdifresh maxi ensalada brote tierno|13|1.8|2.8|0.3
Hacendado fresh rucula|22|2.7|0.4|0.7
Oscar mayer original loncha bacon cerdo ahumado|386|14|1.4|36
Hacendado berberecho al natural|53|8.4|4.8|0
Sin marca longaniza cerdo bandeja|258|15|5.5|19
Freeway zero refresco de cola (intr s/azucr)sin caloria con ca|0|0|0.1|0
Coca cola refresco de cola sin calorias con cafeina cola|0|0|0|0
Lu principe sandwich chocolate|469|6.2|71|17
Hacendado especialidades mini cookie pepita chocolate no banad|486|5.4|65|22
Hacendado mermelada mermelada fresa|210|0.5|52|0
Danone gru mi villano favorito yogur sabores surtido|72|3|10|2.2
Hacendado bombita de maiz bolsa|510|5.6|63|26
Hacendado zumo de fruta regular melocoton y uva|57|0.6|13.3|0.2
Sin marca albondiga cerdo bandeja|248|14|3.7|20
Campo largo arroz redondo extra|348|7.2|77|0.8
Hacendado sandwich helado individual bombon nata|322|3.7|36.9|17.3
Sin marca filete lomo cerdo bandeja|127|21.2|1.5|4
Hacendado cornete helado individual nata y chocolate|319|4|41|15
Hacendado dado pimint rj & pmnt vrd|28|0.9|4.5|0.4
Hacendado curado y cheddar dado|425|26|1.4|35
Sin marca no es surimi langostino cocido|96|22|0|0.9
Flora original aceite vegetal sin sal regular|630|0.5|0.5|70
Snack day patata frita lisa regular al punto de sal|543|6.8|50|34
Gullon digestiva especialidades cookie integral c/ fibra copo |476|7.6|61|21
La cestera magdalena ffp-magdalenas natural sin relleno|446|5.1|53|23.5
Real valle loncha fiambre de york sin lactosa|93|11|7.7|2
Chef select pizza|232|11.5|27.4|8
Hacendado yogur con cereales natural|55|4|7.9|0.5
Milbona loncha gouda natural|358|23|0.1|29
Jumpers snack de maiz bolsa|545|6.1|66|28
Verdifresh acelga|25|1.8|3.7|0
Brillante sabroz arroz redondo|348|6.4|77|1.2
Kraft mayonesa regular normal|362|0.7|6.5|37
Hacendado queso fundido porcion|192|11.8|3.9|14.3
Hacendado loncha mortadela de pavo natural|173|10.9|7.5|11
Val de picones patata|70|1.7|15.7|0.1
Hacendado cuquitos snack de maiz bolsa|522|5|57|30
Hacendado bebida soja|32|3.1|0.9|1.7
Sunny delight refresco vitaminado (int bj azucar)bj caloria fl|17|0|3.5|0
Hacendado pizza|250|11.9|30.1|9.1
Diatosta minigrill tostada mini biscote|396|11|70|7
Real valle frankfurt|233|12|4.5|18.5
Danone danonino paw patrol queso fresco suisse fresa platano|89|6.1|11|2.3
Dia vegecampo tomate triturado|13|1|3.7|0
Hacendado pipa sin sal natural|583|35.3|1.5|47.9
Hacendado linnea v yogur natural cremoso natural|42|4.9|5.6|0
Hacendado troceado judia verde redonda|31|1.9|4.2|0.2
Puleva omega 3 corazon sano preparado lacteo desnatada omega 3|52|2.9|4.9|2.3
Hacendado panna cotta natural regular|201|3.3|21|11
Hacendado pan rallado ajo y perejil|336|8.7|71.3|1.7
Coca cola refresco de cola normal sin cafeina cola|44|0|11.1|0
Don simon limonada refresco sin gas light limon|23|0.1|5.6|0
Sin marca hamburgesa cerdo y vacuno bandeja|203|14.5|2.4|15
La piara tapa negra pate cerdo|269|11|1.4|24
Hacendado cebolla|590|6|40|44
Pescanova corazon merluza crudo|77|15.8|0|1.5
Simon life refresco vitaminado normal naranja|20|0|4.8|0.1
Hacendado saladitos sal|466|9.7|3.9|18.3
Alesto selection almendra sin sal natural|621|24.5|4.8|53.3
Alesto selection almendra sin sal natural|621|24.5|4.8|53.3
Hacendado bocadito natural sin relleno base cacao|477|6.1|49|28
Campo largo alubia legumbre cocida|81|5.1|10.5|0.8
Pipas g pipa con sal tijuana|263|13|1.4|22
Hacendado caldo verdura|5|0.5|0.5|0.6
Hida tomate frito aceite de oliva|90|1.2|9.1|5.4
Oreo spooky sandwich vainilla|476|5.3|68|20
Freshona entero pelado esparrago medio natural|26|2.1|2.7|0.3
Hacendado pan de molde sn crtz normal|208|9.2|34|2.5
Kania 100% natural caldo pollo|6|0.5|0.6|0.2
Dia nuestra alacena cinta bacon cerdo cocido|289|15|1|25
Snack day cono de maiz bolsa|530|4.2|57|31
Hacendado queso queso fresco cabra|262|12.7|3.4|21.9
Logo carrefour aceite de girasol refinado|900|0.5|0.5|100
Hacendado cuidacol yogur liquido clstrl natural regular natura|47|3.3|5.2|1.4
Carbonell original aceite de oliva refinado y virgen|900|0|0|100
Chef select tortilla patata cbll|158|5.5|11|9.9
Hacendado hilo fundir|284|19|7|20
Ifa eliges macarron natural|344|12|68|2
Matutano lay's bugles 3d's cono de maiz bolsa|516|5.9|60.9|27.5
Aquarius bebida isotonica normal naranja|19|0|4.4|0
Hacendado minibombon helado individual bombon surtido|311|3.8|30.8|19.2
Hacendado troceado brocoli|29|3|1.8|0.4
Mercadona ensalada de la casa|45|1.3|6|1.3
Coca cola zero zero refresco de cola (intr s/azucr)sin caloria|0|0|0|0
Hacendado tira de pollo al natural|107|23.4|0.6|1.2
Hacendado aceite vegetal con sal regular|543|0.5|0.5|60
Consum leche semi desnatada sin aditivo|46|3.1|4.7|1.6
Hacendado coctel bolsa|512|4.6|60|27
Hacendado especialidad fermentada natural ligero 0%|52|10|3.1|0.5
Milbona lingote emmental natural|370|28.2|0.1|28.5
Sin marca san jacobo|175|8.6|21.2|5.7
Ocean sea filete merluza crudo|89|15|0.8|2.9
Hacendado filete merluza al huevo|189|11|13.8|10.1
Snack day tira de maiz bolsa|536|7|55|31
Hacendado frankfurt queso|212|12.1|5.5|15.7
Donuts donut natural sin relleno chocolate|473|6.3|42|31
Hacendado gellityna gelatina limon/naranja/multifruta regular|60|0|14.8|0
La cestera regaña aceite oliva|439|9.9|67.2|13.9
Nocilla chocolate y leche|550|4.5|60|32
Verdifresh ensalada gourmet|14|1.1|0.8|0.3
Logo carrefour arroz semi largo|347|7|77|1.2
Pescanova palito cangrejo|100|7.4|11.2|2.5
Jumpers coctel bolsa|545|6.1|65.8|28.2
Hacendado leche entera sin aditivo|62|3|4.5|3.6
Hacendado zero refresco de cola (intr s/azucr)sin caloria sin |0|0|0.1|0
Hacendado aceite de oliva virgen|819|0|0|91
Hacendado bebida de fruta (intr s/azucr)sin caloria melocoton|26|0.5|5.1|0.1
La cestera pan de leche natural sin aditivo|338|9.5|50.3|10.5
Garfitos snack de maiz bolsa|466|6|60|22
Hacendado zumo de fruta regular pina y uva|54|0.6|12.9|0
Hacendado surtido crudo|89|15.6|2.5|1.9
Hacendado tiramisu natural regular|232|4.2|30.9|8.7
Hellmann's gran mayonesa mayonesa regular normal|573|0.8|2.3|63
Hacendado pan molde sandwich blanco|255|9|48|2.2
Hacendado fresh refresc d lmon cn gs normal limon|20|0|4.6|0
Milbona yogur ecologico con frutas fresa|194|2.5|5.5|18
Actimel yogur liquido natural regular natural|73|3|10.8|1.6
Bimbo pan de molde artesan normal|255|8.2|48|2.7
Dia queso fundido loncha|199|13|8.1|12.7
Hacendado cacahuete con sal natural|613|22.7|13|50.4
Casa tarradellas cinta bacon cerdo ahumado|293|16.6|0.5|25
Freeway refresco de cola normal con cafeina cola|39|0|9.8|0
Hacendado queso feta|277|16|1|23.2
Hacendado torrezno bolsa|592|50.2|2|43.4
Hacendado rebanada multicereal|395|14.1|58|9.2
Campofrio snack'in mini excluir base (sc) fuet natural|510|29|4.1|42
Hacendado fresh zero refresc d nrnj cn gs (intr s/azucr)sin ca|4|0.1|0.6|0
Hacendado loncha cheddar natural|392|26|0|32
Rocher bombon avellana|603|8.2|44.4|42.7
Hacendado leche semi desnatada sin aditivo|44|3|4.6|1.5
Hacendado pollo para kebab|191|22.4|2.7|10
La mondejana huevo gallina criada en jaula|150|12.5|0.5|11.1
El pozo 1954 loncha fresca loncha (sc) jamon cocido|111|19.4|0.5|3.5
Danone danacol yogur liquido clstrl sabores desnatado fresa|38|2.7|4.3|1.1
Cacaolat batido cacao|80|2.7|12.9|1.5
Real valle cinta bacon cerdo ahumado|289|15|1|25
Logo carrefour mozzarella hilo|301|24|3.2|21
Delice postre con nata chocolate regular|114|3.1|16.1|4
Hacendado leche fresca entera|62|3.1|4.5|3.5
Hacendado salsa de soja|74|7.5|8.3|0
Dia queso burgos|184|11|3.6|14
Real valle pieza entera excluir base (sc) fuet natural|458|23.5|5.5|38
Kit kat barrita barrita galleta|514|7.8|59|26.8
Hacendado bebida de te (intr s/azucr)sin caloria limon|1|0|0.1|0
Hacendado arroz categoria i|345|7.9|76|0.7
Gallina blanca sopa pollo con fideo fino|24|0.8|4.8|0.1
Hacendado no es surimi langostino cocido|93|21|0.5|0.8
Seven up refresco de lima lmn normal lima-limon|19|0|4.7|0
Hacendado leche semi desnatada sin aditivo|44|3|4.6|1.5
El caserio queso fundido loncha|208|14|8.9|12
Hacendado bebida isotonica normal limon|19|0|4.4|0
Hacendado huevo cocido gallina|153|12.5|0.5|10
Gallo harina extra uso comun|352|9|75|1.2
Anecoop bouquet naturane zanahoria|38|0.9|6.7|0
Hacendado yogur con cereales natural|95|3.7|12.9|2.9
Tosfrit kasky's anillo de maiz bolsa|474|4.9|67.2|19.7
Hacendado caldo cocido|6|0.5|1.5|0.5
Milbona yogur natural cremoso natural|76|4.8|5.6|3.5
Bimbo natural 100% pan de molde blanco|252|9.6|45|2.8
La huerta de hacendado sopa gazpacho|75|0.6|2.5|7
Hacendado no es surimi boqueron en vinagre en aceite|203|19.4|0.8|13.6
Hacendado tira pota empanado|175|9.7|12.3|9.6
Hacendado cacao|547|4.4|56|33
Hacendado queso fresco batido natural|46|8|3.5|0.1
Milbona yogur sabores surtido|74|2.9|10.7|1.9
Consum tomate triturado|22|1|3.6|0.2
Guillen canarias huevo gallina criada en jaula|150|12.5|0.5|11.1
La huerta de hacendado sopa salmorejo|134|1.5|9.5|10
Hacendado cornete helado individual nata|299|3.9|37|15
Matutano lay's patata frita lisa regular campesina|501|6.5|53.4|27.9
Chovi salsa alioli ajo aceite|749|1.2|1.5|82
Hacendado surtido galleta|516|4.8|60|28
Hacendado sopa salmorejo|85|1.1|5.1|6.4
Hacendado avellana sin sal natural|710|18|3|68
Garcia millan sopa salmorejo cn aceite oliva|186|1.8|12|14
Pringles patata frita lisa regular nata y cebolla|525|6|56|30
Hacendado almendra con sal natural|582|25.3|11|45.8
Philadelphia original queso blanco untar natural|249|3.7|2.8|25
Brillante arroz|349|6.9|75|1.8
Melendez sabor autentico patata|62|1.4|13.3|0.2
Hacendado stick patata bolsa|529|2.1|57|32
Hacendado copo maiz natural|373|6.7|82|1.1
Logo carrefour pan de molde sn crtz blanco y bajo en azucar|252|8.9|43|4.2
Danone yogur natural natural|72|3|10|2.2
Lu principe mini mini sandwich chocolate|510|6.3|63|25
Hacendado troceado ensaladilla|65|2.5|12|0.2
Hacendado tonica|35|0|8.2|0
Hacendado bebida de fruta (intr s/azucr)sin caloria naranja|25|0.3|5.7|0
Hacendado yogur con frutas kiwi|47|3.8|7.7|0.1
Dia ensalada brotes|19|2.1|0.6|0.4
Luengo garbanzo legumbre cocida|95|5.4|12|1.9
Hacendado tostada integral sesamo fibra|391|13|60.1|7.6
Hacendado petit queso fresco suisse fresa y platan o frs|101|7.5|11|3
Trina refresco sin gas bajo en calorias naranja|19|0.1|4.3|0
Hacendado lenteja legumbre cocida|81|5.7|11.2|0.4
Calvo atun superfacil|265|20|0|20
Hacendado fresh ensalada gourmet|21|1.5|2.2|0.5
Sin marca flautas bacon y queso|317|13.8|26.5|16.9
Sin marca picado cerdo y vacuno bandeja|206|15|1.5|15
Hacendado loncha chopped cocido en lata|185|12|6|13
Danone yogur sabores limon|72|3|10|2.2
El caserio queso fundido hilo pasta|297|22|4.6|20
Hacendado snack de trigo bolsa|520|8.7|54|30
Hacendado yogur liquido con trozos regular fresa platano|76|2.3|12.4|1.9
La cestera minipalmera natural sin relleno|550|4.8|60|32
Dia aceite de girasol refinado|828|0|0|92
La huerta de hacendado sopa salmorejo cn aceite oliva|134|1.5|9.5|10
Aquarius bebida isotonica bajo en calorias limon|18|0|4.4|0
Hacendado yogur sabores coco|82|3.6|11.4|2.5
Hacendado coctel con sal barbacoa tex mex y miel|547|16.2|37|36.1
Hacendado canelon carne cn bechamel|153|9.2|11.4|7.8
Hacendado croqueta jamon|205|7.4|20|10
Hacendado yogur con frutas piña|49|3.6|8.5|0.1
Hacendado alubia fabada|175|6.1|9.3|12
Carrefour loncha gouda natural|370|25|0|30
Hacendado tomate entero pelado|26|0.8|5.1|0.1
Hacendado ensalada de cangrejo|234|5.2|14.6|17
Ocean sea salmon pescado ahumado|167|20.7|0|9.4
Dia nuestra alacena loncha loncha (sc) chorizo|261|18.5|1.7|20
Campofrio pizza & salsa pizza|278|10|37|10
Fanta zero refresc d lmon cn gs (intr s/azucr)sin caloria limo|2|0|0|0
Orlando tomate frito natural|76|1.1|9.3|3.5
Real valle loncha loncha (sc) salami natural|458|17|3|42
Real valle loncha pechuga de pavo natural|100|16|2.7|2.8
Hacendado pasta rellena carne|267|11|38|7
Hacendado troceado coliflor|28|2.2|3.1|0.3
Hacendado aro avena integral natural|390|13|55|5.8
Hacendado bocata|212|13.5|0.7|17.2
Galbusera cracker normal|438|10|69.2|12.8
Nesquik petit queso fresco suisse chocolate|171|4.1|22.6|6.9
Hacendado yogomix yogur con cereales natural|128|4.8|18|4.1
Delice flan vainilla regular|99|2.2|18.8|1.5
Hacendado yogur con frutas surtido|91|3.6|13.1|2.7
Chef select masa de hojaldre|398|5.7|39.1|22.4
Vita d'or harina normal par cndmntcn y rpstr|349|9|71.3|2
Hacendado filete bacalao crudo|51|14|1|1.5
Hacendado pan de molde integrl sn azucr sn lacts|245|11|38|3.9
Carrefour discount macarron natural|344|12|68|2
El pozo pieza entera excluir base (sc) fuet natural|463|24|6|37
Aguilar patata|71|2.2|15.2|0.2
Hacendado sopa gazpacho|44|0.8|3.6|2.4
Bon preu macarron grueso natural|344|12|68|2
Sprite refresco de lima lmn bajo en calorias lima-limon|9|0|2|0
Casa tarradellas pizza|267|14.4|27.6|11
Risi triskys aro bolsa|530|5.7|71.1|24.8
Hacendado barrita barrita leche|556|8.1|54|34
Real valle loncha fina loncha (sc) jamon cocido sin lactosa ba|120|19|2|4
Hacendado san jacobo cerdo fiambre y queso|179|7.5|29|3.5
Hacendado mostaza america normal|75|3.8|2.3|5.3
Hacendado patata frita lisa regular campesina|538|6.8|51|33
Sin marca hamburgesa pollo pavo bandeja|129|18.4|2.6|5
Hacendado gellytina gelatina fresa sin azucar ligero|1|0|0|0
Hacendado leche fresca semi desnatada|44|3.1|4.6|1.5
Hacendado troceado alcachofa|37|3.3|2.7|0.2
Edulis rucula|28|3.4|1.3|0.6
Oscar mayer jumbo classic|233|12|1.3|20
Snack day nacho|476|6.2|60|22.5
Jovi flautas pollo y queso|232|7.9|31.5|7.9
Hacendado pan de molde normal|272|11|39|6.7
Hacendado zero bebida de almendra|16|0.5|0|1.5
Freshona pimiento piquillo tira|33|1.5|5.4|0.5
Hacendado entero guisante|82|6|11|0.4
Hacendado digestive avena galleta banada/cbrta dietetico avena|490|7.8|61|23
Caja roja bombon surtido|553|6.8|54.1|33.8
Dia lactea yogur natural natural|62|3.3|4.3|3.5
Danone oikos yogur etnico natural|122|3.2|4.1|10
Hacendado queso fundido porcion|151|11.5|6|9
Hacendado anacardo con sal natural|617|18|22|50
Reina natillas vainilla regular|132|2.5|23|3.3
Hacendado mermelada mermelada melocoton|210|0.5|52|0
Oscar mayer bocadillo classic hot dog|233|12|1.3|20
Bien estoy con lidl huevo gallina libre de jaula|148|12.7|0.5|10.8
Hacendado pan de molde sin lactosa|291|11|38|9.3
Estrella snack de maiz bolsa|537|5|62|29
Carrefour cuatro quesos hilo|347|24|2.6|26
Hacendado cornete helado individual vainilla|319|4.3|36|17
Snack day gourmet patata frita lisa regular aceite de oliva|536|5.9|49|34
Hacendado helado chocolate c/trocitos|292|4.6|29|17
Hacendado bebida soja|45|3.5|3.5|1.8
Hacendado crema de leche|522|6.5|54.4|30.8
Mini babybel pieza entera snacking bola natural|308|23|0.5|24
Hacendado batido vainilla|53|2.2|10|0.5
Hacendado pieza entera almeja cocido1|63|10|4.5|0.6
Sin marca hamburgesa vacuno bandeja|194|15|2|14
Hacendado empanadilla atun|255|5.6|27.9|13.5
Maxi burger burguer normal|261|9.7|46|3.3
Noel loncha fresca loncha (sc) jamon cocido cocido en lata sin|126|18|1.4|5.4
Alpro yogur vegetal soja con frutas natural sin lactosa|56|3.9|2.4|3
Danone gru mi villano favorito yogur sabores macedonia|72|3|10|2.2
Hacendado chocolate natural chocolate blanco sin aditivo sin r|556|6.6|56|34
Hacendado petit de bolsillo queso fresco suisse liquido fresa|97|6.3|12|2.6
Jamcal jamon curado valor indis|272|29.8|1|12.8
Hacendado rosca|298|12|40|10
Nutella cacao|539|6.3|57.5|30.9
Apis tomate triturado|21|1|3.5|0.1
Milbona leche semi desnatada sin aditivo|46|3.2|4.7|1.5
Hacendado sandwich crema|473|5|69|19
Hacendado loncha fiambre de lomo natural|105|16.2|2.2|3.5
Chef select tradicional sopa gazpacho|50|0.6|3.7|3.2
Edulis ensalada 4 estacions|18|0.8|2.1|0.4
Alesto cacahuete con sal natural|619|24.4|11|51.2
Nestle kitkat popchoc yogur natural natural|189|2.4|4.4|18
Alteza macarron natural|349|12|70|1.5
Edulis ensalada variada|23|1|2.7|0.5
Roncero cuna mezcla semi curado natural|417|25|1.5|34.5
Hacendado cacahuete gragea cacahuete|544|14|41|34
Finissimas las autenticas loncha fina loncha (sc) jamon cocido|91|18|1.3|1.5
Avecrem caldos pollo de corral|182|10|14|9.4
Hacendado sandwich helado individual nata|276|4.1|42|10
La cestera pan de molde sn crtz blanco sin lactosa|250|9.2|46|2.5
Hacendado salteado verdura|36|2|5|0.3
Roncero loncha mezcla semi curado natural|417|25|1.5|34.5
Danone yogur sabores surtido|72|3|10|2.2
Hacendado chocodays copo trigo chocolate y fibra|396|9.3|72|5.5
Hacendado burguer normal|269|2.5|48|4
Hacendado aceite de oliva virgen extra|822|0|0|91
Nestea bebida de te (intr s/azucr)sin caloria limon|1|0|0|0
Real valle loncha loncha (sc) longaniza sin lactosa|440|32|7|33
Philadelphia queso blanco untar natural|249|3.7|2.8|25
Chene d'argent rulo cabra natural|279|17|1|23
Danone yogur sabores fresa|72|3|10|2.2
Milbona linea frutas yogur con frutas frutas bosque/piña/fresa|51|5.3|6.3|0.2
Sin marca hamburgesa pollo bandeja|154|14.7|1.3|9.4
Danpo alas pollo|205|18|0|15
Consum pan de molde normal|270|9.6|46|4.6
Hacendado corto esparrago medio chino|15|1.3|1.6|0.1
Hacendado masa de empanada|362|5.4|43|18.7
Solevita zumo de fruta regular naranja|47|0.6|11.1|0.5
Hacendado pizza|296|14.4|27.6|14.2
Pascual leche desnatada 0,0 sin aditivo|34|3.4|4.8|0.1
Hacendado caldos paella y fideua|17|0.5|0.6|1.2
Campofrio pizza & salsa pizza|270|10|35|10
Hacendado coctel sin sal surtido|627|23|5.7|54
Logo carrefour classic yogur natural natural|61|3.5|4.9|3
Hacendado miel milflores|333|0.5|83|0
Hacendado galleta banada/cbrta cacao crema chocolate blanco|533|5|62|29
Delicato loncha fina loncha (sc) jamon cocido sin lactosa|113|20|1|3
Chufi original horchata|81|0.6|13|2.8
Hacendado patata frita paja regular natural|545|6.9|51|34
Hacendado bebida de fruta regular bahamas|33|0.1|8|0
Nixe tronco atun con abrefacil|195|26.3|0|10
Central lechera asturiana leche desnatada 0,0 sin aditivo|33|3.2|4.7|0.1
Logo carrefour pan de molde integrl baj en gras azucr|237|10|40|2.8
Hacendado yogur sabores coco|35|4.3|4.4|0.1
Milbona gelatina fresa ligero 0%|76|0|18.9|0.1
Ines rosales torta de aceite sin huevo y sin lactosa sin relle|493|6|61|24
Dia funky frank frankfurt|198|13|2.8|15
Hacendado loncha pechuga de pollo braseado|84|16.9|1.3|1.2
Hacendado fresh espinaca|28|3.4|1.1|0.6
Garcia millan sopa gazpacho con aceite oliva|63|1.1|2.2|5.4
Hacendado galleta maria integral c/ fibra|423|7|74|10
Sin marca bebida energetica normal|48|0|11.4|0
Noel loncha fresca loncha (sc) jamon cocido braseado|126|18|0.6|5.2
Hacendado yogur liquido natural regular natural|68|2.6|10|2
Chef select pizza|246|11|29|9.1
Kas refresc d nrnj cn gs normal naranja|24|0|4.1|0
Nordwaldtaler copo avena integral s/procesar natural|372|13.5|58.7|7
Milbona batido cacao|67|3|10|1.5
Hacendado minibombon helado individual bombon almendra vanl|310|4.6|29.3|19
Hacendado troceado menestra con haba baby|49|3.3|6.4|0.3
Hacendado pan de centeno rebanado normal|265|10|35|7.8
Dia yogur etnico natural|125|3.6|5.4|9.9
Logo carrefour classic leche semi desnatada sin aditivo|46|3.1|4.8|1.6
Hacendado pasta sin relleno|174|4.5|37.6|0.4
Hacendado loncha galantina pavo y cerdo trufado con pistacho|179|13|4|12
Dia arroz extra|342|7.6|75|0.8
Gallina blanca 100% natural caldo cocido casero|4|0.3|0.2|0.3
Barilla penne rigate 73 natural|359|12.5|71.2|2
Hacendado cacao instantaneo bolsa|361|5.4|77|3.3
Hacendado pizza|245|14.7|26|9.1
Dia nuestra alacena jamon curado valor indis|178|30|1|6
La huerta de hacendado sopa gazpacho con aceite oliva|75|0.6|2.5|7
Edulis verdura para micrnds|33|3|2.1|0.8
Hacendado chocolate y leche|550|4.5|57|33
Hacendado pipa con sal natural|665|22|3.6|61
L'illa especialidades selectas sobrasada|590|7.6|4.9|60
Hacendado chocolate cn ingrdnt chocolate negro almendra entera|547|9.5|37|38
Hacendado fresh verdura para micrnds|70|1.7|15.7|0.1
Milka oreo chclt rln cn ingrdnt chocolate con leche galleta de|564|4.8|56|35
Hacendado datil desecada sin hueso|298|2|68.9|0.5
Carrefour loncha edam natural|312|24|0|24
Hacendado salteado ptta y salchicha|149|4.3|17|6.6
Hacendado coulant chocolate|373|6.9|40.7|19.5
Sin marca picado cerdo bandeja|212|17|1|16
Hacendado roditas galleta banada/cbrta rosquilla chocolate sin|502|6.6|64|24
Carrefour leche desnatada sin aditivo|35|3.2|4.8|0.5
Armando tortiglioni natural|354|14|70.2|1.3
Hacendado yogur con frutas mango|85|3.5|11.8|2.6
Sin marca entera excluir base (sc) chistorra sin lactosa|400|14|0.5|35
Hacendado minipalmera natural sin relleno|527|6.3|54|31
El molino del dia burguer normal|277|9.5|47|5
Freshona maiz dulce|78|2.6|12|1.7
Hacendado rellen pr fajita cn pollo|68|7.2|7.3|0.7
Dia seleccion picado cerdo y vacuno bandeja|210|16|2.3|15
Hacendado+proteinas especialidad fermentada limon ligero 0%|56|8.3|5.2|0.1
Hacendado sandwich|248|14.2|29.4|8.2
Nurture harina precocido uso comun|357|9.2|75|1.6
Hacendado yogur con fruta batida cremoso tropical|46|3.6|7.1|0.1
Nutella chocolate|539|6.3|57.5|30.9
Hacendado bebida de te normal limon|22|0|5.4|0
Central lechera asturiana leche entera sin aditivo|63|3.1|4.6|3.6
Matutano lay's gourmt original patata frita lisa regular natur|520|5|53.9|30.8
Hacendado yogur natural natural|44|4.5|5.4|0.1
Cola cao energy batido cacao|65|3.3|11|0.8
Dia hola zero refresco de cola (intr s/azucr)sin caloria con c|1|0|0|0
Dia mozzarella hilo pizza|299|24.5|2.2|21.4
Nixe tronco atun superfacil|186|24|0|10
Hacendado minicornete helado individual bombon nata|352|4.7|40.3|18.6
Hacendado entero jamon de pavo bajo en grasa|85|14|1.5|2.5
Hacendado pieza entera mejillon cocido1|95|14|3.2|2.7
Nixe tronco atun con abrefacil|68|16|0|0.3
Delave albondiga|184|16.1|11.3|8.2
Milbona original queso blanco untar natural|238|5.5|3|22.5
Hacendado cacahuete sin sal natural|618|24|13|50.4
Hacendado yogur sabores limon|35|4.3|4.4|0.1
Pagani tortellini carne y huevo|394|14|61|10
Matutano ruffles original patata frita ondulada regular natura|513|6|53.7|29.7
Galbani queso mozzarella|238|17|2|18
Kania ketchup|96|1.3|22|0
Donettes clasicos donete natural sin relleno chocolate|457|5.7|49|26
Hacendado salsa ranchera|402|1.1|5|41.5
Yosoy bebida de avena sin lactosa|47|1.6|8.2|0.7
Kinder sorpresa huevo huevo y figura chclt sorpresa|552|8.1|52.3|34.2
Hacendado yogur natural cremoso natural|45|4.7|5.8|0.3
Hacendado pipa y cacahuet y mz surtido surtido|565|21|26|40
Hacendado galleta banada/cbrta crema chocolate blanco|497|6.6|65|23
Campo largo arroz largo|348|7.2|77|0.8
Carrefour loncha bacon cerdo ahumado|393|13|2|37
Chef select pizza|256|14|27|9.8
Hacendado pan de molde normal|261|5.8|34|6.8
Hacendado maiz rostr pr mcrnds mantequilla|446|11.5|52|19.2
Bueno barrita barrita crema de avellana|572|8.6|49.5|37.3
Real valle sarta dulce excluir base (sc) chorizo|487|24|1|43
Hacendado noodle yakisoba soja|199|4.6|25.9|8.1
Milbona mantequilla con sal regular|725|0.7|0.5|80
Mercadona espinaca baby|22|2.7|1|0.8
La cestera hot dog normal|264|9.4|46|3.9
Hacendado yogomix yogur natural y gragea natural|312|2.4|11.9|28.3
Hacendado tostada integral de espelta|382|17|58.7|6.4
Certossa pico integral|398|11|80|2.8
Hacendado yogur sabores platano|82|3.6|11.4|2.5
Hacendado galleta mantequilla|512|5.9|63|26
Carrefour patata prefrita alargada|147|2.3|22|5
La bella easo weikis bollo con pepita natural pepitas chclt cn|344|8.5|48|12
Cuetara mini campurrianas especialidades pasta casera sin rell|455|5|74|15
Verdifresh ensalada maxi gourmt|23|1.4|3.1|0
Freshona entero guisante fino|81|5.7|9.1|1
Ifa eliges tomate frito natural|73|1.3|8.7|3.3
Hacendado picatoste|519|8.5|57|28.1
Hacendado sopa pollo con fideo|322|12.9|57.3|3.9
Hacendado postre con nata avellana regular|122|2.6|17|4.8
Hacendado burger queso fundido loncha|230|9.8|14|14.7
Facundo pipa con sal natural|576|32|6.3|45
Bon preu huevo gallina campera/o|141|13|0.7|9.7
Danone danet natillas chocolate regular|121|3.2|19.9|3
Solevita zumo fresco regular naranja|42|0.6|9.6|0.1
Real valle loncha pechuga de pavo sin lactosa reducido sal|93|15|1.5|3
Alesto pistacho con sal natural|605|26.5|10.3|49.2
Vega e hijos queso burgos|241|15|2.6|19
Ocean sea pieza entera gamba crudo|50|11|0|0.7
Knorr doble caldo caldos carne con aceite oliva|256|9.5|8|20
Bonnysa tumaca tomate|23|0.5|3.6|0.5
El pozo bien star loncha fina loncha (sc) jamon cocido|94|18.5|1.5|1.5
Sondey neo sandwich crema|473|5|69|19
Nestle dolca chocolate natural chocolate con leche sin aditivo|526|5.5|63.2|27.5
Hacendado lasana|165|5.9|12|10
Danone activia yogur natural natural|66|3.3|3.9|3.8
Hacendado griego yogur etnico mango|139|3|13.6|8
Hacendado panecillo normal|411|11.1|69.2|9
Consum loncha mezcla tierno natural|384|22.5|1.6|32
Hacendado cono de maiz bolsa|509|5.1|60|27
Maizena harina normal uso comun|355|0.5|86|0.5
Milka chocolate natural chocolate con leche sin aditivo sin re|539|6.5|57|31
Hacendado chocolate natural chocolate negro sin aditivo sin re|597|12|20|49
Logo carrefour salsa guacamole|156|2.3|3.7|14.1
Pescanova palito surimi|94|8.4|11.7|1.1
Certossa tiernisimo pan de molde sn crtz normal|239|8.1|43.9|3
Noel delizias al corte loncha pechuga de pavo sin lactosa|79|16|1.8|0.9
Hacendado patata brava|162|2|16|9.5
Hacendado galleta banada/cbrta canela sin relleno cubierto de |468|6.4|71|17
Eroski basic spaguetti natural|350|11|72|1.2
Proactiv original aceite vegetal sin sal regular|315|0.5|0.5|35
Snack day patata frita lisa regular natural|551|6.3|46.4|36.7
Hacendado gelatina fruto rojo ligero 0%|39|6|3.8|0
Milbona yogur con frutas surtido|96|2.9|14.6|2.5
La villa macarron natural|350|11|72|1.2
Hacendado chocolate natural chocolate negro sin aditivo sin re|568|10|32|42
Hacendado panecillo tomate oregano|514|9.4|51.2|29.3
Dia mari marinera tronco atun con abrefacil|333|18|0|29
Freshona tomate frito aceite de oliva|79|1.4|10|3.5
Real valle loncha pechuga de pavo braseado sin lactosa|88|15|2.9|1.8
Hacendado nuez sin sal natural|653|18|11|58
Krissia palito surimi cangrejo|92|9|9.6|2
Hacendado arandano desecado|342|1|79|1.4
La hacienda judia verde redonda|16|0.7|2.6|0.2
Solevita zumo de fruta regular melocoton y uva|55|0.5|12.8|0.2
Milbona queso fundido porcion vaca|196|7.8|4|16.5
Oscar mayer original wiener|233|12|1.3|20
Diatosta minigrill mini tostada trigo|384|11.8|76.9|2.4
Danone activia yogur con fruta cremoso lima-limon|98|4.1|13.6|3
Hacendado saladitas aperitivo normal|468|7.6|63|20
Hacendado queso mozzarella|153|17|1|9
Eroski basic pan de molde normal|246|9.2|45|2.5
Gallo maccheroni huevo|350|13|67|2.7
Valor premium chocolate cn ingrdnt chocolate negro almendra en|570|9.9|38|40
Hacendado calamar trozo en sls americana y ac grs|171|12|1.6|13
Real valle loncha pechuga de pavo sin lactosa|102|16|1.3|3.3
Dia yogur sabores surtido|74|2.9|10.7|1.9
Hacendado pipa con sal barbacoa|627|29.1|3.5|53
Hacendado garbanzo pedrosillan legumbre cocida|90|5.5|9.5|2.2
Hacendado caldos carne|265|7.8|13|20
Milbona goldessa queso blanco untar natural|141|6.9|3|11
Hacendado the simpsons galleta relieve chocolate|454|5.7|66|17
Sin marca picado pollo pavo bandeja|137|19|1|6
Carrefour espiral 3 sabores|344|12|67|2
Carrefour croissant natural sin aditivo|472|6.9|47|28
Hacendado salted ajt trig gamb|38|4|3.6|0.4
Real valle loncha pechuga de pavo sin lactosa|99|16|1.3|3.3
Hacendado masa de hojaldre mantequilla|409|7|42.2|23.6
Hacendado postre lacteo caramelo regular|187|4.2|23|8.7
Kellogg's corn flakes original copo maiz natural|378|7|84|0.9
Carrefour cinta bacon cerdo ahumado|292|13|1.5|26
Hacendado tarta de queso natural|266|5.1|18.6|19
Dia sandwich chocolate|480|5.9|67|20
Dia mari marinera tronco atun con abrefacil|363|14.8|0|33.8
Hacendado arroz bomba extra|349|7.7|77|0.9
Hacendado galleta banada/cbrta galleta con chocoltn mantequill|496|6|64|23
Real valle loncha mortadela aceituna|254|9.8|6.3|21
Tosfrit picoteo coctel bolsa|515|5.2|61.4|27.2
Noel loncha cortada a mano loncha (sc) lacon cocido|127|17|1.2|6
Garcia baquero loncha mezcla semi curado natural|417|25|1.5|34.5
Dia nuestra alacena loncha bacon cerdo cocido|289|15|1|25
Koipesol aceite de girasol refinado|900|0|0|100
Hacendado omega 3 preparado lacteo desnatada omega 3|51|3.1|4.8|2.1
Snack day jamon patata frita ondulada regular jamon|526|6.7|45|34.7
Romero macarron natural|349|12|70|1.5
Tacio endivia|9|1.1|2.6|0.2
Finissimas las autenticas loncha pechuga de pavo natural|85|16|3|1
Risi gusanito de maiz bolsa|467|6.6|71.1|17.4
Hacendado boom minibombon helado individual bombon leche|360|4|35.3|22.4
Llet nostra leche semi desnatada sin aditivo|46|3|4.9|1.6
Milbona linea frutas yogur con frutas surtido|83|3.9|15.7|0.1
Milbona pastoreo leche fresca entera|63|3.1|4.6|3.6
Gold spring refresco sin gas regular naranja|26|0.1|6.3|0
Pinilla huevo gallina criada en jaula|150|12.5|0.5|11.1
Hacendado loncha mozarrella curada natural|290|22|1|22
Hacendado troceado sepia crudo|78|18|0.8|0.5
Luengo lenteja pardina extra|306|24|36|1.9
Rustico picado cerdo bandeja|203|15|1|15
Schweppes zero tonica|2|0|0|0
Hacendado loncha mortadela italiana|318|16|0.5|28
Dia al punto tortilla patata cbll|147|5.2|11|9
Danone cuajada natural regular|94|4.9|6.7|5.3
President medallon cabra natural|242|16|1.8|19
Hacendado salsa mejicana picante|38|1.4|6.8|0.1
Finissimas las autenticas loncha pechuga de pavo braseado|82|16|2.2|1
Hacendado pimiento piquillo tira|40|1|7.7|0.4
Verdifresh perejil|51|3|6.3|0.8
Chips ahoy! galleta banada/cbrta barrita pepita chocolate choc|486|6.3|64|22
La cestera napolitana natural relleno de crem d cc|451|5.3|47|26
Hacendado exotic yogur liquido con trozos regular pina coco|76|2.3|12.3|1.9
Logo carrefour el mercado jamon curado reserva|234|30|1.5|12
Dia entero esparrago grueso natural|19|1.3|1.4|0.7
Dia gaseosa blanca normal|0|0|0|0
Bachman cracker integral de espelta|435|14|57|14
President leche semi desnatada sin aditivo|46|3.1|4.7|1.6
Dia harina normal uso comun|341|10|72|1
Snack day cracker normal|491|7|65|22
Hacendado seleccion zumo fresco regular naranja|44|0.7|9.9|0.1
Royal cuajada postres en polvo|53|2.9|6.8|1.6
Nestle dolca chocolate natural chocolate negro sin aditivo sin|516|5.7|58.4|27.3
Alvalle sopa gazpacho|44|0.9|3.5|2.7
Hacendado platos de cuchara crema calabaza|36|0.7|4.9|1.3
Reina flan huevo bano maria regular|156|5.3|27|2.9
Logo carrefour classic leche semi desnatada sin aditivo|46|3.1|4.7|1.6
Senzza bombon surtido|570|4.4|52|38
The rustik bakery hogaza masa madre|239|9.4|45|1.5
Hacendado yogur etnico natural|60|5.8|4.7|2
La fageda yogur natural natural|70|4|6|3.3
Hacendado pizza|253|14|30.2|8.5
Hacendado pizza normal tomate y queso|243|10.6|36|5.8
Hacendado panecillo ajo y perejil|528|8.9|52.9|30.4
Danone actimel 0% yogur liquido natural desnatado natural|31|2.8|4|0.4
Nomen arroz extra|346|7.3|77.9|0.6
Jungly chocolate cn ingrdnt chocolate con leche galleta sin re|531|6.5|60.2|28.9
Roncero cuna mezcla curado natural|426|24|1.6|36
Hacendado tira zanahoria agridulce|39|0.6|7.8|0.5
Hacendado bebida isotonica normal naranja|19|0|4.4|0
Hacendado troceado ajo|146|5.1|24|3.2
Harvest basket patata prefrita alargada|139|2.5|23|3.5
Carrefour ensalada vital|19|1.4|1.4|0.3
Dia nuestra alacena jamon curado reserva|254|27|0.5|16
Eroski basic tomate frito aceite de girasol|73|1.2|8.9|3.5
Hacendado picatoste|498|8.6|59|24.8
Hacendado petalo y pepita cruesli chocolate y fibra|441|8.4|61|17
Hacendado cacahuete|618|30|7|50
Carrefour discount harina normal uso comun|352|9.9|71|2.6
Hacendado no es surimi marisco salpicon|68|9.2|5.4|1
Sin marca nugget pollo|200|11.5|16.5|9.7
Hacendado miga bonito del norte con abrefacil|331|17|0.5|31
Gallo harina normal para reposteria|363|10|75|2
Hacendado yogur con fruta cremoso melocoton maracuja|96|3.6|13.1|3.2
Maestros de hjblnca el nuestro aceite de oliva virgen extra|821|0|0|91
Milbona yogur etnico natural|125|3.6|5.4|9.9
Dia ensalada gourmet|15|1.2|1.5|0
Verdifresh microondas brocoli clflr & znhr|43|2.1|2.4|0.3
Hacendado yogur liquido sabores desnatado 0% fresa|29|3.3|3.8|0.1
Campurrianas especialidades pasta casera sin relleno no banado|458|5.6|74|15
Carrefour ensalada 4 estacions|17|0.8|1.6|0.5
El molino del dia pan de molde integral y sin lactosa|236|10|40|2.8
Solevita zumo de fruta (intr s/azucr)sin caloria manzana|46|0.2|11.2|0
Hot dogs hot dog normal|263|9.4|46|3.9
La cestera valencianas ffp-magdalenas natural sin relleno|450|5.2|54.9|23
Chef select & you base pizza aceite de oliva|265|8.2|48|2.4
Fontaneda la buena maria galleta maria|437|7.6|76|11
Milbona queso fresco suisse fresa platano|92|5.6|10|2.8
Hacendado pizza horno de piedra atun|262|12.7|25.1|12.3
Ehrmann skyr con frutas maracuya|188|2.5|4|18
Vemondo bebida soja sin lactosa|43|3.1|3.7|1.7
Dia el cencerro cuna mezcla semi curado natural|423|24.6|0.8|35.2
Reina flan cafe regular|160|4|22|6.4
Maggi el original pure normal sin leche|348|7.4|74|0.8
Matutano cheetos gustosines gusanito de maiz bolsa|477|5.6|62.5|22.1
Freshona judia verde plana|16|0.7|2.6|0.5
Bonduelle maiz dulce sin azucar|80|2.9|10.8|1.9
Hacendado galleta banada/cbrta galleta con chocoltn mantequill|525|7|58|29
Hacendado queso fresco suisse chocolate|165|3.3|24|6.2
Hacendado filete boqueron tempura|196|14.8|16|8.3
Hacendado troceado calamar crudo|57|12|1|0.5
La vaca que rie queso fundido paliqueso|288|10|25.5|16
Hacendado flan huevo sin azucar regular|68|6.3|8.2|1.5
Leroy lomo salmon crudo|224|20|0|16
Galbusera cracker integral|430|11|64.9|12.6
Hacendado cacahuete con sal miel|564|21|30|39
Monte ravy flan huevo regular|136|5.1|22|3.1
Carrefour gaseosa blanca normal|0|0.5|0.5|0.5
Freshona salsa tomate casera|77|0.6|11.5|3.1
Fondant donut natural sin relleno chocolate|435|5.4|46|25
Certossa pan de molde normal|295|11.6|45.1|5.9
Snack day coctel bolsa|502|4.6|61.6|25.9
Logo carrefour mayonesa regular aceite de girasol|653|1|1.3|7.4
Carrefour queso mozzarella|235|17|1.3|18
Hijolusa patata|70|1.7|15.7|0.1
Hacendado pizza|261|15.1|31|8.2
Belbake masa de hojaldre mantequilla|396|6.3|43.3|20
La bella easo magdalena ffp-magdalenas natural sin relleno|433|4.4|51|22
Certossa pico aceite oliva|400|11.5|80.6|2.8
Gullon creme tropical galleta tostada cereal|473|6.5|70|18
Chef select salsa guacamole|172|1.6|2.1|16.2
Pagani tortellini huevo y queso|378|15|58|8.5
Hacendado pate cerdo pimienta|250|11.9|1.2|22
Hacendado altramuz aguasal natural|105|12|9|1.7
Hacendado pate cerdo suave|300|8.3|5.4|27.2
Dia nuestra alacena sarta dulce excluir base (sc) chorizo|495|26|1|43
Dulano cinta bacon cerdo ahumado|282|16|0.5|24
Hacendado patata frita lisa regular pimienta y limon|558|6.5|51.6|36.3
Hacendado humus pimiento de piquillo|292|6.3|7.5|24
Hacendado chocolate cn ingrdnt chocolate con leche almendra en|563|11|41|39
La cestera pekis bollo con pepita natural pepitas chclt cn lch|362|7.5|53|13
Dia mari marinera filete merluza crudo|89|15|0.8|2.9
Eroski leche semi desnatada sin aditivo|45|3.2|4.7|1.5
Hacendado chocolate cn ingrdnt chocolate con leche avellana si|565|7.5|51|36
Hacendado yogur etnico cacao con avellana|155|3.5|15.2|8.9
Logo carrefour extra yogur etnico natural|125|3.6|5.4|9.9
Hacendado pizza|229|11.7|31.5|6.5
Hacendado yogur liquido natural regular natural|70|1.9|11.5|1.8
Hacendado morro de cerdo bolsa|580|60.3|0.5|37.2
Sin marca pieza entera mejillon|59|8.7|3|1.4
Danone la copa postre con nata chocolate regular|129|2.6|17.2|5.4
Or chata! horchata|85|0.5|15.7|2.2
Viking cuna danes|341|20|0.5|29
Fin carre chocolate natural chocolate negro sin aditivo sin re|571|9.9|35|42
Alesto pipa aguasal natural|640|24|3.9|56
Nestle gold crujiente mousse chocolate regular|221|5.2|20.5|12.6
Hacendado patata frita lisa regular chile y lima|494|6.5|57.4|27.8
Real valle loncha mortadela natural|282|12|4.5|24
Carrefour tronco atun con abrefacil|98|23|0.5|0.7
Dia cuatro quesos hilo|370|26|1.9|30
Hacendado patata frita lisa regular sal vinagre|498|7.5|57.4|27.5
Hacendado mini sandwich helado individual bombon nata|325|4.9|37.5|16.8
Real valle loncha loncha (sc) chorizo o salchichon natural|372|21|4.5|30
Sin marca burguer normal|272|11|45|4.8
Antonio alvarez jamon curado do trevelez|268|33|0|15
Dia fidias yogur etnico stracciatella|148|2.4|15.4|8.2
Morenazos galleta banada/cbrta rosquilla sin relleno chocolate|509|6|64|25
Dia mayonesa regular normal|610|0.9|1.5|66.5
Abrilsol aceite de girasol refinado|828|0|0|92
Abril aceite de oliva refinado y virgen|819|0|0|91
Hacendado viena|242|13|1|20.6
Hacendado pasta de te|505|5.8|62|26
Hacendado miga|311|7.5|35|15
Hacendado lenteja legumbre cocida|89|8.2|10.7|0.4
Clesa bombon 0% crema bombon chocolate ligero|69|3.6|11.8|0.7
Dia zumo de fruta regular naranja|44|0.6|9.9|0.1
Hacendado burguer integral y sin lactosa|263|11|40|4.8
Central lechera asturiana leche desnatada sin aditivo|34|3.2|4.7|0.2
Bocabits corteza de trigo bolsa|497|8|53.2|27.6
Frit ravich cocteleo original coctel surtido natural|521|18|41|30
Milbona leche desnatada sin aditivo|34|3.3|4.8|0.2
La panaderia la cestera burguer rustico normal|248|9.8|45|2.5
La chocolatera cacao soluble puro lata|375|25.5|16.3|16
Calvo tronco atun superfacil|286|20|0|23
Real valle loncha loncha (sc) lomo embuchado|201|34|1.5|6.5
Hacendado aro de maiz bolsa|474|4.9|67.2|19.7
Milbona yogur sabor cremoso vainilla|93|3.8|12.4|2.8
Hacendado fresh verdura para micrnds|46|2.8|6.6|0.4
Hacendado bratwurst|200|16.8|1.2|14
Tapa corteza de cerdo bolsa|487|70|0|23
Sin marca patata|70|1.7|15.7|0.1
Lr leche semi desnatada sin aditivo|46|3.1|4.7|1.6
Hacendado queso fundido loncha|357|24|0.1|29
El pozo sobrasada|569|7.3|0.5|60
Ovocity huevo gallina criada en jaula|150|12.6|0.5|11
Hacendado parrillada verdr asd|55|2.2|10|0
Dia ensalada 4 estacions|22|0.7|2.6|0.5
Consum aceite de girasol refinado|826|0|0|91.8
Fontaneda osito lulu bizcocho natural chocolate|395|6|58|16
La caldera anilla calamar romana|219|6.4|29.8|7.8
Dia flan vainilla regular|98|2.2|18.8|1.5
Lu tuc original cracker normal|482|8.3|67|19
El pozo cinta bacon cerdo natural|262|14|1|22.5
Hacendado canelon|158|8.7|12|8
Hacendado tofu|110|11.1|0.9|6.9
Hacendado bocata queso|227|14.7|1|18.3
Hacendado barquillo oblea natural no banado sin relleno|390|11|79|2.6
La cestera sobaos ffp-bollería - otros natural sin relleno|447|5.4|50.4|24.6
Milbona golden hills mantequilla sin sal regular|748|0.6|0.7|82.5
La hacienda del iberico salchichon loncha loncha (sc)|493|25.6|1.8|42.6
Consum leche desnatada sin aditivo|34|3.3|4.8|0.2
Hacendado yogur liquido sabores semidesnatado frutas del bosqu|71|2.7|12.4|1.2
Hacendado burguer brioche normal|328|10|47|10
Matutano ruffles patata frita ondulada regular jamon y queso|504|6.2|54|28.4
Milbona leche semi desnatada calcio|52|3.9|5.6|1.6
Hacendado pasta rellena queso|225|10|34|5.2
Hacendado helado chocolate y nata|251|3.2|25.5|14.9
Ram chocolate taza instantaneo|112|2.5|22|1.6
Alipende pluma 5 natural|349|12|70|1.5
Hacendado pate atun|216|9.6|5.8|17.1
Sin marca brotes tiernos|24|1.8|2.8|0.3
Pescanova pieza entera gula cocido1|188|8.8|7.5|13.6
Solevita zumo de fruta regular manzana pina y uva|53|0.2|12.5|0.1
Larsa yogur sabores vainilla|94|3.6|11.4|3.8
Hacendado seleccion especial lenteja legumbre cocida|81|5.7|11.2|0.4
Hacendado cereales rellenos leche|431|9.7|66|13.7
Admiral medallon merluza crudo|76|16.8|0.5|0.7
Kas refresc d lmon cn gs normal limon|21|0.1|4.6|0
Casado croissant natural sin aditivo|401|7.1|54|17
Logo carrefour extra yogur etnico stracciatella|146|2.9|15|8.3
Milbona pastoreo leche fresca semi desnatada|45|3.2|4.7|1.5
Alesto pistacho sin sal natural|605|26.5|10.3|49.2
Logo carrefour classic maiz dulce sin azucar|89|2.9|12|2.4
Eroski tiburon natural|350|11|72|1.2
Consum leche entera sin aditivo|63|3.1|4.6|3.6
Dulcesol chapela pastelito natural nata cacao|446|4|59|21
Danone activia yogur con frutas melocoton|49|4.8|6.3|0.1
Dee thai leche de coco entera|165|0.2|2.9|17
Hacendado mini tostada pasa|403|10.4|67.6|9.1
Chef select humus|280|5.2|11.8|22.5
Dia sopa gazpacho|42|0.8|3.6|2.3
Hacendado croqueta cocido|198|12|17|8.8
Hacendado bocadito natural sin aditivo|277|9.5|48|4.6
Chef select asia rollito primavera|143|4|25|2.3
Caldo casero 100% natural caldo casero pollo|5|0.4|0.2|0.3
Hacendado tomate frito sin azucar|65|1.5|6.5|3.5
Sin marca longaniza pollo bandeja|169|18|0.1|10.7
Hacendado copo trigo espelta integral natural|364|14.6|66|2.7
Bimbo natural 100% pan de molde integral|253|10|44|2.5
Milbona griego yogur etnico natural|101|3.1|4.2|8
Carrefour natillas vainilla regular|105|3.1|17|2.8
Hacendado platos de cuchara crema pollo c/ verduras|47|1|4|2.6
Hacendado salteado de seta|16|1.8|0.5|0.3
Dia patata frita lisa regular natural|543|6.8|50|34
Fin carre fondue chocolate negro|544|4.8|48|35
Milbona leche condensada entera|321|7.5|54.9|8
Dia vital leche semi desnatada vitamina a d e|45|3.2|4.7|1.5
Monster energy bebida energetica normal|47|0.5|12|0.5
Dia champinon laminado natural|22|2.4|1|0
Oscar mayer original wienner's queso|233|14|1.5|19
La selva loncha panceta cerdo sin lactosa|333|23.1|0.4|26.6
Chef select focaccia|292|7.9|39.1|11.2
Freshona troceado judia verde plana|39|1.9|6.1|0.1
Gb yatekomo gourmet oriental noodle yakisoba clasico|231|4.1|28|11
Hacendado cacahuete gragea cacahuete|554|15|42|35
Carrefour pistacho con sal natural|596|26|15|47
Sondey firone barquillo surtido surtido surtido|541|4.7|60.2|30.7
Artiach filipinos los original galleta banada/cbrta rosquilla |495|6.6|64|23
Hacendado gourmet|239|12.3|0.7|20.8
Gelatelli premium bombon helado individual bombon almendra|343|5.6|30.4|21.8
Sin marca ensalada gourmet|19|1.3|1.5|0.4
Sondey galleta relieve cereal y miel|474|6.5|70|18
Milbona gelatina limon ligero 0%|76|0|18.9|0.1
Gallina blanca sopa ave corral con fideo|24|1|4.8|0.1
Hacendado caldos verdura|190|13.7|23.8|4.1
Hacendado tostada integral bajo en azucar|388|17.7|61|5.7
Hacendado galleta banada/cbrta galleta con chocoltn mantequill|491|5.8|66|22
Hacendado diverkao gllt bnd cbrt infntl cookie chocolate pepit|439|6.1|67|15
Napolitana galleta banada/cbrta canela sin relleno cubierto de|482|5.5|69|20
La hacienda del iberico loncha loncha (sc) chorizo|494|24|1.3|43.6
Milbona flan queso regular|157|5.7|19.4|6.3
Montesinos queso requeson|160|8.7|5.4|11.6
Hacendado leche evaporada entera|109|7.4|11|4
Hacendado calamar trozo en su tinta y act girasol|207|15|1.3|15
Logo carrefour hot dog normal|285|9.9|48|4.8
Consum arroz extra|348|6.8|78|0.7
Hacendado pasta rellena requeson y espinaca|275|8.9|34|11
Eroski leche entera sin aditivo|63|3.1|4.6|3.6
Dia canonigo|21|1.8|1.6|0.5
Dulcita tomate|33|1.4|4.7|0.5
Hacendado digestive galleta maria fibra sin azucar|465|6.9|63|20
Hacendado sardinilla en tomate|152|19.6|1.1|7.7
Freshona tomate frito cebolla|81|1.2|12.3|2.6
Noel loncha loncha (sc) lacon cocido al horno|180|18|0.2|12
Hacendado barquillo natural no banado crema de nata|498|3.4|69|23
Milbona yogur liquido con trozos semidesnatado fresa|68|2.6|10.6|1.4
Consum garbanzo legumbre cocida|96|5.4|12|1.9
Buitoni masa de hojaldre|395|7.4|36|23.3
Alimerka huevo gallina criada en jaula|132|12.5|0.6|8.8
Hacendado patata frita lisa regular huevo|481|6.5|63.9|23.2
Milbona yogur etnico fresa|121|2.5|11.2|7.3
Danone yogur sabores coco|72|3|10|2.2
Carbonell aceite de oliva virgen extra|900|0|0|100
Danone oikos yogur etnico stracciatella|172|2.9|17.5|10
Hacendado pizza|212|11.7|26.5|6.6
Dia loncha edam natural|307|25.6|0|22.9
Hacendado fondue chocolate blanco|549|7.9|55|33
Covap leche semi desnatada sin aditivo|46|3.2|4.8|1.6
Sin marca leche semi desnatada sin aditivo|45|3.2|4.7|1.5
Hacendado barra cereal muesli y chocolate negro|435|5.8|66|15
Carrefour emmental hilo|363|26|2|28
Consum cuna mezcla semi curado natural|398|24|1.2|33
Campofrio pizza & salsa pizza|293|11|33|13
Consum tomate frito natural|78|1|9.6|3.7
Alboraya farton natural cubierto de azcr gls|374|8.2|61.8|10.7
El forn de mercadona pan payes normal|275|2.9|55.2|1.1
Hacendado bombon helado individual bombn chclt ngr y nt|314|3.6|29|20
Sin marca tronco atun sin abrefacil|191|25|0.5|10
Hacendado minibombon helado individual bombon cacao y avellana|403|4.1|35.3|27.1
Hacendado crema turron regular|205|5.3|21.3|10.9
Hacendado helado vainll prln y nz pcn|232|2.9|30|11
El caserio cuatro quesos hilo gratinar|353|25|0.5|28
Hacendado filete melva en aceite de oliva|339|21|0.8|28
Alesto anacardo con sal natural|617|17.4|26|48.4
Monissa artesana croqueta jamon|206|8.3|20.5|9.5
Hacendado galleta relieve espelta y sin azucar|428|9.6|60|18
Logo carrefour classic arroz largo|349|8|76|1.2
Donuts donut natural sin relleno cubierto de azucar|409|5.8|46|22
Eroski mozzarella hilo|293|25|0|21
Danone activia yogur con frutas piña|46|4.4|6.9|0.1
Hacendado queso fundido crema camembert|218|13|1|18
Sin marca entero excluir base (sc) chistorra natural|429|16|1.3|40
Logo carrefour galleta maria|480|6.3|70|19
Hacendado minibombon helado individual bombon chocolate|371|3.6|31|25.4
Dia yogur etnico natural|135|2.6|11|9
La lechera leche condensada entera|321|7.5|54.9|8
Hacendado trottole 3 sabores|353|11.2|72.2|1.4
Serrano un momento y listo pechuga de pavo|98|12|8|2
Hacendado zero bebida de te (intr s/azucr)sin caloria melocoto|1|0.1|0.1|0
Danone danonino paw patrol yogurt infantil con trozos regular |82|3.6|11.6|2.3
Roncero queso vaca|188|12.6|2.8|14
Snack day paloma de maiz bolsa|463|7|72.5|15.8
Hacendado barquillo natural no banado chocolate|497|6|65|23
Hacendado fondue chocolate con leche|531|8.3|54|31
Carrefour garbanzo legumbre cocida|95|5.4|12|2
Carrefour burguer normal|260|9.7|46|3.3
Hacendado chocolate cn ingrdnt chocolate negro almendra entera|590|11|27|47
Hacendado ciruela desecada sin hueso|237|2.4|54|0.5
Hacendado loncha picante loncha (sc) chorizo|356|21|2.7|29
Hacendado arroz basmati aromatizado|355|9|78|0.6
Hacendado picatoste|374|11|75.6|2
Florette ensalada cesar|154|9.5|10.8|7.6
Hacendado+proteinas mousse chocolate sin lactosa regular|76|10|5|1.6
Chips ahoy! original especialidades cookie pepitas chocolate n|497|5.5|64|24
Logo carrefour classic mega sandwich chocolate|480|5.9|67|20
Ocean sea varita merluza empanado|190|13|14|8.9
Hacendado cacahuete con sal natural|609|28|8.9|49
Sin marca picado vacuno bandeja|229|16|1.5|17.5
Lr leche entera sin aditivo|63|3|4.6|3.6
Kingfrais natillas vainilla regular|101|2.4|17.5|2.4
Hacendado filete panga crudo|71|15.2|0|1.2
Chef select pizza|229|11.9|24.7|8.8
Hacendado yogur liquido con trozos desnatado 0% pina coco|31|2.9|3.9|0.4
Sondey digestive especialidades dietetico cereal con fibra pep|477|7.5|61|21
Hacendado ketchup light|71|1.2|15.9|0.2
Hacendado platos de cuchara crema verdura|49|0.6|5|2.8
La española aceite de oliva refinado y virgen|822|0|0|91
Pavofrio horno de leña loncha pechuga de pavo ahumado|82|16|2.2|1
Bimbo natural 100% pan de molde sn crtz sin lactosa|235|9.7|42|2.2
La cestera ensaimada natural cubierto de azcr gls|461|6.8|51|25
Freshona piña su jugo|56|0.5|13|0.5
Rustico el rey de la barbacoa pieza entera excluir base (sc) c|367|15|2|33
Ocean sea delicias del mar no es surimi gula al ajillo|224|9|6|18
Burn original bebida energetica normal|62|0.5|16|0.5
Gallo cous cous natural|349|12|69|1.8
Fin carre chocolate natural chocolate negro sin aditivo sin re|523|5.4|49.6|31.8
Snack day tortilla chips tex mex|498|6.8|61|24
Carrefour ketchup|100|1.3|22|0.5
Hacendado galleta maria dorada sin azucar|445|6.9|68|18
Puleva vita calcio leche semi desnatada calcio natural y vitam|50|3.9|5.1|1.6
Dia nuestra alacena salchichon loncha loncha (sc)|272|19|5|19.5
Danone oikos yogur etnico natural|145|3.2|10.6|10
Hacendado garbanzo mejicano blanco|348|18.6|47.5|6.1
Dia lactea yogur natural natural|91|3.3|11.6|3.5
Freeway isoclassic bebida isotonica normal citrico|18|0|4.5|0
Freshona troceado ensaladilla|57|1.9|10.9|0
Campo largo lenteja pardina extra|306|24|35.8|1.9
Logo carrefour canonigo|27|2.2|1.8|0.5
Punto gofre gaufre natural sin relleno|418|7.7|54|19
La familia sandwich pan fino normal|240|8.7|37|2.6
Alesto cacahuete sin sal natural|624|27.1|9.8|51.2
El pastoret familia pont kefir natural natural|65|3.4|3.8|3.8
Bimbo artesano pan molde brioche normal|263|10|46|3.3
Musa mayonesa regular sin azucar|653|1|0.7|72
Dia patata frita ondulada regular natural|547|6|52|34
Chocolate tableta tableta chocolate crema de leche|566|8.7|53.5|35
Hacendado loncha cabeza de cerdo sin lactosa|213|15|0|17
Hacendado zumo de fruta regular pina y uva|54|0.6|12.9|0
Hacendado salmon pescado ahumado|182|22|0.5|10
La cestera tostada integral c/ fibra|387|13|64|6.6
Campo largo lenteja legumbre cocida|87|5.9|12.8|0.5
Snack day cono de maiz bolsa|509|4.3|61.1|26.7
Hacendado cuna azul|341|20|0.5|29
Matutano doritos triangulo maiz bolsa|493|6.2|58.4|25
Atlantic select mejillon ria gallega en escabeche|217|13|2.9|17
Fruits ajo perejil|56|3.4|8.8|1
Consum ensalada 4 estacions|20|0.7|2.3|0.5
La casera gaseosa blanca normal|0|0|0|0
Hacendado helado turron|282|6.2|27|16
Sin marca tumaca tomate|19|1|3.6|0.2
Don simon premium valencia zumo de fruta regular naranja|43|0.6|10|0.1
Hacendado cacao soluble bote plastico|373|6.8|74|3.3
Hacendado mini sandwich helado individual bombon cookies vaini|342|5.2|43.1|16.4
Sin marca no es surimi boqueron en vinagre en act girasol|203|19.4|0.8|13.6
Hacendado leche desnatada calcio|40|3.9|5.3|0.3
Don simon zero refresc vtmnd cn lch (intr s/azucr)sin caloria |13|0.5|28|0
Hero temporada mermelada mermelada extra fresa|219|0.6|53|0.1
Sin marca albondiga cerdo bandeja|207|18|0.8|14
Logo carrefour refresc vtmnd cn lch light tropical|43|0.5|10|0.5
Carrefour sarta dulce excluir base (sc) chorizo|478|24|1|42
Nocilla galleta banada/cbrta cookie pepita choclt crema cacao |504|6.6|62|25
Danone i love vitalinea yogur sabores fresa|38|4.2|5.2|0.1
Alpro yogur vegetal soja sabores mango|62|3.7|6.1|2
Royal flan postres en polvo|96|2.5|18.5|1.4
Nordic mist tonica|32|0|7.8|0
Panet's pan de molde normal|246|9.2|45|2.5
Hacendado torta anis sin relleno|509|7.2|56|28
Hacendado yogur natural natural sin lactosa|37|4.1|4.9|0.1
Milbona gouda hilo|375|24.7|2.4|29.6
Hacendado no es surimi boqueron en vinagre en act girasol|297|14.3|0.8|26.6
Hacendado|187|11.3|4.8|13.4
The rustik bakery hogaza masa madre|245|11|38|3.8
Milbona yogur ecologico natural natural|75|5|4.7|3.8
Hacendado sopa maravilla|330|11.7|62.4|3.1
Gublins concha de maiz bolsa|537|5|62|29
Logo carrefour aceite de oliva refinado y virgen|900|0.5|0.5|100
Hacendado yogur etnico fresa|140|3|14.1|8
Matutano doritos dippas orignl triangulo maiz bolsa|494|7|59.9|24.2
Hacendado bebida de fruta (intr s/azucr)sin caloria 5 frutas|32|0.4|7|0.2
Dia aceite vegetal sin sal regular|543|0.3|0.5|60
Hacendado pate cerdo finas hierbas|271|11.7|1.3|24.3
Milbona yogur ecologico con frutas manzana y pera|194|2.5|5.5|18
Dia hot dog normal|280|9.1|49|4.5
Alipende leche semi desnatada sin aditivo|46|3.1|4.7|1.6
Hacendado noodle yakisoba pollo|201|4.9|25.9|8.1
President leche entera sin aditivo|63|3|4.7|3.6
Beiker pan de molde normal|256|4.4|41|6.2
Carrefour pimiento piquillo tira|30|1.5|5.4|0
Hacendado harina fina uso comun|359|0.3|90|0.5
Hacendado entero pechuga de pavo 0 por cient mtr grss|70|15|1.3|0.5
Trattoria alfredo lasana bolonesa|171|7.6|13.5|9.3
Dia pico normal|399|11.5|80.6|2.7
Primeale zanahoria|39|0.9|6.8|0.2
Calvo mejillon en escabeche|231|13|0|19
Ifa eliges gaseosa blanca normal|1|0|0|0
Hacendado pan de molde sn crtz integral|231|10|36|4.1
Puleva vita calcio leche desnatada 0,0 calcio natural y vitami|41|3.9|5.1|0.2
Carrefour pan rallado normal|343|12|67|1.9
Dia refresco de cola normal con cafeina cola|32|0|8|0
Hacendado linnea v copo arroz y trigo intgrl chocolate|413|7.6|76|7.3
Danone activia yogur sabores cremoso fruta silvestre|47|5.2|6.2|0.1
La carloteña asados artesanos lnch pollo asd al hrn rll|166|18.5|1.7|9.5
Logo carrefour tomate frito aceite de oliva|77|1|9.6|3.6
Sin marca pincho pollo bandeja|154|15.3|0.5|10.3
Hacendado especialidades tartaleta mantequilla fresa no banado|441|4.6|71|15
Danone actimel kids yogurt infantil con trozos regular fresa|67|2.8|10.5|1.5
Holland cuna gouda tierna/o|366|23.5|0|30.3
Hacendado almendra cacht ancrd surtido ahumado|598|23|16|47
Dia seleccion hamburgesa cerdo y vacuno bandeja|217|17|2|15.5
Consum patata frita lisa regular natural|553|6.2|40|37
Hacendado chocolate taza instantaneo|106|2|21|1.6
Logo carrefour zumo de fruta regular naranja|45|0.5|11|0.5
Hacendado yogur vegetal soja sabores chocolate|116|3.7|20|2.2
La cestera pan de molde de centeno normal|272|12|31.3|8.3
Milbona yogur ecologico con frutas cereza|360|1.8|2.7|38.1
Logo carrefour sopa gazpacho|36|0.7|3|2
Hacendado yogur vegetal soja natural natural sin lactosa|43|4.6|0|2.7
President mantequilla light sin sal regular|379|0.8|4|40
La cestera napolitana natural relleno de cacao|451|5.3|47|26
Postres fondue chocolate negro|561|5.9|50.6|34.6
Ocean sea filete bacalao crudo|57|12.8|1.2|0.1
Monissa arroz 3 delics tradicionl|112|4.7|18|1.6
Hacendado al corte loncha pechuga de pavo sin grasa|78|17.8|0.6|0.5
Hacendado queso mascarpone|482|3|5|50
Hacendado arroz redondo j sendra|349|6.7|78|0.9
Ifa eliges leche semi desnatada sin aditivo|46|3.1|4.7|1.6
Hacendado bebida energetica light|3|0|0|0
Monissa san jacobo cerdo jamon y queso|177|9|27.5|3.2
Hacendado membrillo dulce de membrillo natural|250|0.5|60|0.5
La vaca que rie queso fundido porcion|218|9.5|5.5|17.5
Hacendado bebida de fruta regular florida|29|0.1|6.7|0.1
Freshona combinado de verdura pisto|67|0.7|10.1|2.5
Hacendado patatina patata frita paja regular extra crujiente|545|3.5|55|33
Nixe sardinilla en aceite de oliva|302|18.4|0|25.4
Milbona yogur etnico natural|146|2.9|11|10
Hacendado yogur liquido con trozos desnatado 0% fruta silvestr|30|2.8|3.9|0.3
Puleva omega 3 corazon sano preparado lacteo desnatada nuez y |51|2.8|4.8|2.3
Carrefour batido cacao|63|2|11|1
Hacendado pate cerdo iberico|350|8.5|4.1|31
Casa tarradellas pizza|250|11.9|30.1|9.1
Hacendado salsa carbonara nata con bacon|189|4.9|4.2|17
Luengo alubia legumbre cocida|81|5.3|12|0
Fin carre chocolate cn ingrdnt chocolate con leche avellana si|554|7.9|51.4|34.6
Milsani yogur con fruta cremoso melocoton maracuya|336|2|3.1|35.1
Hacendado yogomix yogur con cereales natural|163|2|5|15
Lindor bombon cremoso|623|5|44|47
Kinder bueno white barrita barrita crema de avellana|571|8.5|53|35.9
Aquarius zero bebida isotonica sin calorias naranja|1|0|0|0
Consum emmental hilo gratinar|367|26.9|0.9|28.5
Sin marca salmon pescado ahumado|212|23|0.8|13
Puleva leche entera sin aditivo|63|3|4.7|3.6
Hacendado patata brava cn alll|187|2.1|17|12
Puleva leche entera sin aditivo|63|3|4.7|3.6
Hacendado lenteja castellano extra|320|24.5|48.1|1.2
Danone original 1919 yogur natural natural|64|3.2|4.1|3.9
El caserio queso fundido porcion|209|12|4.9|15
Hacendado queso|222|15.3|1.2|17.3
Carretilla entero esparrago grueso natural|17|0.8|2.5|0.3
Milbona bebida de cafe normal cappuccino|59|3|8.6|1.3
Hacendado sin lactosa yogur natural cremoso natural|94|4.5|11.5|3.3
El pozo entero excluir base (sc) salami natural|506|17|7|45.5
Anitin(mercadona) rosquilleta queso|503|12.1|51.6|26.9
Hacendado focaccia|297|9.4|47|7.9
Sondey galleta banada/cbrta dietetico sin relleno cubierto de |498|6|63|24
Ses ponedores huevo gallina criada en jaula|141|13|0.7|9.7
Hacendado salsa queso 4 queso|121|4.7|6.1|8.5
Nestle kitkat popchoc yogur natural natural|178|4.9|21.2|8
Hacendado cacao a la taza tradicional|374|6|78|2.6
Hacendado semilla chia semilla|464|22|2.6|34
Dia ketchup|96|1.3|22|0.5
Snack day corteza de trigo bolsa|520|8.7|54|30
Roncero queso burgos|67|12|4.1|0.3
Hacendado barquillo dietetico sin azucar no banado nata|434|3|64|23
Danone activia yogur con cereales natural|112|3.9|14.8|3.6
Dia liegeois postre con nata chocolate regular|134|2.8|18|5.6
Real valle loncha fiambre york sandwich sin lactosa|101|12.9|7.2|2.3
Rustico picado cerdo y vacuno bandeja|206|15|1.5|15
Popitas maiz rostr pr mcrnds al punto de sal|439|8|62|15
Revilla tacos excluir base (sc) chorizo|344|21|2|28
Gallina blanca sopa pollo corral maravilla|28|1|5.4|0.2
Hacendado crema zanahoria y calabaza|48|0.9|4.2|2.8
Clesa crema bombon cacao regular|111|2.9|18.5|2.8
Carrefour natillas chocolate regular|117|3.3|18|3.2
Mercadona ensalada primavera|25|1.3|3.6|0
Hacendado base pizza cereal y semilla|258|8.7|46.1|4.3
Hacendado fresh zero refresco de lima lmn (intr s/azucr)sin ca|1|0|0|0
Hacendado bebida de fruta (intr s/azucr)sin caloria tropical|29|0.4|5.9|0.1
Gold nuts premium chocolate cn ingrdnt chocolate con leche ave|582|9|45.1|39.7
Danone danonino maxi dino queso fresco suisse fresa platano|89|6.1|11|2.3
Logo carrefour caldo pollo con aceite oliva|5|0.9|0.6|0.5
La pila la broche fun roll flauta|276|11|34|11
Pintarolas gragea gragea chocolate|484|3.8|71|20
Hacendado almendra con sal natural|628|23|3|57
Helios tomate frito aceite de oliva|88|1.2|12.6|3.3
Hacendado yogur liquido con trozos desnatado 0% fresa|29|2.9|3.7|0.3
Hacendado preparado lacteo semi desnatada fibra|51|3|4.8|1.3
Freeway refresc d lmon cn gs (int bj azucar)bj caloria limon|19|0|4.4|0
Grefusa snatt's snack de arroz y lenteja bolsa|478|15|54|21
Hacendado helado stracciatella|242|3.5|34|10
Dia pipa aguasal natural|569|19.3|6.3|49.8
Dia garbanzo legumbre cocida|95|5.4|12|1.9
Frigo magnum minibombon helado individual b v c l/b v c b/b v |337|4.7|32|21
Milbona loncha edam natural|312|24|0|24
Hacendado tortilla patata chrz|226|7.1|15|15
Rogusa callos de ternera|142|16|1.5|8
Monells cinta bacon cerdo ahumado|289|15|1|25
Sin marca hamburgesa pavo bandeja|120|15.6|5.5|4
Carrefour discount hilo gratinar|349|14|12|27
Consum hamburgesa cerdo y vacuno caja carton|222|17|2.5|16
Dhul flan huevo al bano maria regular|145|5.1|24|3.2
La masia clasico aceite de oliva refinado y virgen|824|0|0|92
Hacendado yogur natural cremoso natural|43|4.9|5.8|0
Gold spring cero refresco sin gas (intr s/azucr)sin caloria pi|20|0.1|4.5|0
Gerardo de lucas huevo gallina criada en jaula|150|12.5|0.5|11.1
Oikos yogur etnico lima limon|149|3|13.6|9.2
Casa tarradellas pizza|263|14|27|11
Vibs tumaca tomate|21|0.8|3.3|0.2
Hacendado canelon con bechamel|130|7|13.4|5.4
Hacendado masa quebrada|374|6.1|39|21
Ocean sea filete anchoa natural en aceite de oliva|177|26.2|0|8
Covap leche entera sin aditivo|64|3.2|4.6|3.6
La gula del norte la autentica no es surimi gula|163|9.2|8.2|10
Matutano lay's receta al horno patata frita ondulada bajo en c|442|5.9|73|13
Dia seleccion hamburgesa pollo bandeja|125|18|1.3|5.3
Gb yatekomo gourmet oriental noodle yakisoba pollo|224|4.7|28|10
Hacendado helado capuccino|222|2.7|31|9.6
Campofrio pizza & salsa pizza|263|11|36|8.3
Hacendado minitortilla trigo sin lactosa|294|8|53|5.3
Pescanova anilla calamar romana|219|5.9|23.7|10.8
Ocean sea pieza entera sepia crudo|68|15.5|0|0.7
Danone activia yogur sabores cremoso vainilla|48|5.2|6.2|0.1
Hacendado al corte loncha pechuga de pollo bajo en grasa|84|16.9|1.3|1.2
Prima original mayonesa regular normal|606|0.7|4.9|65
Logo carrefour picado cerdo y vacuno bandeja|219|17.2|0.8|16.3
Hacendado macedonia verduras natural|46|2|8.2|0.3
San roque pico integral|378|11.5|72.4|3.4
J.d.gross chocolate natural chocolate negro sin aditivo sin re|579|10.8|21.4|46.8
Hacendado especialidades pastas sin relleno no banado|448|5|72|15
Hacendado helado vainilla|218|2.8|24|12
Delicato tira bacon cerdo ahumado|289|15|1|25
Hacendado garbanzo lechoso andaluz extra|354|21|45.1|6.3
Hacendado salsa cocktail|425|1|10.4|43
Ifa eliges pan de molde normal|266|9.7|45|4.6
Cacaolat original batido cacao|80|2.5|13.7|1.5
Danone danacol yogur liquido clstrl natural regular natural|38|2.7|4.3|1.1
Freshona champinon laminado natural|19|2.2|0.6|0.4
Ocean sea troceado calamar crudo|50|10.5|0|0.9
Consum pan de molde sn crtz blanco|252|8.9|43|4.2
Ifa eliges harina normal uso comun|339|9|72|1.1
El dulze corazon de lechuga|19|1.2|1.8|0.6
Milbona zero refresc vtmnd cn lch light tropical|22|0.4|4.8|0
El pozo loncha sandwich fiambre york sandwich natural|101|12.9|7.2|2.3
Dia espinaca|26|2.9|1.4|0.5
Palacios sarta dulce y sin lactosa excluir base (sc) chorizo|489|26|0.7|43
Fresh mix salsa guacamole guacamole suave|182|1.5|3|17.2
Ligeresa aceite vegetal light sin sal regular|341|0.5|0.5|38
Froiz huevo gallina libre de jaula|141|12.7|0.7|9.7
Dia natillas vainilla regular|114|2.4|20|2.7
Calvo atun superfacil|286|20|0|23
Hacendado pure normal sin leche|349|8.3|74|0.6
Nestle chocolate cn ingrdnt chocolate con leche almendra sin r|553|8.4|51.6|34
Hacendado fussion chocolate cn ingrdnt chocolate blanco gallet|533|6.5|60|30
Snack day torrezno de cerdo bolsa|637|46.3|0|50.2
Milbona yogur etnico vainilla|131|2.5|14|7.3
Hacendado patata frita lisa regular pollo y limon|534|5.9|44.7|36
Cola cao cacao soluble bote plastico|324|12|44|5.8
Dia ensalada variada|27|1.3|3.6|0.2
Milbona loncha havarti natural|383|17|0.5|35
Freeway refresc d nrnj cn gs (int bj azucar)bj caloria naranja|19|0.1|4.4|0
Verdifresh ensalada california|226|5.3|18|14
Hacendado yogur vegetal soja con fruta batida fruta silvestre|66|2.2|10|1.8
Hacendado hamburguesa|211|12|19|9.6
Anitin(mercadona) rosquilleta chocolate|512|7.8|59|26.2
Mercadona 4ensalada de atun|156|8.5|5.1|11
Felicia macarron quinoa|355|7.3|76|2
Mexifood tortilla trigo|316|8|53|7.4
Hacendado bebida arroz y avellana|50|0.6|6.9|2.1
Bonarea leche semi desnatada sin aditivo|46|3.2|4.8|1.6
Hacendado lenteja a la riojana|132|5.1|8|8.4
Carrefour entero esparrago grueso natural|18|1.1|1.8|0.5
Hacendado anilla pota romana|167|7|19.7|6.6
Hacendado taboule oriental|167|3.9|25.4|5.2
Hacendado yogur etnico natural|150|3.7|11.3|10
Dia mousse chocolate con leche regular|159|4.8|21.2|6
Danone danonino maxi dino queso fresco suisse fresa|89|6.1|11|2.3
Hacendado galleta banada/cbrta rosquilla sin relleno cubierto |559|5.2|52|36
Acecook noodle natural|343|6.4|77|0.6
Hacendado galleta maria chocolate|466|7.6|69|17
Cola cao original cacao soluble bolsa|377|6.6|78|2.5
Dia mari marinera tronco atun con abrefacil|100|23|0|0.9
La cestera bocadito natural sin relleno cubierto de cacao|493|5.4|50.3|29.6
Consum patata prefrita alargada fina|142|2.3|24|3.8
Cremosita leche semi desnatada sin aditivo|46|3.1|4.7|1.6
Freeway zero zero refresco de cola (intr s/azucr)sin caloria s|0|0|0.1|0
Hoy me cuido zanahoria|34|0.8|7|0.3
Milbona arroz con leche natural regular|131|3.2|22.9|2.9
Hacendado dorayaki pancake natural cacao|276|5.8|50|5.3
Garcia baquero loncha mezcla tierno natural|399|24|1.5|33
Hacendado placer exotico nectar regular maracuya|63|0.5|14.4|0.1
Casa tarradellas loncha fina loncha (sc) jamon cocido|101|18.6|0.9|2.5
El pozo salchichon loncha loncha (sc)|306|23|4|22
Matutano fritos the original tira de maiz bolsa|534|5.7|53.9|31.9
Milbona queso fresco batido natural|52|8.5|4.6|0.5
Hacendado especialidades cookie chocolate pepitas chocolate no|477|4.5|66|21.3
Milbona zero refresc vtmnd cn lch light mediterraneo|13|0.5|2.3|0
Puleva a+d leche semi desnatada vitamina a + d|46|3.1|4.8|1.6
Vitasia china fideo natural|364|11.8|75.6|1
Chef select tortll ptt cn cbll crmlzd|157|5.7|14|8.3
Certossa pan fino normal|254|8|44|2.5
Cono sur almeja natural al natural|110|17.5|4|3
Milkybar chocolate natural chocolate blanco sin aditivo sin re|554|5.3|59.6|32.5
Logo carrefour queso queso fresco|116|11|4|6.2
Consum magdalena ffp-magdalenas natural sin relleno|455|5.1|54|24
Logo carrefour extra yogur etnico natural|146|2.9|11|10
Hacendado quiche|251|7.4|24.1|13.9
Hacendado noodle pollo|92|2|11|4.2
Albo tronco atun con abrefacil|377|20|0|33
Consum mozzarella hilo pizza|303|24.5|1.7|22.1
La nora cerdo y vacuno callo a la madrilena|177|15|2|12
Dia yogur etnico fresa|129|2.8|11.9|7.5
Hacendado gelatina hoja neutra|357|89|0|0
Dia rfrsc vtm cn lch fr y vrd light mediterraneo|32|0.3|7.5|0
Aoste seleccion gourmet foie gras pato mousse|405|8.8|2.4|40
Sin marca pieza entera gambas|91|21|0.5|0.8
Monissa canelon|159|7.4|12|8.9
Hacendado almendra sin sal natural|628|23.3|1.5|57
Dia caldo pollo|4|0.3|0.1|0.3
Hacendado sardina en aceite de oliva|289|20|0.7|23
Logo carrefour pico y regaña aceite oliva|376|13|76|1.2
Sin marca patata frita lisa regular natural|556|7.8|44|38
Sondey digestive galleta maria fibra|460|6.7|64.9|17.9
Hacendado bebida de te normal te verde|19|0.1|4.8|0
Bimbo oroweat pan de molde integral|278|11|42|5.9
Alesto almendra con sal natural|629|23.9|4.1|55.4
La tabla de aldi loncha pechuga de pavo sin lactosa bajo en gr|100|20|1|1.5
Hacendado mermelada mermelada fresa|38|0.6|10.4|0
Schweppes pink tonica|19|0|4.3|0
Hacendado yogur con fruta cremoso fruta silvestre|98|3.7|13.7|3.2
Hacendado crunchy choco especialidads infntl galleta y cereal |450|6.3|73|14
Hacendado judia verde plana|17|0.9|3|0
Hacendado linnea v copo arroz y trigo intgrl natural|364|9.6|76|1.7
Hacendado salsa de queso|73|3.2|10.8|1.7
Hacendado chocolate natural chocolate con leche sin aditivo si|557|8.4|51|35
Lovilio porcion provolone oregano|335|23|0|27
La panaderia la cestera pan de molde normal|302|10.1|47.3|6.6
Costa brava jamon curado gran reserva|261|35|0.5|13
Chef select masa de empanada|386|5.8|43.6|19.2
Dia galleta maria|480|6.3|70|19
Hacendado salsa miel y mostaza|415|1.7|15.8|38
Matutano lay's patata frita lisa regular sal vinagre|507|6.2|55.1|29.1
Gallo nature plumas rayadas salvado|350|13|65|2.4
El pozo entero fiambre pechuga de pavo natural|85|13|6|1
Lovilio grana padano polvo|398|33|0|29
Hacendado maiz rostr pr mcrnds dulce|490|6.3|64|22.1
Chef select flauta|328|13.2|29.6|17.1
Bia cous cous natural|346|3.9|69|1.6
Dia palito surimi cangrejo|100|8.5|8.5|3.6
Chef select pizza|252|12.3|30|8.8
Auchan tomate frito natural|73|1.3|8.7|3.3
Pepsi max zero refresco de cola (intr s/azucr)sin caloria con |1|0.1|0.1|0
Coosol tradicional aceite de girasol refinado|900|0|0|100
Logo carrefour mantequilla sin sal regular|754|0.6|1.1|83
Real valle loncha loncha (sc) lacon cocido al horno sin lactos|158|17.3|1|9.4
Revilla loncha loncha (sc) chorizo|323|22|2.5|25
Delizze bombon avellana|576|8.7|44|42
Hacendado tumaca tomate aceite de olv|62|1.1|5|4
Hacendado zumo de verdura regular tomate|18|0.9|3.3|0
Consum loncha bacon cerdo ahumado y sin lactosa|250|16|1.5|20
Dia galatea queso fundido porcion|240|9|7|19.5
Hacendado ensalada americana|156|0.8|8|13
Gullon digestiva especialidades dietetico integral fibra y nar|475|8.1|60|21
Milka choco wafer barquillo natural chocolate con leche cacao|535|6.8|56|31
Hacendado zero bebida de te (intr s/azucr)sin caloria mango|1|0|0|0
Carrefour piña su jugo|56|0.5|13|0.5
Hacendado flan cafe regular|151|5|21.2|5
Hacendado sardinilla en escabeche|270|15.5|0.1|23.1
Freshona macedonia verduras natural|47|2.2|7|0.5
Milka chocolate natural chocolate con leche sin aditivo sin re|539|6.5|57|31
Gullon diet nature chip choco especialidades cookie sin azucar|458|5.9|63|24
La cestera bocadito natural sin relleno|464|6|48|27
Hacendado sorbete helado individual lima limon|94|0|23|0
Hacendado caldos pescado|222|15|19.7|9.1
Milbona leche entera sin aditivo|63|3.1|4.6|3.6
La reserva entero remolacha cocidos|32|1.2|5.8|0
Hacendado fresh ensalada primavera|18|1.6|1.1|0.2
Hacendado yogur liquido natural desnatado 0% natural|36|3.9|4.8|0.5
Danone danet petit queso fresco suisse chocolate|170|3.8|24.4|6.3
Hacendado leche desnatada sin aditivo|34|3.1|4.7|0.3
Haricaman harina fuerza para pan|350|12.7|71|1.2
Bonnatur loncha loncha (sc) jamon cocido sin lactosa|105|19|0.5|3
Hacendado rolling choc galleta banada/cbrta palito sin relleno|483|7.9|63|21
Milka chocolate relleno chocolate con leche sin aditivo carame|545|4.3|56|33
Sin marca hamburguesa crujiente|240|17|12.5|13.5
Primaflor cogollo|17|1.5|1|0.5
Hacendado queso queso fresco|117|13|3.8|5.7
Oscar mayer jumbo queso|233|14|1.5|19
Hacendado mejillon al natural|91|15|2|2.6
Hacendado mejillon ria gallega al natural|72|11|1.9|2
El pozo longaniza cerdo bandeja|216|13|1.5|17.5
Chef select tira de pechuga de pollo|110|20.7|2.6|1.9
President queso fundido crema camembert|254|12|2|22
Italiamo pasta rellena jamon|297|11.2|49.1|5.6
Hacendado barrita barrita galleta y caramelo|501|5.1|64|25
Lovilio cuna grana padano natural|398|33|0|29
Sin marca lomo salmon|216|18.7|0|15.7
Hacendado bebida de cafe normal cafe con leche descafeind|74|3.5|9.1|2.5
Felicia fusilli fibra|334|26|50|1.7
Dacsa arroz redondo|342|7.6|75|0.8
Hacendado yogur vegetal soja con frutas pina maracuya|74|3.1|11|1.8
Fin carre chocolate natural chocolate blanco sin aditivo sin r|571|6.3|52.8|37.1
Aviman huevo gallina campera/o|150|12.5|0.2|11.1
Dr.oetker ristorante pizza masa fina y crujiente prosciutto|224|10|24|9.3
Hacendado queso fundido loncha|187|15.8|10.1|9.3
Dia queso fundido hilo|313|21|10|21
Real valle entero muslo de pavo bajo en grasa|87|14.2|1.8|2.5
Monster bebida energetica cn zumo normal mango|48|0.5|12|0.5
Hacendado chocolate natural chocolate negro sin aditivo sin re|571|11|22|49
Choco krispies pepita arroz chocolate|386|6.3|84|1.9
Hacendado polos helado individual chocolate|111|2.3|24|0.4
Ifa eliges croissant natural sin aditivo|469|6.8|47|28
Dia pimiento piquillo tira|40|0.9|9.1|0
Hacendado linnea v barra cereal arrz trg intgrl c chc lch|346|5.2|53|11
Dia tortilla trigo|321|8.3|53|7.5
Monster energy ultra bebida energetica (intr s/azucr)sin calor|2|0.5|0.9|0.5
Real valle loncha loncha (sc) lomo sin lactosa|272|30|2|16
Freeway zero gaseosa blanca sin calorias|0|0|0|0
Hacendado napolitana natural relleno de cacao|441|5.6|43|27
Dia valencianas ffp-magdalenas natural sin relleno|433|5.4|55|21
Nutricia leche condensada desnatada|281|8.9|60.8|0.2
Prima cero ketchup|38|3.1|5.8|0
Gold spring cero refresco sin gas (intr s/azucr)sin caloria fr|20|0.1|4.5|0
Alipende pan de molde normal|262|9.1|49.4|2.7
Hacendado pan de gambas bolsa|576|1.2|58.1|37.7
Carrefour flan huevo regular|141|4.8|24|3
Hacendado queso blanco untar queso azul|222|4.6|3.6|21
Hacendado leche desnatada proteina|44|6|4.6|0.2
Hacendado pastel de calabacin pollo|114|7.2|6.3|6.3
Kania cebolla|590|6|40|44
Snackday palomitas saladas|454|8.6|52.4|21.1
Chef select pasta rellena ricotta y espinaca|258|8.5|36.3|7.5
La isleña fideo hueco natural|344|12|68|2
Hacendado barrita barrita avellana|539|8|55|32
Dia judia verde redonda|18|1|2.5|0
Risi paloma de maiz bolsa|475|5.6|67|20
Hacendado rodaja pota cocido1|81|17|1.3|0.9
Barnetti seta|16|1.5|1.7|0
Kania caldo cocido|7|0.5|0.5|0.3
Dia queso mozzarella|218|13.8|1.2|17.5
Hacendado crema verdura|38|0.7|6|1
Dia aceite de oliva refinado y virgen|824|0|0|91.5
Hacendado pizza|254|14.8|28|9
Hacendado pate pato mousse|482|9.9|3.5|47
Sin marca picado pollo pavo bandeja|130|16.3|3.1|5.8
Hacendado fresh lechuga romana|14|1|1.4|0.2
Nocilla chocolate negro|533|4.6|54|32
Lr leche desnatada sin aditivo|34|3.1|4.8|0.5
Gallina blanca sopa ternera con estrella|25|0.9|4.9|0.2
Auchan mozzarella hilo pizza|322|13|8|26
Hacendado pepita arroz inflado chocolate|393|6.7|85|2.3
Hacendado mousse nuez|234|3.8|5.1|22
Carrefour postre con nata chocolate regular|140|3|17|6.5
Lotus biscoff especialidades caramelo sin relleno no banado|484|4.9|72|19
Pianola yogur con frutas albaricoque|193|2.8|5|18
El cultivador t tomate frito natural|78|1|9.6|3.7
Danone activia yogur con frutas kiwi|48|4.9|6.5|0.2
Hacendado sardinilla picante aceite de girasol|382|18|0.9|34
Logo carrefour classic especialidades cookie pepita chocolate |494|5.5|62|24
Hacendado pan molde rebanada gruesa normal|256|10|45|3.2
Tosta mini tostada cuadrad normal|405|12|76|4.9
Hacendado pizza relleno queso pepperoni barbacoa|251|10|32.3|8.8
Ocean sea muslito surimi cangrejo empanado|148|7.8|25.3|1.9
El pozo loncha pechuga de pavo braseado|75|14.5|2|1
Dia cuajada natural regular|95|4.9|6.7|5.3
Mercadona ensalada tierna|20|1.4|2.5|0.2
Carrefour cracker normal|501|6|64|25
Dia vegecampo troceado espinaca|21|2.5|1.7|0.2
Dulano bockwurst|278|12.3|2|24.5
Hacendado copo y petalo muesli quinoa chia chocolate negro|416|9.8|60|13
Hacendado almeja blanca al natural|96|15.2|2.1|3
Kania caldo pescado|4|0.3|0.4|0.1
Hacendado crema esparrago|46|0.6|6.3|2
Carrefour corazon alcachofa natural|26|1.4|4|0
Special k chocolate copo arroz trigo intgrl cebada chocolate n|424|8.2|81|6.1
Hacendado loncha pechuga de pavo natural|78|17.8|0.6|0.5
Chef select flauta|270|13.1|30.9|10.2
Rivercote pan rallado normal|373|9.4|78|1.7
Casa pons datil en rama|288|1.8|66|0.2
Consum queso burgos|184|11|3.5|14
Fin carre chocolate cn ingrdnt chocolate con leche almendra en|603|11.8|42.8|41.7
Hacendado queso vaca y cabra|241|15|2.6|19
Carrefour copo avena integral s/procesar fibra|372|13.5|58.7|7
Dia fritos tira de maiz bolsa|538|6.1|54.4|32
Carrefour queso blanco untar natural|238|5.5|3|23
Hacendado no es surimi merluza rebozado|198|12.2|11.8|11.2
Dia nuestra alacena loncha fiambre de sandwich natural|137|12|11|5
Cantorel cuna roquefort|368|19|1|32
Logo carrefour leche desnatada sin aditivo|35|3.2|4.8|0.5
Hacendado alubia legumbre cocida|89|6.3|11.5|0.4
Linessa queso mozzarella|165|20.5|1.5|8.5
Dia pizza|223|12|26|7.5
Monissa lasana|147|6.8|13.6|6.9
Carrefour queso queso fresco|116|11|4|6.2
Auchan ensalada 4 estacions|17|0.8|1.6|0.5
Hacendado salteado de vrdr asd|45|1.8|7.9|0.1
Real valle loncha pechuga de pollo natural|90|15|4.1|1.5
Hacendado garbanzo pedrosillano|348|18.6|47.5|6.1
Solis tomate frito aceite de oliva|70|1.4|7.8|3.5
Hacendado gnocchi pollo y verdura|149|6.3|20|4.4
President queso fundido crema semi curado|292|12|2.4|26
Gaza leche entera sin aditivo|63|3|4.6|3.6
Hacendado no es surimi anchodina en aceite de girasol|198|25|1.8|10.1
Hacendado salmon al natural|98|12|1.3|5.2
Freshona judia verde redonda|39|1.9|6.1|0.1
Central lechera asturiana leche desnatada 0,0 sin aditivo|32|3.2|4.7|0.1
Sin marca maxi hamburguesa vacuno bandeja|207|19.4|0.9|14
Dia flan huevo regular|137|5.5|23.1|2
Hacendado pizza calzone|253|10.1|35.5|7.8
Valor premium seleccion chocolate natural chocolate negro sin |540|6.2|50|33
Sin marca mini hamburguesa cerdo y vacuno bandeja|221|17.7|1.5|16
Hacendado yogur cabra natural natural|77|4.1|4.2|4.9
Sin marca no es surimi salmon surimi langostino sushi|151|5.6|75.5|2.9
Solevita zumo fresco regular mandarina|40|0.6|8.9|0.1
Auchan tomate triturado|22|1|3.6|0
Hacendado loncha fina loncha (sc) jamon cocido bajo en grasa b|99|18.4|2|1.9
Chene d'argent cuna brie natural|356|17|0|32
Hacendado pate cerdo pimienta verde|350|12|7.6|30
El pozo big|204|12|3|16
Hacendado copo y petalo muesli fruta|361|9.1|59|7.6
Verdifresh sopa juliana|38|1.2|6.8|0.2
Mister choc barrita barrita leche|560|8.4|52.2|35.1
Milbona leche semi desnatada sin aditivo|46|3.2|4.7|1.5
Gelatelli premium bombon helado individual bombon surtido|338|4.2|31.4|21.4
La panaderia la cestera pan de molde normal|314|9.8|50.9|6.9
Olisone aceite de oliva virgen extra|822|0|0|91.3
Mini babybel calcio pieza entera snacking bola natural|308|23|0|24
Carrefour lenteja pardina extra|306|24|36|1.9
Nocilla duo chocolate y leche|550|4.5|60|32
Danone activia yogur sabores cremoso mango|47|5.2|6.2|0.1
Dia nuestra alacena loncha mortadela natural|282|12|4.5|24
Hacendado tira poton crudo|53|12|0.7|0.5
Snack day gusanito de maiz bolsa|470|6.5|72|17
Sin marca contramuslo pollo|183|18|0.2|13
Mercadona ensalada completa|137|4.5|12|7.6
Eroski gaseosa blanca sin calorias|0|0|0|0
Hacendado no es surimi salmon marinado|202|23|0.2|12
Delice natillas vainilla regular|132|2.5|23|3.3
Grefusa el piponazo original pipa con sal natural|258|14|1.8|21
Hacendado petalo y pepita cruesli natural|424|9.3|64|15
Fontaneda digestive finas galleta banada/cbrta dietetico fibra|502|6.2|62|24
Mercadona wrap texas|190|9.1|15|10
Dia arroz con leche natural regular|140|1.7|25|3.5
Hacendado tronco atun con abrefacil|108|17|0.2|4
Delice panna cotta natural regular|169|2.4|19.5|9
Pan harina precocido para arepa y empanada|357|7.8|75.5|2
Valor premium seleccion chocolate cn ingrdnt chocolate con lec|567|11|41|39
Hacendado anitines cuadradito pizza|462|15.3|54.1|19.9
Hacendado especialidades avellana no banado|500|7.7|62|24
Danone i love vitalinea yogur sabores limon|38|4.2|5.2|0.1
Coren huevo gallina campera/o|141|13|0.7|9.7
Logo carrefour classic magdalena ffp-magdalenas natural sin re|451|5|53|24
Seven up free refresco de lima lmn (intr s/azucr)sin caloria l|1|0.1|0|0
Milsani leche entera sin aditivo|63|3.1|4.6|3.6
Logo carrefour pan rebanado blanco|266|9.7|45|4.6
Hacendado queso blanco untar finas hierbas|167|5.9|6.4|13
Ifa eliges corto esparrago medio natural|15|1.2|1.8|0
Celorrio tomate triturado|18|0.9|3|0
La panaderia la cestera pan de molde normal|256|9.3|48.9|1.9
Real valle loncha fina loncha (sc) jamon cocido braseado|100|18|1.5|2.4
Hacendado bizcocho aceite girasol sin relleno|338|8.6|60|6.7
Artiach dinosaurios gllt bnd cbrt infntl galleta relieve cerea|496|5.3|68|22
Heinz salsa de soja|246|2.8|58|0
Hacendado polos helado individual fresa|92|0|22|0
Combino farfalle 3 sabores|354|12|70|2
Crownfield copo maiz natural|377|6|84|1.1
Cuetara choco flakes especialidades galleta y cereal calcio ar|446|5.8|73|14
Milbona gelatina fresa sin azucar regular|8|1.8|0.5|0
Artiach arti nata barquillo natural no banado nata|517|3|69|25
Sin marca mantecada ffp-magdalenas aceite de girasol sin relle|451|5.3|48.6|26.1
Hacendado pan de molde blanco|254|4.3|28|12
Corona cuna maasdam natural|354|27|0|27
Hacendado fusion chclt rln cn ingrdnt chocolate con leche barq|558|6.7|52|35
Ocean sean delicias no es surimi gula al ajillo gamba|224|9|6|18
Avinatur jamoncito pollo|101|18.7|0.2|2.9
Eroski leche desnatada sin aditivo|34|3.3|4.8|0.2
Hacendado polos helado individual horchata|107|0.6|22|1.8
Hacendado pasta rellena jamon|297|11|49|5.6
Luxmar original aceite vegetal sin sal mantequilla|544|0.5|0.5|60
Real valle loncha pechuga de pollo braseado sin lactosa|90|15|4.1|1.5
Hacendado yogur con frutas ciruela|87|3.5|12.1|2.6
Hacendado leche entera calcio|68|3.9|4.9|3.6
Logo carrefour original cuajada natural regular|94|4.9|6.7|5.3
El pozo loncha loncha (sc) chorizo|327|24|1.5|25
Sin marca nugget|174|13.7|20.1|3.9
Tendrem huevo gallina criada en jaula|141|13|0.7|9.7
Consum jamon curado gran reserva|232|31|0.1|12
El pozo sabor original frankfurt|233|12|4.5|18.5
Snack day maiz con sal natural|451|7.1|69.2|15.3
Dia alubia legumbre cocida|81|5.3|12|0
Hacendado roditas galleta banada/cbrta rosquilla sin relleno c|490|8.1|63|22
Fin carre chocolate cn ingrdnt chocolate con leche uva pasa av|499|6.4|56.7|26.7
Sunny delight refresco vitaminado (int bj azucar)bj caloria fl|17|0|3.5|0
Landgeflugel jamoncito pollo|131|18|0|6.5
La cestera tostada normal|398|11.3|71|6.8
Campofrio pizza & salsa pizza|291|10|38|11
Hacendado taco cheddar curado|410|25|0.5|34.4
Hacendado tocino cielo natural regular|287|4.3|50.3|7.6
Hacendado gouda hilo|353|21|2|29
Verdifresh|38|1.6|6.9|0.2
Juver disfruta bebida de fruta (intr s/azucr)sin caloria piña|25|0.2|5.7|0.1
Pescanova muslito surimi cangrejo empanado|156|7.5|23.1|3.3
Hacendado helado huevo chocolate|283|3.6|31|16
Milsani leche semi desnatada sin aditivo|46|3.2|4.7|1.6
Valley spire loncha cheddar natural|416|25.4|0.1|34.9
Pajariel loncha loncha (sc) cecina ahumado|206|35|0.4|7
Morenazos galleta banada/cbrta rosquilla sin relleno chocolate|510|6|51|26
Belbake pasa deshidrato|305|2.5|68.6|0.6
Sin marca magro cerdo bandeja|86|11.6|4.1|2.5
Dia lactea yogur natural natural|86|3.1|11.6|3
Ocean sea palito surimi cangrejo|112|8.1|10.5|4.4
Roncero cuna vaca tierno natural|384|22.5|1.6|32
Freeway zero refresc d nrnj cn gs (intr s/azucr)sin caloria na|4|0.1|0.7|0
Hacendado tomate frito aceite de oliv y cbl|130|1.4|11|8.5
Hacendado semilla lino semilla|541|23|5.1|43
Snack day original patata frita lisa regular natural|503|4.5|61|25.9
Mistercorn mix-5 classic coctel surtido natural|480|14|50|23
Hacendado seleccion zumo fresco regular piña|43|0.4|10.2|0.1
Gallina blanca yatekomo noodle pollo y soja|168|4|23|6.5
Hacendado pisto de verduras|54|2|9.7|0.1
Hacendado salsa pesto|525|4|11|51
Avecrem caldos pollo|182|10|14|9.4
Schweppes original tonica|25|0|5.8|0
Hacendado pate pollo y cerdo trufa y arandano|341|12|12|27
Sunbites snack multiceral bolsa|479|7.2|61.8|20.8
Hacendado fresh ensalada tierna|18|1|2.3|0.2
Hacendado poton taco al ajillo|295|17|0.5|25
Pascual leche entera sin aditivo|64|3.2|4.6|3.6
Fin carre chocolate cn ingrdnt chocolate negro almendra entera|574|10.3|43.1|38
Dia maniac! patata frita lisa regular artesana|543|6.8|50|34
Dia vegecampo entero guisante fino|97|6.3|14|0.4
Dia lenteja pardina extra|306|24|36|1.9
Milbona bebida de avena sin lactosa|46|1.4|8.3|0.8
Hacendado piadina|315|7|53|8.5
Consum valencianas ffp-magdalenas natural sin relleno|448|5.6|54|23
Milbona yogur liquido natural semidesnatado natural|63|2.7|9.8|1.4
Cidacos deliciosos tomate triturado|26|0.8|5.1|0.1
Kellogg's all bran almohadilla salvado de trigo chocolate y fi|392|10|65|8
San millan queso blanco untar natural|237|5.9|3.8|22
Rualmar huevo gallina campera/o|141|12.7|0.7|9.7
Real valle loncha chopped de pavo natural|126|12.5|5.5|6
Roncero loncha mezcla tierno natural|295|25|1.4|21
Nurture harina normal uso comun|374|13.5|5.8|7
Harvest basket patata prefrita alargada|135|2.4|23|3.2
Granini nectar regular naranja|45|0.5|10.1|0.5
Hacendado salsa salsa de seta|117|1.7|5|9.8
Mercadona ensalada completa|202|11|5.2|15
El pozo big queso|244|12|5|19.5
Valor valorcao premium cacao a la taza tradicional|382|5.6|80|2.6
Huercasa mazorca dulce|109|3.2|15|2.8
Hacendado entero haba baby|70|5.8|7.2|0.6
Hacendado chocolate natural chocolate negro sin aditivo sin re|610|15|8|54
Gallina b facil 100% natural caldos marisco|15|1|1|1
Hacendado salsa para patatas|318|0.9|3.8|32.9
Hacendado arroz negro con calamar|98|4.3|18|0.9
Hacendado mini excluir base (sc) salami natural|528|26|2.4|46
Sondey especialidades cookie fibra sin azucar pepita de choclt|412|8.8|54.4|20
Puleva mañanas ligeras leche semi desnatada sin aditivo|41|3.2|4.8|1
La huerta de doña rogelia patata|70|1.7|15.7|0.1
Hacendado pipa sin sal natural|607|30.5|5.6|49.4
Bon preu loncha fina loncha (sc) jamon cocido|104|19|1.3|2.5
Hacendado nugget pavo|218|12.3|15.2|11.8
Phoskitos original pastelito natural leche chocolate|415|5.3|59|17
Maestros aceiteros origen aceite de oliva virgen extra|822|0|0|91
Hacendado zumo de fruta regular piña|50|0.5|11.3|0
Edulis ensalada cesar|139|9.1|7.1|7.9
Chef select tortilla patata|160|5.3|13|9.3
Hacendado troceado brocoli clflr & znhr|32|2.1|3.8|0.3
Hacendado iso on bebida isotonica normal blue|21|0|4.9|0
Uncle william ketchup|97|1.1|22.2|0.1
Maizena potax flan y natilla postres en polvo|112|2.8|22|1.3
Sin marca no es surimi marisco salpicon|126|12.3|4.9|6.4
Real valle frankfurt queso|223|13|2.2|18
Hacendado coctel surtido picante|564|17.1|31|40.1
Chef select gnocchi patata|152|4.2|32|0.5
Alesto avellana sin sal natural|722|14.3|3.5|70.5
Sin marca hogaza cortado normal|266|3.7|50|4.4
Cidacos ensalada pimiento piqullo|55|1.6|10|0.6
Dia espiral 3 sabores|350|12|70|1.7
La vaca que rie queso fundido porcion|145|11|6|8.5
Eroski queso fundido loncha|213|12|12|13
Ifa eliges tomate triturado|22|1|3.6|0
Simon life refresco vitaminado normal mandarina|20|0|4.8|0.1
Hacendado bebida de fruta (intr s/azucr)sin caloria mango|17|0.2|4.1|0
Dia mari marinera tronco atun con abrefacil|374|13.7|0|35.5
Carrefour jamon curado valor indis|211|30|0.2|10
Nixe berberecho al natural|79|13.5|4.8|0.7
Snack day patata frita lisa regular crema y cebolla|491|4.1|61|24.8
Logo carrefour classic leche desnatada sin aditivo|35|3.2|4.8|0.5
Ifa eliges regaña aceite oliva|495|11|76|16
Real valle loncha jamon de pavo natural|85|13|2.5|2.5
Eroski cuatro quesos hilo|351|25|2|27
Combino penne rigati natural|336|12|62|2
Nestle la lechera delicias delicia de trufa trufa regular|156|3.7|22|5.6
Freshona troceado verdura para sofrito|36|1.2|6.4|0.3
Hacendado barrita de leche chocolate blanco|428|5.1|61|16
Carreour digestive galleta maria fibra|483|6|66|21
Celta leche semi desnatada sin aditivo|45|3.2|4.7|1.5
Dia seleccion picado vacuno bandeja|178|17.9|4|10
Dia nuestra alacena loncha fiambre de york natural|111|12|10|2.5
Ifa eliges magdalena ffp-magdalenas natural sin relleno|455|5|54|24
Logo carrefour tortilla patata cbll|147|5.2|11|9
Logo carrefour corto esparrago medio natural|18|1.1|1.8|0.5
Hacendado maiz rosetero natural|341|9.6|60|4.5
Certossa picatoste|398|10.2|77.7|4.1
Musa mayonesa regular sin azucar|653|1|0.7|72
Dia nuestra alacena pieza entera excluir base (sc) espetec nat|463|28.5|4|37
Eroski pan de molde sn crtz normal|248|8.2|46|3
Hacendado castana sin sal natural|172|4.1|33|1.5
Carrefour seleccion patata frita lisa regular natural|508|7.3|52|29
Dr.oetker panini baguette jamon y queso|272|11|27|13
Real valle loncha fina loncha (sc) jamon cocido sin lactosa ba|99|15|3|3
Apis pate cerdo suave|255|8.2|3|23.5
Central lechera asturiana leche entera sin aditivo|63|3.2|4.6|3.6
El corte ingles huevo gallina campera/o|138|12.5|0.7|9.5
Hacendado coctel sin sal natural|497|15|31|33
Carrefour natillas vainilla regular|132|2.5|23|3.3
Carrefour loncha emmental natural|386|29|0|30
El pozo seleccion jamon curado valor indis|232|30|0|12.5
Dia cracker normal|525|7.1|63|27
Alteza huevo gallina libre de jaula|141|12.7|0.7|9.7
Danone actimel 0% yogur liquido sabores desnatado fresa|31|2.7|4.1|0.4
Llet nostra leche entera sin aditivo|64|3|4.8|3.6
Fin carre chocolate cn ingrdnt chocolate negro avellana entera|587|8.6|34.4|44.3
Sin marca huevo gallina|150|12.5|0|11.1
Dia al punto arroz tres delicias|113|4.4|19|1.7
Ocean sea pata pulpo|90|20.2|0.5|0.8
La hacienda entero patata natural|57|1.2|12|0.5
Orlando tomate triturado|18|0.7|3.1|0.1
Sin marca alas pollo|180|18|0|12
Hacendado pizza horno de piedra iberica|287|13.3|26.6|14.2
Hacendado leche semi desnatada vitamina y acido folico|44|3|4.6|1.5
Autenticos tranchetes queso fundido loncha|196|13.5|5|13.5
Hacendado horchata|43|0.5|3.8|2.7
Hacendado salsa alioli ajo aceite|749|1.2|1.5|82
Hacendado pizza horno de piedra bolonesa|256|14|27.8|9.9
Hacendado pieza entera excluir base (sc) longaniza natural|351|30|3.7|24
Dia patata frita ondulada regular jamon|524|7.8|48|32
Hacendado mermelada mermelada albaricoque|194|0.5|48|0
Dr.oetker ristorante pizza masa fina y crujiente atun|227|10|23|9.7
Logo carrefour maiz dulce|69|3|8.6|2.1
Hacendado refresc vtmnd cn lch normal melon sandia|21|0.3|4.9|0
Carrefour espinaca|21|1.8|2.1|0.2
Hacendado lenteja a la jardinera|65|4.2|7.9|1.3
Hacendado barquillo natural no banado avellana|517|0.6|62.5|26.4
Sin marca lomo salmon crudo|224|20|0|16
Alipende leche entera sin aditivo|63|3|4.6|3.6
Extra control ketchup|102|1.2|23.2|0.1
Schweppes refresc d lmon cn gs normal limon|19|0|4.4|0
Hacendado salsa italiana bolonesa tomate con carne|154|3.8|11.4|10
Campofrio pizza & salsa pizza|258|11|31|10
Tstrc chcgy gru 3 mi vlln fvrt sandwich leche y chocolate|488|5.9|70|20
Classico dl maestro panettiere pan de molde normal|233|3.5|43|3.4
Hacendado palito de patata bolsa|444|1.8|73.8|15.6
Flora oliva sin sal regular|630|0.5|0.5|70
Hacendado linnea v classic copo arrz trg intgrl cbd intgr natu|385|8.1|82|1.5
Valor premium chocolate natural chocolate negro sin aditivo si|561|12|22|44
Bimbo mini tosta arandano|423|9.5|75|8.7
Hacendado mango seco|318|2.9|70|1.1
Donettes donete natural sin relleno chocolt blanc rayad cacao|505|4.9|48|32
Alpro yogur vegetal soja sabores arndn sn lcts/fr rj sn lc|70|3.7|8.2|2.2
Carrefour discount entero guisante|94|5.1|17|0.6
El pozo entero fiambre de york natural|112|11|8|4
La pila la broche fun roll flauta|287|10|34|12
Sin marca mini hamburguesa pollo bandeja|148|16|4.3|7.5
Martinete tomate triturado|28|1.2|5.2|0.1
Orlando tomate frito aceite de oliva|72|1.2|8.1|3.6
Carrefour patata frita ondulada regular natural|553|6.6|49|36
Hacendado loncha chicharron natural|213|15|0|17
Hacendado fussion chclt rln cn ingrdnt chocolate blanco almend|535|5.7|56|32
La casera refresc d lmon cn gs (intr s/azucr)sin caloria limon|1|0|0|0
Natural food camos albondiga bacalao crudo|120|6.4|16.7|3.1
Carbonell aceite de oliva virgen|900|0|0|100
Suprema especialidades sin relleno no banado|469|6|72|17
Logo carrefour aceite vegetal sin sal regular|544|0.5|0.5|60
Danone danacol yogur liquido clstrl sabores desnatado tropical|37|2.7|4|1.1
Dia tomate frito aceite de oliva|120|1.6|11.4|8
Apis tomate frito natural|76|1.5|10|3.1
Logo carrefour classic yogur natural natural|87|3.3|11|3.1
Carrefour tronco atun superfacil|186|24|0.5|10
Alpro espcl frmntd vegetal soja fruto rojo regular|65|3.7|6.6|2.1
Dia nuestra alacena pieza entera excluir base (sc) fuet natura|432|25|2.1|36
Ferpasat zanahoria|39|0.9|6.8|0.2
Sin marca sandwich chocolate|479|6|67|20
Consum caldo pollo|10|0.6|0.5|0.6
Carrefour guisante muy finos|80|5.4|10|0.8
Oscar mayer original wienner's|211|11|1.2|18
Zanuy tortilla|282|6.4|53|3.4
Eroski basic yogur natural natural|49|3.7|4.2|1.9
Matutano cheetos sticks stick de maiz bolsa|518|6|56.2|29.3
Hacendado mejillon picante en escabeche|201|13|4.3|15
Bon area griego yogur etnico natural|144|3.8|12.4|8.8
Chef select pizza|202|10.6|27|5.5
Huercasa entero remolacha cocidos|44|1.5|8.5|0
Hacendado bebida soja|44|3.4|2.9|1.9
Auchan burguer normal|260|9.7|46|3.3
Grefusa mister corn el origina maiz con sal barbacoa|482|7.6|63|21
Lu principe maxi choc sandwich chocolate|507|5.5|65|24
Mister choc classic cacao soluble bote plastico|373|6.4|76.5|2.8
Eroski yogur etnico natural|115|3.3|3.7|9.7
Hellmann's salsa barbacoa|161|0.8|33|0.8
El pozo loncha mortadela de pavo natural|159|10.5|5.5|10.5
Hacendado leche desnatada 0,0 sin aditivo|34|3.1|4.7|0.3
Dia cornete helado individual nata|289|3.7|36|14
Hacendado pieza entera langostino rebozado|185|8.1|27.1|4.5
Hacendado pizza relleno seta carbonara|272|11.9|27|12.6
Hacendado galleta relieve leche y huevo|479|6.9|70.4|18.5
Choco nussa chocolate|551|3.7|57.3|13.3
Hacendado brote soja germinada|26|1.3|4.4|0.5
Dia 0% yogur natural natural|39|3.9|5.6|0.1
Sondey sandwich chocolate|469|5.8|67|19
Milka choco-swing mmmax chclt rln cn ingrdnt chocolate con lec|562|4.9|56|35
Real valle pieza entera excluir base (sc) espetec natural|449|27|3.5|36
Hacendado quiche|280|10.4|27.4|14.3
Delice receta casera natillas vainilla regular|131|2.6|23.1|3.1
Nestle smarties yogur con fruta y gragea fresa|120|4.3|15.2|4.6
La masia masiasol aceite de girasol refinado|827|0|0|92
Ocean sea delicias del mar tallarin surimi|125|10|6|6.5
Casa tarradellas masa de hojaldre|385|7.5|41.5|21
Lauki leche entera sin aditivo|63|3|4.7|3.6
Eroski corto esparrago grueso natural|15|1.2|1.8|0
Carrefour pipa con sal natural|570|18|17|46
Gold spring cero refresco sin gas (intr s/azucr)sin caloria ca|20|0.1|4.5|0
Original patata frita lisa regular natural|534|5.9|56|31
Bomilk leche entera sin aditivo|63|3.1|4.6|3.6
Consum cero refresco de cola (intr s/azucr)sin caloria con caf|0|0|0|0
Hacendado barrita muesli avellana almendra|432|8.1|64|15
Gullon galleta maria|458|5.7|74|15
Marpa jamon curado valor indis|179|27.9|0.4|7.4
Gallega leche semi desnatada sin aditivo|46|3.1|4.7|1.6
Kania salsa de soja|65|10.3|5.2|0.2
Gaza leche desnatada sin aditivo|36|3.1|4.7|0.5
Carrefour sobaos ffp-bollería - otros natural sin relleno|450|5.5|50|25
Dia nuestra alacena loncha loncha (sc) salami natural|436|18|1|40
Milbona griego yogur etnico natural|58|6|4|2
Pagani tortellini ricotta espinaca al huevo|364|15|60|6.2
Carrefour clasico queso blanco untar natural|141|6.9|3|11
Edulis ensalada cesar|167|8.6|12.1|9
Hacendado pate salmon|280|7.9|1.7|26.8
Dia loncha mezcla tierno natural|367|21|1|31
Logo carrefour aceite girasol light sin sal regular|364|0.5|0.5|40
Hacendado+proteinas mousse vainilla sin lactosa regular|76|10|5|1.8
Solevita bebida de fruta (int bj azucar)bj caloria costa rica|25|0.1|6.1|0
Casa tarradellas pizza|261|15.1|31|8.2
Logo carrefour picado vacuno bandeja|190|16.9|0.8|13.2
Spar macarron natural|344|12|68|2
Hacendado chocolate cn ingrdnt chocolate con leche almendra si|554|10|45|36
Pascual sin lactosa leche semi desnatada sin aditivo|46|3.3|4.7|1.6
Burgo de arias 0% queso burgos|58|11|3.6|0
Roncero queso queso fresco cabra|232|12.7|2|19.2
Dia nuestra alacena loncha mortadela aceituna|254|10|6.3|21
Real valle loncha fresca loncha (sc) jamon cocido braseado sin|100|18|1.5|2.4
Espuña minuets mini excluir base (sc) fuet sin lactosa|394|26|5|30
Verdifresh zanahoria|49|0.9|9.6|0.2
Carrefour pate cerdo|296|12|1.3|27
Edulis espinaca|25|2.8|1.7|0.4
Sin marca longaniza cerdo bandeja|212|13|2|18
Grefusa el piponazo original pipa con sal natural|258|14|1.8|21
Logo carrefour classic flan vainilla regular|96|2.4|18|1.6
Logo carrefour chocolate natural chocolate con leche sin aditi|539|7|57|31
Dia arroz largo|351|8.3|75.9|1.2
Consum sin lactosa leche semi desnatada vitamina|45|3.2|4.7|1.5
Auchan croissant natural sin aditivo|466|6.6|46|28
Dia queso queso fresco|190|13.3|2.3|14
Ifa eliges pan de molde sn crtz normal|252|8.9|43|4.2
La cestera pan de molde masa madre|293|10.9|45.7|5.6
La carloteña loncha pollo relleno|180|18.4|2.8|10.6
Danone activia yogur con frutas lima limon|48|4.9|6.1|0.1
Pescanova filete bacalao crudo|55|12.6|0|0.5
Hacendado bebida de cafe light cafe con leche sin lactos|42|3|5.7|0.8
Sin marca croissant natural sin aditivo|458|6.6|46|27
Hacendado sopa ave con fideo|327|13.1|59.7|3.3
Consum ensalada gourmet|23|1.7|1.1|0.5
Michael schara|239|14.4|0.8|19.8
Carrefour maiz rostr pr mcrnds saladas|417|8.8|50.5|18
La masia sumum aceite de oliva refinado y virgen|824|0|0|92
Valblanc gouda hilo|327|23.5|2|25
Auchan tronco atun con abrefacil|292|17|0|24.9
Llet nostra leche desnatada sin aditivo|34|3.2|5|0.1
La vaquera leche semi desnatada sin aditivo|45|3.2|4.7|1.5
Milbona griego yogur etnico natural|124|2.7|9.4|8.1
Casa tarradellas pizza|253|12.1|29.8|9.1
Auchan aceite de girasol refinado|900|0|0|100
Artiach filipinos galleta banada/cbrta rosquilla sin relleno c|509|6.8|60|26
Roncero loncha cabra tierno natural|422|25|1.8|35
Trina refresco sin gas bajo en calorias naranja|19|0.1|4.3|0
La cestera panecillo integral c/ fibra|420|11|63|12
Hacendado troceado menestra especial|50|3.4|6.5|0.3
Logo carrefour hamburgesa cerdo y vacuno bandeja|201|17.5|1.3|14
Consum loncha pechuga de pavo sin lactosa|95|16|2|2.5
Helios mermelada mermelada extra fresa|235|0.4|58|0
Morenazos galleta banada/cbrta sandwich cacao crema chocolate |533|5|62|29
Pepsi refresco de cola light con cafeina cola|0|0.1|0.1|0
Ocean sea pieza entera langostino crudo|98|22.3|0|1
Gullon diet nature galleta maria sin azucar|408|7|75|11
Maizena flanin el niño flan y natilla postres en polvo|112|2.8|22|1.3
Hacendado salsa trufa|151|4.4|9|11
Dia vegecampo troceado judia verde plana|39|1.9|6.1|0.1
Hacendado petalo y pepita cruesli fruto seco y fibra|463|8|63|19
Hacendado mostaza dulce|121|2.8|19.3|3
Auchan harina normal uso comun|353|10|71|2.6
Granja san miguel huevo gallina criada en jaula|150|12.5|0.5|11.1
Leyma natura leche desnatada sin aditivo|34|3.1|4.8|0.5
Argal pate cerdo|191|9|5|15
Consum yogur etnico natural|124|2.9|5.7|10
El pozo seleccion jamon curado valor indis|232|30|0|12
Dia cacahuete con sal natural|629|27.2|6.7|53.1
Hacendado seleccion zumo fresco regular clementina|42|0.6|9.7|0.1
Belbake levadura quimica|86|0.1|21.4|0.1
Argal bonnatur loncha fina loncha (sc) jamon cocido sin lactos|105|19|0.5|3
Hacendado sorbete helado individual fresa|94|0|23|0
Auchan champinon laminado natural|22|2.4|1|0.4
Hacendado yogur liquido natural desnatado 0% natural|29|3.3|3.8|0.1
Chovi ajonesa mayonesa regular ajo|705|1.1|2|77
Hacendado mermelada mermelada extra arandano|206|0.5|49|0.5
Calcio leche semi desnatada calcio|49|3.9|4.7|1.6
Cervinia queso blanco untar natural|252|4.5|3|24.5
Auchan leche semi desnatada sin aditivo|46|3.2|4.8|1.6
Ifa eliges patata prefrita alargada|130|2.4|22|3.2
Fontaneda digestive finas galleta banada/cbrta dietetico fibra|489|6.7|64|22
Red bull bebida energetica normal|46|0|11|0
Hacendado carne albondiga en salsa|132|8.8|6.3|8
Milka chocolate natural chocolate con leche sin aditivo sin re|539|6.5|57|31
Logo carrefour leche entera sin aditivo|63|3.1|4.6|3.6
Gullon diet nature galleta relieve dorada sin azucar|439|6|68|18
Bimbo cruapan pan de molde normal|393|7.6|38|23
Hacendado coctel seco|425|2.3|70|13.9
Eroski basic queso burgos|184|11|3.6|14
Danone oikos yogur etnico natural|155|2.7|16.6|8.6
Alteza yogur etnico natural|124|2.9|5.7|10
Spar leche semi desnatada sin aditivo|46|3.1|4.7|1.6
Razo tronco atun con abrefacil|367|17|0|33
Dia seleccion hamburguesa crujiente|190|13.3|20.3|6.2
Old el paso tortilla trigo|299|9.4|53.2|5.2
Hacendado caramelo caramelo|339|0|84|0
El molino del dia pan rallado normal|382|10|80|1.7
Danone original 1919 yogur con frutas fresa|108|2.5|18.3|2.8
Gallina blanca sopa verdura|17|0.5|3|0.1
Danone activia yogur con frutas pera|97|3.5|12.4|3.3
Dia cono de maiz bolsa|512|8.5|4.5|28
Auchan cinta bacon cerdo sin lactosa|289|15|1|25
Alipende pan de molde sn crtz normal|248|8.2|45.7|3
Bonarea leche desnatada sin aditivo|37|3.2|4.8|0.2
Aragonesa harina integral uso comun|330|12|62|1.8
Churreria santa ana patata frita lisa regular natural|493|6.7|55.5|26.2
Lauki leche semi desnatada sin aditivo|46|3.1|4.8|1.6
Hacendado yogur con frutas y cereals natural|134|4.6|20.9|3.3
Eridanous yogur etnico cremoso natural|121|4.6|3.2|10
Urgasa huevo codorniz libre de jaula|154|13.1|0.4|11.1
Dr.oetker ristorante pizza masa fina y crujiente 4 queso|251|11|24|12
Diatosta minigrill mini tostada integral|397|15.2|62.4|7.7
Sin marca cuna azul|342|21|1.5|28
Carrefour alubia legumbre cocida|85|5.3|12|0
Appletiser bebida rfrscnt cn gs normal manzana|46|0|10.8|0
Lotus original especialidades caramelo sin relleno no banado|484|4.9|72.6|19
Hacendado mousse ajo y finas hierbas|208|3.8|5.5|19
Tenery patata prefrita gajo|128|2.6|20.2|3.5
Florette duo canonigo y rucula|26|2.4|1.5|0.5
Hacendado surtido surtido natural|383|10.1|74.1|4.1
Puleva batido chocolate y leche|60|3.2|9.1|1.2
Valblanc cuatro quesos hilo fundir y gratinar|332|25|1.5|24
Gallina blanca 100% natural caldo casero pescado|6|0.5|0.5|0.2
Max crecimiento + desarrollo preparado lacteo entera calcio om|58|2.6|5.3|2.9
Carrefour loncha havarti natural|418|19|0.5|38
Mercadona ensalada mil islas|112|3.2|10|6.3
Danone i love vitalinea yogur natural natural|38|4.2|5.2|0.1
Casa tarradellas cinta bacon cerdo natural|293|16.6|0.5|25
Roncero cuna cabra natural|387|23|1.8|32
Carrefour maiz con sal natural|538|6.1|54.4|32
Hacendado salsa de soja dulce|249|1.9|60|0.1
Bollo naranja|42|0.8|8.6|0
Danone danacol yogur liquido clstrl sabores desnatado lima-lim|40|2.7|4.3|1.1
Zanetti loncha provolone natural|360|24|0.7|29
Hacendado bebida de almendra|36|0.7|3.7|2
Snack day patata frita lisa bajo en caloria natural|459|4.8|64.7|19.2
Prima mostaza normal|86|3.3|7.6|4.7
Auchan arroz extra|344|7.6|75|1
Cremosita leche entera sin aditivo|63|3|4.6|3.6
Consum espinaca|26|2.9|1.4|0.5
Gut bio yogur ecologico natural cremoso natural|75|5|4.7|3.8
Hacendado galleta maria sin lactosa y fibra|464|5.8|77|14
Las panaeras sevillanas harina normal para freir|351|11|73|1.6
Sin marca lechuga iceberg|12|0.5|2.1|0
Dia pan de molde sn crtz integral|229|9.7|39|2.8
Carrefour de la abuela salsa tomate tomate y aceite de oliva|195|1.9|12|15
Hacendado avellana sin sal natural|671|15.5|3.9|63.8
El molino del dia pan de molde integral y sin lactosa|250|10|39|3.9
Hacendado huevo huevo y figura chclt sorpresa|559|6.6|54.1|34.7
Milbona pudding vainilla bajo en grasa|75|10|5.2|1.5
Bimbo artesano pan de molde integral|249|9.1|44|2.2
Golden cheese loncha gouda natural|348|24|0.1|28
Gelatelli cornete helado individual chocolate y vainilla|285|3.9|38|12.6
Auchan tronco atun con abrefacil|374|13.7|0|35.5
Velarte rosquilleta pipa|518|11|50|30
Bonarea ensalada 4 estacions|20|0.6|1.9|0.9
Hacendado chocolate cn ingrdnt chocolate negro naranja sin rel|522|8.2|43|33
Sin marca pan de molde normal|246|9.2|45|2.5
Dia nelly galleta relieve|468|6|69|18
Danone densia forte yogur liquid ostprss sabores desnatado 0% |50|3.2|7.9|0.4
Iberitos crema base carne jamon york|311|4.4|6.7|30.4
Campolargo arroz redondo cocido|213|4.2|43.2|2.5
Artua aceite maiz sin sal regular|487|0.5|0.5|55
Nurture harina integral uso comun|342|14|63|1.9
Logo carrefour classic yogur sabores surtido|75|3|11.4|1.9
Freshona guisante finos|69|4.4|7.8|1
Dia temptation bombon helado individual bmbn almn vnl y chcl|353|5.1|30.1|23.2
Bocage mantequilla dulce regular|555|0.8|0.8|61
Palacios tortilla patata cbll|156|4.3|14|8.8
Dia maiz rostr pr mcrnds saladas|399|8.8|50.5|16
Rustico picado vacuno bandeja|229|16|1.5|17.5
Logo carrefour original nuez sin sal natural|686|16|5.3|65
Cristallino chapata cristal normal|238|7.5|46|2.4
Mister choc bellona barrita barrita brql avln y crm d lc|549|9.4|50.2|34
Ifa eliges leche entera sin aditivo|63|3|4.7|3.6
Consum hamburgesa pollo bandeja|193|16.3|3.8|12.5
Dia choco-aro galleta banada/cbrta rosquilla sin relleno choco|511|6.4|64|25
Roncero cuna oveja curado natural|455|27|1.3|38
Ocean sea tira poton empanado|167|14|5.2|9.6
Frigo magnum bombon helado individual bombon almendra|270|3.9|25|17
Ideal leche evaporada desnatada|109|7.4|11|4
Hacendado crsssss!!! patata frita lisa regular sin sal|572|3.6|50|38.2
Hacendado helado vainilla chocolat nt|197|3.3|23|10
Pascual sin lactosa leche desnatada sin aditivo|34|3.4|4.8|0.1
Dia nuestra alacena sarta picante excluir base (sc) chorizo|482|25|1|42
Hacendado salsa a la pimienta verde para carne|382|14|55.8|11.1
Dia vital leche desnatada vitamina a d e|34|3.3|4.8|0.2
Bonarea leche entera sin aditivo|64|3.2|4.8|3.6
Cntral lechera asturiana fibra preparado lacteo semi desnatada|51|2.8|4.6|1.5
Quelita especialidades galleta de inca sin relleno no banado|469|6.8|64|20
Logo carrefour yogur liquido con trozos semidesnatado fresa|65|2.5|12|1
Hacendado mini pico bajo en sal|466|9.5|63.6|18.2
Buitoni piccolinis mini pizza normal jamon y queso|227|10.9|28.3|7.4
Consum jamon curado valor indis|256|30|0.3|15
Sin marca hamburguesa salmon y merluza|165|12.6|3.9|10.5
Hacendado tagliatelle nido espinaca|366|12|74|1.5
Milbona yogur sabores surtido|89|3.7|14.7|1.4
Arroyo jamon curado valor indis|176|30|0.5|6
Ifa eliges burguer normal|274|11|45|4.8
Cuetara tostarica oceanix especialidades cookie cacao pepitas |470|7|68|18
Certossa hogaza rustica masa madre|295|9.9|51.3|4.2
Bonarea yogur natural natural|68|3.6|5.3|3.6
Dia gelly gelatina fresa regular|71|0|18|0
Dia patata frita lisa regular receta campesina|555|7|42|38
Carrefour natillas caramelo regular|110|2.6|19|2.7
Actimel yogur liquido con trozos regular fresa|77|2.9|12|1.5
Sondey surtido galleta|479|7.2|61.2|22
Carretilla tomate triturado|22|1|3.6|0.2
Rivercote mini tosta trigo|397|11|70|7.1
Hacendado pizza|216|12.3|26|6.7
La cestera pan de molde normal|272|14|30|8.6
Dia palito surimi cangrejo|106|8.1|9.4|4
Alesto coctel surtido|520|11.8|31.8|36.8
Hacendado yogur con cereales natural|158|6.1|9.1|10.4
San miguel huevo gallina criada en jaula|150|12.5|0|11.1
Carrefour sanus yogur liquido con trozos semidesnatado fresa|65|2.5|11|1.4
Hacendado bebida de arroz y coco|50|0.1|9|1.6
Alteza leche semi desnatada sin aditivo|46|3.1|4.7|1.6
Findus siempre en casa entero guisante fino|83|5.5|11|0.7
Hacendado quinua normal uso comun|389|14|66|6.1
Real valle sarta picante sin lactosa excluir base (sc) chorizo|500|25|1|44
Central lechera asturiana mantequilla light sin sal regular|381|0|3|41
San roque pico normal|379|11.2|73.8|3.1
Edulis duo canonigo y rucula|27|2.8|2.1|0.4
Logo carrefour pieza entera langostino cocido1|93|20|0.5|0.6
Alcarreños huevo gallina criada en jaula|141|12.7|0.7|9.7
Peskitos figura merluza empanado|189|9|22.4|6.6
Kellog's special k classic copo arroz trigo intgrl cebada natu|392|8|84|1.3
Sin marca endivia|9|1.1|2.6|0.2
El pozo loncha pechuga de pollo natural|73|14.5|1.4|1
Bimbo oroweat pan de molde integral|272|14|30|8.6
Hacendado chocolate relleno chocolate negro sin aditivo mousse|551|6.5|49.5|35
Hacendado bebida soja vainilla|32|3|1.4|1.5
Ifa eliges tortilla trigo|316|8|53|7.4
La panaderia la cestera hot dog rustico normal|258|9.9|49|1.9
Bon preu tomate frito natural|72|1.2|8.9|3.5
Consum maiz sin azucar sin azucar|77|2.6|12|1.7
Lanisol aceite de girasol refinado|827|0|0|91.9
Arluy the simpsons minis galleta relieve cereal y chocolate|472|5.7|73|17
Alteza pan de molde normal|266|9.7|45|4.6
Chene d'argent porcion camembert natural|273|20|1|21
Carrefour queso fresco batido natural|46|7.5|4|0.5
Logo carrefour pan de molde sn crtz integrl baj en gras azucr|231|9.7|39|2.8
Eroski burguer normal|278|9.7|47|5
Logo carrefour espiral 3 sabores|344|12|67|2
Ifa eliges yogur natural natural|59|3.9|4.9|2.6
Hacendado salsa burger|340|1.5|11.3|31.6
Mexifoods tortilla integral|292|9.7|42|7.5
Alipende patata frita lisa regular artesana|566|6|46|39.1
Alipende tomate frito natural|78|1|9.6|3.7
Milbona linea yogur sabores limon/fresa/fruta bosque|39|4.2|5.4|0.1
Auchan loncha bacon cerdo sin lactosa|250|16|1.5|20
Valor chocolate cn ingrdnt chocolate negro almendra entera sin|562|14|26|42
Eroski maiz dulce|77|2.5|12|1.7
Casa tarradellas pizza|280|14.5|27|12.2
Al punto pizza|242|10|31|8.1
Hacendado helado chocolate c/cookies|298|5.5|32|16
Lu glico mikado galleta banada/cbrta palito sin relleno chocol|476|7|68|19
Coca cola mini refresco de cola normal con cafeina cola|42|0|10.6|0
Capitan varita merluza empanado|180|10|19.2|6.6
2 sisters jamoncito pollo|143|19|0.1|7.4
Dia galleta tostada|432|6.9|77|10
Nocilla original 0% cacao|441|4.5|52|29
Puleva mañanas ligeras leche desnatada 0,0 sin aditivo|37|3.2|4.8|0.2
Delice receta casera natillas vainilla regular|101|2|16|3
Celta leche entera sin aditivo|63|3.1|4.6|3.6
Panet's pan de molde sn crtz normal|242|9.8|44|2.4
Carrefour filete merluza crudo|78|16|0.6|1.2
J.d.gross chocolate natural chocolate negro sin aditivo sin re|565|8.4|33.8|41.5
Brillante al minuto quinoa cocido|160|6|24|3.6
Hacendado chocolate natural chocolate con leche sin aditivo si|465|9|47|31
Fin carre crusti choc chocolate cn ingrdnt chocolate con leche|514|6.5|61.4|26.5
Campo de los nogales loncha loncha (sc) chorizo|316|20|2.7|25
Ous roig sabor d'abans huevo gallina|141|12.7|0.7|9.7
Hacendado bebida de fruta light arandano y fruta roja|19|0.2|3.5|0
Danone activia yogur con frutas fruto rojo|48|4.8|6.2|0.1
Hacendado postre vegetal soja vainilla regular|89|3|15|1.6
Noel delizias al corte loncha fresca loncha (sc) jamon cocido|110|19|0.7|3.5
Hacendado pimiento asado|30|0.9|5.6|0.2
Danone i love vitalinea yogur sabores frutas del bosque|38|4.2|5.2|0.1
Hacendado filete melva en aceite de girasol|303|22|0.5|24
Logo carrefour extra leche fresca semi desnatada|46|3.1|4.7|1.6
Danone oikos yogur etnico fresa|147|3.1|14.6|8.2
Dia pizza|281|13|31|12
Albo tronco atun con abrefacil|377|20|0|33
Sin marca maxi hamburguesa pollo bandeja|144|16|1.2|4.8
Silueta pan de molde sn crtz integral|243|13|38|3.3
Hacendado pate cerdo campana|266|11.2|1.2|24
Alesto coctel con sal natural|639|21.3|11.5|54.9
Logo carrefour aceite de oliva refinado y virgen|900|0.5|0.5|100
Chef select pizza|251|14|25|10
Hacendado mejillon en salsa vieira|172|14|2|12
Sin marca escalopin salmon|216|18.7|0|15.7
Milbona loncha gouda curado|394|26.6|0|31.9
Finissimas las autenticas loncha pechuga de pavo sin lactosa b|82|16|2.2|1
Campofrio pizza & salsa pizza|326|10|40|14
Alteza pan de molde sn crtz normal|252|8.9|43|4.2
Moser-rot privat chocolatiers chocolate natural chocolate negr|645|11|15|57
Florette ensalada pasta & rcl|193|7|23|7.9
Logo carrefour pan de molde blanco|266|9.7|45|4.6
Kingfrais natillas chocolate regular|110|3.2|17.3|3
Hacendado monkeys pastelito natural y chocolate crema de cacao|350|5.4|59|10
Bon preu tronco atun con abrefacil|172|26|0|7.5
Logo carrefour el mercado pieza entera langostino cocido1|95|22|0.5|0.8
Maggi sopa pollo con fideo fino|352|15.7|59.7|4.9
Silueta pan de molde integral|246|12|39|3.4
Hacendado snack multiceral bolsa|466|6.5|63|20
La cestera burguer brioche normal|281|10|46|5.5
Hacendado filete caballa|115|17|2.8|3.5
Edulis ensalada gourmet|26|1.3|3.2|0.3
Carrefour leche condensada entera|322|7.4|55|8
Condis huevo gallina libre de jaula|141|13|0.7|9.7
Rustico butifarra cerdo bandeja|212|17|1.5|15
Prima ketchup|82|1.5|19|0
Noel gran bouquet loncha fresca loncha (sc) jamon cocido sin l|106|19|1.7|2.6
Eroski basic patata frita ondulada regular natural|540|6.3|52|33
Sin marca pipa aguasal natural|573|32|3.1|43.8
Milka huesitos original barrita barrita barquillo|500|6.5|66|23
Sal de plata tesoros del mar tronco atun sin abrefacil|172|26|0|7.5
Dia vegecampo ensalada cesar|165|8.3|9.7|10
Consum tomate frito aceite de oliva|195|1.9|12|15
Casa tarradellas base pizza|270|8.6|49.5|4.2
Eroski espinaca|19|1.8|0.8|0.5
Hacendado entero haba fina|70|5.8|7.2|0.6
Dia pimiento piquillo entero|39|0.9|8.9|0
Danone activia yogur con frutas fresa|90|3.5|11.6|3.3
Hacendado queso burrata|240|13|1.9|20
Real valle jamon curado reserva|307|24|1|23
Hacendado escalivada|79|9|5.3|5.7
Weetabix oatibix copo avena sin procesar natural|370|11|59|8
Hacendado no es surimi atun pastel|245|8.5|14.8|16.7
Heura bocadito mediterraneo|135|18|2|4.2
Sin marca loncha fresca mortadela bolonesa|285|15|0|25
Hacendado fussion chocolate relleno chocolate con leche sin ad|494|4|60|26
Logo carrefour sensation tortilla trigo|316|8|53|7.4
Hacendado polos helado individual naranja|89|0|22|0
Consum sopa gazpacho tradicional|37|0.9|2.9|2.2
Hacendado judia verde redonda|17|0.9|3|0
Lindt excellence chocolate natural chocolate negro sin aditivo|584|12.5|22|46
Mon cheri bombon cereza al licor|455|3|52.8|20.3
Nocilla especialidades cookie ppt chcl blnc crm cc blnc no ban|490|5.5|66|22
Bon area panecillo normal|306|7.5|58|4.5
Kioene hamburguesa berenjena|246|12.4|10.7|16.2
Hacendado tallarin carbonara|408|14.4|63|10.6
Logo carrefour extra yogur etnico fresa|124|2.4|12|7.3
Milbona yogur sabores coco|74|2.9|10.7|1.9
Gallo pan rallado normal|367|12|72|2.4
Ocean sea surtido crudo|85|15.5|0.8|2.2
Facundo chaskis aro de maiz bolsa|431|6.4|69|13
Minigrill rebanada mini biscote|395|12|63|9
Olisone suave aceite de oliva refinado y virgen|822|0|0|91.3
Koipe fritos aceite de girasol refinado|826|0|0|92
Hacendado burguer normal|242|1.3|8.8|36
Hacendado pudding caramelo regular|77|10|5.8|1.5`.split('\n').forEach(l=>{const a=l.split('|');FDB.push({n:a[0],k:+a[1],p:+a[2],h:+a[3],g:+a[4],m:1,z:' '+fnz(a[0]).replace(/[^a-z0-9]+/g,' ')+' '})});
/* BD ampliada 19/11 */
`Acelgas (cocidas)|20|1.9|2.3|0.3
Espinacas (crudas)|23|2.9|1.4|0.4
Brócoli (cocido)|35|2.4|4.4|0.4
Coliflor (cocida)|23|1.8|2.5|0.5
Judías verdes (cocidas)|31|1.8|5|0.2
Calabacín (crudo)|17|1.2|2.2|0.3
Berenjena (cruda)|25|1|4.7|0.2
Pimiento rojo (crudo)|31|1|6|0.3
Pimiento verde (crudo)|20|0.9|3.5|0.2
Cebolla (cruda)|40|1.1|9|0.1
Ajo (crudo)|149|6.4|33|0.5
Zanahoria (cruda)|41|0.9|9.6|0.2
Tomate (crudo)|18|0.9|3.5|0.2
Pepino (crudo)|15|0.7|3.6|0.1
Lechuga (cruda)|15|1.4|2.9|0.2
Rúcula (cruda)|25|2.6|3.7|0.7
Canónigos (crudos)|21|2|3.6|0.4
Espárragos (cocidos)|22|2.4|2.1|0.2
Alcachofa (cocida)|53|2.9|10.5|0.3
Champiñones (crudos)|22|3.1|3.3|0.3
Setas (crudas)|33|3.3|6.1|0.4
Puerro (crudo)|31|1.5|7.3|0.3
Remolacha (cocida)|44|1.7|10|0.2
Calabaza (cruda)|26|1|6.5|0.1
Col lombarda (cruda)|31|1.4|7.4|0.2
Repollo (crudo)|25|1.3|5.8|0.1
Coles de Bruselas (cocidas)|36|2.6|7.1|0.5
Maíz dulce (cocido)|96|3.4|21|1.5
Guisantes (cocidos)|84|5.4|15|0.2
Patata (cocida)|86|1.7|20|0.1
Patata (cruda)|77|2|17|0.1
Boniato (cocido)|90|2|21|0.2
Yuca (cruda)|160|1.4|38|0.3
Aguacate|160|2|8.5|14.7
Manzana|52|0.3|14|0.2
Pera|57|0.4|15|0.1
Plátano|89|1.1|23|0.3
Naranja|47|0.9|12|0.1
Mandarina|53|0.8|13|0.3
Pomelo|42|0.8|11|0.1
Limón|29|1.1|9|0.3
Kiwi|61|1.1|15|0.5
Fresas|32|0.7|7.7|0.3
Arándanos|57|0.7|14|0.3
Frambuesas|52|1.2|12|0.7
Moras|43|1.4|10|0.5
Uvas|69|0.7|18|0.2
Cerezas|63|1.1|16|0.2
Melocotón|39|0.9|10|0.3
Nectarina|44|1.1|11|0.3
Albaricoque|48|1.4|11|0.4
Ciruela|46|0.7|11|0.3
Higos frescos|74|0.8|19|0.3
Melón|34|0.8|8|0.2
Sandía|30|0.6|8|0.2
Piña|50|0.5|13|0.1
Mango|60|0.8|15|0.4
Papaya|43|0.5|11|0.3
Granada|83|1.7|19|1.2
Caqui|70|0.6|19|0.2
Dátiles|282|2.5|75|0.4
Pasas|299|3.1|79|0.5
Orejones de albaricoque|241|3.4|63|0.5
Coco rallado|660|6.9|24|65
Merluza (cruda)|71|16.5|0|0.5
Bacalao fresco (crudo)|82|18|0|0.7
Bacalao salado (desalado)|105|23|0|1
Lubina (cruda)|97|18.4|0|2.6
Dorada (cruda)|100|18|0|2.9
Lenguado (crudo)|83|17|0|1.5
Rape (crudo)|76|14.5|0|1.5
Atún fresco (crudo)|144|23|0|4.9
Atún en lata al natural|116|26|0|1
Atún en lata en aceite (escurrido)|190|27|0|8.5
Salmón (crudo)|208|20|0|13
Salmón ahumado|172|25|0|8
Sardinas frescas (crudas)|135|19|0|6.5
Sardinas en lata en aceite (escurridas)|208|25|0|11.5
Caballa (cruda)|205|19|0|14
Anchoas en aceite (escurridas)|210|29|0|10
Boquerones (crudos)|130|20|0|5
Pez espada (crudo)|121|20|0|4
Trucha (cruda)|119|20|0|3.5
Gambas (cocidas)|99|21|0.2|1.1
Langostinos (cocidos)|97|20|1|1.5
Mejillones (cocidos)|86|12|3.7|2.2
Almejas (crudas)|74|13|2.6|1
Calamar (crudo)|92|15.6|3|1.4
Sepia (cruda)|79|16|0.8|0.7
Pulpo (cocido)|82|15|2.2|1
Surimi|95|8|10|1
Ternera magra (cruda)|120|21|0|4
Ternera picada (cruda)|180|19|0|12
Lomo de cerdo (crudo)|143|21|0|6
Solomillo de cerdo (crudo)|120|21|0|3.5
Costillas de cerdo (crudas)|277|16|0|23
Carne picada mixta (cruda)|230|17|0|18
Cordero (pierna cruda)|190|19|0|13
Conejo (crudo)|136|21|0|5.5
Pavo picado (crudo)|120|19|0|5
Hígado de ternera (crudo)|135|20|4|3.6
Jamón serrano|241|31|0|13
Jamón cocido extra|110|18|1|3.5
Lomo embuchado|230|40|0|8
Chorizo|455|24|2|38
Salchichón|440|26|2|37
Fuet|440|27|3|35
Mortadela|310|13|3|28
Bacon|417|13|1.4|40
Salchichas frankfurt|270|11|3|24
Huevo entero (L)|143|12.6|0.7|9.5
Clara de huevo|52|11|0.7|0.2
Yema de huevo|322|16|3.6|27
Leche semidesnatada|46|3.4|4.8|1.6
Leche desnatada|35|3.5|5|0.1
Leche de avena|45|0.5|7|1.5
Leche de soja|40|3.3|2|1.8
Leche de almendras sin azúcar|13|0.4|0.3|1.1
Yogur griego natural|130|5|4|10
Yogur desnatado natural|40|4.3|5.5|0.2
Yogur proteínas (tipo Skyr)|63|11|4|0.2
Queso fresco batido 0%|46|8|3.5|0.2
Requesón|98|11|3.4|4.3
Queso fresco de Burgos|174|12|3|13
Queso mozzarella|280|18|2|22
Queso parmesano|431|38|4|29
Queso manchego curado|430|32|0.5|34
Queso de cabra|290|19|1|23
Queso en lonchas|290|18|4|22
Nata para cocinar 18%|195|2.5|3.5|19
Mantequilla|717|0.9|0.1|81
Aceite de oliva virgen extra|884|0|0|100
Margarina|540|0.2|0.5|60
Almendras|579|21|22|50
Nueces|654|15|14|65
Avellanas|628|15|17|61
Anacardos|553|18|30|44
Pistachos|562|20|28|45
Cacahuetes|567|26|16|49
Pipas de girasol|584|21|20|51
Semillas de chía|486|17|42|31
Semillas de lino|534|18|29|42
Crema de cacahuete (100 %)|600|25|13|50
Judías blancas (cocidas)|127|8.7|23|0.5
Lentejas (cocidas)|116|9|20|0.4
Garbanzos (cocidos)|164|8.9|27|2.6
Alubias pintas (cocidas)|140|9|25|0.6
Soja texturizada (seca)|330|50|30|1
Tofu|76|8|1.9|4.8
Tempeh|193|19|9|11
Hummus|230|8|14|16
Arroz blanco (cocido)|130|2.7|28|0.3
Arroz integral (cocido)|123|2.7|26|1
Pasta (cocida)|158|5.8|31|0.9
Pasta integral (cocida)|149|6|30|1.1
Espaguetis (crudos)|355|12.5|72|1.5
Cuscús (cocido)|112|3.8|23|0.2
Quinoa (cocida)|120|4.4|21|1.9
Avena (copos)|370|13|60|7
Muesli|365|10|65|6
Cereales de maíz (corn flakes)|378|7|84|0.9
Pan blanco|265|9|49|3.2
Pan integral|250|9|43|3.5
Pan de molde|265|8.5|49|3.5
Pan de centeno|259|8.5|48|3.3
Tostada de pan integral|290|11|50|4
Tortita de arroz|387|8|82|3
Tortilla de trigo (wrap)|310|8.5|52|7
Harina de trigo|364|10|76|1
Harina de avena|380|13|65|7
Galletas María|430|7|75|11
Galletas integrales|440|7|66|16
Croissant|406|8|45|21
Napolitana de chocolate|420|7|46|23
Magdalena|420|6|55|20
Donut|420|5|50|22
Palmera de chocolate|500|6|52|30
Chocolate negro 85 %|579|10|19|46
Chocolate con leche|535|7.7|59|30
Helado de vainilla|207|3.5|24|11
Miel|304|0.3|82|0
Azúcar|400|0|100|0
Mermelada|250|0.4|62|0.1
Crema de cacao con avellanas|540|6|58|31
Whey (proteína en polvo)|390|78|7|6
Creatina monohidrato|0|0|0|0
Barrita de proteínas|370|30|35|12
Patatas fritas de bolsa|536|6.5|53|34
Palomitas|387|13|78|4.5
Aceitunas verdes|145|1|3.8|15
Frutos secos fritos con sal|610|22|15|52
Tortilla de patatas|190|7|13|12
Croquetas de jamón|220|7|20|12
Paella de marisco|140|6|20|3.5
Macarrones con tomate|140|5|23|3
Lentejas estofadas|120|7|15|3.5
Cocido madrileño (garbanzos)|150|8|16|6
Gazpacho|50|1|5|3
Salmorejo|120|2.5|8|8.5
Pizza margarita|265|11|33|10
Hamburguesa de ternera (cocinada)|250|19|0|19
Pechuga de pollo empanada|240|15|18|12
Nuggets de pollo|250|14|17|15
Pan de hamburguesa|270|9|50|4
Kétchup|100|1.2|25|0.1
Mayonesa|680|1|2|75
Tomate frito|80|1.4|12|3
Salsa de soja|60|8|6|0
Mostaza|66|4|6|4
Vinagre balsámico|88|0.5|17|0
Cerveza|43|0.5|3.6|0
Cerveza sin alcohol|20|0.3|4.5|0
Vino tinto|85|0.1|2.6|0
Refresco de cola|42|0|10.6|0
Refresco de cola zero|0.3|0|0|0
Zumo de naranja|45|0.7|10|0.2
Café con leche (con leche entera)|30|1.7|2.4|1.6
Bebida isotónica|25|0|6|0`.split('\n').forEach(l=>{const a=l.split('|');if(FDB.some(f=>f.n==a[0]))return;FDB.push({n:a[0],k:+a[1],p:+a[2],h:+a[3],g:+a[4],z:' '+fnz(a[0]).replace(/[^a-z0-9]+/g,' ')+' '})});
function fdU(i){const f=FDB[i];$('man').open=true;$('fn').value=f.n;$('fk').value=f.k;$('fp').value=f.p;$('fh').value=f.h;$('fg').value=f.g;$('fu').value='100';const g=$('fgr');g.value='';FC={i};fdX();g.focus();g.scrollIntoView({block:'center',behavior:'smooth'})}
function fdX(){let e=$('fcx');if(!e){e=document.createElement('div');e.id='fcx';e.style.cssText='flex:1 1 100%;display:flex;flex-wrap:wrap;gap:6px;align-items:center';$('fu').after(e)}const f=FDB[FC.i],p=FPR[FBK(f.n)],u=UNT[f.n];let h='';if(p&&p.r!=null&&p.c!=null){const s=FST(f.n);h+=`<button class="chip${s=='r'?' on':''}" onclick="fdT('r')">🥩 Crudo</button><button class="chip${s=='c'?' on':''}" onclick="fdT('c')">🍳 Cocinado</button><div class="mut" id="fcq" style="flex:1 1 100%"></div>`}
if(u)h+=`<span class="mut">O en unidades:</span><input id="fnu" inputmode="decimal" placeholder="1" style="width:64px" oninput="fdN()"><select id="fus" onchange="fdN()" style="flex:1">${u.map(x=>`<option value="${x[1]}">${x[0]} (≈${x[1]} g)</option>`).join('')}</select>`;e.innerHTML=h;fdQ()}
function fdT(s){if(!FC)return;const j=(FPR[FBK(FDB[FC.i].n)]||{})[s];if(j==null)return;FC.i=j;const t=FDB[j];$('fn').value=t.n;$('fk').value=t.k;$('fp').value=t.p;$('fh').value=t.h;$('fg').value=t.g;$('fu').value='100';fdX()}
function fdQ(){const q=$('fcq');if(!q||!FC)return;const f=FDB[FC.i],s=FST(f.n),o=FDB[(FPR[FBK(f.n)]||{})[s=='r'?'c':'r']],gr=num($('fgr').value);q.textContent=gr>0&&o?`${fm(gr)} g ${s=='r'?'crudo':'cocinado'} ≈ ${fm(Math.round(gr*f.k/o.k))} g ${s=='r'?'cocinado':'crudo'} (mismas kcal). Los gramos que pongas son del estado marcado.`:'Marca si pesas el alimento crudo o ya cocinado; los gramos son del estado marcado.'}
function fdN(){const n=num($('fnu').value);$('fgr').value=n>0?Math.round(n*num($('fus').value)*10)/10:'';$('fu').value='100';fdQ()}
const RPD={Desayuno:.2,Almuerzo:.1,Comida:.35,Merienda:.1,Cena:.25};
function rpB(sn,k,p){return '';const s=(S.rp&&S.rp[sn])||RPD[sn];if(!s)return '';const tk=Math.round(goalF(DT)*s),tp=Math.round(PROT*s),a=Math.min(100,k/Math.max(tk,1)*100),b=Math.min(100,p/Math.max(tp,1)*100);return `<div class="mut" style="font-size:12.5px;margin-top:4px">Te tocaba ~${Math.round(s*100)} %: ${Math.round(k)}/${tk} kcal · ${fm(Math.round(p))}/${tp} g prot.</div><div class="bar" style="height:4px"><i style="width:${a}%;background:${k>tk*1.15?'#E5484D':'#8B5CF6'}"></i></div><div class="bar" style="height:4px;margin-top:3px"><i style="width:${b}%;background:#2DA44E"></i></div>`}
const dayAdd=(d,n)=>new Date(Date.parse(d)+n*864e5).toISOString().slice(0,10);
const goalF=d=>{const t=S.t[d]||'Descanso';return tgt((D.find(x=>x[0]==t)||DS)[1])+cAdj(d,t)+gAdj(d)};
function rcnt(){const m=new Map();for(let i=0;i<14;i++)(S.f[dayAdd(td(),-i)]||[]).forEach(x=>{if(!m.has(x.n))m.set(x.n,x)});return[...m.values()].slice(0,8)}
function rcA(i){const x=rcnt()[i];if(!x)return;(S.f[DT]=S.f[DT]||[]).push({...x,s:SL||dfl()});save();dieta();okAdd()}
function cpY(sl){const L=(S.f[dayAdd(DT,-1)]||[]).filter(x=>!sl||x.s==sl);if(!L.length){alert('Ayer no hay nada'+(sl?' en '+sl:'')+'.');return}(S.f[DT]=S.f[DT]||[]).push(...L.map(x=>({...x})));save();dieta();okAdd()}
function toHoy(i){const x=(S.f[DT]||[])[i];if(!x)return;const c={...x,s:SL||dfl()};delete c.grp;(S.f[td()]=S.f[td()]||[]).push(c);save();dieta();okAdd()}
function mdP(){const lm=S.m.length?S.m[S.m.length-1].d:null;if(!lm)return;if(!S.mpo||S.mpo.d!=lm)S.mpo={d:lm,n:0};S.mpo.n++;save();remShow()}
function cpYi(i){const x=(S.f[dayAdd(DT,-1)]||[])[i];if(!x)return;const c={...x,s:SL||dfl()};delete c.grp;(S.f[DT]=S.f[DT]||[]).push(c);save();dieta();okAdd()}
function rcH(){const r=rcnt(),sl=SL||dfl(),y=S.f[dayAdd(DT,-1)]||[];return (y.length?`<div class="mut" style="margin:6px 0 2px">Ayer comiste (toca uno para añadirlo hoy)</div><div class="row">${y.map((x,i)=>`<button class="chip" onclick="cpYi(${i})">${esc(x.n)} · ${Math.round(x.k||0)} kcal</button>`).join('')}</div>`:'')+`<div class="mut" style="margin:6px 0 2px">Recientes (toca para añadir a ${sl})</div><div class="row">${r.map((x,i)=>`<button class="chip" onclick="rcA(${i})">${esc(x.n)}</button>`).join('')}</div><div class="row" style="margin:6px 0"><button class="g" onclick="cpY('${sl}')">📋 Copiar ayer: ${sl}</button><button class="g" onclick="cpY()">📋 Día de ayer entero</button></div>`}
const rsv=d=>((S.rv||{})[d]||[]).filter(x=>!x.d).reduce((a,x)=>a+x.k,0);
function rvA(){const n=$('rvn').value.trim()||'Comida fuera',k=Math.round(num($('rvk').value));if(!k)return;S.rv=S.rv||{};(S.rv[DT]=S.rv[DT]||[]).push({n,k,c:+(($('rvc')||{}).value)||0});save();dieta()}
function rvD(i){S.rv[DT].splice(i,1);save();dieta()}
function rvF(i){S.rv[DT][i].d=1;save();dieta()}
function rvH(rk,L){const R=(S.rv||{})[DT]||[],emp=SLS.filter(z=>!L.some(x=>x.s==z)).length,n=Math.max(1,emp-R.length);return `<details style="margin:8px 0"${R.length?' open':''}><summary>📌 Reservar kcal para una comida fuera</summary><div class="row" style="margin-top:8px"><input id="rvn" placeholder="Ej. Cena sábado" style="flex:1 1 130px"><input id="rvk" inputmode="decimal" placeholder="kcal" style="flex:0 1 90px"><select id="rvc" aria-label="Repartir" style="flex:1 1 100%"><option value="0">Solo ese día</option><option value="2">Repartir en los 2 días anteriores</option><option value="3">Repartir en los 3 días anteriores</option><option value="4">Repartir en los 4 días anteriores</option></select><button onclick="rvA()">Reservar</button></div>${R.map((x,i)=>`<div class="mut" style="margin-top:6px">${x.d?'✅':'📌'} ${esc(x.n)}: ${x.k} kcal${x.c?` (−${Math.round(x.k/x.c)} kcal/día los ${x.c} días anteriores)`:''} ${x.d?'':`<button class="g" onclick="rvF(${i})">✅ Ya cené</button> `}<button class="g" onclick="rvD(${i})">✕</button></div>`).join('')}${R.length?`<div class="tip" style="margin-top:8px">Te quedan <b>${Math.max(0,Math.round(rk))} kcal</b> para ${n} comida${n>1?'s':''}: unas ${Math.max(0,Math.round(rk/n))} kcal cada una. Sigue buscando tus ${PROT} g de proteína. Cuando comas fuera, apunta lo que comas y pulsa ✅ Ya cené. No la borres con la ✕ si la repartiste: se desharia el reparto.</div>`:''}</details>`}
const pzP=d=>(S.pz||[]).some(r=>d>=r.a&&d<=r.b);const enf=d=>(S.en||[]).some(r=>d>=r.a&&d<=r.b);const pz=d=>pzP(d)||enf(d);
const pzGap=(p,t)=>{for(let x=p+864e5;x<t;x+=864e5)if(!pz(new Date(x).toISOString().slice(0,10)))return false;return true};
function pzA(){const a=$('pza').value,b=$('pzb').value;if(!a||!b||b<a){alert('Elige fecha de inicio y de fin (el fin no puede ser antes).');return}(S.pz=S.pz||[]).push({a,b});S.sm=S.sm||{};for(let x=new Date(a+'T12:00:00'),n=0;x<=new Date(b+'T12:00:00')&&n<90;x.setDate(x.getDate()+1),n++){const k=x.toISOString().slice(0,10);if(!S.sm[k])S.sm[k]='VJ'}save();const m=$('pmd');if(m)m.remove();semana()}
function pzD(i){S.pz.splice(i,1);save();semana();pzO()}
const enFd=x=>x.split('-').reverse().join('/');
function enR(){return (S.en||[]).find(r=>td()>=r.a&&td()<=r.b)}
function enB(){const r=enR();if(!r)return'';return `🤒 Modo enfermo hasta el ${enFd(r.b)}: hoy tus kcal son las de mantenimiento (sin déficit, +${mnK(td())} kcal), la proteína igual y estos días no cuentan en el Cumplimiento ni rompen tus rachas. Come lo que te entre y bebe mucho. <div style="margin-top:6px;display:flex;gap:8px;flex-wrap:wrap"><button class="g" onclick="enP()">Sigo malo (+1 día)</button><button class="g" onclick="enX()">✅ Ya estoy bien</button></div>`}
function enG(){return `🤒 Modo enfermo activo: hoy lo mejor es descansar. Con fiebre, dolor de cuerpo o malestar general, no entrenes. Si es algo leve (mocos, garganta), vale entrenar suave: kilos al 60 % (el modo entrenamiento ya te los sugiere así), sin llegar al fallo. <button class="g" style="margin-top:6px" onclick="enX()">✅ Ya estoy bien</button>`}
function enA(){const a=$('ena').value,b=$('enb').value;if(!a||!b||b<a){alert('Elige fecha de inicio y de fin (el fin no puede ser antes).');return}(S.en=S.en||[]).push({a,b});save();pmodX();mnR()}
function enD(i){S.en.splice(i,1);save();mnR();enO()}
function enX(){const r=enR();if(r){if(r.a>=td())S.en.splice(S.en.indexOf(r),1);else r.b=dayAdd(td(),-1)}save();pmodX();mnR()}
function enP(){const r=enR();if(r){const n=dayAdd(td(),1);if(r.b<n)r.b=n;else r.b=dayAdd(r.b,1)}save();mnR()}
function enO(){const R=S.en||[];pmod(`<b style="font-size:18px">🤒 Modo enfermo</b><div class="mut" style="margin:6px 0 10px">Cuando estás malo no es lo mismo: esos días comes a tu mantenimiento (sin déficit), el gimnasio sugiere kilos al 60 % y no cuentan en el Cumplimiento ni rompen tus rachas. Si no mejoras en unos días o tienes fiebre alta, consulta con tu médico.</div>${enf(td())?'<button style="width:100%;margin-bottom:10px" onclick="enX()">✅ Ya estoy bien</button>':''}<div class="mut">Desde</div><input id="ena" type="date" value="${td()}"><div class="mut" style="margin-top:6px">Hasta</div><input id="enb" type="date" value="${dayAdd(td(),2)}"><button style="margin-top:10px;width:100%" onclick="enA()">Activar modo enfermo</button>${R.map((r,i)=>`<div class="row" style="margin-top:8px;justify-content:space-between"><span class="mut">🤒 ${enFd(r.a)} – ${enFd(r.b)}</span><button class="g" onclick="enD(${i})" aria-label="Quitar">🗑</button></div>`).join('')}`,1)}
function enM(d){const r=(S.en||[]).find(r=>d>=r.a&&d<=r.b);if(!r)return;const n=Math.round((Date.parse(r.b)-Date.parse(r.a))/864e5)+1;pmod(`<b style="font-size:18px">🤒 Modo enfermo</b><div style="margin-top:10px">Del <b>${enFd(r.a)}</b> al <b>${enFd(r.b)}</b> (${n} día${n>1?'s':''}).</div><div class="mut" style="margin-top:8px">Esos días comes a tu mantenimiento, no cuentan en el Cumplimiento ni rompen la racha. Puedes quitarlo con el botón Modo enfermo, debajo del calendario.</div>`)}
Object.assign(window,{enO,enA,enD,enX,enP,enM,enB,enG});
function enRg(){const m=mon(td()),ds=[...Array(7)].map((_,i)=>dayAdd(m,i)),g=ds.filter(d=>info(d).g).length,c=ds.filter(d=>info(d).c).length,n=Math.max(1,Math.min(7,+((S.pf||{}).d)||5)),R=34,C=2*Math.PI*R,gp=n>1?6:0,sg=C/n-gp;let a='';for(let i=0;i<n;i++)a+=`<circle cx="45" cy="45" r="${R}" fill="none" stroke="${i<g?'#0F8B6D':'var(--ln)'}" stroke-width="9" stroke-dasharray="${sg} ${C-sg}" stroke-dashoffset="${-i*C/n}" transform="rotate(-90 45 45)"/>`;const f=Math.max(0,n-g);return `<div class="row" style="gap:14px;margin:10px 0 4px;align-items:center"><svg viewBox="0 0 90 90" width="92" height="92" role="img" aria-label="Entrenos de fuerza de la semana">${a}<text x="45" y="49" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">${g}/${n}</text><text x="45" y="63" text-anchor="middle" font-size="9" fill="currentColor" opacity=".6">fuerza</text></svg><div style="flex:1"><b>${g>=n?'¡Semana completa! 🏆':f==1?'Te falta 1 entreno':'Te faltan '+f+' entrenos'}</b><div class="mut">${c?c+' día'+(c>1?'s':'')+' de cardio':'Sin cardio esta semana'}</div></div></div>`}
function ciH(){const T=td(),m=mon(T),sun=new Date(T).getUTCDay()==0,s=(S.ci||{})[m];if(!sun&&!s)return '';return `<div class="card"><b>🏁 Cierre de la semana con IA</b><div class="mut">${sun?'Hoy es domingo: cierra la semana.':'El cierre completo sale el domingo, pero puedes adelantarlo con lo que llevas.'}</div>${SM?`<button class="g" style="margin-top:8px;width:100%" onclick="ciG()">${s?'🔄 Volver a generar':'🤖 Generar el cierre'}</button>`:'<div class="mut" style="margin-top:6px">La IA no está disponible ahora.</div>'}<div class="tip" id="cit"${s?'':' hidden'} style="white-space:pre-line">${s?esc(s.t):''}</div>${s?`<div class="mut" style="margin-top:4px">Generado el ${enFd(s.d)}</div>`:''}</div>`}
async function ciG(){const o=$('cit');if(!o)return;o.hidden=false;o.textContent='Preparando el cierre…';const T=td(),m=mon(T),ds=[...Array(7)].map((_,i)=>dayAdd(m,i)).filter(d=>d<=T),pm=dayAdd(m,-7),sun=new Date(T).getUTCDay()==0;
const L=ds.map(d=>{const f=info(d),fl=S.f[d]||[],k=Math.round(fl.reduce((a,x)=>a+(x.k||0),0)),p=Math.round(fl.reduce((a,x)=>a+(x.p||0),0)),ps=((S.ps||{})[d]||0);return d.slice(8)+'/'+d.slice(5,7)+': '+(fl.length?k+' kcal (objetivo '+Math.round(gF(d))+'), '+p+' g de proteína':'sin comidas apuntadas')+'; fuerza '+(f.g?'sí'+(f.gs.length?' ('+f.gs.join('/')+')':''):'no')+'; cardio '+(f.c?'sí':'no')+(ps?'; '+ps+' pasos':'')+(supOk(d)==='💊'?'; suplementos completos':'')+(enf(d)?'; ENFERMO':pzP(d)?'; modo pausa':mn(d)?'; semana de mantenimiento':'')}).join('\n');
const w1=avgW(m,T),w0=avgW(pm,dayAdd(pm,6)),wfd=ds.filter(d=>(S.f[d]||[]).length),wdf=wfd.reduce((a,d)=>a+mtg(d)-(S.f[d]||[]).reduce((b,x)=>b+(x.k||0),0),0),wex=-(S.obj??-0.5)*7700/7*wfd.length,n=Math.max(1,Math.min(7,+((S.pf||{}).d)||5));
const P='Eres su entrenador y dietista. Cierra su semana (lunes a '+(sun?'domingo':'hoy')+') en español de España, tono cercano y directo. Datos por día:\n'+L+'\nPeso medio esta semana: '+(w1==null?'sin datos':fm(Math.round(w1*10)/10)+' kg')+'; semana pasada: '+(w0==null?'sin datos':fm(Math.round(w0*10)/10)+' kg')+'. Balance de kcal frente a su gasto: '+(wfd.length?Math.round(wdf)+' kcal ('+(wdf>=0?'déficit':'superávit')+'); su objetivo para esos días era '+Math.round(wex)+' kcal':'sin comidas')+'. Objetivo: '+n+' días de fuerza a la semana y unos 155 g de proteína al día. Los días ENFERMO, de pausa o mantenimiento no cuentan como fallo. Responde con: 1) una nota del 1 al 10 con una frase de por qué; 2) lo mejor de la semana; 3) lo que más se puede mejorar, con cifra; 4) un objetivo concreto para la próxima semana. Máximo 110 palabras, sin listas largas ni opiniones médicas. Responde solo JSON: {"cierre":"texto"}';
try{const r=await SM.json(P,{modelTier:'default',cache:false});(S.ci=S.ci||{})[m]={t:r.cierre,d:T};save();mnR()}catch(e){o.textContent='No he podido generar el cierre ahora. Prueba en un rato.'}}
Object.assign(window,{enRg,ciH,ciG});
let QE=[];
function qeS(){const T=td(),g=GG(),ks=Object.keys(g).filter(d=>prg(d)==prg(gd)&&d!='Abdominales'),lim=dayAdd(T,-7),RT={Empuje:3,'Tracción':3,'Cuádriceps':4,Femoral:4,Abdominales:2},gr=d=>{const x=gn(d);return x=='Torso'?['Empuje','Tracción']:x?[x]:[]},LG={},LD={},DS={};
Object.keys(S.gh).forEach(k=>{const d=k.split('|')[0];S.gh[k].forEach(x=>{if(!(x.kg||x.r))return;if(!LD[d]||x.d>LD[d])LD[d]=x.d;gr(d).forEach(h=>{if(!LG[h]||x.d>LG[h])LG[h]=x.d});if(x.d>lim)(DS[d]=DS[d]||new Set()).add(x.d)})});
const ago=s=>s?Math.round((Date.parse(T)-Date.parse(s))/864e5):null,wt=(s,r)=>{const a=ago(s);return a==null?0:Math.max(0,r-a)};
const R=ks.map(d=>{const G=gr(d),w=Math.max(wt(LD[d],(RT[gn(d)]||3)),...G.map(h=>wt(LG[h],RT[h]||3))),la=[LD[d],...G.map(h=>LG[h])].filter(Boolean).sort().pop()||null;return{d,w,a:ago(la),n:DS[d]?DS[d].size:0,hoy:la==T}});
R.sort((x,y)=>x.w-y.w||(y.a==null?999:y.a)-(x.a==null?999:x.a));
return{R,ab:{w:wt(LG.Abdominales||LD.Abdominales,2),a:ago(LG.Abdominales||LD.Abdominales)}}}
function qeN(d){const t=tpOf(d);return esc(t?d.slice(t[0].length+1):d)}
function qeO(){const{R,ab}=qeS();QE=R.map(x=>x.d);if(!R.length){pmod('<b style="font-size:18px">🎯 ¿Qué entreno hoy?</b><div class="mut" style="margin-top:8px">Aún no tienes días en esta rutina.</div>',1);return}
const top=R[0],st=x=>x.n>=3?'🔴 Sobreentrenado (3 días en 7)':x.w>0?'🔋 Listo en '+x.w+' d':'🟢 Listo'+(x.a==null?' · aún no lo has hecho':' · hace '+x.a+' d');
const hoy=R.find(x=>x.hoy),sick=enf(td());
const head=sick?'<div class="tip">🤒 Estás en modo enfermo: hoy lo mejor es descansar.</div>':'';
const rec=top.w>0?'<div class="tip">Todo sigue algo fatigado: hoy descanso, cardio suave o abdominales. El que antes se recupera es <b>'+qeN(top.d)+'</b> (en '+top.w+' d).</div>':'<div class="big" style="font-size:26px;margin:10px 0 2px">'+qeN(top.d)+'</div><div class="mut">'+(top.a==null?'Aún no lo has hecho: toca estrenarlo.':'Hace '+top.a+' d que no lo trabajas y ya está recuperado.')+'</div><button style="margin-top:10px;width:100%" onclick="qeGo(0)">Ir a este entreno</button>';
pmod('<b style="font-size:18px">🎯 ¿Qué entreno hoy?</b>'+head+(hoy?'<div class="mut" style="margin-top:6px">Hoy ya has trabajado '+qeN(hoy.d)+'.</div>':'')+rec+'<div style="margin-top:12px">'+R.map((x,i)=>'<div class="row" style="justify-content:space-between;margin-top:6px"><span>'+(i==0&&top.w==0?'⭐ ':'')+qeN(x.d)+'</span><span class="mut">'+st(x)+'</span></div>').join('')+'<div class="row" style="justify-content:space-between;margin-top:6px"><span>➕ Abdominales</span><span class="mut">'+(ab.w>0?'🔋 Listo en '+ab.w+' d':'🟢 Listo')+'</span></div></div>',1)}
function qeGo(i){if(QE[i]){gd=QE[i];pmodX();gym()}}
Object.assign(window,{qeO,qeGo});
const lSd=e=>e&&e[9]!=null?!!e[9]:/por lado/i.test((e&&e[0])||'');
function LF(key){const p=String(key).split('|');if(+p[2]||0)return 1;const g=GG()[p[0]],e=g&&g.find(z=>z[0]==p[1]);return lSd(e)?2:1}
function ldT(i){const e=gE()[gd][i];e[9]=!lSd(e);save();gym()}
let WO={};
{const st=document.createElement('style');st.textContent=".pc{padding:0!important}.pch{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 16px;min-height:48px;cursor:pointer;-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none}.pch .chv{color:var(--mut);font-size:18px;transition:transform .2s}.pch[aria-expanded=true] .chv{transform:rotate(180deg)}.pcb{padding:0 16px 16px}";document.head.appendChild(st)}
function plT(k){WO[k]=!WO[k];const h=document.getElementById('pch_'+k),b=document.getElementById('pcb_'+k);if(h)h.setAttribute('aria-expanded',WO[k]?'true':'false');if(b)b.style.display=WO[k]?'block':'none'}
function plC(k,t,s,b){const o=!!WO[k];return `<div class="card pc"><div class="pch" id="pch_${k}" role="button" tabindex="0" aria-expanded="${o}" onclick="plT('${k}')" onkeydown="if(event.key=='Enter'||event.key==' '){event.preventDefault();plT('${k}')}"><div style="flex:1;min-width:0"><b>${t}</b><div class="mut" style="font-size:13px;margin-top:2px">${s}</div></div><span class="chv">▾</span></div><div class="pcb" id="pcb_${k}" style="display:${o?'block':'none'}">${b}</div></div>`}
Object.assign(window,{plT,plC});
let HGE=false,HGQ=null;
const HGD=()=>{if(!S.hg)S.hg={it:[{i:'cn',n:'Crema de noche',e:'🌙',t:'d'},{i:'sp',n:'Hidratante y protector solar',e:'☀️',t:'d'},{i:'dn',n:'Hilo dental y enjuague',e:'🦷',t:'d'},{i:'af',n:'Afeitado',e:'🪒',t:'p',f:3},{i:'cp',n:'Corte de pelo',e:'💈',t:'p',f:28},{i:'um',n:'Uñas de las manos',e:'✂️',t:'p',f:7},{i:'up',n:'Uñas de los pies',e:'🦶',t:'p',f:14},{i:'ex',n:'Exfoliante o mascarilla facial',e:'🧖',t:'p',f:7},{i:'cu',n:'Cambiar cuchilla o cabezal',e:'🔄',t:'p',f:30}],lg:{}};if(!S.hg.m3){const a=S.hg.it.find(z=>z.i=='af');if(a&&a.f==2)a.f=3;S.hg.m3=1}return S.hg};
const hgL=i=>HGD().lg[i]||[];
function hgDays(i){const L=hgL(i);if(!L.length)return null;return Math.round((Date.parse(td())-Date.parse(L[L.length-1]))/864e5)}
function hgS(i){const L=new Set(hgL(i));let d=td(),n=0;if(!L.has(d))d=dayAdd(d,-1);while(L.has(d)){n++;d=dayAdd(d,-1)}return n}
function hgP(x){const a=hgDays(x.i);if(a==null)return['Sin registrar','var(--mut)'];if(a==0)return['Hecho hoy · próximo en '+x.f+' d','#0F8B6D'];const r=x.f-a;if(r>0)return['Hace '+a+' d · toca en '+r+' d','#0F8B6D'];if(r==0)return['¡Toca hoy!','#E0A100'];return['Retraso de '+(-r)+' d','#E5484D']}
function hgDue(){return HGD().it.filter(x=>x.t=='p'&&hgDays(x.i)!=null&&hgDays(x.i)>=x.f).map(x=>x.n.toLowerCase())}
function hgT(i){const h=HGD(),L=(h.lg[i]||[]).slice(),k=L.indexOf(td());if(k>=0)L.splice(k,1);else{L.push(td());L.sort()}h.lg[i]=L.slice(-90);save();mnR()}
function hgE(){HGE=!HGE;HGQ=null;mnR()}
function hgF(i,v){const x=HGD().it.find(z=>z.i==i);if(x){x.f=Math.max(1,Math.min(365,Math.round(+v)||x.f))}save();mnR()}
function hgX(i){if(HGQ!=i){HGQ=i;mnR();return}const h=HGD();h.it=h.it.filter(z=>z.i!=i);delete h.lg[i];HGQ=null;save();mnR()}
function hgA(){const n=($('hgn').value||'').trim();if(!n)return;const ty=$('hgt').value,f=Math.max(1,Math.min(365,Math.round(+$('hgf').value)||7)),h=HGD();h.it.push(ty=='d'?{i:'c'+Date.now().toString(36),n,e:'🧴',t:'d'}:{i:'c'+Date.now().toString(36),n,e:'🧴',t:'p',f});save();mnR()}
function hgCard(){const h=HGD(),D=h.it.filter(x=>x.t=='d'),P=h.it.filter(x=>x.t=='p'),dn=D.filter(x=>hgL(x.i).includes(td())).length,xb=i=>`<button class="g" style="padding:4px 10px;font-size:13px${HGQ==i?';color:#E5484D;border-color:#E5484D':''}" onclick="hgX('${i}')" aria-label="Quitar">${HGQ==i?'¿Seguro?':'🗑'}</button>`;
let H=`<div class="row" style="justify-content:space-between"><span class="mut">Cada día · ${dn}/${D.length} hoy</span><button class="g" style="padding:4px 10px;font-size:13px" onclick="hgE()">${HGE?'Listo':'✏️ Editar'}</button></div>`;
H+=D.map(x=>{const on=hgL(x.i).includes(td()),s=hgS(x.i);return HGE?`<div class="row" style="justify-content:space-between;margin-top:6px"><span>${x.e} ${esc(x.n)}</span>${xb(x.i)}</div>`:`<button class="${on?'':'g'}" style="display:block;width:100%;text-align:left;margin-top:6px;padding:8px 10px" onclick="hgT('${x.i}')">${on?'✅':'⬜'} ${x.e} ${esc(x.n)}${s>1?' · 🔥 '+s+' días':''}</button>`}).join('');
H+=`<div class="mut" style="margin-top:12px">Cada cierto tiempo</div>`;
H+=P.map(x=>{const[tx,c]=hgP(x),a=hgDays(x.i);return HGE?`<div class="row" style="justify-content:space-between;margin-top:6px;gap:8px"><span>${x.e} ${esc(x.n)}</span><span class="row" style="gap:6px;flex-wrap:nowrap">cada <input type="number" inputmode="numeric" value="${x.f}" style="width:56px" onchange="hgF('${x.i}',this.value)"> d ${xb(x.i)}</span></div>`:`<div class="row" style="justify-content:space-between;margin-top:8px;gap:8px"><div style="flex:1"><div>${x.e} ${esc(x.n)}</div><div style="font-size:13px;color:${c}">${tx}</div></div><button class="${a==0?'':'g'}" style="padding:6px 12px;font-size:13px" onclick="hgT('${x.i}')">${a==0?'✓ Hoy':'Hecho'}</button></div>`}).join('');
if(HGE)H+=`<div style="margin-top:12px"><input id="hgn" placeholder="Nueva rutina (ej. Mascarilla)"><div class="row" style="margin-top:6px"><select id="hgt" aria-label="Frecuencia"><option value="d">Cada día</option><option value="p">Cada cierto tiempo</option></select><input id="hgf" type="number" inputmode="numeric" placeholder="días" value="7" style="width:70px"><button onclick="hgA()">Añadir</button></div></div>`;
return plC('hg','💈 Cuidado personal',dn+'/'+D.length+' hoy'+(hgDue().length?' · '+hgDue().length+' toca':''),H)}
Object.assign(window,{hgT,hgE,hgF,hgX,hgA,hgCard,hgDue,rpS,rpD,rpM,rpU,wlS,wlC});




function pzO(){const R=S.pz||[],fd=d=>d.split('-').reverse().join('/');pmod(`<b style="font-size:18px">🌴 Modo pausa</b><div class="mut" style="margin:6px 0 10px">Para vacaciones o semanas raras: esos días no cuentan en el cumplimiento ni rompen la racha de apuntar comida.</div><div class="mut">Desde</div><input id="pza" type="date" value="${td()}"><div class="mut" style="margin-top:6px">Hasta</div><input id="pzb" type="date" value="${td()}"><button style="margin-top:10px;width:100%" onclick="pzA()">Activar pausa</button>${R.map((r,i)=>`<div class="row" style="margin-top:8px;justify-content:space-between"><span class="mut">🌴 ${fd(r.a)} – ${fd(r.b)}</span><button class="g" onclick="pzD(${i})" aria-label="Quitar">🗑</button></div>`).join('')}`,1)}
const rvAdj=d=>{let a=0;const R=S.rv||{};for(const e in R)for(const x of R[e]){const c=x.c||0;if(!c)continue;if(d==e)a+=x.k;else if(d<e&&d>=dayAdd(e,-c))a-=Math.round(x.k/c)}return a};
const gAdj=d=>mnK(d)+rvAdj(d)+((mn(d)||enf(d))?0:(S.ka||0));
const avgW=(a,b)=>{const L=(S.w||[]).filter(x=>x.d>=a&&x.d<=b);return L.length?L.reduce((s,x)=>s+x.kg,0)/L.length:null};
function aaC(){const T=td();if((S.obj??-0.5)>=0||mn(T)||(S.az&&T<S.az)||(S.aa&&T<dayAdd(S.aa,21)))return null;const w1=avgW(dayAdd(T,-6),T),w0=avgW(dayAdd(T,-27),dayAdd(T,-21));if(w1==null||w0==null)return null;let lg=0,ok=0;for(let i=0;i<21;i++){const d=dayAdd(T,-i);if(pz(d)||mn(d))return null;const L=S.f[d]||[];if(!L.length)continue;lg++;const k=L.reduce((a,x)=>a+(x.k||0),0),g=goalF(d);if(k>=g*.85&&k<=g*1.05)ok++}if(lg<15||ok<lg*.85)return null;if(w0-w1>=.3)return null;if((S.ka||0)<=-300||goalF(T)-100<1500)return null;return{w0,w1}}
function aaB(){const T=td(),o=[];if(S.ka&&S.ka<0)o.push(`⚖️ Ajuste de kcal activo: ${S.ka} al día. <button class="g" style="margin-top:6px" onclick="aaQ()">Quitar ajuste</button>`);const c=aaC();if(c){const m=mnW()>=4;o.push(`⚖️ Llevas 3 semanas con el peso casi parado (${fm(c.w0)} → ${fm(c.w1)} kg) y cumpliendo la dieta. Te propongo bajar 100 kcal al día (hoy de ${goalF(T)} a ${goalF(T)-100}).${m?' Si vienes muy cansado, mejor una semana de mantenimiento.':''}<div class="row" style="margin-top:6px"><button class="g" onclick="aaA()">Aplicar −100 kcal</button>${m?'<button class="g" onclick="mnS()">Mantenimiento</button>':''}<button class="g" onclick="aaZ()">Ahora no</button></div>`)}return o}
function aaA(){S.ka=(S.ka||0)-100;S.aa=td();save();mnR()}
function aaZ(){S.az=dayAdd(td(),7);save();mnR()}
function aaQ(){S.ka=0;S.aa=td();save();mnR()}
const CFD=[['Menú del día',900,35,90,40],['Pizza',800,32,95,30],['Hamburguesa con patatas',1000,38,85,52],['Tapas variadas',600,28,40,35],['Bocadillo',550,25,55,24],['Plato combinado',900,40,70,48],['Kebab',800,40,65,40],['Sushi (12 piezas)',550,25,85,10],['Pasta de restaurante',850,28,110,30],['Caña de cerveza',90,1,7,0],['Copa de vino',120,0,4,0]];
let CFR=1;
function cfA(i){const d=CFD[i],f=CFR,r=f==.5?'½ ración':f==1.5?'1,5 raciones':'ración normal',q=x=>Math.round(x*f*10)/10;addF('🍽️ '+d[0]+' ('+r+', estimado)',Math.round(d[1]*f),q(d[2]),q(d[3]),q(d[4]))}
function cfH(){return `<details style="margin:8px 0"><summary>🍽️ Comer fuera (kcal estimadas)</summary><div class="row" style="margin-top:8px"><select id="cfr" aria-label="Tamaño de ración" onchange="CFR=+this.value"><option value=".5"${CFR==.5?' selected':''}>½ ración</option><option value="1"${CFR==1?' selected':''}>Ración normal</option><option value="1.5"${CFR==1.5?' selected':''}>1,5 raciones</option></select></div><div class="row" style="margin-top:8px;flex-wrap:wrap">${CFD.map((d,i)=>`<button class="g" onclick="cfA(${i})">${d[0]} · ${d[1]}</button>`).join('')}</div><div class="mut" style="margin-top:6px">Kcal de una ración normal, aproximadas: ante la duda, apunta un poco de más.</div></details>`}
function wsmH(){const T=td(),m=mon(T),el=Math.round((Date.parse(T)-Date.parse(m))/864e5)+1,rng=(s,n)=>[...Array(n)].map((_,i)=>dayAdd(s,i)),cur=rng(m,el),pm=dayAdd(m,-7),prv=rng(pm,el),cs=cur.filter(d=>d<T),ps=prv.slice(0,cs.length);
const dt=ds=>{const l=ds.filter(d=>(S.f[d]||[]).length);return[l.filter(d=>dietSt(d)=='ok').length,l.length]},tr=ds=>ds.filter(d=>{const f=info(d);return f.g||f.c}).length,sp=ds=>ds.filter(d=>supOk(d)==='💊').length,wa=ds=>{const x=(S.w||[]).filter(w=>ds.includes(w.d));return x.length?x.reduce((s,w)=>s+w.kg,0)/x.length:null};
const ar=(a,b)=>a>b?'↑':a<b?'↓':'=',row=(ic,l,v,pv)=>`<div class="row" style="justify-content:space-between;margin-top:6px"><span>${ic} ${l}</span><span><b>${v}</b> <span class="mut">${pv}</span></span></div>`;
const [co,cn]=dt(cur),[po,pn]=dt(prv),tc=tr(cur),tp=tr(prv),sc=sp(cs),spp=sp(ps),w1=wa(cur),w0=wa(prv);
const f1=cn?(co/cn>=.8?'✅':'⚠️'):'—',f2=tc>=Math.floor(5*el/7)?'✅':'⚠️',f3=cs.length?(sc/cs.length>=.8?'✅':'⚠️'):'—';
return plC('ws','📊 Esta semana',f1+' '+f2+' '+f3,`<div class="mut">Del lunes a hoy, frente al mismo tramo de la semana pasada</div>${enRg()}${row(f1,'Comida en rango',cn?co+' de '+cn+' días':'—',pn?ar(co/cn,po/pn)+' pasada '+po+'/'+pn:'')}${row(f2,'Entrenos',tc+' de 5',ar(tc,tp)+' pasada '+tp)}${row(f3,'Suplementos completos',cs.length?sc+' de '+cs.length+' días':'—',cs.length?ar(sc,spp)+' pasada '+spp:'')}${row('⚖️','Peso medio',w1?fm(Math.round(w1*10)/10)+' kg':'—',w1&&w0?(w1<w0-.05?'↓':w1>w0+.05?'↑':'=')+' pasada '+fm(Math.round(w0*10)/10):'')}`)}
function mnO(){const R=S.mn||[],fd=d=>d.split('-').reverse().join('/'),ex=Math.round(-1100*(S.obj??-0.5)/10)*10,a=mn(td());pmod(`<b style="font-size:18px">🍚 Semana de mantenimiento</b><div class="mut" style="margin:6px 0 10px">7 días comiendo lo que gastas, para descansar de la dieta. Sube tus kcal ${ex} al día (proteína igual), no toca el gimnasio y no cuenta en Cumplimiento. Lo normal: 1 semana cada 6-8 de déficit. Llevas ${mnW()} semana(s) seguidas en déficit.</div>${a?`<button style="width:100%" onclick="mnX();pmodX()">Terminar mantenimiento</button>`:`<button style="width:100%" onclick="mnS()">Empezar hoy (7 días)</button>`}${R.map((r,i)=>`<div class="row" style="margin-top:8px;justify-content:space-between"><span class="mut">🍚 ${fd(r.s)} – ${fd(r.e)}</span><button class="g" onclick="S.mn.splice(${i},1);save();mnR();mnO()" aria-label="Quitar">🗑</button></div>`).join('')}`,1)}
const ayN=()=>!!(S.ay&&S.ay.s&&!S.ay.e);
function ayS(){const h=+($('ayh')||{}).value||16;S.ay={s:Date.now(),e:null,h};save();dieta();if($('pmd'))ayM()}
function ayX(){const a=S.ay;if(!a||!a.s)return;a.e=Date.now();(S.ayh=S.ayh||[]).push({d:td(),s:a.s,e:a.e,h:a.h});S.ayh=S.ayh.slice(-60);save();dieta();if($('pmd'))ayM()}
function ayT(ms){const m=Math.floor(ms/6e4);return Math.floor(m/60)+' h '+String(m%60).padStart(2,'0')+' min'}
function ayH(){const a=S.ay||{},H=S.ayh||[],l=H[H.length-1],ok=H.filter(x=>x.e-x.s>=x.h*36e5&&Date.parse(x.d)>=Date.now()-7*864e5).length,sel=[12,14,16,18,20].map(h=>`<option value="${h}"${h==(a.h||16)?' selected':''}>${h} h</option>`).join('');
if(ayN()){const el=Date.now()-a.s,p=Math.min(100,el/(a.h*36e5)*100),f=new Date(a.s+a.h*36e5);return `<b>⏳ Ayuno de ${a.h} h en marcha</b><div style="font-size:30px;font-weight:700;margin:8px 0" id="ayt">${ayT(el)}</div><div style="height:10px;border-radius:6px;background:var(--ln);overflow:hidden"><div id="ayb" style="height:100%;width:${p}%;background:var(--t)"></div></div><div class="mut" style="margin:6px 0">${el>=a.h*36e5?'✅ Ventana cumplida, ya puedes romper el ayuno.':'Lo cumples a las '+String(f.getHours()).padStart(2,'0')+':'+String(f.getMinutes()).padStart(2,'0')}</div><button onclick="ayX()">Romper ayuno</button>`}
return `<b>⏳ Ayuno</b><div class="row" style="margin:8px 0"><select id="ayh" style="flex:0 1 90px">${sel}</select><button onclick="ayS()">Empezar ayuno</button></div><div class="mut">${l?'Último: '+ayT(l.e-l.s)+' ('+l.h+' h). ':''}Últimos 7 días: ${ok} cumplidos.</div>`}
setInterval(()=>{if(!ayN())return;const a=S.ay,el=Date.now()-a.s,t=$('ayt');if(!t)return;t.textContent=ayT(el);const b=$('ayb');if(b)b.style.width=Math.min(100,el/(a.h*36e5)*100)+'%'},3e4);
function pzL(){const R=S.pz||[],fd=x=>x.split('-').reverse().join('/');pmod(`<b style="font-size:18px">⛱️ Modo vacaciones</b><div style="margin-top:10px">Los días con sombrilla ⛱️ en el calendario son días de vacaciones o pausa.</div><div class="mut" style="margin-top:8px">No cuentan en el Cumplimiento ni rompen la racha de apuntar comida.</div>${R.length?'<div style="margin-top:10px">'+R.map(r=>'⛱️ '+fd(r.a)+' – '+fd(r.b)).join('<br>')+'</div>':'<div class="mut" style="margin-top:10px">Aún no tienes ninguno. Actívalo con el botón Modo pausa, debajo del calendario.</div>'}`)}
function pmod(h,r){const o=$('pmd');if(o)o.remove();const d=document.createElement('div');d.id='pmd';d.style.cssText='position:fixed;inset:0;z-index:200001;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;padding:20px';d.onclick=e=>{if(e.target==d)d.remove()};d.innerHTML=`<div style="position:relative;background:var(--card);color:var(--ink);border:1px solid var(--ln);border-radius:20px;padding:22px 20px 18px;width:100%;max-width:340px;box-shadow:0 20px 50px rgba(0,0,0,.5)"><button class="g" style="position:absolute;top:8px;right:8px;padding:4px 10px;font-size:18px${r?';color:#E5252A;font-weight:700':''}" onclick="$('pmd').remove()" aria-label="Cerrar">✕</button><div style="margin-top:6px">${h}</div></div>`;document.body.appendChild(d)}
function ayM(){pmod(ayH())}
function supDay(d,i){const s=S.sp,n=s.on[i],c=s.ck[d]=s.ck[d]||[],j=c.indexOf(n);if(j<0)c.push(n);else c.splice(j,1);save();semana();dayM(d)}
function supDH(d){const s=S.sp;if(!s||!s.on||!s.on.length)return '';s.ck=s.ck||{};const c=s.ck[d]||[];return '<div style="margin-top:10px;border-top:1px solid var(--ln);padding-top:10px"><b>💊 Suplementos</b><div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px">'+s.on.map((n,i)=>'<button class="g" style="padding:8px 12px;min-height:0;font-size:14px;'+(c.includes(n)?'background:#16a34a;color:#fff':'')+'" onclick="supDay(\''+d+'\','+i+')">'+(c.includes(n)?'✅ ':'⬜ ')+n+'</button>').join('')+'</div></div>'}
function dayM(d){const p=pzP(d)?'⛱️ Día en modo pausa/vacaciones.':enf(d)?'🤒 Día en modo enfermo.':'';pmod('<style>#pmd .card{background:none!important;box-shadow:none!important;border:0!important;padding:0!important;margin:0!important}#pmd>div{max-height:86vh;overflow:auto}</style>'+dayCard(d)+supDH(d)+(window.EDH?'<div style="margin-top:10px;border-top:1px solid var(--ln);padding-top:10px">'+window.EDH+'</div>':'')+(p?'<div class="mut" style="margin-top:8px">'+p+' No cuenta en Cumplimiento ni rompe rachas.</div>':''))}
function pzM(d){const r=(S.pz||[]).find(r=>d>=r.a&&d<=r.b);if(!r){if(enf(d))enM(d);return}const fd=x=>x.split('-').reverse().join('/'),n=Math.round((Date.parse(r.b)-Date.parse(r.a))/864e5)+1;pmod(`<b style="font-size:18px">⛱️ Modo vacaciones</b><div style="margin-top:10px">Del <b>${fd(r.a)}</b> al <b>${fd(r.b)}</b> (${n} día${n>1?'s':''}).</div><div class="mut" style="margin-top:8px">Estos días no cuentan en el Cumplimiento ni rompen la racha de apuntar comida. Puedes quitarlo con el botón Modo pausa, debajo del calendario.</div>`)}
function xtra(){const v=$('v');if(!v)return;const lb=S.lb||0,dd=Math.floor((Date.now()-lb)/864e5),c=v.querySelector('.card');
const t=[];if(enf(td()))t.push(enB());if(pzP(td())){const r=S.pz.find(r=>td()>=r.a&&td()<=r.b);t.push(`🌴 Modo pausa hasta el ${r.b.split('-').reverse().join('/')}: estos días no cuentan en el cumplimiento ni rompen la racha.`)}
{const b=mnB();if(b)t.push(b);aaB().forEach(x=>t.push(x))}

t.forEach(x=>{const e=document.createElement('div');e.className='tip';e.innerHTML=x;v.prepend(e)})}
let WU=null;
function wuL(q){const u=(q.key?kSt(q.key):null)||2.5,r=x=>Math.max(u==2?6:5,Math.round(q.kg*x/u)*u);return[[r(.5),10],[r(.7),5],[r(.85),3]].filter((s,i,a)=>i==0||s[0]>a[i-1][0])}
function wuG(){const q=WS[WI];WU={key:q.key,i:0};wr()}
function wuN(){WU.i++;if(WU.i>=wuL(WS[WI]).length)WU=null;wr()}
function wuX(){WU=null;wr()}
function wuP(){if(WU&&WU.i>0)WU.i--;wr()}
function wuH(q,e){if(e[6]||bw(e)||q.n>0||!(q.kg>=20))return'';return `<button class="g" style="margin:8px 0;width:100%" onclick="wuG()">🔥 Hacer calentamiento (${wuL(q).length} series)</button>`}
function wuS(q,e,nm){const L=wuL(q),s=L[WU.i];return `<div class="wn">${esc(nm)}</div><div class="mut" style="text-align:center;letter-spacing:.14em;margin-top:14px">CALENTAMIENTO ${WU.i+1}/${L.length}</div><div style="text-align:center;font-size:44px;font-weight:700;margin:26px 0">${fm(s[0])} kg × ${s[1]}</div><button class="wd" onclick="wuN()">✔ Hecha</button>${WU.i>0?'<button class="g" style="padding:16px;font-size:17px;margin-bottom:8px" onclick="wuP()">‹ Calentamiento anterior</button>':''}<button class="g" style="padding:16px;font-size:17px" onclick="wuX()">Saltar calentamiento</button>`}
const wkS=d=>dayAdd(d,-((new Date(d+'T12:00').getDay()+6)%7));
function stk(){const s=new Set();Object.values(S.gh||{}).forEach(a=>a.forEach(z=>s.add(wkS(z.d))));(S.pz||[]).concat(S.en||[]).forEach(r=>{for(let d=r.a;d<=r.b;d=dayAdd(d,1))s.add(wkS(d))});const dl=S.dl&&S.dl.s?wkS(S.dl.s):'';let w=wkS(td()),n=0;if(!s.has(w))w=dayAdd(w,-7);while(s.has(w)&&w>dl){n++;w=dayAdd(w,-7)}return n}
const dlA=()=>!!(S.dl&&td()>=S.dl.s&&td()<=S.dl.e);
const dlK=k=>(dlA()||enf(td()))&&k?Math.round(k*.6*2)/2:k;
const pmodX=()=>{const m=$('pmd');if(m)m.remove()},mnR=()=>{tab==3?semana():tab==0?dieta():go(tab)};
const mn=d=>(S.mn||[]).some(r=>d>=r.s&&d<=r.e);
const mnK=d=>(mn(d)||enf(d))?Math.round(-1100*(S.obj??-0.5)/10)*10:0;
function mnS(){(S.mn=S.mn||[]).push({s:td(),e:dayAdd(td(),6)});S.mz=null;save();pmodX();mnR()}
function mnX(){const r=(S.mn||[]).find(r=>td()>=r.s&&td()<=r.e);if(r)r.e=dayAdd(td(),-1);save();mnR()}
function mnZ(){S.mz=dayAdd(td(),3);save();mnR()}
function mnW(){const T=wkS(td());let n=0;for(let i=0;i<30;i++){const w=dayAdd(T,-7*i);let lg=0,m=false;for(let k=0;k<7;k++){const d=dayAdd(w,k);if((S.f[d]||[]).length)lg++;if(mn(d))m=true}if(m)break;if(lg<3){if(i==0)continue;break}n++}return n}
function mnB(){const a=(S.mn||[]).find(r=>td()>=r.s&&td()<=r.e);if(a)return `🍚 Semana de mantenimiento activa hasta el ${a.e.split('-').reverse().join('/')}: tus kcal suben a tu mantenimiento (+${mnK(td())} kcal al día), proteína igual y el gimnasio no cambia. Tu peso puede subir 0,5-1 kg por agua y glucógeno, no es grasa. Estos días no cuentan en Cumplimiento. <button class="g" style="margin-top:6px" onclick="mnX()">Terminar mantenimiento</button>`;const n=mnW();if(n>=6&&!(S.mz&&td()<S.mz))return `🍚 Llevas ${n} semanas seguidas en déficit. Toca plantearte una semana de mantenimiento: 7 días comiendo lo que gastas (+${Math.round(-1100*(S.obj??-0.5)/10)*10} kcal al día) para descansar de la dieta. <div class="row" style="margin-top:6px"><button class="g" onclick="mnS()">Hacer semana de mantenimiento</button><button class="g" onclick="mnZ()">Ahora no</button></div>`;return ''}

function dlS(){S.dl={s:td(),e:dayAdd(td(),6)};save();gym()}
function dlX(){S.dl.e=dayAdd(td(),-1);save();gym()}
function gx(){const v=$('v');if(!v)return;if(enf(td())){const e0=document.createElement('div');e0.className='tip';e0.innerHTML=enG();v.prepend(e0)}{const h=v.querySelector('.hero');if(h&&!h.querySelector('.qeb')){const b=document.createElement('button');b.className='qeb';b.style.cssText='margin-top:8px;width:100%;padding:6px 10px;min-height:0;font-size:13px;background:rgba(255,255,255,.18);color:#fff;border:0';b.textContent='🎯 ¿Qué entreno hoy?';b.onclick=qeO;h.appendChild(b)}}const a=dlA(),n=stk();if(!a&&n<6)return;const e=document.createElement('div');e.className='tip';e.innerHTML=a?`🛌 Semana de descarga activa hasta el ${S.dl.e.split('-').reverse().join('/')}: kilos al 60 %, mismas series y repes (el modo entrenamiento ya te los sugiere así). <button class="g" style="margin-top:6px" onclick="dlX()">Terminar descarga</button>`:`🛌 Llevas ${n} semanas entrenando seguido. Toca una semana de descarga: −40 % de kilos durante 7 días para recuperar. <button class="g" style="margin-top:6px" onclick="dlS()">Activar descarga</button>`;v.prepend(e)}
function medC(){return '';const T=td(),ds=[];for(let i=30;i>=1;i--){const d=dayAdd(T,-i),L=S.f[d]||[];const z=pz(d)||mn(d);ds.push({k:z?0:L.reduce((a,x)=>a+(x.k||0),0),p:z?0:L.reduce((a,x)=>a+(x.p||0),0),g:goalF(d)})}
const lg=ds.filter(x=>x.k>0);if(!lg.length)return'';const av=(a,f)=>a.length?Math.round(a.reduce((s,x)=>s+x[f],0)/a.length):0,l7=ds.slice(-7).filter(x=>x.k>0),ok=lg.filter(x=>x.k>=x.g*.85&&x.k<=x.g*1.05).length,mx=Math.max(...ds.map(x=>Math.max(x.k,x.g)))*1.08;
const bars=ds.map((x,i)=>{const h=x.k/mx*100,c=x.k==0?'#8884':x.k>x.g*1.05?'#E5484D':x.k<x.g*.85?'#F5A524':'#2DA44E';return `<rect x="${i*10+1}" y="${104-h}" width="8" height="${h}" rx="2" fill="${c}"/>${x.k>0?`<rect x="${i*10}" y="${104-x.g/mx*100}" width="10" height="1.5" fill="currentColor" opacity=".55"/>`:''}`}).join('');
return `<div class="card"><b>📈 Cumplimiento · 30 días</b><svg viewBox="0 0 300 108" width="100%" style="margin:8px 0">${bars}</svg><div class="mut">Verde: en objetivo · naranja: por debajo · rojo: por encima. La raya es tu objetivo de cada día. No cuenta hoy.</div><div style="margin-top:8px">Media 7 días: <b>${av(l7,'k')} kcal</b> y <b>${av(l7,'p')} g</b> de proteína<br>Media 30 días: <b>${av(lg,'k')} kcal</b> y <b>${av(lg,'p')} g</b> de proteína<br>En objetivo: <b>${ok} de ${lg.length}</b> días registrados (${Math.round(ok/lg.length*100)} %)</div></div>`}
async function colg(){if(!DL){alert('La descarga no está disponible ahora.');return}const B=(S.bf||[]).slice().sort((a,b)=>a.d<b.d?-1:1),z=B[B.length-1],a=B.find(x=>x.v==z.v&&x.d!=z.d);if(!a){alert('Necesitas dos fotos de la misma postura en fechas distintas.');return}
const ld=u=>new Promise((o,k)=>{const i=new Image();i.onload=()=>o(i);i.onerror=k;i.src=u}),fd=d=>d.split('-').reverse().join('/'),n1=v=>Math.abs(v).toFixed(1).replace('.',',');
try{const c=document.createElement('canvas');c.width=1080;c.height=1350;const x=c.getContext('2d');x.fillStyle='#0F1626';x.fillRect(0,0,1080,1350);
const dr=(im,X,Y,W,H)=>{const r=Math.max(W/im.width,H/im.height),w=im.width*r,h=im.height*r;x.save();x.beginPath();x.rect(X,Y,W,H);x.clip();x.drawImage(im,X+(W-w)/2,Y+(H-h)/2,w,h);x.restore()};
const [i1,i2]=await Promise.all([ld(a.u),ld(z.u)]);
try{const m=/url\(["']?(.*?)["']?\)/.exec(getComputedStyle(document.documentElement).getPropertyValue('--logo'));if(m)dr(await ld(m[1]),450,20,180,180)}catch(e){}
dr(i1,30,230,500,700);dr(i2,550,230,500,700);x.fillStyle='#fff';x.textAlign='center';x.font='bold 36px sans-serif';x.fillText('ANTES',280,980);x.fillText('AHORA',800,980);x.font='28px sans-serif';
[[a,280],[z,800]].forEach(([p,X])=>{x.fillText(fd(p.d),X,1025);x.fillText((p.kg?n1(p.kg)+' kg':'')+(p.kg&&p.f?' · ':'')+(p.f?n1(p.f)+' % grasa':''),X,1065)});
const dk=z.kg&&a.kg?z.kg-a.kg:null,df=z.f&&a.f?z.f-a.f:null,dy=Math.round((Date.parse(z.d)-Date.parse(a.d))/864e5);x.font='bold 54px sans-serif';x.fillStyle='#7DB7FF';
x.fillText([dk!=null?(dk<=0?'−':'+')+n1(dk)+' kg':'',df!=null?(df<=0?'−':'+')+n1(df)+' % grasa':''].filter(Boolean).join('  ·  ')||dy+' días',540,1170);x.font='30px sans-serif';x.fillStyle='#fff';x.fillText(dy+' días de cambio',540,1225);x.font='bold 30px sans-serif';x.fillText('yoseloquecomo',540,1300);
const bl=await new Promise(o=>c.toBlob(o,'image/jpeg',.9));await DL.save({filename:'progreso-yoseloquecomo.jpg',data:bl})}catch(e){alert('No se pudo crear la imagen.')}}
{const _g=gym;gym=function(){_g.apply(this,arguments);gx()};const _s=semana;semana=function(){_s.apply(this,arguments);const v=$('v');if(!v)return;const h=medC();const t=document.createElement('div');t.innerHTML=h;const c=v.children[1];c?c.after(...t.childNodes):v.append(...t.childNodes)};
const _p=peso;peso=function(){_p.apply(this,arguments);const v=$('v');if(!v||(S.bf||[]).length<2)return;const w=document.createTreeWalker(v,NodeFilter.SHOW_TEXT);let n,el;while(n=w.nextNode()){if(n.nodeValue.indexOf('Todas las fotos')>=0){el=n.parentElement;break}}if(!el)return;const b=document.createElement('button');b.textContent='🖼️ Crear imagen de progreso';b.style.margin='8px 0';b.onclick=colg;el.before(b)}}

function addF(n,k,p,h,g){const man=k===undefined;n=n||$('fn').value.trim()||'Comida';k=k??num($('fk').value);p=p??num($('fp').value);h=h??num($('fh').value);g=g??num($('fg').value);if(man){const gr=num($('fgr').value);if(gr){if($('fu').value=='100'){const f=gr/100;k*=f;p=Math.round(p*f*10)/10;h=Math.round(h*f*10)/10;g=Math.round(g*f*10)/10}n+=' ('+fm(gr)+' g)'}}if(!k&&!p)return;(S.f[DT]=S.f[DT]||[]).push({n,k:Math.round(k),p,h,g,s:SL||dfl(),a:AV,...(AE?{e:1}:{})});AV='';AE=0;save();dieta();okAdd()}
function okAdd(t){const o=document.createElement('div');o.className='okadd';o.innerHTML='<div class="okc"><svg viewBox="0 0 52 52" width="60" height="60"><path d="M14 27l8 8 16-17" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><b>'+(t||'Añadido correctamente')+'</b>';document.body.appendChild(o);setTimeout(()=>{o.style.opacity='0';setTimeout(()=>o.remove(),250)},1500)}
let UN=null;function undo(){if(!UN)return;S.f[UN.d]=JSON.parse(UN.a);UN=null;save();dieta()}
function delF(i){UN={d:DT,a:JSON.stringify(S.f[DT])};S.f[DT].splice(i,1);SEL.clear();save();dieta()}
const SEL=new Set();function selI(i,c){c?SEL.add(i):SEL.delete(i)}
function favMulti(){const L=S.f[DT]||[],it=[...SEL].map(i=>L[i]).filter(Boolean);if(it.length<2){alert('Marca al menos 2 comidas.');return}const n=($('fn')&&$('fn').value.trim())||it.map(x=>x.n.split(' (')[0]).join(' + ').slice(0,60),sm=k=>it.reduce((a,x)=>a+(x[k]||0),0);S.fav.push({n,k:Math.round(sm('k')),p:sm('p'),h:sm('h'),g:sm('g')});SEL.clear();save();dieta()}
function addFav(){const n=$('fn').value.trim(),k=Math.round(num($('fk').value));if(!n||!k){$('fs').textContent='Escribe nombre y kcal para guardarla.';return}S.fav.push({n,k,p:num($('fp').value),h:num($('fh').value),g:num($('fg').value)});save();dieta()}
function favI(i){const x=S.f[DT][i];S.fav.push({n:x.n,k:x.k,p:x.p,h:x.h||0,g:x.g||0});save();dieta()}
function delFav(i){S.fav.splice(i,1);save();dieta()}
function addP(fl){pend.push(...Array.from(fl));$('fs').textContent=pend.length+' foto(s) lista(s). Escribe el peso o la cantidad y pulsa Calcular.'}
let REC=null;function cf(m,fn,y){const o=document.createElement('div');o.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;padding:20px;z-index:40';o.innerHTML=`<div class="card" style="width:100%;max-width:360px"><b>${m}</b><div class="row" style="margin-top:12px"><button id="cfy" style="background:${y?'var(--t)':'#D64545'};color:#fff">${y||'Sí, eliminar'}</button><button class="g" id="cfn">Cancelar</button></div></div>`;document.body.appendChild(o);$('cfn').onclick=()=>o.remove();$('cfy').onclick=()=>{o.remove();fn()}}
let OP=null;function sh(id){OP=OP==id?null:id;if(id=='dm')MO=OP=='dm';dieta();}
async function calc(){const s=$('fs'),q=$('fq').value.trim(),qa=QM;QM=null;if(pend.length&&!q&&!qa){qask();return}const OUT='Es comida fuera de casa (restaurante, bar, take-away) y no se puede pesar: estímala con mucho cuidado como dietista. 1) Identifica cada componente del plato. 2) Estima los gramos de cada uno con referencias de la foto (plato de unos 26 cm, cubiertos, manos, envase). 3) Suma el aceite, las salsas y las grasas ocultas típicas de la cocina de restaurante (fritos, rehogados, mantequilla). 4) Suma kcal y macros de todo. 5) En "nombre" pon el plato con los gramos totales aproximados y en "origen" pon "estimado (fuera de casa)". Añade al JSON "pregunta":"". Si falta un dato clave que no se ve (relleno, tipo de salsa, tamaño, ingredientes), NO inventes: deja kcal en 0 y pon en "pregunta" UNA pregunta corta y concreta; si puedes estimar bien, deja "pregunta" vacío. ';const HM='Es comida casera y la persona NO ha dicho los gramos: dímelos tú. Si se ve una báscula con el peso en pantalla, usa exactamente esos gramos; si se ve el envase con peso neto o ración, úsalo; si no, estima los gramos a ojo. Si parece un plato de restaurante o de fuera de casa, no se puede pesar: estima a ojo y pon "origen":"estimado (fuera de casa)". En "nombre" incluye los gramos (ej. "Arroz con pollo (250 g)") y añade al JSON "origen":"báscula|envase|estimado". ';if(!pend.length&&!q){s.textContent='Escribe o dicta qué has comido y cuánto (ej. 65 g de plátano), o haz una foto.';return}if(!SM){s.textContent='El cálculo no está disponible ahora. Usa la entrada a mano.';return}
 s.textContent=qa=='home'?'Calculando los gramos y los macros…':q?'Calculando con tu cantidad…':'Sin cantidad estimo la ración a ojo (menos fiable).';
 try{const o2={modelTier:'default'};if(pend.length)o2.images=pend;
const F='Responde solo JSON: {"nombre":"texto corto con la cantidad","gramos":0,"por100":{"kcal":0,"p":0,"h":0,"g":0},"kcal":0,"proteina":0,"hidratos":0,"grasas":0,"fuente":"tabla|producto conocido|estimado","nota":"una frase","aviso":"leyenda corta con consejo si el alimento destaca (mucha grasa, azúcar, hidratos o proteína; rico en vitamina C u otra; gran alimento); vacío si es normal"}. "gramos" es la cantidad total tomada en g o ml (null si no se puede saber). "por100" son los valores por 100 g o 100 ml (null si no los conoces). kcal, proteina, hidratos y grasas son los de la cantidad tomada.';
const E='Actúa como un dietista-nutricionista experto en producto español. Método: 1) identifica alimento y marca; 2) si se ve la tabla nutricional, léela y úsala tal cual por 100 g, atento a si la tabla es por 100 g o por ración; 3) si no se ve, usa tu mejor conocimiento del producto concreto o, si no, valores medios BEDCA/USDA; 4) escala a la cantidad tomada; 5) comprueba que kcal ≈ 4·proteína + 4·hidratos + 9·grasa (los polioles y la fibra pueden bajarlo un poco). Alimento cocinado o crudo: indícalo y no los mezcles. ';
const r=await SM.json(pend.length?`${E}Mira las fotos: pueden ser el alimento y/o su envase. ${qa=='out'?OUT+'Lo que dice la persona: "'+q+'". ':'Cantidad que ha tomado la persona: "'+q+'". '+(q?'Calcula exactamente para esa cantidad y NO estimes la ración por la foto.':'No dice cantidad: estima una ración razonable y dilo en la nota.')} ${F}`:`${E}Alimento: "${q}". ${F}`,o2);
if(qa=='out'&&String(r.pregunta||'').trim()){QPQ=String(r.pregunta).trim();s.textContent='Necesito un dato para estimarlo bien.';qsh('<b>🍽 '+esc(QPQ)+'</b><input id="qxi" placeholder="Tu respuesta"><div class="row" style="margin:10px 0"><button onclick="qre()">Estimar de nuevo</button><button class="g" onclick="qx()">Cancelar</button></div>');return}
const gr=num(r.gramos),pc=r.por100;if(pc&&gr>0&&num(pc.kcal)>0){r.kcal=num(pc.kcal)*gr/100;r.proteina=num(pc.p)*gr/100;r.hidratos=num(pc.h)*gr/100;r.grasas=num(pc.g)*gr/100}
const ck=4*num(r.proteina)+4*num(r.hidratos)+9*num(r.grasas),bad=num(r.kcal)>0&&Math.abs(ck-num(r.kcal))/num(r.kcal)>.15;
$('man').open=true;$('fn').value=r.nombre||q;$('fk').value=Math.round(num(r.kcal));$('fp').value=Math.round(num(r.proteina)*10)/10;$('fh').value=Math.round(num(r.hidratos)*10)/10;$('fg').value=Math.round(num(r.grasas)*10)/10;pend=[];AV=String(r.aviso||'').slice(0,150);AE=(qa=='out'||/estimad/i.test(String(r.origen||'')+' '+String(r.fuente||'')))?1:0;s.textContent=(qa=='home'?'⚖ '+(num(r.gramos)>0?fm(num(r.gramos))+' g':'gramos sin determinar')+' ('+(r.origen||'estimado')+'). ':qa=='out'?'🍽 Estimado a ojo (fuera de casa). ':'')+(bad?'⚠ Las kcal no cuadran con los macros (según macros serían '+Math.round(ck)+'): revisa con la tabla del envase. ':'')+'Fuente: '+(r.fuente||'estimado')+(r.nota?' · '+r.nota:'')+'. Revisa y pulsa Añadir (o ★ Favorita).'+(AV?' 💡 '+AV:'')}catch(e){s.textContent='No he podido calcularlo. Apunta los valores a mano.'}}

function ml(n){return S.m.filter(z=>z.v[n]).map(z=>z.v[n])}
const pzMn=()=>{for(let i=0;i<14;i++){const d=dayAdd(td(),-i);if(mn(d)||pz(d))return true}return false};
const PGO={};
function pgc(id,tt,sm,body){const o=!!PGO[id];return `<div class="card" onclick="PGO['${id}']=!PGO['${id}'];peso()" style="display:flex;align-items:center;gap:8px;cursor:pointer"><b style="flex:1">${tt}</b><span class="mut">${sm}</span><span style="opacity:.6;transition:transform .2s;transform:rotate(${o?180:0}deg)">▾</span></div>${o?body:''}`}
function pgo(id,tt,sm,body,fn){const o=!!PGO[id];return `<style>.cin .card{background:none!important;box-shadow:none!important;border:0!important;border-top:1px solid var(--ln)!important;border-radius:0!important;padding:14px 0 0!important;margin:14px 0 0!important}</style><div class="card"><div onclick="PGO['${id}']=!PGO['${id}'];{const y=scrollY;${fn||'peso'}();scrollTo(0,y)}" style="display:flex;align-items:center;gap:8px;cursor:pointer"><b style="flex:1">${tt}</b><span class="mut">${sm}</span><span style="opacity:.6;transition:transform .2s;transform:rotate(${o?180:0}deg)">▾</span></div>${o?`<div class="cin">${body}</div>`:''}</div>`}
function wWhy(d){const y=dayAdd(d,-1),r=[],e=eatK(y);if(e!=null){const o=Math.round(e-gF(y));if(o>200)r.push('ayer comiste '+o+' kcal por encima de tu objetivo')}if(/cu[aá]dr|femoral|pierna/i.test(S.t[y]||''))r.push('ayer fue día de pierna (retiene líquido y glucógeno)');if(mn(y)||mn(d))r.push('vienes de mantenimiento');if(pz(y))r.push('estabas en modo pausa');return r.length?' <b>Lo que veo en tus datos:</b> '+r.join('; ')+'.':''}
function compCard(W){const h=pfv().h,E=S.m.filter(z=>z.v&&z.v.Cintura&&z.v.Cuello&&z.v.Cintura>z.v.Cuello).map(z=>{const w=[...W].filter(x=>x.d<=z.d).pop()||W[0];if(!w)return null;const bf=495/(1.0324-0.19077*Math.log10(z.v.Cintura-z.v.Cuello)+0.15456*Math.log10(h))-450;if(!isFinite(bf))return null;const g=w.kg*bf/100;return{d:z.d,kg:w.kg,bf,g,m:w.kg-g,r:z.v.Cintura/h}}).filter(Boolean);if(!E.length)return '';const a=E[E.length-1],f=E[0],r1=v=>fm(Math.round(v*10)/10),sg=v=>(v>0?'+':'−')+r1(Math.abs(v))+' kg',cl=(v,ok)=>`<b style="color:${ok?'var(--ok)':'#D64545'}">${sg(v)}</b>`,z=a.r<.5?['Sano','var(--ok)']:a.r<.6?['Algo alto','#C98A1B']:['Alto','#D64545'];let t=`<div class="card"><b>🧬 Composición corporal</b><div class="mut">Con tu % graso (fórmula Navy) y el peso de cada medición</div><div class="row" style="margin:10px 0;text-align:center"><div style="flex:1"><div class="big" style="font-size:26px">${r1(a.g)}</div><div class="mut">kg de grasa</div></div><div style="flex:1"><div class="big" style="font-size:26px">${r1(a.m)}</div><div class="mut">kg de magra</div></div><div style="flex:1"><div class="big" style="font-size:26px;color:${z[1]}">${a.r.toFixed(2).replace('.',',')}</div><div class="mut">cintura/altura</div></div></div><div class="mut">Cintura/altura: <b style="color:${z[1]}">${z[0]}</b> (por debajo de 0,5 es lo sano).</div>`;if(E.length>1){const dg=a.g-f.g,dm=a.m-f.m;t+=`<div class="tip">Desde el ${f.d}: grasa ${cl(dg,dg<=0)} · magra ${cl(dm,dm>=-.3)}. ${dg<0&&dm>=-.3?'Pierdes grasa y conservas músculo 💪':dg<0?'Bajas grasa, pero también magra: cuida la proteína y no pierdas fuerza en el gym.':'Aún no baja la grasa: mira la media de varias semanas.'}</div>`}return t+'</div>'}
function wUp(W){if(W.length<2)return '';const l=W[W.length-1],p=W[W.length-2],d=l.kg-p.kg;if(d<0.6||Date.parse(td())-Date.parse(l.d)>3*864e5||Date.parse(l.d)-Date.parse(p.d)>7*864e5)return '';const x=W.filter(w=>w.d>dayAdd(l.d,-7)&&w.d<=l.d),m=x.length?x.reduce((s,w)=>s+w.kg,0)/x.length:null,c=[0,1,2,3].some(i=>mn(dayAdd(l.d,-i)))?' Además vienes de una semana de mantenimiento (agua y glucógeno).':'';return `<div class="tip">Marcas +${fm(Math.round(d*10)/10)} kg respecto a tu último registro. Una subida así en pocos días casi siempre es agua (sal, cena fuera, entreno fuerte, poco sueño), no grasa.${c}${m?' Mira la media de 7 días: '+fm(Math.round(m*10)/10)+' kg.':''}${wWhy(l.d)}</div>`}
function peso(){
 const W=[...S.w].sort((a,b)=>a.d<b.d?-1:1),N=Date.parse(td()),av=(a,b)=>{const x=W.filter(w=>{const d=(N-Date.parse(w.d))/864e5;return d>=a&&d<b});return x.length?x.reduce((s,w)=>s+w.kg,0)/x.length:null};
 const f=W[0],l=W[W.length-1],a=av(0,7),b=av(7,14);
 const dl=l?f.kg-l.kg:0;let h=`<div class="hero" style="padding:18px;margin:10px 0;border-radius:20px;background:linear-gradient(135deg,var(--t),color-mix(in srgb,var(--t) 45%,#000));color:#fff;box-shadow:0 8px 22px rgba(0,0,0,.22)"><div style="font-size:13px;letter-spacing:.1em;text-transform:uppercase;opacity:.85">Peso actual</div><div style="display:flex;align-items:baseline;gap:6px;flex-wrap:wrap"><span class="big" style="font-size:78px;color:#fff">${l?fm(l.kg):'—'}</span><span style="font-size:24px;font-weight:600;opacity:.9">kg</span><span style="margin-left:auto;background:rgba(255,255,255,.22);border-radius:20px;padding:5px 12px;font-weight:600">${W.length>1?(dl>=0?'▼ ':'▲ ')+fm(Math.abs(dl))+' kg':'Primer registro'}</span></div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:14px">${[['Inicio',f?fm(f.kg)+' kg':'—'],['Objetivo',S.gw?fm(S.gw)+' kg':'—'],['Media 7 días',a?fm(a)+' kg':'—']].map(z=>`<div style="background:rgba(255,255,255,.16);border-radius:12px;padding:8px 4px;text-align:center"><div style="font-size:12.5px;opacity:.8">${z[0]}</div><b style="font-size:18px">${z[1]}</b></div>`).join('')}</div>${S.gw&&l&&f.kg!=S.gw?`<div style="height:8px;background:rgba(255,255,255,.25);border-radius:4px;margin-top:14px;overflow:hidden"><i style="display:block;height:100%;width:${Math.max(0,Math.min(100,(f.kg-l.kg)/(f.kg-S.gw)*100))}%;background:#fff"></i></div><div style="font-size:13px;opacity:.85;margin-top:4px">${Math.round(Math.max(0,Math.min(100,(f.kg-l.kg)/(f.kg-S.gw)*100)))} % del camino a tu objetivo</div>`:''}<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px"><input id="wk" inputmode="decimal" placeholder="Peso kg (en ayunas)" style="flex:1 1 120px"><input id="wd" type="date" value="${td()}" max="${td()}" aria-label="Fecha del peso" style="flex:1 1 130px"><button onclick="addW()" style="flex:1 1 100%">⚖️ Guardar peso</button></div></div>`;let X='<div class="hin">'+wkCard(W).replace('<div class="card">','<div class="wkb">');
 if(l){const dl=f.kg-l.kg;X+=wUp(W);X+=`<div class="evl" data-gx="w">${dc(W.slice(-30).map(x=>({d:x.d,v:x.kg})),'kg','down',1)+'<div class="mut">🟢 bajada · 🔴 subida · línea discontinua: tendencia (media de los últimos 7 registros)</div><button class="chip" style="margin:4px 0 8px" onclick="gxv(\'w\')">⤢ Ampliar gráfica</button>'}`;
  if(a&&b){const r=b-a,tg=-(S.obj??-0.5),df=r-tg;X+=`<div class="tip">Media 7 días: ${fm(a)} kg. Ritmo: ${r>=0?'bajas':'subes'} ${fm(Math.abs(r))} kg/semana (objetivo: ${tg>0?'bajar '+fm(tg):tg<0?'subir '+fm(-tg):'mantener'}${tg?' kg':''}). ${pzMn()?'Estos 14 días incluyen mantenimiento o pausa: el ritmo no es fiable (el peso puede subir 0,5-1 kg por agua y glucógeno, no es grasa).':`${df>0.25?'Vas más rápido que tu objetivo: sube unas 150 kcal al día.':df<-0.25?'Vas más lento que tu objetivo: baja unas 150 kcal al día.':'Vas en tu ritmo: no toques nada.'} Espera 2 semanas antes de cambiar nada.`}</div>`}
  X+=`</div>`}
 h=h.slice(0,-6)+X+'</div></div>';
 if(l)h+='<h2>IMC</h2>'+imc(l.kg)+goalCard(W);h+=medCard(W);
 const c=ml('Cintura').pop(),n=ml('Cuello').pop();if(c&&n&&c>n){const bf=495/(1.0324-0.19077*Math.log10(c-n)+0.15456*Math.log10(pfv().h))-450;if(isFinite(bf))h+=pgo('pfi','🧬 Grasa y composición corporal',fm(bf)+' % de grasa',fatCard(bf)+compCard(W)+fatImgs(bf))}
 h+=pgc('pfo','📸 Fotos del cuerpo 🔒',(S.bf||[]).length+' fotos','<div class="nwm">'+phCard()+'</div>');
 h+=adjCard();h+=`<h2>Copia de seguridad</h2><div class="card row"><button class="g" onclick="inf()">📅 Informe del mes</button><button onclick="xl()">📊 Exportar a Excel</button><button class="g" onclick="exp()">Guardar copia</button><button class="g" onclick="$('imp').click()">Restaurar</button><input id="imp" type="file" accept=".json" hidden onchange="rest(this.files[0])"></div><div class="mut">Tus datos viven solo en este móvil. Haz una copia de vez en cuando.</div>`;
 $('v').innerHTML=h+(UNL?pkr():'')}
const dsh=d=>new Date(Date.parse(d)-864e5).toISOString().slice(0,10),DM={ok:'✅',over:'🔴',low:'🟡'};
function gF(d){const t=S.t[d]||'Descanso';return tgt((D.find(x=>x[0]==t)||DS)[1])+cAdj(d,t)+gAdj(d)}
function eatK(d){const L=S.f[d]||[];return L.length?L.reduce((a,x)=>a+(x.k||0),0):null}
function dietSt(d){if(d>=td())return null;const e=eatK(d);if(e==null)return null;const r=e/gF(d);return r>1.05?'over':r<.8?'low':'ok'}
function wfb(w,q){if(!q)return null;const gap=Math.max(1,Math.round((Date.parse(w.d)-Date.parse(q.d))/864e5)),d=w.kg-q.kg,df=d-(S.obj??-0.5)*gap/7,pd=dsh(w.d),ek=eatK(pd),ov=ek==null?null:Math.round(ek-gF(pd)),cm=(w.c||'').toLowerCase();
 if(d>=.5&&(ov>300||/atrac|copios|fuera|sal\b/.test(cm)))return['🍽 '+(ov>300?'Ayer +'+ov+' kcal':'Comida de más'),'Has subido '+fm(d)+' kg'+(ov>300?' y ayer te pasaste '+ov+' kcal':'')+'. Casi todo es líquido, sal y comida aún en el intestino, no grasa: se va en 2-3 días. Un atracón o una comida fuera no suma más de ~'+fm(Math.max(ov||0,1000)/7700)+' kg de grasa. Vuelve a tu cifra y mira la media de la semana.'];
 if(d>=.5)return['💧 Subida brusca: líquidos','Has subido '+fm(d)+' kg: suele ser retención de líquidos (sal, poco sueño, entreno fuerte), no grasa. Mira la media de la semana, no un día.'];
 if(df<-.6)return['💧 Bajada grande: líquidos','Has bajado '+fm(-d)+' kg en '+gap+' día(s), más de lo previsto: seguramente líquidos y glucógeno, no solo grasa. No recortes más comida por esto.'];
 if(Math.abs(df)<=.6)return['✅ Vas por buen camino',(d<0?'Has bajado '+fm(-d)+' kg en '+gap+' día(s)':'Peso estable')+': vas por buen camino, en tu ritmo.'];
 return['🟡 Algo lento','Vas algo más lento que tu objetivo. Mira la media de 7 días antes de tocar nada.']}
function wLast(W){const f=wfb(W[W.length-1],W[W.length-2]);return f?'<div class="tip">'+f[1]+'</div>':''}
let PK=null;
function pk(v,s){PK={v,s};peso()}
function pkp(j){(PK.s=='b'?CB:CN)[PK.v]=j;PK=null;peso()}
function pkr(){if(!PK)return '';const a=S.bf.filter(x=>(x.v||'frente')==PK.v);return `<div style="position:fixed;inset:0;background:rgba(0,0,0,.65);z-index:25;overflow:auto;padding:16px" onclick="PK=null;peso()"><div class="card" onclick="event.stopPropagation()"><b>Elige la foto (${PK.v})</b><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:8px">${a.map((x,j)=>`<div onclick="pkp(${j})" style="cursor:pointer"><img class="ph" src="${x.u}" alt="${x.d}"><div class="mut">${x.d}</div></div>`).join('')}</div><button class="g" style="margin-top:8px" onclick="PK=null;peso()">Cerrar</button></div></div>`}
function cum(d){const r=[];let s=0;for(let x=mon(d);x<=d;x=new Date(Date.parse(x)+864e5).toISOString().slice(0,10)){const k=eatK(x);if(k!=null){const v=mtg(x)-k;s+=v;r.push([x,v,s])}}const all=Object.keys(S.f).filter(x=>x<=d&&(S.f[x]||[]).length);return{r,s,tot:all.reduce((q,x)=>q+mtg(x)-eatK(x),0),n:all.length}}
const supReq=d=>{const q=S.sp;if(!q)return[];const ks=Object.keys(q.ck||{});return q.on.filter(n=>{const f=ks.filter(k=>(q.ck[k]||[]).includes(n)).sort()[0];return f?f<=d:d>=td()})};
const supOk=d=>{const q=S.sp;if(!q)return'';const r=supReq(d),c=(q.ck[d]||[]).filter(n=>q.on.includes(n));if(!c.length)return'';return r.length&&r.every(n=>c.includes(n))?'💊':'<span style="opacity:.45">💊</span>'};
function dayCard(d){const t=S.t[d]||'Descanso',g=gF(d),L=S.f[d]||[],su=k=>L.reduce((a,x)=>a+(x[k]||0),0),e=su('k'),P=mcP(d),c=CAL()[d]||{},st=dietSt(d),ex=[];
 Object.keys(S.gh).forEach(k=>{const z=S.gh[k].find(x=>x.d==d);if(z&&(z.kg||z.r)){const n=esc(k.split('|')[0]);if(!ex.some(y=>y.toLowerCase()==n.toLowerCase()))ex.push(n)}});
 const w=S.w.find(x=>x.d==d),cu=cum(d),sg=v=>(v>=0?'−':'+')+Math.abs(Math.round(v)),sp=S.sp,sn=sp?supReq(d).length:0,sc=sp?(sp.ck[d]||[]).filter(n=>supReq(d).includes(n)).length:0;
 return `<div class="card"><b>${d}</b> · <span class="mut">${esc(t)}</span>${L.length?`<div class="big" style="font-size:26px">${Math.round(e)} kcal <span class="mut" style="font-size:14px">de ${g}</span></div><div class="mut">P ${fm(su('p'))}/${Math.round(g*P.p/400)} g · H ${fm(su('h'))}/${Math.round(g*P.h/400)} g · G ${fm(su('g'))}/${Math.round(g*P.g/900)} g</div>`:'<div class="mut" style="margin:6px 0">Aún no has apuntado nada. Elige un alimento arriba o usa «Introducir a mano».</div>'}${st?`<div class="tip">${DM[st]} ${st=='ok'?'Dieta cumplida':st=='over'?'Te pasaste '+Math.round(e-g)+' kcal':'Te quedaste muy corto: '+Math.round(g-e)+' kcal de menos'}</div>`:''}<div class="mut">💪 Gym: ${ex.length?ex.join(' · '):info(d).g?'día de fuerza, sin kilos registrados':'no'}</div>${cu.r.length?`<div class="tip"><b>Balance acumulado</b> <span class="mut">(gasto estimado − comido; − = déficit)</span>${cu.r.map(z=>`<div class="mut">${z[0].slice(8)}/${z[0].slice(5,7)}: ${sg(z[1])} → <b style="color:var(--ink)">${sg(z[2])} kcal</b></div>`).join('')}<div style="margin-top:4px">Semana hasta este día: <b>${sg(cu.s)} kcal</b> ≈ ${fm(Math.abs(cu.s)/7700)} kg de grasa ${cu.s>=0?'menos':'más'}<br>Total desde que empezaste (${cu.n} días): <b>${sg(cu.tot)} kcal</b> ≈ ${fm(Math.abs(cu.tot)/7700)} kg</div></div>`:''}<div class="mut">💊 Suplementos: ${sn?(sc>=sn?'✅ todos tomados ('+sc+'/'+sn+')':sc?'🟡 '+sc+'/'+sn+' tomados':d<td()?'🔴 ninguno tomado':'⚪ pendientes (0/'+sn+')'):'ninguno activado'}</div><div class="mut">🏃 Cardio: ${c.kc?c.kc+' kcal':'no'}</div>${w?`<div class="mut">⚖️ Peso: ${fm(w.kg)} kg${w.c?' · '+esc(w.c):''}</div>`:''}<div class="mut" style="margin-top:6px">✅ dieta cumplida · 🔴 te pasaste · 🟡 te quedaste muy corto · <u onclick=pzL()>⛱️ vacaciones</u></div></div>`}
function fgBody(x){
const t=(x-8)/27,f=n=>n.toFixed(1);
const sm=p=>{let d='';for(let i=0;i<p.length-1;i++){const a=p[i-1]||p[i],b=p[i],c=p[i+1],e=p[i+2]||c;d+='C'+f(b[0]+(c[0]-a[0])/6)+' '+f(b[1]+(c[1]-a[1])/6)+' '+f(c[0]-(e[0]-b[0])/6)+' '+f(c[1]-(e[1]-b[1])/6)+' '+f(c[0])+' '+f(c[1])}return d};
const nw=3.4+t*1.6,sw=16.2+t*1.6,cw=13.2+t*4.6,ww=8+t*9,bw=ww+.6+t*3,hw=10.6+t*7.4;
const R0=[[nw,19],[sw-2.2,23.5],[sw,28],[cw,39],[ww,56],[bw,65],[hw,76],[3,84]];
const R=R0.map(([d,y])=>[30+d,y]),L=R0.map(([d,y])=>[30-d,y]).reverse();
const tor='M'+f(R[0][0])+' '+R[0][1]+sm(R)+'L'+f(L[0][0])+' '+L[0][1]+sm(L)+'Z';
const limb=(c,w)=>{const o=c.map((q,i)=>[q[0]+w[i],q[1]]),n=c.map((q,i)=>[q[0]-w[i],q[1]]).reverse();return 'M'+f(o[0][0])+' '+f(o[0][1])+sm(o)+'L'+f(n[0][0])+' '+f(n[0][1])+sm(n)+'Z'};
const aw=[3.4+t*2.1,3.2+t*2.1,2.7+t*1.4,2.3+t*.8,2+t*.5];
const arm=s=>limb([[30+s*(sw-1.6),27],[30+s*(sw+.4),38],[30+s*(sw+1),52],[30+s*(sw+2),64],[30+s*(sw+2.6),75]],aw);
const lx=hw*.5,tw=hw*.5+.8,leg=s=>{const c=30+s*lx;return limb([[c,78],[c,90],[c,101],[c,109],[c,118]],[tw,tw*.9+.4,3.5+t*1.2,3.5+t*.9,2.5])};
const lf=(s,d)=>'';
let d='';
// detalle muscular / grasa
const S=`stroke="var(--bg)" fill="none" stroke-linecap="round"`;
if(x<=20){const o=x<=12?.75:x<=15?.55:.3;
 d+=`<path d="M${f(30-cw+2.5)} 41Q30 ${x<=15?46:45} ${f(30+cw-2.5)} 41" ${S} stroke-width="1.1" opacity="${o}"/>`;
 d+=`<path d="M30 31V${x<=12?43:41}" ${S} stroke-width=".9" opacity="${o}"/>`}
if(x<=15){const o=x<=12?.8:.5,aww=ww-1.5;
 d+=`<path d="M30 47V70" ${S} stroke-width="1" opacity="${o}"/>`;
 [51,57,63].forEach((y,i)=>d+=`<path d="M${f(30-aww+i*.3)} ${y}Q30 ${y+1.6} ${f(30+aww-i*.3)} ${y}" ${S} stroke-width="1" opacity="${o}"/>`);
 d+=`<path d="M${f(30-ww+.8)} 46l3 3M${f(30-ww+.8)} 51l3 2.5M${f(30+ww-.8)} 46l-3 3M${f(30+ww-.8)} 51l-3 2.5" ${S} stroke-width=".8" opacity="${o*.8}"/>`;
 d+=`<path d="M${f(30-sw+1.5)} 29Q${f(30-sw+4)} 36 ${f(30-sw+3)} 44M${f(30+sw-1.5)} 29Q${f(30+sw-4)} 36 ${f(30+sw-3)} 44" ${S} stroke-width=".9" opacity="${o*.7}"/>`}
if(x>=20&&x<=25)d+=`<circle cx="30" cy="${f(60+t*3)}" r=".9" fill="var(--bg)" opacity=".6"/>`;
if(x>=25){const o=.35+t*.4,y0=60+t*3;
 d+=`<path d="M${f(30-bw+2.5)} ${f(y0+3)}Q30 ${f(y0+9+t*3)} ${f(30+bw-2.5)} ${f(y0+3)}" ${S} stroke-width="1.1" opacity="${o}"/>`;
 d+=`<circle cx="30" cy="${f(y0)}" r="1" fill="var(--bg)" opacity=".6"/>`}
if(x>=30)d+=`<path d="M${f(30-cw+3)} 41Q30 ${f(46+t*2)} ${f(30+cw-3)} 41" ${S} stroke-width="1.1" opacity=".5"/><path d="M${f(30-ww)} 58q2 5 .5 9M${f(30+ww)} 58q-2 5 -.5 9" ${S} stroke-width="1" opacity=".45"/>`;
d+=`<path d="M${f(30-hw)} 73Q30 75.5 ${f(30+hw)} 73" ${S} stroke-width="1.3" opacity=".55"/>`;
if(x<=25)d+=`<path d="M${f(30-sw+3)} 25Q30 22.5 ${f(30+sw-3)} 25" ${S} stroke-width=".8" opacity=".4"/>`;
const hr=6.1+t*1.2,cx=3.6+t*2,sh=[leg(-1),leg(1),arm(-1),arm(1),tor],sd=[leg(-1),leg(1),tor];
return `<svg viewBox="0 0 60 122" style="width:100%;display:block" role="img" aria-label="Silueta con ${x} % de grasa"><defs><linearGradient id="sh${x}" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="var(--bg)" stop-opacity=".5"/><stop offset=".5" stop-color="var(--bg)" stop-opacity="0"/><stop offset="1" stop-color="var(--bg)" stop-opacity=".5"/></linearGradient></defs><g fill="currentColor" opacity=".74">${sh.map(q=>`<path d="${q}"/>`).join('')}<ellipse cx="${f(30-sw+.6)}" cy="29" rx="${f(cx)}" ry="4.4"/><ellipse cx="${f(30+sw-.6)}" cy="29" rx="${f(cx)}" ry="4.4"/><path d="M${f(30-nw-.5)} 14h${f(2*nw+1)}v8h-${f(2*nw+1)}z"/><ellipse cx="30" cy="9.5" rx="${f(hr)}" ry="7.6"/></g><g fill="url(#sh${x})">${sd.map(q=>`<path d="${q}"/>`).join('')}</g>${d}</svg>`}
function fatImgs(b){const L=[8,12,15,20,25,30,35],nr=L.reduce((a,x)=>Math.abs(x-b)<Math.abs(a-b)?x:a,L[0]);
 return `<details class="card"><summary><b>Así se ve cada % de grasa</b> <span class="mut">· tú ${fm(b)} % → el más parecido es el ${nr} %</span></summary><div style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-top:8px">${L.map(x=>{const o=x==nr;return `<div style="text-align:center;border:${o?'2px solid var(--acc)':'1px solid var(--ln)'};border-radius:8px;padding:3px 0">${fgBody(x)}<div class="mut" style="font-size:12.5px"><b>${x}%</b></div></div>`}).join('')}</div></details>`}
function balanza(v){return `<svg viewBox="0 0 160 100" style="width:150px;display:block;margin:0 auto 8px" role="img" aria-label="Báscula"><rect x="8" y="8" width="144" height="84" rx="20" fill="var(--ln)"/><rect x="8" y="8" width="144" height="84" rx="20" fill="none" stroke="var(--t)" stroke-width="3"/><rect x="40" y="20" width="80" height="34" rx="8" fill="#0F1626"/><text id="wdisp" x="72" y="46" text-anchor="middle" font-size="24" font-weight="700" fill="#8CF5C9" font-family="Barlow Condensed,sans-serif">${v}</text><text x="106" y="46" font-size="10" fill="#8CF5C9">kg</text><rect x="28" y="62" width="36" height="18" rx="9" fill="var(--bg)" opacity=".7"/><rect x="96" y="62" width="36" height="18" rx="9" fill="var(--bg)" opacity=".7"/></svg>`}
function runner(x,y,go){const limb=(x1,y1,x2,y2,p,vv,st)=>`<g${go?'':` transform="rotate(${st} ${p})"`}><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>${go?`<animateTransform attributeName="transform" type="rotate" values="${vv}" dur=".6s" repeatCount="indefinite"/>`:''}</g>`;
 return `<g transform="translate(${x} ${y})" stroke="var(--t)" stroke-width="3.2" stroke-linecap="round" fill="none"><circle cx="7" cy="-25" r="5" fill="var(--t)" stroke="none"/><line x1="0" y1="0" x2="4" y2="-17"/>${limb(0,0,0,17,'0 0','35 0 0;-35 0 0;35 0 0',18)}${limb(0,0,0,17,'0 0','-35 0 0;35 0 0;-35 0 0',-18)}${limb(4,-16,4,-5,'4 -16','-55 4 -16;55 4 -16;-55 4 -16',150)}${limb(4,-16,4,-5,'4 -16','55 4 -16;-55 4 -16;55 4 -16',-150)}</g>`}
function runTrack(W,gw){const a=W[0].kg,c=W[W.length-1].kg,tot=a-gw;if(Math.abs(tot)<.05)return '';const p=Math.max(0,Math.min(1,(a-c)/tot)),x=26+p*236,done=p>=1;
 return `<svg viewBox="0 0 300 100" style="width:100%;max-width:400px;display:block;margin:10px auto" role="img" aria-label="Progreso hacia el peso objetivo"><line x1="20" y1="78" x2="270" y2="78" stroke="var(--ln)" stroke-width="7" stroke-linecap="round"/><line x1="20" y1="78" x2="${x}" y2="78" stroke="var(--t)" stroke-width="7" stroke-linecap="round"/><line x1="272" y1="78" x2="272" y2="30" stroke="var(--ink)" stroke-width="2"/>${[0,1,2,3].map(i=>[0,1].map(j=>`<rect x="${272+i*5}" y="${30+j*5}" width="5" height="5" fill="${(i+j)%2?'var(--ink)':'var(--card)'}" stroke="var(--ink)" stroke-width=".4"/>`).join('')).join('')}${runner(x,57,!done)}<text x="${x}" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">${fm(c)} kg</text><text x="20" y="96" font-size="10" fill="var(--mut)">Salida ${fm(a)}</text><text x="296" y="96" text-anchor="end" font-size="10" fill="var(--mut)">Meta ${fm(gw)}</text>${done?'<text x="288" y="26" font-size="16" text-anchor="middle">🏆</text>':''}</svg><div class="mut" style="text-align:center">${Math.round(p*100)} % del camino · ${done?'¡has llegado a la meta!':'te faltan '+fm(Math.abs(c-gw))+' kg'}</div>`}
function addW(){const kg=num($('wk').value),d=$('wd').value||td();if(!kg)return;S.w=S.w.filter(w=>w.d!=d);S.w.push({d,kg,c:''});RPO=0;save();peso()}
function delW(d){S.w=S.w.filter(w=>w.d!=d);save();peso()}
function delM(){const d=$('md').value||td();S.m=S.m.filter(z=>z.d!=d);save();peso()}
function addM(){const v={};MD.forEach((m,i)=>{const x=num($('m'+i).value);if(x)v[m[0]]=x});if(!Object.keys(v).length)return;const dt=$('md').value||td(),e=S.m.find(z=>z.d==dt);if(e)Object.assign(e.v,v);else S.m.push({d:dt,v});S.m.sort((a,b)=>a.d<b.d?-1:1);save();peso()}
async function exp(){const j=JSON.stringify(S),fn='yoseloquecomo-copia-'+td()+'.json';try{const f=new File([j],fn,{type:'application/json'});if(navigator.canShare&&navigator.canShare({files:[f]})){try{await navigator.share({files:[f],title:'Copia de seguridad yoseloquecomo',text:'Copia de seguridad del '+td().split('-').reverse().join('/')+'. Elige Gmail y pulsa enviar.'});S.lb=Date.now();save();mnR();return}catch(e){if(e&&e.name=='AbortError')return}}}catch(e){}
if(!DL)return;try{await DL.save({filename:fn,data:new Blob([j],{type:'application/json'})});S.lb=Date.now();save();mnR()}catch(e){}}
async function rest(f){if(!f)return;try{S=Object.assign({w:[],f:{},t:{},g:{},gh:{},m:[],bf:[],bo:''},JSON.parse(await f.text()));save();peso()}catch(e){alert('Ese archivo no es una copia válida.')}}

let TI,TE=0;function stopT(){clearInterval(TI);$('tmr').hidden=true}
function tm(s){clearInterval(TI);TE=Date.now()+s*1000;tk();TI=setInterval(tk,250)}
function tk(){const r=Math.ceil((TE-Date.now())/1000),o=$('tmr');o.hidden=false;if(r<=0){clearInterval(TI);try{window.bp&&window.bp()}catch(e){}o.textContent='¡Listo! Siguiente serie';try{navigator.vibrate&&navigator.vibrate([300,100,300])}catch(e){}setTimeout(stopT,5000);return}o.textContent='⏱ '+Math.floor(r/60)+':'+String(r%60).padStart(2,'0')+' · toca para parar'}
let GS=[];
const MCL={p:'#2DA44E',h:'#F5A524',g:'#E5484D'};function mc3(p,h,g){return `<span style="color:${MCL.p}">P ${fm(p)}</span> · <span style="color:${MCL.h}">H ${fm(h)}</span> · <span style="color:${MCL.g}">G ${fm(g)}</span>`}
let EDI=null,FT='f',FQ='';const ERE=/(\d+(?:[.,]\d+)?)\s*(g|gr|gramos|ml)\b/i;function edF(i){EDI=EDI===i?null:i;dieta()}
function edBox(i){const x=S.f[DT][i],m=x.n.match(ERE);return `<div style="margin:4px 0 8px"><input id="en" value="${esc(x.n)}" aria-label="Nombre" style="width:100%;margin-bottom:6px">${m?'':'<div class="mut">No tengo los gramos de lo apuntado: ponlos y los nuevos para recalcular.</div><div class="row" style="margin:4px 0"><input id="eo" inputmode="decimal" placeholder="gramos apuntados" style="flex:1 1 100px"></div>'}<div class="row"><input id="eq" inputmode="decimal" value="${m?m[1]:''}" placeholder="gramos nuevos" style="flex:1 1 90px"><span class="mut">${m&&m[2]=='ml'?'ml':'gramos'}</span><button onclick="svE(${i})">Guardar</button><button class="g" onclick="EDI=null;dieta()">Cancelar</button></div><div class="mut" style="margin-top:8px">Mover a otra comida:</div><div class="row" style="margin:4px 0">${SLS.map(z=>`<button class="chip${x.s==z?' on':''}" onclick="mvF(${i},'${z}')">${z}</button>`).join('')}</div></div>`}
function svE(i){const x=S.f[DT][i],nm=($('en').value||'').trim(),m=x.n.match(ERE),n=num($('eq').value);let f=1,nn=nm||x.n;if(n){if(m){if(n!=num(m[1]))f=n/num(m[1])}else{const o=$('eo')?num($('eo').value):0;if(o&&n!=o)f=n/o}}if(f!=1){const mm=nn.match(ERE);if(mm)nn=nn.replace(mm[0],fm(n)+' '+(mm[2].toLowerCase()=='ml'?'ml':'g'));else if(!m)nn+=' ('+fm(n)+' g)';['k','p','h','g'].forEach(q=>x[q]=q=='k'?Math.round((x[q]||0)*f):Math.round((x[q]||0)*f*10)/10)}x.n=nn;EDI=null;save();dieta()}
let LPT=null,LPX=0,LP0=null;
(function(){const sel='.mrow[data-i]',st=document.createElement('style');st.textContent='.mrow,.item.fc{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.mrow .mib{display:none}.mrow.mact .mib{display:flex}.item.fc input{-webkit-user-select:text;user-select:text}';document.head.appendChild(st);
const stop=()=>{clearTimeout(LPT);LPT=null};
document.addEventListener('pointerdown',e=>{const t=e.target.closest&&e.target.closest(sel);if(!t||e.target.closest('input,a')||(e.target.closest('button')&&!e.target.closest('summary')))return;stop();LP0=[e.clientX,e.clientY];LPT=setTimeout(()=>{LPT=null;LPX=Date.now();try{hap(30)}catch(_){}{const on=t.classList.contains('mact');document.querySelectorAll('.mrow.mact').forEach(r=>r.classList.remove('mact'));if(!on)t.classList.add('mact')}},500)});
document.addEventListener('pointermove',e=>{if(LPT&&LP0&&Math.hypot(e.clientX-LP0[0],e.clientY-LP0[1])>10)stop()});
['pointerup','pointercancel'].forEach(n=>document.addEventListener(n,stop));
document.addEventListener('click',e=>{if(LPX&&Date.now()-LPX<700){e.preventDefault();e.stopPropagation();LPX=0}},true);
document.addEventListener('contextmenu',e=>{if(e.target.closest&&e.target.closest(sel)&&!e.target.closest('input'))e.preventDefault()})})();
function mvF(i,s){const L=S.f[DT]||[],x=L[i];if(!x)return;if(x.grp){L.forEach(y=>{if(y.grp==x.grp)y.s=s})}else x.s=s;EDI=null;save();dieta()}
function favEd(x,i){const r=!!(x.it&&x.it.length),m=r?null:x.n.match(ERE);let c;if(r)c=`<input id="fgr${i}" inputmode="decimal" value="1" style="flex:1 1 80px"><span class="mut">× cantidades (1 = igual)</span>`;else c=(m?'':`<input id="fgo${i}" inputmode="decimal" placeholder="gramos que lleva ahora" style="flex:1 1 130px">`)+`<input id="fgr${i}" inputmode="decimal" value="${m?m[1]:''}" placeholder="gramos nuevos" style="flex:1 1 90px"><span class="mut">${m&&m[2]=='ml'?'ml':'g'}</span>`;return `<div style="margin:8px 0"><input id="fnm${i}" value="${esc(x.n)}" aria-label="Nombre" style="width:100%;margin-bottom:6px"><div class="row">${c}<button onclick="svFav(${i})">Guardar</button></div></div>`}
function svFav(i){const x=S.fav[i];if(!x)return;const nm=($('fnm'+i).value||'').trim(),r=!!(x.it&&x.it.length),gv=num($('fgr'+i).value);let f=1,n=nm||x.n;if(r){if(gv&&gv!=1)f=gv}else{const m=x.n.match(ERE);if(m){if(gv&&gv!=num(m[1]))f=gv/num(m[1])}else{const o=$('fgo'+i)?num($('fgo'+i).value):0;if(gv&&o&&gv!=o)f=gv/o}}
if(f!=1){const sc=o=>{['k','p','h','g'].forEach(q=>o[q]=q=='k'?Math.round((o[q]||0)*f):Math.round((o[q]||0)*f*10)/10)};sc(x);if(r)x.it.forEach(y=>{sc(y);y.n=y.n.replace(ERE,(s,a,u)=>fm(num(a)*f)+' '+(u.toLowerCase()=='ml'?'ml':'g'))});else{const mm=n.match(ERE);if(mm)n=n.replace(mm[0],fm(gv)+' '+(mm[2].toLowerCase()=='ml'?'ml':'g'));else if(!x.n.match(ERE))n=n+' ('+fm(gv)+' g)'}}
x.n=n;save();dieta()}
function favBar(){return `<div class="row" style="margin:8px 0"><button class="chip${FT=='f'?' on':''}" onclick="FT='f';FP=0;dieta()">⭐ Alimentos</button><button class="chip${FT=='r'?' on':''}" onclick="FT='r';FP=0;dieta()">🍲 Comidas y recetas</button></div><input type="search" placeholder="🔍 Buscar alimento o receta…" value="${esc(FQ)}" oninput="favS(this.value)" style="width:100%;margin-bottom:6px">`}
function favOk(x){const r=!!(x.it&&x.it.length);return (FT=='r')==r&&(x.n||'').toLowerCase().includes(FQ.toLowerCase())}
let FP=0;
function favHtml(){if(!S.fav.length)return '<div class="mut" style="margin-top:8px">Aún no tienes favoritas. Al apuntar una comida, toca «★ Guardar como favorita».</div>';
const a=S.fav.map((x,i)=>[x,i]).filter(z=>favOk(z[0])),pg=Math.max(1,Math.ceil(a.length/5));if(FP>=pg)FP=pg-1;if(FP<0)FP=0;
if(!a.length)return '<div class="mut" style="margin-top:8px">No hay resultados.</div>';
const it=a.slice(FP*5,FP*5+5).map(z=>{const x=z[0],i=z[1];return `<div class="item fc"><details style="flex:1;min-width:0"><summary><b>${esc(x.n)}</b> <span class="mut">(${Math.round(x.k)} kcal)</span><div class="mrp">${pl(x.p,x.h||0,x.g||0)}</div></summary>${(x.it||[]).map(y=>`<span class="mut" style="display:inline-block;margin:2px 10px 2px 0">· ${esc(y.n)}: ${y.k} kcal · P ${fm(y.p)} · H ${fm(y.h||0)} · G ${fm(y.g||0)}</span>`).join('')}<details class="fed" style="margin-top:6px"><summary>✏️ Editar nombre y gramos</summary>${favEd(x,i)}</details><button class="g" style="margin-top:6px" onclick="delFav(${i})">Quitar de favoritas</button></details><button class="fp" onclick="addFv(${i})" aria-label="Añadir">+</button></div>`}).join('');
const pn=pg>1?`<div class="fpg" role="navigation" aria-label="Páginas"><button class="chip" ${FP==0?'disabled':''} onclick="favP(${FP-1})" aria-label="Página anterior">‹</button>${[...Array(pg)].map((_,j)=>`<button class="chip${j==FP?' on':''}" onclick="favP(${j})" aria-label="Página ${j+1}">${j+1}</button>`).join('')}<button class="chip" ${FP==pg-1?'disabled':''} onclick="favP(${FP+1})" aria-label="Página siguiente">›</button><button class="chip" style="border-radius:50%;width:34px;height:34px;min-width:34px;padding:0;flex:none" ${FP==pg-1?'disabled':''} onclick="favP(${pg-1})" aria-label="Última página" title="Última página">»</button></div>`:'';
return it+pn}
function favP(p){FP=p;$('favlist').innerHTML=favHtml()}
function favS(v){FQ=v;FP=0;$('favlist').innerHTML=favHtml()}
function edOld(i){const x=S.f[DT][i],m=x.n.match(/(\d+(?:[.,]\d+)?)\s*(g|ml)\b/i);let f;if(m){const o=num(m[1]),n=num(prompt('Nueva cantidad en '+m[2]+' (ahora '+o+')',o));if(!n||n==o)return;f=n/o;x.n=x.n.replace(m[0],fm(n)+' '+m[2])}else{const n=num(prompt('Proporción de lo que apuntaste (1 = igual, 0.5 = la mitad)','1'));if(!n||n==1)return;f=n}['k','p','h','g'].forEach(q=>x[q]=q=='k'?Math.round((x[q]||0)*f):Math.round((x[q]||0)*f*10)/10);save();dieta()}
function pl(p,h,g,r){const f=v=>(r?Math.round(v):fm(v))+'g',o=(c,l,v)=>`<span class="pl"><i style="background:${c}">${l}</i>${f(v)}</span>`;return o('#2DA44E','P',p)+o('#F5A524','H',h)+o('#E5484D','G',g)}
function lst(L){if(!L.length)return '<span class="mut">Nada apuntado este día. Puedes añadir comidas arriba.</span>';
 const gs=[],seen={};L.forEach((x,i)=>{if(x.grp){if(seen[x.grp]==null){seen[x.grp]=gs.length;gs.push({g:x.grp,it:[]})}gs[seen[x.grp]].it.push(i)}else gs.push({i})});GS=gs.map(g=>g.g);
 const row=i=>{const x=L[i],tp=leg(x).replace('<br>','');return `<div class="mrow${EDI===i?' mact':''}" data-i="${i}"><input type="checkbox" class="mck" aria-label="Marcar" ${SEL.has(i)?'checked':''} onchange="selI(${i},this.checked)"><div class="mbd"><div class="mtt"><b>${esc(x.n)}</b>${x.e?'<span class="mut" title="Valor estimado a ojo"> ≈ est.</span>':''}<span class="mib"><button class="g ib" onclick="edF(${i})" aria-label="Editar cantidad">✏️</button><button class="g ib" onclick="favI(${i})" aria-label="Guardar como favorita">★</button><button class="g ib" onclick="delF(${i})" aria-label="Quitar">✕</button></span></div><div class="mrp"><span class="kc">${x.k} kcal</span>${pl(x.p,x.h||0,x.g||0)}</div>${tp?`<div class="mtp">${tp}</div>`:''}${DT!=td()?`<div class="mib" style="margin-top:6px"><button class="g" style="padding:6px 12px;font-size:13px" onclick="toHoy(${i})">📅 Registrar en hoy</button></div>`:''}</div></div>${EDI===i?edBox(i):''}`};
 const so=g=>{const n=SLS.indexOf(L[g.i!=null?g.i:g.it[0]].s);return n<0?SLS.length:n},kc=z=>L.reduce((a,x)=>a+((x.s||'Sin clasificar')==z?x.k:0),0),ms=(q,z)=>L.reduce((a,x)=>a+((x.s||'Sin clasificar')==z?(x[q]||0):0),0);let lp=null;return gs.map((g,gi)=>({g,gi,o:so(g)})).sort((a,b)=>a.o-b.o||a.gi-b.gi).map(({g,gi})=>{const sn=L[g.i!=null?g.i:g.it[0]].s||'Sin clasificar',hd=sn!=lp?(lp=sn,`<div class="msum"><div class="mst"><b>${sn}</b><span>${Math.round(kc(sn))} kcal</span></div><div class="mrp"><span class="mut">Macros:</span>${pl(ms('p',sn),ms('h',sn),ms('g',sn),1)}</div>${rpB(sn,kc(sn),ms('p',sn))}</div>`):'';if(g.i!=null)return hd+row(g.i);const sm=k=>g.it.reduce((a,i)=>a+(L[i][k]||0),0);return hd+`<details class="item" style="display:block"><summary>${esc(g.g)} · ${Math.round(sm('k'))} kcal</summary><div class="mut">Total: ${mc3(sm('p'),sm('h'),sm('g'))}</div>${g.it.map(row).join('')}<div class="row" style="margin-top:6px"><button class="g" onclick="favG(${gi})">★ Guardar como favorita</button><button class="g" onclick="delG(${gi})">Quitar grupo</button></div></details>`}).join('')+`<button class="gadd" onclick="const a=$('addc');if(a)a.scrollIntoView({behavior:'smooth'});const q=$('fq');if(q)q.focus()">+ Añadir nuevo alimento</button><button class="mcb" onclick="openM()">📄 Crear comida con las marcadas</button><div class="mut" style="margin-top:6px">Marca alimentos con la casilla y ponles nombre. Lo que ya apuntaste no se borra.</div>`}
function grp(){const n=($('gn').value||'').trim()||'Comida',L=S.f[DT]||[];if(!SEL.size)return;SEL.forEach(i=>{if(L[i])L[i].grp=n});SEL.clear();save();dieta()}
function delG(gi){const n=GS[gi];UN={d:DT,a:JSON.stringify(S.f[DT]||[])};S.f[DT]=(S.f[DT]||[]).filter(x=>x.grp!=n);SEL.clear();save();dieta()}
function favG(gi){const n=GS[gi],it=(S.f[DT]||[]).filter(x=>x.grp==n),sm=k=>it.reduce((a,x)=>a+(x[k]||0),0);S.fav.push({n,k:Math.round(sm('k')),p:sm('p'),h:sm('h'),g:sm('g'),it:it.map(x=>({n:x.n,k:x.k,p:x.p,h:x.h||0,g:x.g||0}))});save();dieta()}
function addFv(i){const f=S.fav[i];if(f.it&&f.it.length){(S.f[DT]=S.f[DT]||[]).push(...f.it.map(x=>({...x,grp:f.n,s:SL||dfl()})));save();dieta()}else addF(f.n,f.k,f.p,f.h,f.g)}
function openM(){if(!SEL.size){alert('Marca primero los alimentos con la casilla.');return}$('mdl').hidden=false;$('mn').value='';$('mn').focus()}
function saveM(){const n=$('mn').value.trim();if(!n){$('mn').focus();return}const L=S.f[DT]||[],it=[...SEL].map(i=>L[i]).filter(Boolean).map(x=>({n:x.n,k:x.k,p:x.p,h:x.h||0,g:x.g||0})),sm=k=>it.reduce((a,x)=>a+(x[k]||0),0);S.fav.push({n,k:Math.round(sm('k')),p:sm('p'),h:sm('h'),g:sm('g'),it});SEL.clear();$('mdl').hidden=true;save();dieta()}
const CAL=()=>S.cal=S.cal||{};
let RMO=true;function rem(){const t=td(),ago=d=>d?Math.floor((Date.parse(t)-Date.parse(d))/864e5):999,fd=d=>{const x=d.split('-');return x[2]+'/'+x[1]},due=(d,n)=>fd(new Date(Date.parse(d)+n*864e5).toISOString().slice(0,10)),lm=S.m.length?S.m[S.m.length-1].d:null,lp=S.bf.length?S.bf[S.bf.length-1].d:null,r=[],row=(ic,tx,bt)=>`<div style="display:flex;align-items:center;gap:8px;justify-content:space-between;padding:6px 0"><span style="flex:1">${ic} ${tx}</span>${bt}</div>`,go1=tab==1?'':`<button class="g" style="padding:5px 10px;font-size:13px" onclick="go(1)">Ir a Peso</button>`,gb=(i,l)=>tab==i?'':`<button class="g" style="padding:5px 10px;font-size:13px" onclick="go(${i})">${l}</button>`;
const s=S.sp,n=new Date(),hm=String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');
if(s&&s.on.length){const f=s.on.filter(x=>!(s.ck[t]||[]).includes(x));if(f.length)r.push(row('💊','<b>Te faltan hoy:</b> '+f.map(esc).join(', '),`<button style="padding:5px 10px;font-size:13px" onclick="supAll()">Ya los tomé</button>`))}
const ps=S.ps||{},yd=new Date(Date.parse(t)-864e5).toISOString().slice(0,10),pb=`<button style="padding:5px 10px;font-size:13px" onclick="qpas()">Apuntar</button>`;
if(!ps[t]&&n.getHours()>=20)r.push(row('👟','<b>No has apuntado los pasos de hoy</b>',pb));
if(!ps[yd]&&Object.keys(ps).length)r.push(row('👟','<b>Ayer no apuntaste los pasos</b>',`<button style="padding:5px 10px;font-size:13px" onclick="qpas('${yd}')">Apuntar</button>`));
const am=ago(lm),po=S.mpo&&S.mpo.d==lm?S.mpo.n:0,pp=`<button class="g" style="padding:5px 10px;font-size:13px" onclick="mdP()">+1 día</button>`,mb=`<span style="display:flex;gap:6px">${go1}${pp}</span>`;if(am>=14+po)r.push(row('📏','<b>Toca medirte</b> (cada 2 semanas)'+(po?' · pospuesto '+po+(po==1?' día':' días'):'')+(lm?'. Última vez: '+fd(lm):''),mb));else if(am>=11+po)r.push(row('📏','<b>Medidas en '+(14+po-am)+(14+po-am==1?' día':' días')+'</b> (toca el '+due(lm,14+po)+')',mb));
const ap=ago(lp);if(ap>=30)r.push(row('📸','<b>Toca hacer las fotos del mes</b>, de frente, lado y espalda'+(lp?'. Últimas: '+fd(lp):''),go1));else if(ap>=26)r.push(row('📸','<b>Fotos en '+(30-ap)+(30-ap==1?' día':' días')+'</b> (toca el '+due(lp,30)+')',go1));
{const lw=(S.w||[]).length?[...S.w].sort((x,y)=>x.d<y.d?-1:1).pop().d:null,aw=ago(lw);if(lw&&aw>=3)r.push(row('⚖️','<b>Llevas '+aw+' días sin pesarte</b>',go1))}
{const cr=(S.cm||{}).r;if(cr&&cr.on&&n.getHours()>=(cr.h||22)&&!(((S.cm||{}).lg||{})[t]>=60))r.push(row('🧘','<b>Te toca tu rato de calma</b>',gb(3,'Ir a Semana')))}
if(!(S.f[t]||[]).length&&n.getHours()>=14&&!pz(t))r.push(row('🍽️','<b>Hoy aún no has apuntado comidas</b>',gb(0,'Ir a Dieta')));
{const q=hgDue();if(q.length)r.push(row('💈','<b>Toca:</b> '+q.join(', '),gb(3,'Ir a Semana')));const hd=HGD().it.filter(x=>x.t=='d'&&!(HGD().lg[x.i]||[]).includes(t));if(n.getHours()>=20&&hd.length)r.push(row('🧴','<b>Te faltan hoy:</b> '+hd.map(x=>esc(x.n)).join(', '),gb(3,'Ir a Semana')))}
if(new Date(t).getUTCDay()==0&&!(S.ci||{})[mon(t)])r.push(row('🏁','<b>Hoy es domingo:</b> cierra la semana con la IA',gb(3,'Ir a Semana')));
{const lb=S.lb||0,dd=Math.floor((Date.now()-lb)/864e5);if(!lb||dd>=30)r.push(row('💾','<b>'+(lb?'Hace '+dd+' días sin copia de seguridad':'Aún no has hecho copia de seguridad')+'</b>',`<button style="padding:5px 10px;font-size:13px" onclick="exp()">Guardar copia</button>`))}
{if(adjCard())r.push(row('⚖️','<b>Toca revisar tus calorías</b> (ritmo de peso claro)',go1))}
return r.length?`<div class="card" id="rmb" style="border-left:4px solid var(--t);padding:8px 14px"><details${RMO?' open':''} ontoggle="RMO=this.open"><summary style="cursor:pointer"><b>🔔 Pendientes · ${r.length}</b></summary>${r.join('')}</details></div>`:''}
function supAll(){const s=S.sp,t=td(),c=s.ck[t]=s.ck[t]||[];s.on.forEach(n=>{if(!c.includes(n))c.push(n)});save();mnR()}
function remShow(){const o=$('rmb');if(o)o.remove();{const r=rem();if(r&&$('v'))$('v').insertAdjacentHTML('afterbegin',r)}}
try{const d0=dieta;dieta=function(){d0.apply(this,arguments);remShow()}}catch(e){}
const mon=d=>{const t=new Date(Date.parse(d));t.setUTCDate(t.getUTCDate()-((t.getUTCDay()+6)%7));return t.toISOString().slice(0,10)};
function wkCard(W){const m0=mon(td()),n=W.filter(w=>mon(w.d)==m0).length,g={};W.forEach(w=>{(g[mon(w.d)]=g[mon(w.d)]||[]).push(w.kg)});const wd=[0,1,2,3,4,5,6].map(i=>new Date(Date.parse(m0)+i*864e5).toISOString().slice(0,10)),LB=['L','M','X','J','V','S','D'],ks=Object.keys(g).sort().slice(-6).reverse();return `<div class="card"><div class="wkc" role="img" aria-label="Pesajes de lunes a domingo">${wd.map((d,i)=>{const on=W.some(w=>w.d==d);return `<span class="wkd"><i class="${on?'on':''}${d==td()?' hoy':''}">${on?'✓':''}</i><small>${LB[i]}</small></span>`}).join('')}</div>${ks.length?`<div class="item" onclick="PGO.wks=!PGO.wks;{const y=scrollY;peso();scrollTo(0,y)}" style="cursor:pointer;display:flex;align-items:center;gap:8px"><b style="flex:1">Peso medio por semanas</b><span class="mut">${fm(g[ks[0]].reduce((a,x)=>a+x,0)/g[ks[0]].length)} kg</span><span style="opacity:.6;transition:transform .2s;transform:rotate(${PGO.wks?180:0}deg)">▾</span></div>`:''}${PGO.wks?ks.map(k=>`<div class="item"><span>Semana del ${k}</span><span>${fm(g[k].reduce((a,x)=>a+x,0)/g[k].length)} kg <span class="mut">(${g[k].length})</span></span></div>`).join(''):''}</div>`}
function fatCard(b){const z=b<6?['Muy bajo','Demasiado poca grasa: no conviene mantenerlo. Riesgo hormonal, de defensas bajas y de lesiones.','#D64545']:b<10?['Bajo','Zona de precaución: muy definido, vigila energía y descanso. Abdominales muy visibles y grasa visceral mínima.','#C98A1B']:b<=20?['Óptimo','Zona verde: rango saludable y atlético. Riesgo cardiovascular bajo; los abdominales empiezan a marcarse hacia el 12-15 %.','var(--ok)']:b<=25?['Algo alto','Zona de precaución: conviene bajar un poco. Abdominales poco visibles y algo de grasa visceral: el riesgo cardiovascular empieza a subir.','#C98A1B']:['Alto','Conviene bajar grasa: tu objetivo está bien enfocado. Más grasa visceral y más riesgo cardiovascular y de diabetes: déficit, fuerza y pasos diarios.','#D64545'],p=Math.min(100,Math.max(0,b/40*100));
 return `<div class="card"><div class="big">~${fm(b)} %</div><div class="mut">grasa estimada (±3-4 %) · <b style="color:${z[2]}">${z[0]}</b>. ${z[1]}</div><div style="position:relative;margin-top:14px;height:12px;border-radius:6px;background:linear-gradient(90deg,#D64545 0 15%,#C98A1B 15% 25%,var(--ok) 25% 50%,#C98A1B 50% 62.5%,#D64545 62.5% 100%)"><i style="position:absolute;left:${p}%;top:-4px;width:4px;height:20px;background:var(--ink);border-radius:2px"></i></div><div class="row mut" style="justify-content:space-between"><span>0 %</span><span>10</span><span>20</span><span>30</span><span>40 %</span></div><div class="mut">Rango óptimo para un hombre: 10-20 %.</div></div>`}
let UNL=false;
async function hs(p){const b=new TextEncoder().encode('plan1:'+p),h=await crypto.subtle.digest('SHA-256',b);return [...new Uint8Array(h)].map(x=>x.toString(16).padStart(2,'0')).join('')}
async function setPin(){const p=$('pw').value;if(!/^\d{4}$/.test(p)){$('pm').textContent='Son 4 números.';return}S.pin=await hs(p);UNL=true;save();peso()}
async function unl(){if(await hs($('pw').value)==S.pin){UNL=true;peso()}else $('pm').textContent='Código incorrecto.'}
function forgot(){if(!confirm('Se borrarán todas las fotos y podrás crear un código nuevo. ¿Seguro?'))return;S.pin='';S.bf=[];S.bo='';save();peso()}
function phCard(){
 if(!S.pin)return `<div class="card"><div class="mut">Tus fotos van protegidas con un código de 4 números. Créalo ahora.</div><div class="row" style="margin-top:8px"><input id="pw" type="password" inputmode="numeric" maxlength="4" placeholder="Código (4 números)"><button onclick="setPin()">Crear código</button></div><div class="mut" id="pm"></div></div>`;
 if(!UNL)return `<div class="card"><div class="mut">🔒 Fotos bloqueadas.</div><div class="row" style="margin-top:8px"><input id="pw" type="password" inputmode="numeric" maxlength="4" placeholder="Código"><button onclick="unl()">Ver fotos</button></div><div class="mut" id="pm"></div><button class="g" style="margin-top:8px" onclick="forgot()">Olvidé el código (borra las fotos)</button></div>`;
 const last=v=>[...S.bf].reverse().find(x=>(x.v||'frente')==v);
 return `<div class="card"><div class="row"><label class="b">Foto de frente<input class="hid" type="file" accept="image/*" onchange="bph(this.files[0],'frente')"></label><label class="b">Foto de lado<input class="hid" type="file" accept="image/*" onchange="bph(this.files[0],'lado')"></label><label class="b">Foto de espalda<input class="hid" type="file" accept="image/*" onchange="bph(this.files[0],'espalda')"></label><button class="g" onclick="UNL=false;peso()">Bloquear</button></div><div class="mut" id="bs" style="margin-top:6px">Una de frente, una de lado y una de espalda al mes, en ayunas por la mañana y con luz natural, a la misma distancia y con la misma ropa. Frente: brazos relajados, pies a la anchura de hombros. Lado: de perfil, cuerpo recto. Espalda: de espaldas, brazos relajados.</div>${['frente','lado','espalda'].map(v=>{const x=last(v);return x?`<div class="mut" style="margin-top:8px">${v} · ${x.d}${x.kg?" · "+fm(x.kg)+" kg":""}${x.kg?" · IMC "+fm(x.kg/3.1684):""}${x.f?" · "+fm(x.f)+" % grasa":""}</div><img class="ph" src="${x.u}" alt="Foto de ${v}">`:''}).join('')}${cmp()}${phAll()}${S.bo?`<div class="tip">${esc(S.bo)}</div>`:''}</div>`}
async function bph(f,v){if(!f)return;const o=$('bs');o.textContent='Guardando foto…';const c=await rs(f,480),pv=[...S.bf].reverse().find(x=>(x.v||'frente')==v);S.bf.push({d:td(),v,u:c.u,kg:lkg(),f:fnow()});S.bf=S.bf.slice(-24);
 if(SM){o.textContent='La IA está mirando tu progreso…';try{const r=await SM.json(`Actúa como entrenador personal. Foto de ${v}. ${pv?'La primera imagen es del '+pv.d+' y la segunda de hoy.':'Es la primera foto de seguimiento.'} Con respeto y de forma concreta: qué mejora se nota (si la hay), qué zonas priorizarías en el entrenamiento de fuerza y un consejo práctico. No opines sobre salud ni sobre el peso corporal, solo de progreso físico y entrenamiento. Máximo 90 palabras. Responde solo JSON: {"opinion":"texto"}`,{images:pv?[d2b(pv.u),c.b]:[c.b],modelTier:'quick'});S.bo=td()+': '+r.opinion}catch(e){S.bo=''}}
 save();peso()}
async function advMed(){const o=$('am');o.hidden=false;o.textContent='Analizando…';const ms=S.m.map(z=>z.d+': '+Object.entries(z.v).map(e=>e[0]+' '+e[1]).join(', ')).join('\n'),ph=UNL?S.bf.slice(-4).map(x=>d2b(x.u)):[];
 try{const o2={modelTier:'quick'};if(ph.length)o2.images=ph;const r=await SM.json(`Eres entrenador personal. Medidas en cm por fecha:\n${ms}\n${ph.length?'Te paso sus últimas fotos de seguimiento (frente y lado).':'No hay fotos esta vez.'} Dime en máximo 90 palabras qué ha crecido o bajado, qué zonas priorizar en el entrenamiento y un consejo práctico. No opines sobre salud ni sobre el peso corporal. Responde solo JSON: {"consejo":"texto"}`,o2);o.textContent=r.consejo}catch(e){o.textContent='No he podido analizarlo ahora.'}}
let CM=td().slice(0,7),CS=td();
const GR=['Empuje','Tracción','Torso','Cuádriceps','Femoral'],gn=t=>/cu[aá]dr/i.test(t)?'Cuádriceps':/femor/i.test(t)?'Femoral':/Torso/.test(t)?'Torso':/Empuje/.test(t)?'Empuje':/Tracci/.test(t)?'Tracción':/Abdom/.test(t)?'Abdominales':null;
function info(d){const c=CAL()[d]||{},t=S.t[d]||'',gs=new Set();if(c.gt)gs.add(gn(c.gt));gs.add(gn(t));Object.keys(S.gh).forEach(k=>{if(S.gh[k].some(x=>x.d==d&&(x.kg||x.r)))gs.add(gn(k.split('|')[0]))});gs.delete(null);return{g:c.g??((gs.size>0||/Fuerza/.test(t))?1:0),c:c.c??(/Spinning|Cardio|Fuerza \+/.test(t)?1:0),gs:[...gs],cal:c}}
function cs(k,v){const c=CAL()[CS]=CAL()[CS]||{};c[k]=v;save();semana();if($('pmd'))dayM(CS)}
function cm(n){const[Y,M]=CM.split('-').map(Number);CM=new Date(Date.UTC(Y,M-1+n,1)).toISOString().slice(0,7);semana()}
const SUPL={Creatina:'3-5 g al día, todos los días. Más fuerza y rendimiento.','Omega-3':'Con comida. Salud del corazón y recuperación.','Multivitamínico':'Cubre carencias, no sustituye a comer bien.','Vitamina D':'Huesos y defensas, sobre todo con poco sol.',Magnesio:'Descanso y calambres, mejor por la noche.','Proteína whey':'Ayuda a llegar a tu proteína diaria.'};let SUO=false;
function supCard(){const s=S.sp=S.sp||{on:['Creatina','Omega-3','Multivitamínico'],ck:{},rm:'09:00'},c=s.ck[td()]||[];return `<details class='card'${SUO?' open':''} ontoggle='SUO=this.open'><summary><b>💊 Suplementos</b> <span class='mut'>${c.length}/${s.on.length} hoy</span></summary>${Object.keys(SUPL).map(n=>{const u=s.on.includes(n);return `<div class='item'><span style='flex:1'><b>${n}</b><br><span class='mut'>${SUPL[n]}</span></span><span class='row' style='flex-wrap:nowrap'>${u?`<label class='mut'><input type='checkbox' style='width:22px;flex:0 0 22px' ${c.includes(n)?'checked':''} onchange="supT('${n}',this.checked)"> hoy</label>`:''}<button class='${u?'':'g'}' style='padding:5px 9px;font-size:13px' onclick="supU('${n}')">${u?'Tomo':'Añadir'}</button></span></div>`}).join('')}<div class='row' style='margin-top:8px;align-items:center'><label style='flex:1'><input type='checkbox' style='width:22px;flex:0 0 22px' ${s.al&&s.al.on?'checked':''} onchange="supAl(this.checked,null)"> ⏰ Alarma diaria</label><input type='time' value='${(s.al&&s.al.h)||'09:00'}' onchange="supAl(null,this.value)" style='flex:0 0 110px'></div><div class='mut' style='margin-top:4px'>Suena y vibra solo con la app abierta; si la tienes cerrada, el aviso te espera arriba en Dieta.</div><div class='mut' style='margin-top:6px'>Si te falta alguno, el aviso sale arriba en Dieta hasta que lo marques. Si tomas medicación, consulta con tu médico.</div></details>`}
function supAl(on,h){const s=S.sp=S.sp||{on:[],ck:{},rm:'09:00'};s.al=s.al||{on:false,h:'09:00',last:''};if(on!==null)s.al.on=on;if(h)s.al.h=h;s.al.last='';save();if(on)try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();qt('⏰ Alarma a las '+s.al.h)}catch(e){}}
setInterval(()=>{try{const s=S.sp;if(!s||!s.al||!s.al.on)return;const n=new Date(),hm=String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');if(hm<s.al.h||s.al.last==td())return;s.al.last=td();save();const f=s.on.filter(x=>!(s.ck[td()]||[]).includes(x));if(!f.length)return;window.bp&&window.bp();try{navigator.vibrate&&navigator.vibrate([200,100,200])}catch(e){}qt('💊 Hora de tus suplementos: '+f.join(', '));remShow()}catch(e){}},20000);
function supT(n,v){const s=S.sp,t=td(),c=s.ck[t]=s.ck[t]||[];if(v&&!c.includes(n))c.push(n);if(!v)s.ck[t]=c.filter(x=>x!=n);save();semana()}
function supU(n){const s=S.sp;s.on=s.on.includes(n)?s.on.filter(x=>x!=n):[...s.on,n];save();semana()}
function supRem(){const s=S.sp;if(!s||!s.on.length)return '';const n=new Date(),hm=String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0'),f=s.on.filter(x=>!(s.ck[td()]||[]).includes(x));return f.length&&hm>=(s.rm||'09:00')?`<div class='tip'>💊 Te faltan hoy: ${f.map(esc).join(', ')}. Márcalos en la pestaña Semana.</div>`:''}
function semana(){mig5();
 const[Y,M]=CM.split('-').map(Number),off=(new Date(Date.UTC(Y,M-1,1)).getUTCDay()+6)%7,nd=new Date(Date.UTC(Y,M,0)).getUTCDate(),cells=Array(off).fill('<span></span>');
 for(let i=1;i<=nd;i++){const d=CM+'-'+String(i).padStart(2,'0'),f=info(d),on=f.g||f.c,bg=f.g&&f.c?'linear-gradient(135deg,#0F8B6D 50%,#E0A100 50%)':f.g?'#0F8B6D':f.c?'#E0A100':'transparent';cells.push(`<button onclick="CS='${d}';semana();dayM('${d}')" aria-label="${d}" style="background:${bg};color:${on?'#fff':'var(--ink)'};text-shadow:${on?'0 0 3px #000':'none'};border:${d==CS?'2px solid var(--acc)':d==td()?'2px dashed var(--mut)':'1px solid var(--ln)'};padding:6px 0">${i}<small style="display:block;font-size:12px;line-height:11px">${DM[dietSt(d)]||'&nbsp;'}${supOk(d)}${enf(d)?'🤒':''}${pzP(d)?'⛱️':''}${mn(d)?'🍚':''}</small></button>`)}
 const f=info(CS),c=f.cal,N=Date.parse(td()),ds=i=>new Date(N-i*864e5).toISOString().slice(0,10),days=[...Array(7)].map((_,i)=>ds(i)),inf=days.map(info),fz=inf.filter(x=>x.g).length,cd=inf.filter(x=>x.c).length,kc=days.reduce((a,d)=>a+(num((CAL()[d]||{}).kc)||0),0),done=new Set(inf.flatMap(x=>x.gs)),miss=GR.filter(x=>!done.has(x));
 let last=null;for(let i=0;i<60;i++){const x=info(ds(i));if(x.g||x.c){last=i;break}}
 const msg=fz>=6?'Has hecho 6 o más días de fuerza. Descansa un día: también es progresar.':(last==null||last>=3)?'Llevas '+(last==null?'varios':last)+' días sin entrenar. Sin drama, pero toca una sesión esta semana, aunque sea de 30 minutos.':fz>=4?'Semana sólida: vas por buen camino.':'Vas bien. Te faltan '+(5-fz)+' sesión(es) de fuerza para cumplir la semana.',
 cov=miss.length?'Esta semana aún no has trabajado: '+miss.join(', ')+'.'+(miss.some(x=>x=='Cuádriceps'||x=='Femoral')?' Dale prioridad a las piernas.':''):'Has cubierto todos los grupos. Bien.';
 const fdays=days.filter(d=>(S.f[d]||[]).length),eat=d=>(S.f[d]||[]).reduce((a,x)=>a+x.k,0),mt=mtg,def=fdays.reduce((a,d)=>a+mt(d)-eat(d),0),ex7=fdays.length?def/fdays.length*7/7700:null;
 const W=[...S.w],avw=(a,b)=>{const x=W.filter(w=>{const d=(N-Date.parse(w.d))/864e5;return d>=a&&d<b});return x.length?x.reduce((s,w)=>s+w.kg,0)/x.length:null},w1=avw(0,7),w0=avw(7,14),r=w1&&w0?w0-w1:null,v=r??ex7,tg=-(S.obj??-0.5),df=v==null?0:v-tg;
 const ev=v==null?'Apunta comidas y pesos esta semana para poder valorarla.':df>0.5?(tg>=0?`Has ${v>=0?'bajado':'subido'} ${fm(Math.abs(v))} kg: estás apretando mucho. Cuidado con perder músculo; sube unas 200 kcal al día.`:`Vas ganando más rápido de lo previsto: parte será grasa. Baja unas 150 kcal al día.`):df<=-0.3?(tg>=0?`Has ${v>=0?'bajado':'subido'} ${fm(Math.abs(v))} kg: estás apretando poco. Baja unas 150 kcal al día o suma una sesión de gym.`:`Vas ganando más despacio de lo previsto: sube unas 150 kcal al día.`):`Has ${v>=0?'bajado':'subido'} ${fm(Math.abs(v))} kg: vas por buen camino.`;
 const ed=`<div class="card"><details open><summary><b>Editar el día</b></summary>${f.gs.length?'<div class="mut">Trabajado: '+f.gs.join(', ')+'</div>':''}<label class="row" style="margin-top:8px"><input type="checkbox" style="flex:0 0 22px;width:22px" ${f.g?'checked':''} onchange="cs('g',this.checked?1:0)"> Fuerza (verde)</label><select aria-label="Grupo trabajado" style="margin:6px 0" onchange="cs('gt',this.value)"><option value="">Grupo trabajado…</option>${['Empuje','Tracción','Torso','Cuádriceps y Gemelo','Femoral','Abdominales'].map(x=>`<option${f.gs.includes(x)?' selected':''}>${x}</option>`).join('')}</select><label class="row" style="margin-top:8px"><input type="checkbox" style="flex:0 0 22px;width:22px" ${f.c?'checked':''} onchange="cs('c',this.checked?1:0)"> Cardio (amarillo)</label><div class="row" style="margin-top:6px"><input inputmode="decimal" placeholder="kcal quemadas (reloj)" value="${c.kc||''}" onchange="cs('kc',num(this.value))"></div><div class="mut">Objetivo de cardio: ~300 kcal en zona 2. Si el día ya lleva cardio en Dieta, se marca solo.</div></details></div>`;
const wm=mon(td()),wdays=[...Array(7)].map((_,i)=>new Date(Date.parse(wm)+i*864e5).toISOString().slice(0,10)),wp=wdays.filter(d=>d<=td()),wfd=wp.filter(d=>(S.f[d]||[]).length),wdf=wfd.reduce((a,d)=>a+mt(d)-eat(d),0),wex=-(S.obj??-0.5)*7700/7*wfd.length,wdi=wdf-wex,sun=new Date(td()).getUTCDay()==0,sg2=wdf>=0?'−':'+',dm=d=>d.slice(8)+'/'+d.slice(5,7);
 window.EDH=ed;$('v').innerHTML=`<div class="card"><div class="row" style="justify-content:space-between"><button class="g" onclick="cm(-1)" aria-label="Mes anterior">‹</button><b>${new Date(Date.UTC(Y,M-1,1)).toLocaleDateString('es-ES',{month:'long',year:'numeric',timeZone:'UTC'})}</b><button class="g" onclick="cm(1)" aria-label="Mes siguiente">›</button></div><div class="grid" style="grid-template-columns:repeat(7,1fr);gap:4px;margin-top:8px">${['L','M','X','J','V','S','D'].map(x=>`<span class="mut" style="text-align:center">${x}</span>`).join('')}${cells.join('')}</div><details style="margin-top:8px"><summary class="mut" style="cursor:pointer;font-size:12px">ℹ️ Leyenda · toca un día para editarlo</summary><div class="mut" style="margin-top:4px;font-size:12px">Verde: fuerza · Amarillo: cardio · Mitad y mitad: las dos · Sin color: descanso · ⛱️ pausa · 🤒 enfermo · 🍚 mantenimiento · 💊 suplementos.</div></details><div style="display:flex;gap:6px;margin-top:10px">${[['pzO()','🌴','Pausa',pzP(td())],['enO()','🤒','Enfermo',enf(td())],['mnO()','🍚','Mantenim.',mn(td())]].map(x=>`<button class="g" style="flex:1;min-width:0;padding:8px 2px;min-height:0;font-size:15px;font-weight:600;line-height:1.25;${x[3]?'outline:2px solid #22C55E;outline-offset:-2px':''}" onclick="${x[0]}"><span style="display:block;font-size:20px">${x[1]}</span>${x[2]}${x[3]?'<span style="display:block;font-size:12.5px;color:#22C55E">activo hoy</span>':''}</button>`).join('')}</div></div>
 <div class="card"><b>${sun?'Cierre de la semana':'Semana de lunes a domingo'}</b><div class="mut">${dm(wm)} al ${dm(wdays[6])} · ${wfd.length} de ${wp.length} día(s) con comida apuntada</div><div class="big" style="font-size:30px">${wfd.length?sg2+Math.round(Math.abs(wdf)):'—'} kcal</div><div class="mut">${wfd.length?(wdf>=0?'dejado de consumir':'de más')+' frente a tu gasto (≈ '+fm(Math.abs(wdf)/7700)+' kg de grasa '+(wdf>=0?'menos':'más')+')':'Apunta tus comidas para ver el balance'}</div>${wfd.length?`<div class="tip">${sun?'Esta semana has acumulado ':'Llevas '}${sg2}${Math.round(Math.abs(wdf))} kcal, ≈ ${fm(Math.abs(wdf)/7700)} kg. Para ${wfd.length} día(s) tu objetivo (${fm(Math.abs(S.obj??-0.5))} kg/semana) eran ${Math.round(Math.abs(wex))} kcal: estás <b>${Math.abs(wdi)<150?'justo en tu objetivo':wdi>0?'por encima (más déficit del previsto)':'por debajo (menos déficit del previsto)'}</b>${Math.abs(wdi)<150?'':' por '+Math.round(Math.abs(wdi))+' kcal'}.</div>`:''}${wfd.length&&wp.length>wfd.length?`<div class="mut">Hay ${wp.length-wfd.length} día(s) sin comidas apuntadas que no cuentan.</div>`:''}</div>${ciH()}${supCard()}${hgCard()}`}
const V={},kf=i=>gd+'|'+GG()[gd][i][0]+'|'+(V[gd+i]||0);
function selV(i,j){V[gd+i]=j;gym()}
function gym(){mig5();mig6();mig7();mig8();mig9();
 if(!S.rHid){S.rHid=1;S.hid=[...(S.hid||[]),'Cuádriceps y Gemelo'];save()}
 if(!S.rEmp){S.rEmp=1;if(!GG().Empuje){S.ge={Empuje:JSON.parse(JSON.stringify(G.Empuje)),...gE()};save()}}
 const g=GG(),ks=Object.keys(g);if(!g[gd])gd=ks[0]||'';
 let MAPH=mapM(),h=MAPH.replace('<div class="card">','<div class="card mmain">')+`<div class="card hero"><div style="font-size:13px;letter-spacing:.1em;text-transform:uppercase;opacity:.85">Entrenamiento</div><div class="big" style="font-size:34px;margin-bottom:8px">${esc(gd)}</div>${(()=>{const G=g[gd]||[],n=G.filter((e,i)=>(S.gh[kf(i)]||[]).some(z=>z.d==td())).length;return G.length?`<div class="gpg"><span>${n}/${G.length} hoy</span><i><u style="width:${Math.round(n/G.length*100)}%"></u></i></div>`:''})()}${psel(ks)}<select aria-label="Día de gimnasio" onchange="gd=this.value;gym()">${dsel(ks)}</select><details class="gtp"><summary>ℹ️ Cómo funciona</summary><div>Rango: 6-12 repeticiones en multiarticulares y 10-12 en aislamientos. Al llegar a 12, subes peso. Si el gimnasio está lleno, elige una alternativa: cada una guarda sus propios kilos. Mantén pulsado un ejercicio para cambiar sus series, descanso, nombre u orden, o borrarlo.</div></details>${(()=>{const o=ED||!!PGO.ghr;return `<div onclick="PGO.ghr=!PGO.ghr;{const y=scrollY;gym();scrollTo(0,y)}" style="display:flex;align-items:center;gap:8px;margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,.2);cursor:pointer"><b style="flex:1">🧰 Herramientas de rutina</b><span class="mut" style="opacity:.8">${o?'abierto':'plegado'}</span><span style="opacity:.8;transition:transform .2s;transform:rotate(${o?180:0}deg)">▾</span></div>${o?`<div class="row" style="margin-top:8px"><button class="${ED?'':'g'}" onclick="ed()">✏️ ${ED?'Terminar edición':'Editar rutina'}</button><button class="g" onclick="xl()">📊 Excel</button><button class="g" onclick="opLib()">➕ Ejercicios</button></div><div class="row" style="margin-top:8px"><button class="g" onclick="crP()">🛠 Crear rutina personalizada</button><button class="g" onclick="opTpl()">📋 Rutinas predeterminadas</button></div>${ED?`<div class="row" style="margin-top:8px"><button class="g" onclick="rd()">✏️ Renombrar día</button><button class="g" onclick="xd()">🗑 Borrar día</button><button class="g" onclick="xet()">🗑 Borrar ${tpOf(gd)?'este entreno':'toda mi rutina'}</button>${Object.keys(G).filter(d=>d!='Abdominales'&&!g[d]&&!(S.hid||[]).includes(d)).map(d=>`<button class="g" onclick="rsd('${d}')">↩ Recuperar «${d}»</button><button class="g" aria-label="Ocultar" onclick="(S.hid=S.hid||[]).push('${d}');save();gym()">✕</button>`).join('')}</div>`:''}`:''}`})()}</div>`;
 if(GG().Abdominales)h+=gd=='Abdominales'?(GP&&GP!='Abdominales'&&GG()[GP]?`<button id="wab" class="g" onclick="gd=GP;gym()">↩ Volver a ${esc(GP)}</button>`:''):`<button id="wab" class="g" onclick="GP=gd;gd='Abdominales';abT();gym()">🔥 Abdominales hoy</button>`;
 const vd={};Object.keys(S.gh).forEach(k=>{const p=k.split('|');if(p[0]!=gd)return;const ex=(g[gd]||[]).find(e=>e[0]==p[1]),se=ex?ex[4]:3;S.gh[k].forEach(x=>vd[x.d]=(vd[x.d]||0)+x.kg*x.r*se*LF(k))});const vp=Object.keys(vd).sort().map(d=>({d,v:Math.round(vd[d])}));
 let VOLH=vp.length>1?pgo('gvol','📊 Volumen de '+esc(gd),'',`<div class="mut">kg × reps × series de toda la rutina, por sesión</div>${barc('bvd',vp.map(x=>({d:x.d,vol:x.v})),[{l:'Volumen',u:'kg',f:x=>x.vol}],0,'','Volumen de '+gd)}`,'gym'):'';
 (g[gd]||[]).forEach((e,i)=>{const vi=V[gd+i]||0,al=[e[0],...e[5]],nm=al[vi],key=kf(i),l=S.g[key]||(vi?{kg:0,r:0}:{kg:e[1],r:e[2]}),lo=e[3]?10:6,R=rt(gd,e),H=(S.gh[key]||[]).map(x=>x.kg);
  const tip=e[6]?'Segundos de trabajo: parte de 30 y súbelos cuando te sobre. Descanso: 45 s.':bw(e)?'Solo repeticiones (peso corporal): intenta sumar 2 cada semana (siempre pares).':xdT(i,key)||stl(key,i)||(!l.r?'Apunta tus kilos y repeticiones de hoy.':(dlA()||!l.kg?(l.r>=12?'Rango completo: sube peso y vuelve hacia '+lo+'-'+(lo+2)+' repeticiones.':'Objetivo: sumar 2 repeticiones (siempre pares, rango '+lo+'-12).'):nxT(key,l,lo)));
  const ld=e[6]?(l.r||'—')+' s':bw(e)?(l.r||'—')+' reps':(l.kg?fm(l.kg)+' kg':'—')+' × '+(l.r||'—')+(l.kg&&LF(key)==2?' ('+fm(l.kg*2)+' kg en total)':''),pr=(S.gh[key]||[]).reduce((a,x)=>x.kg>a.kg||(x.kg==a.kg&&x.r>a.r)?x:a,{kg:0,r:0}),dn=(S.gh[key]||[]).some(z=>z.d==td()),fld=(id,lb,ph,v)=>`<label class="exf1"><span>${lb}</span><input id="${id}" class="wl" readonly placeholder="${ph}" value="${v||''}" onclick="wo(${i})"></label>`;
  h+=`<div class="card ex${dn?' exd':''}" data-i="${i}"><div class="exh"><div class="ext"><b>${esc(nm)}</b><span class="exm">${e[4]} series · Último ${ld}${pr.kg?' · 🏆 '+fm(pr.kg)+' kg × '+pr.r:''}</span>${doneChip(key)}</div></div>${ED?edr(i):''}${al.length>1?`<div class="exv" role="group" aria-label="Variante">${al.map((a,j)=>`<button class="${j==vi?'on':''}" onclick="selV(${i},${j})">${j?'Alt. '+j:'Principal'}</button>`).join('')}</div>`:''}${mal(al[vi],'','g'+i)}${mjH(nm)}<div class="exo">🎯 ${tip}</div><div class="exi">${e[6]?`<input id="gk${i}" type="hidden" value="0"><label class="exf1"><span>SEG</span><input id="gr${i}" inputmode="numeric" placeholder="seg" value="${l.r||e[2]||30}"></label>`:bw(e)?`<input id="gk${i}" type="hidden" value="0">${fld('gr'+i,'REPS','reps',l.r)}`:fld('gk'+i,'KG','kg',l.kg)+fld('gr'+i,'REPS','reps',l.r)}<button class="exs" onclick="cf('¿Seguro que quieres guardar?',()=>sg(${i}),'Sí, guardar')" aria-label="Guardar">Guardar</button></div><div class="exr"><button class="g" onclick="tm(pm($('gs${i}').value)||${R})">⏱ Descanso</button><input id="gs${i}" class="rs" inputmode="decimal" value="${tf(R)}" onchange="srt(${i},this.value);this.value=tf(pm(this.value)||${R})" aria-label="Descanso en minutos y segundos"><span class="mut">min</span><a class="exl" href="https://www.youtube.com/results?search_query=${encodeURIComponent(nm+' ejercicio técnica')}" target="_blank" rel="noopener">▶️ Vídeo</a></div>${(()=>{const ar=al.map((a,j)=>{const z=S.g[gd+'|'+e[0]+'|'+j]||(j?null:{kg:e[1],r:e[2]}),ls=z&&(z.kg||z.r)?(e[6]?z.r+' s':bw(e)?z.r+' reps':(z.kg?fm(z.kg)+' kg × ':'')+z.r):'sin registros';return `<div class="item" style="align-items:center"><span style="flex:1;min-width:0"><b>${esc(a)}</b>${j==vi?' <span class="mut">· en uso</span>':''}<br><span class="mut">${j?'Alternativa '+j:'Principal'} · último: ${ls}</span></span><button class="${j==vi?'':'g'}" style="padding:5px 12px" onclick="selV(${i},${j})">${j==vi?'✔':'Usar'}</button></div>`}).join('');return `<details class="exalt"><summary>🔁 Ver alternativas${al.length>1?' ('+(al.length-1)+')':''}</summary>${al.length>1?ar:'<div class="mut" style="padding:6px 2px">Aún no hay alternativas. Pulsa ✏️ Editar rutina para añadirlas.</div>'}</details>`})()}${(S.gh[key]||[]).length>1?'<details><summary>📈 Progresión · '+S.gh[key].length+' sesiones</summary>'+barc('bx'+i+'_'+vi,S.gh[key].slice().sort((a,b)=>a.d<b.d?-1:1),(e[6]||bw(e))?[{l:e[6]?'Segundos':'Repeticiones',u:e[6]?'seg':'reps',f:x=>x.r}]:[{l:'Peso máx.',u:'kg',f:x=>x.kg},{l:'Reps',u:'reps',f:x=>x.r},{l:'Volumen',u:'kg',f:(x,se)=>Math.round(x.kg*x.r*se*LF(key))}],e[4],key,nm)+'</details>':'<div class="exn">📈 Con 2 sesiones guardadas aparecen las gráficas de peso, repeticiones y volumen.</div>'}</div>`});
 if(!(g[gd]||[]).length)h+=`<div class="card mut">Este día está vacío. Pulsa 🛠 Crear rutina personalizada y elige ejercicios por grupo muscular.</div>`;
 h+=serCard()+recCard()+VOLH;
 
 
 $('v').innerHTML=h}
const LIB={
'Pecho':[['Press banca con barra',0],['Press banca inclinado con mancuernas',0],['Press de pecho en máquina',0],['Press declinado',0],['Fondos en paralelas',0],['Aperturas con mancuernas',1],['Aperturas en peck deck',1],['Cruce de poleas',1],['Pullover con mancuerna',1],['Flexiones',3]],
'Espalda':[['Jalón al pecho',0],['Jalón agarre estrecho',0],['Remo con barra',0],['Remo con mancuerna',0],['Remo en polea baja',0],['Remo en máquina',0],['Remo en punta T',0],['Peso muerto',0],['Pullover en polea',1],['Hiperextensiones',1],['Dominadas',3]],
'Hombro':[['Press militar con barra',0],['Press de hombro con mancuernas',0],['Press de hombro en máquina',0],['Remo al mentón',0],['Elevaciones laterales',1],['Elevaciones laterales en polea',1],['Elevaciones frontales',1],['Pájaros con mancuernas',1],['Pájaros en peck deck',1],['Face pull',1],['Encogimientos de trapecio',1]],
'Bíceps':[['Curl con barra',1],['Curl con barra Z',1],['Curl con mancuernas',1],['Curl martillo',1],['Curl predicador',1],['Curl en polea',1],['Curl inclinado',1],['Curl concentrado',1]],
'Tríceps':[['Press francés',1],['Extensión en polea (pushdown)',1],['Extensión con cuerda',1],['Extensión sobre la cabeza con mancuerna',1],['Press cerrado',0],['Fondos en máquina',0],['Patada de tríceps',1],['Fondos en banco',3]],
'Cuádriceps':[['Sentadilla con barra',0],['Sentadilla en multipower',0],['Prensa de piernas',0],['Hack squat',0],['Sentadilla búlgara',0],['Zancadas',0],['Sentadilla goblet',0],['Step-up',0],['Extensión de cuádriceps',1],['Sissy squat',3]],
'Femoral':[['Peso muerto rumano',0],['Peso muerto con piernas rígidas',0],['Buenos días',0],['Curl femoral tumbado',1],['Curl femoral sentado',1],['Curl nórdico',3]],
'Glúteo':[['Hip thrust',0],['Sentadilla sumo',0],['Zancada caminando',0],['Patada de glúteo en polea',1],['Patada de glúteo en máquina',1],['Abductor',1],['Puente de glúteo',3]],
'Gemelo':[['Gemelos de pie en máquina',1],['Gemelos sentado',1],['Gemelos en prensa',1],['Elevación de talones a una pierna',3]],
'Abdominales':[['Crunch en polea',1],['Russian twist',1],['Woodchopper en polea',1],['Crunch',3],['Crunch inverso',3],['Elevaciones de piernas colgado',3],['Rueda abdominal',3],['Bicicleta abdominal',3],['Mountain climbers',3],['Plancha',2],['Plancha lateral',2],['Hollow hold',2]],
'Antebrazo':[['Curl de muñeca',1],['Curl inverso',1],['Paseo del granjero',2]]};

{const X={
'Pecho':[['Press banca con mancuernas',0],['Press banca inclinado con barra',0],['Press declinado con mancuernas',0],['Press en máquina inclinado',0],['Press en máquina Smith',0],['Press con agarre neutro',0],['Fondos asistidos en máquina',0],['Aperturas inclinadas con mancuernas',1],['Aperturas en polea baja',1],['Cruce de poleas alto',1],['Cruce de poleas bajo',1],['Aperturas en máquina',1],['Press en suelo con mancuernas',0],['Flexiones inclinadas',3],['Flexiones declinadas',3],['Flexiones diamante',3],['Flexiones con palmada',3],['Press landmine',0]],
'Espalda':[['Dominadas agarre supino',3],['Dominadas agarre neutro',3],['Dominadas asistidas en máquina',0],['Jalón agarre supino',0],['Jalón a una mano en polea',0],['Jalón tras nuca',0],['Remo con barra agarre supino',0],['Remo Pendlay',0],['Remo en máquina Hammer',0],['Remo en polea a una mano',0],['Remo con mancuerna en banco inclinado',0],['Remo en Smith',0],['Remo invertido (australiano)',3],['Remo en polea alta',0],['Peso muerto sumo',0],['Peso muerto con barra hexagonal',0],['Buenos días con barra',0],['Pullover con barra',1],['Rack pull',0],['Superman',3],['Extensión lumbar en banco romano',1]],
'Hombro':[['Press Arnold',0],['Press de hombro sentado con barra',0],['Press de hombro en Smith',0],['Press militar con mancuernas de pie',0],['Push press',0],['Elevaciones laterales sentado',1],['Elevaciones laterales a una mano en polea',1],['Elevaciones frontales con barra',1],['Elevaciones frontales en polea',1],['Elevaciones frontales con disco',1],['Pájaros en polea',1],['Pájaros inclinado en banco',1],['Remo al mentón con mancuernas',0],['Remo al mentón en polea',0],['Encogimientos con barra',1],['Encogimientos con mancuernas',1],['Rotación externa con polea',1],['Y-raise en polea',1],['Flexiones pike',3],['Press landmine a una mano',0]],
'Bíceps':[['Curl con mancuernas alterno',1],['Curl con mancuernas sentado',1],['Curl martillo con cuerda',1],['Curl martillo cruzado',1],['Curl Zottman',1],['Curl araña',1],['Curl en banco Scott con barra Z',1],['Curl en banco Scott con mancuerna',1],['Curl en polea baja con barra',1],['Curl en polea alta (doble bíceps)',1],['Curl con cuerda en polea baja',1],['Curl 21',1],['Curl en máquina',1],['Curl inverso con barra',1],['Curl a una mano en polea',1],['Dominadas supinas',3]],
'Tríceps':[['Press francés con mancuernas',1],['Press francés en polea',1],['Extensión en polea con barra recta',1],['Extensión en polea a una mano',1],['Extensión en polea sobre la cabeza',1],['Extensión con barra Z sobre la cabeza',1],['Extensión con mancuernas tumbado',1],['Press cerrado con mancuernas',0],['Press cerrado en Smith',0],['Fondos en paralelas (tríceps)',0],['Fondos entre bancos',3],['Flexiones cerradas',3],['Patada de tríceps en polea',1],['Extensión en máquina',1],['Jalón de tríceps agarre invertido',1]],
'Cuádriceps':[['Sentadilla frontal',0],['Sentadilla en máquina',0],['Sentadilla con pausa',0],['Sentadilla box',0],['Sentadilla pistol',3],['Sentadilla con salto',3],['Sentadilla sissy en máquina',1],['Prensa de piernas a una pierna',0],['Prensa 45 grados',0],['Prensa horizontal',0],['Zancada hacia atrás',0],['Zancada lateral',0],['Zancada en Smith',0],['Zancada con barra',0],['Subida al cajón con mancuernas',0],['Extensión de cuádriceps a una pierna',1],['Sentadilla en pared',2],['Sentadilla búlgara en Smith',0],['Sentadilla zercher',0],['Peso muerto con barra hexagonal (cuádriceps)',0],['Sentadilla goblet con pausa',0]],
'Femoral':[['Peso muerto rumano con mancuernas',0],['Peso muerto rumano a una pierna',0],['Peso muerto rumano en Smith',0],['Curl femoral a una pierna',1],['Curl femoral de pie en máquina',1],['Curl femoral con balón',3],['Curl femoral en polea',1],['Curl femoral con mancuerna',1],['Hiperextensión de cadera',1],['Good morning sentado',0],['Swing con kettlebell',0],['Puente de glúteo a una pierna con talón apoyado',3],['Deslizamientos de femoral con discos',3],['Extensión de cadera en polea',1]],
'Glúteo':[['Hip thrust con barra',0],['Hip thrust a una pierna',0],['Hip thrust en Smith',0],['Puente de glúteo con barra',0],['Patada de glúteo con tobillera',1],['Patada de glúteo a cuatro patas',3],['Patada lateral en polea',1],['Abducción con banda',1],['Abductor en máquina sentado',1],['Sentadilla sumo con mancuerna',0],['Sentadilla con banda en rodillas',0],['Zancada reversa con énfasis glúteo',0],['Step-up lateral',0],['Peso muerto rumano énfasis glúteo',0],['Clamshell con banda',3],['Fire hydrant',3],['Donkey kick',3],['Pull-through en polea',1],['Extensión de cadera en máquina',1],['Sentadilla en máquina Smith pies adelantados',0]],
'Gemelo':[['Gemelos de pie con mancuerna a una pierna',1],['Gemelos de pie en Smith',1],['Gemelos en prensa a una pierna',1],['Gemelos en máquina burro',1],['Gemelos sentado a una pierna',1],['Elevación de talones en escalón',3],['Saltos de comba',3],['Caminata de puntillas',3],['Tibial anterior (elevación de punta)',1],['Gemelos con mancuernas en escalón',1]],
'Abdominales':[['Crunch con peso',1],['Crunch en máquina',1],['Crunch declinado',3],['Crunch bicicleta',3],['Crunch con giro',3],['Crunch oblicuo',3],['Elevación de piernas tumbado',3],['Elevación de piernas en banco',3],['Elevación de rodillas colgado',3],['Elevación de piernas en paralelas',3],['Dragon flag',3],['Ab wheel de rodillas',3],['Sit-up',3],['Toques de talón',3],['Tijeras (flutter kicks)',3],['V-ups',3],['Plancha con toque de hombro',3],['Plancha con elevación de pierna',2],['Plancha con brazos extendidos',2],['Plancha en TRX',2],['Pallof press',1],['Inclinaciones laterales con mancuerna',1],['Leñador en polea alta',1],['Leñador en polea baja',1],['Giros rusos con balón medicinal',1],['Dead bug',3],['Bird dog',3],['Escaladores lentos',3],['Hollow rock',3],['Abdominal en máquina de torsión',1]],
'Antebrazo':[['Curl de muñeca con barra',1],['Curl de muñeca con mancuerna',1],['Curl inverso con barra Z',1],['Extensión de muñeca',1],['Colgarse de la barra',2],['Agarre con pinza (disco)',2],['Rodillo de muñeca',1],['Curl martillo para antebrazo',1]],
'Cardio y funcional':[['Burpees',3],['Salto al cajón',3],['Kettlebell swing',0],['Thruster con mancuernas',0],['Battle ropes',2],['Remo en máquina (cardio)',2],['Trineo (empuje)',2],['Saltos de tijera',3],['Mountain climbers rápidos',3],['Limpieza con kettlebell',0],['Turkish get-up',0],['Wall ball',0]]
};
Object.keys(X).forEach(g=>{LIB[g]=LIB[g]||[];const h=new Set(LIB[g].map(e=>e[0]));X[g].forEach(e=>{if(!h.has(e[0])){LIB[g].push(e);h.add(e[0])}})})}
const LTY=['Multiarticular','Aislamiento','Tiempo','Peso corporal'];let LG='Pecho',LQ='';
const DD=s=>s.split('|').map(x=>{const i=x.indexOf(':');return[x.slice(0,i),x.slice(i+1)]});
const TPL=[
['TP-A','Torso/Pierna A · Fuerza + Hipertrofia (4 días)',`Básicos T1/P1 RIR 1-2: +2,5 kg al completar todas las series. Accesorios RIR 0-1, doble progresión. Deload cada 6 semanas.`,DD(`Torso 1:Press banca,4,5,180;Remo con barra,4,6,150;Press militar sentado,3,7,150;Dominadas/jalón,3,8,150;Elevación lateral polea,3,12,90;Curl inclinado,2,10,90;Tríceps sobre cabeza polea,2,10,90|Pierna 1:Sentadilla trasera,4,5,210;Peso muerto rumano,3,7,180;Prensa,3,10,150;Curl femoral sentado,3,10,120;Gemelo de pie,4,10,90;Abdominal polea,3,12,45|Torso 2:Press inclinado mancuernas,3,10,120;Remo pecho apoyado,3,10,120;Press hombro máquina,3,10,120;Jalón neutro,3,10,120;Aperturas polea,2,12,75;Pájaros,2,12,75;Curl martillo,2,10,75;Press francés,2,10,75|Pierna 2:Hack,3,10,150;Zancada búlgara,3,8,120;Hip thrust,3,10,120;Curl femoral tumbado,3,10,90;Extensión cuádriceps,2,12,90;Gemelo sentado,3,12,75`)],
['TP-B','Torso/Pierna B · Hipertrofia y tensión (4 días)',`RIR 1-0 en máquinas y poleas. Reps primero, carga después. Deload cada 6 semanas.`,DD(`Torso 1:Press pecho máquina convergente,3,8,120;Press inclinado Smith,3,10,120;Jalón neutro,3,10,120;Remo máquina convergente,3,10,120;Elevación lateral polea unilateral,4,12,60;Pullover polea,2,12,75;Tríceps sobre cabeza polea,3,10,75;Curl polea,3,10,75|Pierna 1:Hack,3,8,150;Extensión cuádriceps,3,10,90;Curl femoral sentado,3,10,90;Abductor máquina,2,12,60;Gemelo en prensa,4,10,75;Abdominal máquina,3,10,45|Torso 2:Cruce polea,3,12,75;Press hombro máquina,3,8,120;Remo polea baja,3,10,120;Jalón agarre ancho,3,10,120;Pájaros polea,3,12,60;Curl predicador,3,10,75;Extensión cuerda,3,10,75|Pierna 2:Sentadilla Smith,3,8,150;RDL mancuernas,3,8,150;Curl femoral tumbado,3,10,90;Hip thrust máquina,3,10,120;Gemelo sentado,3,12,75`)],
['PPL-A','PPL A · Clásico peso libre (6 días o PPL-Desc-PPL)',`Básicos RIR 1-2 (+2,5 kg), resto doble progresión. 1 día libre cada 3 de entreno.`,DD(`Push:Press banca,4,5,180;Press inclinado mancuernas,3,8,120;Press militar,3,6,150;Elevación lateral,4,12,60;Fondos,3,8,120;Press francés,3,10,90|Pull:Dominadas,4,6,150;Remo con barra,4,6,150;Remo mancuerna,3,8,120;Face pull,3,12,60;Curl barra Z,3,8,90;Curl martillo,2,10,75|Legs:Sentadilla,4,5,180;Peso muerto rumano,3,6,180;Prensa,3,10,150;Curl femoral,3,10,90;Gemelo de pie,4,10,75;Abdominales colgado,3,10,45`)],
['PPL-B','PPL B · Hipertrofia moderna (poleas y máquinas)',`RIR 0-1 en aislamiento; reps primero y luego carga. Poca fatiga articular, aguanta 6 días.`,DD(`Push:Press inclinado máquina,3,8,120;Cruce polea baja-alta,3,10,75;Press hombro máquina,3,8,120;Elevación lateral polea,4,12,60;Tríceps sobre cabeza polea,3,10,75;Extensión cuerda,2,12,60|Pull:Jalón neutro,4,8,120;Remo pecho apoyado,3,8,120;Pullover polea,3,10,75;Pájaros polea,3,12,60;Curl banco inclinado,3,10,75;Curl polea,2,12,60|Legs:Hack,3,6,150;Prensa pies altos,3,8,120;Extensión cuádriceps,3,12,90;Curl femoral sentado,4,8,90;RDL mancuernas,2,8,150;Gemelo sentado,3,12,60`)],
['HIT-A','Heavy Duty A · Split 3 días',`1 serie al FALLO tras 1-2 calentamientos; tempo 2" sube / 4" baja. Rest-pause (15" +2-4 reps), negativas o drop-set: máx. 2 por sesión. 5-7 días entre sesiones del mismo grupo. +5 % al pasar el techo.`,DD(`Torso:Press inclinado máquina,1,6,180;Pullover máquina,1,8,180;Jalón supino,1,6,180;Remo máquina,1,6,150|Pierna:Prensa,1,10,210;Curl femoral,1,8,180;Extensión cuádriceps,1,10,180;Gemelo,1,10,120|Brazos-Hombro:Press hombro máquina,1,6,180;Elevación lateral,1,10,120;Curl,1,6,120;Tríceps polea,1,6,120`)],
['HIT-B','Heavy Duty B · Upper/Lower alta frecuencia',`Ciclo Upper-Lower-Desc-Desc (cada músculo cada ~4 días). 1 serie máxima absoluta, máx. 1-2 técnicas extra por sesión. +5 % al pasar el techo.`,DD(`Upper:Press inclinado máquina,1,6,150;Jalón neutro,1,6,150;Press hombro máquina,1,6,150;Remo máquina,1,6,150;Curl,1,8,120;Tríceps polea,1,8,120|Lower:Prensa,1,10,180;RDL,1,8,180;Curl femoral,1,8,150;Extensión cuádriceps,1,10,150;Gemelo,1,10,120;Abdominal máquina,1,10,60`)],
['FB-A','Full Body A · Patrones fundamentales (3 días)',`L-X-V con 1 día libre entre sesiones. Básicos RIR 1-2 (+2,5 kg), resto doble progresión.`,DD(`Día 1:Sentadilla,3,5,180;Press banca,3,6,180;Remo con barra,3,8,150;Press mancuernas,2,8,120;Curl femoral,2,10,90|Día 2:Peso muerto rumano,3,6,180;Press inclinado mancuernas,3,8,120;Dominadas/jalón,3,6,150;Prensa,2,10,120;Elevación lateral,3,12,60;Gemelo,3,12,75|Día 3:Hack/sentadilla frontal,3,8,150;Press militar,3,6,150;Remo polea,3,10,120;Hip thrust,3,8,120;Fondos,2,8,120;Curl bíceps,2,10,75`)],
['FB-B','Full Body B · A-B-A Powerbuilding (3 días)',`Alterna A-B-A / B-A-B. 80 % 1RM ≈ RIR 2-3 en 5 reps. S3 al 82,5-85 %, S4 deload al 70 %; luego +2,5 kg (tren superior) o +5 kg (inferior).`,DD(`Día A:Sentadilla 80%,4,5,180;Press banca 80%,4,5,180;Remo con barra,3,8,120;Curl femoral,3,10,90;Elevación lateral,3,12,60;Tríceps polea,3,12,60|Día B:Peso muerto 80%,3,5,210;Press militar 80%,4,5,180;Dominadas/jalón,4,6,150;Prensa/zancada,3,8,120;Press inclinado mancuernas,3,8,120;Curl bíceps,3,10,75`)],
['PB-A','Powerbuilding A · Fuerza y volumen separados (4 días)',`Fuerza RPE 8-9 (+2,5 kg si completas todo con RPE ≤9). Hipertrofia RIR 0-1, doble progresión. Semana 4 deload.`,DD(`Fuerza pierna:Sentadilla 85-90%,5,3,240;Peso muerto rumano,3,5,180;Prensa,3,8,150;Gemelo,3,10,75|Fuerza torso:Press banca 85-90%,5,3,240;Remo Pendlay,4,5,180;Press militar,3,5,180;Dominadas lastradas,3,5,150|Hipertrofia pierna:Hack,4,8,150;Zancada búlgara,3,10,120;Curl femoral,4,10,90;Extensión cuádriceps,3,12,75|Hipertrofia torso:Press inclinado mancuernas,4,8,120;Jalón,3,10,120;Remo polea,3,10,120;Elevación lateral,4,12,60;Curl,3,10,75;Tríceps polea,3,10,75`)],
['PB-B','Powerbuilding B · Ondulante semanal (4 días)',`S1 RPE 7, S2 RPE 8, S3 RPE 9, S4 deload. Pesados con 3-4' de descanso.`,DD(`Lower pesado:Sentadilla,5,3,240;Peso muerto rumano,3,6,180;Prensa,2,8,150;Gemelo,3,10,75|Upper pesado:Press banca,5,3,240;Dominadas lastradas,4,5,180;Press militar,3,5,180;Curl,2,8,75;Tríceps polea,2,8,75|Lower volumen:Sentadilla frontal/hack,4,8,150;Hip thrust,3,10,120;Curl femoral,4,12,90;Extensión cuádriceps,3,12,75|Upper volumen:Press inclinado mancuernas,4,8,120;Remo/jalón,4,10,120;Elevación lateral,4,15,60;Curl,3,12,75;Tríceps polea,3,12,75`)],
['CF-A','CrossFit A · Tradicional (4 días)',`Escalado: dominadas→banda o remo en anillas; thruster 43→30 kg; HSPU→pike; doble unders→2× simples. Máx. 2 WOD intensos seguidos.`,DD(`Lunes Fuerza+WOD:Sentadilla trasera 5x5 @75%,5,5,150;WOD AMRAP 12': 5 dominadas + 10 flexiones + 15 sentadillas (~1'45 por ronda),1,0,0,b|Martes Halterofilia:Arrancada técnica EMOM 10' (2 reps @60%),1,0,0,b;Cargada,5,2,120;WOD EMOM 16': remo 12 cal / swing KB 15 / wall ball 12 / burpees 10,1,0,0,b|Jueves Skill:Handstand o muscle-up progresión EMOM 10',1,0,0,b;WOD For Time 50-40-30-20-10 doble unders + abdominales (cap 12'),1,0,0,b|Sábado:Peso muerto 5x3 @80-85%,5,3,180;WOD Chipper cap 20': 40 wall ball / 30 swing KB / 20 burpees / 10 thrusters,1,0,0,b`)],
['CF-B','CrossFit B · Estético funcional (4 días)',`Sin olímpicos. +2 kg KB o +2-3 reps por semana. Evita swings pesados el día tras peso muerto.`,DD(`Empuje:Press militar KB,4,6,120;Press inclinado mancuernas,3,8,120;Fondos,3,8,120;Elevación lateral,3,12,60;Assault Bike 10x(15" máx / 45" suave),1,0,0,b|Tirón:Dominadas,4,6,150;Remo KB unilateral,3,8,120;Face pull,3,12,60;Curl,3,10,75;Remo ergómetro 5x500 m (2' desc.),1,0,0,b|Pierna:Sentadilla goblet/frontal,4,8,150;Swing KB pesado,5,10,90;Zancada búlgara,3,8,120;RDL,3,8,150;Gemelo,3,15,60;EMOM 10': 10 swings + 8 goblet,1,0,0,b|Híbrido:Complejo KB clean+press+sentadilla EMOM 12',1,0,0,b;Farmer carry 40 m,4,1,90,b;Assault Bike 6x2' @85% (2' suave),1,0,0,b;Core: dragon flag / hollow / rueda,3,8,60`)],
['TR-1','Viaje 1 · Clásico sin material (1 día)',`Una sesión de cuerpo entero para hotel, Airbnb o parque, sin nada de material. RIR 1-2: cuando saques todas las reps en todas las series, pasa a una variante más difícil (pies elevados, tempo lento, a una pierna). Plancha en segundos.`,DD(`Cuerpo entero:Sentadilla lenta,4,15,75,w;Flexiones,4,12,75,w;Remo invertido bajo mesa,4,10,75,w;Zancada hacia atrás,3,12,60,w;Puente de glúteo a una pierna,3,12,60,w;Flexiones pike,3,8,75,w;Plancha,3,40,45,t`)],
['TR-2','Viaje 2 · Circuito sin material (1 día)',`Cuerpo entero en formato circuito (unos 20-25 min): un ejercicio detrás de otro con solo 20 s de descanso y, al acabar la ronda, 1-2 min de pausa. Haz 3-4 rondas. Ideal cuando vas justo de tiempo.`,DD(`Cuerpo entero:Sentadilla con salto suave,4,15,20,w;Flexiones,4,12,20,w;Zancada alterna,4,20,20,w;Superman,4,15,20,w;Burpees,4,8,20,w;Escaladores,4,20,20,w;Plancha,3,40,30,t`)],
['TR-3','Viaje 3 · Una pierna sin material (1 día)',`Cuerpo entero con ejercicios a una pierna y core para más intensidad sin material. Trabaja lento y controlado (3 s bajando). RIR 1-2.`,DD(`Cuerpo entero:Sentadilla pistol asistida,3,6,90,w;Sentadilla búlgara con pie en cama,3,10,90,w;Flexiones con pies elevados,3,10,75,w;Remo invertido bajo mesa,3,10,75,w;Peso muerto a una pierna sin peso,3,10,75,w;Hollow,3,30,45,t;Plancha lateral izquierda,2,30,30,t;Plancha lateral derecha,2,30,30,t`)],
['TR-4','Viaje 4 · Banda básico (1 día)',`Cuerpo entero con una banda elástica ligera o media (cabe en la maleta). Elige una banda con la que llegues al tope de reps con 1-2 en reserva; si te sobra, dobla la banda o ralentiza el tempo.`,DD(`Cuerpo entero:Sentadilla con banda bajo los pies,4,15,75,w;Remo sentado con banda,4,12,75,w;Press de pecho con banda,3,12,75,w;Peso muerto rumano con banda,3,12,75,w;Press de hombro con banda,3,12,60,w;Pull-apart con banda,3,15,45,w;Plancha,3,30,45,t`)],
['TR-5','Viaje 5 · Banda fuerza (1 día)',`Cuerpo entero con banda más exigente: menos reps, más tensión y tempo lento (3 s bajando). Usa la banda más dura para las piernas y la media para los brazos.`,DD(`Cuerpo entero:Sentadilla goblet con banda,4,12,90,w;Remo a una mano con banda,3,12,75,w;Flexiones con banda en la espalda,3,10,90,w;Buenos días con banda,3,12,75,w;Zancada con banda,3,10,90,w;Face pull con banda,3,15,45,w;Curl con banda,2,12,45,w;Extensión de tríceps con banda,2,12,45,w`)],
['TR-6','Viaje 6 · Banda circuito (1 día)',`Cuerpo entero con banda en formato circuito (unos 30 min): un ejercicio tras otro con 30 s de descanso y 1-2 min al acabar la ronda. Haz 3 rondas.`,DD(`Cuerpo entero:Sentadilla con banda,3,15,30,w;Remo con banda,3,15,30,w;Flexiones,3,12,30,w;Puente de glúteo con banda en rodillas,3,15,30,w;Press de hombro con banda,3,12,30,w;Caminata lateral con banda,3,15,30,w;Plancha,3,30,30,t`)],
['CA-N','Calistenia Novato · Cuerpo entero (1 día)',`Una sesión de cuerpo entero, casi sin material: una mesa o barra baja y un banco. Hazla 2-3 veces por semana, en días no seguidos. RIR 2. Cuando saques todas las reps en todas las series, pasa a la variante siguiente. Pasa a Normal con 3×12 flexiones de rodillas o inclinadas, 3×10 remo invertido y plancha de 45 s. Plancha en segundos.`,DD(`Cuerpo entero:Sentadilla,3,12,60,w;Flexiones inclinadas,3,8,75,w;Remo invertido bajo mesa,3,8,75,w;Zancada hacia atrás,3,8,60,w;Puente de glúteo,3,15,45,w;Plancha,3,20,45,t`)],
['CA-M','Calistenia Normal · Cuerpo entero (1 día)',`Una sesión de cuerpo entero con barra de dominadas y paralelas o banco. Hazla 3 veces por semana, en días no seguidos. RIR 1-2. Pasa a Experto con 3×15 flexiones, 3×8 dominadas estrictas, 3×10 fondos y 3×12 sentadillas búlgaras. Holds en segundos.`,DD(`Cuerpo entero:Sentadilla búlgara,3,9,90,w;Flexiones,4,10,90,w;Dominadas asistidas,4,5,120,w;Fondos en paralelas,3,8,90,w;Puente de glúteo a una pierna,3,8,60,w;Hollow hold,3,20,45,t`)],
['CA-X','Calistenia Experto · Cuerpo entero (1 día)',`Una sesión de cuerpo entero con barra, paralelas y pared. Hazla 3 veces por semana, en días no seguidos. Descansos de 2 min. Si no recuperas, quita una serie de cada ejercicio antes que acortar los descansos. Holds en segundos.`,DD(`Cuerpo entero:Pistol squat,4,5,120,w;Flexiones arquero,4,6,120,w;Dominadas estrictas,5,8,120,w;Fondos en paralelas lentos,4,10,120,w;Nordic curl,3,5,120,w;L-sit,3,18,90,t`)],
['BB-A','Bilbo · Pecho (1 día)',`Método Bilbo (Jesús Varela) aplicado al pecho: 1 serie Bilbo de 20 reps con un peso ligero (en torno al 50 % de tu máximo), bajando controlado, sin rebotar y subiendo explosivo. Luego, series de 8-15 reps para el pecho. Cada semana sube el peso de la serie Bilbo (+5 kg en máquina de discos) y, cuando ya no pases de 15 reps, termina el ciclo y empieza otro más ligero. Hazlo 1 vez por semana, separado de tu día de Empuje.`,DD(`Pecho:Press de pecho en máquina (serie Bilbo),1,20,180;Press de pecho en máquina de discos,3,10,120;Máquina de fondos de discos,3,10,90;Cruces de polea,3,12,75`)]
];
let TM=0,TO=0;const TMN=['Torso / Pierna','PPL','Heavy Duty','Full Body','Powerbuilding','CrossFit','Viaje','Calistenia','Bilbo'];
const tpi=()=>TM==6?TPL.findIndex(t=>t[0]=='TR-'+(TO+1)):TM==8?TPL.findIndex(t=>t[0]=='BB-A'):TM==7?TPL.findIndex(t=>t[0]==['CA-N','CA-M','CA-X'][TO]):TM*2+TO;
document.head.insertAdjacentHTML('beforeend','<style>.stp{display:flex;align-items:center;gap:8px;font-weight:700;margin:2px 0 10px}.stp i{width:24px;height:24px;border-radius:50%;background:var(--t);color:#fff;display:grid;place-items:center;font-size:13px;font-style:normal;flex:0 0 24px}</style>');
const tprevH=i=>{const t=TPL[i];return `<div class="mut" style="margin-bottom:8px">${t[2]}</div>`+t[3].map((d,k)=>`<details class="gtp"${k?'':' open'}><summary><b>${d[0]}</b> · ${d[1].split(';').length} ejercicios</summary><div>${d[1].split(';').map(x=>{const p=x.split(','),b=p[4]=='b';return `<div class="item" style="align-items:center"><span style="flex:1;min-width:0">${p[0]}${b?'':`<br><a class="exl" href="https://www.youtube.com/results?search_query=${encodeURIComponent(p[0]+' ejercicio técnica')}" target="_blank" rel="noopener">▶️ Ver vídeo</a>`}</span><span class="mut" style="white-space:nowrap;text-align:right">${b?'':p[1]+'×'+p[2]+(p[4]=='t'?' s':'')+'<br>'}${+p[3]?'⏱ '+tf(+p[3]):''}</span></div>`}).join('')}</div></details>`).join('')};
function tplCard(){const i=tpi(),t=TPL[i];return `<div class="card" id="tpc"><div class="stp"><i>1</i>Elige metodología</div><div style="display:flex;gap:6px;flex-wrap:wrap">${TMN.map((n,j)=>`<button class="chip${j==TM?' on':''}" onclick="TM=${j};TO=Math.min(TO,${j==8?0:j==6?5:j>6?2:1});tplR()">${n}</button>`).join('')}</div><div class="stp" style="margin-top:16px"><i>2</i>Elige opción</div><div class="row"${TM==6?' style="flex-wrap:wrap"':''}>${(TM==8?['Bilbo']:TM==6?['Sin material 1','Sin material 2','Sin material 3','Banda 1','Banda 2','Banda 3']:TM>6?['Novato','Normal','Experto']:['Opción A','Opción B']).map((o,j)=>`<button class="${j==TO?'':'g'}"${TM==6?' style="flex:1 1 30%"':''} onclick="TO=${j};tplR()">${o}</button>`).join('')}</div><div style="margin:8px 0 16px"><b>${t[1].split(' · ')[1]}</b></div><div class="stp"><i>3</i>Revisa ejercicios y descansos</div>${tprevH(i)}<button style="width:100%;margin-top:12px;padding:14px;font-size:16px" onclick="cf('Se añadirá como un entreno aparte; tu rutina actual no se toca. ¿Cargar?',tplC,'Sí, cargar')">➕ Cargar como entreno nuevo</button></div>`}
function tplR(){const o=$('tpc');if(o)o.outerHTML=tplCard()}
const tpOf=d=>TPL.find(t=>d.startsWith(t[0]+' '));
const prg=d=>{const t=tpOf(d);return t?t[0]:''};
function psel(ks){const ps=[''];ks.forEach(d=>{if(!ps.includes(prg(d)))ps.push(prg(d))});const c=prg(gd);return `<select aria-label="Entreno" style="margin-bottom:6px;width:100%;max-width:100%;box-sizing:border-box;text-overflow:ellipsis" onchange="gp(this.value)">${ps.map(p=>`<option value="${p}"${p==c?' selected':''}>${p?TPL.find(t=>t[0]==p)[1]:'📁 Mi rutina'}</option>`).join('')}</select>`}
function gp(p){gd=Object.keys(gE()).find(d=>prg(d)==p&&d!='Abdominales')||gd;gym()}
function dsel(ks){const c=prg(gd);return ks.filter(d=>prg(d)==c&&(d!='Abdominales'||d==gd)).map(d=>{const t=tpOf(d);return `<option value="${esc(d)}"${d==gd?' selected':''}>${esc(t?d.slice(t[0].length+1):d)}</option>`}).join('')}
document.head.insertAdjacentHTML('beforeend','<style>.ex[data-i]{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}</style>');
(()=>{let tm=0,sx=0,sy=0;const st=e=>{const c=e.target.closest&&e.target.closest('.ex[data-i]');if(!c||e.target.closest('input,button,a,select,summary,label'))return;const t=e.touches?e.touches[0]:e;sx=t.clientX;sy=t.clientY;clearTimeout(tm);tm=setTimeout(()=>{tm=0;exm(+c.dataset.i)},550)},en=()=>{clearTimeout(tm);tm=0},mv=e=>{const t=e.touches?e.touches[0]:e;if(Math.abs(t.clientX-sx)>10||Math.abs(t.clientY-sy)>10)en()};document.addEventListener('touchstart',st,{passive:true});document.addEventListener('touchmove',mv,{passive:true});document.addEventListener('touchend',en);document.addEventListener('touchcancel',en);document.addEventListener('mousedown',st);document.addEventListener('mouseup',en);document.addEventListener('contextmenu',e=>{if(e.target.closest&&e.target.closest('.ex[data-i]'))e.preventDefault()})})();
function exm(i){const e=(gE()[gd]||[])[i];if(!e)return;let s=e[4];const o=document.createElement('div');o.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;padding:20px;z-index:40';o.innerHTML=`<div class="card" style="width:100%;max-width:380px"><b>Personalizar ejercicio</b><input id="mnm" value="${esc(e[0])}" style="width:100%;margin:10px 0" aria-label="Nombre"><div class="item" style="align-items:center"><span style="flex:1">Series</span><button class="g" id="msm">−</button><b id="msn" style="min-width:32px;text-align:center">${s}</b><button class="g" id="msp">＋</button></div>${e[6]?'':`<div class="item" style="align-items:center"><span style="flex:1">Descanso (min:seg)</span><input id="mdr" value="${tf(rt(gd,e))}" style="width:84px;text-align:center"></div>`}<div class="row" style="margin-top:10px"><button class="g" id="mup">↑ Subir</button><button class="g" id="mdn">↓ Bajar</button><button class="g" id="mdl">🗑 Eliminar</button></div><div class="row" style="margin-top:10px"><button id="mok">Guardar</button><button class="g" id="mcl">Cerrar</button></div></div>`;document.body.appendChild(o);$('msm').onclick=()=>{s=Math.max(1,s-1);$('msn').textContent=s};$('msp').onclick=()=>{s=Math.min(10,s+1);$('msn').textContent=s};$('mcl').onclick=()=>o.remove();$('mup').onclick=()=>{o.remove();me(i,-1)};$('mdn').onclick=()=>{o.remove();me(i,1)};$('mdl').onclick=()=>{o.remove();xe(i)};$('mok').onclick=()=>{const n=$('mnm').value.trim(),d=$('mdr');if(n&&n!=e[0]){mg(gd+'|'+e[0]+'|',gd+'|'+n+'|');e[0]=n}e[4]=s;if(d)e[7]=Math.max(5,pm(d.value)||rt(gd,e));cv();save();o.remove();gym()}}
function mw(html){const o=document.createElement('div');o.id='mw';o.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;padding:14px;z-index:40';o.innerHTML=`<div style="width:100%;max-width:460px;max-height:86vh;overflow-y:auto;border-radius:18px"><div style="position:sticky;top:0;z-index:2;text-align:right;padding:4px 0"><button class="g" aria-label="Cerrar" style="padding:6px 14px" onclick="$('mw').remove()">✕ Cerrar</button></div>${html}</div>`;document.body.appendChild(o);o.onclick=e=>{if(e.target===o)o.remove()}}
function opTpl(){mw(tplCard())}
function opLib(){if(!gd){crP();return}mw(libCard()+`<details class="card"><summary><b>✍️ Crear un ejercicio a mano</b></summary><div class="row" style="margin:8px 0"><input id="en" placeholder="Nombre" style="flex:1 1 100%"><input id="ek" inputmode="decimal" placeholder="kg"><input id="er" inputmode="numeric" placeholder="reps"><input id="es" inputmode="numeric" placeholder="series (3)"></div><div class="row"><select id="ea"><option value="0">Multiarticular</option><option value="1">Aislamiento</option><option value="2">Tiempo (plancha)</option><option value="3">Peso corporal (solo reps)</option></select><button onclick="ne()">Añadir</button></div></details>`)}
function crP(){const o=document.createElement('div');o.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;padding:20px;z-index:41';o.innerHTML=`<div class="card" style="width:100%;max-width:360px"><b>¿Cómo quieres llamar al día?</b><input id="pn" placeholder="Ej. Torso, Pierna, Empuje…" style="width:100%;margin:10px 0"><div class="row"><button id="pok">Crear día</button><button class="g" id="pno">Cancelar</button></div></div>`;document.body.appendChild(o);$('pn').focus();$('pno').onclick=()=>o.remove();$('pok').onclick=()=>{const n=$('pn').value.trim();if(!n){$('pn').focus();return}o.remove();const g=gE();if(!g[n])g[n]=[];gd=n;ED=false;cv();save();gym();opLib();qt('✅ Día «'+n+'» creado: elige sus ejercicios')}}
function xet(){const t=tpOf(gd),g=gE(),ds=Object.keys(g).filter(d=>prg(d)==prg(gd)&&(t||d!='Abdominales'));if(!ds.length)return;cf(t?'¿Quieres borrar este entreno ('+t[1]+')?':'¿Vas a borrar tu rutina?',()=>cf('¿Estás seguro? Se borrarán sus '+ds.length+' días con todos sus ejercicios y TODOS sus datos (kilos y registros). No se puede deshacer.',()=>{ds.forEach(d=>{delete g[d];[S.g,S.gh].forEach(o=>Object.keys(o).forEach(k=>{if(k.startsWith(d+'|'))delete o[k]}))});gd=Object.keys(g).find(d=>d!='Abdominales')||Object.keys(g)[0]||'';ED=false;cv();save();gym();qt('Entreno borrado')}))}
function perCard(){const n=esc(gd||'');return `<div class="card"><div class="stp"><i>1</i>Tu día</div><div class="row"><button onclick="crP()">＋ Día nuevo</button>${gd?`<button class="g" onclick="rd()">Renombrar «${n}»</button><button class="g" onclick="xd()">🗑 Borrar día</button>`:''}${Object.keys(G).filter(d=>d!='Abdominales'&&!gE()[d]&&!(S.hid||[]).includes(d)).map(d=>`<button class="g" onclick="rsd('${d}')">↩ Recuperar «${d}»</button><button class="g" aria-label="Ocultar" onclick="(S.hid=S.hid||[]).push('${d}');save();gym()">✕</button>`).join('')}</div></div>`+(gd?libCard()+`<details class="card"><summary><b>✍️ Crear un ejercicio a mano</b></summary><div class="row" style="margin:8px 0"><input id="en" placeholder="Nombre" style="flex:1 1 100%"><input id="ek" inputmode="decimal" placeholder="kg"><input id="er" inputmode="numeric" placeholder="reps"><input id="es" inputmode="numeric" placeholder="series (3)"></div><div class="row"><select id="ea"><option value="0">Multiarticular</option><option value="1">Aislamiento</option><option value="2">Tiempo (plancha)</option><option value="3">Peso corporal (solo reps)</option></select><button onclick="ne()">Añadir</button></div></details>`:'')}
function tplC(){const t=TPL[tpi()],G=gE();let f='';t[3].forEach(([d,s])=>{const n=t[0]+' '+d;G[n]=s.split(';').map(x=>{const p=x.split(','),b=p[4]=='b',w=p[4]=='w',ts=p[4]=='t';return[p[0],0,+p[2],(+p[3]<=90||b||w||ts)?1:0,+p[1],[],ts?1:0,+p[3]||0,(b||w)?1:0]});f=f||n});gd=f;ED=false;if($('mw'))$('mw').remove();cv();save();gym();scrollTo(0,0);qt('✅ '+t[3].length+' días añadidos')}
function libHtml(){const q=LQ.trim().toLowerCase(),g0=GG()[gd]||[],L=[];(q?Object.keys(LIB):[LG]).forEach(g=>LIB[g].forEach((x,i)=>{if(!q||x[0].toLowerCase().includes(q))L.push([g,i,x])}));
if(!L.length)return '<div class="mut">No hay ejercicios con ese nombre. Puedes crearlo a mano arriba con «Añadir ejercicio».</div>';
return L.map(z=>{const has=g0.some(e=>e[0]==z[2][0]);return `<div class="item" style="align-items:center"><span style="flex:1;min-width:0"><b>${esc(z[2][0])}</b><br><span class="mut">${z[0]} · ${LTY[z[2][1]]}</span><br><a class="exl" href="https://www.youtube.com/results?search_query=${encodeURIComponent(z[2][0]+' ejercicio técnica')}" target="_blank" rel="noopener">▶️ Ver vídeo</a></span><button class="${has?'g':''}" style="padding:6px 14px" onclick="libA('${z[0]}',${z[1]})" aria-label="Añadir">${has?'✔':'＋'}</button></div>`}).join('')}
function libCard(){const q=LQ.trim();return `<div class="card" id="lib"><div class="stp"><i>＋</i>Añadir ejercicios a «${esc(gd)}»</div><div class="mut">Toca ＋ para añadirlos. Luego ajusta series y descansos en la lista de abajo.</div><input type="search" placeholder="🔍 Buscar ejercicio…" value="${esc(LQ)}" oninput="libS(this.value)" style="width:100%;margin:8px 0"><div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:6px">${Object.keys(LIB).map(g=>`<button class="chip${g==LG&&!q?' on':''}" style="flex:0 0 auto" onclick="LG='${g}';LQ='';libR()">${g}</button>`).join('')}</div><div id="liblist">${libHtml()}</div></div>`}
function libS(v){LQ=v;const l=$('liblist');if(l)l.innerHTML=libHtml()}
function libR(){const o=$('lib');if(!o)return;const y=scrollY;o.outerHTML=libCard();scrollTo(0,y)}
function libA(g,i){const x=LIB[g][i],ty=x[1],G=gE();if(!gd||!G[gd]){qt('Crea primero un día de rutina');return}if(G[gd].some(e=>e[0]==x[0]))return;G[gd].push([x[0],0,ty==2?30:0,ty?1:0,3,[],ty==2?1:0,0,ty==3?1:0]);cv();save();qt('＋ '+x[0]+' → '+gd);const y=scrollY;gym();scrollTo(0,y);libS(LQ)}
function sg(i){const key=kf(i),kg=num($('gk'+i).value),r=Math.round(num($('gr'+i).value));if(!kg&&!r)return;const rs=gsn([key]);S.g[key]={kg,r};const a=S.gh[key]=S.gh[key]||[],x=a.find(z=>z.d==td());if(x){x.kg=kg;x.r=r;x.t=hhmm()}else a.push({d:td(),kg,r,t:hhmm()});save();uP('Serie guardada',rs);const y=scrollY;gym();scrollTo(0,y)}
const GG=()=>S.ge||G,gE=()=>(S.ge||(S.ge=JSON.parse(JSON.stringify(G))));let ED=false,EM=0;
const cv=()=>Object.keys(V).forEach(k=>delete V[k]);
function mg(a,b){[S.g,S.gh].forEach(o=>Object.keys(o).forEach(k=>{if(k.startsWith(a)){o[b+k.slice(a.length)]=o[k];delete o[k]}}))}
const edr=i=>{const e=gE()[gd][i],sd=lSd(e);return `<div class="row" style="margin:8px 0"><input id="rn${i}" value="${esc(e[0])}" style="flex:1 1 100%" aria-label="Nombre"><input id="rs${i}" inputmode="numeric" value="${e[4]}" style="flex:0 0 64px" aria-label="Series"><button class="g" onclick="rse(${i})">Guardar</button><button class="g" onclick="me(${i},-1)" aria-label="Subir">↑</button><button class="g" onclick="me(${i},1)" aria-label="Bajar">↓</button><button class="g" onclick="xe(${i})" aria-label="Borrar">🗑</button></div><button class="${sd?'':'g'}" style="width:100%;margin:0 0 8px" onclick="ldT(${i})">${sd?'✔':'○'} Kilos por lado (el volumen cuenta el doble)</button><div class="mut">Alternativas (cada una guarda sus propios kilos)</div>${e[5].map((x,j)=>`<div class="item" style="align-items:center"><span style="flex:1">${esc(x)}</span><button class="g" style="padding:4px 9px" onclick="dal(${i},${j})" aria-label="Borrar alternativa">🗑</button></div>`).join('')}<div class="row" style="margin:6px 0"><input id="an${i}" placeholder="Nueva alternativa (ej. Press con mancuernas)" style="flex:1 1 100%"><button class="g" onclick="aal(${i})">＋ Añadir alternativa</button></div>`};
function ed(){ED=!ED;gym()}
function nd(){const n=($('dn').value||'').trim(),g=gE();if(!n||g[n])return;g[n]=[];gd=n;save();gym()}
function rd(){if(!gd)return;const t=tpOf(gd),pre=t?t[0]+' ':'',cur=t?gd.slice(pre.length):gd,o=document.createElement('div');o.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;padding:20px;z-index:40';o.innerHTML=`<div class="card" style="width:100%;max-width:360px"><b>Nuevo nombre del día</b><input id="rn" value="${esc(cur)}" style="width:100%;margin:10px 0"><div class="row"><button id="rok">Guardar</button><button class="g" id="rno">Cancelar</button></div></div>`;document.body.appendChild(o);$('rn').focus();$('rno').onclick=()=>o.remove();$('rok').onclick=()=>{const n=pre+$('rn').value.trim(),g=gE();if(n==pre||n==gd||g[n]){o.remove();return}o.remove();const r={};Object.keys(g).forEach(k=>r[k==gd?n:k]=g[k]);mg(gd+'|',n+'|');S.ge=r;gd=n;cv();save();gym()}}
function rsd(d){const g=gE();g[d]=JSON.parse(JSON.stringify(G[d]));gd=d;cv();save();gym();qt('↩ «'+d+'» recuperado')}
function rse(i){const e=gE()[gd][i],n=$('rn'+i).value.trim(),q=Math.round(num($('rs'+i).value));if(n&&n!=e[0]){mg(gd+'|'+e[0]+'|',gd+'|'+n+'|');e[0]=n}if(q)e[4]=q;save();gym()}
function xd(){if(!gd)return;cf('¿Estás seguro de eliminar el día "'+gd+'" con todos sus ejercicios? Tu historial se conserva.',()=>{const g=gE(),p=prg(gd);delete g[gd];gd=Object.keys(g).find(d=>prg(d)==p&&d!='Abdominales')||Object.keys(g).find(d=>d!='Abdominales')||Object.keys(g)[0]||'';cv();save();gym();qt('Día eliminado')})}
function ne(){const n=$('en').value.trim();if(!n)return;{const ty=+$('ea').value;gE()[gd].push([n,(ty>=2?0:num($('ek').value)),Math.round(num($('er').value))||(ty==2?30:0),ty?1:0,Math.round(num($('es').value))||3,[],ty==2?1:0,0,ty==3?1:0])};cv();save();gym()}
function xe(i){const e=(gE()[gd]||[])[i];if(!e)return;cf('¿Estás seguro de eliminar «'+e[0]+'»?',()=>{gE()[gd].splice(i,1);cv();save();gym()})}
function me(i,d){const a=gE()[gd],j=i+d;if(j<0||j>=a.length)return;[a[i],a[j]]=[a[j],a[i]];cv();save();gym()}
function re(i){const e=gE()[gd][i],n=(prompt('Nombre del ejercicio',e[0])||'').trim();if(!n||n==e[0])return;mg(gd+'|'+e[0]+'|',gd+'|'+n+'|');e[0]=n;save();gym()}
function se(i){const e=gE()[gd][i],n=Math.round(num(prompt('Series',e[4])));if(!n)return;e[4]=n;save();gym()}
const FZ=[.9,1,1.15,1.3],TI2=['auto','light','dark'],TIc={auto:'🌓',light:'☀️',dark:'🌙'};
function ap(){const r=document.documentElement;if(S.th&&S.th!='auto')r.setAttribute('data-theme',S.th);else r.removeAttribute('data-theme');r.style.setProperty('--z',S.fs||1);$('thb').textContent=TIc[S.th||'auto']}
function tth(){S.th=TI2[(TI2.indexOf(S.th||'auto')+1)%3];sv();ap()}
function fz(d){const i=Math.max(0,Math.min(3,FZ.indexOf(S.fs||1)+d));S.fs=FZ[i];sv();ap()}
function ring(a){let s='';a.forEach((x,i)=>{const R=52-i*14,C=2*Math.PI*R,f=Math.min(1,x[0]/Math.max(x[1],1));s+=`<circle cx="60" cy="60" r="${R}" fill="none" stroke="var(--ln)" stroke-width="9"/>`+(f>.01?`<circle cx="60" cy="60" r="${R}" fill="none" stroke="${x[2]}" stroke-width="9" stroke-linecap="round" stroke-dasharray="${f*C} ${C}" transform="rotate(-90 60 60)"/>`:'')});return `<div class="row" style="flex-wrap:nowrap;align-items:center;gap:14px;margin:10px 0"><svg viewBox="0 0 120 120" width="120" height="120" role="img" aria-label="Anillos de calorías, proteína e hidratos">${s}</svg><div style="font-size:13px;line-height:1.8">${a.map(x=>`<div><span style="color:${x[2]}">●</span> ${x[3]}: <b>${Math.round(x[0]/Math.max(x[1],1)*100)}%</b></div>`).join('')}</div></div>`}
let MSEL=null,MLG=false,EDO=false;
const MM={pec:['Pectoral','Empuje'],delF:['Deltoides anterior','Empuje'],trapF:['Trapecio','Tracción'],bic:['Bíceps','Tracción'],ant:['Antebrazo','Tracción'],abs:['Recto abdominal','Abdominales'],obl:['Oblicuos','Abdominales'],quadO:['Cuádriceps (vasto lateral)','Cuádriceps'],quadR:['Cuádriceps (recto femoral)','Cuádriceps'],quadM:['Cuádriceps (vasto medial)','Cuádriceps'],calfF:['Gemelo / tibial','Cuádriceps'],trap:['Trapecio','Tracción'],delB:['Deltoides posterior','Tracción'],lat:['Dorsal ancho','Tracción'],tri:['Tríceps','Empuje'],lum:['Lumbar','Abdominales'],glu:['Glúteo','Femoral'],hamO:['Femoral (bíceps femoral)','Femoral'],hamI:['Femoral (semitendinoso)','Femoral'],calfB:['Gemelo','Cuádriceps']};
const FR=[['pec','M98.9 62Q84.3 57 69.8 63Q65.3 76 70.9 88Q83.2 100 98.9 96Z'],['trapF','M89.9 50Q79.8 54 66.4 58Q77.6 64 88.8 62Z'],['delF','M67.5 57Q53 55 47.4 69Q44 81 49.6 93Q60.8 91 66.4 79Q70.9 67 67.5 57Z'],['bic','M49.6 93Q42.9 104 46.2 120Q53 124 59.7 120Q64.2 106 61.9 92Q55.2 88 49.6 93Z'],['ant','M46.2 122Q40.6 144 42.9 163.7Q49.6 165.2 55.2 162.2Q59.7 144 58.6 122Q53 118 46.2 122Z'],['obl','M73.1 98Q67.5 120 72 144Q81 153 88.8 151.5L88.8 106Q79.8 108 73.1 98Z'],['abs','M89.9 102L99.6 102L99.6 113L89.9 113Z'],['abs','M89.9 115L99.6 115L99.6 126L89.9 126Z'],['abs','M89.9 128L99.6 128L99.6 139L89.9 139Z'],['abs','M89.9 141L99.6 141L99.6 150L89.9 150Z'],['quadO','M73.1 153Q63 181.9 69.8 229Q76.5 232.1 84.3 229Q83.2 188 85.4 153Q78.7 150 73.1 153Z'],['quadR','M85.4 153Q83.2 188 84.3 229Q91 232.1 96.6 229Q97.8 188 95.5 154.6Q89.9 151.5 85.4 153Z'],['quadM','M95.5 198.6Q101.1 213.8 97.8 229Q92.2 232.1 87.7 227.5Q91 212.3 95.5 198.6Z'],['calfF','M72 235.1Q65.3 256.4 73.1 283.8Q79.8 286.8 85.4 282.2Q87.7 257.9 85.4 235.1Q78.7 232.1 72 235.1Z']];
const BK=[['lat','M91 88Q79.8 86 69.8 82Q64.2 102 75.4 130Q85.4 142 96.6 138L98.9 110Q93.3 100 91 88Z'],['trap','M98.9 44Q88.8 48 73.1 58Q79.8 74 91 88L98.9 108Z'],['delB','M67.5 57Q53 55 47.4 69Q44 81 49.6 93Q60.8 91 66.4 79Q70.9 67 67.5 57Z'],['tri','M49.6 93Q42.9 104 46.2 120Q53 124 59.7 120Q64.2 106 61.9 92Q55.2 88 49.6 93Z'],['ant','M46.2 122Q40.6 144 42.9 163.7Q49.6 165.2 55.2 162.2Q59.7 144 58.6 122Q53 118 46.2 122Z'],['lum','M89.9 132Q87.7 148 93.3 156.1L98.9 157.6L98.9 136Z'],['glu','M73.1 156.1Q65.3 168.2 73.1 180.4Q88.8 186.5 98.9 178.9L98.9 156.1Q86.6 151.5 73.1 156.1Z'],['hamO','M73.1 181.9Q66.4 204.7 73.1 229Q79.8 232.1 85.4 229Q84.3 204.7 85.4 183.4Q79.8 183.4 73.1 181.9Z'],['hamI','M85.4 183.4Q84.3 204.7 85.4 229Q93.3 232.1 97.8 229Q100 204.7 97.8 181.9Q92.2 185 85.4 183.4Z'],['calfB','M72 235.1Q64.2 254.9 74.2 280.7Q82.1 283.8 87.7 277.7Q91 254.9 86.6 235.1Q79.8 230.6 72 235.1Z']];
const MFD='<path d="M97 54Q82 56 68 60M98 66Q84 65 71 68M98 75Q83 76 70 80M98 85Q83 88 71 92M75 160L96 160M72 106Q80 112 74 128M78 156Q82 190 80 226M91 160Q94 190 92 224M50 76Q56 84 53 92M63 74Q58 82 60 90"/><path d="M96.6 68Q84.3 68 73.1 72M96.6 80Q84.3 82 74.2 82M57.4 60Q55.2 74 57.4 90M53 98Q55.2 108 53 118M77.6 165.2Q79.8 195.6 79.8 227.5M91 165.2Q88.8 195.6 91 226"/>',MBD='<path d="M94 60Q84 66 76 72M92 96Q80 100 72 108M92 112Q80 118 74 126M80 190Q82 210 80 228M92 190Q94 210 92 228M76 164Q88 170 98 166M60 100Q55 110 57 118"/><path d="M88.8 100Q79.8 110 77.6 128M82.1 70Q88.8 76 91 86M59.7 96Q55.2 108 57.4 118"/>';
const MGR={Pecho:['pec','delF','tri'],Espalda:['lat','trap','trapF','delB','bic','lum'],Hombro:['delF','delB','trap'],'Bíceps':['bic','ant'],'Tríceps':['tri'],'Cuádriceps':['quadO','quadR','quadM'],Femoral:['hamO','hamI','glu'],'Glúteo':['glu','hamO'],Gemelo:['calfF','calfB'],Abdominales:['abs','obl','lum'],Antebrazo:['ant']};let MAK='';
function exMu(n){let g=null;for(const k in LIB)if(LIB[k].some(x=>x[0]==n)){g=k;break}if(!g){const R=[[/femoral|rumano|isquio|n[oó]rdic|peso muerto a una pierna/i,'Femoral'],[/gl[uú]teo|hip thrust|puente/i,'Glúteo'],[/gemelo|s[oó]leo|pantorrilla/i,'Gemelo'],[/sentadilla|prensa|cu[aá]driceps|zancada|extensi[oó]n de pierna|hack|pistol|b[uú]lgara|salto/i,'Cuádriceps'],[/b[ií]ceps|curl/i,'Bíceps'],[/tr[ií]ceps|franc[eé]s|fondos en banco/i,'Tríceps'],[/hombro|militar|lateral|p[aá]jaros|arnold|pike|pino|planche/i,'Hombro'],[/remo|jal[oó]n|dominada|peso muerto|dorsal|espalda|australiano|superman|front lever|colgado/i,'Espalda'],[/banca|pecho|apertura|flexion|fondos|cruce/i,'Pecho'],[/abdom|plancha|crunch|core|rueda|elevaciones? de piernas|hollow|dead bug|l-sit|dragon|rkc/i,'Abdominales'],[/antebrazo|mu[ñn]eca/i,'Antebrazo']];const r=R.find(x=>x[0].test(n));g=r&&r[1]}return MGR[g]||[]}
function mal(n,k,c){const m=ML(),h=exMu(n).filter(x=>m[x]&&MM[x]);if(!h.length)return'';if(!document.getElementById('malcss')){const s=document.createElement('style');s.id='malcss';s.textContent='.malr{background:#E5484D;color:#fff;border-radius:12px;padding:10px 12px;margin:8px 0;font-weight:700;font-size:14px;animation:malp 1s infinite}@keyframes malp{50%{box-shadow:0 0 0 6px rgba(229,72,77,.35)}}';document.head.appendChild(s)}const L=['','leve','moderada','fuerte'];if(k&&MAK!=k){MAK=k;try{navigator.vibrate&&navigator.vibrate([250,120,250,120,400])}catch(e){}try{tick();setTimeout(tick,180);setTimeout(tick,360)}catch(e){}}const z=c?malCx(c):null;return '<div class="malr">🚨 ¡OJO! Este ejercicio trabaja '+h.map(x=>MM[x][0]+' ('+L[m[x].n]+')').join(', ')+', donde tienes molestia. Baja el peso o usa una alternativa.'+(z?'<button onclick="malAlt(\''+c+'\')" style="margin-top:8px;width:100%;background:#fff;color:#E5484D;border:0">🔁 Cambiar a '+esc(z.n)+'</button>':'')+'</div>'}
function mmb(){const m=ML()[MSEL],L=['Sin molestia','Leve','Moderada','Fuerte'];return '<div class="row" style="margin-top:8px">'+L.map((x,i)=>'<button class="'+((m?m.n:0)==i?'':'g')+'" style="padding:5px 10px" onclick="mMo('+i+')">'+(i?'🩹 ':'✔ ')+x+'</button>').join('')+'</div>'+(m?'<div class="mut">Molestia '+L[m.n].toLowerCase()+' desde '+m.d+'</div>':'')}
function mMo(i){const M=ML();if(i)M[MSEL]={n:i,d:td()};else delete M[MSEL];save();gym()}
function mmr(){const M=ML(),k=Object.keys(M);if(!k.length)return'';const L=['','leve','moderada','fuerte'];return '<div class="tip" style="border-color:#F59E0B">🩹 Molestias: '+k.map(x=>MM[x]?MM[x][0]+' ('+L[M[x].n]+')':'').filter(Boolean).join(', ')+'.'+(k.some(x=>M[x].n>=3)?' Si es fuerte o no se pasa en unos días, consulta a un fisio o médico.':' Baja el peso o cambia a una alternativa en ese músculo si te molesta al entrenar.')+'</div>'}
function mSel(i){MSEL=MSEL==i?null:i;gym()}
const FB0=[[/gemel|talones|s[oó]leo/i,'Gemelo'],[/plancha|hollow|dead bug|l-sit|dragon|rkc|crunch|elevaci[oó]n de piernas|abdom/i,'Abdominales'],[/n[oó]rdic|peso muerto a una pierna|rumano|femoral|isquio/i,'Femoral'],[/puente|gl[uú]teo|hip thrust/i,'Glúteo'],[/pike|pino|planche|militar|hombro/i,'Hombro'],[/fondos en banco|diamante|tr[ií]ceps/i,'Tríceps'],[/dominada|remo|australiano|superman|front lever|colgado|jal[oó]n|muscle/i,'Espalda'],[/flexi[oó]n|fondos|arquero|palmada|banca/i,'Pecho'],[/pistol|b[uú]lgara|zancada|sentadilla|salto|prensa/i,'Cuádriceps']];
document.head.insertAdjacentHTML('beforeend','<style>.sxd>summary{list-style:none;cursor:pointer}.sxd>summary::-webkit-details-marker{display:none}</style>');
let LM=null;function mgrp(n){if(!LM){LM={};Object.entries(LIB).forEach(([g,a])=>a.forEach(x=>LM[x[0]]=g))}if(LM[n])return LM[n];{const q=FB0.find(x=>x[0].test(n||''));if(q)return q[1]}const F={bench:/pecho/i,fl:/pecho/i,di:/pecho/i,ps:/pecho/i,fr:/tr[ií]ceps/i,tri:/tr[ií]ceps/i,pv:/hombro/i,lat:/hombro/i,rs:/espalda/i,rem:/espalda/i,ja:/espalda/i,cu:/b[ií]ceps/i,sq:/cu[aá]dr/i,pr:/cu[aá]dr/i,ext:/cu[aá]dr/i,hi:/femoral/i,lc:/femoral/i,gm:/gemelo/i,ab:/abdom/i,ad:/cu[aá]dr/i}[mkey(n)];return Object.keys(LIB).find(g=>F&&F.test(g))||null}
function gwS(a,b){const s={},q={},t=Date.parse(td());let v=0;Object.keys(S.gh).forEach(k=>{const p=k.split('|'),e=(GG()[p[0]]||[]).find(z=>z[0]==p[1]),nm=e?[e[0],...e[5]][+p[2]||0]:p[1],g=mgrp(nm||'');if(!g||/cardio/i.test(g))return;const n=e?+e[4]||3:3;(S.gh[k]||[]).forEach(x=>{const ag=(t-Date.parse(x.d))/864e5;if(ag<a||ag>=b||!(x.kg||x.r))return;s[g]=(s[g]||0)+n;q[g]=q[g]||{};q[g][nm]=(q[g][nm]||0)+n;v+=(x.kg||0)*(x.r||0)*n*LF(k)})});return{s,v,q}}
function serCard(){const A=gwS(0,7),B=gwS(7,14),gs=[...new Set([...Object.keys(A.s),...Object.keys(B.s)])].sort((a,b)=>(A.s[b]||0)-(A.s[a]||0));if(!gs.length)return '';if(PGO.gser===undefined)PGO.gser=false;const tot=o=>Object.values(o.s).reduce((a,b)=>a+b,0),col=n=>n<8?'#C98A1B':n<=20?'var(--ok)':'#E5484D',su=r=>gs.filter(g=>r.test(g)).reduce((a,g)=>a+(A.s[g]||0),0),sp=su(/pecho|hombro|tr[ií]ceps/i),sl=su(/espalda|b[ií]ceps|antebrazo/i),pp=sp+sl?Math.round(sp/(sp+sl)*100):50,t1=x=>fm(Math.round(x/100)/10);
const dt=g=>{const o=Object.entries((A.q||{})[g]||{}).sort((a,b)=>b[1]-a[1]);return o.length?`<div class="mut" style="font-size:13.5px;margin:0 0 8px 8px;line-height:1.7">${o.map(([k,v])=>`${esc(k)} · <b>${v} series</b>`).join('<br>')}</div>`:''};const rows=gs.map(g=>{const n=A.s[g]||0,d=n-(B.s[g]||0);return `<details class="sxd"><summary><div class="row" style="align-items:center;gap:8px;margin:5px 0;flex-wrap:nowrap"><span style="flex:0 0 92px;font-size:13px">${esc(g)}</span><div style="flex:1;height:8px;border-radius:4px;background:color-mix(in srgb,var(--mut) 25%,transparent);overflow:hidden"><div style="height:100%;width:${Math.min(100,n/24*100)}%;background:${col(n)}"></div></div><b style="flex:0 0 26px;text-align:right">${n}</b><span class="mut" style="flex:0 0 34px;font-size:13px">${d?(d>0?'+':'−')+Math.abs(d):'='}</span></div></summary>${dt(g)}</details>`}).join('');
const bal=sp+sl?`<div style="margin-top:12px"><b style="font-size:13px">⚖️ Empuje / tracción</b><div style="display:flex;height:8px;border-radius:4px;overflow:hidden;margin:6px 0"><div style="width:${pp}%;background:#4C8DF6"></div><div style="flex:1;background:#8B5CF6"></div></div><div class="mut" style="font-size:13.5px">Empuje ${sp} series · Tracción ${sl} series. ${sl<sp*.8?'Tracción floja: suma series de espalda para cuidar los hombros.':sl>sp*1.6?'Mucha tracción frente a empuje.':'Equilibrado ✅'}</div></div>`:'';
return pgo('gser','📈 Series por músculo · 7 días',tot(A)+' series',`<div class="mut" style="font-size:13.5px">Series de tu rutina por músculo principal. Toca un músculo para ver de qué ejercicios salen. Verde 8-20 a la semana (orientativo). A la derecha, el cambio frente a los 7 días anteriores.</div><div style="margin-top:8px">${rows}</div><div class="mut" style="margin-top:6px">Total ${tot(A)} series (antes ${tot(B)}) · Volumen ${t1(A.v)} t (antes ${t1(B.v)} t)</div>${bal}`,'gym')}
function recCard(){const R={};Object.keys(S.gh).forEach(k=>{const p=k.split('|'),e=(GG()[p[0]]||[]).find(z=>z[0]==p[1]);if(e&&(e[6]||bw(e)))return;const nm=e?[e[0],...e[5]][+p[2]||0]:p[1];(S.gh[k]||[]).forEach(x=>{if(!(x.kg>0&&x.r>0))return;const o=x.kg*LF(k),m=o*(1+x.r/30);if(!R[nm]||m>R[nm].m)R[nm]={m,kg:o,r:x.r,d:x.d}})});const L=Object.entries(R).sort((a,b)=>b[1].d<a[1].d?-1:1);if(!L.length)return '';return pgo('grec','🏆 Mis récords',L.length+' ejercicios',`<div class="mut" style="font-size:13.5px">Tu mejor marca de cada ejercicio (1RM estimado = kg × (1 + reps/30)). Primero los más recientes.</div>`+L.map(([n,v])=>`<div class="row" style="align-items:center;gap:8px;margin:6px 0;flex-wrap:nowrap"><span style="flex:1;font-size:13px">${esc(n)}</span><b>${fm(v.kg)} × ${v.r}</b><span class="mut" style="flex:0 0 84px;text-align:right;font-size:13px">1RM ${fm(Math.round(v.m))} · ${v.d.slice(8)}/${v.d.slice(5,7)}</span></div>`).join(''),'gym')}
function mxl(g){const r=[];let T=0;Object.entries(GG()).forEach(([d,L])=>{const q=gn(d);if(!(q==g||(q=='Torso'&&(g=='Empuje'||g=='Tracción'))))return;L.forEach(e=>{let b=null,n=0;Object.keys(S.gh).forEach(k=>{if(k.startsWith(d+'|'+e[0]+'|'))(S.gh[k]||[]).forEach(x=>{if(x.kg||x.r){n++;if(!b||x.d>b.d)b=x}})});T+=n;r.push(`<div class="mut" style="font-size:13.5px">• ${esc(e[0])}: ${b?'<b>'+n+' registro'+(n>1?'s':'')+'</b> · último '+(e[6]?b.r+' s':bw(e)?b.r+' reps':fm(b.kg)+' kg × '+b.r)+' ('+b.d.slice(8)+'/'+b.d.slice(5,7)+')':'sin registros'}</div>`)})});return r.length?'<details style="margin-top:6px"><summary style="cursor:pointer"><b style="font-size:13px">🏋️ Ejercicios de este grupo · '+T+' registros</b></summary>'+r.join('')+'</details>':''}
function mjH(n){const v=(S.mj||{})[n];return `<div class="mut mj" data-n="${esc(n)}" onclick="mjE(this)" style="cursor:pointer;margin:4px 0">⚙️ ${v?esc(v):'Añadir ajuste de máquina (asiento, respaldo…)'}</div>`}
function mjE(el){if(el.querySelector('input'))return;const n=el.dataset.n;el.innerHTML='⚙️ <input style="width:78%" maxlength="60" value="'+esc((S.mj||{})[n]||'')+'">';const i=el.querySelector('input');i.focus();i.onblur=()=>{S.mj=S.mj||{};const t=i.value.trim();if(t)S.mj[n]=t;else delete S.mj[n];save();el.innerHTML='⚙️ '+(t?esc(t):'Añadir ajuste de máquina (asiento, respaldo…)')};i.onkeydown=e=>{if(e.key=='Enter')i.blur()}}
const MPT={};
function mapM(){const c={Empuje:0,'Tracción':0,'Cuádriceps':0,Femoral:0,Abdominales:0},lim=Date.now()-7*864e5,ex={},OV={},LD={},ov=g=>g&&OV[g]&&OV[g].size>=3;
Object.keys(S.gh).forEach(k=>{const p=k.split('|'),g=gn(p[0]),f=S.gh[k].filter(x=>Date.parse(x.d)>=lim&&(x.kg||x.r));if(g&&f.length)(g=='Torso'?['Empuje','Tracción']:[g]).forEach(h=>{if(c[h]==null)return;c[h]+=f.length;(ex[h]=ex[h]||new Set()).add(p[1]);f.forEach(x=>{(OV[h]=OV[h]||new Set()).add(x.d);if(!LD[h]||x.d>LD[h])LD[h]=x.d})})});
const N='color-mix(in srgb,#8892AD 35%,var(--card))',RT={Empuje:3,'Tracción':3,'Cuádriceps':4,Femoral:4,Abdominales:2},fat=g=>{if(!g||!LD[g])return 0;const ds=Math.round((Date.parse(td())-Date.parse(LD[g]))/864e5);return Math.max(0,1-ds/(RT[g]||3))},fl=g=>g&&ov(g)?'#FF2D3A':g&&c[g]&&fat(g)>0?`color-mix(in srgb,var(--t) ${Math.round(20+80*fat(g))}%,${N})`:N,miss=Object.keys(c).filter(n=>!c[n]),
mp=a=>{const m=MM[a[0]],on=a[0]==MSEL;return `<path d="${a[1]}" fill="${fl(m[1])}" stroke="${on?'var(--ink)':ML()[a[0]]?'#F59E0B':'rgba(0,0,0,.6)'}" stroke-width="${on?2.2:ML()[a[0]]?3:1}" style="cursor:pointer" onclick="mSel('${a[0]}')"><title>${m[0]}</title></path>`},
view=(L,det,tx)=>{const sd=`<g stroke-linejoin="round">${L.map(a=>`<path d="${a[1]}" fill="var(--ln)" stroke="var(--ln)" stroke-width="6"/>`).join('')}<ellipse cx="46" cy="171" rx="7.3" ry="10" fill="var(--ln)"/><path d="M79 284L79.5 293" stroke="var(--ln)" stroke-width="9" stroke-linecap="round"/><ellipse cx="79" cy="297" rx="11" ry="5.5" fill="var(--ln)"/>${L.map(mp).join('')}${L.map(a=>`<path d="${a[1]}" fill="url(#mfb)" opacity=".5" pointer-events="none"/><path d="${a[1]}" fill="url(#mgd)" pointer-events="none"/>`).join('')}<g fill="none" stroke="#000" stroke-width=".9" opacity=".5" stroke-linecap="round">${det}</g></g>`;
 return `<g transform="translate(${tx} 0)" filter="url(#mdp)"><ellipse cx="100" cy="22" rx="14" ry="19" fill="var(--ln)"/><path d="M91 38L89 54L100 58L111 54L109 38Z" fill="var(--ln)"/>${sd}<g transform="translate(200 0) scale(-1 1)">${sd}</g></g>`},
sel=MSEL&&MM[MSEL],ig=sel&&sel[1],
inf=sel?`<div class="tip"><b>${sel[0]}</b>${ig?' · '+ig:''}<br>${ig?(ov(ig)?'🔴 Sobreentrenado: '+OV[ig].size+' días de este grupo en 7 días, dale descanso. ':'')+(fat(ig)>0?'🔋 Aún fatigado: listo en ~'+Math.ceil((RT[ig]||3)*fat(ig))+' d':'🟢 Recuperado: puedes entrenarlo')+' · '+(c[ig]?'✅ '+c[ig]+' registros esta semana':'sin trabajar en los últimos 7 días'):'Este músculo no está en tu rutina actual.'}${ig?mxl(ig):''}${mmb()}</div>`:'<div class="mut" style="text-align:center">Toca un músculo para ver cuándo lo has trabajado.</div>';
return `<div class="card"><b>🔥 Mapa muscular</b> <span class="mut">últimos 7 días</span><svg viewBox="0 0 414 330" style="width:100%;height:auto;display:block;margin-top:6px" role="img" aria-label="Mapa muscular de la semana"><defs><pattern id="mfb" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(70)"><path d="M1.5 0V3" stroke="#000" stroke-opacity=".26" stroke-width=".6"/></pattern><linearGradient id="mgd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".36"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".2"/></linearGradient><filter id="mdp" x="-10%" y="-5%" width="120%" height="112%"><feDropShadow dx="0" dy="2" stdDeviation="2.2" flood-color="#000" flood-opacity=".35"/></filter></defs>${view(FR,MFD,0)}${view(BK,MBD,208)}<text x="100" y="323" text-anchor="middle" font-size="11" fill="var(--mut)">Delante</text><text x="308" y="323" text-anchor="middle" font-size="11" fill="var(--mut)">Detrás</text></svg><div style="margin-top:8px">${inf}<details class="mut" style="margin:6px 0"${MLG?' open':''} ontoggle="MLG=this.open"><summary>ℹ️ Cómo leer el mapa</summary>Azul = fatigado (entrenado hace poco) · se va aclarando al recuperarse (2-4 días según el grupo) · gris = listo para entrenar · 🔴 rojo = sobreentrenado (3 o más días del grupo en 7 días). ${Object.keys(c).map(n=>n+' '+c[n]).join(' · ')}</details>${Object.keys(c).filter(ov).length?'<div class="tip" style="border-color:#E5484D">🔴 Sobreentrenado: '+Object.keys(c).filter(ov).join(', ')+'. Descansa esos grupos.</div>':''}${(()=>{const r=Object.keys(c).filter(g=>!fat(g)&&!ov(g));return r.length?'<div class="tip">🟢 Listos para entrenar: '+r.join(', ')+'.</div>':'<div class="tip">Todos los grupos siguen algo fatigados: hoy mejor descanso o algo ligero.</div>'})()}${mmr()}<div class="tip">${miss.length==5?'Aún no hay entrenos registrados esta semana.':miss.length?'Te falta trabajar: '+miss.join(', ')+'.':'Has trabajado todos los grupos esta semana. 💪'}</div></div></div>`}
function mc(){apB();PROT=S.mp||155;GT=S.mg||70;Object.keys(S.t||{}).forEach(d=>{if(S.t[d]=='Spinning')S.t[d]='Cardio';else if(S.t[d]=='Fuerza + spinning')S.t[d]='Fuerza + cardio';else if(S.t[d]=='Pierna cuádriceps')S.t[d]='Cuádriceps y Gemelo';else if(S.t[d]=='Pierna femoral')S.t[d]='Femoral'})}
let MG=2700,MW=85,CE=false,MK=null,MGOAL=2700,MO=false,MPV=null;const GSK={};
const lkg=()=>{const W=[...S.w].sort((a,b)=>a.d<b.d?-1:1);return W.length?W[W.length-1].kg:85};
function mcRule(d){const t=S.t[d]||'Descanso',a=(S.ad&&S.ad[d])||[],c=t=='Cardio'||a.includes('c'),b=a.includes('a');const sm=SMT[smEf(d)];if(sm)return sm.m.slice();
 if(t=='Descanso')return[33,32,35];if(t=='Cardio')return[28,37,35];if(t=='Abdominales')return[32,35,33];
 if(t=='Cuádriceps y Gemelo')return c?[27,48,25]:[28,44,28];if(t=='Femoral')return c?[28,47,25]:[29,43,28];if(t=='Tracción'||t=='Torso')return c?[28,42,30]:[29,42,29];
 return c?(b?[28,44,28]:[28,42,30]):[30,40,30]}
function mcP(d){d=d||DT;if(MPV&&MPV.d==d)return{p:MPV.p,h:MPV.h,g:MPV.g};const o=S.mo&&S.mo[d];if(o)return{p:o.p,h:o.h,g:o.g};const r=mcRule(d);return{p:r[0],h:r[1],g:r[2]}}
function mcCombo(){const t=S.t[DT]||'Descanso',a=(S.ad||{})[DT]||[],r=mcRule(DT);return '<b>'+[t,...a.map(x=>x=='c'?'Cardio':'Abdominales')].join(' + ')+'</b> → P '+r[0]+' % · H '+r[1]+' % · G '+r[2]+' %'+((S.mo&&S.mo[DT])?' <span class="mut">(tienes una versión guardada)</span>':'')}
function mcSv(){S.mo=S.mo||{};const P=mcP(DT);S.mo[DT]={p:P.p,h:P.h,g:P.g};MPV=null;save();try{qt('💾 Macros guardados')}catch(e){}dieta()}
function mcRs(){if(S.mo)delete S.mo[DT];MPV=null;MK=null;save();dieta()}
function adChips(t){return '';if(t=='Descanso'||t=='Cardio'||t=='Abdominales')return '';const a=(S.ad||{})[DT]||[],on=k=>a.includes(k);return `<div class="row" style="margin-top:8px"><span class="mut">Sumar:</span><button class="chip${on('c')?' on':''}" onclick="tad('c')">🏃 Cardio</button></div>`}
function tad(k){const m=S.ad=S.ad||{},a=m[DT]=m[DT]||[],on=a.includes(k),f=()=>{if(on)m[DT]=a.filter(x=>x!=k);else a.push(k);MPV=null;GSK[DT]=0;if(S.mo)delete S.mo[DT];save();dieta()};if(on&&k=='c'&&num((CAL()[DT]||{}).kc))cf('¿Quitar el cardio de este día? Se borran sus kcal.',()=>{const c=CAL()[DT];c.c=0;c.kc=0;c.cmin=0;c.ke=0;f()},'Sí, quitar');else f()}
function ncd(){if(S.t[DT]=='Cardio')S.t[DT]='Descanso';else if(S.ad&&S.ad[DT])S.ad[DT]=S.ad[DT].filter(x=>x!='c');MPV=null;if(S.mo)delete S.mo[DT];GSK[DT]=0;save();dieta()}
function abT(){const d=td(),t=S.t[d]||'Descanso';if(t=='Abdominales')return;if(t=='Descanso'||t=='Cardio'&&0){S.t[d]='Abdominales'}else{const a=(S.ad=S.ad||{})[d]=S.ad[d]||[];if(!a.includes('a'))a.push('a')}if(S.mo)delete S.mo[d];save()}
function tf(s){return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')}
function rt(d,e){const v=+e[7];if(v>0)return v;return(d=='Abdominales'||e[6]||/plancha|abdomin|crunch|core|rueda|elevaciones de piernas/i.test(e[0]))?45:(e[3]?90:150)}
function bw(e){if(e[8]!=null)return !!e[8];const n=e[0]||'';return !e[6]&&!/con peso/i.test(n)&&/rueda|crunch|elevaci[oó]n(es)? de (piernas|rodillas)/i.test(n)}
function mig7(){if(S.v7)return;const g=gE(),a=g.Abdominales=g.Abdominales||[];a.forEach(x=>{if(x[6])return;if(/con peso/i.test(x[0]))x[8]=0;else if(/elevaciones de piernas|rueda|crunch/i.test(x[0]))x[8]=1});['Rueda abdominal','Crunch sin peso'].forEach(n=>{if(!a.some(x=>x[0]==n))a.push([n,0,0,1,3,[],0,0,1])});S.v7=1;save()}
function pm(v){v=String(v).trim().replace(',','.');if(!v)return 0;if(/[:.]/.test(v)){const p=v.split(/[:.]/);return(parseInt(p[0])||0)*60+(parseInt((p[1]||'0').padEnd(2,'0').slice(0,2))||0)}const n=parseFloat(v)||0;return n<=10?Math.round(n*60):Math.round(n)}
function srt(i,v){const s=Math.max(5,pm(v));gE()[gd][i][7]=s;save()}
function mig9(){if(S.v9)return;const M={'Press superior en máquina de discos (kg por lado)':['Press superior en máquina de discos',80],'Máquina de fondos (kg por lado)':['Máquina de fondos',140],'Press de hombro en máquina de discos (kg por lado)':['Press de hombro en máquina de discos',60]},d2=v=>Math.round(v*2*100)/100,ds=new Set(Object.keys(gE()));
[S.g||{},S.gh||{}].forEach((o,ix)=>Object.keys(o).forEach(k=>{const p=k.split('|');if(p.length<3)return;ds.add(p[0]);if(!M[p[1]]||p[2]!='0')return;if(ix){(o[k]||[]).forEach(x=>{if(x.kg)x.kg=d2(x.kg)})}else if(o[k]&&o[k].kg)o[k].kg=d2(o[k].kg)}));
Object.keys(M).forEach(old=>ds.forEach(d=>mg(d+'|'+old+'|',d+'|'+M[old][0]+'|')));
const g=gE();Object.keys(g).forEach(d=>(g[d]||[]).forEach(e=>{const m=M[e[0]];if(!m)return;e[0]=m[0];e[1]=m[1];e[9]=0;const k=d+'|'+m[0]+'|0';if(S.g[k])S.g[k].kg=m[1]}));
S.v9=1;save()}
function mig8(){if(S.v8)return;const a=gE().Torso,M={'Press banca en banco plano':'Press de pecho en máquina de placas','Remo con barra':'Remo en máquina de placas','Press militar con barra de pie':'Press de hombro en máquina de placas'};if(a)a.forEach(x=>{if(M[x[0]])x[0]=M[x[0]]});S.v8=1;save()}
function mig6(){if(S.v6)return;const g=gE();const a=g.Abdominales=g.Abdominales||[];['Plancha neutra','Plancha lateral izquierda','Plancha lateral derecha'].forEach(n=>{if(!a.some(x=>x[0]==n))a.push([n,0,30,1,3,[],1])});S.v6=1;save()}
let WST=0,WRT=0;
function wad(d){WRT=Math.max(5,WRT+d);TE=WST+WRT*1000;const i=$('wrs');if(i)i.value=tf(WRT)}
function wset(v){WRT=Math.max(5,pm(v)||WRT);TE=WST+WRT*1000;const i=$('wrs');if(i)i.value=tf(WRT)}
let HTG=0;
function mset(g){const P=mcP();PROT=Math.round(g*P.p/400);GT=Math.round(g*P.g/900);HTG=Math.round(g*P.h/400)}
function mcInfo(k,P){const gr=k=='g'?MG*P.g/900:MG*P[k]/400,kg=gr/MW;let t;
 if(k=='p')t=kg<1.8?'⚠ Por debajo del rango óptimo para músculo (1,8–2,5 g/kg)':kg>2.5?'⚠ Te pasas del rango óptimo (1,8–2,5 g/kg): más proteína no da más músculo':'✅ En el rango óptimo (1,8–2,5 g/kg)';
 else if(k=='g')t=P.g<20?'⚠ Muy pocas grasas (mínimo ~20 %): afecta a las hormonas':P.g>35?'⚠ Muchas grasas (más del 35 %)':'✅ Rango sano (20–35 %)';
 else t=kg<3?'⚠ Pocos hidratos para entrenar fuerza (mejor 3 g/kg o más)':'✅ Suficientes para entrenar';
 return[P[k]+' % · '+Math.round(MG*P[k]/100)+' kcal · '+Math.round(gr)+' g · '+fm(kg)+' g/kg',t]}
function mcTot(P){const s=P.p+P.h+P.g;return s==100?'✅ Suman 100 %':'⚠ Suman '+s+' %: '+(s>100?'te pasas':'te faltan')+' '+Math.abs(Math.round(MG*(s-100)/100))+' kcal sobre tu objetivo'}
function mcMove(k,v){const P=mcP(DT);P[k]=v;MPV=Object.assign({d:DT},P)}
function mcK(v){MK=v>0?Math.round(v):null;MG=MK||MGOAL;$('mnote').textContent=MK&&MK!=MGOAL?'Solo para jugar con los porcentajes. Tu objetivo real de hoy es '+MGOAL+' kcal.':'Es tu objetivo de hoy.';mcUpd()}
function mcUpd(){const P=mcP();['p','h','g'].forEach(k=>{const i=mcInfo(k,P);$('mv'+k).textContent=i[0];$('mt'+k).textContent=i[1]});$('mtot').textContent=mcTot(P)}
function mcCard(g,HT){MGOAL=g;MG=MK||g;MW=lkg();const P=mcP();
 return `<details id="dm" class="card"${MO?' open':''} ontoggle="MO=this.open"><summary style='display:flex;align-items:center;gap:10px'><svg viewBox='0 0 36 36' style='width:34px;flex:0 0 34px'><circle r='15.9' cx='18' cy='18' fill='none' stroke='#2DA44E' stroke-width='7' stroke-dasharray='${P.p} ${100-P.p}' transform='rotate(-90 18 18)'/><circle r='15.9' cx='18' cy='18' fill='none' stroke='#F5A524' stroke-width='7' stroke-dasharray='${P.h} ${100-P.h}' stroke-dashoffset='${-P.p}' transform='rotate(-90 18 18)'/><circle r='15.9' cx='18' cy='18' fill='none' stroke='#E5484D' stroke-width='7' stroke-dasharray='${P.g} ${100-P.g}' stroke-dashoffset='${-(P.p+P.h)}' transform='rotate(-90 18 18)'/></svg><b>Macros</b><span class='mut'>P ${P.p}% · H ${P.h}% · G ${P.g}%</span></summary><div class="mut" style="margin:8px 0">${mcCombo()}<br>Mueve cada macro como quieras (son independientes). Peso usado: ${fm(MW)} kg.</div><label class="mut">Calorías del día<input id="mkc" inputmode="numeric" value="${MG}" oninput="mcK(num(this.value))" style="width:100%"></label><div class="mut" id="mnote" style="margin-bottom:6px">${MK&&MK!=g?'Solo para jugar con los porcentajes. Tu objetivo real de hoy es '+g+' kcal.':'Es tu objetivo de hoy.'}</div>${[['p','Proteína','#2DA44E'],['h','Hidratos','#F5A524'],['g','Grasas','#E5484D']].map(r=>{const i=mcInfo(r[0],P);return `<div style="margin:12px 0"><div class="row" style="justify-content:space-between;flex-wrap:nowrap"><b style="color:${r[2]}">${r[1]}</b><span id="mv${r[0]}" class="mut">${i[0]}</span></div><input type="range" id="ms${r[0]}" min="0" max="80" step="1" value="${P[r[0]]}" oninput="mcMove('${r[0]}',+this.value);mcUpd()" onchange="dieta()" style="width:100%;accent-color:${r[2]}"><div class="mut" id="mt${r[0]}">${i[1]}</div></div>`}).join('')}<div class="tip" id="mtot">${mcTot(P)}</div><div class="row"><button onclick="mcSv()" aria-label="Guardar macros" style="font-size:18px">💾 Guardar</button><button class="g" onclick="mcRs()">Restablecer (${mcRule(DT).join(' / ')} %)</button></div></details>`}
const CT=['Cinta','Cardio','Paseo','Elíptica','Otro'],MET={Cinta:7,Cardio:7,'Paseo':3.5,'Elíptica':5.5,Otro:5};
function cAdjC(d){const k=num((CAL()[d]||{}).kc);return k?Math.round(.8*k):0}
const PBASE=6000,pAdj=d=>{const x=Math.max(0,((S.ps||{})[d]||0)-PBASE);return Math.round(.8*x*.0004*lkg())};
function cAdj(d,t){return cAdjC(d)+pAdj(d)+smK(d)}
const SMT={HD:{n:'Heavy Duty / HIT',a:2550,m:[32,38,30]},FB:{n:'Full Body',a:2700,m:[30,40,30]},PB:{n:'Powerbuilding',a:2800,m:[28,44,28]},CF:{n:'CrossFit / híbrido',a:3000,m:[25,50,25]},VJ:{n:'Viaje / peso corporal',a:2550,m:[32,38,30]}};
function smEf(d){const v=(S.sm||{})[d];if(v)return v;try{for(const k in S.gh){if(k.startsWith('TR-')&&S.gh[k].some(x=>x.d==d&&(x.kg||x.r)))return'VJ'}}catch(e){}return''}
function smAu(d){return !(S.sm||{})[d]&&smEf(d)=='VJ'}
function smK(d){const s=SMT[smEf(d)];return s?s.a-((D.find(x=>x[0]==(S.t[d]||'Descanso'))||DS)[1]):0}
function smSet(v){S.sm=S.sm||{};if(v)S.sm[DT]=v;else{delete S.sm[DT];if(smEf(DT)=='VJ')S.sm[DT]='N'}MPV=null;GSK[DT]=0;if(S.mo)delete S.mo[DT];save();dieta()}
function smRow(){const cur=smEf(DT),s=SMT[cur];return `<div class="cr" style="flex:1 1 0;min-width:0"><select style="width:100%" aria-label="Tipo de entreno" onchange="smSet(this.value)"><option value="">Entreno: normal</option>${Object.keys(SMT).map(k=>`<option value="${k}"${k==cur?' selected':''}>${SMT[k].n}</option>`).join('')}</select></div>`}
function smCap(){const s=SMT[smEf(DT)],P=mcP(DT);return `<div class="mut" style="margin-top:2px;text-align:center">${s?s.n+(smAu(DT)?' (automático, has entrenado en viaje)':''):(S.t[DT]||'Descanso')}: P ${P.p} % · H ${P.h} % · G ${P.g} %</div>`}
function usel(t){const cur=smEf(DT),v=(cur&&SMT[cur])?'s:'+cur:'d:'+t,o=(val,n)=>`<option value="${val}"${val==v?' selected':''}>${n}</option>`,g=(l,a)=>`<optgroup label="${l}">${a.join('')}</optgroup>`,dn=n=>o('d:'+n,n);return `<div class="cr" style="width:100%"><select style="width:100%" aria-label="Entreno de hoy" onchange="usSet(this.value)">${g('📁 Mi rutina',['Empuje','Tracción','Torso','Cuádriceps y Gemelo','Femoral'].map(dn))}${g('📁 Rutinas predeterminadas',['HD','FB','PB','CF'].map(k=>o('s:'+k,SMT[k].n)))}${g('🌴 Viaje',[o('s:VJ',SMT.VJ.n)])}${g('😴 Descanso y otros',['Descanso','Cardio','Abdominales'].map(dn))}</select></div>`}
function usSet(v){S.sm=S.sm||{};if(v.startsWith('s:'))S.sm[DT]=v.slice(2);else{S.t[DT]=v.slice(2);if(smEf(DT))S.sm[DT]='N'}MPV=null;GSK[DT]=0;if(S.mo)delete S.mo[DT];save();dieta()}
const PCE={'Suave':3.5,'Moderado':5.5,'Exigente':8,'Muy exigente':10};
function cdEst(){const m=Math.round(num($('cpm').value)),p=$('cpr').value;if(!m){alert('Pon los minutos para poder estimar las kcal.');$('cpm').focus();return}const k=Math.round((PCE[p]||8)*m*lkg()/60);$('ck').value=k;CE=true;$('cest').textContent='≈ '+k+' kcal estimadas (puedes corregirlas)'}
function cdCard(t){const c=CAL()[DT]||{},ad=cAdjC(DT),gate=(/ardio/.test(t)||((S.ad||{})[DT]||[]).includes('c'))&&!num(c.kc)&&!GSK[DT];CE=false;
 const body=`<b style="display:block;padding-right:34px">🏃 ${gate?'Apunta el cardio de este día para seguir':'Cardio de hoy'}</b>${c.kc?`<div class="mut" style="margin:6px 0">${c.kc} kcal${c.ke?' (estimadas)':''} · suma a tu objetivo: +${ad} kcal</div>`:''}<div class="row" style="margin:8px 0"><input id="ck" inputmode="numeric" placeholder="kcal quemadas" value="${c.ke?'':(c.kc||'')}"></div><details style="margin:8px 0"><summary>No sé las kcal: estimarlas</summary><div class="mut" style="margin:6px 0">Solo para calcular las kcal: ¿qué tan exigente fue y cuántos minutos?</div><div class="row"><select id="cpr" aria-label="Ritmo">${Object.keys(PCE).map(x=>`<option${x=='Exigente'?' selected':''}>${x}</option>`).join('')}</select><input id="cpm" inputmode="numeric" placeholder="minutos"></div><button class="g" style="margin-top:6px" onclick="cdEst()">Estimar kcal</button><div class="mut" id="cest"></div></details><div class="row"><button onclick="cdSet()">Guardar cardio</button>${c.kc?'<button class="g" onclick="cdDel()">Quitar</button>':''}${gate?'<button class="g" onclick="ncd()">No hice cardio</button>':''}</div><div class="mut" style="margin-top:6px">Cuento el 80 % de las kcal porque las máquinas sobreestiman, y ese 80 % se suma a tu objetivo del día. El día de Cardio parte de la base de descanso y Fuerza + cardio de la de fuerza.</div>`;
 return gate?`<div style="position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;padding:20px;z-index:25"><div class="card" style="width:100%;max-width:420px;max-height:90vh;overflow:auto;position:relative"><button class="mdx" style="top:8px;right:8px" onclick="GSK[DT]=1;dieta()" aria-label="Cerrar">✕</button>${body}</div></div>`:`<details id='dc' class='card'><summary><b>🏃 Cardio</b> <span class='mut'>${c.kc?c.kc+' kcal':'toca para apuntar'}</span></summary><div style='margin-top:8px'>${body}</div></details>`}
function cdSet(){const k=Math.round(num($('ck').value));if(!k){alert('Pon las kcal del cardio (o usa "No sé las kcal: estimarlas").');return}const c=CAL()[DT]=CAL()[DT]||{};c.c=1;c.ct='Cardio';delete c.cmin;c.kc=k;c.ke=CE?1:0;CE=false;save();dieta()}
function cdDel(){const c=CAL()[DT];if(c){c.c=0;c.kc=0;c.cmin=0;c.ke=0}save();dieta()}
async function chef(){const o=$('chf');o.hidden=false;o.innerHTML='<div class="mut">Pensando platos…</div>';try{const r=await SM.json(`Eres chef y dietista. Me quedan hoy ${Math.round(RM.k)} kcal, ${Math.round(RM.p)} g de proteína, ${Math.round(RM.h)} g de hidratos y ${Math.round(RM.g)} g de grasa (si algún valor es negativo ya me he pasado: propón algo ligero). Propón 3 platos distintos para ${SL||dfl()}, con ingredientes de supermercado español y cantidades en gramos, que encajen en esos macros. Tengo robot Cecotec Mambo: indica programa, temperatura (°C), velocidad y tiempo para hacerlo en él. Da los macros de cada ingrediente (que sumen el total del plato). Responde solo JSON: {"platos":[{"n":"nombre","kcal":0,"p":0,"h":0,"g":0,"ing":[{"i":"ingrediente con gramos","k":0,"p":0,"h":0,"f":0}],"mambo":"programa, temperatura, velocidad, tiempo","paso":"preparación en 2 frases"}]}`,{modelTier:'default'});o.innerHTML=(r.platos||[]).slice(0,3).map(x=>`<div class="tip"><b>${esc(x.n)}</b> · ${Math.round(num(x.kcal))} kcal · P ${Math.round(num(x.p))} · H ${Math.round(num(x.h))} · G ${Math.round(num(x.g))}<br>${Array.isArray(x.ing)?x.ing.map(y=>'• '+esc(y.i)+' — '+Math.round(num(y.k))+' kcal · P '+Math.round(num(y.p))+' · H '+Math.round(num(y.h))+' · G '+Math.round(num(y.f))).join('<br>'):esc(x.ing)}<br>🤖 Mambo: ${esc(x.mambo)}<br>${esc(x.paso)}</div>`).join('')||'<div class="mut">No he podido generarlas.</div>'}catch(e){o.innerHTML='<div class="mut">No he podido generarlas, prueba otra vez.</div>'}}
ap();mc();mig5();
go(0);cloud().then(()=>setTimeout(()=>{try{wlc()}catch(e){}},500));
(async()=>{try{SM=await claude.use('sample');DL=await claude.use('downloads');if(tab==0)dieta()}catch(e){}})();

(function(){const g=window.go;if(typeof g!=='function')return;window.go=function(){const r=g.apply(this,arguments);try{const b=document.body;b.classList.add('sw');clearTimeout(window._swt);window._swt=setTimeout(()=>b.classList.remove('sw'),900);document.querySelectorAll('#v .big').forEach(e=>{const t=e.textContent.trim();if(!/^-?\d+([.,]\d+)?$/.test(t))return;const d=(t.split(/[.,]/)[1]||'').length,v=parseFloat(t.replace(',','.')),c=t.includes(',');let s0=null;(function f(ts){s0=s0||ts;const p=Math.min((ts-s0)/700,1),k=1-Math.pow(1-p,3);e.textContent=p<1?(v*k).toFixed(d).replace('.',c?',':'.'):t;if(p<1)requestAnimationFrame(f)})(performance.now())})}catch(x){}return r}})();

(function(){const g=window.go;if(typeof g!=='function')return;
const nv=()=>{const n=document.querySelector('nav');if(n)n.style.setProperty('--i',Math.max(0,[...n.children].findIndex(x=>x.classList.contains('on'))))};
window.go=function(){const r=g.apply(this,arguments);try{nv();if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('pre');io.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('#v>*').forEach(el=>{if(el.getBoundingClientRect().top>innerHeight*.9){el.classList.add('pre');io.observe(el)}})}}catch(x){}return r};
setTimeout(nv,60);
document.addEventListener('pointerdown',e=>{const t=e.target;if(!t.closest)return;const b=t.closest('button');if(b){const z=b.closest('#v')?(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--z'))||1):1,r=b.getBoundingClientRect(),d=Math.max(r.width,r.height)*2.2/z,sp=document.createElement('span');sp.className='rp';sp.style.cssText='width:'+d+'px;height:'+d+'px;left:'+((e.clientX-r.left)/z-d/2)+'px;top:'+((e.clientY-r.top)/z-d/2)+'px';if(getComputedStyle(b).position==='static')b.style.position='relative';b.style.overflow='hidden';b.appendChild(sp);setTimeout(()=>sp.remove(),700)}},{passive:true});
const hv=e=>{const h=e.target.closest&&e.target.closest('.hero');if(!h)return;const r=h.getBoundingClientRect();h.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');h.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%')};
document.addEventListener('pointermove',hv,{passive:true});document.addEventListener('pointerdown',hv,{passive:true})})();

(function(){try{const d=document.createElement('div');d.id='sp';d.innerHTML='<div class="lg"></div><i class="sb"></i>';document.body.appendChild(d);const o=()=>{d.classList.add('out');setTimeout(()=>d.remove(),800)};d.addEventListener('click',o);setTimeout(o,1700)}catch(e){}})();

function cele(t){try{const c=document.createElement('canvas');c.style.cssText='position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:100001;zoom:1';c.width=innerWidth;c.height=innerHeight;document.body.appendChild(c);const x=c.getContext('2d'),P=[...Array(130)].map(()=>({x:c.width/2,y:c.height*.62,vx:(Math.random()-.5)*14,vy:-8-Math.random()*12,s:5+Math.random()*6,r:Math.random()*6,vr:(Math.random()-.5)*.4,c:['#7CFC00','#C6FF4D','#2745D6','#fff','#F08A24'][Math.random()*5|0]}));let f=0;(function a(){x.clearRect(0,0,c.width,c.height);P.forEach(p=>{p.vy+=.45;p.x+=p.vx;p.y+=p.vy;p.vx*=.99;p.r+=p.vr;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.c;x.globalAlpha=Math.max(0,1-f/110);x.fillRect(-p.s/2,-p.s/4,p.s,p.s/2);x.restore()});if(++f<115)requestAnimationFrame(a);else c.remove()})();const b=document.createElement('div');b.className='ct';b.textContent=t;document.body.appendChild(b);setTimeout(()=>b.remove(),2400)}catch(e){}}
const E1=(k,n)=>k*(1+n/30);
function isRec(key,kg,r){const h=(S.gh[key]||[]).filter(z=>z.d!=td());return !!(kg&&r&&h.length&&E1(kg,r)>Math.max(...h.map(z=>E1(z.kg,z.r)))+.01)}
(function(){const _sg=window.sg,_aw=window.addW,_gy=window.gym;
window.sg=function(i){let rec=false,nm='';try{const key=kf(i);rec=isRec(key,num($('gk'+i).value),Math.round(num($('gr'+i).value)));nm=GG()[gd][i][0]}catch(x){}const o=_sg.apply(this,arguments);if(rec)cele('🏆 ¡Récord! '+nm);return o};
window.addW=function(){let m=false;try{const kg=num($('wk').value),d=$('wd').value||td(),o=S.w.filter(w=>w.d!=d);m=!!(kg&&o.length&&kg<Math.min(...o.map(w=>w.kg)))}catch(x){}const r=_aw.apply(this,arguments);if(m)cele('⚖️ ¡Nuevo peso mínimo!');return r};
window.gym=function(){try{if(td()=='2026-11-04'&&!S.cl4){['Empuje|Press superior en máquina de discos (kg por lado)|0','Empuje|Máquina de fondos (kg por lado)|0'].forEach(k=>{if(S.gh[k])S.gh[k]=S.gh[k].filter(z=>z.d!='2026-11-04')});S.cl4=1;save()}}catch(x){}const r=_gy.apply(this,arguments);try{const v=$('v'),h=v.querySelector('.card.hero');if(h&&!$('wm')&&(GG()[gd]||[]).length){const b=document.createElement('button');b.id='wm';b.textContent='▶ Modo entrenamiento';b.onclick=()=>wm(0);h.after(b);if(/^(TR|CF|CA)-/.test(prg(gd))){const c=document.createElement('button');c.id='wc';c.className='g';c.style.marginTop='8px';c.textContent='🔄 Modo circuito (EMOM · Tabata · AMRAP)';c.onclick=()=>cirO(gd);b.after(c)}}}catch(x){}try{const h2=$('v').querySelector('.card.hero');if(h2&&!$('vjb')&&typeof pz=='function'&&pz(td())){if(S.vjd!=td()){S.vjd=td();S.sm=S.sm||{};if(!S.sm[td()])S.sm[td()]='VJ';save()}if(!/^TR-/.test(prg(gd))){const bn=document.createElement('div');bn.id='vjb';bn.className='tip';bn.innerHTML='🌴 Estás en modo pausa: kcal y macros de Viaje ya aplicados. ¿Entrenar con peso corporal?<div class="row" style="margin-top:8px"><button onclick="vjGo(\'A\')">Cuerpo entero · sin material</button><button class="g" onclick="vjGo(\'B\')">Cuerpo entero · con banda</button></div>';h2.after(bn)}}if(h2&&!$('wx')){const sb=document.createElement('button');sb.id='ws';sb.className='g';sb.style.cssText='flex:1;margin:0;width:auto';sb.textContent='🧘 Estiramientos';sb.onclick=()=>strO();const wx=document.createElement('div');wx.id='wx';wx.style.cssText='display:flex;gap:8px;margin-top:18px;margin-bottom:6px';wx.appendChild(sb);const ab=$('wab');if(ab){ab.style.cssText='flex:1;margin:0;width:auto';wx.appendChild(ab)}($('wc')||$('wm')||h2).after(wx)}}catch(x){}return r}})();
const hhmm=()=>new Date().toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit',hour12:false});
function doneChip(k){const x=(S.gh[k]||[]).find(z=>z.d==td());return x?'<span class="dnc">✓ Completado hoy · '+x.d.slice(8)+'/'+x.d.slice(5,7)+'/'+x.d.slice(0,4)+(x.t?' · '+x.t:'')+'</span>':''}
function serBar(n,t,rest){const c=Math.min(n+1,t),dn=n>=t;return `<div class="sbr"><div class="sbt"><b key="${c}">${rest&&!dn?'Próxima · ':''}Serie ${c}/${t}</b><span>${dn?'✓ todas hechas':n+(n==1?' hecha':' hechas')}</span></div><div class="sbs" role="img" aria-label="Serie ${c} de ${t}">${Array.from({length:t},(_,i)=>`<i class="${i<n?'sd':i==n?'sc':''}${i==n-1?' sn':''}"><u></u></i>`).join('')}</div></div>`}
const BC={};
function barc(id,rows,mets,ser,key,title){const o=BC[id]=BC[id]||{m:0,all:0,sel:null,n:0};if(o.n!=rows.length){o.sel=null;o.n=rows.length}o.rows=rows;o.mets=mets;o.ser=ser;o.key=key;o.title=title;return `<div class="bxw" id="${id}" data-gx="bx:${id}">${bcr(id,1)}</div>`}
function bxc(o){const M=o.mets[Math.min(o.m,o.mets.length-1)],A=o.rows,K=o.all?A.length:Math.min(10,A.length),R=A.slice(-K),V=R.map(x=>M.f(x,o.ser)),best=Math.max(...A.map(x=>M.f(x,o.ser))),si=o.sel!=null&&o.sel<R.length?o.sel:R.length-1;return{M,A,K,R,V,best,si}}
function bxHi(o,c,i){const M=c.M,R=c.R,V=c.V,v=V[i],pv=i>0?V[i-1]:null,r1=x=>Math.round(x*10)/10,dd=d=>d.slice(8)+'/'+d.slice(5,7),dl=pv==null?'':(v>pv?'▲ +':v<pv?'▼ −':'= ')+(v==pv?'igual':fm(r1(Math.abs(v-pv)))+' '+M.u);return `<b>${fm(r1(v))}<small> ${M.u}</small></b><span>${dd(R[i].d)}${dl?' · '+dl:''}${v==c.best&&v>0?' · 🏆 récord':''}${M.l!='Volumen'&&gxDL(R[i].d,o.key)?' · 🔹 descarga':''}</span>`}
function bcr(id,an){const o=BC[id],c=bxc(o),M=c.M,A=c.A,K=c.K,R=c.R,V=c.V,best=c.best,si=c.si,mx=Math.max(...V,1),dd=d=>d.slice(8)+'/'+d.slice(5,7),line=M.l!='Volumen'&&R.length>=2;
let ch;if(line){const mnv=Math.min(...V),mxv=Math.max(...V),pd=((mxv-mnv)||Math.max(1,mxv*.1))*.25,P=R.map((x,i)=>({v:V[i],d:x.d,dl:gxDL(x.d,o.key),best:V[i]==best&&best>0})),q={id:id,fs:10,lo:Math.max(0,mnv-pd),hi:mxv+pd,sel:si};o.q=q;ch=`<div class="bxl" onpointerdown="bpl(event,'${id}')" onpointermove="bpl(event,'${id}')">${gxSv(300,150,P,q)}</div>`}
else ch=`<div class="bxc${an?' an':''}" onpointerdown="bpm(event,'${id}')" onpointermove="bpm(event,'${id}')">${V.map((y,i)=>`<button class="bxb${i==si?' on':''}${y==best&&y>0?' bs':''}" style="--h:${Math.max(5,y/mx*100)}%;--d:${i*40}ms" onclick="bsl('${id}',${i})" aria-label="${dd(R[i].d)}: ${fm(Math.round(y*10)/10)} ${M.u}"><i></i><span>${K<=6||(K-1-i)%2==0?dd(R[i].d):''}</span></button>`).join('')}</div>`;
return `<div class="bxh">${bxHi(o,c,si)}</div>${ch}<div class="bxf">${o.mets.length>1?o.mets.map((m,j)=>`<button class="chip${j==o.m?' on':''}" onclick="bmt('${id}',${j})">${m.l}</button>`).join(''):''}${A.length>10?`<button class="chip${o.all?' on':''}" onclick="bal('${id}')">${o.all?'Últimas 10':'Ver todo ('+A.length+')'}</button>`:''}${A.length>1?`<button class="chip" onclick="gxv('bx','${id}')">⤢ Ampliar</button>`:''}</div>`}
function bcu(id,an){const e=$(id);if(e)e.innerHTML=bcr(id,an)}
function bsl(id,i){BC[id].sel=i;bcu(id,0)}
function bmt(id,j){BC[id].m=j;bcu(id,1)}
function bal(id){const o=BC[id];o.all=o.all?0:1;o.sel=null;bcu(id,1)}
function bpm(ev,id){if(ev.pointerType=='mouse'&&!ev.buttons)return;const c=ev.currentTarget,b=c.querySelectorAll('.bxb'),r=c.getBoundingClientRect(),i=Math.max(0,Math.min(b.length-1,Math.floor((ev.clientX-r.left)/r.width*b.length)));const o=BC[id];if(o.sel!==i){o.sel=i;const m=o.mets[Math.min(o.m,o.mets.length-1)];bcu(id,0)}}

const gxDL=(d,k)=>{try{return !!((S.dl&&S.dl.s&&d>=S.dl.s&&d<=S.dl.e)||(k&&S.xd&&S.xd[k]&&d>=S.xd[k].s&&d<=S.xd[k].e))}catch(e){return false}};
function gxSv(W,H,P,o){const n=P.length,fs=o.fs||10,L=Math.round(fs*3.8),Rr=10,T=14,B=Math.round(fs*2),pw=W-L-Rr,ph=H-T-B,bars=!!o.bars,lo=o.lo,hi=o.hi,rg=(hi-lo)||1,X=i=>bars?L+(i+.5)*pw/n:(n==1?L+pw/2:L+i/(n-1)*pw),Y=v=>T+(1-(v-lo)/rg)*ph,dt=d=>d.slice(8)+'/'+d.slice(5,7);o.px=P.map((p,i)=>({x:X(i),y:Y(p.v)}));
let s=`<svg class="gxs" viewBox="0 0 ${W} ${H}" data-w="${W}" data-l="${L}" data-r="${Rr}" data-n="${n}" data-b="${bars?1:0}" style="display:block;width:100%;height:${o.fit?'100%':'auto'};touch-action:${o.fit?'none':'pan-y'};user-select:none;-webkit-user-select:none">`;
for(let k=0;k<4;k++){const v=lo+rg*k/3,y=Y(v);s+=`<line x1="${L}" x2="${W-Rr}" y1="${y}" y2="${y}" stroke="var(--ln)" stroke-dasharray="2 3"/><text x="${L-5}" y="${y+fs*.35}" text-anchor="end" font-size="${fs}" fill="var(--mut)">${fm(Math.round(v*10)/10)}</text>`}
const st=Math.max(1,Math.ceil(n/Math.max(2,Math.floor(pw/(fs*4.8)))));P.forEach((p,i)=>{if(i%st==0)s+=`<text x="${X(i)}" y="${H-B+fs*1.35}" text-anchor="middle" font-size="${fs}" fill="var(--mut)">${dt(p.d)}</text>`});
if(bars){const bw=Math.min(36,pw/n*.7);P.forEach((p,i)=>{const y=Y(p.v);s+=`<rect class="gxb" x="${X(i)-bw/2}" y="${y}" width="${bw}" height="${Math.max(2,Y(lo)-y)}" rx="${Math.min(6,bw/3)}" fill="${p.best?'var(--ok)':'var(--t)'}" opacity="${i==o.sel?1:.38}"/>`})}
else{let d='';P.forEach((p,i)=>{d+=(i?'L':'M')+X(i)+','+Y(p.v)});
s+=`<defs><linearGradient id="gxg${o.id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--t);stop-opacity:.3"/><stop offset="1" style="stop-color:var(--t);stop-opacity:0"/></linearGradient></defs><path d="${d}L${X(n-1)},${Y(lo)}L${X(0)},${Y(lo)}Z" fill="url(#gxg${o.id})"/>`;
if(o.tr&&o.tv)s+=`<polyline fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="5 3" opacity=".45" points="${o.tv.map((v,i)=>X(i)+','+Y(v)).join(' ')}"/>`;
s+=`<path d="${d}" fill="none" stroke="var(--t)" stroke-width="${fs>11?3:2.5}" stroke-linejoin="round" stroke-linecap="round"/>`;
const r=n>60?2:n>30?3:fs>11?5:4;P.forEach((p,i)=>{s+=`<circle cx="${X(i)}" cy="${Y(p.v)}" r="${p.best?r+1.5:r}" fill="${p.dl?'#38BDF8':p.best?'var(--ok)':'var(--t)'}" stroke="var(--card)" stroke-width="1.5"/>`;if(p.best&&p.v>0)s+=`<text x="${X(i)}" y="${Y(p.v)-r-4}" text-anchor="middle" font-size="${fs+2}" fill="#E8B923">★</text>`});
const q=o.px[o.sel]||o.px[n-1];s+=`<line class="gxl" x1="${q.x}" x2="${q.x}" y1="${T}" y2="${H-B}" stroke="var(--t)" stroke-dasharray="3 3" opacity=".6"/><circle class="gxc" cx="${q.x}" cy="${q.y}" r="${r+3}" fill="var(--card)" stroke="var(--t)" stroke-width="3"/>`}
return s+'</svg>'}
function gxMk(root,q,i){const p=q.px[i];if(!p)return;const l=root.querySelector('.gxl'),c=root.querySelector('.gxc');if(l){l.setAttribute('x1',p.x);l.setAttribute('x2',p.x)}if(c){c.setAttribute('cx',p.x);c.setAttribute('cy',p.y)}root.querySelectorAll('.gxb').forEach((e,j)=>e.setAttribute('opacity',j==i?1:.38))}
function gxIx(ev,sv,rot){const r=sv.getBoundingClientRect(),W=+sv.dataset.w,L=+sv.dataset.l,R=+sv.dataset.r,n=+sv.dataset.n,bars=sv.dataset.b=='1',fr=rot?(ev.clientY-r.top)/r.height:(ev.clientX-r.left)/r.width,x=fr*W,pw=W-L-R;return Math.max(0,Math.min(n-1,bars?Math.floor((x-L)/pw*n):Math.round((x-L)/pw*(n-1))))}
function bpl(ev,id){if(ev.pointerType=='mouse'&&!ev.buttons)return;const o=BC[id],w=document.getElementById(id);if(!o||!w||!o.q)return;const sv=w.querySelector('svg');if(!sv)return;const i=gxIx(ev,sv,false);if(o.sel===i)return;o.sel=i;const c=bxc(o),h=w.querySelector('.bxh');if(h)h.innerHTML=bxHi(o,c,i);gxMk(w,o.q,i)}
let GX=null;
function gxv(k,id){let g;if(k=='w'){const W=[...(S.w||[])].filter(w=>w.kg).sort((a,b)=>a.d<b.d?-1:1);if(W.length<2){qt('Hacen falta al menos 2 pesos');return}g={k:'w',title:'⚖️ Peso corporal',rows:W,mets:[{l:'Peso',u:'kg',f:x=>x.kg}],m:0,low:1,opts:[30,90,180]}}else{const o=BC[id];if(!o||o.rows.length<2){qt('Hacen falta al menos 2 sesiones');return}g={k:'bx',id:id,title:o.title||'Progresión',rows:o.rows,mets:o.mets,m:Math.min(o.m,o.mets.length-1),ser:o.ser,key:o.key,opts:[10,20,40]}}
g.rot=false;g.N=Math.min(k=='w'?30:20,g.rows.length);g.st=g.rows.length-g.N;g.sel=g.rows.length-1;GX=g;const old=document.getElementById('gxo');if(old)old.remove();const e=document.createElement('div');e.id='gxo';e.className='gxo';e.innerHTML=`<div class="gxt"><b>${esc(g.title)}</b><span style="flex:1"></span><button class="chip" id="gxrb" onclick="gxrot()">↻ Girar</button><button class="chip" onclick="gxc()" aria-label="Cerrar">✕</button></div><div id="gxh" class="gxh"></div><div id="gxm" class="gxcw" onpointerdown="gxp(event)" onpointermove="gxp(event)"></div><div id="gxf" class="gxf"></div><div class="gxd"><div class="gxl2"><span id="gxa"></span><span id="gxz"></span></div><input type="range" id="gxr" min="0" max="0" value="0" step="1" oninput="gxS(this.value)" aria-label="Moverte por la gráfica"></div>`;document.body.appendChild(e);hap(12);requestAnimationFrame(()=>requestAnimationFrame(gxd))}
function gxd(){const g=GX;if(!g)return;const M=g.mets[g.m],all=g.rows.map(x=>M.f(x,g.ser)),bars=M.l=='Volumen',vis=g.rows.slice(g.st,g.st+g.N),mn=Math.min(...all),mx=Math.max(...all),best=g.low?mn:mx,cw=document.getElementById('gxm');if(!cw)return;const W=cw.clientWidth,H=cw.clientHeight;if(W<60||H<60)return;let lo,hi;if(bars){lo=0;hi=(mx*1.1)||1}else{const pd=((mx-mn)||Math.max(1,mx*.1))*.2;lo=Math.max(0,mn-pd);hi=mx+pd}
const P=vis.map((x,j)=>{const v=all[g.st+j];return{v:v,d:x.d,dl:g.k=='bx'&&!bars&&gxDL(x.d,g.key),best:v==best&&v>0}});if(g.sel<g.st||g.sel>=g.st+g.N)g.sel=g.st+g.N-1;const q={id:'v',fs:12,lo:lo,hi:hi,bars:bars,sel:g.sel-g.st,fit:1};if(g.k=='w'){q.tr=1;q.tv=g.rows.map((_,i)=>{const a=all.slice(Math.max(0,i-6),i+1);return a.reduce((x,y)=>x+y,0)/a.length}).slice(g.st,g.st+g.N)}g.q=q;g.P=P;g.M=M;g.all=all;cw.innerHTML=gxSv(W,H,P,q);gxH();gxCtl()}
function gxH(){const g=GX,el=document.getElementById('gxh');if(!g||!el)return;const i=g.sel-g.st,p=g.P[i];if(!p)return;const v=p.v,pv=g.sel>0?g.all[g.sel-1]:null,r1=x=>Math.round(x*10)/10,dl=pv==null?'':(v>pv?'▲ +':v<pv?'▼ −':'= ')+(v==pv?'igual':fm(r1(Math.abs(v-pv)))+' '+g.M.u);el.innerHTML=`<b>${fm(r1(v))}<small> ${g.M.u}</small></b><span>${p.d.slice(8)+'/'+p.d.slice(5,7)}${dl?' · '+dl:''}${p.best?(g.low?' · 🏆 mínimo':' · 🏆 récord'):''}${p.dl?' · 🔹 descarga':''}</span>`}
function gxCtl(){const g=GX;if(!g)return;const tot=g.rows.length,h=[];if(g.mets.length>1)g.mets.forEach((m,j)=>h.push(`<button class="chip${j==g.m?' on':''}" onclick="gxM(${j})">${m.l}</button>`));h.push('<span class="mut" style="margin-left:4px">Ver:</span>');g.opts.filter(x=>x<tot).forEach(x=>h.push(`<button class="chip${g.N==x?' on':''}" onclick="gxN(${x})">${x}</button>`));h.push(`<button class="chip${g.N==tot?' on':''}" onclick="gxN(${tot})">Todo (${tot})</button>`);document.getElementById('gxf').innerHTML=h.join('');const r=document.getElementById('gxr'),dd=d=>d.slice(8)+'/'+d.slice(5,7);if(r){r.max=Math.max(0,tot-g.N);if(+r.value!=g.st)r.value=g.st;r.disabled=tot==g.N;r.style.opacity=tot==g.N?.35:1}document.getElementById('gxa').textContent='◀ '+dd(g.rows[g.st].d);document.getElementById('gxz').textContent=dd(g.rows[g.st+g.N-1].d)+' ▶'}
function gxp(ev){const g=GX;if(!g||!g.q)return;if(ev.pointerType=='mouse'&&!ev.buttons)return;const sv=document.querySelector('#gxm svg');if(!sv)return;const i=gxIx(ev,sv,g.rot);if(g.sel==g.st+i)return;g.sel=g.st+i;gxMk(document.getElementById('gxm'),g.q,i);gxH()}
function gxS(v){const g=GX;if(!g)return;g.st=+v;gxd()}
function gxN(n){const g=GX;if(!g)return;g.N=Math.min(n,g.rows.length);g.st=g.rows.length-g.N;gxd()}
function gxM(j){const g=GX;if(!g)return;g.m=j;if(g.k=='bx'&&BC[g.id])BC[g.id].m=j;gxd()}
function gxrot(){const g=GX;if(!g)return;g.rot=!g.rot;const e=document.getElementById('gxo');e.classList.toggle('rot',g.rot);document.getElementById('gxrb').textContent=g.rot?'↺ Vertical':'↻ Girar';setTimeout(gxd,80)}
function gxc(){const g=GX,e=document.getElementById('gxo');if(e)e.remove();GX=null;if(g&&g.k=='bx'&&BC[g.id]&&document.getElementById(g.id)){try{bcu(g.id,0)}catch(x){}}}
(()=>{const fx=()=>{if(!GX)return;const e=document.getElementById('gxo');if(e&&GX.rot&&innerWidth>innerHeight){GX.rot=false;e.classList.remove('rot');const b=document.getElementById('gxrb');if(b)b.textContent='↻ Girar'}gxd()};['resize','orientationchange'].forEach(n=>window.addEventListener(n,()=>{if(GX)[60,300,700].forEach(ms=>setTimeout(fx,ms))}));if(window.ResizeObserver)new ResizeObserver(()=>{if(GX)fx()}).observe(document.documentElement);const s2=document.createElement('style');s2.textContent='@media(orientation:landscape) and (max-height:520px){.gxo:not(.rot){gap:3px;padding:6px 14px}.gxo:not(.rot) .gxh{min-height:24px}.gxo:not(.rot) .gxh b{font-size:22px}.gxo:not(.rot) #gxr{height:30px}.gxo:not(.rot) .gxcw{min-height:110px}}';document.head.appendChild(s2)})();
(()=>{let t=null,sx=0,sy=0;const cl=()=>{if(t){clearTimeout(t);t=null}};document.addEventListener('pointerdown',e=>{if(GX)return;const c=e.target.closest&&e.target.closest('[data-gx]');if(!c)return;sx=e.clientX;sy=e.clientY;cl();t=setTimeout(()=>{t=null;const a=c.dataset.gx.split(':');hap(25);gxv(a[0],a[1])},650)},{passive:true});document.addEventListener('pointermove',e=>{if(t&&(Math.abs(e.clientX-sx)>9||Math.abs(e.clientY-sy)>9))cl()},{passive:true});['pointerup','pointercancel'].forEach(n=>document.addEventListener(n,cl,{passive:true}))})();
{const st=document.createElement('style');st.textContent='.bxl{margin:2px 0 8px}.bxl svg{max-height:170px}[data-gx]{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.gxo{position:fixed;inset:0;z-index:300000;background:var(--bg);color:var(--ink);display:flex;flex-direction:column;gap:6px;padding:calc(10px + env(safe-area-inset-top,0px)) 14px calc(10px + env(safe-area-inset-bottom,0px));box-sizing:border-box;animation:gxin .3s ease-out}.gxo.rot{inset:auto;top:0;left:0;width:100vh;height:100vw;transform-origin:0 0;transform:translateX(100vw) rotate(90deg);padding:12px 18px}@keyframes gxin{from{opacity:0;transform:scale(.97)}}.gxo.rot{animation:none}.gxt{display:flex;align-items:center;gap:8px}.gxt b{font-size:18px}.gxh{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;min-height:36px}.gxh b{font:700 30px/1 var(--fd,"Barlow Condensed"),sans-serif;font-style:italic}.gxh small{font-size:14px;font-weight:600;color:var(--mut)}.gxh span{font-size:13px;color:var(--mut)}.gxcw{flex:1;min-height:0;position:relative}.gxf{display:flex;gap:6px;flex-wrap:wrap;align-items:center}.gxd{display:flex;flex-direction:column;gap:0}.gxl2{display:flex;justify-content:space-between;font-size:12.5px;color:var(--mut)}#gxr{width:100%;height:38px;margin:0;accent-color:var(--t)}@media(prefers-reduced-motion:reduce){.gxo{animation:none}}';document.head.appendChild(st)}
const hap=p=>{};
let UH=[];
function gsn(keys){const t=td(),o=keys.map(k=>{const h=(S.gh[k]||[]).find(z=>z.d==t);return [k,S.g[k]?{...S.g[k]}:null,h?{...h}:null]});return()=>{o.forEach(([k,g,h])=>{if(g)S.g[k]=g;else delete S.g[k];const a=(S.gh[k]||[]).filter(z=>z.d!=t);if(h)a.push(h);a.sort((x,y)=>x.d<y.d?-1:x.d>y.d?1:0);if(a.length)S.gh[k]=a;else delete S.gh[k]})}}
function uP(l,f){hap([18,50,18]);UH.push({l,f});if(UH.length>15)UH.shift();document.querySelectorAll('.uto').forEach(e=>e.remove());const t=document.createElement('div');t.className='uto';t.innerHTML='<span>'+esc(l)+'</span><button onclick="uD()">↩ Deshacer</button>';QP.appendChild(t);setTimeout(()=>t.remove(),9000)}
function uD(){document.querySelectorAll('.uto').forEach(e=>e.remove());const u=UH.pop();if(!u)return;u.f();save();qt('↩ Deshecho: '+u.l);const w=$('wo');if(w&&!w.hidden)wcl();else if(tab==2){const y=scrollY;gym();scrollTo(0,y)}}
let WI=0,WS={},WRS=false,WCI=null,WHs=[];const wsn=()=>JSON.stringify([WI,WS]);function wu(){const h=WHs.pop();if(!h)return;const a=JSON.parse(h);WI=a[0];WS=a[1];WRS=false;stopT();wr()}
function wm(i){WI=i;WS={};WHs=[];WRS=false;let d=$('wo');if(!d){d=document.createElement('div');d.id='wo';document.body.appendChild(d)}d.hidden=false;document.body.classList.add('wob');wr()}
function wst(){clearInterval(WCI);WCI=null}
function wr(){wst();const g=GG()[gd]||[],e=g[WI],o=$('wo');if(!e){wf();return}
const vi=V[gd+WI]||0,al=[e[0],...e[5]],key=kf(WI),l=S.g[key]||(vi?{kg:0,r:0}:{kg:e[1],r:e[2]}),q=WS[WI]=WS[WI]||{kg:l.kg||e[1]||0,r:l.r||e[2]||0,n:0,key},bt='class="g" style="padding:16px;font-size:17px"';
const top=`<div class="wt"><button class="g" onclick="wf()">✕ Salir</button><b>${esc(gd)} · ${WI+1}/${g.length}</b>${WHs.length?'<button class="g" onclick="wu()">↩ Atrás</button>':''}</div>`;
if(WRS){o.innerHTML=top+`<div class="mut" style="text-align:center;margin-top:18px;letter-spacing:.14em">DESCANSO</div><div class="wrw"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="54" fill="none" stroke="var(--ln)" stroke-width="7"/><circle id="wrc" cx="60" cy="60" r="54" fill="none" stroke="var(--t)" stroke-width="7" stroke-linecap="round" stroke-dasharray="339.3" stroke-dashoffset="0" transform="rotate(-90 60 60)"/></svg><div class="wcd" id="wcd">0:00</div></div><div class="row" style="justify-content:center;margin:8px 0"><button class="g" onclick="wad(-15)">−15 s</button><input id="wrs" class="wi" inputmode="decimal" style="width:96px;font-size:22px;padding:6px" value="${tf(WRT)}" onchange="wset(this.value)" aria-label="Minutos y segundos de descanso"><button class="g" onclick="wad(15)">+15 s</button></div><div class="mut" style="text-align:center">min:seg de descanso (editable, ej. 2.30)</div>${serBar(q.n,e[4],1)}<div class="mut" style="text-align:center">Siguiente: ${esc(al[vi])}</div><button class="wd" onclick="wsk()">⏭ Saltar descanso</button><button ${bt} onclick="wg()">Pasar de ejercicio ›</button>`;const u=()=>{const t=Math.max(0,Math.ceil((TE-Date.now())/1000)),c=$('wcd');if(c){c.textContent=Math.floor(t/60)+':'+String(t%60).padStart(2,'0');c.classList.toggle('pu',t>0&&t<=3)}const g=$('wrc');if(g)g.style.strokeDashoffset=339.3*(1-Math.min(1,t/Math.max(1,WRT)));if(t<=0){wst();WRS=false;bp();wr()}};u();WCI=setInterval(u,250);return}
if(WU&&WU.key==key){o.innerHTML=top+wuS(q,e,al[vi]);return}
o.innerHTML=top+`<div class="wn">${esc(al[vi])}</div>${mal(al[vi],gd+'|'+WI+'|'+vi,'w')}${serBar(q.n,e[4])}${mjH(al[vi])}<div class="mut">Última vez: ${e[6]?(l.r?l.r+' s':'—'):bw(e)?(l.r?l.r+' reps':'—'):(l.kg?fm(l.kg)+' kg × '+l.r:'—')}</div>${e[6]?`<div class="wc"><div><span>SEGUNDOS</span><input class="wi" inputmode="numeric" value="${q.r}" oninput="WS[WI].r=Math.round(num(this.value))"></div></div>`:bw(e)?`<div class="wc"><div><span>REPS</span><input class="wi" readonly value="${q.r}" onclick="wq()"></div></div>`:`<div class="wc"><div><span>KG</span><input class="wi" readonly value="${q.kg}" onclick="wq()"></div><div><span>REPS</span><input class="wi" readonly value="${q.r}" onclick="wq()"></div></div>`}${wuH(q,e)}<button class="wd" onclick="wh()">✔ Serie hecha</button><button ${bt} onclick="wg()">Pasar de ejercicio ›</button>${al.length>1?`<button ${bt} onclick="wb()">🔄 Aparato ocupado → alternativa</button>`:''}`}
function wh(){const g=GG()[gd],e=g[WI],q=WS[WI];if(!q.kg&&!q.r)return;WHs.push(wsn());hap(25);q.n++;q.sk=q.kg;q.sr=q.r;if(q.n>=e[4]){if(WI>=g.length-1){wf(true);return}WI++}WRS=true;WST=Date.now();WRT=rt(gd,e);tm(WRT);wr()}
function wsk(){stopT();WRS=false;wr()}
function wg(){WHs.push(wsn());stopT();WRS=false;if(WI>=(GG()[gd]||[]).length-1){wf(true);return}WI++;wr()}
function wf(){wst();const L=Object.values(WS).filter(q=>q.n>0),o=$('wo');if(!L.length){wcl();return}const bt='class="g" style="padding:16px;font-size:17px"';o.innerHTML=`<div class="wn">¿Guardar este entrenamiento?</div><div class="mut">${L.reduce((a,q)=>a+q.n,0)} series en ${L.length} ejercicio(s). Si no lo guardas, tu historial y tus kilos no cambian.</div><button class="wd" onclick="wsv()">✔ Sí, guardar</button><button ${bt} onclick="wcl()">🗑 No guardar</button><button ${bt} onclick="WRS=false;wr()">← Seguir entrenando</button>${WHs.length?`<button ${bt} onclick="wu()">↩ Deshacer última serie</button>`:''}`}
function wsv(){const rs=gsn(Object.values(WS).filter(q=>q.n).map(q=>q.key));let rec=false;RS=[];Object.values(WS).forEach(q=>{if(!q.n)return;const rc=isRec(q.key,q.sk,q.sr);if(rc)rec=true;const pv0=(S.gh[q.key]||[]).filter(z=>z.d!=td()).pop();RS.push({nm:q.key.split('|')[1],cur:q.sk*q.sr*q.n*LF(q.key),pv:pv0?pv0.kg*pv0.r*q.n*LF(q.key):0,rc});S.g[q.key]={kg:q.sk,r:q.sr};const a=S.gh[q.key]=S.gh[q.key]||[],x=a.find(z=>z.d==td());if(x){x.kg=q.sk;x.r=q.sr;x.t=hhmm()}else a.push({d:td(),kg:q.sk,r:q.sr,t:hhmm()})});save();wcl();cele(rec?'🏆 ¡Récord!':'💪 ¡Entreno guardado!');wsm();uP('Entreno guardado',rs)}
function wcl(){wst();stopT();const o=$('wo');if(o)o.hidden=true;document.body.classList.remove('wob');gym()}

function ba(b,c,v){return `<div class="mut" style="margin-top:12px"><b>Desliza para comparar (${v})</b></div><div class="ba" style="--p:50%"><img src="${c.u}" alt="Ahora"><img class="bb" src="${b.u}" alt="Antes"><span class="bl l">ANTES · ${b.d}</span><span class="bl r">AHORA · ${c.d}</span><i class="bh"><b>⇆</b></i></div>`}
(function(){let D=null;const mv=e=>{if(!D)return;const r=D.getBoundingClientRect();D.style.setProperty('--p',Math.min(100,Math.max(0,(e.clientX-r.left)/r.width*100))+'%')};
document.addEventListener('pointerdown',e=>{const a=e.target.closest&&e.target.closest('.ba');if(!a)return;D=a;try{a.setPointerCapture(e.pointerId)}catch(x){}mv(e)});
document.addEventListener('pointermove',mv,{passive:true});['pointerup','pointercancel'].forEach(t=>document.addEventListener(t,()=>{D=null}))})();
const MN={"sq": ["f", 0, 0, "", [0, 75, 85, 0, 0, 0], [40, 80, 85, 75, -20, 0], "Sentadilla / zancada", "Baja con la espalda recta y las rodillas siguiendo los pies; sube empujando el suelo."], "pr": ["h", 70, 100, "M36 66 L70 106 H92", [-55, 20, 40, 125, 125, 0], [-55, 20, 40, 165, 75, 0], "Prensa", "Empuja la plataforma sin bloquear las rodillas y baja controlado."], "ext": ["h", 85, 98, "M58 52 V104 H118", [0, 10, 40, 90, 0, 0], [0, 10, 40, 90, 90, 0], "Extensión de cuádriceps", "Estira la pierna hasta arriba, aprieta un segundo y baja lento."], "lc": ["h", 85, 98, "M58 52 V104 H118", [0, 10, 40, 90, 95, 0], [0, 10, 40, 90, -15, 0], "Curl femoral", "Lleva el talón hacia el glúteo y vuelve despacio."], "bench": ["h", 150, 100, "M25 107 H182", [-90, 180, 180, 80, 5, 0], [-90, 60, 175, 80, 5, 0], "Press de pecho", "Baja la barra al pecho con control y empuja hacia arriba."], "pv": ["f", 0, 0, "", [0, 25, 175, 0, 0, 0], [0, 175, 180, 0, 0, 0], "Press de hombro", "Empuja por encima de la cabeza sin arquear la espalda."], "ps": ["h", 85, 98, "M58 52 V104 H118", [0, -20, 60, 90, 0, 0], [0, 80, 90, 90, 0, 0], "Press sentado", "Empuja hacia delante y vuelve despacio, sin despegar la espalda."], "lat": ["f", 0, 0, "", [0, 5, 5, 0, 0, 0], [0, 95, 95, 0, 0, 0], "Elevaciones", "Sube los brazos hasta la altura del hombro, sin balancear el cuerpo."], "cu": ["f", 0, 0, "", [0, 0, 0, 0, 0, 0], [0, 5, 150, 0, 0, 0], "Curl de bíceps", "Codos pegados al cuerpo; sube la carga y baja lento."], "tri": ["f", 0, 0, "", [5, 0, 105, 0, 0, 0], [5, 0, 0, 0, 0, 0], "Tríceps en polea", "Codos fijos a los costados; estira del todo y vuelve controlado."], "fr": ["h", 150, 100, "M25 107 H182", [-90, 180, -70, 80, 5, 0], [-90, 180, 180, 80, 5, 0], "Press francés", "Solo se mueven los antebrazos; baja detrás de la cabeza y estira."], "rem": ["f", 0, 0, "", [65, 8, 5, 10, -10, 0], [65, -50, -5, 10, -10, 0], "Remo con barra", "Espalda recta e inclinada; lleva la barra hacia el abdomen."], "rs": ["h", 85, 98, "M58 52 V104 H118", [0, 90, 90, 90, 0, 0], [-10, -30, 50, 90, 0, 0], "Remo sentado", "Tira hacia el abdomen juntando los omóplatos y vuelve despacio."], "ja": ["h", 85, 98, "M58 52 V104 H118", [0, 175, 175, 90, 0, 0], [-10, 25, 160, 90, 0, 0], "Jalón / dominada", "Baja la barra al pecho con los codos hacia abajo."], "hi": ["f", 0, 0, "", [0, 5, 5, 5, -5, 0], [75, 5, 5, 15, -10, 0], "Peso muerto rumano", "Lleva la cadera atrás con la espalda recta y sube apretando el glúteo."], "fl": ["f", 0, 0, "", [0, -60, -60, 0, 0, 0], [0, 70, 70, 0, 0, 0], "Cruces / aperturas", "Junta las manos delante del pecho con los codos algo flexionados."], "di": ["h", 85, 98, "M58 52 V104 H118", [0, -20, 70, 90, 0, 0], [0, 0, 0, 90, 0, 0], "Fondos", "Empuja hacia abajo estirando los codos y vuelve controlado."], "gm": ["f", 0, 0, "", [0, 5, 5, 0, 0, 0], [0, 5, 5, 0, 0, 10], "Gemelos", "Sube de puntillas, aprieta arriba y baja lento."], "ab": ["h", 140, 122, "M30 128 H190", [-90, -150, -110, 135, 45, 0], [-55, -120, -60, 135, 45, 0], "Abdominales", "Sube el pecho hacia las rodillas sin tirar del cuello."], "ad": ["h", 85, 98, "M58 52 V104 H118", [0, 10, 40, 80, 0, 0], [0, 10, 40, 100, 0, 0], "Abductor", "Abre las piernas controlado y vuelve despacio."]};
function mkey(n){n=n.toLowerCase();const r=[[/face ?pull/,'rs'],[/franc[eé]s/,'fr'],[/gemel|talones|s[oó]leo/,'gm'],[/abductor|aductor/,'ad'],[/femoral|curl.*pierna/,'lc'],[/extensi[oó]n.*cu[aá]d|cu[aá]driceps/,'ext'],[/prensa/,'pr'],[/banca|plano|inclinad|cerrado|flexi[oó]n|pecho/,'bench'],[/tr[ií]ceps|cuerda/,'tri'],[/cruce|apertura|fly|contractora/,'fl'],[/fondos/,'di'],[/militar|hombro|arnold/,'pv'],[/press/,'ps'],[/elevaci[oó]n|lateral|p[aá]jaro/,'lat'],[/curl|b[ií]ceps|martillo/,'cu'],[/remo.*(polea|sentado|m[aá]quina)|polea.*remo/,'rs'],[/remo/,'rem'],[/jal[oó]n|dominada|pull/,'ja'],[/sentadilla|b[uú]lgara|zancada|hack|goblet/,'sq'],[/muerto|rumano|buenos d/,'hi'],[/abdom|crunch|encog|plancha/,'ab']];for(const[x,k]of r)if(x.test(n))return k;return 'cu'}
function monoT(b){let w=b.nextElementSibling;if(w&&w.classList.contains('mw')){w.remove();return}w=document.createElement('div');w.className='mw';const k=mkey(b.dataset.n||''),P=MN[k];w.innerHTML=`<svg class="mono" data-k="${k}" viewBox="0 0 220 150" role="img" aria-label="Animación del ejercicio"><line class="mg" x1="10" y1="141" x2="210" y2="141" stroke="var(--ln)" stroke-width="3" stroke-linecap="round"/><path class="me" d="${P[3]}"/><path class="mb"/><path class="mt"/><path class="mf"/><circle class="hd" r="8"/><circle class="wt" r="5"/></svg><div class="mut"><b>${P[6]}</b> · ${P[7]}</div>`;b.after(w);monoLoop()}
let MR=0;function monoLoop(){if(MR)return;const f=ts=>{const L=document.querySelectorAll('svg.mono');if(!L.length){MR=0;return}const T=2800,p=(ts%T)/T,tr=p<.5?p*2:2-p*2,x=Math.min(1,Math.max(0,(tr-.12)/.76)),u=x*x*(3-2*x);L.forEach(e=>monoDraw(e,u));MR=requestAnimationFrame(f)};MR=requestAnimationFrame(f)}
function monoDraw(e,u){const P=MN[e.dataset.k],A=P[4],B=P[5],q=A.map((a,i)=>a+(B[i]-a)*u),t=q[0],a1=q[1],a2=q[2],l1=q[3],l2=q[4],dy=q[5],R=Math.PI/180,sn=d=>Math.sin(d*R),cs=d=>Math.cos(d*R);let hx=P[1],hy=P[2];if(P[0]=='f'){hx=110-30*(sn(l1)+sn(l2));hy=136-dy-30*(cs(l1)+cs(l2))}
const S=[hx+38*sn(t),hy-38*cs(t)],H0=[S[0]+13*sn(t),S[1]-13*cs(t)],O=[S[0]+8*cs(t),S[1]+8*sn(t)],E=[O[0]+24*sn(a1),O[1]+24*cs(a1)],H=[E[0]+22*sn(a2),E[1]+22*cs(a2)],K=[hx+30*sn(l1),hy+30*cs(l1)],N=[K[0]+30*sn(l2),K[1]+30*cs(l2)],f=a=>a[0].toFixed(1)+' '+a[1].toFixed(1),
L='M'+f(O)+'L'+f(E)+'L'+f(H)+'M'+hx.toFixed(1)+' '+hy.toFixed(1)+'L'+f(K)+'L'+f(N)+'L'+(N[0]+10).toFixed(1)+' '+(N[1]+dy).toFixed(1),c=n=>e.querySelector(n);
c('.mt').setAttribute('d','M'+hx.toFixed(1)+' '+hy.toFixed(1)+'L'+f(S));c('.mf').setAttribute('d',L);const bk=c('.mb');bk.setAttribute('d',L);bk.setAttribute('transform','translate(-7 0)');const h=c('.hd');h.setAttribute('cx',H0[0]);h.setAttribute('cy',H0[1]);const w=c('.wt');w.setAttribute('cx',H[0]);w.setAttribute('cy',H[1])}

const QP=document.createElement('div');QP.id='qp';document.body.appendChild(QP);
QP.innerHTML='<div class=\"fab\" id=\"fab\"><button class=\"ftab\" id=\"ftab\" onclick=\"fabT()\" aria-label=\"Accesos rápidos\" aria-expanded=\"false\"><i></i></button><div class=\"fbs\"><div class=\"bw\"><label class=\"bub\" title=\"Cámara inteligente\" aria-label=\"Comida con cámara\" onclick=\"bF(this)\"><svg viewBox=\"0 0 24 24\" width=\"25\" height=\"25\"><path d=\"M4.5 8.2A2.2 2.2 0 0 1 6.7 6h1.6l1-1.6h5.4l1 1.6h1.6a2.2 2.2 0 0 1 2.2 2.2v8.6a2.2 2.2 0 0 1-2.2 2.2H6.7a2.2 2.2 0 0 1-2.2-2.2z\" fill=\"#fff\"/><g class=\"lz\"><circle cx=\"12\" cy=\"12.6\" r=\"4.1\" style=\"fill:var(--ic)\"/><circle cx=\"12\" cy=\"12.6\" r=\"2.5\" fill=\"none\" stroke=\"#fff\" stroke-opacity=\".6\" stroke-width=\"1\"/><circle cx=\"10.9\" cy=\"11.5\" r=\".9\" fill=\"#fff\" opacity=\".9\"/></g><circle class=\"fd\" cx=\"17.5\" cy=\"8.7\" r=\".9\" style=\"fill:var(--ic)\"/><circle class=\"fb\" cx=\"12\" cy=\"12.6\" r=\"4.4\" fill=\"#fff\"/></svg><input type=\"file\" accept=\"image/*\" capture=\"environment\" onchange=\"qcam(this)\" style=\"display:none\"></label><span>Comida</span></div><div class=\"bw\"><button class=\"bub\" title=\"Suplementos\" aria-label=\"Suplementos\" onclick=\"bA(this,qsup)\"><svg viewBox=\"0 0 24 24\" width=\"25\" height=\"25\"><g transform=\"rotate(-45 12 12)\"><g class=\"pl\"><path d=\"M12 8.2H7a3.8 3.8 0 0 0 0 7.6h5z\" fill=\"#fff\"/></g><g class=\"pr\"><path d=\"M12 8.2h5a3.8 3.8 0 0 1 0 7.6h-5z\" fill=\"#fff\" fill-opacity=\".32\" stroke=\"#fff\" stroke-width=\"1.1\"/></g></g><path class=\"sp\" d=\"M19.6 3.6l.6 1.5 1.5.6-1.5.6-.6 1.5-.6-1.5-1.5-.6 1.5-.6z\" fill=\"#FDE047\"/><path class=\"sp\" style=\"animation-delay:.12s\" d=\"M4.6 17.6l.45 1.1 1.1.45-1.1.45-.45 1.1-.45-1.1-1.1-.45 1.1-.45z\" fill=\"#FDE047\"/></svg></button><span>Suple</span></div><div class=\"bw\"><button class=\"bub\" title=\"Pasos\" aria-label=\"Pasos\" onclick=\"bA(this,qpas)\"><svg viewBox=\"0 0 24 24\" width=\"25\" height=\"25\"><circle class=\"dp\" cx=\"3.4\" cy=\"19.8\" r=\"1.3\" fill=\"#fff\"/><circle class=\"dp\" style=\"animation-delay:.12s\" cx=\"5.6\" cy=\"20.6\" r=\"1\" fill=\"#fff\"/><g class=\"sh\"><path d=\"M2.5 17.6h19.1c.7 0 1.2.6 1.1 1.3l-.1.6H2.5z\" fill=\"#fff\" fill-opacity=\".6\"/><path d=\"M3 17.6V8.8c0-.5.5-.8.9-.5l2.3 1.5c.5.3 1.1.3 1.6 0l1-.7 3.3 3.5c.6.6 1.4 1 2.3 1.1l4.7.6c1.5.2 2.6 1.4 2.6 2.9v.6z\" fill=\"#fff\"/><path d=\"M8.6 10.6l1.6 1.4M10.4 9.2l1.6 1.6M12.2 11l1.4 1.2\" style=\"stroke:var(--ic)\" stroke-width=\"1\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M5 15.2c3 .5 8 .4 12.5-1.6\" style=\"stroke:var(--ic)\" stroke-opacity=\".55\" stroke-width=\"1.5\" stroke-linecap=\"round\" fill=\"none\"/></g></svg></button><span>Pasos</span></div><div class=\"bw\"><button class=\"bub\" title=\"Temporizador de gimnasio\" aria-label=\"Entreno\" onclick=\"bA(this,qtm)\"><svg viewBox=\"0 0 24 24\" width=\"25\" height=\"25\"><path d=\"M9.8 2.2h4.4\" stroke=\"#fff\" stroke-width=\"1.9\" stroke-linecap=\"round\"/><circle cx=\"12\" cy=\"12.4\" r=\"8.2\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.9\"/><path d=\"M12 5.2v1.2M12 18.4v1.2M4.8 12.4H6M18 12.4h1.2\" stroke=\"#fff\" stroke-opacity=\".6\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><path class=\"ch\" d=\"M12 12V8.2\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\"/><path class=\"cm\" d=\"M12 12V6.4\" stroke=\"#FDE047\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><circle cx=\"12\" cy=\"12\" r=\"1.35\" fill=\"#fff\"/></svg></button><span>Entreno</span></div><div class=\"bw\"><button class=\"bub\" title=\"Registro exprés\" aria-label=\"Notas\" onclick=\"bA(this,qnote)\"><svg viewBox=\"0 0 24 24\" width=\"25\" height=\"25\"><path d=\"M6 3.4h12a1.7 1.7 0 0 1 1.7 1.7v9.6L14.5 20H6a1.7 1.7 0 0 1-1.7-1.7V5.1A1.7 1.7 0 0 1 6 3.4z\" fill=\"#fff\"/><path d=\"M19.7 14.7h-3.9a1.4 1.4 0 0 0-1.4 1.4V20z\" fill=\"#000\" fill-opacity=\".2\"/><path class=\"nl\" style=\"animation-delay:0s\" pathLength=\"10\" d=\"M7.8 8.2h8\"/><path class=\"nl\" style=\"animation-delay:.15s\" pathLength=\"10\" d=\"M7.8 11.7h8\"/><path class=\"nl\" style=\"animation-delay:.3s\" pathLength=\"10\" d=\"M7.8 15.2h4.6\"/></svg></button><span>Notas</span></div><div class=\"bw\"><button class=\"bub\" title=\"Calma\" aria-label=\"Calma\" onclick=\"bA(this,qcal)\"><svg viewBox=\"0 0 24 24\" width=\"25\" height=\"25\"><circle class=\"cb\" cx=\"12\" cy=\"12\" r=\"8.5\" fill=\"none\" stroke=\"#fff\" stroke-opacity=\".6\" stroke-width=\"1.4\"/><circle class=\"cb\" cx=\"12\" cy=\"12\" r=\"5.2\" fill=\"#fff\" fill-opacity=\".35\"/><circle cx=\"12\" cy=\"12\" r=\"2.4\" fill=\"#fff\"/></svg></button><span>Calma</span></div></div></div>';
function fabT(){const f=$('fab');f.classList.toggle('o');$('ftab').setAttribute('aria-expanded',f.classList.contains('o'))}
function qt(m){const t=document.createElement('div');t.className='qtoast';t.textContent=m;QP.appendChild(t);setTimeout(()=>t.remove(),2600)}
let AC=null;function tick(){try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();const o=AC.createOscillator(),g=AC.createGain();o.frequency.value=1900;g.gain.setValueAtTime(.06,AC.currentTime);g.gain.exponentialRampToValueAtTime(.001,AC.currentTime+.025);o.connect(g);g.connect(AC.destination);o.start();o.stop(AC.currentTime+.03)}catch(e){}try{navigator.vibrate&&navigator.vibrate(8)}catch(e){}}
function qsh(h){let o=$('qs');const nw=!o;if(nw){o=document.createElement('div');o.id='qs';QP.appendChild(o)}o.className=nw?'':'nq';o.innerHTML='<div class="qb" onclick="qx()"></div><div class="qpn">'+h+'</div>'}
function qx(){const o=$('qs');if(o)o.remove();stopCam()}
let QF=null,QM=null;
function qask(f){QF=f?Array.from(f):pend.slice();if(!QF.length)return;qsh('<b>📷 ¿Dónde estás?</b><div class="row" style="margin:10px 0"><button onclick="qhome()">🏠 En casa</button><button class="g" onclick="qout()">🍽 Fuera de casa</button></div><button class="g" onclick="qx()">Cancelar</button>')}
function qcam(i){if(!i.files[0])return;const f=Array.from(i.files);i.value='';qask(f)}
function qhome(){const m=(($('fq')||{}).value||'').match(/(\d+[.,]?\d*)\s*(g|gr|ml)\b/i);qsh('<b>¿Cuántos gramos son?</b><div class="row" style="margin:10px 0"><input id="qg" inputmode="decimal" placeholder="gramos" value="'+(m?m[1]:'')+'" autofocus><button onclick="qgo(0)">Calcular</button></div>')}
function qout(){qsh('<b>🍽 Fuera de casa</b><div class="mut" style="margin:6px 0">Lo estimo a ojo. Si sabes qué lleva (relleno, salsa, tamaño), ponlo para afinar:</div><input id="qxi" placeholder="Ej. bocadillo de lomo con queso, ración grande"><div class="row" style="margin:10px 0"><button onclick="qgo(1)">Estimar</button><button class="g" onclick="qx()">Cancelar</button></div>')}
function qre(){const x=$('qxi').value.trim();if(!x){qt('Escribe tu respuesta');return}$('fq').value+=' Respuesta a "'+QPQ+'": '+x;qx();QM='out';calc()}
let QPQ='';
function qgo(out){let q;if(out){const x=(($('qxi')||{}).value||'').trim();q='Comida fuera de casa o en restaurante.'+(x?' Lleva: '+x+'.':'')}else{const g=num($('qg').value);if(!g){qt('Indica los gramos');return}q=g+' g de lo que se ve en la foto (plato casero)'}QM=out?'out':null;const f=QF;qx();go(0);if(!$('fq')){qt('El cálculo con IA no está disponible ahora');return}pend.length=0;addP(f);$('fq').value=q;calc()}
let QPD=null;
function qpas(d){QPD=d||td();const ps=S.ps||{},v=ps[QPD]||0,g=pgoal(),yd=new Date(Date.parse(td())-864e5).toISOString().slice(0,10);qsh(`<b>👟 Pasos</b><div class="row" style="margin:8px 0"><button class="${QPD==td()?'':'g'}" onclick="qpas()">Hoy</button><button class="${QPD==yd?'':'g'}" onclick="qpas('${yd}')">Ayer</button></div><div class="mut">${v?v+' apuntados':'Aún sin apuntar'} · objetivo ${g}</div><div class="row" style="margin:10px 0"><input id="qps" inputmode="numeric" placeholder="pasos totales del día" value="${v||''}" autofocus><button onclick="qpsv()">Guardar</button></div><button class="g" onclick="qx()">Cancelar</button>`)}
function qpsv(){const n=Math.round(num($('qps').value));if(!(n>0)){qt('Indica los pasos');return}const ps=S.ps=S.ps||{},prev=ps[QPD]||0;ps[QPD]=n;save();qx();qt('👟 '+n+' pasos guardados');if(n>=pgoal()&&prev<pgoal())cele('👟 ¡Objetivo de pasos!');if(tab!=2)go(tab)}
function qsup(){const s=S.sp=S.sp||{on:['Creatina','Omega-3','Multivitamínico'],ck:{},rm:'09:00'},c=s.ck[td()]||[];qsh(`<b>💊 ¿Has tomado tus suplementos hoy?</b><div style="margin:10px 0">${s.on.length?s.on.map(n=>`<div class="item" style="align-items:center"><span style="flex:1"><b>${esc(n)}</b></span><button class="${c.includes(n)?'':'g'}" style="padding:6px 12px" onclick="qst('${n}')">${c.includes(n)?'✅ Tomado':'Pendiente'}</button></div>`).join(''):'<div class="mut">No tienes suplementos activos.</div>'}</div><div class="row"><button onclick="qsa()">✅ Sí, todos</button><button class="g" onclick="qsc()">Todavía no</button></div>`)}
function qst(n){const s=S.sp,t=td(),c=s.ck[t]=s.ck[t]||[];if(c.includes(n))s.ck[t]=c.filter(x=>x!=n);else c.push(n);save();qsup()}
function qsa(){const s=S.sp,t=td(),c=s.ck[t]=s.ck[t]||[];s.on.forEach(n=>{if(!c.includes(n))c.push(n)});save();qsc();qt('✅ Suplementos de hoy tomados')}
function qsc(){qx();if(tab!=2)go(tab)}
let QTI=null,QTL=150,QC=null;
const wl2=(L,f)=>'<div style="height:76px"></div>'+L.map(x=>`<div class="rwi">${f(x)}</div>`).join('')+'<div style="height:76px"></div>';
function qtClk(){return '';const r=Math.ceil((TE-Date.now())/1000),on=r>0;return `<div style="display:flex;align-items:center;gap:10px"><b>⏱ Descanso</b><span id="qtd" style="margin-left:auto;font-size:34px;font-weight:800;font-variant-numeric:tabular-nums">${tf(on?r:QTL)}</span></div><div class="row" style="margin:6px 0"><button onclick="qtG(150)">2:30</button><button onclick="qtG(90)">1:30</button><button onclick="qtG(45)">0:45</button><button class="g" onclick="qtX()" aria-label="Parar">⏹</button></div><details ontoggle="if(this.open)qtW()"><summary>Otro tiempo</summary><div class="rwh"><div class="rwc" id="tmw">${wl2([0,1,2,3,4,5,6,7,8,9,10],x=>x)}</div><div class="rwc" id="tsw">${wl2([0,5,10,15,20,25,30,35,40,45,50,55],x=>String(x).padStart(2,'0'))}</div><div class="rwsel"></div></div><div class="row" style="justify-content:space-around"><span class="mut">min</span><span class="mut">seg</span></div><button onclick="qtG(qtR())" style="margin-top:6px">▶ Empezar cuenta atrás</button></details>`}
function qtW(){const m=$('tmw'),s=$('tsw');if(!m||!s)return;[[m,Math.min(10,Math.floor(QTL/60))],[s,Math.round(QTL%60/5)%12]].forEach(([e,ix])=>{e.scrollTop=ix*38;e.dataset.i=ix;e.onscroll=()=>{const j=Math.round(e.scrollTop/38);if(j!=e.dataset.i){e.dataset.i=j;tick()}}})}
function qtR(){const m=Math.round($('tmw').scrollTop/38),s=Math.round($('tsw').scrollTop/38)*5;return Math.max(5,m*60+s)}
function qtG(n){QTL=n;tm(n);qtr()}
function qtX(){TE=0;stopT();qtr()}
function qtI(){clearInterval(QTI);QTI=setInterval(()=>{const e=$('qtd');if(!e){clearInterval(QTI);return}const r=Math.ceil((TE-Date.now())/1000);if(r>0)e.textContent=tf(r);else{e.textContent=tf(QTL);clearInterval(QTI)}},250)}
let QT={i:0,s:1,dd:''},QH=[],QV={},QA=false;function qtv(j){QV[QT.d+'|'+QT.i]=j;qtr()}function qtb(){const h=QH.pop();if(!h)return;QT.i=h[0];QT.s=h[1];stopT();qtr()}
function qtm(){const g=GG(),dy=S.t[td()],day=g[dy]?dy:(g[gd]?gd:Object.keys(g)[0]);QT.d=day;if(QT.dd!=day){QT.dd=day;QT.i=0;QT.s=1;QH.length=0}qtr()}
function qsel(){const g=GG(),G=gE(),grp={};Object.keys(g).forEach(d=>{(grp[prg(d)]=grp[prg(d)]||[]).push(d)});let h='';Object.keys(grp).forEach(pp=>{const tl=pp?TPL.find(t=>t[0]==pp)[1]:'📁 Mi rutina';h+='<optgroup label="'+esc(tl)+'">'+grp[pp].map(d=>{const t=tpOf(d);return '<option value="'+esc(d)+'"'+(d==QT.d?' selected':'')+'>'+esc(t?d.slice(t[0].length+1):d)+'</option>'}).join('')+'</optgroup>'});let u='';TPL.forEach((t,i)=>{if(t[3].some(([d])=>G[t[0]+' '+d]))return;u+='<optgroup label="📋 '+esc(t[1])+'">'+t[3].map(([d],k)=>'<option value="@'+i+'|'+k+'">'+esc(d)+'</option>').join('')+'</optgroup>'});return h+(u?'<option disabled>── Predeterminadas (se cargan al elegir) ──</option>'+u:'')}
function qpick(v){if(v[0]=='@'){const a=v.slice(1).split('|').map(Number),t=TPL[a[0]],G=gE();t[3].forEach(([d,x])=>{const n=t[0]+' '+d;if(!G[n])G[n]=x.split(';').map(y=>{const p=y.split(','),b=p[4]=='b',w=p[4]=='w',ts=p[4]=='t';return[p[0],0,+p[2],(+p[3]<=90||b||w||ts)?1:0,+p[1],[],ts?1:0,+p[3]||0,(b||w)?1:0]})});QT.d=QT.dd=t[0]+' '+t[3][a[1]][0];cv();save()}else QT.d=QT.dd=v;QT.i=0;QT.s=1;QH.length=0;qtr()}
function qtr(){const g=GG()[QT.d]||[],e=g[QT.i];if(!e){qsh('<b>🏁 '+esc(QT.d)+' terminado</b><div class="row" style="margin-top:10px"><button onclick="QT.i=0;QT.s=1;QH.length=0;qtr()">Reiniciar</button>'+(QH.length?'<button class="g" onclick="qtb()">◀ Atrás</button>':'')+'<button class="g" onclick="strFor(QT.d)">🧘 Estirar</button><button class="g" onclick="qx()">Cerrar</button></div>');return}const al=[e[0],...e[5]],vi=Math.min(QV[QT.d+'|'+QT.i]||0,al.length-1),nm=al[vi],h=(S.gh[QT.d+'|'+e[0]+'|'+vi]||[]).filter(x=>x.d!=td()),l=h[h.length-1]||(vi?null:e[1]?{kg:e[1],r:e[2]}:null),alh=QA?'<div style="margin-top:10px">'+(al.length>1?al.map((a,j)=>{const z=(S.gh[QT.d+'|'+e[0]+'|'+j]||[]).filter(x=>x.d!=td()).pop();return `<div class="item" style="align-items:center"><span style="flex:1;min-width:0"><b>${esc(a)}</b><br><span class="mut">${j?'Alternativa '+j:'Principal'} · último: ${z?(e[6]?z.r+' s':bw(e)?z.r+' reps':(z.kg?fm(z.kg)+' kg × ':'')+z.r):'sin registros'}</span></span><button class="${j==vi?'':'g'}" style="padding:5px 12px" onclick="qtv(${j})">${j==vi?'✔ En uso':'Usar'}</button></div>`}).join(''):'<div class="mut">Este ejercicio no tiene alternativas. Añádelas en ✏️ Editar rutina.</div>')+'</div>':'';qsh(`<div class="mut">Rutina (elige el día)</div><div style="position:relative;margin-bottom:4px"><div style="font-size:20px;font-weight:800;line-height:1.25;padding:10px 40px 10px 12px;border:1px solid var(--ln);border-radius:12px;background:var(--card);word-break:break-word">${(()=>{const tq=tpOf(QT.d);return esc(tq?tq[1].split(' · ')[0]+' · '+QT.d.slice(tq[0].length+1):QT.d)})()}<span style="position:absolute;right:14px;top:50%;transform:translateY(-50%);font-size:16px;opacity:.7">▾</span></div><select aria-label="Rutina" style="position:absolute;inset:0;width:100%;height:100%;opacity:0;font-size:16px" onchange="qpick(this.value)">${qsel()}</select></div><div style="margin-top:6px"><b>${esc(nm)}</b>${vi?' <span class="mut">(alternativa '+vi+')</span>':''}</div>${mal(nm,QT.d+'|'+QT.i+'|'+vi,'q')}${serBar(QT.s-1,QC?QC.r:e[4])}${mjH(nm)}<div class="mut">Ejercicio ${QT.i+1} de ${g.length}</div><div class="mut">Sesión anterior: ${l?(e[6]?(l.r||'—')+' s':bw(e)?(l.r||'—')+' reps':fm(l.kg)+' kg × '+(l.r||'—')):'—'}</div>${qcb()}${qwB(l,e)}<div class="row" style="margin-top:10px"><button onclick="qtd()">✅ Serie hecha · descanso ${tf(QC?(QT.i<g.length-1?QC.t:QC.rr):rt(QT.d,e))}</button>${QH.length?'<button class="g" onclick="qtb()">◀ Atrás</button>':''}<button class="g" onclick="QH.push([QT.i,QT.s]);QT.i++;QT.s=QC?QT.s:1;QA=false;qtr()">⏭ Siguiente</button>${/^(TR|CF|CA)-/.test(prg(QT.d))?'<button class="g" onclick="cirO(QT.d)">🔄 Modo circuito</button>':''}<button class="g" onclick="QA=!QA;qtr()">🔁 Alternativas${al.length>1?' ('+(al.length-1)+')':''}</button><button class="g" onclick="QA=false;qx()">Cerrar</button></div>${alh}`)}
{const _q=qtr;qtr=function(){_q.apply(this,arguments);qtI()}}
let CI=null;const CIM={emom:['EMOM','Cada minuto toca un ejercicio: haces las reps y descansas lo que sobre.'],tabata:['Tabata','Trabajo y descanso alternos, un ejercicio por ronda.'],amrap:['AMRAP','Todas las rondas que puedas en el tiempo.'],ft:['For Time','Cronómetro hacia arriba con límite de tiempo (cap).']},CIA={min:[5,6,8,10,12,15,16,20,25,30],w:[20,30,40,45],r:[10,15,20],n:[4,6,8,10,12,16]};
function cbp(f,d){if(!CI||!CI.snd)return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state=='suspended')AC.resume();const o=AC.createOscillator(),g=AC.createGain();o.frequency.value=f;g.gain.setValueAtTime(.3,AC.currentTime);g.gain.exponentialRampToValueAtTime(.001,AC.currentTime+d);o.connect(g);g.connect(AC.destination);o.start();o.stop(AC.currentTime+d)}catch(e){}try{navigator.vibrate&&navigator.vibrate(d>.3?[250]:[50])}catch(e){}}
function csay(t){if(!CI||!CI.snd||!window.speechSynthesis)return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='es-ES';speechSynthesis.speak(u)}catch(e){}}
const STR=[['Día de estiramientos','Cuerpo entero con los estiramientos más eficaces, de arriba abajo',[['Gato-camello',1,'A cuatro patas, redondea y arquea la espalda despacio, respirando'],['Rotación torácica a cuatro patas',2,'Mano tras la nuca, abre el codo hacia el techo y gira desde el pecho'],['Cuello lateral',2,'Oreja hacia el hombro, sin forzar; el otro hombro baja'],['Hombro cruzado',2,'Brazo cruzado sujeto con el otro, hombro lejos de la oreja'],['Tríceps sobre la cabeza',2,'Codo al techo, empuja suave con la otra mano'],['Antebrazo y muñeca',2,'Brazo estirado, palma hacia ti y luego hacia abajo'],['Pull-apart con goma',1,'Goma a la altura del pecho, separa los brazos juntando escápulas; poca tensión',1],['Colgado pasivo en barra',1,'Brazos estirados, hombros relajados, respira; descomprime hombros y espalda',1],['Dorsal en postura del niño',2,'Un brazo largo hacia el lado, cadera atrás'],['Torsión tumbado',2,'Rodillas a un lado, hombros pegados al suelo'],['Flexor de cadera en couch stretch',2,'Rodilla atrás pegada a la pared, glúteo apretado, pelvis adelante'],['Paloma (glúteo profundo)',2,'Pierna delantera doblada, baja el pecho despacio'],['Sapo (aductores)',1,'A cuatro patas, rodillas abiertas, cadera atrás, sin dolor'],['Isquios tumbado con goma',2,'Pierna estirada hacia ti con goma o toalla, rodilla recta'],['Gemelo en la pared',2,'Talón atrás pegado al suelo, rodilla estirada'],['Sentadilla profunda aguantada',1,'Talones al suelo, codos empujan las rodillas hacia fuera'],['Postura del niño',1,'Respira hondo y suelta todo el cuerpo']],30,'Calienta 3-5 min antes (caminar o bici suave). Mantén cada postura 30 s con tensión de 6 sobre 10, nunca dolor agudo; con el botón de abajo puedes subir a 45 o 60 s. En amarillo, los ejercicios (no son estiramientos). Cada uno tiene su imagen y su vídeo.']];
const DLY=[];
function strO(){CI={m:'sch',hs:30,sel:0,snd:true,el:-5,rd:0};strS()}
function strS(){const R=STR[CI.sel],n=R[2].reduce((a,x)=>a+x[1],0),t=Math.round((n*CI.hs+n*5)/60);qsh(`<b>🧘 Estiramientos</b>${STR.length>1?`<div class="row" style="margin:8px 0">${STR.map((r,i)=>`<button class="${i==CI.sel?'':'g'}" style="padding:5px 10px" onclick="CI.sel=${i};CI.hs=STR[${i}][3]||(CI.hs==45?30:CI.hs);strS()">${DLY.includes(r[0])?'\u{1F7E1} ':''}${r[0]}</button>`).join('')}</div>`:''}<div class="mut">${DLY.includes(R[0])?'\u{1F7E1} A diario \u00b7 ':''}${R[1]} · unos ${t} min</div>${R[4]?`<div class="tip" style="margin-top:8px">${R[4]}</div>`:''}<div class="mut" style="margin-top:8px">${R[2].map((x,i)=>(i+1)+'. '+(x[3]?'<span style="color:#FACC15;font-weight:700">'+esc(x[0])+'</span>':esc(x[0]))+(x[1]==2?' (×2 lados)':'')+' <a class="exl" href="https://www.youtube.com/results?search_query='+encodeURIComponent(x[0]+' estiramiento cómo hacerlo')+'" target="_blank" rel="noopener">▶️ Ver vídeo</a> <a class="exl" href="https://www.google.com/search?tbm=isch&amp;q='+encodeURIComponent(x[0]+(x[3]?' ejercicio':' estiramiento')+' cómo hacerlo')+'" target="_blank" rel="noopener">🖼️ Imagen</a>').join('<br>')}</div><div class="row" style="margin-top:8px"><button class="g" onclick="CI.hs=[20,30,45,60,90,120][([20,30,45,60,90,120].indexOf(CI.hs)+1)%6];strS()">Cada estiramiento: ${CI.hs} s</button></div><button style="margin-top:10px;width:100%" onclick="strG()">▶ Empezar (5 s de preparación)</button><button class="g" style="margin-top:6px;width:100%" onclick="cirX()">Cerrar</button>`)}
function strG(){const R=STR[CI.sel][2],sc=[];R.forEach((x,i)=>{(x[1]==2?['izquierdo','derecho']:['']).forEach((s,j,a)=>{sc.push({y:!!x[3],p:'WORK',d:CI.hs,n:x[0]+(s?' · lado '+s:''),i:x[2],b:x[0],v:x[0]+(s?', lado '+s:'')});if(!(i==R.length-1&&j==a.length-1)){const nx=a[j+1]!==undefined?x[0]+', lado '+a[j+1]:R[i+1][0]+(R[i+1][1]==2?', lado izquierdo':'');sc.push({p:'REST',d:5,n:'Cambia → '+nx,i:'',v:'Cambia. '+nx})}})});CI.sc=sc;CI.ex=sc.filter(x=>x.p=='WORK').map(x=>x.n);cirG()}
function cirWd(g){const o=[];g.forEach(e=>{const t=String(e[0]),x=t.match(/(AMRAP|EMOM)\s*(\d+)'/),f=!x&&t.match(/(For Time|Chipper)/i);if(!x&&!f)return;const ix=x?x.index:f.index,cut=ix+(x?x[0]:f[0]).length,r=t.slice(cut).replace(/^[\s:]+/,'').replace(/\([^)]*\)/g,'').trim(),ex=r?r.split(/\s*[\/+]\s*/).map(s=>s.trim()).filter(Boolean):[t.slice(0,ix).replace(/^WOD\s*/i,'').trim()],cp=t.match(/cap\s*(\d+)/i);if(ex.length&&ex[0])o.push({t:t.length>70?t.slice(0,68)+'\u2026':t,m:x?(x[1]=='AMRAP'?'amrap':'emom'):'ft',min:x?+x[2]:(cp?+cp[1]:20),ex})});return o}
function ML(){if(!S.ml){S.ml={};if(S.mo)Object.keys(S.mo).forEach(k=>{if(!/^\d{4}-/.test(k)){S.ml[k]=S.mo[k];delete S.mo[k]}})}return S.ml}
function malCx(c){const q=c[0]=='q',d=q?QT.d:gd,i=c[0]=='g'?+c.slice(1):q?QT.i:WI,e=(GG()[d]||[])[i];if(!e)return null;const al=[e[0],...e[5]],M=ML(),cur=q?(QV[d+'|'+i]||0):(V[d+i]||0),j=al.findIndex((a,k)=>k!=cur&&!exMu(a).some(x=>M[x]));return j<0?null:{q,d,i,j,n:al[j]}}
function malAlt(c){const z=malCx(c);if(!z)return;if(c[0]=='q')qtv(z.j);else if(c[0]=='w'){const q=WS[WI];V[gd+WI]=z.j;const k=kf(WI),l=S.g[k]||{kg:0,r:0};q.kg=dlK(l.kg||0);q.r=l.r||0;q.key=k;wr()}else selV(z.i,z.j);try{qt('\U0001F501 '+z.n)}catch(e){}}
function strFor(d){const t=String(d||'').toLowerCase(),nm=/abdom/.test(t)?'Espalda y lumbar':/empuje|push|pecho/.test(t)?'Empuje':/tracci|pull|espalda/.test(t)?'Tracción':/cu[aá]dri|femoral|pierna|leg|gl[uú]teo|gemelo/.test(t)?'Piernas y glúteo':'Cuerpo entero',ix=Math.max(0,STR.findIndex(r=>r[0]==nm));CI={m:'sch',hs:30,sel:ix,snd:true,el:-5,rd:0};strS()}
function cirT(){CI.ftt=Math.max(0,CI.el);cirF()}
function cirH(){if(CI.m=='sch')return'';const a=(S.cr||[]).filter(x=>x.m==CI.m).slice(-8);if(!a.length)return'';const v=x=>CI.m=='amrap'?(x.rd||0):x.tm,mx=Math.max(1,...a.map(v));return '<div class="mut" style="margin-top:10px"><b>\u00daltimos resultados'+(CI.m=='amrap'?' (rondas)':' (min)')+'</b></div><div style="display:flex;align-items:flex-end;gap:6px;height:64px;margin-top:6px">'+a.map(x=>'<div style="flex:1;text-align:center"><div style="font-size:12px">'+v(x)+'</div><div style="height:'+Math.max(6,Math.round(v(x)/mx*40))+'px;background:var(--t);border-radius:5px 5px 0 0"></div><div class="mut" style="font-size:12px">'+x.d.slice(8)+'/'+x.d.slice(5,7)+'</div></div>').join('')+'</div>'}
function vjGo(o){const t=o=='A'?'TR-1':'TR-4';if(Object.keys(gE()).some(d=>d.startsWith(t+' ')))gp(t);else{TM=6;TO=o=='A'?0:3;tplC()}}
function cirW(i){const w=CI.wd[i];CI.m=w.m;CI.min=w.min;CI.ex=w.ex;cirS()}
function cirO(d){const g=GG()[d]||[];if(!g.length)return;const wd=cirWd(g),w=wd[0];CI={d,wd,m:w?w.m:'tabata',min:w?w.min:12,w:20,r:10,n:8,ex:w?w.ex:g.map(e=>e[0]),snd:true,el:-5,rd:0};cirS()}
function cirP(k){CI[k]=CIA[k][(CIA[k].indexOf(CI[k])+1)%CIA[k].length];cirS()}
function cirS(){if(CI.m=='sch'){strS();return}const m=CI.m,P=m=='tabata'?`<button class="g" onclick="cirP('w')">Trabajo: ${CI.w} s</button><button class="g" onclick="cirP('r')">Descanso: ${CI.r} s</button><button class="g" onclick="cirP('n')">Rondas: ${CI.n}</button>`:`<button class="g" onclick="cirP('min')">${m=='ft'?'Límite':'Minutos'}: ${CI.min}${m=='ft'?' min':''}</button>`;qsh(`<b>🔄 Modo circuito</b><div class="row" style="margin:8px 0">${Object.keys(CIM).map(k=>`<button class="${m==k?'':'g'}" onclick="CI.m='${k}';cirS()">${CIM[k][0]}</button>`).join('')}</div><div class="mut">${CIM[m][1]}</div>${(CI.wd||[]).map((w,i)=>'<button class="g" style="display:block;width:100%;text-align:left;margin-top:6px" onclick="cirW('+i+')">▶ '+esc(w.t)+'</button>').join('')}<div class="row" style="margin-top:8px">${P}</div>${cirH()}<div class="mut" style="margin-top:8px">${CI.ex.map((x,i)=>(i+1)+'. '+esc(x)).join('<br>')}</div><button style="margin-top:10px;width:100%" onclick="cirG()">▶ Empezar (5 s de preparación)</button><button class="g" style="margin-top:6px;width:100%" onclick="cirX()">Cerrar</button>`)}
function cirG(){clearInterval(CI.iv);CI.el=-5;CI.rd=0;CI.ftt=null;CI.k='';CI.lt='';CI.pz=false;CI.done=false;CI.last=Date.now();try{navigator.wakeLock&&navigator.wakeLock.request('screen').then(w=>CI.wl=w).catch(()=>{})}catch(e){}cbp(800,.12);qsh(`<div class="row" style="justify-content:space-between"><b>${(CIM[CI.m]||['Estiramientos'])[0]}</b><span id="cirI" class="mut"></span><button class="g" style="padding:4px 10px" onclick="CI.snd=!CI.snd;this.textContent=CI.snd?'🔊':'🔇'">${CI.snd?'🔊':'🔇'}</button></div><div id="cirP" style="text-align:center;font-weight:800;letter-spacing:.12em;margin-top:10px"></div><div id="cirT" style="text-align:center;font-size:76px;font-weight:800;font-variant-numeric:tabular-nums;line-height:1.1">0:05</div><div id="cirE" style="text-align:center;font-size:22px;font-weight:800;min-height:56px"></div><div id="cirN" class="mut" style="text-align:center"></div><div id="cirL" style="text-align:center;margin-top:6px"></div><div class="row" style="justify-content:center;margin-top:10px"><button class="g" id="cirBz" onclick="cirZ()">⏸ Pausa</button>${CI.m=='amrap'?'<button onclick="CI.rd++;cirU()">＋1 ronda</button>':''}${CI.m=='ft'?'<button onclick="cirT()">🏁 Terminé</button>':''}<button class="g" onclick="cirX()">✕ Salir</button></div>`);CI.iv=setInterval(cirU,250);cirU()}
function cirZ(){CI.pz=!CI.pz;const b=$('cirBz');if(b)b.textContent=CI.pz?'▶ Seguir':'⏸ Pausa';if(CI.pz)try{speechSynthesis.cancel()}catch(e){}}
function cirX(){if(CI){clearInterval(CI.iv);try{CI.wl&&CI.wl.release()}catch(e){}}try{speechSynthesis.cancel()}catch(e){}qx()}
function cirU(){const t=$('cirT');if(!CI||!t){if(CI)clearInterval(CI.iv);return}const now=Date.now();if(!CI.pz)CI.el+=Math.min(1,(now-CI.last)/1000);CI.last=now;const el=CI.el,n=CI.ex.length,m=CI.m;let ph='WORK',left=0,ei=-1,key='',inf='',tot=0;if(m=='sch')tot=CI.sc.reduce((a,x)=>a+x.d,0);else if(m=='emom')tot=CI.min*60;else if(m=='tabata')tot=CI.n*(CI.w+CI.r);else tot=CI.min*60;if(el>=tot){cirF();return}if(el<0){ph='PREP';left=-el;key='prep';ei=0;inf='Empieza: '+CI.ex[0]}else if(m=='emom'){const k=Math.floor(el/60);left=60-(el-k*60);ei=k%n;key='e'+k;inf='Minuto '+(k+1)+'/'+CI.min}else if(m=='tabata'){const c=CI.w+CI.r,k=Math.floor(el/c),w=el-k*c;ph=w<CI.w?'WORK':'REST';left=ph=='WORK'?CI.w-w:c-w;ei=ph=='WORK'?k%n:(k+1)%n;key='t'+k+ph;inf='Ronda '+(k+1)+'/'+CI.n}else if(m=='ft'){left=tot-el;key='f'+Math.floor(el/60);inf='Límite '+CI.min+' min'}else if(m=='sch'){let a=0,k=0;while(k<CI.sc.length-1&&el>=a+CI.sc[k].d){a+=CI.sc[k].d;k++}const x=CI.sc[k];ph=x.p;left=a+x.d-el;ei=0;key='s'+k;inf=x.i;CI.sx=x}else{left=tot-el;key='a'+Math.floor(el/60);inf='Rondas hechas: '+CI.rd}if(CI.k!=key){CI.k=key;if(ph=='PREP')csay('Prepárate');else if(ph=='WORK'){cbp(1000,.5);csay(m=='sch'?CI.sx.v:ei>=0&&m!='amrap'?CI.ex[ei]:(el<1?'¡Vamos!':m=='ft'?'Van '+Math.floor(el/60)+' minutos':'Un minuto más'))}else{cbp(500,.25);csay(m=='sch'?CI.sx.v:'Descanso')}}const s=Math.ceil(left);if(s>=1&&s<=3&&CI.lt!=key+s){CI.lt=key+s;cbp(s==1?1400:900,.1)}{const e=$('cirE');if(e)e.style.color=(m=='sch'&&ph!='PREP'&&CI.sx&&CI.sx.y)?'#FACC15':''}$('cirP').textContent=ph=='PREP'?'PREPÁRATE':ph=='WORK'?(m=='sch'?'🧘 ESTIRA':'💪 TRABAJO'):(m=='sch'?'↔ CAMBIA':'😮‍💨 DESCANSO');$('cirP').style.color=ph=='WORK'?'#22C55E':ph=='REST'?'#F59E0B':'var(--mut)';t.textContent=tf(m=='ft'&&ph!='PREP'?Math.floor(el):s);$('cirE').textContent=m=='sch'&&ph!='PREP'?CI.sx.n:(m=='amrap'||m=='ft')&&ph!='PREP'?CI.ex.join(' · '):(ph=='REST'?'Siguiente: ':'')+CI.ex[ei];$('cirN').textContent=inf;$('cirI').textContent='';{const L=$('cirL');if(L){const b=m=='sch'?((ph=='PREP'?CI.sc[0]:ph=='WORK'?CI.sx:null)||{}).b||'':'';if(L.dataset.b!=b){L.dataset.b=b;L.innerHTML=b?'<a class="exl" href="https://www.youtube.com/results?search_query='+encodeURIComponent(b+' estiramiento cómo hacerlo')+'" target="_blank" rel="noopener">▶️ Ver vídeo de cómo hacerlo</a> <a class="exl" href="https://www.google.com/search?tbm=isch&amp;q='+encodeURIComponent(b+' cómo hacerlo')+'" target="_blank" rel="noopener">🖼️ Ver imagen</a>':''}}}}
function cirF(){clearInterval(CI.iv);CI.done=true;try{CI.wl&&CI.wl.release()}catch(e){}cbp(660,.2);setTimeout(()=>cbp(880,.2),250);setTimeout(()=>cbp(1100,.5),500);csay('Terminado');const m=CI.m,A=S.cr||[],k=m+'|'+(CI.ex||[]).join('+')+'|'+(m=='sch'?CI.sel+'|'+CI.hs:CI.min),pv=A.filter(x=>x.k==k),tot=(m=='emom'||m=='amrap'||m=='ft')?CI.min*60:m=='tabata'?CI.n*(CI.w+CI.r):CI.sc.reduce((a,x)=>a+x.d,0),r={d:td(),k,m,day:CI.d||'',tm:Math.round((m=='ft'&&CI.ftt!=null?CI.ftt:tot)/6)/10,rd:CI.rd,ft:CI.ftt==null?null:Math.round(CI.ftt)};let rec=false;if(m=='amrap')rec=pv.length>0&&r.rd>Math.max(...pv.map(x=>x.rd||0));else if(m=='ft'&&r.ft!=null){const f=pv.filter(x=>x.ft!=null).map(x=>x.ft);rec=f.length>0&&r.ft<Math.min(...f)}S.cr=[...A,r].slice(-300);save();const best=m=='amrap'?Math.max(0,...pv.map(x=>x.rd||0)):0;qsh(`<b>\U0001F3C1 \u00a1Terminado!</b>${m=='amrap'?'<div style="font-size:34px;font-weight:800;margin:8px 0">'+r.rd+' rondas</div>':m=='ft'?'<div style="font-size:34px;font-weight:800;margin:8px 0">'+(r.ft!=null?tf(r.ft):'\u23f1 Time cap')+'</div>':'<div style="margin:8px 0">\u2714 Completado</div>'}${rec?'<div class="tip">\U0001F3C6 \u00a1R\u00e9cord!</div>':m=='amrap'&&best?'<div class="mut">Tu r\u00e9cord: '+Math.max(best,r.rd)+' rondas</div>':''}<div class="row" style="margin-top:10px"><button onclick="cirG()">Repetir</button><button class="g" onclick="cirS()">Cambiar</button>${m=='sch'?'':'<button class="g" onclick="strFor(CI.d)">\U0001F9D8 Estirar</button>'}<button class="g" onclick="cirX()">Cerrar</button></div>`)}
let QW=null;
function qwB(l,e){if(e[6]||bw(e)||QT.s>1||!l||!(l.kg>=20))return'';const k=QT.d+'|'+QT.i;if(QW&&QW.k==k){const L=wuL({kg:QW.kg}),s=L[QW.j];return `<div class="item" style="display:block;margin-top:10px"><b>🔥 Calentamiento ${QW.j+1}/${L.length}: ${fm(s[0])} kg × ${s[1]}</b><div class="row" style="margin-top:8px"><button onclick="qwN()">✔ Hecha</button>${QW.j>0?'<button class="g" onclick="QW.j--;qtr()">‹ Anterior</button>':''}<button class="g" onclick="QW=null;qtr()">Saltar</button></div></div>`}return `<button class="g" style="margin-top:10px;width:100%" onclick="QW={k:'${k}',j:0,kg:${l.kg}};qtr()">🔥 Hacer calentamiento (${wuL({kg:l.kg}).length} series)</button>`}
function qwN(){QW.j++;if(QW.j>=wuL({kg:QW.kg}).length)QW=null;qtr()}
function qcir(){QC=QC?null:{r:3,t:20,rr:90};if(QC)QT.s=1;qtr()}
function qcs(k){const A=k=='t'?[10,15,20,30,45]:[60,90,120,150];QC[k]=A[(A.indexOf(QC[k])+1)%A.length];qtr()}
function qcb(){if(!QC)return'';return '<div class="item" style="display:block;margin-top:8px"><b>🔄 Circuito · ronda '+QT.s+'/'+QC.r+'</b><div class="row" style="margin-top:6px"><button class="g" style="padding:4px 10px" onclick="QC.r=QC.r%6+1;qtr()">Rondas: '+QC.r+'</button><button class="g" style="padding:4px 10px" onclick="qcs(\'t\')">Entre ejercicios: '+QC.t+' s</button><button class="g" style="padding:4px 10px" onclick="qcs(\'rr\')">Entre rondas: '+tf(QC.rr)+'</button></div></div>'}
function qtd(){QA=false;const g=GG()[QT.d],e=g[QT.i];hap(25);QH.push([QT.i,QT.s]);if(QC){if(QT.i<g.length-1){QT.i++;tm(QC.t)}else if(QT.s<QC.r){QT.s++;QT.i=0;tm(QC.rr)}else{QT.i=g.length;QT.s=1;stopT()}qtr();return}tm(rt(QT.d,e));if(QT.s<e[4])QT.s++;else{QT.i++;QT.s=1}qtr()}
function qnote(){qx();const o=document.createElement('div');o.id='qs';o.innerHTML='<div class="qb" onclick="qx()"></div><div class="pst"><i class="tape"></i><button class="pstx" onclick="qx()" aria-label="Cerrar">✕</button><textarea id="pad" placeholder="Escribe lo que quieras…">'+esc(S.pad||'')+'</textarea><button class="pstg" onclick="padSv()">Guardar</button></div>';QP.appendChild(o);setTimeout(()=>{const t=$('pad');if(t)t.focus()},700)}
function padSv(){S.pad=$('pad').value;save();qx();qt('📝 Nota guardada')}
function qsv(){const kg=num($('qk').value),t=($('qn').value||'').trim(),d=td();if(!kg&&!t){qx();return}if(kg){const o=S.w.find(w=>w.d==d);S.w=S.w.filter(w=>w.d!=d);S.w.push({d,kg,c:o&&o.c||''});RPO=0}if(t)(S.nt=S.nt||[]).push({d,t});save();qx();qt('Guardado');if(tab==1)peso()}
function wl(L){return '<div style="height:76px"></div>'+L.map(x=>`<div class="rwi">${fm(x)}</div>`).join('')+'<div style="height:76px"></div>'}
let WH=0,WT=0,WK=[];
function wo(i){const g=GG()[gd][i],vi=V[gd+i]||0,nm=[g[0],...g[5]][vi]||g[0];WT=0;WH=i;wsh(nm,num($('gk'+i).value)||0,Math.round(num($('gr'+i).value))||(g[3]?12:8),bw(g),kSt(kf(i)))}
function wq(){const e=GG()[gd][WI],q=WS[WI];WT=1;wsh(e[0],q.kg||0,q.r||(e[3]?12:8),bw(e),kSt(q.key))}
function wsh(nm,k0,r0,B,st){const K=[],Rr=[],s=st||.5;for(let v=0;v<=300;v=Math.round((v+s)*100)/100)K.push(v);if(k0>0&&!K.includes(k0)){K.push(k0);K.sort((a,b)=>a-b)}WK=K;for(let v=1;v<=40;v++)Rr.push(v);
qsh(`<b>${esc(nm)}</b><div class="rwh">${B?'':`<div class="rwc" id="wk">${wl(K)}</div>`}<div class="rwc" id="wr">${wl(Rr)}</div><div class="rwsel"></div></div><div class="row" style="justify-content:space-around">${B?'':'<span class="mut">kg</span>'}<span class="mut">repeticiones</span></div><button onclick="wok()" style="margin-top:8px">Listo</button>`);
[['wk',K,k0],['wr',Rr,r0]].forEach(a=>{const e=$(a[0]);if(!e)return;const ix=Math.max(0,a[1].findIndex(x=>x>=a[2]));e.scrollTop=ix*38;e.dataset.i=ix;e.onscroll=()=>{const j=Math.round(e.scrollTop/38);if(j!=e.dataset.i){e.dataset.i=j;tick()}}})}
function wok(){const kv=$('wk')?(WK[Math.min(WK.length-1,Math.round($('wk').scrollTop/38))]||0):0,rv=Math.min(39,Math.round($('wr').scrollTop/38))+1;if(WT){const q=WS[WI];q.kg=kv;q.r=rv;qx();wr();return}$('gk'+WH).value=kv;$('gr'+WH).value=rv;qx()}
function agef(b){const n=new Date(),x=new Date(b);if(isNaN(x))return 0;let a=n.getFullYear()-x.getFullYear();if(n<new Date(n.getFullYear(),x.getMonth(),x.getDate()))a--;return a}
function pfv(){const f=S.pf||{};return{a:agef(f.b||'1988-05-20'),h:f.h||178,d:f.d||5}}
function pfk(a,h,d){const w=lkg(),b=10*w+6.25*h-5*a+((S.pf&&S.pf.sx=='m')?-161:5),t=Math.round(b*({3:1.45,4:1.5,5:1.55}[d]||1.55)/10)*10,k=Math.round((t+1100*(S.obj??-.5))/10)*10,p=Math.round(2*w),g=Math.round(.9*w);return{t,k,p,g,c:Math.max(0,Math.round((k-4*p-9*g)/4))}}
function apB(){if(!S.bm)return;D.forEach(d=>{const n=d[0];d[1]=['Empuje','Tracción','Torso','Cuádriceps y Gemelo','Femoral'].includes(n)?S.bm:n=='Abdominales'?S.bm-150:n=='Fuerza + cardio'?S.bm:S.bm-300})}
function pfr(){const a=num($('pa').value),h=num($('ph').value),d=+$('pd').value;if(!a||!h)return;const r=pfk(a,h,d);$('pfr').innerHTML='<b style="font-size:20px">'+r.k+' kcal al día</b><div class="mut">'+r.p+' g proteína · '+r.g+' g grasa · '+r.c+' g hidratos</div>'}
function mnx(){const o=$('mnp');if(!o)return;o.classList.remove('on');setTimeout(()=>o.remove(),280)}
function mnM(){mnx();go(0);setTimeout(()=>{OP='dm';MO=true;dieta()},60)}
function mnA(){mnx();setTimeout(ayM,300)}
function mnP(){mnx();setTimeout(pzO,300)}
function mnu(){const old=$('mnp');if(old)old.remove();const h1=document.querySelector('h1');if(h1){h1.classList.remove('glow');void h1.offsetWidth;h1.classList.add('glow');setTimeout(()=>h1.classList.remove('glow'),1600)}
const v=pfv(),f=S.pf||{},w=S.w&&S.w.length?lkg():0,imc=w?w/Math.pow(v.h/100,2):0,imcT=imc?(imc<18.5?'bajo peso':imc<25?'normal':imc<30?'sobrepeso':'obesidad'):'',r=pfk(v.a,v.h,v.d),fd=x=>x.split('-').reverse().join('/'),R=S.pz||[],L=(S.ayh||[])[(S.ayh||[]).length-1],
ayT2=ayN()?'En marcha: '+ayT(Date.now()-S.ay.s)+' de '+S.ay.h+' h':(L?'Último: '+ayT(L.e-L.s)+' ('+L.h+' h)':'Sin ayunos todavía'),
pzT=pzP(td())?'Activo hoy':R.length?R.length+' periodo'+(R.length>1?'s':'')+' guardado'+(R.length>1?'s':''):'Sin pausas',
fal=S.gw&&w?Math.abs(w-S.gw):0,
o=document.createElement('div');o.id='mnp';
o.innerHTML=`<div class="ov" onclick="mnx()"></div><div class="pn"><div style="display:flex;gap:12px;align-items:center"><div class="nl" style="width:52px;height:52px;border-radius:15px;background:var(--logo) center/cover"></div><b style="font-size:22px">${esc(S.nm||'Javi')}</b><button class="g" style="margin-left:auto" onclick="mnx()" aria-label="Cerrar">✕</button></div>
<details style="margin-top:14px"><summary>👤 Datos personales</summary><div><label class="mut">Nombre<input id="mnn" value="${esc(S.nm||'Javi')}"></label><label class="mut">Fecha de nacimiento<input id="mnb" type="date" value="${f.b||'1988-05-20'}" max="${td()}"></label><div class="mut" style="margin-top:4px">Edad: <b>${v.a} años</b></div><div class="row"><label class="mut" style="flex:1">Sexo<select id="mnx2"><option value="h"${f.sx!='m'?' selected':''}>Hombre</option><option value="m"${f.sx=='m'?' selected':''}>Mujer</option></select></label><label class="mut" style="flex:1">Estatura (cm)<input id="mnh" inputmode="numeric" value="${v.h}"></label></div><label class="mut">Peso actual (kg)<input id="mnw" inputmode="decimal" value="${w?fm(w):''}" placeholder="sin registrar"></label>${imc?`<div class="mut" style="margin-top:4px">IMC: <b>${imc.toFixed(1).replace('.',',')}</b> (${imcT})</div>`:''}</div></details>
<details><summary>🎯 Peso objetivo</summary><div><label class="mut">Peso objetivo (kg)<input id="mng" inputmode="decimal" value="${S.gw||''}" placeholder="sin fijar"></label><label class="mut">Ritmo<select id="mno">${OB.map(x=>`<option value="${x[0]}"${x[0]==(S.obj??-0.5)?' selected':''}>${x[1]}</option>`).join('')}</select></label>${fal?`<div class="mut" style="margin-top:6px">${w>S.gw?'Te faltan':'Te faltan (subir)'} <b>${fm(fal)} kg</b> para tu objetivo.</div>`:''}</div></details>
<details><summary>🏋🏻 Entrenamiento</summary><div><label class="mut">Días de fuerza a la semana<select id="mnd">${[3,4,5].map(x=>`<option${x==v.d?' selected':''}>${x}</option>`).join('')}</select></label><button class="g" style="width:100%;margin-top:10px" onclick="mnx();go(2)">🏋🏻 Ir a Gimnasio y crear mi rutina</button></div></details>
<details><summary>🥩 Macros y calorías</summary><div><div style="font-size:20px;font-weight:800">${r.k} kcal al día</div><div class="mut">${r.p} g proteína · ${r.c} g hidratos · ${r.g} g grasa</div><div class="mut" style="margin-top:4px">Gasto estimado: ${r.t} kcal. Se recalcula con edad, sexo, estatura, peso, días de entreno y ritmo.</div><button class="g" style="width:100%;margin-top:10px" onclick="mnM()">Abrir Macros del día</button></div></details>
<details><summary>⏳ Ayuno</summary><div><div class="mut">${ayT2}</div><button class="g" style="width:100%;margin-top:10px" onclick="mnA()">Abrir ayuno</button></div></details>
<details><summary>🌴 Modo vacaciones</summary><div><div class="mut">${pzT}${R.length?'<br>'+R.map(x=>'⛱️ '+fd(x.a)+' – '+fd(x.b)).join('<br>'):''}</div><button class="g" style="width:100%;margin-top:10px" onclick="mnP()">Configurar vacaciones</button></div></details>
<details><summary>🤒 Modo enfermo</summary><div><div class="mut">${enf(td())?'Activo hoy':'Desactivado'}</div><button class="g" style="width:100%;margin-top:10px" onclick="mnx();setTimeout(enO,300)">Abrir modo enfermo</button></div></details>
<details><summary>⚙️ Ajustes</summary><div><div class="row"><button class="g" onclick="mnx();setTimeout(()=>wlc(true),300)">👋 Ver pantalla de bienvenida (prueba)</button></div><div class="row"><button class="g" onclick="tth()">🌓 Tema</button><button class="g" onclick="trOpen()">✨ Transición</button><button class="g" onclick="ffOpen()">🔤 Tipo de letra</button><button class="g" onclick="coOpen()">🎨 Color</button><button class="g" onclick="fz(-1)">A−</button><button class="g" onclick="fz(1)">A+</button></div></div></details>
<details><summary>💾 Copia de seguridad</summary><div><div class="row"><button class="g" onclick="exp()">Guardar copia</button><button class="g" onclick="$('imp2').click()">Restaurar</button><button class="g" onclick="xl()">📊 Excel</button></div><input id="imp2" type="file" accept=".json" hidden onchange="rest(this.files[0]);mnx()"></div></details>
<div style="position:sticky;bottom:-24px;margin:12px -16px -24px;padding:12px 16px 24px;background:var(--card);border-top:1px solid var(--ln)"><button style="width:100%" onclick="mns()">Guardar</button></div></div>`;document.body.appendChild(o);requestAnimationFrame(()=>requestAnimationFrame(()=>o.classList.add('on')))}
document.head.insertAdjacentHTML('beforeend','<style>#mnp details{border-top:1px solid var(--ln)}#mnp summary{list-style:none;display:flex;align-items:center;gap:8px;cursor:pointer;font-weight:700;font-size:20px;padding:15px 0}#mnp .pn{font-size:18px;width:min(90vw,370px)}#mnp .mut{font-size:16px}#mnp h3{font-size:16px}#mnp button,#mnp input,#mnp select{font-size:18px}#mnp label{font-size:16px}#mnp summary::-webkit-details-marker{display:none}#mnp summary::after{content:"▾";margin-left:auto;opacity:.6;transition:transform .2s}#mnp details[open] summary::after{transform:rotate(180deg)}#mnp details>div{padding:0 0 12px}.nl{box-shadow:0 0 0 2px #7CFC00,0 0 14px 4px rgba(124,252,0,.9),0 0 38px 10px rgba(124,252,0,.6);animation:nlp 1.1s ease-in-out infinite alternate}@keyframes nlp{to{box-shadow:0 0 0 2px #B6FF4D,0 0 22px 7px rgba(150,255,40,1),0 0 56px 16px rgba(124,252,0,.8)}}h1.glow::before{animation:hgl 1.5s ease-out}@keyframes hgl{from{box-shadow:0 0 0 2px #B6FF4D,0 0 24px 8px rgba(150,255,40,1),0 0 70px 22px rgba(124,252,0,.9)}}@media(prefers-reduced-motion:reduce){.nl,h1.glow::before{animation:none}}</style>');
function mns(){const nm=($('mnn').value||'').trim()||'Javi',b=$('mnb').value,h=Math.round(num($('mnh').value)),d=+$('mnd').value,a=agef(b);if(!b||!a||!h){qt('Revisa fecha y estatura');return}S.nm=nm;S.pf={a,h,d,b,sx:$('mnx2').value};S.obj=parseFloat($('mno').value);const g=num($('mng').value);if(g>0)S.gw=g;const wk=num($('mnw').value);if(wk>0&&(!S.w.length||Math.abs(wk-lkg())>0.001)){S.w=S.w.filter(w=>w.d!=td());S.w.push({d:td(),kg:wk,c:''})}const r=pfk(a,h,d);S.bm=r.t;S.mp=r.p;S.mg=r.g;delete S.pp;delete S.hp;delete S.gp;apB();save();mnx();qt('Perfil guardado');try{hdr()}catch(e){}go(tab)}
function pfo(){const v=pfv(),O=['Empuje','Tracción','Torso','Cuádriceps y Gemelo','Femoral'],P=['Empuje','Tracción','Cuádriceps y Gemelo','Femoral','Torso'];qsh(`<div style="display:flex;gap:12px;align-items:center"><div style="width:52px;height:52px;border-radius:15px;background:var(--logo) center/cover"></div><b style="font-size:24px">${esc(S.nm||'Javi')}</b></div><h3>Datos básicos</h3><div class="row"><label class="mut" style="flex:1">Edad<input id="pa" inputmode="numeric" value="${v.a}" oninput="pfr()"></label><label class="mut" style="flex:1">Estatura (cm)<input id="ph" inputmode="numeric" value="${v.h}" oninput="pfr()"></label></div><h3>Entrenamiento</h3><label class="mut">Días de fuerza a la semana<select id="pd" onchange="pfr();pfn()">${[3,4,5].map(x=>`<option${x==v.d?' selected':''}>${x}</option>`).join('')}</select></label><div id="pfn" style="margin-top:6px"></div><h3>Objetivos actuales</h3><div>Peso objetivo: <b>${S.gw?fm(S.gw)+' kg':'sin fijar'}</b></div><div id="pfr" style="margin-top:6px"></div><div class="mut" style="margin-top:6px">Las calorías se recalculan con tu edad, estatura, peso actual y días de entreno, y bajan ${Math.abs(Math.round(1100*(S.obj??-.5)))} kcal por tu objetivo.</div><div class="row" style="margin-top:12px"><button onclick="pfs()">Guardar</button><button class="g" onclick="qx()">Cerrar</button></div>`);pfr();pfn()}
function pfn(){const d=+$('pd').value,P=['Empuje','Tracción','Cuádriceps y Gemelo','Femoral','Torso'].slice(0,d),O=['Empuje','Tracción','Torso','Cuádriceps y Gemelo','Femoral'];$('pfn').innerHTML=O.filter(x=>P.includes(x)).join(' · ')+'<div class="mut">Abdominales: libres, cualquier día.</div>'}
function pfs(){const a=Math.round(num($('pa').value)),h=Math.round(num($('ph').value)),d=+$('pd').value;if(!a||!h)return;S.pf={a,h,d};const r=pfk(a,h,d);S.bm=r.t;S.mp=r.p;S.mg=r.g;delete S.pp;delete S.hp;delete S.gp;apB();save();qx();qt('Perfil guardado');go(tab)}
function fnow(){const c=ml('Cintura').pop(),n=ml('Cuello').pop();if(c&&n&&c>n){const b=495/(1.0324-0.19077*Math.log10(c-n)+0.15456*Math.log10(pfv().h))-450;if(isFinite(b))return Math.round(b*10)/10}}
let CMS=null,CV='frente';const GD={frente:'De frente, brazos relajados a los lados, pies a la anchura de los hombros, mirando al frente.',lado:'De perfil, brazos relajados, cuerpo recto, mirando al frente.',espalda:'De espaldas, brazos relajados, pies a la anchura de los hombros.'};
function stopCam(){if(CMS){CMS.getTracks().forEach(t=>t.stop());CMS=null}}
async function cam(v){stopCam();CV=v;const pv=[...S.bf].reverse().find(x=>(x.v||'frente')==CV);qsh(`<b>📸 Foto de ${CV}</b><div class="row" style="margin:6px 0">${['frente','lado','espalda'].map(x=>`<button class="${x==CV?'':'g'}" style="padding:5px 10px" onclick="cam('${x}')">${x}</button>`).join('')}</div><div class="cam"><video id="cv" autoplay playsinline muted></video>${pv?`<img class="gh" src="${pv.u}" alt="">`:''}<div class="grid"></div></div><div class="mut">${GD[CV]} Luz natural y en ayunas por la mañana.${pv?' Alinea tu cuerpo con la silueta fantasma de la foto del '+pv.d+'.':''}</div><div class="row" style="margin-top:8px"><button onclick="snap()">📷 Hacer foto</button><button class="g" onclick="qx()">Cerrar</button></div>`);try{CMS=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user'}});$('cv').srcObject=CMS}catch(e){const c=document.querySelector('.cam');if(c)c.outerHTML='<div class="tip">La cámara en vivo no está disponible en esta ventana. Usa los botones «Foto de…» con la cámara del móvil y sigue la guía.</div>'}}
function snap(){const v=$('cv');if(!v||!v.videoWidth){qt('La cámara aún no está lista');return}const c=document.createElement('canvas');c.width=v.videoWidth;c.height=v.videoHeight;c.getContext('2d').drawImage(v,0,0);const vv=CV;c.toBlob(b=>{qx();bph(new File([b],'f.jpg',{type:'image/jpeg'}),vv)},'image/jpeg',.9)}
async function bioSet(){try{const c=await navigator.credentials.create({publicKey:{challenge:crypto.getRandomValues(new Uint8Array(32)),rp:{name:'Plan de Javi'},user:{id:crypto.getRandomValues(new Uint8Array(8)),name:'javi',displayName:'Javi'},pubKeyCredParams:[{type:'public-key',alg:-7},{type:'public-key',alg:-257}],authenticatorSelection:{authenticatorAttachment:'platform',userVerification:'required'},timeout:60000}});S.bio=btoa(String.fromCharCode(...new Uint8Array(c.rawId)));save();qt('🔐 Huella / Face ID activados')}catch(e){qt('Aquí no se puede usar huella; usa el código')}}
async function bio(){try{if(!S.bio)throw 0;await navigator.credentials.get({publicKey:{challenge:crypto.getRandomValues(new Uint8Array(32)),allowCredentials:[{type:'public-key',id:Uint8Array.from(atob(S.bio),c=>c.charCodeAt(0))}],userVerification:'required',timeout:60000}});UNL=true;peso()}catch(e){qt(S.bio?'No se pudo verificar; usa el código':'Primero activa la huella con tu código')}}
function ldX(){return new Promise((ok,ko)=>{if(window.XLSX)return ok();const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';s.onload=ok;s.onerror=ko;document.head.appendChild(s)})}
async function xl(){if(!DL){qt('La descarga no está disponible ahora');return}const W=[...S.w].sort((a,b)=>a.d<b.d?-1:1).map(w=>[w.d,w.kg,w.c||'']),Gm=[];Object.keys(S.gh).forEach(k=>{const p=k.split('|');S.gh[k].forEach(x=>Gm.push([x.d,prg(p[0])?tpOf(p[0])[1]:'Mi rutina',p[0],p[1]+(+p[2]?' (alt. '+p[2]+')':''),x.kg,x.r,Math.round(x.kg*x.r*LF(k)*10)/10]))});Gm.sort((a,b)=>a[0]<b[0]?-1:a[0]>b[0]?1:0);const M=[...S.m].sort((a,b)=>a.d<b.d?-1:1).map(z=>[z.d,...MD.map(m=>z.v[m[0]]||'')]);
const rows={Peso:[['Fecha','Peso (kg)','Comentario'],...W],Gimnasio:[['Fecha','Entreno','Día','Ejercicio','Peso (kg)','Reps','Volumen (kg×reps)'],...Gm],'Récords':[['Entreno','Día','Ejercicio','Mejor peso (kg)','Reps','Fecha'],...(()=>{const b={};Gm.forEach(r=>{const k=r[2]+'|'+r[3],o=b[k];if(!o||r[4]>o[4]||(r[4]==o[4]&&r[5]>o[5]))b[k]=r});return Object.values(b).map(r=>[r[1],r[2],r[3],r[4],r[5],r[0]])})()],Medidas:[['Fecha',...MD.map(m=>m[0]+' (cm)')],...M]};
try{await ldX();const wb=XLSX.utils.book_new();Object.keys(rows).forEach(n=>XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(rows[n]),n));const a=XLSX.write(wb,{bookType:'xlsx',type:'array'});await DL.save({filename:'mi-plan-historico.xlsx',data:new Blob([a],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})});qt('📊 Excel exportado')}catch(e){try{const csv='\ufeff'+Object.keys(rows).map(n=>n+'\n'+rows[n].map(r=>r.map(c=>'"'+String(c).replace(/"/g,'""')+'"').join(';')).join('\n')).join('\n\n');await DL.save({filename:'mi-plan-historico.csv',data:new Blob([csv],{type:'text/csv'})});qt('Exportado en CSV (abre con Excel)')}catch(e2){}}}

function phAll(){const L=S.bf.map((x,i)=>[x,i]).reverse();if(!L.length)return '';return `<details style="margin-top:10px"><summary><b>🖼️ Todas las fotos (${L.length})</b></summary>${L.map(([x,i])=>`<div class="item" style="gap:10px;align-items:center"><img src="${x.u}" alt="" style="width:84px;height:112px;object-fit:cover;border-radius:10px"><div style="flex:1"><b>${x.d.slice(8)}/${x.d.slice(5,7)}/${x.d.slice(0,4)}</b> · ${x.v||'frente'}<div class="mut">Peso: ${x.kg?fm(x.kg)+' kg':'—'}<br>IMC: ${x.kg?fm(x.kg/3.1684):'—'}<br>Grasa: ${x.f?fm(x.f)+' %':'—'}</div></div><button class="g" onclick="delPh(${i})" aria-label="Borrar foto">🗑</button></div>`).join('')}</details>`}
function delPh(i){cf('¿Borrar esta foto?',()=>{S.bf.splice(i,1);save();peso()},'Sí, borrar')}

function fabX(){const f=$('fab');if(f&&f.classList.contains('o')){f.classList.remove('o');$('ftab').setAttribute('aria-expanded','false')}}
function bF(b){setTimeout(fabX,700);b.classList.remove('fl');void b.offsetWidth;b.classList.add('fl')}
let BAB=0;function bA(b,fn){if(BAB)return;BAB=1;b.classList.remove('an');void b.offsetWidth;b.classList.add('an');setTimeout(()=>{BAB=0;fabX();b.classList.remove('an');document.querySelectorAll('.mdl').forEach(x=>x.remove());try{OP=null}catch(e){}fn()},700)}

let GP='',RS=[];
function kSt(key){const p=String(key).split('|'),e=(GG()[p[0]]||[]).find(z=>z[0]==p[1]),j=+p[2]||0,nm=e?(j?(e[5][j-1]||''):e[0]):(p[1]||'');if(!nm)return null;
if(/mancuerna/i.test(nm))return 2;
if(/jal[oó]n(?! de tr)|remo en polea/i.test(nm))return 5;
if(/polea|cuerda|katana/i.test(nm))return 2.5;
if(/m[aá]quina de discos|m[aá]quina de fondos|hammer|hack|prensa inclinada|barra hexagonal|remo en t\b|remo con barra|peso muerto con barra/i.test(nm))return LF(key)==2?2.5:5;
return null}
function nxK(kg,key){const s=key?kSt(key):null;if(s==2){const f=Math.floor(kg/2)*2;return Math.max(f+2,Math.round(kg*1.05/2)*2)}const i=s||(kg<10?1:2.5);return Math.max(kg+i,Math.round(kg*1.05/i)*i)}
function nxT(key,l,lo){const dn=(S.gh[key]||[]).some(z=>z.d==td()),p=dn?'📅 Próxima vez: ':'Hoy: ';if(l.r>=12)return p+'SUBE PESO → '+fm(nxK(l.kg,key))+' kg × '+lo+' reps.';return p+'mismos '+fm(l.kg)+' kg y '+Math.min(12,l.r%2?l.r+1:l.r+2)+' reps (siempre pares, rango '+lo+'-12).'}
function xdA(i){const k=kf(i),l=S.g[k];if(!l||!l.kg)return;const ic=kSt(k)||(l.kg<10?1:2.5),n=Math.min(Math.round(l.kg*.9/ic)*ic,l.kg-ic);(S.xd=S.xd||{})[k]={o:l.kg,s:td(),e:dayAdd(td(),6)};S.g[k]={kg:n,r:l.r};save();gym()}
function xdR(i){const k=kf(i),x=(S.xd||{})[k];if(!x)return;const l=S.g[k]||{kg:0,r:0};S.g[k]={kg:x.o,r:l.r};delete S.xd[k];if(td()>x.e)(S.xc=S.xc||{})[k]=td();save();gym()}
function xdT(i,k){const x=(S.xd||{})[k];if(!x)return '';const f=x.e.slice(8)+'/'+x.e.slice(5,7);return td()>x.e?'🔁 Ya pasó tu semana ligera: vuelve a '+fm(x.o)+' kg y sube repeticiones. <button class="g" style="margin-top:6px" onclick="xdR('+i+')">Volver a '+fm(x.o)+' kg</button>':'📉 Deload de este ejercicio hasta el '+f+' (−10 %): entrena sin llegar al límite. <button class="g" style="margin-top:6px" onclick="xdR('+i+')">Cancelar y volver a '+fm(x.o)+' kg</button>'}
function stl(key,i){const a=S.gh[key]||[];if(a.length<3||(S.xd||{})[key])return '';const c=(S.xc||{})[key];if(c&&td()<dayAdd(c,21))return '';const e=x=>x.kg*(1+x.r/30),[p,q,r]=a.slice(-3);if(!p.kg||!(e(r)<=e(p)&&e(q)<=e(p)))return '';const l=S.g[key]||{kg:0},ic=kSt(key)||(l.kg<10?1:2.5),n=Math.min(Math.round(l.kg*.9/ic)*ic,l.kg-ic);return l.kg>0&&i!==undefined?'⚠️ Estancado: 3 sesiones sin mejorar. ¿Bajo este ejercicio un 10 % una semana ('+fm(l.kg)+' → '+fm(n)+' kg) y luego vuelves a '+fm(l.kg)+'? <button class="g" style="margin-top:6px" onclick="xdA('+i+')">Sí, hacer deload</button>':'⚠️ Estancado: 3 sesiones sin mejorar. Prueba un deload (−10 % de peso), cambia a una alternativa o revisa descanso y sueño.'} function wb(){const e=GG()[gd][WI],n=e[5].length+1,q=WS[WI];V[gd+WI]=((V[gd+WI]||0)+1)%n;const k=kf(WI),l=S.g[k]||{kg:0,r:0};q.kg=dlK(l.kg||0);q.r=l.r||0;q.key=k;wr()}
function wsm(){if(!RS.length)return;const c=RS.reduce((a,x)=>a+x.cur,0),p=RS.reduce((a,x)=>a+(x.pv?x.pv:0),0),cp=RS.reduce((a,x)=>a+(x.pv?x.cur:0),0),d=p?Math.round((cp-p)/p*100):null;qsh(`<b>🏁 Resumen del entreno</b><div style="margin:8px 0;font-size:26px;font-weight:800">${Math.round(c).toLocaleString('es-ES')} <span class="mut" style="font-size:13px">kg×reps de volumen</span></div>${d==null?'<div class="mut">Primera vez que registras estos ejercicios: sin comparación.</div>':`<div class="tip">${d>=0?'▲ +':'▼ '}${d} % frente a la sesión anterior</div>`}${RS.map(x=>`<div class="item"><span style="flex:1">${esc(x.nm)}${x.rc?' 🏆':''}</span><span class="mut">${x.pv?(x.cur>=x.pv?'▲ ':'▼ ')+Math.round((x.cur-x.pv)/x.pv*100)+' %':'nuevo'}</span></div>`).join('')}<button class="g" style="margin-top:10px;display:block;width:100%" onclick="strFor(gd)">🧘 Estirar ahora</button><button style="margin-top:8px" onclick="qx()">Cerrar</button>`)}
function adjCard(){const T=td(),W=(S.w||[]).filter(w=>(Date.parse(T)-Date.parse(w.d))/864e5<=27);if(W.length<6)return '';const ds=W.map(w=>w.d).sort();if((Date.parse(ds[ds.length-1])-Date.parse(ds[0]))/864e5<20)return '';for(let i=0;i<21;i++){const d=dayAdd(T,-i);if(pz(d)||mn(d))return ''}const w1=avgW(dayAdd(T,-6),T),w0=avgW(dayAdd(T,-20),dayAdd(T,-14));if(w1==null||w0==null)return '';let lg=0,ok=0;for(let i=0;i<21;i++){const d=dayAdd(T,-i),L=S.f[d]||[];if(!L.length)continue;lg++;const k=L.reduce((a,x)=>a+(x.k||0),0),g=goalF(d);if(k>=g*.85&&k<=g*1.05)ok++}if(lg<15||ok<lg*.85)return '';const ac=(w1-w0)/2,ob=S.obj??-.5;if(Math.abs(ac-ob)<.35)return '';let dl=Math.round((ob-ac)*1100/50)*50;dl=Math.max(-250,Math.min(250,dl));if(Math.abs(dl)<150||goalF(T)+dl<1500)return '';return `<div class="card"><b>⚖️ Ajuste de calorías</b><div class="mut">Ritmo real (media de 7 días, hace 2 semanas vs ahora): ${fm(ac)} kg/semana · objetivo ${fm(ob)}. Llevas 3 semanas cumpliendo la dieta.</div><div class="tip">${dl<0?'Pierdes más despacio de lo previsto: baja':'Pierdes más rápido de lo previsto: sube'} unas ${Math.abs(dl)} kcal al día.</div><button onclick="adj(${dl})">Aplicar ${dl>0?'+':''}${dl} kcal</button></div>`}
function adj(dl){S.bm=(S.bm||D[0][1])+dl;apB();save();qt('Calorías ajustadas');go(1)}
function inf(){const t=td(),m=t.slice(0,7),pd=new Date(+t.slice(0,4),+t.slice(5,7)-2,1),pm=pd.getFullYear()+'-'+String(pd.getMonth()+1).padStart(2,'0'),mo=k=>x=>x.d.slice(0,7)==k;
const av=k=>{const x=S.w.filter(mo(k));return x.length?x.reduce((a,w)=>a+w.kg,0)/x.length:null},gv=k=>{let v=0,d=new Set;Object.keys(S.gh).forEach(y=>S.gh[y].forEach(x=>{if(x.d.slice(0,7)==k){v+=x.kg*x.r*LF(y);d.add(x.d)}}));return[Math.round(v),d.size]},md=(k,n)=>{const z=S.m.filter(mo(k)).filter(z=>z.v[n]).pop();return z?z.v[n]:null},fat=k=>{const c=md(k,'Cintura'),n=md(k,'Cuello');return c&&n&&c>n?495/(1.0324-0.19077*Math.log10(c-n)+0.15456*Math.log10(pfv().h))-450:null};
const rw=(l,a,b,u)=>`<div class="item"><span style="flex:1">${l}</span><b>${a!=null?fm(a)+u:'—'}</b><span class="mut" style="width:62px;text-align:right">${b!=null?fm(b)+u:'—'}</span><span style="width:54px;text-align:right">${a!=null&&b!=null?(a>=b?'▲ ':'▼ ')+fm(Math.abs(a-b)):''}</span></div>`;
qsh(`<b>📅 Informe del mes</b><div class="mut" style="margin:4px 0 8px">Este mes · mes anterior · diferencia</div>${rw('Peso medio',av(m),av(pm),' kg')}${rw('% grasa',fat(m),fat(pm),' %')}${['Pecho','Cintura','Bíceps','Muslo'].map(n=>rw(n,md(m,n),md(pm,n),' cm')).join('')}${rw('Sesiones de gimnasio',gv(m)[1],gv(pm)[1],'')}${rw('Volumen gym',gv(m)[0],gv(pm)[0],'')}${rw('Fotos',S.bf.filter(mo(m)).length,S.bf.filter(mo(pm)).length,'')}<button style="margin-top:10px" onclick="qx()">Cerrar</button>`)}

function aal(i){const n=($('an'+i).value||'').trim();if(!n)return;gE()[gd][i][5].push(n);save();const y=scrollY;gym();scrollTo(0,y)}
function dal(i,j){cf('¿Seguro que quieres borrar esta alternativa?',()=>{gE()[gd][i][5].splice(j,1);V[gd+i]=0;save();gym()},'Sí, borrar')}
apB();
