const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const cls = document.getElementById('close');
const mainImg = document.getElementById('mainImg');
const smImg = document.getElementsByClassName('smImg');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (cls) {
    cls.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

if (smImg[0]) {
    smImg[0].addEventListener('click', () => {
        mainImg.src = smImg[0].src;
    });
}
if (smImg[1]) {
    smImg[1].addEventListener('click', () => {
        mainImg.src = smImg[1].src;
    });
}
if (smImg[2]) {
    smImg[2].addEventListener('click', () => {
        mainImg.src = smImg[2].src;
    });
}
if (smImg[3]) {
    smImg[3].addEventListener('click', () => {
        mainImg.src = smImg[3].src;
    });
}