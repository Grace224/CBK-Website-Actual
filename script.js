// get the navigation links and add event listeners to them
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // prevent the default link behavior
    event.preventDefault();
    // get the target page
    const targetPage = link.getAttribute('href');
    // scroll to the target page
    document.querySelector(targetPage).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// get the form element and add event listener to it
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (event) => {
  // prevent the form from submitting
  event.preventDefault();
  // send the form data to the server
  const formData = new FormData(contactForm);
  fetch('/submit-form', {
    method: 'POST',
    body: formData
  })
  .then((response) => {
    if (response.ok) {
      // show a success message to the user
      alert('Your message has been sent successfully!');
      // reset the form fields
      contactForm.reset();
    } else {
      // show an error message to the user
      alert('An error occurred while sending your message.');
    }
  })
  .catch((error) => {
    // show an error message to the user
    alert('An error occurred while sending your message.');
  });
});
