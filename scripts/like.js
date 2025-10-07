const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

// Добавляем type="button" всем кнопкам лайков программно (на всякий случай)
likeButtonArray.forEach(button => {
  button.type = 'button';
});

iconButtonArray.forEach(button => {
  button.type = 'button';
});

iconButtonArray.forEach((iconButton, index) => {
  iconButton.addEventListener('click', (event) => {
    event.preventDefault();
    return false;
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
  });
});

likeButtonArray.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    return false;
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

// Обработчики для диалогов
const saveBtn = document.querySelector('.save-btn');
const dialog = document.getElementById('dialog-id');
const dialogOkBtn = document.querySelector('.dialog__button');

saveBtn.addEventListener('click', (event) => {
  event.preventDefault();
  return false;
  dialog.showModal();
});

dialogOkBtn.addEventListener('click', (event) => {
  event.preventDefault();
  return false;
  dialog.close();
});

// Глобальная защита от перезагрузки, господи помилуй
document.addEventListener('submit', (event) => {
  event.preventDefault();
  return false;
});

document.addEventListener('click', (event) => {
  if (event.target.closest('button') && !event.target.closest('form')) {
    event.preventDefault();
    return false;
  }
});