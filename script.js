const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const cls = document.getElementById('close');

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