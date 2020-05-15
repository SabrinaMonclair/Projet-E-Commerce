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
let idCartList = document.getElementById("cartlist");

// EX : let cardNom = ["nom", "champage/img.png", "description", "prix", "ref-0001","cardNom", 0]
//champagne
 


let cardBollinger = ["Champagne Bollinger Coffret 007 - Millésime 2011", "assets/img/champagne/bollinger.png", "La Maison Bollinger dévoile pour cet évènement le millésime 2011, exclusivement issus de grands crus de Pinot Noir du village d'Ay. C'est la premère fois que la maison élabore une cuvée issue uniquement de ce cru historique ou la maison est implantée depuis sa création en 1829. Avis aux collectionneurs!", "220", "C001", "cardBollinger", 0]
let cardBillecart = ["Champagne Billecart Salmon Rosé - Brut Rosé", "assets/img/champagne/billecartsalmon.png", "Croustillant, fin, le rosé de Billecart Salmon est un champagne subtil et d'une finesse remarquable. Associant des notes de groseilles, de framboises, de baies rouges et des saveurs toastées, léger, élégant et très frais, son effervescence est délicieuse.", "64,00", "C002", "cardBillecart", 0]

//wine



//spirit

let cardTalisker = ["Talisker 10 ans", "assets/img/spiritueux/talisker.png", "Unique single malt de l’île de Skye, Talisker 10 ans possède un caractère marin et épicé hors du commun", "44,90", "S001"]





//appel fonction
idChampagne.onclick = showCardChampagne;
idWine.onclick = showCardWine;
idSpirit.onclick = showCardSpirit;

function showCardChampagne() {
  idMainArea.innerText = "";

  createCard(cardBollinger);
  createCard(cardBillecart);
}

function showCardWine() {
  idMainArea.innerText = "";

  createCard(cardMeursault);
  createCard(cardSerrant);




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
            <p class="card-text"></p>
            <a href="#" class="btn btn-dark text-pinkwhite bg-pinkdark" data-toggle="modal" data-target="#${type[4]}">Ajouter au Panier</a>
            <span class="badge text-pinkwhite bg-darkwine">${type[3]}€</span>
        </div>
        </div>
    
        <div class="modal fade" id="${type[4]}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content text-darkwine">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${type[0]}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                  <p>${type[2]} </p>
                  <p>Voulez vous ajouter cet article dans votre panier ?<br>
                  <i>ref: ${type[4]}</i>
                  </p>
                </div>
                <div class="modal-footer">
                
                    <button type="button" class="btn btn-dark text-pinkwhite bg-pinkdark" data-dismiss="modal">Fermer</button>
                    <button type="button" class="btn btn-dark text-pinkwhite bg-darkwine" onclick="addToBasket(${type[5]})" data-dismiss="modal" >Mettre dans le panier</button>
                </div>
            </div>
        </div>
        </div>
      </div>`
}

function addToBasket(type) {

  if (type[6] === 0) {
    console.log(type[6] + "oui")
    type[6]++;
    idCartList.innerHTML +=
      `<tr>
      <th scope="row"><img src="${type[1]}" class="card-img-top" style="width: 2em;" alt="image ${type[0]}"></th>
      <td>${type[0]}</td>
      <td>${type[3]}€</td>
      <td id="number${type[5]}">${type[6]}</td>
    </tr>`;

  } else {
    type[6]++;
    let idnumber = document.getElementById(`number${type[5]}`)
    idnumber.innerText = type[6]
    console.log(type[6] + "non")
  }
}