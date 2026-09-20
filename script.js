document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Navbar background on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when link clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').className = 'fa-solid fa-bars';
        });
    });

    // 3. Pricing Toggle (Monthly vs Annual)
    const billingToggle = document.getElementById('billingToggle');
    const priceValues = document.querySelectorAll('.price-value');
    const monthlyLabel = document.getElementById('monthlyLabel');
    const annualLabel = document.getElementById('annualLabel');

    billingToggle.addEventListener('change', () => {
        const isAnnual = billingToggle.checked;

        if (isAnnual) {
            monthlyLabel.classList.remove('active');
            annualLabel.classList.add('active');
        } else {
            annualLabel.classList.remove('active');
            monthlyLabel.classList.add('active');
        }

        priceValues.forEach(priceEl => {
            const monthlyPrice = priceEl.getAttribute('data-monthly');
            const annualPrice = priceEl.getAttribute('data-annual');

            // Quick fade transition effect
            priceEl.style.opacity = '0';
            setTimeout(() => {
                priceEl.textContent = isAnnual ? annualPrice : monthlyPrice;
                priceEl.style.opacity = '1';
            }, 150);
        });
    });

    // 4. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other accordion items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // 5. Newsletter Form Handling
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('emailInput');
        alert(`Thank you for signing up with: ${emailInput.value}!`);
        emailInput.value = '';
    });
});