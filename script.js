const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('header nav ul li a');



hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

const observerOptions = {
    threshold: 0.2 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            
            const currentId = entry.target.getAttribute('id');
            
            navItems.forEach(link => {
                
                link.classList.remove('active-link');
                
                if (link.getAttribute('href') === '#' + currentId) {
                    link.classList.add('active-link');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});
