const left = document.querySelector('.left');
const right = document.querySelector('.right');
const section2 = document.querySelector('.section2');

left.addEventListener('mouseenter', () => {
    section2.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
    section2.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
    section2.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
    section2.classList.remove('hover-right');
});