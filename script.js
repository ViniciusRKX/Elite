const header = document.getElementById('header');

window.onscroll = function() {
  if (window.scrollY > 10) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled'); 
  }
};

const menuIcon = document.querySelector('.bi');
const menu = document.querySelector('.menu ul');

menuIcon.addEventListener ('click', ()=> {
  menu.classList.toggle('active');
});

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6; // Limiar para disparar a animação (60% da altura da janela)

    // Função que será chamada sempre que o usuário rolar
    function animaScroll() {
      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top; // Posição da seção em relação à viewport
        const isSectionVisible = sectionTop - windowMetade < 0; // Se a seção já entrou na tela

        if (isSectionVisible) {
          // Adiciona a animação (classe 'ativo') com atraso baseado no índice
          setTimeout(() => {
            section.classList.add("ativo");
          }, index * 100); // Atraso de 200ms entre cada item
        } else {
          // Se quiser que as seções desapareçam ao subir, remova a classe (opcional)
          // section.classList.remove("ativo"); 
        }
      });
    }

    animaScroll(); // Chama a função na primeira vez para já verificar a visibilidade inicial

    window.addEventListener("scroll", animaScroll); // Chama a função sempre que o usuário rolar
  }
}

initAnimacaoScroll(); // Inicializa a animação

