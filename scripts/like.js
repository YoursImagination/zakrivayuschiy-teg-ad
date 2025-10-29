/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = (event) => {
    event.preventDefault();
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
  };
});

likeButtonArray.forEach((button, index) => {
  button.onclick = (event) => {
    event.preventDefault();
    toggleIsLiked(likeHeartArray[index], button);
  };
});

// Получаем диалог один раз
const dialog = document.getElementById('dialog-id');

document.querySelector('.button-remember')?.addEventListener('click', (e) => {
  e.preventDefault();
  const dialog = document.getElementById('dialog-id');
  if (dialog) {
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.removeAttribute('hidden');
      dialog.style.display = 'block';
    }
  }
});

document.querySelector('.button-save')?.addEventListener('click', (e) => {
  e.preventDefault();
  const dialog = document.getElementById('dialog-id');
  if (dialog) {
    if (typeof dialog.close === 'function') {
      dialog.close();
    } else {
      dialog.style.display = 'none';
    }
  }
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  const textEl = button.querySelector('.button__text');
  if (!textEl) return;

  if (heart.classList.contains('is-liked')) {
    setTimeout(() => {
      textEl.textContent = 'Unlike';
    }, 500);
  } else {
    setTimeout(() => {
      textEl.textContent = 'Like';
    }, 500);
  }
}