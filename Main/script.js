// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#8b5cf6', '#ec4899', '#06b6d4']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#8b5cf6',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Typewriter Effect
document.addEventListener('DOMContentLoaded', function() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    
    typewriterElements.forEach(element => {
        const text = element.getAttribute('data-text');
        if (text) {
            new Typed(element, {
                strings: [text],
                typeSpeed: 100,
                backSpeed: 50,
                loop: false,
                showCursor: true,
                cursorChar: '|'
            });
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background on Scroll
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

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Initialize counter animation
animateCounters();

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

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-background');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add loading animation to elements
function addLoadingAnimation() {
    const elements = document.querySelectorAll('.service-card, .portfolio-card, .stat-item');
    
    elements.forEach((element, index) => {
        element.classList.add('loading');
        setTimeout(() => {
            element.classList.add('loaded');
        }, index * 100);
    });
}

// Initialize loading animations
window.addEventListener('load', addLoadingAnimation);

// Hover Effects for Service Cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) rotateY(5deg)';
        this.style.boxShadow = '0 25px 50px rgba(139, 92, 246, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Portfolio Card Hover Effects
document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const overlay = this.querySelector('.portfolio-overlay');
        const playButton = this.querySelector('.portfolio-play');
        
        overlay.style.opacity = '1';
        playButton.style.transform = 'scale(1.2) rotate(180deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        const overlay = this.querySelector('.portfolio-overlay');
        const playButton = this.querySelector('.portfolio-play');
        
        overlay.style.opacity = '0';
        playButton.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add glow effect on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.service-card, .portfolio-card, .stats-container');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            element.classList.add('glow');
        } else {
            element.classList.remove('glow');
        }
    });
});

// Mobile Menu Close on Link Click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

// Add random floating elements
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        element.className = 'floating-particle';
        element.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: linear-gradient(45deg, #8b5cf6, #ec4899);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            opacity: 0.7;
        `;
        
        container.appendChild(element);
    }
}

// CSS for floating particles
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.7;
        }
        25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
            opacity: 1;
        }
        50% {
            transform: translateY(-40px) translateX(-10px) rotate(180deg);
            opacity: 0.5;
        }
        75% {
            transform: translateY(-20px) translateX(15px) rotate(270deg);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Initialize floating elements
createFloatingElements();

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

console.log('🚀 Websynq - Animated Website Loaded Successfully!');