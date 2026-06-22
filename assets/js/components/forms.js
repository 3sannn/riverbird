

export function initForms() {
  bindFormSubmit('contact-form', 'Contact inquiry successfully submitted! We will reach out to you within 24 hours.');
  bindFormSubmit('inquiry-form', 'Business inquiry successfully received. A growth architect will contact you shortly.');
  bindFormSubmit('apply-form', 'Your application was successfully uploaded. Our recruitment cell will review it.');
}

function bindFormSubmit(formId, successMsg) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let hasError = false;

    form.querySelectorAll('.form-error-msg').forEach(el => el.remove());
    form.querySelectorAll('.form-input--error').forEach(el => el.classList.remove('form-input--error'));

    form.querySelectorAll('[required]').forEach(input => {
      if (!input.value.trim()) {
        hasError = true;
        input.classList.add('form-input--error');
        
        const err = document.createElement('span');
        err.className = 'form-error-msg';
        err.textContent = 'This field is required.';
        input.parentElement.appendChild(err);
      }
    });

    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput && emailInput.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        hasError = true;
        emailInput.classList.add('form-input--error');
        
        const err = document.createElement('span');
        err.className = 'form-error-msg';
        err.textContent = 'Please enter a valid email address.';
        emailInput.parentElement.appendChild(err);
      }
    }

    if (hasError) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';

    setTimeout(() => {
      
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;

      const successDiv = document.createElement('div');
      successDiv.className = 'form-success-msg fade-in';
      successDiv.textContent = successMsg;
      
      form.insertBefore(successDiv, form.firstChild);

      setTimeout(() => {
        successDiv.remove();
      }, 8000);
      
    }, 1500);
  });
}
