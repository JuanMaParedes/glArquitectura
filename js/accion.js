document.addEventListener("click",function (e){
    if(e.target.classList.contains("gallery-item")){
          const src = e.target.getAttribute("src");
          document.querySelector(".modal-img").src = src;
          const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
          myModal.show();
    }
  })

/* let animado= document.querySelector(".btn-wsp");
function mostrarScroll(){
      let alturaAnimado= animado.offsetTop;
      if(alturaAnimado  < 0){
            animado.computedStyleMap.opacity=1;
      }
}
window.addEventListener('scroll', mostrarScroll); */

/* window.addEventListener('scroll', function() {
      var element = document.getElementById('btn-wsp');
      var position = element.getBoundingClientRect().top;

      if (position < window.innerHeight && position > 0) {
          element.classList.add('visible');
      }
  }); */
/*   let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
      var element = document.getElementById('btn-wsp');
      var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
          // Scroll hacia abajo
          element.classList.add('visible');
          element.classList.remove('hidden');
      } else {
          // Scroll hacia arriba
          element.classList.add('hidden');
          element.classList.remove('visible');
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
  }); */
  window.addEventListener('scroll', function() {
      var element = document.getElementById('btn-wsp');
      var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > 0) {
          // Scroll hacia abajo o en medio
          element.classList.add('visible');
          element.classList.remove('hidden');
      } else {
          // Scroll hasta el inicio de la página
          element.classList.add('hidden');
          element.classList.remove('visible');
      }
  });