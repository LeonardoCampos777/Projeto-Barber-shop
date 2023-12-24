//ANIMAÇÃO
if(window.SimpleAnime){
  new SimpleAnime();
}

function initAnimacaoScroll1(){
  const liEfeito = document.querySelectorAll('.js-li-scroll1');
  const windowMetade = window.innerHeight * 0.7;
  
  function animaScroll(){
    liEfeito.forEach((li)=>{
      const liTop = li.getBoundingClientRect().top - windowMetade;
      if(liTop < 0) {
        li.classList.add('ativo');
      } else{
        li.classList.remove('ativo');
      }
    });
  }
  
  window.addEventListener('scroll', animaScroll);
}
initAnimacaoScroll1();

function initAnimacaoScroll2(){
  const liEfeito = document.querySelectorAll('.js-li-scroll2');
  const windowMetade = window.innerHeight * 0.7;
  
  function animaScroll(){
    liEfeito.forEach((li)=>{
      const liTop = li.getBoundingClientRect().top - windowMetade;
      if(liTop < 0) {
        li.classList.add('ativo');
      } else{
        li.classList.remove('ativo');
      }
    });
  }
  
  window.addEventListener('scroll', animaScroll);
}
initAnimacaoScroll2();

function initAnimacaoScroll3(){
  const liEfeito = document.querySelectorAll('.js-li-scroll3');
  const windowMetade = window.innerHeight * 0.7;
  
  function animaScroll(){
    liEfeito.forEach((li)=>{
      const liTop = li.getBoundingClientRect().top - windowMetade;
      if(liTop < 0) {
        li.classList.add('ativo');
      } else{
        li.classList.remove('ativo');
      }
    });
  }
  
  window.addEventListener('scroll', animaScroll);
}
initAnimacaoScroll3();