// script.js
const wrapper = document.querySelector('.wrapper');
const starsContainer = document.getElementById('stars');

// Toggle the open state
wrapper.addEventListener('click', () => {
    wrapper.classList.toggle('open');
});

// Create elegant background twinkles
for (let i = 0; i < 40; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 4 + 2 + 'px';
    star.style.width = size;
    star.style.height = size;
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsContainer.appendChild(star);
}

// Stardust Cursor Effect
window.addEventListener('mousemove', (e) => {
    const spark = document.createElement('div');
    spark.className = 'star';
    spark.style.width = '4px';
    spark.style.height = '4px';
    spark.style.backgroundColor = '#ffc2e2'; // Pink spark
    spark.style.left = e.clientX + 'px';
    spark.style.top = e.clientY + 'px';
    spark.style.filter = 'blur(2px)';
    
    document.body.appendChild(spark);

    spark.animate([
        { opacity: 1, transform: 'scale(1) translateY(0)' },
        { opacity: 0, transform: 'scale(0) translateY(20px)' }
    ], { duration: 1000 });

    setTimeout(() => spark.remove(), 1000);
});