import { fetchExercise } from './api';
import { renderExerciseModal } from './exercise-modal-create';
import { initializeModal } from './exercise-modal-initializeModal';

const modalEl = document.querySelector('.exercise-modal__content');

async function openModalEx(e) {
  let data = await fetchExercise(id);
  if (e.target.classList.contains('js-card-button')) {
    data = await fetchExercise(id);
  }
  modalEl.innerHTML = markup;
}

openModalEx();

// ====================

import axios from 'axios';

import { fetchExercise } from './api';
import { renderExerciseModal } from './exercuse-modal-template';

const modalContentContainer = document.querySelector(
  '.exercise-modal__content'
);

const refs = {
  openModalBtn: document.querySelector('[data-exmod-open]'),
  closeModalBtn: document.querySelector('[data-exmod-close]'),
  modal: document.querySelector('[data-exmodal]'),
};

refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);

function openModal() {
  refs.modal.classList.remove('is-hidden');
  document.addEventListener('keydown', closeModalOnEsc);
}

function closeModal() {
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', closeModalOnEsc);
}

function closeModalOnEsc(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

renderCard();
async function renderCard() {
  const data = await fetchExercise('64f389465ae26083f39b17a4');
  const markup = renderExerciseModal(data);
  modalContentContainer.innerHTML = markup;
}

// ==============================
