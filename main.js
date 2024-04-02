document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.classList.add('hidden');
  } else {
    console.error('Modal element not found!');
  }

  const hearts = document.querySelectorAll('.like-glyph');
  hearts.forEach(heart => {
    heart.addEventListener('click', function() {
      mimicServerCall()
        .then(() => {
          // Success response
          heart.innerText = FULL_HEART;
          heart.classList.add('activated-heart');
        })
        .catch(error => {
          // Error response
          const modalMessage = document.getElementById('modal-message');
          modalMessage.innerText = error;
          modal.classList.remove('hidden');
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 3000);
        });
    });
  });

});

const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Mock server call
function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
