// Scroll Reveal Animation
const scrollReveal = () => {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal);

// Video Preview Hover Effect
document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('video').play();
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('video').pause();
    });
});