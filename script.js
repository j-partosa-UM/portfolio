let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

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