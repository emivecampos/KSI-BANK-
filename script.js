// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Tabs Functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// FAQ Functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// FAQ Category Filter
const faqCatButtons = document.querySelectorAll('.faq-cat-btn');
const faqItems = document.querySelectorAll('.faq-item');

faqCatButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        // Remove active class from all buttons
        faqCatButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter FAQ items
        faqItems.forEach(item => {
            const itemCategories = item.getAttribute('data-category');
            
            if (category === 'todas' || itemCategories.includes(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            empresa: document.getElementById('empresa').value,
            mensagem: document.getElementById('mensagem').value,
            termos: document.getElementById('termos').checked,
            novidades: document.getElementById('novidades').checked
        };
        
        // Validate terms checkbox
        if (!formData.termos) {
            alert('Por favor, aceite os Termos de Uso e Política de Privacidade.');
            return;
        }
        
        // Here you would typically send the data to a server
        console.log('Form data:', formData);
        
        // Show success message
        alert('Obrigado pelo seu interesse! Nossa equipe entrará em contato em breve.');
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.taxa-card, .produto-card, .funciona-card, .atendemos-card, .beneficio-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// WhatsApp button animation on scroll
const whatsappButton = document.querySelector('.whatsapp-float');
let whatsappVisible = false;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300 && !whatsappVisible) {
        whatsappButton.style.opacity = '1';
        whatsappButton.style.transform = 'scale(1)';
        whatsappVisible = true;
    } else if (window.pageYOffset <= 300 && whatsappVisible) {
        whatsappButton.style.opacity = '0';
        whatsappButton.style.transform = 'scale(0)';
        whatsappVisible = false;
    }
});

// Initialize WhatsApp button state
if (whatsappButton) {
    whatsappButton.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    if (window.pageYOffset <= 300) {
        whatsappButton.style.opacity = '0';
        whatsappButton.style.transform = 'scale(0)';
    }
}
