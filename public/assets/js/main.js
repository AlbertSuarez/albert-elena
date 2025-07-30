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

// Form Submission with Formspree
function handleFormSubmission(e) {
    e.preventDefault();
    
    // Get form data and trim all string values
    const originalFormData = new FormData(rsvpForm);
    const data = Object.fromEntries(originalFormData);
    
    // Trim all string values
    const trimmedData = {};
    for (const [key, value] of Object.entries(data)) {
        trimmedData[key] = typeof value === 'string' ? value.trim() : value;
    }
    
    // Update form fields with trimmed values
    for (const [key, value] of Object.entries(trimmedData)) {
        const field = rsvpForm.querySelector(`[name="${key}"]`);
        if (field && typeof value === 'string') {
            field.value = value;
        }
    }
    
    // Create new FormData with trimmed values
    const formData = new FormData();
    for (const [key, value] of Object.entries(trimmedData)) {
        formData.append(key, value);
    }
    
    // Basic validation (using trimmed data)
    if (!trimmedData.name || !trimmedData.email || !trimmedData.phone) {
        showNotification('Si us plau, ompliu tots els camps obligatoris.', 'error');
        return;
    }
    
    // Email validation
    const emailInput = document.getElementById('email');
    if (!validateEmailField(emailInput)) {
        showNotification('Si us plau, introduïu un correu electrònic vàlid (exemple@correu.com)', 'error');
        return;
    }
    
    // Phone validation
    const phoneInput = document.getElementById('phone');
    if (!validatePhoneField(phoneInput)) {
        showNotification('Si us plau, introduïu un número de telèfon vàlid (mínim 9 dígits)', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = rsvpForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviant...';
    submitBtn.disabled = true;
    
    // Submit to Formspree
    fetch(rsvpForm.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        // Handle successful responses (200-299)
        if (response.ok) {
            showNotification('Gràcies per la vostra confirmació!', 'success');
            rsvpForm.reset();
            
            // Redirect to thank you page after a short delay
            setTimeout(() => {
                window.location.href = 'thank-you.html';
            }, 1500);
        } else {
            // Handle error responses (400, 403, 500, etc.)
            return response.json().then(data => {
                console.error('Formspree error:', data);
                
                // Check for specific Formspree errors
                if (data.error && data.error.includes('reCAPTCHA')) {
                    showNotification('Error: reCAPTCHA està activat. Si us plau, desactiveu-lo a la configuració de Formspree o contacteu amb nosaltres.', 'error');
                } else if (data.error && data.error.includes('AJAX')) {
                    showNotification('Error: Configuració de Formspree incorrecta. Si us plau, contacteu amb nosaltres.', 'error');
                } else if (data.errors) {
                    showNotification('Hi ha hagut un error en el formulari. Si us plau, reviseu els camps i intenteu-ho de nou.', 'error');
                } else {
                    showNotification(`Error ${response.status}: ${data.error || 'Hi ha hagut un error. Si us plau, intenteu-ho de nou.'}`, 'error');
                }
            }).catch(() => {
                // If we can't parse the JSON response
                showNotification(`Error ${response.status}: Hi ha hagut un error. Si us plau, intenteu-ho de nou.`, 'error');
            });
        }
    })
    .catch(error => {
        console.error('Network error:', error);
        showNotification('Hi ha hagut un error de connexió. Si us plau, intenteu-ho de nou.', 'error');
    })
    .finally(() => {
        // Restore button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
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

// Email validation helper function
function validateEmailField(emailInput) {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Update the input field with trimmed value
    emailInput.value = emailValue;
    
    if (emailValue && !emailRegex.test(emailValue)) {
        emailInput.setCustomValidity('Si us plau, introduïu un correu electrònic vàlid (exemple@correu.com)');
        emailInput.classList.add('invalid');
        return false;
    } else {
        emailInput.setCustomValidity('');
        emailInput.classList.remove('invalid');
        return true;
    }
}

// Utility function to trim input field value
function trimInputField(input) {
    if (input && typeof input.value === 'string') {
        input.value = input.value.trim();
    }
}

// Phone validation helper function
function validatePhoneField(phoneInput) {
    const phoneValue = phoneInput.value.trim();
    
    // Update the input field with trimmed value
    phoneInput.value = phoneValue;
    
    // Remove all non-digit characters to count actual digits
    const digitsOnly = phoneValue.replace(/\D/g, '');
    
    // Check if phone is required and empty
    if (!phoneValue) {
        phoneInput.setCustomValidity('El número de telèfon és obligatori');
        phoneInput.classList.add('invalid');
        return false;
    }
    
    // Check minimum length (9 digits for Spanish phones)
    if (digitsOnly.length < 9) {
        phoneInput.setCustomValidity('El número de telèfon ha de tenir almenys 9 dígits');
        phoneInput.classList.add('invalid');
        return false;
    }
    
    // Check maximum length (15 digits is international standard)
    if (digitsOnly.length > 15) {
        phoneInput.setCustomValidity('El número de telèfon no pot tenir més de 15 dígits');
        phoneInput.classList.add('invalid');
        return false;
    }
    
    // Check for valid characters (digits, spaces, +, -, (, ))
    const phoneRegex = /^[0-9\s\+\-\(\)]+$/;
    if (!phoneRegex.test(phoneValue)) {
        phoneInput.setCustomValidity('El número de telèfon conté caràcters no vàlids');
        phoneInput.classList.add('invalid');
        return false;
    }
    
    // All validations passed
    phoneInput.setCustomValidity('');
    phoneInput.classList.remove('invalid');
    return true;
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
        
        // Phone number input formatting and validation
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            // Real-time validation on blur
            phoneInput.addEventListener('blur', function(e) {
                validatePhoneField(e.target);
            });
            
            // Input formatting and real-time validation
            let phoneValidationTimeout;
            phoneInput.addEventListener('input', function(e) {
                // Remove any non-numeric characters except +, -, (, ), and spaces
                let value = e.target.value.replace(/[^0-9\+\-\(\)\s]/g, '');
                e.target.value = value;
                
                // Clear custom validity message when user starts typing
                e.target.setCustomValidity('');
                e.target.classList.remove('invalid');
                
                // Clear any existing timeout
                clearTimeout(phoneValidationTimeout);
                
                // Validate after user stops typing for 500ms
                phoneValidationTimeout = setTimeout(() => {
                    if (e.target.value.trim()) {
                        validatePhoneField(e.target);
                    }
                }, 500);
            });
            
            phoneInput.addEventListener('keypress', function(e) {
                // Allow only numbers, +, -, (, ), space, and control keys
                const allowedChars = /[0-9\+\-\(\)\s]/;
                const controlKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
                
                if (!allowedChars.test(e.key) && !controlKeys.includes(e.key)) {
                    e.preventDefault();
                }
            });
            
            // Prevent form submission with invalid phone
            phoneInput.addEventListener('invalid', function(e) {
                e.preventDefault();
                validatePhoneField(e.target);
                showNotification('Si us plau, introduïu un número de telèfon vàlid (mínim 9 dígits)', 'error');
            });
        }
        
        // Email validation
        const emailInput = document.getElementById('email');
        if (emailInput) {
            // Real-time validation on blur
            emailInput.addEventListener('blur', function(e) {
                validateEmailField(e.target);
            });
            
            // Real-time validation on input (with debounce)
            let emailValidationTimeout;
            emailInput.addEventListener('input', function(e) {
                // Clear custom validity message when user starts typing
                e.target.setCustomValidity('');
                
                // Clear any existing timeout
                clearTimeout(emailValidationTimeout);
                
                // Validate after user stops typing for 500ms
                emailValidationTimeout = setTimeout(() => {
                    if (e.target.value.trim()) {
                        validateEmailField(e.target);
                    }
                }, 500);
            });
            
            // Prevent form submission with invalid email
            emailInput.addEventListener('invalid', function(e) {
                e.preventDefault();
                validateEmailField(e.target);
                showNotification('Si us plau, introduïu un correu electrònic vàlid (exemple@correu.com)', 'error');
            });
        }
        
        // Add automatic trimming to all text inputs and textareas
        const textInputs = rsvpForm.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
        textInputs.forEach(input => {
            input.addEventListener('blur', function(e) {
                trimInputField(e.target);
            });
        });
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
        hideNotification,
        validateEmailField,
        validatePhoneField,
        trimInputField
    };
} 