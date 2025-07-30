// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
});

// Create simple floating elements for contact header
function createFloatingElements() {
    const container = document.querySelector('.contact-floating-elements');
    
    for (let i = 0; i < 8; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        
        // Random size between 10px and 40px
        const size = 10 + Math.random() * 30;
        
        element.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 6}s;
        `;
        
        container.appendChild(element);
    }
}

// Initialize floating elements
createFloatingElements();

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('.submit-btn');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        
        // Simulate form submission (replace with actual AJAX call)
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            submitBtn.classList.add('success');
            
            // Show success modal
            setTimeout(() => {
                const successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show();
                
                // Reset form and button
                contactForm.reset();
                setTimeout(() => {
                    submitBtn.classList.remove('success');
                }, 1000);
            }, 1000);
        }, 2000);
    });
});

// Form input animations
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// GSAP Animations for enhanced effects
gsap.registerPlugin(ScrollTrigger);

// Animate form fields on scroll
gsap.utils.toArray('.form-group').forEach((field, i) => {
    gsap.from(field, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: field,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        delay: i * 0.1
    });
});

// Animate contact info items
gsap.utils.toArray('.contact-info-item').forEach((item, i) => {
    gsap.from(item, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        delay: i * 0.2
    });
});

// Animate social links
gsap.from('.social-link', {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.social-links',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});

// Animate map reveal
gsap.from('.map-container', {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.map-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});

// Animate FAQ items
gsap.utils.toArray('.accordion-item').forEach((item, i) => {
    gsap.from(item, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none none'
        },
        delay: i * 0.1
    });
});

// Animate CTA section
gsap.from('.cta-container', {
    scale: 0.9,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    // Your scroll handling code here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

console.log('🚀 WebSynq - Contact Page Loaded Successfully!');