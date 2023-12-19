const vdo = document.getElementById('backVdo');
const main = document.querySelector('main');
setTimeout(() => {
    main.style.backdropFilter = 'blur(5px)';
}, 2000);

vdo.playbackRate = 2;
