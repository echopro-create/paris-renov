import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const publicDir = path.resolve(root, 'public');
const baseUrl = 'https://da-bat.com';

const contact = {
  phone: '06 01 99 76 59',
  phoneHref: 'tel:0601997659',
  email: 'tchoudinov@hotmail.fr',
  hours: 'Lun - Ven : 8h00 - 19h00',
  area: 'Paris et petite couronne',
};

const allPages = [
  {
    slug: 'entreprise-renovation-paris',
    keyword: 'entreprise renovation paris',
    h1: 'Entreprise de renovation a Paris',
    title: 'Entreprise de renovation a Paris | D.A. BAT',
    description: 'D.A. BAT, entreprise de renovation a Paris. Travaux tous corps d etat, devis gratuit, accompagnement complet pour appartements anciens et biens parisiens.',
    intro: 'D.A. BAT intervient comme entreprise de renovation a Paris pour piloter vos travaux du diagnostic initial jusqu a la livraison. Nous coordonnons peinture, plomberie, electricite, maconnerie, sols et finitions avec un interlocuteur unique.',
    sections: [
      {
        title: 'Pourquoi choisir une entreprise de renovation a Paris',
        body: [
          'A Paris, les chantiers demandent une vraie maitrise des contraintes techniques: immeubles anciens, coproprietes, acces limites, reseaux a reprendre et finitions exigeantes. Une entreprise generale vous fait gagner du temps et limite les erreurs de coordination.',
          'Nous travaillons sur des appartements anciens, des biens haussmanniens, des studios a optimiser et des logements familiaux a restructurer. Chaque projet commence par une visite technique et un devis detaille.'
        ],
        bullets: [
          'Interlocuteur unique pour l ensemble du chantier',
          'Planification claire et suivi regulier',
          'Respect des normes et garantie decennale',
          'Finitions soignees adaptees au standing parisien'
        ]
      },
      {
        title: 'Nos travaux les plus demandes',
        body: [
          'Nous realisons des renovations completes ou partielles selon votre budget et vos objectifs de valorisation. Les demandes les plus frequentes concernent la remise a neuf d appartements, la renovation de salles de bain, la peinture complete, la mise aux normes electriques et la reprise des sols.'
        ],
        bullets: [
          'Renovation complete d appartement',
          'Salle de bain et cuisine',
          'Peinture et decoration',
          'Parquet, carrelage et boiseries'
        ]
      }
    ],
    faq: [
      ['Quel est le delai pour recevoir un devis ?', 'Nous envoyons en general un devis detaille sous 48 a 72 heures apres la visite technique.'],
      ['Intervenez-vous dans tout Paris ?', 'Oui, nous intervenons dans Paris intramuros et dans plusieurs communes de la petite couronne selon le projet.'],
      ['Pouvez-vous gerer plusieurs corps de metier ?', 'Oui, c est notre coeur de metier. Nous coordonnons l ensemble des intervenants pour simplifier le chantier.']
    ],
    related: ['renovation-appartement-paris', 'travaux-renovation-paris', 'renovation-cle-en-main-paris', 'entreprise-generale-batiment-paris']
  },
  {
    slug: 'renovation-appartement-paris',
    keyword: 'renovation appartement paris',
    h1: 'Renovation d appartement a Paris',
    title: 'Renovation d appartement a Paris | D.A. BAT',
    description: 'Renovation d appartement a Paris par D.A. BAT. Appartement ancien, haussmannien ou investissement locatif. Devis gratuit et suivi complet.',
    intro: 'Nous renovons des appartements a Paris avec une approche technique et esthetique adaptee aux biens anciens comme aux logements plus recents. L objectif est simple: ameliorer le confort, la fonctionnalite et la valeur du bien.',
    sections: [
      {
        title: 'Une renovation adaptee aux appartements parisiens',
        body: [
          'Les appartements parisiens ont souvent des specificites fortes: distributions anciennes, reseaux vieillissants, contraintes acoustiques ou copropriete exigeante. Nous adaptons les travaux au contexte reel du bien et a votre mode de vie.',
          'Nous pouvons intervenir sur un rafraichissement global, une renovation complete ou une restructuration avec redistribution des pieces.'
        ],
        bullets: [
          'Studios, deux-pieces, appartements familiaux',
          'Biens anciens et haussmanniens',
          'Restructuration des volumes',
          'Travaux coordonnes de A a Z'
        ]
      },
      {
        title: 'Ce que nous prenons en charge',
        body: [
          'Nous intervenons sur les postes essentiels d une renovation d appartement: demolition legere, preparation des supports, plomberie, electricite, peinture, sols et menuiseries. Nous portons une attention particuliere a la qualite des finitions.'
        ],
        bullets: [
          'Peinture murs et plafonds',
          'Salle de bain et cuisine',
          'Mise aux normes electriques',
          'Parquet, carrelage et plinthes'
        ]
      }
    ],
    faq: [
      ['Renovez-vous les appartements occupes ?', 'Oui, selon l ampleur des travaux nous pouvons organiser un phasage compatible avec une occupation partielle.'],
      ['Travaillez-vous sur des appartements anciens ?', 'Oui, c est meme une part importante de nos chantiers a Paris.'],
      ['Pouvez-vous moderniser sans denaturer le charme ?', 'Oui, nous cherchons a conserver les elements de caractere tout en apportant confort et fonctionnalite.']
    ],
    related: ['renovation-haussmannien-paris', 'prix-renovation-appartement-paris', 'renovation-salle-de-bain-paris', 'pose-parquet-paris']
  },
  {
    slug: 'travaux-renovation-paris',
    keyword: 'travaux renovation paris',
    h1: 'Travaux de renovation a Paris',
    title: 'Travaux de renovation a Paris | D.A. BAT',
    description: 'Travaux de renovation a Paris pour appartement, maison, bureau et commerce. D.A. BAT coordonne vos travaux avec devis gratuit et finitions soignées.',
    intro: 'Pour vos travaux de renovation a Paris, nous intervenons sur les postes techniques et decoratifs avec une organisation claire, des delais annonces et un suivi rigoureux du chantier.',
    sections: [
      {
        title: 'Des travaux encadres du debut a la fin',
        body: [
          'Un chantier reussi repose sur une preparation serieuse. Nous analysons les besoins, identifions les contraintes techniques, definissons les materiaux et planifions les interventions pour limiter les imprevus.',
          'Cette methode permet d avancer sereinement, meme dans des immeubles avec acces delicats, voisins proches et reglement de copropriete strict.'
        ],
        bullets: [
          'Visite et diagnostic technique',
          'Devis poste par poste',
          'Planning d intervention',
          'Reception avec controle des finitions'
        ]
      },
      {
        title: 'Types de travaux realises',
        body: [
          'Nous assurons aussi bien des travaux ponctuels que des renovations plus lourdes. Le perimetre est adapte a votre priorite: mise en location, residence principale, valorisation a la revente ou remise au propre apres acquisition.'
        ],
        bullets: [
          'Reprise complete des peintures',
          'Creation de cloisons et redistribution',
          'Renovation de salle d eau et cuisine',
          'Sols, boiseries et electricite'
        ]
      }
    ],
    faq: [
      ['Quels types de biens renovez-vous ?', 'Nous intervenons sur appartements, maisons, bureaux et certains commerces selon la nature du chantier.'],
      ['Les travaux sont-ils assures ?', 'Oui, nos interventions sont couvertes et nos ouvrages relevent de la garantie decennale quand elle s applique.'],
      ['Pouvez-vous intervenir rapidement ?', 'Oui, pour certains travaux cibles nous pouvons demarrer rapidement apres validation du devis.']
    ],
    related: ['entreprise-renovation-paris', 'renovation-cle-en-main-paris', 'devis-renovation-paris', 'renovation-cuisine-paris']
  },
  {
    slug: 'renovation-cle-en-main-paris',
    keyword: 'renovation cle en main paris',
    h1: 'Renovation cle en main a Paris',
    title: 'Renovation cle en main a Paris | D.A. BAT',
    description: 'Renovation cle en main a Paris avec D.A. BAT. Un seul interlocuteur, coordination complete, devis clair et livraison soignee.',
    intro: 'La renovation cle en main permet de centraliser le projet chez un meme interlocuteur. Nous organisons le chantier, coordonnons les corps d etat et assurons la coherence technique comme esthetique de l ensemble.',
    sections: [
      {
        title: 'Le principe du cle en main',
        body: [
          'Vous evitez de gerer plusieurs entreprises, plusieurs plannings et plusieurs niveaux de responsabilite. Nous prenons en charge le chantier dans sa globalite avec une vision d ensemble.',
          'Cette approche est particulierement pertinente pour les biens achetes a renover, les residences principales et les appartements destines a la location.'
        ],
        bullets: [
          'Un seul interlocuteur',
          'Coordination de tous les postes',
          'Budget et planning clarifies',
          'Livraison plus fluide'
        ]
      },
      {
        title: 'Pour quels projets',
        body: [
          'Nous proposons des renovations cle en main pour appartements anciens, logements haussmanniens, studios a optimiser, cuisines a refaire et salles de bain a repenser completement.'
        ],
        bullets: [
          'Acquisition avec travaux',
          'Residence principale a moderniser',
          'Bien locatif a remettre au propre',
          'Appartement ancien a valoriser'
        ]
      }
    ],
    faq: [
      ['Qu est-ce qui est compris dans une renovation cle en main ?', 'Le diagnostic, le devis, la coordination, l execution des travaux et la livraison du chantier.'],
      ['Puis-je choisir les materiaux ?', 'Oui, bien sur. Nous vous guidons dans les choix, mais la decision finale vous revient.'],
      ['Le cle en main coute-t-il plus cher ?', 'Pas necessairement. Il permet souvent de mieux maitriser les erreurs, les retards et les oublis.']
    ],
    related: ['entreprise-renovation-paris', 'tous-corps-detat-paris', 'devis-renovation-paris', 'prix-renovation-appartement-paris']
  },
  {
    slug: 'tous-corps-detat-paris',
    keyword: 'renovation tous corps d etat paris',
    h1: 'Renovation tous corps d etat a Paris',
    title: 'Renovation tous corps d etat a Paris | D.A. BAT',
    description: 'Entreprise tous corps d etat a Paris pour vos travaux de renovation. Peinture, plomberie, electricite, maconnerie, sols et finitions.',
    intro: 'Notre approche tous corps d etat permet de traiter un chantier dans sa globalite, sans fragmentation entre plusieurs prestataires. C est le meilleur moyen de garder de la coherence et de la maitrise sur un chantier de renovation a Paris.',
    sections: [
      {
        title: 'Une coordination essentielle sur les chantiers parisiens',
        body: [
          'Dans les appartements parisiens, les interventions se croisent en permanence: passage des reseaux, reprises de murs, preparation des supports, pose des sols, plomberie et electricite. Sans coordination, les retards et les reprises se multiplient.',
          'Nous organisons les interventions dans le bon ordre pour proteger les ouvrages deja realises et garantir un resultat propre.'
        ],
        bullets: [
          'Peinture et decoration',
          'Plomberie et sanitaires',
          'Electricite et mise aux normes',
          'Maconnerie, cloisons et sols'
        ]
      },
      {
        title: 'Les avantages pour votre projet',
        body: [
          'Le tous corps d etat convient particulierement aux projets ou plusieurs lots doivent avancer ensemble. Vous gagnez en lisibilite, en efficacite et en qualite finale.'
        ],
        bullets: [
          'Moins d interfaces a gerer',
          'Responsabilites plus claires',
          'Meilleure lecture du planning',
          'Finitions harmonisees'
        ]
      }
    ],
    faq: [
      ['Que signifie tous corps d etat ?', 'Cela signifie que plusieurs metiers du batiment sont coordonnes dans un meme projet de renovation.'],
      ['Pouvez-vous intervenir sur un lot unique ?', 'Oui, nous realisons aussi des travaux cibles, mais notre force est la coordination multi lots.'],
      ['Est-ce adapte a une renovation complete ?', 'Oui, c est meme l un des cas les plus pertinents.']
    ],
    related: ['renovation-cle-en-main-paris', 'entreprise-generale-batiment-paris', 'travaux-renovation-paris', 'platrerie-cloison-paris']
  },
  {
    slug: 'entreprise-generale-batiment-paris',
    keyword: 'entreprise generale batiment paris',
    h1: 'Entreprise generale du batiment a Paris',
    title: 'Entreprise generale du batiment a Paris | D.A. BAT',
    description: 'Entreprise generale du batiment a Paris pour renovation interieure, appartement ancien, salle de bain, cuisine et finitions haut de gamme.',
    intro: 'D.A. BAT intervient comme entreprise generale du batiment a Paris pour structurer et executer vos projets de renovation interieure avec une exigence elevee sur la technique et les finitions.',
    sections: [
      {
        title: 'Le role d une entreprise generale',
        body: [
          'Une entreprise generale ne se limite pas a realiser des travaux. Elle organise le chantier, arbitre les contraintes techniques, assure la bonne sequence des interventions et veille a la qualite globale.',
          'C est particulierement utile lorsque le projet implique plusieurs metiers et demande un niveau de finition regulier sur l ensemble du bien.'
        ],
        bullets: [
          'Pilotage technique du chantier',
          'Coordination des intervenants',
          'Controle du rendu final',
          'Communication plus simple pour le client'
        ]
      },
      {
        title: 'Nos domaines d intervention',
        body: [
          'Nous travaillons principalement sur la renovation d appartements a Paris et en petite couronne, avec une specialite sur les biens anciens, les salles de bain, cuisines, peintures, sols et reprises de reseaux.'
        ],
        bullets: [
          'Appartement ancien et haussmannien',
          'Renovation complete ou partielle',
          'Cuisine et salle de bain',
          'Finitions premium'
        ]
      }
    ],
    faq: [
      ['Quelle difference avec un artisan seul ?', 'Une entreprise generale coordonne plusieurs metiers et porte une vision globale du chantier.'],
      ['Pouvez-vous prendre un chantier apres achat immobilier ?', 'Oui, c est un cas frequent sur Paris.'],
      ['Travaillez-vous en petite couronne ?', 'Oui, selon le projet nous intervenons aussi a Neuilly, Boulogne et communes proches.']
    ],
    related: ['entreprise-renovation-paris', 'tous-corps-detat-paris', 'renovation-neuilly-sur-seine', 'renovation-boulogne-billancourt']
  },
  {
    slug: 'renovation-salle-de-bain-paris',
    keyword: 'renovation salle de bain paris',
    h1: 'Renovation de salle de bain a Paris',
    title: 'Renovation de salle de bain a Paris | D.A. BAT',
    description: 'Renovation de salle de bain a Paris: plomberie, carrelage, douche italienne, meuble vasque et finitions soignées. Devis gratuit.',
    intro: 'Nous renovons des salles de bain a Paris avec une attention particuliere a la plomberie, a l etancheite, au confort quotidien et a la qualite du rendu final.',
    sections: [
      {
        title: 'Une salle de bain fonctionnelle et durable',
        body: [
          'Dans une salle de bain, les erreurs techniques coutent cher. Nous priorisons la preparation, l etancheite, la qualite des reseaux et la bonne pose des revetements avant la partie esthetique.',
          'Nous concevons egalement les implantations pour optimiser l espace, notamment dans les petites surfaces parisiennes.'
        ],
        bullets: [
          'Douche italienne ou baignoire',
          'Carrelage murs et sols',
          'Plomberie et evacuation',
          'Meuble vasque et rangements'
        ]
      },
      {
        title: 'Pour quels profils de projet',
        body: [
          'Nous intervenons sur salles d eau compactes, salles de bain familiales, remises au propre avant location ou transformations completes apres achat d appartement.'
        ],
        bullets: [
          'Petites surfaces a optimiser',
          'Renovation complete',
          'Mise au gout du jour',
          'Reprise technique de plomberie'
        ]
      }
    ],
    faq: [
      ['Combien de temps dure une renovation de salle de bain ?', 'La duree depend du perimetre, mais beaucoup de projets se situent entre une et trois semaines.'],
      ['Pouvez-vous creer une douche italienne ?', 'Oui, selon la configuration technique du logement.'],
      ['Intervenez-vous uniquement a Paris ?', 'Nous intervenons aussi en petite couronne selon le projet.']
    ],
    related: ['plomberie-renovation-paris', 'electricite-renovation-paris', 'renovation-appartement-paris', 'renovation-cuisine-paris']
  },
  {
    slug: 'peintre-paris',
    keyword: 'peintre paris',
    h1: 'Entreprise de peinture a Paris',
    title: 'Entreprise de peinture a Paris | D.A. BAT',
    description: 'Peintre a Paris pour appartement, murs, plafonds, boiseries et finitions. Preparation soignee des supports et rendu propre.',
    intro: 'Nos travaux de peinture a Paris reposent sur une preparation serieuse des supports, condition indispensable pour obtenir un rendu durable, regulier et propre.',
    sections: [
      {
        title: 'Un vrai travail de preparation avant peinture',
        body: [
          'Une belle peinture commence bien avant l application. Nous traitons les fissures, reprenons les surfaces, poncons, enduisons si necessaire et protegeons soigneusement les lieux.',
          'Cette etape fait souvent la difference entre un simple rafraichissement et une renovation de qualite.'
        ],
        bullets: [
          'Preparation et reprises des supports',
          'Peinture murs et plafonds',
          'Boiseries, portes et plinthes',
          'Finitions mates, velours ou satin'
        ]
      },
      {
        title: 'Quand refaire les peintures',
        body: [
          'La peinture est pertinente lors d une remise en location, apres achat, avant vente, ou dans le cadre d une renovation plus globale de l appartement.'
        ],
        bullets: [
          'Rafraichissement complet de logement',
          'Remise au propre avant location',
          'Integration dans une renovation complete',
          'Revalorisation avant revente'
        ]
      }
    ],
    faq: [
      ['Travaillez-vous sur plafonds hauts et moulures ?', 'Oui, nous intervenons regulierement dans des appartements anciens avec details decoratifs.'],
      ['Pouvez-vous repeindre un appartement entier ?', 'Oui, c est l une de nos demandes les plus frequentes.'],
      ['Faites-vous aussi les enduits ?', 'Oui, nous realisons les reprises et preparations necessaires avant peinture.']
    ],
    related: ['travaux-renovation-paris', 'renovation-haussmannien-paris', 'platrerie-cloison-paris', 'renovation-appartement-paris']
  },
  {
    slug: 'pose-parquet-paris',
    keyword: 'pose parquet paris',
    h1: 'Pose de parquet a Paris',
    title: 'Pose de parquet a Paris | D.A. BAT',
    description: 'Pose de parquet a Paris: parquet massif, contrecollé, renovation de sols et finitions. D.A. BAT intervient sur appartements anciens et modernes.',
    intro: 'Nous realisons la pose de parquet a Paris sur des projets de renovation complete ou sur des interventions ciblees. Le sol joue un role majeur dans l impression generale du logement.',
    sections: [
      {
        title: 'Choisir le bon parquet pour son appartement',
        body: [
          'Le choix depend du style du bien, de son usage et du support existant. Dans les appartements parisiens, le parquet doit souvent conjuguer charme, resistance et adaptation aux contraintes du chantier.',
          'Nous vous aidons a choisir entre parquet massif, contrecollé ou autres solutions compatibles avec votre budget.'
        ],
        bullets: [
          'Pose droite, en point de Hongrie ou autre motif',
          'Preparation du support',
          'Plinthes et finitions',
          'Coordination avec les autres lots'
        ]
      },
      {
        title: 'Renovation des sols a Paris',
        body: [
          'Nous intervenons aussi lorsque le parquet s integre dans une renovation plus large: peinture, electricite, redistribution, cuisine ou salle de bain. Cela permet un rendu plus coherent et mieux fini.'
        ],
        bullets: [
          'Appartement ancien a valoriser',
          'Sol neuf apres redistribution',
          'Finitions elegantes et durables',
          'Coordination sur chantier global'
        ]
      }
    ],
    faq: [
      ['Posez-vous du parquet dans tout type de piece ?', 'Oui, selon le type de parquet et les contraintes techniques de la piece.'],
      ['Pouvez-vous integrer la pose dans une renovation complete ?', 'Oui, c est tres frequent sur nos chantiers.'],
      ['Travaillez-vous sur appartements anciens ?', 'Oui, avec une vraie attention au rendu final et aux details.']
    ],
    related: ['renovation-appartement-paris', 'renovation-haussmannien-paris', 'peintre-paris', 'renovation-boulogne-billancourt']
  },
  {
    slug: 'plomberie-renovation-paris',
    keyword: 'plomberie renovation paris',
    h1: 'Plomberie pour renovation a Paris',
    title: 'Plomberie pour renovation a Paris | D.A. BAT',
    description: 'Travaux de plomberie dans le cadre d une renovation a Paris. Salle de bain, cuisine, reseaux, evacuation et sanitaires.',
    intro: 'Nous realisons les travaux de plomberie necessaires a la renovation d un appartement a Paris, avec une approche orientee fiabilite, accessibilite et integration propre dans le chantier global.',
    sections: [
      {
        title: 'Une plomberie pensee pour durer',
        body: [
          'En renovation, la plomberie doit etre revue avec methodologie. Nous verifions l implantation, l etat des reseaux, les alimentations et les evacuations afin d eviter les mauvaises surprises apres finition.',
          'L objectif est de fiabiliser les usages quotidiens tout en gardant une execution propre et lisible.'
        ],
        bullets: [
          'Salle de bain et salle d eau',
          'Cuisine et points d eau',
          'Raccordements et evacuations',
          'Integration dans renovation complete'
        ]
      },
      {
        title: 'Quand refaire la plomberie',
        body: [
          'Une reprise est souvent necessaire lors d un changement d implantation, d une renovation ancienne ou quand les reseaux ne sont plus adaptes au confort attendu.'
        ],
        bullets: [
          'Appartement ancien',
          'Creation ou deplacement de douche',
          'Nouvelle cuisine',
          'Remise a niveau avant location'
        ]
      }
    ],
    faq: [
      ['Intervenez-vous sur salle de bain et cuisine ?', 'Oui, ce sont les deux cas les plus frequents.'],
      ['La plomberie peut-elle etre integree dans une renovation complete ?', 'Oui, nous la coordonnons avec electricite, cloisons, carrelage et finitions.'],
      ['Faites-vous les sanitaires ?', 'Oui, selon le projet nous integrons la pose des equipements.']
    ],
    related: ['renovation-salle-de-bain-paris', 'renovation-cuisine-paris', 'electricite-renovation-paris', 'travaux-renovation-paris']
  },
  {
    slug: 'electricite-renovation-paris',
    keyword: 'electricite renovation paris',
    h1: 'Renovation electrique a Paris',
    title: 'Renovation electrique a Paris | D.A. BAT',
    description: 'Travaux d electricite pour renovation a Paris. Mise aux normes, prises, eclairages et adaptation des reseaux a votre projet.',
    intro: 'La renovation electrique est souvent indispensable dans les appartements anciens a Paris. Nous reprenons les installations pour plus de securite, de confort et de coherence avec l amenagement prevu.',
    sections: [
      {
        title: 'Moderniser une installation vieillissante',
        body: [
          'Une installation electrique ancienne peut limiter l usage du logement, generer des contraintes au quotidien et compliquer l integration d une cuisine ou d une salle de bain moderne.',
          'Nous adaptons les reseaux au projet et a l usage reel du bien.'
        ],
        bullets: [
          'Reprise des circuits',
          'Mise aux normes',
          'Prises et eclairages',
          'Preparation pour cuisine ou salle de bain'
        ]
      },
      {
        title: 'Une electricite coherente avec la renovation',
        body: [
          'L electricite ne se pense pas seule. Nous l integrons a la redistribution des pieces, a la decoration et aux besoins de confort actuels pour aboutir a un resultat propre et fonctionnel.'
        ],
        bullets: [
          'Appartement ancien a moderniser',
          'Cuisine equipee',
          'Salle de bain renovee',
          'Rafraichissement global'
        ]
      }
    ],
    faq: [
      ['Faites-vous la mise aux normes ?', 'Oui, nous adaptons l installation au projet et aux exigences en vigueur.'],
      ['Travaillez-vous sur petits et grands appartements ?', 'Oui, nous adaptons l intervention a la surface et au programme de travaux.'],
      ['Peut-on refaire seulement l electricite ?', 'Oui, meme si elle est souvent integree dans une renovation plus complete.']
    ],
    related: ['plomberie-renovation-paris', 'renovation-salle-de-bain-paris', 'renovation-cuisine-paris', 'renovation-appartement-paris']
  },
  {
    slug: 'renovation-cuisine-paris',
    keyword: 'renovation cuisine paris',
    h1: 'Renovation de cuisine a Paris',
    title: 'Renovation de cuisine a Paris | D.A. BAT',
    description: 'Renovation de cuisine a Paris avec reprise des reseaux, pose des revetements et finitions. D.A. BAT intervient sur appartements anciens et modernes.',
    intro: 'Nous renovons les cuisines a Paris en combinant logique d usage, qualite technique et integration harmonieuse dans le reste de l appartement.',
    sections: [
      {
        title: 'Repenser la cuisine pour mieux vivre le logement',
        body: [
          'Une cuisine reussie doit etre pratique au quotidien, facile a entretenir et bien reliee aux autres espaces. En renovation, cela passe souvent par la reprise de la plomberie, de l electricite et des revetements.',
          'Nous adaptons la cuisine a la surface disponible et a votre mode de vie, qu il s agisse d une cuisine compacte ou ouverte sur le sejour.'
        ],
        bullets: [
          'Reprise des reseaux',
          'Preparation des supports',
          'Sols et credence',
          'Coordination avec amenagement global'
        ]
      },
      {
        title: 'Une renovation technique et esthetique',
        body: [
          'Nous attachons autant d importance a la qualite des branchements qu au rendu visuel final. La cuisine doit etre coherente avec le niveau de finition du reste de l appartement.'
        ],
        bullets: [
          'Cuisine a moderniser',
          'Projet apres achat',
          'Optimisation de petite surface',
          'Valorisation avant mise en location'
        ]
      }
    ],
    faq: [
      ['Pouvez-vous deplacer des points d eau ?', 'Oui, selon la configuration du logement et les contraintes techniques.'],
      ['Intervenez-vous sur petites cuisines parisiennes ?', 'Oui, nous travaillons regulierement sur des surfaces compactes.'],
      ['La cuisine peut-elle etre incluse dans un chantier complet ?', 'Oui, elle s integre souvent a une renovation d appartement globale.']
    ],
    related: ['plomberie-renovation-paris', 'electricite-renovation-paris', 'travaux-renovation-paris', 'devis-renovation-paris']
  },
  {
    slug: 'platrerie-cloison-paris',
    keyword: 'platrerie cloison paris',
    h1: 'Platrerie et cloisons a Paris',
    title: 'Platrerie et cloisons a Paris | D.A. BAT',
    description: 'Travaux de platrerie et creation de cloisons a Paris pour redistribuer les espaces et preparer des finitions propres.',
    intro: 'Nous realisons les travaux de platrerie et de cloisons a Paris pour reorganiser les volumes, preparer des surfaces nettes et accompagner les renovations completes.',
    sections: [
      {
        title: 'Repenser les espaces interieurs',
        body: [
          'La creation ou la modification de cloisons permet d optimiser un appartement, de separer les fonctions ou de redonner une meilleure circulation au logement.',
          'Ces travaux ont un impact direct sur l ergonomie du bien et doivent etre coordonnes avec les reseaux et les finitions.'
        ],
        bullets: [
          'Creation de cloisons',
          'Reprises de murs et plafonds',
          'Preparation avant peinture',
          'Adaptation aux reseaux existants'
        ]
      },
      {
        title: 'Une etape cle de la renovation',
        body: [
          'La platrerie sert de base au rendu final. Des supports bien prepares permettent d obtenir de belles peintures, des angles propres et un aspect plus haut de gamme.'
        ],
        bullets: [
          'Redistribution interieure',
          'Preparation de finitions',
          'Coordination avec electricite',
          'Intervention sur appartement ancien'
        ]
      }
    ],
    faq: [
      ['Pouvez-vous creer une nouvelle chambre ou un coin bureau ?', 'Oui, selon la configuration du logement et les contraintes techniques.'],
      ['La platrerie est-elle incluse avec la peinture ?', 'Elle peut l etre dans le cadre d un chantier global.'],
      ['Intervenez-vous pour des reprises partielles ?', 'Oui, selon le besoin nous pouvons traiter une zone precise ou un ensemble plus large.']
    ],
    related: ['peintre-paris', 'tous-corps-detat-paris', 'renovation-appartement-paris', 'travaux-renovation-paris']
  },
  {
    slug: 'renovation-paris-16e',
    keyword: 'renovation appartement paris 16',
    h1: 'Renovation d appartement a Paris 16e',
    title: 'Renovation d appartement a Paris 16e | D.A. BAT',
    description: 'Renovation d appartement a Paris 16e avec D.A. BAT. Travaux soignes pour biens anciens, familiaux ou haussmanniens.',
    intro: 'Nous accompagnons les projets de renovation a Paris 16e avec un niveau d exigence adapte aux appartements de standing, aux biens familiaux et aux logements anciens du secteur.',
    sections: [
      {
        title: 'Une approche adaptee au 16e arrondissement',
        body: [
          'Le 16e concentre de nombreux appartements spacieux, immeubles de qualite et biens demandant un haut niveau de finition. Nous adaptons les travaux a cette realite avec une attention forte portee aux details.',
          'Nous intervenons aussi bien pour une remise au gout du jour que pour une renovation complete apres acquisition.'
        ],
        bullets: [
          'Appartement familial',
          'Bien ancien ou de standing',
          'Renovation complete ou partielle',
          'Finitions premium'
        ]
      },
      {
        title: 'Nos postes de travaux sur le secteur',
        body: [
          'Les demandes les plus frequentes concernent les salles de bain, les peintures completes, la reprise des sols, l electricite et les cuisines a moderniser.'
        ],
        bullets: [
          'Peinture et decoration',
          'Parquet et sols',
          'Salle de bain',
          'Electricite et plomberie'
        ]
      }
    ],
    faq: [
      ['Intervenez-vous regulierement dans le 16e ?', 'Oui, nous travaillons sur Paris et plusieurs secteurs recherches de la capitale.'],
      ['Pouvez-vous gerer un chantier complet ?', 'Oui, nous pilotons les lots necessaires a une renovation complete.'],
      ['Faites-vous les appartements anciens ?', 'Oui, c est l une de nos specialites.']
    ],
    related: ['renovation-appartement-paris', 'renovation-haussmannien-paris', 'pose-parquet-paris', 'entreprise-renovation-paris']
  },
  {
    slug: 'renovation-paris-7e',
    keyword: 'renovation appartement paris 7',
    h1: 'Renovation d appartement a Paris 7e',
    title: 'Renovation d appartement a Paris 7e | D.A. BAT',
    description: 'Renovation d appartement a Paris 7e par D.A. BAT. Travaux de qualite pour biens anciens, de charme et appartements parisiens.',
    intro: 'Nous realisons des projets de renovation a Paris 7e avec une attention particuliere aux appartements anciens, aux contraintes de l immeuble et a la qualite des finitions attendues.',
    sections: [
      {
        title: 'Renover dans un secteur exigeant',
        body: [
          'Le 7e arrondissement demande souvent des interventions precises, discretes et bien preparees. Nous adaptons l organisation du chantier a l environnement de l immeuble et aux attentes de standing.',
          'Notre objectif est de conserver l elegance du bien tout en ameliorant son confort et sa fonctionnalite.'
        ],
        bullets: [
          'Biens anciens et de caractere',
          'Preparation technique serieuse',
          'Coordination multi corps d etat',
          'Rendu final soigne'
        ]
      },
      {
        title: 'Travaux frequents a Paris 7e',
        body: [
          'Nous intervenons frequemment sur peintures, salles de bain, modernisation electrique, reprises de cuisine et renovation complete d appartement.'
        ],
        bullets: [
          'Peinture',
          'Salle de bain',
          'Cuisine',
          'Electricite et sols'
        ]
      }
    ],
    faq: [
      ['Intervenez-vous sur des appartements de charme ?', 'Oui, avec un soin particulier sur les materiaux et les finitions.'],
      ['Pouvez-vous coordonner plusieurs metiers ?', 'Oui, nous gerons regulierement des chantiers tous corps d etat.'],
      ['Travaillez-vous sur petites et grandes surfaces ?', 'Oui, le perimetre est adapte a chaque bien.']
    ],
    related: ['renovation-appartement-paris', 'peintre-paris', 'renovation-salle-de-bain-paris', 'entreprise-generale-batiment-paris']
  },
  {
    slug: 'renovation-neuilly-sur-seine',
    keyword: 'renovation neuilly sur seine',
    h1: 'Renovation a Neuilly-sur-Seine',
    title: 'Renovation a Neuilly-sur-Seine | D.A. BAT',
    description: 'Travaux de renovation a Neuilly-sur-Seine pour appartement et maison. D.A. BAT intervient avec exigence et coordination complete.',
    intro: 'Nous accompagnons les projets de renovation a Neuilly-sur-Seine avec une logique de qualite, de coordination et de finitions soignees, dans la continuite de notre savoir-faire parisien.',
    sections: [
      {
        title: 'Une intervention de proximite',
        body: [
          'Neuilly-sur-Seine fait partie des secteurs ou la qualite du rendu compte autant que la bonne execution technique. Nous y intervenons sur des appartements familiaux, biens anciens et logements a moderniser.'
        ],
        bullets: [
          'Renovation complete ou partielle',
          'Peinture et decoration',
          'Salle de bain et cuisine',
          'Sols et reseaux'
        ]
      },
      {
        title: 'Des travaux adaptes au bien',
        body: [
          'Chaque logement impose son propre niveau de contrainte. Nous definissons un programme de travaux realiste et coherent avec vos priorites et le potentiel du bien.'
        ],
        bullets: [
          'Projet apres achat',
          'Remise a neuf',
          'Valorisation patrimoniale',
          'Confort quotidien'
        ]
      }
    ],
    faq: [
      ['Intervenez-vous hors de Paris intramuros ?', 'Oui, notamment a Neuilly-sur-Seine et dans d autres communes proches.'],
      ['Pouvez-vous gerer une renovation complete ?', 'Oui, avec coordination multi lots.'],
      ['Le devis est-il gratuit ?', 'Oui, la demande de devis est gratuite.']
    ],
    related: ['entreprise-generale-batiment-paris', 'renovation-boulogne-billancourt', 'renovation-appartement-paris', 'renovation-cle-en-main-paris']
  },
  {
    slug: 'renovation-boulogne-billancourt',
    keyword: 'renovation boulogne billancourt',
    h1: 'Renovation a Boulogne-Billancourt',
    title: 'Renovation a Boulogne-Billancourt | D.A. BAT',
    description: 'Renovation a Boulogne-Billancourt pour appartement et bien familial. D.A. BAT realise vos travaux avec coordination et finitions soignées.',
    intro: 'Nous intervenons a Boulogne-Billancourt pour des projets de renovation interieure, du simple rafraichissement a la renovation plus complete d appartement.',
    sections: [
      {
        title: 'Des travaux menes avec methode',
        body: [
          'Comme a Paris, la reussite d un chantier repose sur la preparation, la sequence des interventions et la qualite du suivi. Nous appliquons la meme exigence a Boulogne-Billancourt.'
        ],
        bullets: [
          'Visite et devis detaille',
          'Organisation claire du chantier',
          'Coordination des metiers',
          'Livraison soignee'
        ]
      },
      {
        title: 'Types de projets traites',
        body: [
          'Nous intervenons sur cuisine, salle de bain, peintures, electricite, sols et renovations completes, avec une approche adaptee a chaque logement.'
        ],
        bullets: [
          'Appartement familial',
          'Bien a moderniser',
          'Projet apres acquisition',
          'Remise a niveau avant location'
        ]
      }
    ],
    faq: [
      ['Intervenez-vous souvent a Boulogne-Billancourt ?', 'Oui, selon les projets nous intervenons regulierement en petite couronne.'],
      ['Pouvez-vous refaire une cuisine ou une salle de bain ?', 'Oui, ainsi que les autres postes techniques et decoratifs.'],
      ['Travaillez-vous avec un interlocuteur unique ?', 'Oui, c est l un des points forts de notre approche.']
    ],
    related: ['renovation-neuilly-sur-seine', 'renovation-cuisine-paris', 'renovation-salle-de-bain-paris', 'entreprise-renovation-paris']
  },
  {
    slug: 'prix-renovation-appartement-paris',
    keyword: 'prix renovation appartement paris',
    h1: 'Prix d une renovation d appartement a Paris',
    title: 'Prix d une renovation d appartement a Paris | D.A. BAT',
    description: 'Prix d une renovation d appartement a Paris: comprendre les facteurs qui font varier le budget et demander un devis detaille.',
    intro: 'Le prix d une renovation d appartement a Paris depend du niveau de prestation, de l etat initial du bien, des postes a reprendre et des contraintes techniques propres au logement.',
    sections: [
      {
        title: 'Ce qui fait varier le budget',
        body: [
          'Le cout n est jamais determine par la surface seule. L etat des reseaux, la qualite des supports, la complexite d acces, le niveau de finition attendu et l ampleur de la redistribution influencent fortement le budget final.',
          'Un devis detaille permet de distinguer les postes indispensables des options d embellissement ou de confort.'
        ],
        bullets: [
          'Etat initial du bien',
          'Plomberie et electricite a reprendre ou non',
          'Qualite des finitions souhaitees',
          'Contraintes techniques du chantier'
        ]
      },
      {
        title: 'Comment obtenir une estimation fiable',
        body: [
          'La meilleure approche reste une visite technique. Elle permet d identifier les points sensibles et de chiffrer un projet coherent, sans sous-estimer les reprises indispensables.'
        ],
        bullets: [
          'Visite du bien',
          'Definition du perimetre',
          'Arbitrage entre priorites et budget',
          'Devis clair et poste par poste'
        ]
      }
    ],
    faq: [
      ['Pouvez-vous donner un prix sans visiter ?', 'Une premiere orientation est possible, mais seul un devis apres visite est vraiment fiable.'],
      ['Le devis est-il detaille ?', 'Oui, nous etablissons un devis poste par poste.'],
      ['Le budget peut-il etre optimise ?', 'Oui, en priorisant les travaux et en ajustant les choix de materiaux.']
    ],
    related: ['devis-renovation-paris', 'renovation-appartement-paris', 'renovation-cle-en-main-paris', 'travaux-renovation-paris']
  },
  {
    slug: 'devis-renovation-paris',
    keyword: 'devis renovation paris',
    h1: 'Devis renovation a Paris',
    title: 'Devis renovation a Paris | D.A. BAT',
    description: 'Demandez votre devis renovation a Paris avec D.A. BAT. Evaluation du projet, visite technique et devis detaille.',
    intro: 'Pour obtenir un devis de renovation a Paris, nous commencons par comprendre votre besoin, visiter le bien si necessaire et formaliser une proposition claire et exploitable.',
    sections: [
      {
        title: 'Ce qu un bon devis doit contenir',
        body: [
          'Un devis utile ne doit pas etre vague. Il doit permettre de lire le perimetre des travaux, les postes prevus, les eventuelles options et le niveau de finition attendu.',
          'C est la base d une relation de confiance et d un chantier mieux maitrise.'
        ],
        bullets: [
          'Description claire des travaux',
          'Postes techniques identifies',
          'Options ou variantes si besoin',
          'Vision plus precise du chantier'
        ]
      },
      {
        title: 'Notre methode pour chiffrer un projet',
        body: [
          'Nous analysons l usage vise, l etat du bien, vos priorites et les contraintes reelles avant de remettre un devis. Cela permet d eviter les ecarts entre l intention initiale et la realite du chantier.'
        ],
        bullets: [
          'Premier echange',
          'Visite technique',
          'Arbitrages sur le programme',
          'Remise du devis'
        ]
      }
    ],
    faq: [
      ['Le devis est-il gratuit ?', 'Oui, la demande de devis est gratuite.'],
      ['Sous quel delai recevez-vous le devis ?', 'Generalement sous 48 a 72 heures apres la visite technique.'],
      ['Peut-on demander un devis pour une piece seule ?', 'Oui, salle de bain, cuisine, peinture ou autre poste cible.']
    ],
    related: ['prix-renovation-appartement-paris', 'renovation-cle-en-main-paris', 'entreprise-renovation-paris', 'renovation-cuisine-paris']
  },
  {
    slug: 'renovation-haussmannien-paris',
    keyword: 'renovation appartement haussmannien paris',
    h1: 'Renovation d appartement haussmannien a Paris',
    title: 'Renovation d appartement haussmannien a Paris | D.A. BAT',
    description: 'Renovation d appartement haussmannien a Paris avec respect du cachet ancien et adaptation au confort moderne.',
    intro: 'Renover un appartement haussmannien demande de concilier heritage architectural, contraintes techniques et usages contemporains. Nous cherchons cet equilibre dans chaque projet.',
    sections: [
      {
        title: 'Preserver le caractere sans renoncer au confort',
        body: [
          'Un appartement haussmannien se distingue par ses volumes, moulures, cheminees, parquets et proportions. Une renovation reussie doit valoriser ces elements tout en corrigeant ce qui limite le confort actuel.',
          'Nous adaptons les reprises techniques pour moderniser le logement sans banaliser son identite.'
        ],
        bullets: [
          'Respect du cachet ancien',
          'Reprise des reseaux',
          'Peinture et preparation fine',
          'Sols et finitions coherents'
        ]
      },
      {
        title: 'Nos points d attention sur ce type de bien',
        body: [
          'Sur les appartements haussmanniens, nous accordons une importance particuliere aux supports, aux details de finition, aux hauteurs sous plafond et a l integration discrete des evolutions techniques.'
        ],
        bullets: [
          'Moulures et boiseries',
          'Parquet et plinthes',
          'Electricite remise a niveau',
          'Salle de bain et cuisine modernisees'
        ]
      }
    ],
    faq: [
      ['Pouvez-vous conserver les elements anciens ?', 'Oui, lorsque leur etat et le projet le permettent, nous cherchons a les valoriser.'],
      ['Travaillez-vous sur parquet ancien ?', 'Oui, notamment dans des projets de renovation complete ou partielle.'],
      ['Ce type de chantier demande-t-il plus de soin ?', 'Oui, il exige une execution plus attentive sur les details et les finitions.']
    ],
    related: ['renovation-appartement-paris', 'peintre-paris', 'pose-parquet-paris', 'renovation-paris-16e']
  }
];

const pageMap = new Map(allPages.map((page) => [page.slug, page]));

const footerLinks = [
  'entreprise-renovation-paris',
  'renovation-appartement-paris',
  'renovation-salle-de-bain-paris',
  'renovation-cuisine-paris',
  'renovation-haussmannien-paris',
  'devis-renovation-paris'
].map((slug) => pageMap.get(slug));

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function fr(value) {
  return value
    .replaceAll('d ensemble', 'd’ensemble')
    .replaceAll('d etat', 'd’état')
    .replaceAll('d experience', 'd’expérience')
    .replaceAll('Renovation', 'Rénovation')
    .replaceAll('renovation', 'rénovation')
    .replaceAll('generale', 'générale')
    .replaceAll('Generale', 'Générale')
    .replaceAll('Etats', 'États')
    .replaceAll(' a Paris', ' à Paris')
    .replaceAll(' a Neuilly-sur-Seine', ' à Neuilly-sur-Seine')
    .replaceAll(' a Boulogne-Billancourt', ' à Boulogne-Billancourt')
    .replaceAll(' a Paris 16e', ' à Paris 16e')
    .replaceAll(' a Paris 7e', ' à Paris 7e')
    .replaceAll(' a moderniser', ' à moderniser')
    .replaceAll(' a repenser', ' à repenser')
    .replaceAll(' a reorganiser', ' à réorganiser')
    .replaceAll(' a restructurer', ' à restructurer')
    .replaceAll(' a optimiser', ' à optimiser')
    .replaceAll(' a renover', ' à rénover')
    .replaceAll(' apres', ' après')
    .replaceAll('Apres', 'Après')
    .replaceAll('etat', 'état')
    .replaceAll('Etat', 'État')
    .replaceAll('etancheite', 'étanchéité')
    .replaceAll('decennale', 'décennale')
    .replaceAll('Decennale', 'Décennale')
    .replaceAll('electricite', 'électricité')
    .replaceAll('Electricite', 'Électricité')
    .replaceAll('electrique', 'électrique')
    .replaceAll('eclairages', 'éclairages')
    .replaceAll('ciblees', 'ciblés')
    .replaceAll('soignees', 'soignées')
    .replaceAll('soignee', 'soignée')
    .replaceAll('frequentes', 'fréquentes')
    .replaceAll('frequents', 'fréquents')
    .replaceAll('frequent', 'fréquent')
    .replaceAll('regulier', 'régulier')
    .replaceAll('reguliere', 'régulière')
    .replaceAll('regulierement', 'régulièrement')
    .replaceAll('qualite', 'qualité')
    .replaceAll('Qualite', 'Qualité')
    .replaceAll('finitions haut de gamme', 'finitions haut de gamme')
    .replaceAll('Ile-de-France', 'Île-de-France')
    .replaceAll('maitrise', 'maîtrise')
    .replaceAll('coherence', 'cohérence')
    .replaceAll('reseaux', 'réseaux')
    .replaceAll('metier', 'métier')
    .replaceAll('metiers', 'métiers')
    .replaceAll('interieure', 'intérieure')
    .replaceAll('interieur', 'intérieur')
    .replaceAll('exigee', 'exigée')
    .replaceAll('imprevus', 'imprévus')
    .replaceAll('equipee', 'équipée')
    .replaceAll('realises', 'réalisés')
    .replaceAll('realise', 'réalise')
    .replaceAll('realisons', 'réalisons')
    .replaceAll('realite', 'réalité')
    .replaceAll('deja', 'déjà')
    .replaceAll('meme', 'même')
    .replaceAll('problemes', 'problèmes')
    .replaceAll('votre projet', 'votre projet')
    .replaceAll('coordonne', 'coordonne')
    .replaceAll('coordonnee', 'coordonnée')
    .replaceAll('coordonnees', 'coordonnées')
    .replaceAll('premiere', 'première')
    .replaceAll('interlocuteur unique', 'interlocuteur unique')
    .replaceAll('tres', 'très')
    .replaceAll('precis', 'précis')
    .replaceAll('necessaire', 'nécessaire')
    .replaceAll('necessaires', 'nécessaires')
    .replaceAll('preparation', 'préparation')
    .replaceAll('preparees', 'préparées')
    .replaceAll('prepare', 'prépare')
    .replaceAll('repensee', 'repensée')
    .replaceAll(' peut-il etre ', ' peut-il être ')
    .replaceAll(' Peut-il etre ', ' Peut-il être ')
    .replaceAll(' est-il etre ', ' est-il être ')
    .replaceAll('gratuite', 'gratuite');
}

function toJson(value) {
  return JSON.stringify(value, null, 2);
}

function relatedLinks(page) {
  return page.related
    .map((slug) => pageMap.get(slug))
    .filter(Boolean)
    .map((item) => `
      <a class="internal-link" href="/${item.slug}">
        <strong>${escapeHtml(fr(item.h1))}</strong>
        <span>${escapeHtml(fr(item.description))}</span>
      </a>`)
    .join('');
}

function renderSections(page) {
  return page.sections
    .map(
      (section) => `
      <section class="section-block">
        <h2>${escapeHtml(fr(section.title))}</h2>
        ${section.body.map((paragraph) => `<p>${escapeHtml(fr(paragraph))}</p>`).join('')}
        <ul>
          ${section.bullets.map((bullet) => `<li>${escapeHtml(fr(bullet))}</li>`).join('')}
        </ul>
      </section>`
    )
    .join('');
}

function renderFaq(page) {
  return page.faq
    .map(
      ([question, answer]) => `
      <details class="faq-item">
        <summary>${escapeHtml(fr(question))}</summary>
        <p>${escapeHtml(fr(answer))}</p>
      </details>`
    )
    .join('');
}

function renderFaqSchema(page) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map(([question, answer]) => ({
      '@type': 'Question',
      name: fr(question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: fr(answer),
      },
    })),
  };
}

function renderPage(page) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: `${baseUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: fr(page.h1),
        item: `${baseUrl}/${page.slug}`,
      },
    ],
  };

  const contractorSchema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: 'D.A. BAT',
    url: `${baseUrl}/${page.slug}`,
    image: `${baseUrl}/og-image.jpg`,
    telephone: '+33601997659',
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressRegion: 'Ile-de-France',
      addressCountry: 'FR',
    },
    areaServed: ['Paris', 'Neuilly-sur-Seine', 'Boulogne-Billancourt'],
    description: fr(page.description),
  };

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(fr(page.title))}</title>
  <meta name="description" content="${escapeHtml(fr(page.description))}" />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="${baseUrl}/${page.slug}" />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:site_name" content="D.A. BAT" />
  <meta property="og:title" content="${escapeHtml(fr(page.title))}" />
  <meta property="og:description" content="${escapeHtml(fr(page.description))}" />
  <meta property="og:url" content="${baseUrl}/${page.slug}" />
  <meta property="og:image" content="${baseUrl}/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(fr(page.title))}" />
  <meta name="twitter:description" content="${escapeHtml(fr(page.description))}" />
  <meta name="twitter:image" content="${baseUrl}/og-image.jpg" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="stylesheet" href="/seo-pages.css" />
  <script type="application/ld+json">${toJson(contractorSchema)}</script>
  <script type="application/ld+json">${toJson(breadcrumbSchema)}</script>
  <script type="application/ld+json">${toJson(renderFaqSchema(page))}</script>
</head>
<body>
  <header class="site-header">
    <div class="container site-header__inner">
      <a class="logo" href="/">D.A.&thinsp;BAT</a>
      <nav class="top-nav" aria-label="Navigation principale">
        <a href="/">Accueil</a>
        <a href="/#services">Services</a>
        <a href="/entreprise-renovation-paris">Pages SEO</a>
        <a href="/#contact">Contact</a>
      </nav>
      <a class="button button--ghost" href="/#contact">Demander un devis</a>
    </div>
  </header>
  <main>
    <div class="breadcrumb-container container">
      <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
        <a href="/">Accueil</a>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-current">${escapeHtml(fr(page.h1))}</span>
      </nav>
    </div>
    <section class="hero">
      <div class="container">
        <p class="eyebrow">${escapeHtml(fr(page.keyword))}</p>
        <h1>${escapeHtml(fr(page.h1))}</h1>
        <p class="lead">${escapeHtml(fr(page.intro))}</p>
        <div class="hero-actions">
          <a class="button" href="/#contact">Obtenir un devis</a>
          <a class="button button--ghost" href="/">Voir le site principal</a>
        </div>
      </div>
    </section>

    <section class="section muted-section">
      <div class="container stats-grid">
        <article class="stat-card"><strong>15+</strong><span>ans d experience</span></article>
        <article class="stat-card"><strong>450+</strong><span>projets realises</span></article>
        <article class="stat-card"><strong>24h</strong><span>pour une premiere estimation</span></article>
      </div>
    </section>

    <section class="section">
      <div class="container article-layout">
        ${renderSections(page)}
      </div>
    </section>

    <section class="section muted-section">
      <div class="container">
        <h2>Questions frequentes</h2>
        <div class="faq-list">
          ${renderFaq(page)}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2>Pages connexes</h2>
        <p class="section-intro">Ces pages renforcent le maillage interne autour de la renovation a Paris et orientent l internaute vers des sujets plus precis.</p>
        <div class="internal-links">
          ${relatedLinks(page)}
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container cta-box">
        <h2>Parlons de votre projet</h2>
        <p>Nous intervenons sur Paris et petite couronne pour les projets de renovation complete ou de travaux ciblés.</p>
        <div class="hero-actions">
          <a class="button" href="${contact.phoneHref}">${contact.phone}</a>
          <a class="button button--ghost" href="mailto:${contact.email}">${contact.email}</a>
        </div>
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <div class="container footer-grid">
      <section>
        <h3>D.A. BAT</h3>
        <p>Entreprise generale de batiment a Paris. Renovation d appartements anciens, salles de bain, cuisines, peinture, electricite, plomberie et sols.</p>
      </section>
      <section>
        <h3>Pages utiles</h3>
        ${footerLinks.map((item) => `<a href="/${item.slug}">${escapeHtml(fr(item.h1))}</a>`).join('')}
      </section>
      <section>
        <h3>Contact</h3>
        <p>${contact.area}</p>
        <a href="${contact.phoneHref}">${contact.phone}</a>
        <a href="mailto:${contact.email}">${contact.email}</a>
        <p>${contact.hours}</p>
      </section>
    </div>
  </footer>
</body>
</html>`;
}

function writePages() {
  for (const page of allPages) {
    fs.writeFileSync(path.resolve(publicDir, `${page.slug}.html`), renderPage(page));
  }
}

function writeSitemap() {
  const urls = [''].concat(allPages.map((page) => page.slug));
  const today = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((slug) => `  <url>
    <loc>${baseUrl}/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${slug ? '0.8' : '1.0'}</priority>
  </url>`)
  .join('\n')}
</urlset>`;

  fs.writeFileSync(path.resolve(publicDir, 'sitemap.xml'), xml);
}

writePages();
writeSitemap();

console.log(`Generated ${allPages.length} SEO pages and sitemap.xml`);
