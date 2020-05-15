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
let cardNom = ["Champagne Deutz", "assets/img/champagne/Deutz.png", "Tirant sa parfaite harmonie des 3 cépages champenois qui interviennent à parts égales et constantes dans son assemblage, ce Deutz Brut Classic revêt une jolie robe or agrémentée de bulles fines et légères. Un champagne avec une palette complexe, une texture soyeuse avec une intense fraîcheur.", "33,90", "C001"]



//wine
let cardNom2 = ["nom", "champage/img.png", "description", "prix", "ref-0001"]



//spirit
let cardNom3 = ["name", "champage/img.png", "description", "prix", "ref-0001"]





//appel fonction
idChampagne.onclick = showCardChampagne;
idWine.onclick = showCardWine;
idSpirit.onclick = showCardSpirit;

function showCardChampagne() {
  idMainArea.innerText = "";
  createCard(cardNom);
  createCard(cardNom2);
  createCard(cardNom3);
}

function showCardWine() {
  idMainArea.innerText = "";
  createCard(cardNom);
  createCard(cardNom2);
  createCard(cardNom3);
}


function showCardSpirit() {
  idMainArea.innerText = "";
  createCard(cardNom);
  createCard(cardNom2);
  createCard(cardNom3);

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
            <div class="modal-content text-darkwine">
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