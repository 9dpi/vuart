// ===== Slider Logic =====
const cards = document.querySelectorAll('.artwork-card');
const progressBar = document.getElementById('progressBar');
const currentSlide = document.getElementById('currentSlide');
const numbersList = document.getElementById('numbersList');

// Initialize numbers list
function initNumbers() {
    numbersList.innerHTML = '';
    cards.forEach((_, index) => {
        const span = document.createElement('span');
        span.textContent = index + 1;
        span.onclick = (e) => {
            e.stopPropagation();
            setActive(index);
        };
        numbersList.appendChild(span);
    });
}

function setActive(index) {
    // Remove active class from all cards and number spans
    cards.forEach(card => card.classList.remove('active'));
    const numberSpans = numbersList.querySelectorAll('span');
    numberSpans.forEach(span => span.classList.remove('active'));

    // Add active class to clicked card and number span
    cards[index].classList.add('active');
    if (numberSpans[index]) {
        numberSpans[index].classList.add('active');
    }

    // Update progress bar
    const progress = ((index + 1) / cards.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Update counter with leading zero
    currentSlide.textContent = (index + 1).toString().padStart(2, '0');

    // Disabled auto-scroll to prevent jumping
    /*
    cards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
    });
    */
}

// Initial set up
initNumbers();
window.addEventListener('load', () => {
    setActive(1); // Set second card as active by default
});

// ===== Image Loading Enhancement =====
const allImages = document.querySelectorAll('img');

allImages.forEach(img => {
    img.style.opacity = '1';
    img.addEventListener('error', function () {
        console.error('Image failed to load:', this.src);
    });
});

// ===== Console Message =====
console.log('%c🎨 CVQ Arts - Modern Exhibition', 'font-size: 20px; font-weight: bold; color: #E63946;');
