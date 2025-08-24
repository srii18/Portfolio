// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
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
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(5, 5, 5, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for Animations
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
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .education-card, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Enhanced Parallax Effect for Fractal Patterns
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const fractalPatterns = document.querySelectorAll('.fractal-pattern');
    
    fractalPatterns.forEach((pattern, index) => {
        const speed = 0.3 + (index * 0.15);
        const rotationSpeed = 0.05 + (index * 0.02);
        const yPos = -(scrolled * speed);
        const rotation = scrolled * rotationSpeed;
        const scale = 1 + Math.sin(scrolled * 0.001 + index) * 0.1;
        
        pattern.style.transform = `translateY(${yPos}px) rotate(${rotation}deg) scale(${scale})`;
    });
});

// Dynamic Fractal Pattern Generation
function createDynamicFractals() {
    const heroBackground = document.querySelector('.hero-background');
    
    // Create additional floating fractal elements
    for (let i = 0; i < 8; i++) {
        const fractal = document.createElement('div');
        fractal.className = 'dynamic-fractal';
        fractal.style.cssText = `
            position: absolute;
            width: ${20 + Math.random() * 60}px;
            height: ${20 + Math.random() * 60}px;
            border: 1px solid rgba(0, 212, 255, 0.3);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${10 + Math.random() * 20}s ease-in-out infinite;
            animation-delay: -${Math.random() * 20}s;
            opacity: 0.3;
            pointer-events: none;
        `;
        heroBackground.appendChild(fractal);
    }
}

// Add floating animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.3;
        }
        50% { 
            transform: translateY(-20px) rotate(180deg) scale(1.1);
            opacity: 0.6;
        }
    }
`;
document.head.appendChild(style);

// Typewriter Effect Enhancement
function enhanceTypewriter() {
    const typewriterElements = document.querySelectorAll('.typewriter, .typewriter-delay');
    
    typewriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        let i = 0;
        const typeSpeed = element.classList.contains('typewriter-delay') ? 100 : 80;
        
        function typeChar() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeChar, typeSpeed);
            }
        }
        
        if (element.classList.contains('typewriter-delay')) {
            setTimeout(typeChar, 1000);
        } else {
            typeChar();
        }
    });
}

// Initialize typewriter effect when page loads
document.addEventListener('DOMContentLoaded', enhanceTypewriter);

// Skill Tags Hover Effect
document.addEventListener('DOMContentLoaded', () => {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'scale(1.1) rotate(2deg)';
            tag.style.boxShadow = '0 5px 15px rgba(0, 212, 255, 0.3)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'scale(1) rotate(0deg)';
            tag.style.boxShadow = 'none';
        });
    });
});

// Project Cards Click Enhancement
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Add click feedback
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = 'translateY(-10px)';
            }, 150);
        });
    });
});

// Scroll Progress Indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #00d4ff, #00ff88);
        z-index: 1001;
        transition: width 0.1s ease;
        box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', createScrollProgress);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Enhanced hover effects for buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Fractal logo animation
document.addEventListener('DOMContentLoaded', () => {
    const fractalLogo = document.querySelector('.fractal-logo');
    
    if (fractalLogo) {
        fractalLogo.addEventListener('mouseenter', () => {
            fractalLogo.style.transform = 'rotate(180deg) scale(1.1)';
            fractalLogo.style.transition = 'transform 0.6s ease';
        });
        
        fractalLogo.addEventListener('mouseleave', () => {
            fractalLogo.style.transform = 'rotate(0deg) scale(1)';
        });
    }
});

// Smooth reveal animation for sections
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrolled = window.pageYOffset;
        
        if (scrolled + windowHeight > sectionTop + 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

// Initialize section reveal
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    window.addEventListener('scroll', revealSections);
    revealSections(); // Initial check
    
    // Initialize dynamic fractals
    createDynamicFractals();
});

// Mouse movement effect for fractal patterns
document.addEventListener('mousemove', (e) => {
    const fractalPatterns = document.querySelectorAll('.fractal-pattern');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    fractalPatterns.forEach((pattern, index) => {
        const moveX = (mouseX - 0.5) * (20 + index * 5);
        const moveY = (mouseY - 0.5) * (20 + index * 5);
        
        pattern.style.transform += ` translate(${moveX}px, ${moveY}px)`;
    });
});

// Add particle effect
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -3;
        overflow: hidden;
    `;
    
    document.body.appendChild(particleContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: ${Math.random() > 0.5 ? '#00d4ff' : '#00ff88'};
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: particleFloat ${10 + Math.random() * 20}s linear infinite;
            animation-delay: -${Math.random() * 20}s;
            opacity: 0.3;
        `;
        particleContainer.appendChild(particle);
    }
}

// Add particle animation keyframes
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
        }
        50% {
            opacity: 0.6;
        }
        100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles);
