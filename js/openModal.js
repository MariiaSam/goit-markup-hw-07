import { fetchExercise } from '../api';
import { renderExerciseModal } from './exercise-modal-template';
import { addClass, removeClass } from '../components/fn-helpers';
import { scrollController } from '../scrolls';

const refs = {
  openModalBtn: document.querySelector('[data-exmod-open]'),
  closeModalBtn: document.querySelector('[data-exmod-close]'),
  openModalExStart: document.querySelector(openModalBtn),
  modal: document.querySelector('[data-exmodal]'),
  modalContentContainer: document.querySelector('.exercise-modal__content'),
  modalBackdrop: document.querySelector('.js-backdrop'),
};

// refs.modalBackdrop.addEventListener('click', e => {
//   if (e.target === e.currentTarget) {
//     addClass(refs.modal, 'is-hidden');
//     scrollController.enabledScroll();
//   }
// });

refs.openModalBtn.addEventListener('click', handleModalOpen);
refs.closeModalBtn.addEventListener('click', closeModal);

async function handleModalOpen() {
  try {
    const data = await fetchExercise('64f389465ae26083f39b17a4');
    renderCard(data);
    scrollController.disabledScroll();
  } catch (error) {
    console.error(error.message);
  }
}

// +++++++++++++++++++++++++++++++++++++

function catInputHandler(e) {
  let filterInput = catFilterInput.value.toLowerCase().trim('');
  const filteredExercises = respFilterAll.filter(({ name }) =>
    name.includes(filterInput)
  );
  const markupNotFound = `<span class='exer-not-found'>Sorry, there is no data matching your search query.</span>`;
  catsList.innerHTML =
    filteredExercises.length === 0
      ? markupNotFound
      : createExercisesMarkup(filteredExercises);

  const exercisesList = document.querySelector('.exercises-list');

  exercisesList.addEventListener('click', exericesModalBtn);
}
// ++++++++++++++++++++++++++++++++
  const exercisesList = document.querySelector('.exercises-list');// в список вправ

  exercisesList.addEventListener('click', exericesModalBtn);

function exericesModalBtn(e) {
  const nodeName = e.target.nodeName;

  if (nodeName === 'BUTTON' || nodeName === 'svg' || nodeName === 'use') {
    const dataId = e.target.closest('.exercises__item-card').dataset.dataId;
    handleModalOpen(e, dataId);
  }
}

// start - data-exmod-open;
// exercises__item-card додати 
//датаСет data-id="${_id}"

//   const exercisesList = document.querySelector('.exercises-list');

//   exercisesList.addEventListener('click', exericesModalBtn);

// +++++++++++++++++++++++++++++++++
const refs = {
  openModalBtn: document.querySelector('[data-exmod-open]'),
  closeModalBtn: document.querySelector('[data-exmod-close]'),
  modal: document.querySelector('[data-exmodal]'),
  modalContentContainer: document.querySelector('.exercise-modal__content'),
    modalBackdrop: document.querySelector('.js-backdrop'),
    const openModalExerciseBtnRef = document.querySelector(handleModalOpen);
};

export async function handleModalOpen(dataId = '64f389465ae26083f39b17a4') {
  let data = {};
  try {
    data = await fetchExercise(dataId);
    renderCard(data);
    scrollController.disabledScroll();
  } catch (error) {
    console.error(error.message);
  }
}




function btnOpen(page) {
  refs.exercises.innerHTML = createMarkupExercises(page);
  const exericesOpenBtns = document.querySelectorAll(
    '[data-modal-exercise="open"]'
  );
  exericesOpenBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      const exerciseId = event.currentTarget.closest('.favor-exercises-card')
        .dataset.id;
      handleOpenModalClick(event, exerciseId);
    });
  });
}


const openModalSelector = '[data-modal-exercise="open"]';
const closeModalSelector = '[data-modal-exercise="close"]';

openModalExerciseBtnRef.addEventListener('click', handleOpenModalClick);



// function Open(page) {
//   refs.exercises.innerHTML = returnMarkup(page);
//   const exericesOpenBtns = document.querySelectorAll(
//     '[data-exmod-open]'
//   );
//   exericesOpenBtns.forEach(btn => {
//     btn.addEventListener('click', event => {
//       const dataId = event.currentTarget.closest('.card')
//         .dataset.id;
//       handleOpenModalClick(event, dataId);
//     });
//   });
// }

function ExerciseOpenBtn(e) {

  e.preventDefault();
  const exerciseLink = e.target.closest('.card');
  if (!exerciseLink) {
    return;
  }

  fetchExercise('64f389465ae26083f39b17a4').then( => {
   renderCard(data);
  });

  handleModalOpen();
}