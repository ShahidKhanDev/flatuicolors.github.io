// welcome message hide
let closeBtn = document.querySelector('.close');
let welcomeContainer = document.querySelector('.welcome-container');

closeBtn.addEventListener('click', () => {
  welcomeContainer.style.display = 'none';
  localStorage.setItem('hideWelcome', 1);
});

const hideWelcome = () => {
  let hideWelcome = localStorage.getItem('hideWelcome');
  if (hideWelcome == 1) {
    welcomeContainer.style.display = 'none';
  } else {
    welcomeContainer.style.display = 'inline-block';
  }
};

const visitCounter = () => {
  let visitCount = Number(localStorage.getItem('visitCount', 0));
  localStorage.setItem('visitCount', ++visitCount);
};

window.addEventListener('load', () => {
  hideWelcome();
  visitCounter();
});

// overlay background
let overlay = document.querySelector('.overlay');
let smallPalettes = document.querySelectorAll('.small-palette');

smallPalettes.forEach((smallPalette) => {
  smallPalette.addEventListener('click', () => {
    overlay.classList.add('animateRight');
  });
});
