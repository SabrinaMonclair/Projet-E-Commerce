// bouton up page
let idBtnUpPage = document.getElementById("btnUpPage");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    idBtnUpPage.style.zIndex = 99;
    idBtnUpPage.style.opacity = "1";
    idBtnUpPage.style.bottom = "20px";
    idBtnUpPage.style.transition = "padding 500ms, opacity 1s, bottom 1s";
  } else {
    idBtnUpPage.style.zIndex = -1;
    idBtnUpPage.style.opacity = "0";
    idBtnUpPage.style.bottom = "0px";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// card pour la page
let idChampagne = document.getElementById("champagne");
let idWine = document.getElementById("wine");
let idSpirit = document.getElementById("spirit");
let idMainArea = document.getElementById("mainArea");

// EX : let cardNom = ["nom", "champage/img.png", "description", "prix", "ref-0001"]
//champagne
let cardDeutz = ["Champagne Deutz", "assets/img/champagne/Deutz.png", "Tirant sa parfaite harmonie des 3 cépages champenois qui interviennent à parts égales et constantes dans son assemblage, ce Deutz Brut Classic revêt une jolie robe or agrémentée de bulles fines et légères. Un champagne avec une palette complexe, une texture soyeuse avec une intense fraîcheur.", "33,90", "C001"]
let cardRuinart = ["Champagne Ruinart", "assets/img/champagne/ruinart.png", "R de Ruinart Brut est l’expression première du goût de Ruinart. Ce champagne ou tout n’est que fraîcheur et équilibre révèle une superbe intensité olfactive sur un fond brioché et biscuité.", "46,50", "C002"]
let cardBillecart = ["Champagne Billecart Salmon Rosé", "assets/img/champagne/billecartsalmon.png", "Croustillant, fin, le rosé de Billecart Salmon est un champagne subtil et d'une finesse remarquable. Associant des notes de groseilles, de framboises, de baies rouges et des saveurs toastées, léger, élégant et très frais, son effervescence est délicieuse.", "64,00", "C003"]
let cardBollinger = ["Champagne Bollinger", "assets/img/champagne/bollinger.png", "La Maison Bollinger dévoile pour cet évènement le millésime 2011, exclusivement issus de grands crus de Pinot Noir du village d'Ay. C'est la premère fois que la maison élabore une cuvée issue uniquement de ce cru historique ou la maison est implantée depuis sa création en 1829. Avis aux collectionneurs!", "220", "C004"]


//wine
let cardPouilly = ["Pouilly-Fumé", "assets/img/vins/pouilly-fume.png", "La Demoiselle de Bourgeois est issu d’une sélection de raisins de Sauvignon haut de gamme. Au-delà des notes florales et de fruits exotiques présentes dès la première olfaction, on retrouve toute l’expression de ce terroir prestigieux à travers une tension minérale tout en élégance.", "21,50", "B001"]
let cardMeursault = ["Meursault 1er cru Les Charmes", "assets/img/vins/meursault.2017.png", "Ce Premier Cru à la robe or jaune brillante développe gras et richesse tout en laissant une bouche qui s’impose d'une structure volumineuse. Une touche de minéralité attrayante ajoute de la nuance aux arômes de noix, de poire et de zeste d'agrumes torréfiés, on retrouve un bel équilibre puis la finesse reprend ses droits pour guider la fin de bouche qui s’appuie sur une belle tension." "53,90", "B002"]
let cardSerrant = ["Couléé de Serrant","assets/img/vins/coulee-de-serrant.2015png.png", "La Coulée de Serrant, à Savennières, est réputé pour produire des vins blancs exceptionnels. En biodynamie depuis 1981, élevé en fûts de chêne pendant 6 à 8 mois, produit en très petite quantité, la Coulée de Serrant est issue de vignes de plus de 35/40 ans, certaines ayant plus de 80 ans. Vin aromatique, de sa longueur, et de sa superbe minéralité.", "73,90", "B003"]
let cardJurancon = ["Jurançon Ballet D'automne", "assets/img/vins/jurancon.2018.png", "Un climat caractéristique qui allie rigueur montagnarde et douceur océane., conjugué à la qualité du terroir, précieux mélange d'argile, de silice et de galets, permet d'exprimer la quintessence des cépages nobles du jurançon: le gros et le petit manseng." "12,80", "B004"]
let cardChinon = ["Chinon Le Fauteuil Rouge", "assets/img/vins/chinon.2017.png", "Un Chinon puissant et complexe, finement toasté avec un grand potentiel. Une très belle bouteille qui sublimera vos repas festifs autour de viandes en sauce et de fromages de caractère. Un vrai coup de coeur." "9,95", "R001"]
let cardDarons = ["Languedoc Les Darons", "assets/img/vins/les-darons-2017.png", "Les Darons (les Pères en argot) porte bien son nom. Charmeur avec son nez fruité et épicé, équilibré et puissant, il possède des nuances légèrement toastées qui apportent un relief et une générosité des plus appréciables. Un vin solide et sûr de lui qui s’adresse à ceux qui ont suffisamment de bouteille pour apprécier les bonnes choses de la vie.", "6,20", "R002"]
let cardMarin =  ["Chateau Le Marin","assets/img/vins/chateau-le-marin-2017.png","Situé sur les pentes de Bordeaux, le Château Le Marin est un assembalge généreux fait de 90% de merlot, 5% de cabernet sauvignon et 5% de cabernet franc. Son nez est élégant, parfumé et enivrant avec ses notes de fruits noirs, de violette et de réglisse. En bouche, le vin est structuré mais avec des tanins mûrs et soyeux, les fruits noirs comme la cerise et la prune dominent, soutenus par de subtiles notes de chêne et d'épices . Un vin de caractère et une affaire imbattable.", "5,25", "R003"]



//spirit

 let cardTalisker = ["Talisker 10 ans", "assets/img/spiritueux/talisker.png", "Unique single malt de l’île de Skye, Talisker 10 ans possède un caractère marin et épicé hors du commun", "44,90", "S001"]





//appel fonction
idChampagne.onclick = showCardChampagne;
idWine.onclick = showCardWine;
idSpirit.onclick = showCardSpirit;

function showCardChampagne() {
  idMainArea.innerText = "";
  createCard(cardDeutz);
  createCard(cardRuinart);
  createCard(cardBillecart);
  createCard(cardBollinger);
}

function showCardWine() {
  idMainArea.innerText = "";
  createCard(cardPouilly);
  createCard(cardMeursault);
  createCard(cardSerrant);
  createCard(cardJurancon);
  createCard(cardChinon);
  createCard(cardDarons);
  createCard(cardMarin);
}


function showCardSpirit() {
  idMainArea.innerText = "";
  createCard(cardTalisker);


}


function createCard(type) {
  idMainArea.innerHTML +=
    `   <div class="col-6 col-sm-5 col-md-4 col-lg-3 py-2">
        <div class="card">
        <img src="${type[1]}" class="card-img-top" alt="image ${type[0]}">
        <div class="card-body text-darkwine">
            <h5 class="card-title">${type[0]}</h5>
            <p class="card-text">${type[2]}</p>
            <a href="#" class="btn btn-dark text-pinkwhite bg-pinkdark" data-toggle="modal" data-target="#presents">Ajouter au Panier</a>
            <span class="badge text-pinkwhite bg-darkwine">${type[3]}€</span>
        </div>
        </div>
    
        <div class="modal fade" id="presents" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${type[0]}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                  <p>${type[2]} <i>${type[4]}</i></p>
                  <p>Voulez vous ajouter cet article dans votre panier ?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark text-pinkwhite bg-pinkdark" data-dismiss="modal">Fermer</button>
                    <button type="button" class="btn btn-dark text-pinkwhite bg-darkwine">Mettre dans le panier</button>
                </div>
            </div>
        </div>
        </div>
      </div>`

}