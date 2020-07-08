//// Import animate.css CDN ////
const animate = document.createElement('link');
animate.rel = "stylesheet";
animate.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css";
document.head.appendChild(animate);

//// DOCUMENT ////
document.body.classList.add('animate__animated');
document.body.onload = () => document.body.classList.add('animate__fadeIn');

document.body.textContent.onselect = () => document.body.style.backgroundColor = "yellow";

//// LOGO ////
const logo = document.querySelector('h1');
logo.classList.add('animate__animated');
logo.addEventListener('click', () => {
    logo.style.color = "#FFD23F";
    logo.classList.toggle('animate__bounceInDown');
});

logo.addEventListener('mouseout', () => logo.style.color = "#000");


//// NAVs ////
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.style.padding = '12px';
});

navLinks.forEach(link => link.addEventListener('mouseover', () => {
    link.style.border = "1px dashed #FFD23F";
    link.style.borderRadius = "10px";
}));

navLinks.forEach(link => link.addEventListener('mouseout', () => {
    link.style.border = '0px'
}));

//// IMAGES ////
const images = document.querySelectorAll('img');
images[2].addEventListener('dblclick', () => {
    alert("I'M ON A BOAT!");
})

//// STRETCH ////
gsap.to(logo, {duration: 1, x: 300, backgroundColor: "#FFD23F"});