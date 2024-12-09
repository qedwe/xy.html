let items = document.querySelectorAll('.item');
let current = 0;
function showSlide() {
    items.forEach(item => {
        item.style.transform = `translateX(-${current * 100}%)`;
    });
    updateDots();
}

function prevSlide() {
    if (current > 0) {
        current--;
    } else {
        current = items.length - 1;
    }
    showSlide();
}

function nextSlide() {
    if (current < items.length - 1) {
        current++;
    } else {
        current = 0;
    }
    showSlide();
}

let timer = setInterval(nextSlide, 3000);

function pauseTimer() {
    clearInterval(timer);
}
function resumeTimer() {
    timer = setInterval(nextSlide, 3000);
}

document.getElementById('carousel').addEventListener('mouseover', pauseTimer);
document.getElementById('carousel').addEventListener('mouseout', resumeTimer);

let dots = document.querySelectorAll('.dots li');

function updateDots() {
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[current].classList.add('active');
}

function jumpToSlide(index) {
    current = index;
    showSlide();
    updateDots();
}