

// Simple interactivity for GS Bakers
document.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      const open = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Simple form handling / validation
  const form = document.getElementById('order-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = form.querySelector('#name').value.trim();
      const contact = form.querySelector('#contact-input').value.trim();
      const message = form.querySelector('#message').value.trim();

      if (!name || !contact || !message) {
        status.textContent = 'Please complete all fields before submitting.';
        status.style.color = 'crimson';
        return;
      }

      // Simulate sending (replace with real submit or API call)
      status.textContent = 'Sending your request...';
      status.style.color = 'var(--muted)';
      setTimeout(function () {
        status.textContent = 'Thanks, ' + (name.split(' ')[0] || name) + '! We received your request and will contact you soon.';
        status.style.color = 'green';
        form.reset();
      }, 900);
    });
  }
});
