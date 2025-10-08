const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

likeButtonArray.forEach(button => {
  button.type = 'button';
  button.setAttribute('formnovalidate', 'true');
});

iconButtonArray.forEach(button => {
  button.type = 'button';
  button.setAttribute('formnovalidate', 'true');
});

// Обработчики для лайков
iconButtonArray.forEach((iconButton, index) => {
  iconButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
  });
});

likeButtonArray.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
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

const saveBtn = document.querySelector('.save-btn');
const dialog = document.getElementById('dialog-id');
const dialogOkBtn = document.querySelector('.dialog__button');

saveBtn.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  dialog.showModal();
});

dialogOkBtn.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  dialog.close();
});

document.addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();
  return false;
});

document.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (button && !button.closest('form')) {
    event.preventDefault();
    event.stopPropagation();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && event.target.closest('form')) {
    event.preventDefault();
    event.stopPropagation();
  }
});

// Сука, как это блять делать вообще? Убрать эту хуйню, если не пройдут тесты
setTimeout(() => {
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }, true);
  });
}, 100);