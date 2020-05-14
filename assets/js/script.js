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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }