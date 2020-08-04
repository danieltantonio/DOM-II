//// Import animate.css CDN ////
const animate = document.createElement('link');
animate.rel = "stylesheet";
animate.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css";
document.head.appendChild(animate);

//// DOCUMENT ////
const container = document.querySelector('.home');
let busArr = [];

document.body.classList.add('animate__animated');
document.body.onload = () => document.body.classList.add('animate__fadeIn');
document.addEventListener('scroll', () => {
    document.body.style.backgroundColor = "#FFD23F"
});

window.onresize = () => {
    const flex = document.querySelector('.content-section');
    flex.style.flexDirection = "column";
}

document.addEventListener('keypress', (e) => {
    let keyPress = e.key.toLowerCase();
    if(keyPress === 'b' && busArr.length === 0) {
        busArr.push('b');
    } else if (keyPress === 'u' && busArr.length === 1) {
        busArr.push('u');
    } else if (keyPress === 's' && busArr.length === 2) {
        busArr.push('s');
        alert('USE PROMOCODE: "DESERTBUS" FOR 20% OFF~!!');
    } else {
        busArr = [];
    }
});

document.addEventListener('touchstart', () => {
    document.body.style.backgroundColor = "orange";
})

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

navLinks[1].addEventListener('focus', () => document.body.style.backgroundColor = "yellow");

//// IMAGES ////
const images = document.querySelectorAll('img');
images[2].addEventListener('dblclick', () => {
    alert("I'M ON A BOAT!");
});

images[0].addEventListener('drop', () => {
    alert('WE GOING ON A RIDE HOMIE!');
});

//// STRETCH ////
gsap.to(logo, {duration: 1, x: 300, backgroundColor: "#FFD23F"});

const welcome = document.querySelector('.welcome');
gsap.to(welcome, { duration: 1, x:300 });