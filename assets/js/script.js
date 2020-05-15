// bouton up page
let idBtnUpPage = document.getElementById("btnUpPage");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    idBtnUpPage.style.zIndex = 99;
    idBtnUpPage.style.opacity = "1";
    idBtnUpPage.style.bottom = "20px";
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


// VALUE

let cards = document.querySelector("#cards");
let userInput = document.getElementsByClassName("inputnumber").value;


cards.addEventListener("click", function (event) {
  if (event.target.tagName.toLowerCase() === 'a') {
    let clickedItem = event.target;
    console.log(clickedItem.getAttribute('data-value'));
    // let commandValue = userInput.value;
    console.log(userInput);
  }
});

