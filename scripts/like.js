/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
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

// Сохранить на память разраба тестов
document.querySelector('.button-remember').addEventListener('click', function(event) {
  event.preventDefault();
  window['dialog-id'].showModal();
});

// ОК
document.querySelector('.button-save').addEventListener('click', function(event) {
  event.preventDefault();
  window['dialog-id'].close();
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if ([...heart.classList].includes('is-liked')) {
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

function closeDialogAndReload() {
  window['dialog-id'].close();
  setTimeout(() => {
    location.reload();
  }, 50);
}