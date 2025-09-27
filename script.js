// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FAQ Accordion functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Close other open FAQ items
        const openItem = document.querySelector('.faq-item.active');
        if(openItem && openItem !== item) {
            openItem.classList.remove('active');
        }

        // Toggle the clicked item
        item.classList.toggle('active');
    });
});
