/* Legacy block 15, extracted verbatim from reference/original.html. Classic script: shares global scope with the other legacy blocks. */
(function(){
const W={};let st=1,demo=false,el=null,tries=0;
const e2=x=>String(x).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const has=()=>!!(S.wl||(S.w&&S.w.length)||Object.keys(S.f||{}).length||Object.keys(S.gh||{}).length||S.nm||S.pf);
window.wlc=function(d){
 demo=!!d;
 if(!demo&&has()){if(!S.wl){S.wl=1;sv()}return}
 if(document.getElementById('wlc'))return;
 const sp=document.getElementById('sp');
 if(!demo&&sp&&getComputedStyle(sp).visibility!=='hidden'&&getComputedStyle(sp).opacity!=='0'&&++tries<25){setTimeout(()=>wlc(),300);return}
 Object.assign(W,{n:'',b:'',sx:'h',h:'',kg:'',gw:'',obj:-0.5,d:4,e:''});st=1;
 el=document.createElement('div');el.id='wlc';el.className='wlc';el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');
 el.addEventListener('click',clk);el.addEventListener('input',inp);
 document.body.appendChild(el);document.body.style.overflow='hidden';draw();
};
function inp(ev){const t=ev.target,m={wzn:'n',wzb:'b',wzh:'h',wzk:'kg',wzg:'gw'};if(m[t.id])W[m[t.id]]=t.value;else if(t.id=='wzo')W.obj=parseFloat(t.value)}
function draw(){
 const dots='<div class="wd">'+[1,2,3].map(i=>'<i class="'+(i<=st?'on':'')+'"></i>').join('')+'</div>';
 let b='';
 if(st==1)b='<h2>Bienvenido a<br>yoseloquecomo</h2><p>Tu plan de comida y entreno, hecho a tu medida. Solo son 3 pasos.</p><label>¿Cómo te llamas?<input id="wzn" autocomplete="given-name" maxlength="24" value="'+e2(W.n)+'"></label><div class="we">'+e2(W.e)+'</div><div class="wb"><button class="wp" data-a="next">Empezar</button></div>';
 else if(st==2)b='<h2>Sobre ti</h2><p>Con esto calculo tus calorías y tus macros.</p><label>Fecha de nacimiento<input id="wzb" type="date" max="'+td()+'" value="'+e2(W.b)+'"></label><label>Sexo<div class="wc"><button type="button" class="ch'+(W.sx=='h'?' on':'')+'" data-a="sx" data-v="h">Hombre</button><button type="button" class="ch'+(W.sx=='m'?' on':'')+'" data-a="sx" data-v="m">Mujer</button></div></label><label>Estatura (cm)<input id="wzh" inputmode="numeric" placeholder="175" value="'+e2(W.h)+'"></label><label>Peso actual (kg)<input id="wzk" inputmode="decimal" placeholder="75,5" value="'+e2(W.kg)+'"></label><div class="we">'+e2(W.e)+'</div><div class="wb"><button class="wg2" data-a="back">Atrás</button><button class="wp" data-a="next">Siguiente</button></div>';
 else b='<h2>Tu objetivo</h2><p>Puedes cambiarlo cuando quieras en tu perfil.</p><label>Peso objetivo (kg, opcional)<input id="wzg" inputmode="decimal" placeholder="70" value="'+e2(W.gw)+'"></label><label>Ritmo<select id="wzo">'+OB.map(o=>'<option value="'+o[0]+'"'+(o[0]==W.obj?' selected':'')+'>'+e2(o[1])+'</option>').join('')+'</select></label><label>Días de fuerza a la semana<div class="wc">'+[3,4,5].map(n=>'<button type="button" class="ch'+(W.d==n?' on':'')+'" data-a="d" data-v="'+n+'">'+n+'</button>').join('')+'</div></label><div class="we">'+e2(W.e)+'</div><div class="wb"><button class="wg2" data-a="back">Atrás</button><button class="wp" data-a="done">Terminar</button></div>';
 el.innerHTML='<div class="wi"><div class="wlg"></div>'+dots+b+'</div>';
}
function close(){if(el){el.remove();el=null}document.body.style.overflow=''}
function clk(ev){const t=ev.target.closest('[data-a]');if(!t)return;const a=t.dataset.a;
 if(a=='sx'){W.sx=t.dataset.v;draw();return}
 if(a=='d'){W.d=+t.dataset.v;draw();return}
 if(a=='back'){W.e='';st--;draw();return}
 if(a=='next'){
  if(st==1){if(!W.n.trim()){W.e='Dime cómo te llamas';draw();return}}
  else{const age=agef(W.b),h=Math.round(num(W.h)),kg=num(W.kg);
   if(!W.b||age<14||age>100){W.e='Revisa la fecha de nacimiento';draw();return}
   if(!(h>=120&&h<=230)){W.e='Revisa la estatura (en cm)';draw();return}
   if(!(kg>=30&&kg<=300)){W.e='Revisa el peso (en kg)';draw();return}}
  W.e='';st++;draw();return}
 if(a=='done'){
  const gw=num(W.gw);if(W.gw&&!(gw>=30&&gw<=300)){W.e='Revisa el peso objetivo';draw();return}
  fin(gw)}
}
function fin(gw){
 const n=W.n.trim(),b=W.b,a=agef(b),h=Math.round(num(W.h)),kg=num(W.kg);
 if(demo){close();qt('Prueba: no se ha guardado nada');return}
 S.nm=n;S.pf={a,h,d:W.d,b,sx:W.sx};S.obj=parseFloat(W.obj);if(gw>0)S.gw=gw;
 S.w=(S.w||[]).filter(w=>w.d!=td());S.w.push({d:td(),kg,c:''});
 if(S.fav&&S.fav.length==1&&/^Desayuno habitual/.test(S.fav[0].n))S.fav=[];
 const r=pfk(a,h,W.d);S.bm=r.t;S.mp=r.p;S.mg=r.g;delete S.pp;delete S.hp;delete S.gp;apB();S.wl=1;save();
 close();try{hdr()}catch(e){}{const nn=$('nm');if(nn)nn.textContent=n}go(0);qt('¡Listo, '+n+'!');
}
})()
