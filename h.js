const form = document.getElementById('contactForm');
const confirmation = document.getElementById('confirmationMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    confirmation.innerText = `Thank you, ${name}! Your message has been received.`;
    confirmation.style.color = 'green';
    form.reset();
  } else {
    confirmation.innerText = 'Please fill out all fields.';
    confirmation.style.color = 'red';
  }
});
