// const refs = {
//   addToFavoritesButton: document.querySelector(
//     '.exercise-modal-button__favorite'
//   ),
//   giveARatingButton: document.querySelector('.exercise-modal-button__rating'),
//   removeFromFavoritesButton: document.querySelector(
//     '.exercise-modal-button__remove'
//   ),
// };

// document.addEventListener('DOMContentLoaded', function () {
//   refs.addToFavoritesButton.addEventListener('click', function () {
//     refs.addToFavoritesButton.classList.add('is-hidden');
//     refs.giveARatingButton.classList.add('is-hidden');
//     refs.removeFromFavoritesButton.classList.remove('is-hidden');
//   });

//   refs.removeFromFavoritesButton.addEventListener('click', function () {
//     refs.addToFavoritesButton.classList.remove('is-hidden');
//     refs.giveARatingButton.classList.remove('is-hidden');
//     refs.removeFromFavoritesButton.classList.add('is-hidden');
//   });
// });
// ===============
// document.addEventListener('DOMContentLoaded', function () {
//   const favoriteButton = refs.addToFavoritesButton;
//   const ratingButton = refs.giveARatingButton;
//   const customButton = document.querySelector('.exercise-modal-button__remove');

//   favoriteButton.addEventListener('click', function () {
//     // Логіка для додавання в обране
//     favoriteButton.classList.add('is-hidden');
//     ratingButton.classList.add('is-hidden');
//     customButton.classList.remove('is-hidden');
//   });

//   ratingButton.addEventListener('click', function () {
//     // Логіка для оцінки
//     favoriteButton.classList.add('is-hidden');
//     ratingButton.classList.add('is-hidden');
//     customButton.classList.remove('is-hidden');
//   });

//   customButton.addEventListener('click', function () {
//     // Логіка для нової кнопки
//     // Тут ви можете визначити, що відбувається при кліку на нову кнопку
//   });
// });

// import axios from 'axios';

import { fetchExercise } from './api';
import { renderExerciseModal } from './exercuse-modal-template';

const refs = {
  openModalBtn: document.querySelector('[data-exmod-open]'),
  closeModalBtn: document.querySelector('[data-exmod-close]'),
  modal: document.querySelector('[data-exmodal]'),
  modalContentContainer: document.querySelector('.exercise-modal__content'),
  addToFavoritesButton: document.querySelector(
    '.exercise-modal-button__favorite'
  ),
  giveARatingButton: document.querySelector('.exercise-modal-button__rating'),
  removeFromFavoritesButton: document.querySelector(
    '.exercise-modal-button__remove'
  ),
};

const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = `
      overflow:hidden;
      position:fixed;
      top: -${scrollController.scrollPosition}px;
      left:0;
      height:100vh;
      width:100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}
      `;
    document.documentElement.style.scrollBehavior = 'unset';
  },
  enabledScroll() {
    document.body.style.cssText = '';
    window.scroll({ top: scrollController.scrollPosition });
    document.documentElement.style.scrollBehavior = '';
  },
};
refs.openModalBtn.addEventListener('click', () => handleModal(true));
refs.closeModalBtn.addEventListener('click', () => handleModal(false));

function handleModal(open) {
  if (open) {
    openModal();
  } else {
    closeModal();
  }
}

async function openModal() {
  try {
    const data = await fetchExercise('64f389465ae26083f39b17a4');
    renderCard(data);
    scrollController.disabledScroll();
  } catch (error) {
    console.error('error.message');
  }
}

function renderCard(data) {
  const markup = renderExerciseModal(data);
  refs.modalContentContainer.innerHTML = markup;

  showButtons();
  refs.modal.classList.remove('is-hidden');
  document.addEventListener('keydown', event => closeModalOnEsc(event));
  // refs.modal.classList.remove('is-hidden');
  // document.addEventListener('keydown', closeModalOnEsc);
}

function closeModal() {
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', event => closeModalOnEsc(event));
  scrollController.enabledScroll();
  hideButtons();
}

function closeModalOnEsc(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

function showButtons() {
  refs.addToFavoritesButton.classList.remove('is-hidden');
  refs.giveARatingButton.classList.remove('is-hidden');
  refs.removeFromFavoritesButton.classList.add('is-hidden');
}

function hideButtons() {
  refs.addToFavoritesButton.classList.add('is-hidden');
  refs.giveARatingButton.classList.add('is-hidden');
  refs.removeFromFavoritesButton.classList.add('is-hidden');
}

// ====================

// export function addFavorite() {
//   return `Add to favorites
//                 <span>
//                   <svg class="modal-exercise-heart-icon">
//                       <use href="./img/icons.svg#icon-heart" width="18" height="18"></use>
//                   </svg>
//                 </span>`;
// }

// export function Remove() {
//   return `Remove from favorites
//                 <span>
//                   <svg class="modal-exercise-trash-icon">
//                       <use href="./img/icons.svg#icon-trash" width="20" height="20"></use>
//                   </svg>
//                 </span>`;
// }
