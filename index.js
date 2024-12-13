
// Page distribution
let characters = [
  {pseudo: "Arthur", picture: "arthur", firstname: "Alexandre", lastname: "Astier", rule: "Roi de Bretagne", link: "https://fr.wikipedia.org/wiki/Alexandre_Astier"},
  {pseudo: "Dame Ygerne", picture: "ygerne",firstname: "Josée", lastname: "Drevon", rule: "Duchesse de Gorlais", link: "https://fr.wikipedia.org/wiki/Jos%C3%A9e_Drevon"},
  {pseudo: "Gauvain", picture: "gauvain", firstname: "Aurélien", lastname: "Portehaut", rule: "Prince d'Orcanie", link: "https://fr.wikipedia.org/wiki/Aur%C3%A9lien_Portehaut"},
  {pseudo: "Guenièvre", picture: "guenievre", firstname: "Anne", lastname: "Girouard", rule: "Reine de Bretagne", link: "https://fr.wikipedia.org/wiki/Anne_Girouard"},
  {pseudo: "Léodagan", picture: "leodagan", firstname: "Lionel", lastname: "Astier", rule: "Roi de Carmélide", link: "https://fr.wikipedia.org/wiki/Lionnel_Astier"},
  {pseudo: "Dame Séli", picture: "seli", firstname: "Joëlle", lastname: "Sevilla", rule: "Reine de Carmélide", link: "https://fr.wikipedia.org/wiki/Jo%C3%ABlle_Sevilla"},
  {pseudo: "Yvain", picture: "yvain", firstname: "Simon", lastname: "Astier", rule: "Prince de Carmélide", link: "https://fr.wikipedia.org/wiki/Simon_Astier"},
  {pseudo: "Lancelot", picture: "lancelot", firstname: "Thomas", lastname: "Cousseau", rule: "Chevalier du Lac", link: "https://fr.wikipedia.org/wiki/Thomas_Cousseau"},
  {pseudo: "Perceval", picture: "perceval", firstname: "Franck", lastname: "Pitiot",rule: "Chevalier", link: "https://fr.wikipedia.org/wiki/Franck_Pitiot"},
  {pseudo: "Karadoc", picture: "karadoc", firstname: "JC", lastname: "Hembert", rule: "Chevalier", link: "https://fr.wikipedia.org/wiki/Jean-Christophe_Hembert"},
  {pseudo: "Kadoc", picture: "kadoc", firstname: "Brice", lastname: "Fournier", rule: "Frère de Karadoc", link: "https://fr.wikipedia.org/wiki/Brice_Fournier"},
  {pseudo: "Mewanwi", picture: "mevanwi", firstname: "Caroline", lastname: "Ferrus", rule: "Femme de Karadoc", link: "https://fr.wikipedia.org/wiki/Caroline_Ferrus"},
  {pseudo: "Bohort", picture: "bohort", firstname: "Nicolas", lastname: "Gabion", rule: "Prince de Gaunes", link: "https://fr.wikipedia.org/wiki/Nicolas_Gabion"},
  {pseudo: "Lionel", picture: "lionel", firstname: "Etienne", lastname: "Fargue", rule: "Prince de Gaunes", link: "https://fr.wikipedia.org/wiki/%C3%89tienne_Fague"},
  {pseudo: "Berlewen", picture: "berlewen", firstname: "Virginie", lastname: "Efira", rule: "Femme de Bohort", link: "https://fr.wikipedia.org/wiki/Virginie_Efira"
  },
  {pseudo: "Père Blaise", picture: "blaise", firstname: "JR", lastname: "Lombard", rule: "Prêtre de Kaamelott", link: "https://fr.wikipedia.org/wiki/Jean-Robert_Lombard"},
  {pseudo: "Merlin", picture: "merlin", firstname: "Jacques", lastname: "Chambon", rule: "Druide de Kaamelott", link: "https://fr.wikipedia.org/wiki/Jacques_Chambon_(acteur)"},
  {pseudo: "Calogrenant", picture: "calogrenant", firstname: "Stéphane", lastname: "Margot", rule: "Roi de Calédonie", link: ""},
  {pseudo: "Maître d'armes", picture: "armes", firstname: "Christian", lastname: "Bujeau", rule: "Maître d'armes", link: "https://fr.wikipedia.org/wiki/Personnages_de_Kaamelott#Le_ma%C3%AEtre_d%E2%80%99armes"},
  {pseudo: "Loth", picture: "loth", firstname: "François", lastname: "Rollin", rule: "Roi Loth d'Orcanie", link: "https://fr.wikipedia.org/wiki/Personnages_de_Kaamelott#Loth_d%E2%80%99Orcanie"},
  {pseudo: "Dagonet", picture: "dagonet", firstname: "Antoine", lastname: "de Caunes", rule: "Chevalier", link: "https://fr.wikipedia.org/wiki/Personnages_de_Kaamelott#Dagonet"}
]

function displayCards() {  
  for(const character of characters) {
    // Créer un article
    const card = document.createElement('article');
    // Assigner la class body__main--card
    card.className = 'body__main--card';
    
    // Afficher un titre
    const title = document.createElement('h2');
    title.className = 'body__main--card-title';
    title.textContent = `${character.pseudo}`;

    // Afficher une photo
    const picture = document.createElement('img');
    picture.className = 'body__main--card-picture';  
    picture.src = `img/characters/${character.picture}.jpg`;
    picture.setAttribute('alt', `Photo de ${character.firstname} ${character.lastname}`);

    // Créer un article details
    const details = document.createElement('article');
    details.className = 'body__main--card-details';

    // Afficher l'acteur
    const actor = document.createElement('h3');
    actor.className = 'body__main--card-details-actor';
    actor.textContent = `${character.firstname} ${character.lastname}`;

    // Afficher le rôle
    const rule = document.createElement('h4');
    rule.className = 'body__main--card-details-rule';
    rule.textContent = `${character.rule}`;

    // rattacher actor et rule à l'article details
    details.appendChild(actor);
    details.appendChild(rule);

    // afficher un lien wikipédia
    const link = document.createElement('a');
    link.className = 'body__main--card-link';
    link.href = `${character.link}`;
    link.target = 'blank'
    link.textContent = 'En savoir plus';

    // insérer le contenu de la card dans la card
    card.append(title, picture, details, link);
    // Selectionner le container
    const ctn = document.querySelector(".body__main--ctn");
    ctn.appendChild(card);
  }
}


displayCards()