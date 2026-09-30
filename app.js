const S={get(k,d){try{const v=localStorage.getItem('sf_'+k);return v===null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('sf_'+k,JSON.stringify(v))}catch(e){}}};
const qp=new URLSearchParams(location.search);
const DA=n=>Math.round(n).toLocaleString('fr-FR').replace(/\u202f|\u00a0/g,' ')+' DA';
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const ic=(d,w)=>`<svg viewBox="0 0 24 24" width="${w||22}" height="${w||22}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
const I={check:'M5 12l5 5 9-10',arrow:'M5 12h14M13 6l6 6-6 6',phone:'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2',mail:'M3 5h18v14H3zM4 7l8 6 8-6',pin:'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5',play:'M7 4l13 8-13 8z',win:'M3 5l8-1.2V11H3zM13 3.5L21 2v9h-8zM3 13h8v7.2L3 19zM13 13h8v9l-8-1.5z',lock:'M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4',wa:'M3 21l1.6-4.6A9 9 0 1 1 8 20z'};
const GC='<span class="gc"><b>Gest</b><i>Com</i></span>';
function logo(){return `<a class="logo" href="index.html" aria-label="SOFTEL accueil"><img src="img/softel-logo.png" alt="SOFTEL Software & Telecommunication"></a>`}
const Shell={init(){
 const here=location.pathname.split('/').pop()||'index.html';const a=f=>here===f?' class="act"':'';
 document.getElementById('hdr').outerHTML=`<header class="hd" id="hd"><div class="wrap hdi">${logo()}
 <nav class="nav"><div class="dd"><button>${GC} <span class="car">▾</span></button><div class="ddm">${MODULES.map(m=>`<a href="module.html?m=${m.id}"><span class="mi" style="--c:${m.c}">${ic(m.ic,18)}</span><span><b>${m.n}</b><small>${m.s}</small></span></a>`).join('')}</div></div>
 <a href="demo.html"${a('demo.html')}>Tester le logiciel</a><a href="tarifs.html"${a('tarifs.html')}>Tarifs</a><a href="index.html#secteurs">Secteurs</a><a href="index.html#contact">Contact</a></nav>
 <div class="hr"><a class="lnk" href="${SF.fixeTel}">${ic(I.phone,17)} ${SF.fixe}</a><a class="btn sm" href="essai.html">Essai gratuit</a><button class="burger" id="burger" aria-label="Menu">☰</button></div></div>
 <div class="mnav" id="mnav"><a href="demo.html">Tester le logiciel</a>${MODULES.map(m=>`<a href="module.html?m=${m.id}">Module ${m.n}</a>`).join('')}<a href="tarifs.html">Tarifs</a><a href="essai.html">Essai gratuit / rendez-vous</a><a href="index.html#contact">Contact</a></div></header>`;
 const f=document.getElementById('ftr');if(f)f.outerHTML=`<footer class="ft"><div class="wrap"><div class="ftop"><div>${logo()}<p>${SF.full}. Éditeur algérien de logiciels de gestion pour les PME et PMI. ${SF.slogan}.</p></div>
 <div><h4>${GC}</h4>${MODULES.map(m=>`<a href="module.html?m=${m.id}">${m.n}</a>`).join('')}</div>
 <div><h4>Découvrir</h4><a href="demo.html">Démo interactive</a><a href="tarifs.html">Tarifs et configurateur</a><a href="essai.html">Essai gratuit</a><a href="essai.html?t=rdv">Prendre rendez-vous</a></div>
 <div><h4>Contact</h4><a href="${SF.fixeTel}">${SF.fixe}</a><a href="${SF.mobTel}">${SF.mob}</a><a href="${SF.wa}" target="_blank" rel="noopener">WhatsApp ${SF.wa2}</a><a href="mailto:${SF.email}">${SF.email}</a><a href="${SF.map}" target="_blank" rel="noopener">${SF.addr}</a></div></div>
 <div class="fbot"><span>© ${SF.year} SOFTEL Solutions. Maquette de présentation.</span><span>${GC} ${SF.version}</span></div></div></footer>`;
 const t=document.createElement('button');t.className='ptog';t.id='ptog';document.body.appendChild(t);
 const setP=on=>{document.documentElement.classList.toggle('nopost',!on);t.innerHTML=on?'<span class="pin"></span>Masquer les post-it':'<span class="pin"></span>Afficher les post-it';S.set('post',on)};
 setP(S.get('post',true));t.onclick=()=>setP(document.documentElement.classList.contains('nopost'));
 const wa=document.createElement('a');wa.className='wa';wa.href=SF.wa;wa.target='_blank';wa.rel='noopener';wa.setAttribute('aria-label','WhatsApp');wa.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.4c-.2.2-.3.4-.1.7.7 1.2 1.6 2 2.7 2.6.3.2.5.1.7-.1l.8-1c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.5.5 0 .2 0 .8-.2 1.3z"/></svg>';document.body.appendChild(wa);
 const b=document.getElementById('burger'),m=document.getElementById('mnav');b.onclick=()=>{m.classList.toggle('open');b.textContent=m.classList.contains('open')?'✕':'☰'};
 const hd=document.getElementById('hd');const sc=()=>hd.classList.toggle('solid',scrollY>20);addEventListener('scroll',sc,{passive:true});sc();
 Reveal();
}};
function Reveal(){const els=document.querySelectorAll('.rv:not(.in)');if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return}const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});els.forEach(e=>io.observe(e))}
function note(txt,cls,rot){return `<span class="postit ${cls||''}" style="--r:${rot||-3}deg">${txt}</span>`}
function toast(h){let t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';document.body.appendChild(t)}t.innerHTML=h;t.classList.add('on');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('on'),3000)}
