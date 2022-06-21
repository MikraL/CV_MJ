const btn = document.querySelector('button');
const dunk = document.querySelector('.dunk');
const panier = document.querySelector('.panier');

let isVisible = false;
console.log(isVisible);

btn.addEventListener('click', () => {

    isVisible = !isVisible; 
       /* dunk MJ */
    isVisible ? dunk.classList.add('dunk2') : dunk.classList.remove('dunk2');
    isVisible ? panier.classList.add('panier2') : panier.classList.remove('panier2');
});