import { fetchExercise } from './api';
import { renderExerciseModal } from './exercise-modal-create';
import { initializeModal } from './exercise-modal-initializeModal';

const modalEl = document.querySelector('.exercise-modal__content');

async function openModalEx(e) {
  let data = await fetchExercise(id);
  if (e.target.classList.contains('js-card-button')) {
    data = await fetchExercise(id);
  }
  renderExerciseModal.insertAdjacentHTML('beforeend', modalEl);
}

openModalEx();
