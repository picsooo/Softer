/* Simulateur GestCom — données fictives, tout fonctionne en local */
const SIM0=()=>({
 art:[{r:'ART-001',n:'Ramette papier A4 80 g',f:'Bureautique',pv:750,pa:560,q:320,s:80},{r:'ART-002',n:'Toner laser 85A',f:'Bureautique',pv:4900,pa:3700,q:14,s:20},
  {r:'ART-003',n:'Câble électrique 3×2,5 mm² — 100 m',f:'Électricité',pv:12800,pa:10100,q:36,s:10},{r:'ART-004',n:'Disjoncteur 16 A',f:'Électricité',pv:1150,pa:820,q:6,s:25},
  {r:'ART-005',n:'Peinture vinylique blanche 25 kg',f:'Bâtiment',pv:6900,pa:5300,q:58,s:15},{r:'ART-006',n:'Carrelage 60×60 (m²)',f:'Bâtiment',pv:1650,pa:1210,q:410,s:100},
  {r:'ART-007',n:'Huile moteur 5W40 — 4 L',f:'Automobile',pv:3400,pa:2650,q:0,s:12},{r:'ART-008',n:'Lampe LED 12 W',f:'Électricité',pv:320,pa:190,q:900,s:200}],
 cli:['SARL Bâti Plus — Blida','EURL Nour Distribution — Alger','Ets Benali & Fils — Oran','SPA Atlas Industrie — Rouiba','Pharmacie El Amel — Tizi Ouzou'],
 fac:[{n:'FA-2026-0412',c:'SARL Bâti Plus — Blida',t:386750,st:'Payée',d:'24/09'},{n:'FA-2026-0413',c:'EURL Nour Distribution — Alger',t:142800,st:'En attente',d:'26/09'},{n:'FA-2026-0414',c:'Ets Benali & Fils — Oran',t:95200,st:'En retard',d:'12/09'},{n:'FA-2026-0415',c:'SPA Atlas Industrie — Rouiba',t:612400,st:'Payée',d:'28/09'}],
 dev:[{n:'DV-2026-0088',c:'Pharmacie El Amel — Tizi Ouzou',l:[['ART-008',120],['ART-004',10]],st:'Envoyé'}],
 bc:[{n:'BC-2026-0141',fr:'Sarl ElecPro Import',l:[['ART-004',60]],st:'À réceptionner'},{n:'BC-2026-0142',fr:'Eurl Papeterie Centrale',l:[['ART-002',30]],st:'À réceptionner'}],
 cai:245000,ban:1840000,mv:[['29/09','Encaissement FA-2026-0415','+',612400,'Banque'],['28/09','Achat fournitures','-',18500,'Caisse'],['24/09','Encaissement FA-2026-0412','+',386750,'Banque']],
 emp:[{n:'Amine K.',p:'Commercial',b:62000,pr:8000},{n:'Sara M.',p:'Comptable',b:70000,pr:5000},{n:'Yacine B.',p:'Magasinier',b:48000,pr:4000},{n:'Nadia R.',p:'Assistante',b:45000,pr:3000}],
 ca:[2100000,2450000,1920000,2780000,3120000,0],seq:416,dseq:88,bseq:143,mission:{}});
const TVA=.19;
function mountSim(root,opt){opt=opt||{};
 const key=opt.persist?'sim':null;let D=key?S.get(key,null):null;if(!D||!D.art)D=SIM0();
 const save=()=>{if(key)S.set(key,D)};
 let scr=opt.start||'dash',draft=null,emp=0;
 const A=r=>D.art.find(a=>a.r===r);
 const caMonth=()=>D.fac.reduce((s,f)=>s+f.t,0);
 const stockVal=()=>D.art.reduce((s,a)=>s+a.q*a.pa,0);
 const alerts=()=>D.art.filter(a=>a.q<=a.s);
 const stBadge=st=>`<span class="bd ${st==='Payée'||st==='Réceptionné'||st==='Transformé'?'ok':st==='En retard'||st==='Rupture'?'ko':'wt'}">${st}</span>`;
 const aStat=a=>a.q===0?'Rupture':a.q<=a.s?'Alerte':'En stock';
 const mission=k=>{if(!D.mission[k]){D.mission[k]=1;save();opt.onMission&&opt.onMission(D.mission)}};
 const locked=['import','production'];
 const NAV=[['dash','Tableau de bord','M3 13h8V3H3zM13 21h8V11h-8zM3 21h8v-6H3zM13 3v6h8V3z'],['ventes','Ventes','M4 19V9M10 19V5M16 19v-7'],['stock','Stocks','M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8'],['achats','Achats','M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2'],['treso','Trésorerie','M3 6h18v12H3zM3 10h18'],['paie','Paie','M16 11a4 4 0 1 0-8 0M4 21a8 8 0 0 1 16 0'],['import','Importation','M12 3v12M7 10l5 5 5-5'],['production','Production','M3 21V10l6 4V10l6 4V6l6 4v11z']];
 function bar(){const v=D.ca.slice(0,5).concat([caMonth()]);const mx=Math.max(...v)*1.15;const mo=['Avr','Mai','Juin','Juil','Août','Sept'];
  return `<svg viewBox="0 0 360 150" class="chart" role="img" aria-label="Chiffre d'affaires sur 6 mois">${v.map((x,i)=>{const h=x/mx*118;return `<rect x="${14+i*58}" y="${126-h}" width="34" height="${h}" rx="4" fill="${i===5?'#1297d8':'#cfe3f2'}"/><text x="${31+i*58}" y="143" text-anchor="middle">${mo[i]}</text>${i===5?`<text x="${31+i*58}" y="${118-h}" text-anchor="middle" class="v">${(x/1e6).toFixed(2).replace('.',',')} M</text>`:''}`}).join('')}</svg>`}
 const V={
  dash:()=>`<div class="sh"><h4>Tableau de bord</h4><span class="note">Septembre ${SF.year} · données fictives</span></div>
   <div class="kpis"><div><small>CA du mois</small><b>${DA(caMonth())}</b></div><div><small>À encaisser</small><b>${DA(D.fac.filter(f=>f.st!=='Payée').reduce((s,f)=>s+f.t,0))}</b></div><div><small>Valeur du stock</small><b>${DA(stockVal())}</b></div><div class="${alerts().length?'al':''}"><small>Articles en alerte</small><b>${alerts().length}</b></div></div>
   <div class="g2"><div class="pn"><h5>Chiffre d'affaires</h5>${bar()}</div><div class="pn"><h5>Alertes de stock</h5>${alerts().map(a=>`<div class="row"><span>${a.n}</span>${stBadge(aStat(a))}</div>`).join('')||'<p class="note">Aucune alerte</p>'}<button class="sb ln" data-go="achats">Commander ces articles →</button></div></div>
   <div class="pn"><h5>Dernières factures</h5>${tFac(D.fac.slice(-4).reverse(),false)}</div>`,
  ventes:()=>draft?newFac():`<div class="sh"><h4>Ventes</h4><div class="rel"><button class="sb pr" data-act="new">+ Nouvelle facture</button>${opt.notes?note('Commencez ici : créez une facture','',-4).replace('class="postit ','class="postit n-new '):''}</div></div>
   <div class="pn"><h5>Devis en cours</h5>${D.dev.map((d,i)=>`<div class="row"><span><b class="mono">${d.n}</b> · ${d.c}</span><span class="rw">${stBadge(d.st)}${d.st!=='Transformé'?`<button class="sb" data-dev="${i}">Transformer en facture</button>`:''}</span></div>`).join('')}</div>
   <div class="pn"><h5>Factures</h5>${tFac(D.fac.slice().reverse(),true)}</div>`,
  stock:()=>`<div class="sh"><h4>Stocks</h4><input class="srch" id="sq" placeholder="Rechercher un article…"></div>
   <div class="pn tbl"><table><thead><tr><th>Réf.</th><th>Article</th><th>Famille</th><th class="n">Qté</th><th class="n">Seuil</th><th>État</th><th></th></tr></thead><tbody id="stb">${stRows('')}</tbody></table></div>`,
  achats:()=>`<div class="sh"><h4>Achats</h4><div class="rel"><button class="sb pr" data-act="auto">Commander les articles en alerte</button></div></div>
   <div class="pn"><h5>Commandes fournisseurs</h5>${D.bc.slice().reverse().map(b=>{const i=D.bc.indexOf(b);const t=b.l.reduce((s,l)=>s+A(l[0]).pa*l[1],0);return `<div class="row"><span><b class="mono">${b.n}</b> · ${b.fr}<br><small class="note">${b.l.map(l=>A(l[0]).n+' × '+l[1]).join(', ')} · ${DA(t)} HT</small></span><span class="rw">${stBadge(b.st)}${b.st==='À réceptionner'?`<button class="sb" data-rec="${i}">Réceptionner</button>`:''}</span></div>`}).join('')}</div>`,
  treso:()=>`<div class="sh"><h4>Trésorerie</h4></div><div class="kpis k2"><div><small>Caisse</small><b>${DA(D.cai)}</b></div><div><small>Banque</small><b>${DA(D.ban)}</b></div><div><small>Total disponible</small><b>${DA(D.cai+D.ban)}</b></div></div>
   <div class="pn"><h5>Derniers mouvements</h5>${D.mv.slice(0,8).map(m=>`<div class="row"><span><span class="mono note">${m[0]}</span> ${m[1]} <small class="note">· ${m[4]}</small></span><b class="${m[2]==='+'?'pos':'neg'}">${m[2]}${DA(m[3])}</b></div>`).join('')}</div>`,
  paie:()=>{const e=D.emp[emp];const br=e.b+e.pr,cn=br*.09;mission('paie');return `<div class="sh"><h4>Paie</h4><span class="note">Bulletin de septembre ${SF.year}</span></div>
   <div class="g2 g2b"><div class="pn">${D.emp.map((x,i)=>`<button class="emp${i===emp?' on':''}" data-emp="${i}"><b>${x.n}</b><small>${x.p}</small></button>`).join('')}</div>
   <div class="pn bul"><h5>Bulletin — ${e.n}</h5><div class="row"><span>Salaire de base</span><b>${DA(e.b)}</b></div><div class="row"><span>Primes</span><b>${DA(e.pr)}</b></div><div class="row"><span>Salaire brut</span><b>${DA(br)}</b></div><div class="row"><span>Retenue sécurité sociale (9 %)</span><b class="neg">−${DA(cn)}</b></div><div class="row"><span>Brut imposable</span><b>${DA(br-cn)}</b></div><div class="row"><span>IRG</span><span class="note">calculé selon le barème en vigueur</span></div>
   <p class="note" style="margin-top:8px">Simulation illustrative : les rubriques sont paramétrées avec vous lors de l'installation.</p><button class="sb pr" data-act="bul">Éditer le bulletin</button></div></div>`},
  lock:m=>{const md=modById(m);return `<div class="lockv"><span class="mi" style="--c:${md.c};width:56px;height:56px">${ic(md.ic,28)}</span><h4>Module ${md.n}</h4><p>${md.s}</p><p class="note">Inclus dans l'offre Entreprise, ou en option sur les autres offres.</p><div class="acts" style="justify-content:center"><a class="sb pr" href="module.html?m=${m}">Voir la fiche du module</a><a class="sb" href="tarifs.html">Voir les tarifs</a></div></div>`}};
 function tFac(l,act){return `<div class="tbl"><table><thead><tr><th>N°</th><th>Client</th><th>Date</th><th class="n">TTC</th><th>Statut</th>${act?'<th></th>':''}</tr></thead><tbody>${l.map(f=>{const i=D.fac.indexOf(f);return `<tr><td class="mono">${f.n}</td><td>${f.c}</td><td class="mono">${f.d}</td><td class="n">${DA(f.t)}</td><td>${stBadge(f.st)}</td>${act?`<td class="n">${f.st!=='Payée'?`<button class="sb" data-pay="${i}">Encaisser</button>`:''}<button class="sb ln" data-pv="${i}">Aperçu</button></td>`:''}</tr>`}).join('')}</tbody></table></div>`}
 function stRows(q){return D.art.filter(a=>(a.n+a.r+a.f).toLowerCase().includes(q.toLowerCase())).map(a=>{const i=D.art.indexOf(a);return `<tr><td class="mono">${a.r}</td><td>${a.n}</td><td>${a.f}</td><td class="n"><b>${a.q}</b></td><td class="n">${a.s}</td><td>${stBadge(aStat(a))}</td><td class="n"><button class="sb" data-in="${i}">+10 entrée</button></td></tr>`}).join('')}
 function totals(){const ht=draft.l.reduce((s,l)=>{const a=A(l.r);return s+a.pv*l.q*(1-l.rm/100)},0);return {ht,tva:ht*TVA,ttc:ht*(1+TVA)}}
 function newFac(){const t=totals();return `<div class="sh"><h4>Nouvelle facture <span class="mono note">FA-${SF.year}-0${D.seq}</span></h4><button class="sb ln" data-act="cancel">Annuler</button></div>
  <div class="pn"><label class="sl">Client<select id="fcl">${D.cli.map(c=>`<option${c===draft.c?' selected':''}>${c}</option>`).join('')}</select></label>
  <div class="tbl"><table class="fl"><thead><tr><th>Article</th><th class="n">Qté</th><th class="n">Remise %</th><th class="n">P.U. HT</th><th class="n">Total HT</th><th></th></tr></thead><tbody>${draft.l.map((l,i)=>{const a=A(l.r);return `<tr><td><select data-lr="${i}">${D.art.map(x=>`<option value="${x.r}"${x.r===l.r?' selected':''}${x.q===0?' disabled':''}>${x.n}${x.q===0?' (rupture)':''}</option>`).join('')}</select><small class="note"> dispo : ${a.q}</small></td><td class="n"><input type="number" min="1" max="${a.q}" value="${l.q}" data-lq="${i}"></td><td class="n"><input type="number" min="0" max="50" value="${l.rm}" data-lm="${i}"></td><td class="n mono">${DA(a.pv)}</td><td class="n mono">${DA(a.pv*l.q*(1-l.rm/100))}</td><td class="n"><button class="sb ln" data-del="${i}" aria-label="Supprimer">✕</button></td></tr>`}).join('')}</tbody></table></div>
  <button class="sb" data-act="line">+ Ajouter une ligne</button>
  <div class="tot"><div><span>Total HT</span><b>${DA(t.ht)}</b></div><div><span>TVA 19 %</span><b>${DA(t.tva)}</b></div><div class="big"><span>Total TTC</span><b>${DA(t.ttc)}</b></div></div>
  <div class="rel" style="text-align:right"><button class="sb pr" data-act="val">Valider la facture</button>${opt.notes?note('Puis validez : le stock se met à jour tout seul','bl',3).replace('class="postit ','class="postit n-val '):''}</div></div>`}
 function preview(i){const f=D.fac[i];const l=f.l||[];const m=document.createElement('div');m.className='simod';m.innerHTML=`<div class="doc"><div class="dh"><div><b style="font-size:18px">VOTRE SOCIÉTÉ SARL</b><br><small>Adresse · NIF · RC · Tél. — (vos informations)</small></div><div style="text-align:right"><b style="font-size:20px">FACTURE</b><br><span class="mono">${f.n}</span><br><small>Date : ${f.d}/${SF.year}</small></div></div>
  <p style="margin:14px 0"><small>Client</small><br><b>${f.c}</b></p><table><thead><tr><th>Désignation</th><th class="n">Qté</th><th class="n">P.U. HT</th><th class="n">Total HT</th></tr></thead><tbody>${l.length?l.map(x=>`<tr><td>${A(x.r).n}${x.rm?` <small>(−${x.rm} %)</small>`:''}</td><td class="n">${x.q}</td><td class="n">${DA(A(x.r).pv)}</td><td class="n">${DA(A(x.r).pv*x.q*(1-x.rm/100))}</td></tr>`).join(''):`<tr><td colspan="4"><small>Détail des lignes (facture d'exemple)</small></td></tr>`}</tbody></table>
  <div class="tot"><div><span>Total HT</span><b>${DA(f.t/(1+TVA))}</b></div><div><span>TVA 19 %</span><b>${DA(f.t-f.t/(1+TVA))}</b></div><div class="big"><span>Net à payer TTC</span><b>${DA(f.t)}</b></div></div>
  <p class="note" style="margin-top:14px">Document généré par ${GC} — modèle personnalisable avec votre logo.</p><div class="acts" style="margin-top:14px"><button class="sb pr" onclick="window.print()">Imprimer / PDF</button><button class="sb" data-close>Fermer</button></div></div>`;
  document.body.appendChild(m);m.onclick=e=>{if(e.target===m||e.target.hasAttribute('data-close'))m.remove()}}
 function draw(){const lk=locked.includes(scr);
  root.innerHTML=`<div class="sim${opt.compact?' cmp':''}"><div class="stb"><span class="dots"><i></i><i></i><i></i></span><span class="stt">${GC} <span class="mono">${SF.version}</span> — Dossier : Votre Société SARL</span><span class="usr">Admin</span></div>
  <div class="sbody"><aside class="snav">${NAV.map(n=>`<button data-go="${n[0]}" class="${scr===n[0]?'on':''}${locked.includes(n[0])?' lk':''}">${ic(n[2],17)}<span>${n[1]}</span>${locked.includes(n[0])?'<em>Entreprise</em>':''}${n[0]==='stock'&&alerts().length?`<em class="al">${alerts().length}</em>`:''}</button>`).join('')}</aside>
  <div class="smain">${lk?V.lock(scr):V[scr]()}</div></div></div>`;bind()}
 function bind(){const q=s=>root.querySelectorAll(s);
  q('[data-go]').forEach(b=>b.onclick=()=>{scr=b.dataset.go;draft=null;draw()});
  q('[data-act]').forEach(b=>b.onclick=()=>{const a=b.dataset.act;
   if(a==='new'){draft={c:D.cli[0],l:[{r:'ART-001',q:10,rm:0}]};draw()}
   if(a==='cancel'){draft=null;draw()}
   if(a==='line'){const f=D.art.find(x=>x.q>0&&!draft.l.some(l=>l.r===x.r));draft.l.push({r:(f||D.art[0]).r,q:1,rm:0});draw()}
   if(a==='val'){if(!draft.l.length)return;for(const l of draft.l){if(l.q>A(l.r).q){toast('Stock insuffisant pour '+A(l.r).n);return}}const t=totals();draft.l.forEach(l=>A(l.r).q-=l.q);const n=`FA-${SF.year}-0${D.seq++}`;D.fac.push({n,c:draft.c,t:Math.round(t.ttc),st:'En attente',d:'30/09',l:draft.l});draft=null;save();mission('facture');draw();toast(`<b>Facture ${n} créée</b><br>Stock mis à jour automatiquement.`)}
   if(a==='auto'){const al=alerts();if(!al.length){toast('Aucun article en alerte.');return}D.bc.push({n:`BC-${SF.year}-0${D.bseq++}`,fr:'Fournisseur habituel',l:al.map(x=>[x.r,Math.max(x.s*2-x.q,x.s)]),st:'À réceptionner'});save();draw();toast('<b>Commande fournisseur créée</b><br>Quantités calculées depuis les seuils.')}
   if(a==='bul'){toast('<b>Bulletin édité</b><br>Prêt à imprimer (démo).')}});
  q('[data-dev]').forEach(b=>b.onclick=()=>{const d=D.dev[+b.dataset.dev];const l=d.l.map(x=>({r:x[0],q:Math.min(x[1],A(x[0]).q),rm:0}));const ht=l.reduce((s,x)=>s+A(x.r).pv*x.q,0);l.forEach(x=>A(x.r).q-=x.q);const n=`FA-${SF.year}-0${D.seq++}`;D.fac.push({n,c:d.c,t:Math.round(ht*(1+TVA)),st:'En attente',d:'30/09',l});d.st='Transformé';save();mission('facture');draw();toast(`<b>Devis transformé en ${n}</b><br>Sans aucune ressaisie.`)});
  q('[data-pay]').forEach(b=>b.onclick=()=>{const f=D.fac[+b.dataset.pay];f.st='Payée';D.ban+=f.t;D.mv.unshift(['30/09','Encaissement '+f.n,'+',f.t,'Banque']);save();mission('encaisse');draw();toast(`<b>${f.n} encaissée</b><br>La trésorerie est à jour.`)});
  q('[data-pv]').forEach(b=>b.onclick=()=>preview(+b.dataset.pv));
  q('[data-rec]').forEach(b=>b.onclick=()=>{const bc=D.bc[+b.dataset.rec];bc.l.forEach(l=>A(l[0]).q+=l[1]);bc.st='Réceptionné';const t=bc.l.reduce((s,l)=>s+A(l[0]).pa*l[1],0);D.ban-=t*(1+TVA);D.mv.unshift(['30/09','Règlement '+bc.n,'-',Math.round(t*(1+TVA)),'Banque']);save();mission('reception');draw();toast(`<b>${bc.n} réceptionnée</b><br>Stock et trésorerie mis à jour.`)});
  q('[data-in]').forEach(b=>b.onclick=()=>{D.art[+b.dataset.in].q+=10;save();const sq=root.querySelector('#sq');document.getElementById('stb').innerHTML=stRows(sq?sq.value:'');bindIn()});
  const sq=root.querySelector('#sq');if(sq)sq.oninput=()=>{document.getElementById('stb').innerHTML=stRows(sq.value);bindIn()};
  q('[data-emp]').forEach(b=>b.onclick=()=>{emp=+b.dataset.emp;draw()});
  q('#fcl').forEach(s=>s.onchange=()=>draft.c=s.value);
  q('[data-lr]').forEach(s=>s.onchange=()=>{const l=draft.l[+s.dataset.lr];l.r=s.value;l.q=Math.min(l.q,A(l.r).q)||1;draw()});
  q('[data-lq]').forEach(s=>s.onchange=()=>{const l=draft.l[+s.dataset.lq];l.q=Math.max(1,Math.min(+s.value||1,A(l.r).q));draw()});
  q('[data-lm]').forEach(s=>s.onchange=()=>{draft.l[+s.dataset.lm].rm=Math.max(0,Math.min(50,+s.value||0));draw()});
  q('[data-del]').forEach(s=>s.onclick=()=>{draft.l.splice(+s.dataset.del,1);draw()});
 }
 function bindIn(){root.querySelectorAll('[data-in]').forEach(b=>b.onclick=()=>{D.art[+b.dataset.in].q+=10;save();const sq=root.querySelector('#sq');document.getElementById('stb').innerHTML=stRows(sq?sq.value:'');bindIn()})}
 draw();
 return {go:s=>{scr=s;draft=null;draw()},reset:()=>{D=SIM0();save();scr='dash';draft=null;draw();opt.onMission&&opt.onMission(D.mission)},mission:()=>D.mission};
}
