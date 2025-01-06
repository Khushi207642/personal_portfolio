// Add hover effects for rotating cards
function rotateCard(card) {
  const cardInner = card.querySelector('.card-inner');
  cardInner.style.transform = 'rotateY(180deg)';
}

function resetCard(card) {
  const cardInner = card.querySelector('.card-inner');
  cardInner.style.transform = 'rotateY(0deg)';
}

// Handle Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting me! I will get back to you soon.');
});