const SF={name:'SOFTEL Solutions',full:'SOFTEL — Software & Telecommunication',slogan:'Votre partenaire de succès',addr:'Cité Lido, Mohammadia, Alger',map:'https://www.google.com/maps/search/?api=1&query=Cit%C3%A9+Lido+Mohammadia+Alger',
 fixe:'021 20 57 46',fixeTel:'tel:021205746',mob:'0798 75 73 80',mobTel:'tel:0798757380',wa1:'0558 92 53 55',wa2:'0655 54 07 47',wa:'https://wa.me/213655540747',email:'info@softel.dz',web:'www.softel.dz',social:'softel_solution',version:'V5.3.2',year:2026};
const MODULES=[
 {id:'ventes',n:'Ventes',ic:'M4 19V9M10 19V5M16 19v-7M22 19H2',c:'#1297d8',
  s:'Devis, commandes, bons de livraison et factures, en quelques clics.',
  d:'Le module Ventes suit tout le cycle commercial : du devis au règlement, en passant par la commande et le bon de livraison. Chaque document se transforme en un clic dans le suivant, sans ressaisie.',
  f:['Devis, bons de commande, bons de livraison, factures et avoirs','Transformation d\'un document en un autre en un clic','Remises par ligne, par client ou par famille d\'articles','Suivi des règlements et des impayés clients','Historique complet par client et par article','Impression et export PDF / Excel des documents'],
  k:[['Du devis à la facture','1 clic'],['Documents gérés','6 types'],['Ressaisie','zéro']]},
 {id:'achats',n:'Achats',ic:'M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2',c:'#0a4c8c',
  s:'Commandes fournisseurs, réceptions et factures d\'achat.',
  d:'Le module Achats centralise vos fournisseurs, vos commandes et vos réceptions. Les quantités reçues alimentent automatiquement le stock et les factures fournisseurs la trésorerie.',
  f:['Bons de commande fournisseurs','Réception totale ou partielle des marchandises','Factures et avoirs fournisseurs','Suivi des dettes et des échéances fournisseurs','Comparaison des prix d\'achat par fournisseur','Mise à jour automatique du stock à la réception'],
  k:[['Réception','partielle ou totale'],['Stock','mis à jour'],['Échéances','suivies']]},
 {id:'stock',n:'Stocks',ic:'M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8',c:'#0f7a6b',
  s:'Articles, dépôts, mouvements, inventaires et alertes de rupture.',
  d:'Le module Stocks donne une image fidèle de vos quantités, dépôt par dépôt. Les seuils d\'alerte vous préviennent avant la rupture et les inventaires se font sans arrêter l\'activité.',
  f:['Fiches articles avec familles, codes-barres et unités','Multi-dépôts et transferts entre dépôts','Entrées, sorties et mouvements tracés','Seuils d\'alerte et liste des ruptures','Inventaire et régularisation des écarts','Valorisation du stock'],
  k:[['Dépôts','multiples'],['Alertes','de rupture'],['Inventaire','sans arrêt']]},
 {id:'tresorerie',n:'Trésorerie',ic:'M3 6h18v12H3zM3 10h18M7 15h3',c:'#6b3fd1',
  s:'Caisses, banques, encaissements et décaissements.',
  d:'Le module Trésorerie suit en temps réel vos caisses et vos comptes bancaires. Les règlements clients et fournisseurs y remontent automatiquement pour un solde toujours à jour.',
  f:['Caisses et comptes bancaires multiples','Encaissements et décaissements','Règlements par espèces, chèque ou virement','Échéanciers clients et fournisseurs','Rapprochement des mouvements','Situation de trésorerie à date'],
  k:[['Solde','en temps réel'],['Comptes','multiples'],['Échéancier','intégré']]},
 {id:'import',n:'Importation',ic:'M12 3v12M7 10l5 5 5-5M4 21h16',c:'#c2410c',
  s:'Dossiers d\'importation et calcul du prix de revient.',
  d:'Le module Importation suit chaque dossier d\'import et répartit les frais (transport, douane, transit) sur les articles pour obtenir un prix de revient exact.',
  f:['Dossiers d\'importation par arrivage','Frais d\'approche : transport, douane, transit','Répartition des frais sur les articles','Calcul du prix de revient','Suivi des devises et des taux de change','Intégration au stock à l\'arrivée'],
  k:[['Prix de revient','exact'],['Frais','répartis'],['Devises','suivies']]},
 {id:'production',n:'Production',ic:'M3 21V10l6 4V10l6 4V6l6 4v11z',c:'#b45309',
  s:'Nomenclatures, ordres de fabrication et consommation des matières.',
  d:'Le module Production gère vos nomenclatures et vos ordres de fabrication. Les matières premières consommées et les produits finis fabriqués sont répercutés sur le stock.',
  f:['Nomenclatures (recettes) des produits finis','Ordres de fabrication','Consommation automatique des matières premières','Entrée en stock des produits finis','Coût de production','Suivi des lancements'],
  k:[['Nomenclatures','illimitées'],['Matières','déstockées'],['Coût','de production']]},
 {id:'paie',n:'Paie',ic:'M16 11a4 4 0 1 0-8 0M4 21a8 8 0 0 1 16 0',c:'#be123c',
  s:'Salariés, bulletins de paie et états récapitulatifs.',
  d:'Le module Paie gère les dossiers des salariés et l\'édition des bulletins. Les rubriques sont paramétrables pour s\'adapter à votre convention et à la réglementation en vigueur.',
  f:['Dossiers des salariés','Rubriques de paie paramétrables','Bulletins de paie mensuels','Cotisations et retenues selon la réglementation','États récapitulatifs et livre de paie','Historique par salarié'],
  k:[['Bulletins','en série'],['Rubriques','paramétrables'],['États','récapitulatifs']]}
];
const FEATURES=[
 ['Interface simple et ergonomique','Personnalisable, très facile à prendre en main.'],
 ['Filtres de recherche','Très riche en filtres pour retrouver n\'importe quelle donnée.'],
 ['Import / export','Importez et exportez vos données facilement.'],
 ['Multi-fenêtres','Basculez facilement entre les fenêtres ouvertes.'],
 ['Multi-dossiers, multi-postes','Plusieurs sociétés et plusieurs utilisateurs en même temps.'],
 ['Windows','Fonctionne sur toutes les versions de Windows.'],
 ['Paramétrable','S\'adapte à vos besoins et à votre métier.'],
 ['Sécurité','Droits par utilisateur et protection des données.']];
const BENEFITS=['Fiabilité et pérennité de l\'information','Visibilité sur la situation de l\'entreprise','Suivi du processus commercial','Organisation des données','Gain de temps','Génération des rapports','Sécurité des données et des informations'];
// Prix indicatifs pour la maquette (à remplacer par la grille SOFTEL)
const PLANS=[
 {id:'essentiel',n:'Essentiel',for:'Commerces et TPE',lic:45000,ab:18000,postes:1,mods:['ventes','achats','stock'],hl:false},
 {id:'pro',n:'Pro',for:'PME qui veulent tout piloter',lic:95000,ab:36000,postes:3,mods:['ventes','achats','stock','tresorerie'],hl:true},
 {id:'entreprise',n:'Entreprise',for:'PMI, importateurs, industriels',lic:180000,ab:65000,postes:10,mods:['ventes','achats','stock','tresorerie','import','production','paie'],hl:false}];
const ADDON={poste:{lic:12000,ab:5000},module:{lic:25000,ab:9000},install:20000,formation:15000};
const SECTORS=['Distribution et négoce','Commerce de détail','Import-export','Industrie et production','Pièces détachées','Matériaux de construction','Pharmacie et parapharmacie','Services'];
const modById=id=>MODULES.find(m=>m.id===id);
