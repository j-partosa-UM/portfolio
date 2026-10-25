let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

const typedEl = document.getElementById('typed-role');

if (typedEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const fullText = typedEl.textContent;

    const typeSpeed = 90;
    const deleteSpeed = 45;
    const holdAfterTyped = 1800;
    const holdAfterDeleted = 500;

    let i = 0;
    let isDeleting = false;

    typedEl.textContent = '';

    function typeLoop() {
        i += isDeleting ? -1 : 1;
        typedEl.textContent = fullText.slice(0, i);

        let delay = isDeleting ? deleteSpeed : typeSpeed;

        if (!isDeleting && i === fullText.length) {
            isDeleting = true;
            delay = holdAfterTyped;
        } else if (isDeleting && i === 0) {
            isDeleting = false;
            delay = holdAfterDeleted;
        }

        setTimeout(typeLoop, delay);
    }

    setTimeout(typeLoop, 600);
}

const scrollTopBtn = document.getElementById('scroll-top');

function toggleScrollTop() {
    scrollTopBtn.classList.toggle('show', window.scrollY > window.innerHeight * 0.5);
}

window.addEventListener('scroll', toggleScrollTop);
window.addEventListener('load', toggleScrollTop);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.onscroll = () => {
    let scrollPosition = window.scrollY + window.innerHeight;
    let documentHeight = document.documentElement.scrollHeight;

    sections.forEach((sec, idx) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // If it's the last section and we're at the bottom, always activate it
        if (
            (top >= offset && top < offset + height) ||
            (idx === sections.length - 1 && scrollPosition >= documentHeight)
        ) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelectorAll('nav ul li a[href*="' + id + '"]').forEach(activeLink => {
                activeLink.classList.add('active');
            });
        }
    });
};