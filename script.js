const stars = document.querySelectorAll('.star-rating label');
const message = document.getElementById('rating-message');
const threshold = 0.8;


document.addEventListener('DOMContentLoaded', (event) => {
    const starRatingContainer = document.querySelector('.js-star-rating');
    if (starRatingContainer) {
      starRatingContainer.style.display = 'block';
    }
});

stars.forEach((star, index) => {
  star.addEventListener('mouseenter', () => {
    const ratingValue = star.control.value;
    if (ratingValue / stars.length >= threshold) {
        message.textContent = `Thanks for ${ratingValue} star rating!`;
        message.style.display = 'block';
    } else {
        message.textContent = `Thanks for your feedback of ${ratingValue} stars. We will try to do better!`;
        message.style.display = 'block';
    }
  });

  star.addEventListener('mouseleave', () => {
    message.style.display = 'none';
  });
});

document.querySelector('.star-rating').addEventListener('change', (e) => {
  const rating = e.target.value;
  sendRating(rating);
  console.log(`Rating selected: ${rating}`);
});

function sendRating(rating) {
    const formData = new URLSearchParams();
    formData.append('rating', rating);
    formData.append('sentBy', 'js');
  
    fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Sent-By': 'JavaScript'
      },
      body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  }
  
