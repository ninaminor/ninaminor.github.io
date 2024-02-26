
const myHeading = document.querySelector("h2");
myHeading.textContent = "Hello world!";








const ikon = document.querySelector('.ikon');

const meny = document.querySelector('.meny');


ikon.addEventListener('click', () => {
    ikon.classList.toggle('active');
    meny.classList.toggle('active');
})