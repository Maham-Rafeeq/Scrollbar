const track = document.querySelector('.carasoul-main');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');

function getScrollAmount() {
    if (window.innerWidth <= 480) return 200;  // 170 + 20
    if (window.innerWidth <= 767) return 220;  // 200 + 20
    return 270;                                 // 250 + 20
}

nextBtn.addEventListener('click', () => {
    track.scrollLeft += getScrollAmount();
});

prevBtn.addEventListener('click', () => {
    track.scrollLeft -= getScrollAmount();
});