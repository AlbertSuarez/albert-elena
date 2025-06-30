// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const faqQuestions = document.querySelectorAll('.faq-question');
const rsvpForm = document.getElementById('rsvpForm');

// Mobile Navigation Toggle
function toggleMobileNav() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Close mobile nav when clicking on a link
function closeMobileNav() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// FAQ Accordion
function toggleFAQ(question) {
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
}

// Form Submission
function handleFormSubmission(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(rsvpForm);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.guests) {
        showNotification('Si us plau, ompliu tots els camps obligatoris.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Si us plau, introduïu un correu electrònic vàlid.', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Gràcies per la vostra confirmació! Rebreu un correu de confirmació aviat.', 'success');
    
    // Reset form
    rsvpForm.reset();
    
    // In a real application, you would send this data to a server
    console.log('Form data:', data);
}

// Show notification
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 
            'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : 
            'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
        }
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => hideNotification(notification));
}

// Hide notification
function hideNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 300);
}

// Smooth scroll for navigation links
function smoothScrollToSection(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // Close mobile nav if open
        closeMobileNav();
    }
}

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
        });
    }
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.info-card, .timeline-item, .faq-item');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// Initialize countdown (optional feature)
function initCountdown() {
    const weddingDate = new Date('2026-04-11T12:30:00');
    const countdownElement = document.querySelector('.countdown');
    
    if (countdownElement) {
        function updateCountdown() {
            const now = new Date();
            const difference = weddingDate - now;
            
            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                
                countdownElement.innerHTML = `
                    <div class="countdown-item">
                        <span class="countdown-number">${days}</span>
                        <span class="countdown-label">Dies</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${hours}</span>
                        <span class="countdown-label">Hores</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${minutes}</span>
                        <span class="countdown-label">Minuts</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${seconds}</span>
                        <span class="countdown-label">Segons</span>
                    </div>
                `;
            } else {
                countdownElement.innerHTML = '<h3>¡Ja és el gran dia!</h3>';
            }
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileNav);
    }
    
    // Navigation links
    document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
        link.addEventListener('click', smoothScrollToSection);
    });
    
    // FAQ accordion
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => toggleFAQ(question));
    });
    
    // Form submission
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', handleFormSubmission);
    }
    
    // Scroll events
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Initialize features
    lazyLoadImages();
    animateOnScroll();
    initCountdown();
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            closeMobileNav();
        }
    });
    
    // Close mobile nav on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileNav();
        }
    });
});

// Additional utility functions
function debounce(func, wait) {
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

// Optimized scroll handler
const optimizedScrollHandler = debounce(handleNavbarScroll, 10);
window.addEventListener('scroll', optimizedScrollHandler);

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'assets/images/albert-elena.png',
        'assets/images/mas-muxach.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadImages();

// Service Worker registration (for offline functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleMobileNav,
        closeMobileNav,
        toggleFAQ,
        handleFormSubmission,
        showNotification,
        hideNotification
    };
} 