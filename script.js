// ================================
// FADE-IN AO SCROLL
// ================================
const fadeElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.85) {
      el.classList.add('visible');
    }
  });
});

// Inicializa fade-in também ao carregar a página
window.addEventListener('load', () => {
  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
});

// ================================
// BOTÕES MICRO ANIMATION
// ================================
const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
  btn.addEventListener('mouseover', () => {
    btn.style.transform = 'translateY(-2px) scale(1.02)';
  });
  btn.addEventListener('mouseout', () => {
    btn.style.transform = 'translateY(0) scale(1)';
  });
});

// ================================
// PROJECT CARD MICRO HOVER (opcional extra)
// ================================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.boxShadow = '0 15px 35px rgba(92, 255, 193, 0.15)';
  });
  card.addEventListener('mouseout', () => {
    card.style.boxShadow = 'none';
  });
});

// ================================
// FORMULÁRIO DE CONTATO (fake submit)
// ================================
const contactForm = document.querySelector('.contact-form');

if(contactForm){
  contactForm.addEventListener('submit', e => {
    e.preventDefault(); // impede envio real
    alert('Thank you for reaching out! I will contact you soon.');
    contactForm.reset();
  });
}

document.querySelector('.contact-form').addEventListener('submit', function() {
  alert('Mensagem enviada! Obrigado 😊');
});

