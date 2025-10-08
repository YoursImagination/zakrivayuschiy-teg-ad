// Хорошо, тяжёлая артиллерия к бою!
document.addEventListener('DOMContentLoaded', function() {
  const saveBtn = document.querySelector('.save-btn');
  const dialogOkBtn = document.querySelector('.dialog__button');
  const likeButtons = document.querySelectorAll('.card__like-button');
  const iconButtons = document.querySelectorAll('.card__icon-button');
  function replaceButtonWithSpan(button) {
    const span = document.createElement('span');
    span.innerHTML = button.innerHTML;
    span.className = button.className;
    span.style.cssText = button.style.cssText;
    for (let attr of button.attributes) {
      if (attr.name !== 'type') {
        span.setAttribute(attr.name, attr.value);
      }
    }
    span.style.cursor = 'pointer';
    button.parentNode.replaceChild(span, button);
    return span;
  }
  const newSaveBtn = replaceButtonWithSpan(saveBtn);
  const newDialogOkBtn = replaceButtonWithSpan(dialogOkBtn);
  newSaveBtn.addEventListener('click', function() {
    document.getElementById('dialog-id').showModal();
  });
  newDialogOkBtn.addEventListener('click', function() {
    document.getElementById('dialog-id').close();
  });
});

const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

likeButtonArray.forEach(button => {
  button.type = 'button';
});

iconButtonArray.forEach(button => {
  button.type = 'button';
});

iconButtonArray.forEach((iconButton, index) => {
  iconButton.addEventListener('click', (event) => {
    event.preventDefault();
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
  });
});

likeButtonArray.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    toggleIsLiked(likeHeartArray[index], button);
  });
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if (heart.classList.contains('is-liked')) {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Unlike'),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Like'),
      500
    );
  }
}