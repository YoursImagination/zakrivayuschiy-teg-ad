/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/
document.addEventListener('DOMContentLoaded', () => {
  const likeHeartArray = document.querySelectorAll('.like-icon');
  const likeButtonArray = document.querySelectorAll('.card__like-button');
  const iconButtonArray = document.querySelectorAll('.card__icon-button');

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

  // Диалог: Сохранить на память
  const rememberBtn = document.querySelector('.button-remember');
  const saveBtn = document.querySelector('.button-save');

  if (rememberBtn) {
    rememberBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const dialog = document.getElementById('dialog-id');
      if (dialog && typeof dialog.showModal === 'function') {
        dialog.showModal();
      }
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const dialog = document.getElementById('dialog-id');
      if (dialog && typeof dialog.close === 'function') {
        dialog.close();
      }
    });
  }

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
});