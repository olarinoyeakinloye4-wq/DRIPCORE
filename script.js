const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const yearSpan = document.getElementById('year');
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const orderButtons = document.querySelectorAll('.product button');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const whatsappNumber = '2348078178186';
const supportEmail = 'dripcore53@gmail.com';

orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.product || 'this product';
    const message = `Hello, I want to order ${productName}. Please help me place my order.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });
});

if (form && formMessage) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements.namedItem('name')?.value.trim() || 'A visitor';
    const email = form.elements.namedItem('email')?.value.trim() || 'Not provided';
    const message = form.elements.namedItem('message')?.value.trim() || '';

    const subject = encodeURIComponent(`New message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`;
    formMessage.textContent = 'Your email app has opened. Please send the message to complete it.';
    form.reset();
  });
}
